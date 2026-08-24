#!/usr/bin/env python3
# Generates the PNG favicons (icon-64.png, apple-touch-icon.png) from scratch —
# the same "protocol layers" artwork as src/favicons/layers.svg, drawn pixel by
# pixel so the pipeline has no binary dependency. Pure stdlib (zlib/struct).
#
# Usage: python3 tools/make_icons.py
import struct
import zlib
import os

SRC = os.path.join(os.path.dirname(__file__), '..', 'src')


def png_chunk(tag: bytes, data: bytes) -> bytes:
    return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)


def write_png(path: str, size: int):
    SS = 3  # supersampling factor for smooth edges
    big = size * SS
    s = big / 64.0  # scale: artwork designed on a 64x64 grid
    px = bytearray()

    bg = (0x24, 0x89, 0xD6)
    white = (255, 255, 255)

    def blend(c1, c2, t):
        return tuple(int(a + (b - a) * t) for a, b in zip(c1, c2))

    def inside_rounded_rect(x, y, r):
        r = r * s
        w = h = big
        if x < 0 or y < 0 or x >= w or y >= h:
            return False
        cx = min(max(x, r), w - r)
        cy = min(max(y, r), h - r)
        dx, dy = x - cx, y - cy
        return dx * dx + dy * dy <= r * r or (r <= x <= w - r) or (r <= y <= h - r)

    # point-in-polygon (ray casting)
    def in_poly(x, y, poly):
        inside = False
        n = len(poly)
        for i in range(n):
            x1, y1 = poly[i]
            x2, y2 = poly[(i + 1) % n]
            if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1:
                inside = not inside
        return inside

    diamond = [(32 * s, 12 * s), (52 * s, 22 * s), (32 * s, 32 * s), (12 * s, 22 * s)]

    def seg_dist(x, y, a, b):
        ax, ay = a
        bx, by = b
        vx, vy = bx - ax, by - ay
        wx, wy = x - ax, y - ay
        L2 = vx * vx + vy * vy
        t = max(0.0, min(1.0, (wx * vx + wy * vy) / L2 if L2 else 0))
        px_, py_ = ax + t * vx, ay + t * vy
        return ((x - px_) ** 2 + (y - py_) ** 2) ** 0.5

    chevrons = [
        ([(12 * s, 32 * s), (32 * s, 42 * s), (52 * s, 32 * s)], 0.80),
        ([(12 * s, 42 * s), (32 * s, 52 * s), (52 * s, 42 * s)], 0.55),
    ]
    half_w = 2.5 * s

    rows = []
    for y in range(big):
        for x in range(big):
            if not inside_rounded_rect(x + 0.5, y + 0.5, 14):
                rows.append((0, 0, 0, 0))
                continue
            c = bg
            if in_poly(x + 0.5, y + 0.5, diamond):
                c = white
            else:
                for poly, alpha in chevrons:
                    d = min(seg_dist(x + 0.5, y + 0.5, poly[0], poly[1]),
                            seg_dist(x + 0.5, y + 0.5, poly[1], poly[2]))
                    if d <= half_w:
                        c = blend(bg, white, alpha)
                        break
            rows.append((c[0], c[1], c[2], 255))
        # downsample SSxSS blocks
    out = bytearray()
    w = big
    for Y in range(size):
        out.append(0)  # PNG filter: none
        for X in range(size):
            rs = gs = bs = al = 0
            for dy in range(SS):
                for dx in range(SS):
                    r, g, b, a = rows[(Y * SS + dy) * w + (X * SS + dx)]
                    rs += r; gs += g; bs += b; al += a
            n = SS * SS
            out += bytes((rs // n, gs // n, bs // n, al // n))

    ihdr = struct.pack('>IIBBBBB', size, size, 8, 6, 0, 0, 0)
    png = (b'\x89PNG\r\n\x1a\n'
           + png_chunk(b'IHDR', ihdr)
           + png_chunk(b'IDAT', zlib.compress(bytes(out), 9))
           + png_chunk(b'IEND', b''))
    with open(path, 'wb') as f:
        f.write(png)
    print('written', path, len(png), 'bytes')


if __name__ == '__main__':
    write_png(os.path.join(SRC, 'icon-64.png'), 64)
    write_png(os.path.join(SRC, 'apple-touch-icon.png'), 180)
