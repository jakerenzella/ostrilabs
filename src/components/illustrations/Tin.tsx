const INK = "#1f4a3f";

/** The OMNI-01 tin with its scoop. */
export function Tin({ className = "", scoop = true }: { className?: string; scoop?: boolean }) {
  return (
    <svg viewBox="0 0 270 320" className={className} role="img" aria-label="A tin of OMNI-01 supplement with a yellow scoop">
      <g stroke={INK} strokeWidth="5" strokeLinejoin="round">
        {scoop && (
          <>
            <path d="M206 262 C234 262 256 246 256 226 C256 206 234 196 206 200 Z" fill="#ffd23f" />
            <path d="M246 206 L266 150" fill="none" strokeWidth="10" />
            <path d="M246 206 L266 150" fill="none" stroke="#ffd23f" strokeWidth="4" />
          </>
        )}
        <path d="M40 74 L40 262 C40 280 80 292 130 292 C180 292 220 280 220 262 L220 74 Z" fill={INK} />
        <path d="M40 110 L40 232 C40 250 80 262 130 262 C180 262 220 250 220 232 L220 110 C220 128 180 140 130 140 C80 140 40 128 40 110 Z" fill="#fff6df" />
        <path d="M40 232 L40 248 C40 266 80 278 130 278 C180 278 220 266 220 248 L220 232 C220 250 180 262 130 262 C80 262 40 250 40 232 Z" fill="#ff7a3d" />
        <ellipse cx="130" cy="74" rx="90" ry="30" fill="#86b7cb" />
        <ellipse cx="130" cy="74" rx="70" ry="20" fill="#a9d0df" />
        <path d="M56 130 L56 236" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="6" strokeLinecap="round" />
      </g>
      <g fill={INK} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700">
        <text x="130" y="170" fontSize="14" letterSpacing="3">EMULABS</text>
        <text x="130" y="212" fontSize="40">OMNI-01</text>
        <text x="130" y="232" fontSize="11" fontWeight="500">everything, in one scoop</text>
        <text x="130" y="272" fontSize="10" fontWeight="600">batch 01 of 01</text>
      </g>
      <g fill="#ffd23f" stroke={INK} strokeWidth="2.5" strokeLinejoin="round">
        <path transform="translate(60 155) scale(0.6)" d="M0 -10 L3 -3 L10 -3 L4 2 L6 9 L0 5 L-6 9 L-4 2 L-10 -3 L-3 -3 Z" />
        <path transform="translate(200 155) scale(0.6)" d="M0 -10 L3 -3 L10 -3 L4 2 L6 9 L0 5 L-6 9 L-4 2 L-10 -3 L-3 -3 Z" />
      </g>
    </svg>
  );
}
