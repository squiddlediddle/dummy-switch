#!/usr/bin/env python3
"""
M0 — Bundle Builder for The Dummy Switch
========================================
Converts a pair of aligned Markdown documents (original + "for everyone")
into a paper bundle: structure.json + browser-ready bundle.js.

Alignment strategy:
  1. Sections: the two documents are split into top-level sections at H2
     headings. Sections are paired by their numbering ("1", "12", "A5",
     "O1", ...). Headings without numbers are matched by fuzzy name.
  2. Within a matched section, subsections (H3) are paired the same way.
  3. Content blocks are then aligned with Needleman-Wunsch dynamic
     programming (block-kind-aware text similarity). Because subsection
     headings anchor the alignment, everything between them "shifts"
     into its best match — extra paragraphs on either side become gaps
     instead of breaking the mapping.

Explained-edition format: the "everyone" draft is a block-for-block twin of
the technical one; blocks that really differ carry a leading ✳️***Explained:***
marker, which is stripped at build time. Unmarked blocks stay verbatim on
both sides (the reader keeps them unclickable).

Output (one file per paper, named by its id):
  structure-<id>.json  the bundle (human-inspectable; this is the spec)
  bundle-<id>.js       window.PAPER_BUNDLES["<id>"] = {...} (loads via
                       <script> from file:// with no server — add a
                       <script src="bundle-<id>.js"></script> tag to
                       index.html for every paper you want included)

Usage:
  python build_bundle.py                 # uses ../finals/*.md by default
  python build_bundle.py ORIG EVERY      # explicit pair
  python build_bundle.py "a.md" "b.md" --id the-theory  # force an id
"""

import argparse
import json
import re
import sys
from datetime import date
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
FINALS = BASE / "finals"
OUT = Path(__file__).resolve().parent

DEFAULTS = [
    str(next(FINALS.glob("*Draft v.3 (Re-worked Technical).md"))),
    str(next(FINALS.glob("*Draft v.4 (Re-worked Explained).md"))),
]

SKIPPED_SECTIONS = {"Document Control", "Working Titles"}

# Sections to exclude from the bundle, matched by exact number ("6.4") or by
# normalized heading text ("testable predictions"). The source drafts stay
# untouched — edit this set (or pass --drop on the command line) and rebuild.
# The re-worked v3/v4 pair template keeps EVERY numbered section (including
# 3 Related Frameworks and 10 Limitations and Open Questions); only an
# unnumbered "Keywords" tail is auto-dropped.
DROP_SECTIONS = {"keywords"}

DEFAULT_AUTHOR = "Squid"
DEFAULT_ID = "light-reality-cycle"

GAP = 0.10  # insertion/deletion penalty in the alignment


# --------------------------------------------------------------------------
# Text helpers
# --------------------------------------------------------------------------

def normalize(text: str) -> str:
    """Lowercase, strip markdown furniture, collapse whitespace."""
    t = text.lower()
    t = re.sub(r"[_*`>|#~]", " ", t)
    t = re.sub(r"[—–-]", " ", t)
    t = re.sub(r"\s+", " ", t)
    return t.strip()


# Explained-edition format (draft v.4 of the template): blocks whose "for
# everyone" rendering really differs carry a leading ✳️***Explained:*** marker.
# It is build-time only — stripped here so the blue panel shows the plain
# explanation text (the panel already IS the "explained" signal). Unmarked
# blocks stay verbatim on both sides and are not clickable in the reader.
# Matches the marker after an optional bullet/number prefix ("- ", "1. ") or
# a blockquote prefix ("> "), and tolerates 1–3 asterisks on either side.
MARKER_RE = re.compile(
    r"^(\s*(?:>\s*)?(?:[-*]|\d+\.)\s+)?✳️\*{1,3}[Ee]xplained:\*{1,3}\s*",
    re.MULTILINE,
)


def strip_markers(text: str) -> str:
    """Remove ✳️***Explained:*** markers, keeping any list bullet/number."""
    return MARKER_RE.sub(lambda m: m.group(1) or "", text)


def dice(a: str, b: str) -> float:
    """Token-set Dice similarity in [0, 1]."""
    sa = set(a.split())
    sb = set(b.split())
    if not sa and not sb:
        return 1.0
    if not sa or not sb:
        return 0.0
    return 2.0 * len(sa & sb) / (len(sa) + len(sb))


def math_ratio(text: str) -> float:
    return len(re.findall(r"\$[^$]+\$", text))


# --------------------------------------------------------------------------
# Block model and Markdown tokenizer
# --------------------------------------------------------------------------

HEADING_RE = re.compile(r"^(#{1,6})\s+(.*)$")
NUMBER_RE = re.compile(
    r"^\s*((?:\d+(?:\.\d+)*)|(?:[OHP]\d+))\s*\.?\s*(.*)$"
)
LIST_RE = re.compile(r"^(\s*[-*]\s|\s*\d+\.\s)")
DELIM_ROW_RE = re.compile(r"^\|?[\s:\-|]+\|?$")


class Block:
    __slots__ = ("kind", "text", "level", "num", "name")

    def __init__(self, kind: str, text: str, level: int = None):
        self.kind = kind
        self.text = text
        self.level = level
        self.num = None
        self.name = text
        if kind == "heading":
            m = NUMBER_RE.match(text)
            if m:
                self.num = m.group(1)
                self.name = m.group(2).strip()

    def as_obj(self):
        return {
            "kind": self.kind,
            "text": self.text,
            "level": self.level,
            "number": self.num,
            "name": self.name,
        }


def strip_frontmatter(text: str) -> str:
    lines = text.split("\n")
    if lines and lines[0].strip() == "---":
        for i in range(1, len(lines)):
            if lines[i].strip() == "---":
                return "\n".join(lines[i + 1:])
    return text


def read_frontmatter(text: str) -> dict:
    """Parse the --- frontmatter block into {key: value} (first value wins)."""
    lines = text.split("\n")
    if not lines or lines[0].strip() != "---":
        return {}
    meta = {}
    for i in range(1, len(lines)):
        ln = lines[i].strip()
        if ln == "---":
            break
        m = re.match(r"^([A-Za-z_][\w-]*):\s*(.*)$", ln)
        if m:
            key = m.group(1).lower()
            val = m.group(2).strip().strip('"').strip("'")
            if key not in meta:
                meta[key] = val
    return meta


def is_dropped(heading: Block) -> bool:
    """True when a heading matches DROP_SECTIONS by number or name."""
    if heading is None:
        return False
    if heading.num and heading.num in DROP_SECTIONS:
        return True
    return normalize(heading.name or "") in DROP_SECTIONS


def tokenize(text: str):
    """Split a markdown document into a flat list of Blocks."""
    text = strip_frontmatter(text)
    lines = text.split("\n")
    blocks = []
    i = 0
    n = len(lines)
    while i < n:
        ln = lines[i]
        s = ln.strip()
        if not s:
            i += 1
            continue
        if s == "---":
            i += 1
            continue
        if s.startswith("```"):
            buf, j = [], i + 1
            while j < n and not lines[j].strip().startswith("```"):
                buf.append(lines[j])
                j += 1
            blocks.append(Block("code", "\n".join(buf)))
            i = j + 1
            continue
        if s.startswith("|"):
            buf, j = [s], i + 1
            while j < n and lines[j].strip().startswith("|"):
                buf.append(lines[j].strip())
                j += 1
            rows = [r for r in buf if not DELIM_ROW_RE.match(r.strip().strip("|"))]
            blocks.append(Block("table", "\n".join(rows)))
            i = j
            continue
        if s.startswith(">"):
            buf, j = [], i
            while j < n and lines[j].strip().startswith(">"):
                raw = lines[j].strip()
                buf.append(raw[1:].strip())
                j += 1
            kind = "callout" if re.match(r"^\[![a-z]+\]", buf[0] or "") else "quote"
            blocks.append(Block(kind, "\n".join(buf)))
            i = j
            continue
        mh = HEADING_RE.match(ln)
        if mh:
            blocks.append(Block("heading", mh.group(2), level=len(mh.group(1))))
            i += 1
            continue
        if LIST_RE.match(ln):
            buf, j = [], i
            while j < n:
                l = lines[j]
                if not l.strip():
                    break
                if LIST_RE.match(l) or re.match(r"^\s{2,}\S", l) or re.match(r"^\s{2,}\d+\.\s", l) or re.match(r"^\s{2,}[-*]\s", l):
                    buf.append(l)
                    j += 1
                else:
                    break
            blocks.append(Block("list", "\n".join(buf)))
            i = j
            continue
        # plain paragraph until blank line / next block start
        buf, j = [ln], i + 1
        while j < n:
            l = lines[j]
            st = l.strip()
            if not st or st == "---":
                break
            if (st.startswith("```") or st.startswith("|")
                    or st.startswith(">") or HEADING_RE.match(l)
                    or LIST_RE.match(l)):
                break
            buf.append(l)
            j += 1
        blocks.append(Block("paragraph", "\n".join(buf)))
        i = j
    return blocks


# --------------------------------------------------------------------------
# Section tree
# --------------------------------------------------------------------------

class Section:
    def __init__(self, heading: Block):
        self.heading = heading          # Block (kind=heading)
        self.blocks = []                # preamble content blocks
        self.subsections = []           # list of Section (level-3 only)
        self.current = self             # where content is appended

    def push(self, block: Block):
        self.current.blocks.append(block)


def build_sections(blocks):
    """Split flat blocks into: header info + list of Section (H2 boundaries).

    Everything before the first H2 heading named "Document Control" is the
    document header: the first three headings in order become title,
    subtitle and tagline; the first quote becomes the epigraph.
    """
    header = {"title": None, "subtitle": None, "tagline": None, "epigraph": ""}
    sections = []
    current = None
    skipping = False
    in_header = True

    for b in blocks:
        if in_header:
            if b.kind == "heading":
                if header["title"] is None:
                    header["title"] = b.text
                    continue
                if header["subtitle"] is None:
                    header["subtitle"] = b.text
                    continue
                if header["tagline"] is None:
                    header["tagline"] = b.text
                    continue
                # the 4th heading ends the title block and starts the
                # sections — old drafts have "Document Control" here (a
                # section that is later skipped), new v3/v4 drafts have
                # "Abstract" or "1. Introduction" directly. Fall through.
                in_header = False
            elif b.kind == "quote" and not header["epigraph"]:
                header["epigraph"] = b.text
                continue
            else:
                continue

        if b.kind == "heading" and b.level == 2:
            name = normalize(b.name) if b.name else ""
            if name == "document control" or name == "working titles":
                skipping = True
                continue
            skipping = False
            current = Section(b)
            sections.append(current)
            continue
        if b.kind == "heading" and b.level == 3:
            if current is not None and not skipping:
                sub = Section(b)
                current.subsections.append(sub)
                current.current = sub
            continue
        if b.kind == "heading":
            # stray heading inside a section (e.g. the flow-map line)
            if current is not None and not skipping:
                current.push(b)
            continue
        if not skipping and current is not None:
            current.push(b)
    return header, sections


# --------------------------------------------------------------------------
# Pairing: greedy numbering match with fuzzy fallback
# --------------------------------------------------------------------------

def pair_sections(sa, sb):
    """Pair Section lists by number (exact) then fuzzy name, in order."""
    pairs = []
    used = set()
    for a in sa:
        cand, score, idx = None, 0.0, None
        best_dist = 10 ** 9
        for j, b in enumerate(sb):
            if j in used:
                continue
            if a.heading.num is not None and b.heading.num is not None:
                if a.heading.num == b.heading.num:
                    cand, idx = b, j
                    break
            elif a.heading.num is None and b.heading.num is None:
                s = dice(normalize(a.heading.text), normalize(b.heading.text))
                if s > 0.5 and s > score:
                    cand, score, idx = b, s, j
        if idx is not None:
            used.add(idx)
            pairs.append((a, cand))
    return pairs


def align_blocks(pa, pb):
    """Needleman-Wunsch alignment of two block sequences -> list of pairs."""
    n, m = len(pa), len(pb)
    if n == 0 and m == 0:
        return []
    S = [[0.0] * (m + 1) for _ in range(n + 1)]
    T = [[None] * (m + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        S[i][0] = -GAP * i
        T[i][0] = "up"
    for j in range(1, m + 1):
        S[0][j] = -GAP * j
        T[0][j] = "left"
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            diag = S[i - 1][j - 1] + block_sim(pa[i - 1], pb[j - 1])
            up = S[i - 1][j] - GAP
            left = S[i][j - 1] - GAP
            if diag >= up and diag >= left:
                S[i][j], T[i][j] = diag, "diag"
            elif up >= left:
                S[i][j], T[i][j] = up, "up"
            else:
                S[i][j], T[i][j] = left, "left"
    pairs = []
    i, j = n, m
    while i > 0 or j > 0:
        t = T[i][j]
        if t == "diag":
            pairs.append((pa[i - 1], pb[j - 1]))
            i -= 1
            j -= 1
        elif t == "up":
            pairs.append((pa[i - 1], None))
            i -= 1
        elif t == "left":
            pairs.append((None, pb[j - 1]))
            j -= 1
        else:
            break
    pairs.reverse()
    return pairs


KIND_BASE = {
    "paragraph": 0.25, "list": 0.25, "quote": 0.35, "callout": 0.35,
    "table": 0.30, "code": 0.50, "heading": 0.30,
}


def block_sim(a: Block, b: Block) -> float:
    if a.kind != b.kind:
        return 0.02
    base = KIND_BASE.get(a.kind, 0.2)
    s = dice(normalize(a.text), normalize(b.text))
    return min(1.0, base + 0.75 * s)


def block_side(b: Block):
    if b is None:
        return None
    return b.as_obj()


# --------------------------------------------------------------------------
# Bundle assembly
# --------------------------------------------------------------------------

def build_bundle(text_a: str, text_b: str):
    header_a, sections_a = build_sections(tokenize(text_a))
    header_b, sections_b = build_sections(tokenize(text_b))

    pair_sections(sections_a, sections_b)  # silent run

    section_pairs = pair_sections(sections_a, sections_b)
    kept, dropped = [], []
    for sa, sb in section_pairs:
        if is_dropped(sa.heading) or is_dropped(sb.heading):
            dropped.append((sa, sb))
        else:
            kept.append((sa, sb))
    bundle_sections = []

    for sa, sb in kept:
        # subsections
        all_subs = pair_sections(sa.subsections, sb.subsections)
        sub_pairs = [(ua, ub) for ua, ub in all_subs
                     if not (is_dropped(ua.heading) or is_dropped(ub.heading))]
        subs = []
        for ua, ub in sub_pairs:
            blocks = align_blocks(ua.blocks, ub.blocks)
            subs.append({
                "number": (ub.heading.num or ua.heading.num),
                "heading": {"original": block_side(ua.heading),
                            "everyone": block_side(ub.heading)},
                "blocks": [{"original": block_side(a),
                            "everyone": block_side(b)} for a, b in blocks],
            })
        preamble = align_blocks(sa.blocks, sb.blocks)
        bundle_sections.append({
            "number": (sb.heading.num or sa.heading.num),
            "heading": {"original": block_side(sa.heading),
                        "everyone": block_side(sb.heading)},
            "blocks": [{"original": block_side(a),
                        "everyone": block_side(b)} for a, b in preamble],
            "subsections": subs,
        })

    meta_a = read_frontmatter(text_a)
    meta_b = read_frontmatter(text_b)

    return {
        "id": meta_a.get("id") or DEFAULT_ID,
        "title": {"original": header_a["title"], "everyone": header_b["title"]},
        "subtitle": {"original": header_a["subtitle"], "everyone": header_b["subtitle"]},
        "tagline": {"original": header_a["tagline"], "everyone": header_b["tagline"]},
        "epigraph": {"original": header_a["epigraph"], "everyone": header_b["epigraph"]},
        "author": meta_a.get("author") or meta_b.get("author") or DEFAULT_AUTHOR,
        "sections": bundle_sections,
    }, header_a, header_b, dropped


def stats(bundle):
    total_pairs = 0
    gaps_o = 0
    gaps_e = 0
    both = 0
    for sec in bundle["sections"]:
        for unit in [sec] + sec.get("subsections", []):
            for p in unit["blocks"]:
                total_pairs += 1
                if p["original"] is None:
                    gaps_o += 1
                if p["everyone"] is None:
                    gaps_e += 1
                if p["original"] is not None and p["everyone"] is not None:
                    both += 1
    return total_pairs, both, gaps_o, gaps_e


def section_report(bundle):
    rows = []
    for sec in bundle["sections"]:
        rows.append(("=", sec.get("number") or "", sec["heading"]["original"]["name"]
                     if sec["heading"].get("original") else "?"))
        for unit in sec.get("subsections", []):
            name = (unit["heading"]["original"]["name"]
                    if unit["heading"].get("original") else "?")
            rows.append(("+", unit.get("number") or "", name))
    return rows


def main():
    ap = argparse.ArgumentParser(description="Build a Dummy Switch paper bundle.")
    ap.add_argument("original", nargs="?", default=DEFAULTS[0])
    ap.add_argument("everyone", nargs="?", default=DEFAULTS[1])
    ap.add_argument("--out", default=str(OUT))
    ap.add_argument("--drop", action="append", default=[], metavar="NUM|NAME",
                    help="exclude a section by number or name (repeatable)")
    ap.add_argument("--id", default=None, metavar="ID",
                    help="override the bundle id (default: frontmatter id or "
                         "'light-reality-cycle')")
    args = ap.parse_args()

    DROP_SECTIONS.update(d.strip().lower() for d in args.drop)

    ta = Path(args.original).read_text(encoding="utf-8")
    # the "for everyone" side may carry ✳️***Explained:*** markers — strip them
    tb = strip_markers(Path(args.everyone).read_text(encoding="utf-8"))

    bundle, ha, hb, dropped_sections = build_bundle(ta, tb)
    if args.id:
        bundle["id"] = args.id
    bundle["meta"] = {
        "built": date.today().isoformat(),
        "sources": {"original": Path(args.original).name, "everyone": Path(args.everyone).name},
        "aligner": "M0 build_bundle.py (Needleman-Wunsch, header-anchored)",
    }

    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    slug = (bundle["id"] or DEFAULT_ID).replace('"', '\\"')
    json_text = json.dumps(bundle, ensure_ascii=False, indent=1)
    (out / f"structure-{slug}.json").write_text(json_text, encoding="utf-8")
    (out / f"bundle-{slug}.js").write_text(
        "window.PAPER_BUNDLES = window.PAPER_BUNDLES || {};\n"
        f'window.PAPER_BUNDLES["{slug}"] = ' + json_text + ";\n",
        encoding="utf-8")

    total, both, gaps_o, gaps_e = stats(bundle)
    print(f"sections paired      : {len(bundle['sections'])} "
          f"(skipped: {sorted(SKIPPED_SECTIONS)})")
    print(f"content pairs        : {total}")
    print(f"  matched both sides : {both}")
    print(f"  original-only gap  : {gaps_o}")
    print(f"  everyone-only gap  : {gaps_e}")
    print(f"title    : {ha['title']}")
    print(f"author   : {bundle['author']}")
    print(f"tagline  : {ha['tagline']!r} vs {hb['tagline']!r}")
    if dropped_sections:
        print("dropped  :")
        for sa, sb in dropped_sections:
            num = sb.heading.num or sa.heading.num
            print(f"           [{num or '-'}] {sa.heading.name or '?'}")
    print()
    print("section map (alignment anchor = headings):")
    for kind, num, name in section_report(bundle):
        if kind == "=":
            print(f"  [{num or '-'}] {name}")
        else:
            print(f"       . {num} {name}")
    print(f"wrote    : {out / f'structure-{slug}.json'} ({len(json_text)} chars)")
    print(f"wrote    : {out / f'bundle-{slug}.js'}")


if __name__ == "__main__":
    sys.exit(main())