import { chart } from "@/lib/content";

const INK = "#1f4a3f";

/** The vitality bar chart. Two bars, no units worth mentioning. */
export function Chart({ className = "" }: { className?: string }) {
  const max = 10;
  const baseY = 200;
  const scale = 150 / max;
  return (
    <svg viewBox="0 0 340 250" className={className} role="img" aria-label={`Bar chart titled ${chart.title}. Before: ${chart.bars[0].value}. After: ${chart.bars[1].value}. Units are Emulabs units.`}>
      <path d="M60 30 L60 200 L320 200" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {[0, 5, 10].map((tick) => (
        <g key={tick}>
          <path d={`M54 ${baseY - tick * scale} L60 ${baseY - tick * scale}`} stroke={INK} strokeWidth="3" />
          <text x="46" y={baseY - tick * scale + 5} textAnchor="end" fontSize="14" fontFamily="var(--font-display)" fontWeight="600" fill={INK}>{tick}</text>
        </g>
      ))}
      <text transform="rotate(-90 18 115)" x="18" y="115" textAnchor="middle" fontSize="13" fontFamily="var(--font-body)" fontWeight="700" fill={INK}>{chart.axis}</text>
      {chart.bars.map((bar, i) => {
        const x = 100 + i * 120;
        const h = bar.value * scale;
        return (
          <g key={bar.label}>
            <rect x={x + 6} y={baseY - h + 6} width="80" height={h} rx="10" fill={INK} />
            <rect x={x} y={baseY - h} width="80" height={h} rx="10" fill={i === 0 ? "#86b7cb" : "#ff7a3d"} stroke={INK} strokeWidth="4" />
            <text x={x + 40} y={baseY - h - 12} textAnchor="middle" fontSize="22" fontFamily="var(--font-display)" fontWeight="700" fill={INK}>{bar.value}</text>
            <text x={x + 40} y={baseY + 28} textAnchor="middle" fontSize="15" fontFamily="var(--font-display)" fontWeight="600" fill={INK}>{bar.label}</text>
          </g>
        );
      })}
    </svg>
  );
}
