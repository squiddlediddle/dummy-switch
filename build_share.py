#!/usr/bin/env python3
"""
The Nerd Switch — single-file share build.

Inlines the whole reader (HTML + JS + the pre-loaded thesis bundle) into
ONE self-contained HTML file that works anywhere:

  - double-click on any computer (file://, no server)
  - attach to a message/email — the reader opens as-is
  - drag-and-drop onto a static host (Netlify Drop, GitHub Pages, …)
    for an instant public HTTPS link — which is also the proper
    installable/offline PWA source for phones

Usage:
    python build_share.py          # writes share/Dummy-Switch.html
    python build_share.py --out x.html
"""

import argparse
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def build(out: Path):
    html = (ROOT / "index.html").read_text(encoding="utf-8")

    # 1. inline every bundle file referenced by <script src="bundle-<id>.js">
    html = re.sub(
        r'<script src="(bundle-[A-Za-z0-9_-]+\.js)"></script>',
        lambda m: "<script>\n" + (ROOT / m.group(1)).read_text(encoding="utf-8")
                  + "\n</script>",
        html,
    )

    # 2. drop PWA assets that can't exist in a single file
    html = re.sub(r"\s*<!-- BUILD:PWA-START -->[\s\S]*?<!-- BUILD:PWA-END -->", "", html)

    # 3. drop the service-worker registration (needs a server + HTTPS anyway)
    html = re.sub(r"\s*/\* BUILD:SW-START \*/[\s\S]*?/\* BUILD:SW-END \*/", "", html)

    if re.search(r'src="bundle-[A-Za-z0-9_-]+\.js"', html):
        raise SystemExit("ERROR: bundle script reference still present in the output")
    if "BUILD:SW-START" in html or "BUILD:PWA-START" in html:
        raise SystemExit("ERROR: build markers still present in the output")

    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html, encoding="utf-8")

    size_kb = out.stat().st_size / 1024
    print(f"wrote {out} ({size_kb:.0f} KB)")
    print()
    print("share it:")
    print("  1. send the file itself (attach to a message, email, or Obsidian)")
    print("  2. get a public HTTPS link in seconds: drag this file onto")
    print("     https://app.netlify.com/drop  (or any static host)")
    print("  3. the hosted link is also the installable/offline PWA source")
    print("     - open it on a phone, then 'Add to Home Screen'.")
    return 0


def main():
    ap = argparse.ArgumentParser(description="Build the single-file share version.")
    ap.add_argument("--out", default=str(ROOT / "share" / "Dummy-Switch.html"))
    args = ap.parse_args()
    return build(Path(args.out))


if __name__ == "__main__":
    import sys
    sys.exit(main())