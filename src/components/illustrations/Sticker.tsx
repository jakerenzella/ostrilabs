/** Rotated starburst sticker with a short line of text. */
export function Sticker({ children, color = "#ffd23f", tilt = -8, className = "" }: { children: React.ReactNode; color?: string; tilt?: number; className?: string }) {
  return (
    <span className={`inline-grid place-items-center size-24 md:size-28 text-center font-display font-bold text-[0.95rem] md:text-base leading-tight text-egg ${className}`} style={{ transform: `rotate(${tilt}deg)` }}>
      <svg viewBox="0 0 100 100" className="col-start-1 row-start-1 size-full" aria-hidden="true">
        <path d="M50 2 L58 14 L72 8 L74 23 L89 24 L83 38 L96 46 L84 56 L92 70 L77 72 L76 87 L62 82 L54 96 L44 84 L30 92 L28 77 L13 76 L18 62 L4 54 L16 44 L8 30 L23 28 L24 13 L38 18 Z" fill={color} stroke="#1f4a3f" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <span className="col-start-1 row-start-1 px-4">{children}</span>
    </span>
  );
}
