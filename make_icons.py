#!/usr/bin/env python3
"""
Generate PWA icons for The Nerd Switch (no dependencies).

The mark: a circle split in two voices — ink left, paper right —
with the accent color of the voice as the background tile. The
canonical (install) set is BLUE (#3d88d8, original voice); a red
variant (#d83d3d, everyone voice) is also produced for the
dynamic browser-tab favicon swap. Two sizes: 192 and 512, plus a
favicon. Supersampled for smooth edges.
"""

import struct
import zlib
from pathlib import Path

BLUE = (61, 136, 216)    # #3d88d8 — original voice
RED = (216, 61, 61)      # #d83d3d — everyone voice
PAPER = (244, 244, 250)  # #f4f4fa
INK = (61, 61, 61)       # #3d3d3d


def build_png(size, sample):
    """Render `size`x`size` RGBA PNG from a continuous (x, y) -> (r,g,b,a)."""
    ss = 3  # supersampling factor

    def downsample(px, py, fn):
        r = g = b = 0
        n = 0
        for sy in range(ss):
            for sx in range(ss):
                x = px + (sx + 0.5) / ss
                y = py + (sy + 0.5) / ss
                R, G, B, A = fn(x, y)
                r += R * A
                g += G * A
                b += B * A
                n += A
        return (r // n, g // n, b // n, 255)

    rows = bytearray()
    for py in range(size):
        rows.append(0)  # filter: none
        for px in range(size):
            rows += bytes(downsample(px, py, sample))
    return rows


def chunk(typ, data):
    return (struct.pack(">I", len(data)) + typ + data
            + struct.pack(">I", zlib.crc32(typ + data) & 0xFFFFFFFF))


def render(size, accent=BLUE):
    cx = cy = size / 2.0
    R = 0.36 * size  # circle diameter is 72% of the icon — maskable-safe

    def sample(x, y):
        dx, dy = x - cx, y - cy
        if dx * dx + dy * dy <= R * R:
            color = INK if x < cx else PAPER
        else:
            color = accent
        return color[0], color[1], color[2], 255

    raw = build_png(size, sample)
    ihdr = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)
    return (b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", ihdr)
            + chunk(b"IDAT", zlib.compress(bytes(raw), 9)) + chunk(b"IEND", b""))


def main():
    out = Path(__file__).resolve().parent / "icons"
    out.mkdir(exist_ok=True)
    for size in (192, 512):
        path = out / f"icon-{size}.png"
        path.write_bytes(render(size))
        print(f"wrote {path} ({path.stat().st_size} bytes)")
    fav = out / "favicon.png"
    fav.write_bytes(render(64))
    print(f"wrote {fav} ({fav.stat().st_size} bytes)")
    fav_red = out / "favicon-red.png"
    fav_red.write_bytes(render(64, RED))
    print(f"wrote {fav_red} ({fav_red.stat().st_size} bytes)")


if __name__ == "__main__":
    main()