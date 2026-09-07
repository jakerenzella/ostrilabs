/*
 * Shared drawing parts for the Ostrilabs scientists.
 * All parts live in a 480 × 640 coordinate space, ostrich facing right.
 */

export const skin = {
  base: "#d3a091",
  deep: "#b57d70",
  light: "#e6bcae",
};

export function Defs({ id }: { id: string }) {
  return (
    <defs>
      <radialGradient id={`${id}-feather`} cx="38%" cy="30%" r="75%">
        <stop offset="0" stopColor="#3c3e46" />
        <stop offset="0.6" stopColor="#1d1e23" />
        <stop offset="1" stopColor="#0f1013" />
      </radialGradient>
      <linearGradient id={`${id}-coat`} x1="0" y1="0" x2="1" y2="0.4">
        <stop offset="0" stopColor="#dcd8cf" />
        <stop offset="0.45" stopColor="#f7f5f0" />
        <stop offset="1" stopColor="#ffffff" />
      </linearGradient>
      <linearGradient id={`${id}-skin`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor={skin.deep} />
        <stop offset="0.5" stopColor={skin.base} />
        <stop offset="1" stopColor={skin.light} />
      </linearGradient>
      <linearGradient id={`${id}-plume`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f2efe7" />
        <stop offset="1" stopColor="#c9c3b4" />
      </linearGradient>
      <linearGradient id={`${id}-screen`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#2a2d36" />
        <stop offset="1" stopColor="#101116" />
      </linearGradient>
    </defs>
  );
}

export function Shadow({ cx = 232, cy = 610, rx = 78 }: { cx?: number; cy?: number; rx?: number }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={7} fill="#000" opacity="0.14" />;
}

export function Legs({ id }: { id: string }) {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* far leg */}
      <path d="M 206 402 L 196 470 L 214 546 L 214 590" stroke={skin.deep} strokeWidth="11" />
      <path d="M 214 590 l -15 18 M 214 590 l 22 15" stroke={skin.deep} strokeWidth="8" />
      <circle cx="196" cy="470" r="7" fill={skin.deep} stroke="none" />
      {/* near leg */}
      <path d="M 246 404 L 240 472 L 262 548 L 262 592" stroke={`url(#${id}-skin)`} strokeWidth="12" />
      <path d="M 262 592 l -17 20 M 262 592 l 26 16" stroke={skin.base} strokeWidth="9" />
      <circle cx="240" cy="472" r="7.5" fill={skin.base} stroke="none" />
      {/* scaly texture on near leg */}
      <path
        d="M 246 490 h 12 M 248 504 h 12 M 250 518 h 12 M 253 532 h 11"
        stroke={skin.deep}
        strokeWidth="1.2"
        opacity="0.5"
      />
    </g>
  );
}

export function Body({ id }: { id: string }) {
  return (
    <g>
      {/* tail plumes */}
      <g fill={`url(#${id}-plume)`}>
        <ellipse cx="128" cy="306" rx="42" ry="15" transform="rotate(-38 128 306)" />
        <ellipse cx="118" cy="338" rx="46" ry="14" transform="rotate(-12 118 338)" />
        <ellipse cx="124" cy="368" rx="42" ry="14" transform="rotate(14 124 368)" />
        <ellipse cx="140" cy="392" rx="34" ry="12" transform="rotate(36 140 392)" />
      </g>
      <g fill="none" stroke="#9c968a" strokeWidth="1" opacity="0.6">
        <path d="M 96 288 C 120 296, 140 300, 160 302" />
        <path d="M 76 340 C 100 340, 130 338, 158 334" />
        <path d="M 86 380 C 110 374, 132 366, 156 358" />
      </g>
      {/* body */}
      <path
        d="M 132 330 C 132 262, 190 244, 238 250 C 292 257, 318 296, 308 348 C 298 398, 252 422, 202 418 C 152 414, 130 384, 132 330 Z"
        fill={`url(#${id}-feather)`}
      />
      {/* feather texture */}
      <g fill="none" stroke="#4a4d57" strokeWidth="1.4" opacity="0.55">
        <path d="M 160 280 C 176 274, 192 272, 206 275" />
        <path d="M 150 300 C 170 292, 190 290, 214 294" />
        <path d="M 176 262 C 192 258, 214 258, 234 264" />
        <path d="M 250 262 C 266 268, 280 280, 290 296" />
      </g>
    </g>
  );
}

/**
 * The lab coat sits over the lower two-thirds of the body.
 * `sleeve` decides whether the near wing hangs in a sleeve (holding something).
 */
export function Coat({ id, badge = true }: { id: string; badge?: boolean }) {
  return (
    <g>
      <path
        d="M 152 302 C 178 284, 218 276, 262 274 C 300 277, 320 306, 316 352 C 310 402, 270 434, 206 434 C 158 434, 132 402, 134 362 C 135 338, 141 318, 152 302 Z"
        fill={`url(#${id}-coat)`}
      />
      {/* coat shadow under collar and along seam */}
      <path
        d="M 152 302 C 178 284, 218 276, 262 274 C 236 290, 200 300, 166 320 Z"
        fill="#c9c4b9"
        opacity="0.55"
      />
      {/* V opening shows feathers */}
      <path d="M 254 278 L 271 322 L 288 284 C 278 279, 266 276, 254 278 Z" fill={`url(#${id}-feather)`} />
      {/* lapels */}
      <path d="M 254 278 L 271 322 L 250 318 L 240 292 Z" fill="#ffffff" stroke="#d6d1c6" strokeWidth="1" />
      <path d="M 288 284 L 271 322 L 292 320 L 302 296 Z" fill="#f4f2ec" stroke="#d6d1c6" strokeWidth="1" />
      {/* centre seam and buttons */}
      <path d="M 271 322 C 274 360, 270 400, 258 432" fill="none" stroke="#d6d1c6" strokeWidth="1.2" />
      <g fill="#ece8de" stroke="#b6b0a2" strokeWidth="1">
        <circle cx="275" cy="346" r="3.4" />
        <circle cx="273" cy="374" r="3.4" />
        <circle cx="267" cy="402" r="3.4" />
      </g>
      {/* breast pocket with pens */}
      <rect x="218" y="332" width="4.5" height="26" rx="1.5" fill="#f0b429" transform="rotate(-8 220 345)" />
      <rect x="228" y="334" width="4.5" height="24" rx="1.5" fill="#3d5a99" transform="rotate(-4 230 346)" />
      <path d="M 206 350 h 44 v 36 a 4 4 0 0 1 -4 4 h -36 a 4 4 0 0 1 -4 -4 Z" fill="#fbfaf7" stroke="#d6d1c6" strokeWidth="1.2" />
      <path d="M 206 350 h 44" stroke="#c4bfb3" strokeWidth="2" />
      {/* name badge */}
      {badge && (
        <g>
          <rect x="286" y="356" width="24" height="15" rx="2" fill="#fbfaf7" stroke="#c9c4b9" strokeWidth="1" />
          <rect x="286" y="356" width="24" height="4" rx="1" fill="#f0b429" />
          <path d="M 290 365 h 14 M 290 368 h 9" stroke="#6b7078" strokeWidth="1" />
        </g>
      )}
      {/* hanging sleeve with wing */}
      <path
        d="M 174 322 C 156 336, 148 372, 156 402 L 190 406 C 196 374, 196 342, 198 322 Z"
        fill={`url(#${id}-coat)`}
        stroke="#d6d1c6"
        strokeWidth="1"
      />
      <path d="M 156 402 L 190 406" stroke="#c4bfb3" strokeWidth="2.5" strokeLinecap="round" />
      {/* wing-tip feathers out of the cuff */}
      <g fill="none" stroke="#e7e3d9" strokeWidth="5" strokeLinecap="round">
        <path d="M 166 406 L 158 428" />
        <path d="M 176 408 L 172 432" />
        <path d="M 186 408 L 188 430" />
      </g>
      <g fill="none" stroke="#2a2c33" strokeWidth="3" strokeLinecap="round">
        <path d="M 166 406 L 158 426" />
        <path d="M 176 408 L 172 430" />
        <path d="M 186 408 L 188 428" />
      </g>
    </g>
  );
}

export function Neck({ id, d }: { id: string; d: string }) {
  return (
    <g fill="none" strokeLinecap="round">
      <path d={d} stroke={`url(#${id}-skin)`} strokeWidth="22" />
      <path d={d} stroke={skin.light} strokeWidth="6" opacity="0.45" transform="translate(-4 0)" />
      <path d={d} stroke={skin.deep} strokeWidth="1.5" opacity="0.35" transform="translate(9 0)" />
    </g>
  );
}

export function NeckFluff({ id, cx = 282, cy = 284 }: { id: string; cx?: number; cy?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="24" fill={`url(#${id}-feather)`} />
      <g fill="none" stroke="#4a4d57" strokeWidth="1.4" opacity="0.6">
        <path d={`M ${cx - 18} ${cy - 6} C ${cx - 10} ${cy - 14}, ${cx} ${cy - 16}, ${cx + 10} ${cy - 12}`} />
        <path d={`M ${cx - 14} ${cy + 10} C ${cx - 6} ${cy + 4}, ${cx + 6} ${cy + 4}, ${cx + 16} ${cy + 8}`} />
      </g>
    </g>
  );
}

export type HeadLook = "plain" | "glasses" | "goggles" | "bowtie";

/**
 * Head drawn at origin (0,0) facing +x. Position with a transform.
 */
export function Head({
  look = "plain",
  eyeColor = "#3a2a22",
}: {
  look?: HeadLook;
  eyeColor?: string;
}) {
  return (
    <g>
      {/* down on top of the head */}
      <g fill="none" stroke="#c9c2b4" strokeWidth="2.2" strokeLinecap="round">
        <path d="M -14 -16 C -12 -24, -6 -26, -2 -22" />
        <path d="M -2 -18 C 0 -27, 6 -28, 10 -24" />
        <path d="M 10 -16 C 14 -24, 20 -24, 22 -19" />
      </g>
      <ellipse cx="0" cy="0" rx="28" ry="21" fill={skin.base} transform="rotate(-6)" />
      <ellipse cx="-4" cy="6" rx="22" ry="12" fill={skin.deep} opacity="0.35" transform="rotate(-6)" />
      <ellipse cx="4" cy="-8" rx="16" ry="8" fill={skin.light} opacity="0.55" transform="rotate(-6)" />
      {/* beak */}
      <path d="M 24 -3 C 40 -3, 58 0, 68 4 L 68 12 C 56 14, 40 14, 24 12 Z" fill="#d9a68f" />
      <path d="M 24 12 C 40 14, 56 14, 68 12 L 66 18 C 50 20, 36 18, 24 14 Z" fill="#b98576" />
      <path d="M 26 6 C 42 8, 56 8, 66 8" stroke="#8f5f52" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <ellipse cx="46" cy="2" rx="3" ry="1.5" fill="#8f5f52" opacity="0.7" />
      {/* eye */}
      <circle cx="9" cy="-4" r="10.5" fill="#ffffff" />
      <circle cx="10" cy="-3.5" r="7.5" fill={eyeColor} />
      <circle cx="10.5" cy="-3" r="4" fill="#0d0d0f" />
      <circle cx="7" cy="-7" r="2.2" fill="#ffffff" />
      <path d="M -3 -12 C 4 -18, 16 -18, 22 -11" stroke="#8f6a5e" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <g stroke="#3a2a22" strokeWidth="1.6" strokeLinecap="round">
        <path d="M -1 -13 l -3 -5" />
        <path d="M 7 -16 l -1 -6" />
        <path d="M 15 -16 l 2 -6" />
      </g>
      {look === "glasses" && (
        <g fill="none" stroke="#1c1d21" strokeWidth="2">
          <circle cx="10" cy="-3" r="15" fill="rgba(255,255,255,0.16)" />
          <path d="M 20 8 C 26 20, 22 34, 8 40" strokeWidth="1.2" strokeDasharray="2 2" />
          <path d="M -6 -12 L -12 -18" />
        </g>
      )}
      {look === "goggles" && (
        <g>
          <path d="M -26 -14 C -20 -30, 20 -30, 26 -14" stroke="#1c1d21" strokeWidth="3" fill="none" />
          <rect x="-24" y="-30" width="20" height="13" rx="6" fill="#dfe8ee" stroke="#1c1d21" strokeWidth="2" />
          <rect x="2" y="-30" width="20" height="13" rx="6" fill="#dfe8ee" stroke="#1c1d21" strokeWidth="2" />
          <path d="M -20 -26 h 10 M 6 -26 h 10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
        </g>
      )}
    </g>
  );
}

export function Bowtie({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M -14 -8 L 0 0 L -14 8 Z" fill="#f0b429" />
      <path d="M 14 -8 L 0 0 L 14 8 Z" fill="#f0b429" />
      <rect x="-3" y="-4" width="6" height="8" rx="1.5" fill="#cf9410" />
    </g>
  );
}

/** A tablet held in the near wing, showing a rising line. */
export function Tablet({ id }: { id: string }) {
  return (
    <g transform="rotate(-14 178 428)">
      <rect x="142" y="404" width="76" height="52" rx="5" fill="#1b1c20" stroke="#4a4d55" strokeWidth="1.5" />
      <rect x="148" y="410" width="64" height="40" rx="2" fill={`url(#${id}-screen)`} />
      <g stroke="#3a3e48" strokeWidth="0.8">
        <path d="M 150 420 h 60 M 150 430 h 60 M 150 440 h 60" />
      </g>
      <path d="M 152 444 L 164 438 L 174 440 L 186 426 L 196 428 L 208 414" fill="none" stroke="#f0b429" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="208" cy="414" r="2.2" fill="#f0b429" />
      <text x="152" y="417" fontSize="4.2" fill="#a0a4ae" fontFamily="ui-monospace, monospace">
        OUTPUT INDEX
      </text>
    </g>
  );
}

/** Clipboard held in the near wing. */
export function Clipboard() {
  return (
    <g transform="rotate(8 176 430)">
      <rect x="146" y="402" width="60" height="78" rx="3" fill="#8a6f52" />
      <rect x="150" y="410" width="52" height="66" fill="#fbfaf7" />
      <rect x="164" y="398" width="24" height="10" rx="2" fill="#4a4d55" />
      <g stroke="#b6b0a2" strokeWidth="1.2">
        <path d="M 156 422 h 40 M 156 430 h 40 M 156 438 h 30 M 156 446 h 40 M 156 454 h 24" />
      </g>
      <path d="M 156 462 l 4 5 l 8 -9" stroke="#f0b429" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 170 462 l 4 5 l 8 -9" stroke="#f0b429" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 184 462 l 4 5 l 8 -9" stroke="#f0b429" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}
