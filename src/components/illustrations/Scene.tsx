const INK = "#1f4a3f";

/** A gum tree, drawn with its base at (0, 0). The trunk runs below ground so it sits inside the grass. */
function Tree({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-30 -62 L-8 -34" strokeWidth="14" />
      <path d="M-30 -62 L-8 -34" stroke="#b0895e" strokeWidth="7" />
      <path d="M-9 58 L-9 -38 C-9 -52 -4 -62 3 -74 L16 -68 C9 -56 7 -48 7 -38 L7 58 Z" fill="#b0895e" />
      <g fill="#5d9b6b">
        <ellipse cx="-2" cy="-100" rx="52" ry="30" />
        <ellipse cx="-42" cy="-80" rx="30" ry="20" />
        <ellipse cx="40" cy="-82" rx="32" ry="21" />
        <ellipse cx="2" cy="-124" rx="34" ry="20" />
      </g>
      <g fill="#7ab77f" stroke="none">
        <ellipse cx="-14" cy="-108" rx="22" ry="11" />
        <ellipse cx="-44" cy="-84" rx="13" ry="7" />
        <ellipse cx="6" cy="-130" rx="14" ry="7" />
      </g>
    </g>
  );
}

/**
 * Rolling hills, gum trees and the creek. Decorative.
 * The whole scene scales uniformly (never stretched). On narrow screens the sides are cropped instead.
 */
export function Scene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 2000 260" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      <g stroke={INK} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        {/* Back hill */}
        <path d="M0 140 C250 90 500 100 750 130 C1000 160 1250 90 1500 110 C1750 130 1900 100 2000 115 L2000 260 L0 260 Z" fill="#8fc98a" />
        {/* Trees stand on the back hill; the front hill hides their roots. */}
        <Tree x={250} y={122} scale={0.85} />
        <Tree x={1930} y={124} scale={0.72} />
        {/* Front hill */}
        <path d="M0 176 C330 150 660 196 1000 178 C1330 160 1660 196 2000 172 L2000 260 L0 260 Z" fill="#3f7d5c" />
        {/* Creek */}
        <path d="M0 228 C330 208 500 246 830 228 C1160 210 1500 246 2000 224 L2000 260 L0 260 Z" fill="#6fb7d9" />
        <path d="M100 240 C200 232 300 244 400 238 M1160 240 C1260 232 1360 244 1460 238" fill="none" stroke="#fff6df" strokeWidth="4" />
      </g>
    </svg>
  );
}
