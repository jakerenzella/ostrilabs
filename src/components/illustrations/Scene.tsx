const INK = "#1f4a3f";

/** Rolling hills, gum trees and the creek. Decorative. */
export function Scene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 240" preserveAspectRatio="none" className={className} aria-hidden="true">
      <g stroke={INK} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M0 120 C150 70 300 80 450 110 C600 140 750 70 900 90 C1050 110 1150 80 1200 95 L1200 240 L0 240 Z" fill="#8fc98a" />
        <rect x="142" y="60" width="16" height="70" rx="6" fill="#b0895e" />
        <g fill="#5d9b6b"><ellipse cx="150" cy="55" rx="48" ry="30" /><ellipse cx="118" cy="80" rx="30" ry="20" /><ellipse cx="180" cy="72" rx="30" ry="20" /></g>
        <rect x="972" y="70" width="16" height="70" rx="6" fill="#b0895e" />
        <g fill="#5d9b6b"><ellipse cx="980" cy="70" rx="42" ry="26" /><ellipse cx="952" cy="92" rx="26" ry="17" /><ellipse cx="1008" cy="86" rx="26" ry="17" /></g>
        <path d="M0 160 C200 130 400 180 600 160 C800 140 1000 180 1200 155 L1200 240 L0 240 Z" fill="#3f7d5c" />
        <path d="M0 210 C200 190 300 230 500 210 C700 190 900 230 1200 205 L1200 240 L0 240 Z" fill="#6fb7d9" />
        <path d="M60 220 C120 212 180 224 240 218 M700 220 C760 212 820 224 880 218" fill="none" stroke="#fff6df" strokeWidth="4" />
      </g>
    </svg>
  );
}
