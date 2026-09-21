/** Wavy band edge between coloured sections. `flip` turns it upside down. */
export function Wave({ color, flip = false, className = "" }: { color: string; flip?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className={`block w-full h-10 md:h-14 ${flip ? "rotate-180" : ""} ${className}`} aria-hidden="true">
      <path d="M0 30 C150 0 300 0 450 30 C600 60 750 60 900 30 C1000 10 1100 10 1200 30 L1200 60 L0 60 Z" fill={color} />
    </svg>
  );
}
