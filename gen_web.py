import math

def gen_web(size=160, rings=6, spokes=7):
    lines = []
    angles = [i * (math.pi / 2 / (spokes - 1)) for i in range(spokes)]
    for a in angles:
        x = math.cos(a) * size
        y = math.sin(a) * size
        lines.append(f'  <line x1="0" y1="0" x2="{x:.1f}" y2="{y:.1f}" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>')
    
    for r_idx in range(1, rings + 1):
        r = (size / rings) * r_idx
        for i in range(spokes - 1):
            a1 = angles[i]
            a2 = angles[i+1]
            x1, y1 = math.cos(a1) * r, math.sin(a1) * r
            x2, y2 = math.cos(a2) * r, math.sin(a2) * r
            mid_a = (a1 + a2) / 2
            mid_r = r * 0.84
            cx, cy = math.cos(mid_a) * mid_r, math.sin(mid_a) * mid_r
            lines.append(f'  <path d="M {x1:.1f} {y1:.1f} Q {cx:.1f} {cy:.1f} {x2:.1f} {y2:.1f}" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>')
    
    return '\n'.join(lines)

print(gen_web())
