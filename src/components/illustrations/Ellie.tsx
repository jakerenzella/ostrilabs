const INK = "#1f4a3f";

/** Ellie Emu, founder. Full body, facing left, wearing her lanyard. */
export function Ellie({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 440" className={className} role="img" aria-label="Ellie Emu, a cartoon emu wearing a lanyard, standing proudly">
      <g stroke={INK} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M178 330 L170 372 L166 412" fill="none" strokeWidth="16" />
        <path d="M178 330 L170 372 L166 412" fill="none" stroke="#9aa37d" strokeWidth="8" />
        <path d="M228 334 L238 372 L244 412" fill="none" strokeWidth="16" />
        <path d="M228 334 L238 372 L244 412" fill="none" stroke="#9aa37d" strokeWidth="8" />
        <path d="M166 412 L140 424 M166 412 L164 428 M166 412 L188 424" fill="none" strokeWidth="14" />
        <path d="M166 412 L140 424 M166 412 L164 428 M166 412 L188 424" fill="none" stroke="#9aa37d" strokeWidth="6" />
        <path d="M244 412 L218 424 M244 412 L246 428 M244 412 L268 424" fill="none" strokeWidth="14" />
        <path d="M244 412 L218 424 M244 412 L246 428 M244 412 L268 424" fill="none" stroke="#9aa37d" strokeWidth="6" />
        <path d="M262 232 C290 220 312 236 316 262 C330 268 328 292 314 300 C324 318 306 336 288 328 C280 342 258 342 250 328 Z" fill="#3e2e23" />
        <path d="M172 250 C130 200 108 160 112 98" fill="none" strokeWidth="40" />
        <path d="M172 250 C130 200 108 160 112 98" fill="none" stroke="#86b7cb" strokeWidth="30" />
        <path d="M118 258 C104 200 160 160 218 168 C280 176 306 236 288 290 C274 334 214 352 168 336 C132 324 110 296 118 258 Z" fill="#5b4636" />
        <path d="M150 300 C170 286 196 284 222 292 M160 320 C184 306 210 306 236 316" fill="none" stroke="#3e2e23" strokeWidth="5" />
        <path d="M150 246 C178 226 226 226 246 260 C226 258 196 262 178 284 C166 270 156 260 150 246 Z" fill="#3e2e23" />
        <circle cx="110" cy="80" r="34" fill="#86b7cb" />
        <path d="M78 70 C82 46 100 40 118 44 C136 48 146 62 142 74 C128 66 108 64 96 76 C88 74 82 72 78 70 Z" fill="#3e2e23" />
        <path d="M104 44 C108 34 116 30 124 32" fill="none" stroke="#3e2e23" strokeWidth="6" />
        <path d="M80 86 L34 96 L80 104 Z" fill="#2e2a28" />
        <path d="M40 96 L78 96" fill="none" stroke="#fff6df" strokeWidth="2" />
        <circle cx="106" cy="82" r="12" fill="#ffffff" />
        <circle cx="108" cy="84" r="6" fill={INK} stroke="none" />
        <circle cx="111" cy="80" r="2.2" fill="#ffffff" stroke="none" />
        <path d="M100 118 C108 150 126 176 150 196 M124 116 C130 146 146 172 166 190" fill="none" stroke="#ff7a3d" strokeWidth="5" />
        <g transform="rotate(-18 168 203)">
          <rect x="146" y="188" width="44" height="30" rx="5" fill="#fff6df" />
          <path d="M154 199 L176 194 M155 208 L170 205" stroke={INK} strokeWidth="3" />
        </g>
      </g>
    </svg>
  );
}
