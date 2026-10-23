const INK = "#1f4a3f";
const RED = "#ee3534";
const WHITE = "#fffdf7";

/** SuperHealth capsule bottle and two elongated capsules, half red and half white. */
export function TabletBottle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 330" className={className} role="img" aria-label="EmuLabs SuperHealth daily supplement capsule bottle with two red and white capsules">
      <g stroke={INK} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M87 68 H193 V88 C193 105 230 105 230 137 V264 Q230 287 207 287 H73 Q50 287 50 264 V137 C50 105 87 105 87 88 Z" fill={INK} />
        <rect x="50" y="143" width="180" height="111" rx="7" fill="#fff6df" />
        <path d="M50 237 H230 V259 H50 Z" fill="#ff7a3d" />
        <rect x="78" y="36" width="124" height="45" rx="10" fill="#86b7cb" />
        <path d="M91 47 V69 M107 47 V69 M123 47 V69 M139 47 V69 M155 47 V69 M171 47 V69 M187 47 V69" strokeWidth="3" />
        <path d="M67 129 Q68 118 85 113" fill="none" stroke="#86b7cb" strokeWidth="6" />
      </g>
      <g fill={INK} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700">
        <text x="140" y="167" fontSize="13" letterSpacing="3">EMULABS</text>
        <text x="140" y="198" fontSize="28" textLength="160" lengthAdjust="spacingAndGlyphs">SuperHealth</text>
        <text x="140" y="222" fontSize="12" letterSpacing="2">DAILY CAPSULES</text>
        <text x="140" y="252" fontSize="10" fontWeight="600">little capsules. big promises.</text>
        <text x="140" y="278" fontSize="10" fill="#fff6df" fontWeight="500">batch 01 of 01</text>
      </g>
      <g transform="translate(238 281) rotate(-22)" stroke={INK} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        <rect x="-30" y="-13" width="60" height="26" rx="13" fill={RED} stroke="none" />
        <path d="M0 -13 H17 A13 13 0 0 1 17 13 H0 Z" fill={WHITE} stroke="none" />
        <rect x="-30" y="-13" width="60" height="26" rx="13" fill="none" />
        <path d="M0 -13 V13" fill="none" />
        <path d="M-22 -5 Q-16 -9 -8 -8" fill="none" stroke={WHITE} strokeWidth="3" opacity="0.7" />
      </g>
      <g transform="translate(188 303) rotate(12)" stroke={INK} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        <rect x="-28" y="-12" width="56" height="24" rx="12" fill={RED} stroke="none" />
        <path d="M0 -12 H16 A12 12 0 0 1 16 12 H0 Z" fill={WHITE} stroke="none" />
        <rect x="-28" y="-12" width="56" height="24" rx="12" fill="none" />
        <path d="M0 -12 V12" fill="none" />
        <path d="M-20 -4 Q-15 -8 -8 -7" fill="none" stroke={WHITE} strokeWidth="3" opacity="0.7" />
      </g>
    </svg>
  );
}
