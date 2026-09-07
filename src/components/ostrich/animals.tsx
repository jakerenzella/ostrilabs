/*
 * Farm animals in the same drawing language as the ostriches.
 * Each is drawn around its own origin so scenes can place them.
 */

export function AnimalDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-hide`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#d9d4c8" />
      </linearGradient>
      <radialGradient id={`${id}-patch`} cx="40%" cy="35%" r="70%">
        <stop offset="0" stopColor="#3c3e46" />
        <stop offset="1" stopColor="#15161a" />
      </radialGradient>
      <linearGradient id={`${id}-pink`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f5c3b4" />
        <stop offset="1" stopColor="#d48c7e" />
      </linearGradient>
      <linearGradient id={`${id}-wool`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fbfaf6" />
        <stop offset="1" stopColor="#cfc9ba" />
      </linearGradient>
      <linearGradient id={`${id}-hen`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f4e6c8" />
        <stop offset="1" stopColor="#c9a56a" />
      </linearGradient>
      <linearGradient id={`${id}-beam`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#7dd3f0" stopOpacity="0" />
        <stop offset="0.7" stopColor="#7dd3f0" stopOpacity="0.28" />
        <stop offset="1" stopColor="#7dd3f0" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id={`${id}-cone`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#7dd3f0" stopOpacity="0.02" />
        <stop offset="1" stopColor="#7dd3f0" stopOpacity="0.3" />
      </linearGradient>
      <filter id={`${id}-glow`} x="-20%" y="-200%" width="140%" height="500%">
        <feGaussianBlur stdDeviation="3" />
      </filter>
      <pattern id={`${id}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#33363e" strokeWidth="0.5" />
      </pattern>
    </defs>
  );
}


/**
 * A tapered leg with a joint and a cloven hoof. Top edge at (x, y), foot at y + h.
 */
export function Leg({
  x,
  y,
  w,
  h,
  fill,
  hoof = "#1c1d21",
  shade = "rgba(0,0,0,0.18)",
  hoofH = 9,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  hoof?: string;
  shade?: string;
  hoofH?: number;
}) {
  const lw = w * 0.68; // lower leg width
  const inset = (w - lw) / 2;
  const knee = y + h * 0.48;
  const foot = y + h - hoofH;
  const d = [
    `M ${x} ${y}`,
    `L ${x + w} ${y}`,
    `C ${x + w + 0.5} ${y + h * 0.3}, ${x + w - inset + 1.5} ${knee - 6}, ${x + w - inset} ${knee}`,
    `C ${x + w - inset - 0.5} ${knee + 8}, ${x + w - inset + 0.5} ${foot - 6}, ${x + w - inset} ${foot}`,
    `L ${x + inset} ${foot}`,
    `C ${x + inset - 0.5} ${foot - 6}, ${x + inset + 0.5} ${knee + 8}, ${x + inset} ${knee}`,
    `C ${x + inset - 1.5} ${knee - 6}, ${x - 0.5} ${y + h * 0.3}, ${x} ${y}`,
    "Z",
  ].join(" ");
  const shadeD = [
    `M ${x + w} ${y}`,
    `C ${x + w + 0.5} ${y + h * 0.3}, ${x + w - inset + 1.5} ${knee - 6}, ${x + w - inset} ${knee}`,
    `C ${x + w - inset - 0.5} ${knee + 8}, ${x + w - inset + 0.5} ${foot - 6}, ${x + w - inset} ${foot}`,
    `L ${x + w - inset - lw * 0.3} ${foot}`,
    `L ${x + w - inset - lw * 0.3} ${knee}`,
    `L ${x + w - w * 0.3} ${y}`,
    "Z",
  ].join(" ");
  const hx = x + inset - 1.5;
  const hw = lw + 3;
  return (
    <g>
      <path d={d} fill={fill} />
      <path d={shadeD} fill={shade} />
      {/* hock highlight */}
      <ellipse cx={x + w / 2} cy={knee} rx={lw * 0.42} ry="2.5" fill="#fff" opacity="0.14" />
      {/* hoof */}
      <path d={`M ${hx} ${foot} h ${hw} l 1.5 ${hoofH - 2} a 2 2 0 0 1 -2 2 h ${-(hw + 2)} a 2 2 0 0 1 -2 -2 Z`} fill={hoof} />
      <path d={`M ${hx + hw / 2 + 0.75} ${foot + 2} V ${foot + hoofH}`} stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
      <path d={`M ${hx} ${foot} h ${hw}`} stroke="rgba(0,0,0,0.25)" strokeWidth="1.5" />
    </g>
  );
}

/** Floor, grid and vignette for a 600 × 420 scene. */
export function SceneFloor({ id }: { id: string }) {
  return (
    <g>
      <rect width="600" height="420" fill={`url(#${id}-grid)`} opacity="0.6" />
      <line x1="0" x2="600" y1="360" y2="360" stroke="#33363e" strokeWidth="1" />
    </g>
  );
}

/** Holstein cow, facing left, feet on y=0, roughly 260 wide × 190 tall. Origin at front hoof. */
export function Cow({ id }: { id: string }) {
  const body = "M 30 -80 C 20 -130, 70 -165, 130 -160 C 190 -156, 240 -150, 250 -100 C 256 -70, 240 -50, 210 -46 L 70 -46 C 40 -48, 32 -62, 30 -80 Z";
  return (
    <g>
      {/* far legs */}
      <Leg x={64} y={-56} w={22} h={56} fill="#cfc9ba" hoof="#2a2c33" />
      <Leg x={200} y={-56} w={22} h={56} fill="#cfc9ba" hoof="#2a2c33" />
      {/* tail */}
      <path d="M 248 -120 C 268 -100, 270 -60, 258 -30" fill="none" stroke="#d9d4c8" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="258" cy="-26" rx="7" ry="10" fill="#2a2c33" />
      {/* body */}
      <path d={body} fill={`url(#${id}-hide)`} />
      <g fill={`url(#${id}-patch)`}>
        <path d="M 90 -158 C 120 -166, 150 -150, 140 -120 C 132 -98, 96 -100, 86 -122 C 80 -136, 78 -152, 90 -158 Z" />
        <path d="M 180 -150 C 210 -152, 240 -130, 236 -100 C 232 -80, 206 -78, 190 -92 C 176 -104, 166 -140, 180 -150 Z" />
        <path d="M 110 -70 C 130 -84, 160 -80, 168 -60 C 172 -50, 160 -46, 140 -46 L 110 -46 C 100 -52, 100 -62, 110 -70 Z" />
      </g>
      {/* udder */}
      <path d="M 150 -46 C 150 -30, 195 -30, 195 -46 Z" fill={`url(#${id}-pink)`} />
      {/* near legs */}
      <Leg x={40} y={-58} w={26} h={58} fill={`url(#${id}-hide)`} />
      <Leg x={172} y={-58} w={26} h={58} fill={`url(#${id}-hide)`} />
      {/* head */}
      <path d="M 40 -150 C 10 -152, -10 -130, -8 -100 C -6 -78, 10 -66, 34 -68 C 52 -70, 60 -90, 56 -120 C 54 -138, 50 -148, 40 -150 Z" fill={`url(#${id}-hide)`} />
      <path d="M 44 -150 C 60 -150, 62 -128, 54 -118 C 46 -110, 34 -114, 32 -128 C 30 -140, 36 -150, 44 -150 Z" fill={`url(#${id}-patch)`} />
      <path d="M -8 -96 C -12 -76, 6 -64, 30 -66 C 42 -68, 44 -80, 36 -90 C 24 -100, -2 -102, -8 -96 Z" fill={`url(#${id}-pink)`} />
      <ellipse cx="4" cy="-84" rx="4" ry="2.5" fill="#8f5f52" />
      <ellipse cx="20" cy="-82" rx="4" ry="2.5" fill="#8f5f52" />
      {/* eye */}
      <circle cx="18" cy="-122" r="7" fill="#ffffff" />
      <circle cx="17" cy="-121.5" r="4.5" fill="#2b1d18" />
      <circle cx="15.5" cy="-123.5" r="1.5" fill="#ffffff" />
      {/* ears and horns */}
      <path d="M 50 -146 C 66 -160, 84 -150, 78 -138 C 72 -130, 58 -134, 50 -146 Z" fill={`url(#${id}-hide)`} />
      <path d="M 54 -142 C 64 -150, 74 -146, 72 -140 Z" fill={`url(#${id}-pink)`} opacity="0.8" />
      <path d="M 34 -152 C 30 -166, 40 -172, 46 -164" fill="none" stroke="#d9c9a5" strokeWidth="5" strokeLinecap="round" />
      <path d="M 58 -152 C 66 -168, 78 -166, 78 -158" fill="none" stroke="#d9c9a5" strokeWidth="5" strokeLinecap="round" />
    </g>
  );
}

/** Pig, facing right, feet on y=0, ~230 wide. Origin at rear hoof. */
export function Pig({ id }: { id: string }) {
  return (
    <g>
      {/* tail */}
      <path d="M 12 -96 C -4 -104, -8 -90, 2 -86 C 12 -82, 14 -96, 4 -98" fill="none" stroke="#d48c7e" strokeWidth="4" strokeLinecap="round" />
      {/* far legs */}
      <Leg x={44} y={-48} w={24} h={48} fill="#d48c7e" hoof="#6e3f38" hoofH={8} />
      <Leg x={152} y={-48} w={24} h={48} fill="#d48c7e" hoof="#6e3f38" hoofH={8} />
      {/* body */}
      <ellipse cx="100" cy="-90" rx="100" ry="66" fill={`url(#${id}-pink)`} />
      <ellipse cx="80" cy="-116" rx="50" ry="22" fill="#ffffff" opacity="0.18" />
      {/* near legs */}
      <Leg x={22} y={-50} w={28} h={50} fill={`url(#${id}-pink)`} hoof="#6e3f38" hoofH={8} />
      <Leg x={128} y={-50} w={28} h={50} fill={`url(#${id}-pink)`} hoof="#6e3f38" hoofH={8} />
      {/* head, tilted up towards the dispenser */}
      <g transform="translate(190 -118) rotate(-18)">
        <circle cx="0" cy="0" r="50" fill={`url(#${id}-pink)`} />
        <ellipse cx="-8" cy="-22" rx="26" ry="12" fill="#ffffff" opacity="0.18" />
        <ellipse cx="46" cy="10" rx="20" ry="15" fill="#d48c7e" />
        <ellipse cx="46" cy="10" rx="17" ry="12" fill="#e9a596" />
        <ellipse cx="40" cy="9" rx="3.5" ry="5" fill="#8a4c43" />
        <ellipse cx="52" cy="9" rx="3.5" ry="5" fill="#8a4c43" />
        <path d="M 10 30 C 22 38, 36 36, 44 28" fill="none" stroke="#a45f55" strokeWidth="2.5" strokeLinecap="round" />
        {/* eye */}
        <circle cx="12" cy="-12" r="8" fill="#ffffff" />
        <circle cx="13" cy="-12" r="5" fill="#2b1d18" />
        <circle cx="11" cy="-14" r="1.6" fill="#ffffff" />
        {/* ears */}
        <path d="M -30 -34 C -46 -60, -14 -72, -4 -46 C -8 -38, -20 -32, -30 -34 Z" fill={`url(#${id}-pink)`} />
        <path d="M 6 -46 C 10 -76, 40 -70, 34 -44 C 26 -40, 14 -40, 6 -46 Z" fill={`url(#${id}-pink)`} />
        <path d="M 12 -48 C 16 -66, 32 -64, 28 -48 Z" fill="#d48c7e" opacity="0.7" />
      </g>
    </g>
  );
}

/** Hen, facing left, feet on y=0, ~130 wide. Origin between feet. */
export function Hen({ id }: { id: string }) {
  return (
    <g>
      {/* legs */}
      <g stroke="#e0a83a" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M -10 -44 L -12 -6 M -12 -6 l -12 6 M -12 -6 l 10 6 M -12 -6 l -2 6" />
        <path d="M 12 -44 L 12 -6 M 12 -6 l -12 6 M 12 -6 l 10 6 M 12 -6 l -1 6" />
      </g>
      {/* tail feathers */}
      <g fill={`url(#${id}-hen)`} stroke="#a3833f" strokeWidth="0.8">
        <ellipse cx="62" cy="-104" rx="10" ry="30" transform="rotate(35 62 -104)" />
        <ellipse cx="54" cy="-110" rx="9" ry="30" transform="rotate(55 54 -110)" />
        <ellipse cx="46" cy="-116" rx="9" ry="28" transform="rotate(75 46 -116)" />
      </g>
      {/* body */}
      <ellipse cx="0" cy="-84" rx="58" ry="46" fill={`url(#${id}-hen)`} />
      <ellipse cx="-4" cy="-84" rx="34" ry="24" fill="#b88d4a" opacity="0.35" transform="rotate(10 -4 -84)" />
      <path d="M -30 -100 C -20 -70, 10 -62, 30 -70" fill="none" stroke="#a3833f" strokeWidth="1" opacity="0.6" />
      {/* neck and head */}
      <path d="M -44 -110 C -52 -130, -60 -140, -62 -150" fill="none" stroke={`url(#${id}-hen)`} strokeWidth="26" strokeLinecap="round" />
      <circle cx="-64" cy="-158" r="20" fill={`url(#${id}-hen)`} />
      {/* comb */}
      <path d="M -80 -172 C -82 -186, -74 -190, -70 -180 C -68 -192, -58 -194, -56 -182 C -52 -192, -44 -188, -48 -176 Z" fill="#d94a3a" />
      {/* beak and wattle */}
      <path d="M -82 -158 L -104 -152 L -82 -146 Z" fill="#e0a83a" />
      <path d="M -82 -152 L -104 -152" stroke="#a87a1e" strokeWidth="1" />
      <path d="M -78 -144 C -84 -130, -70 -128, -68 -142 Z" fill="#d94a3a" />
      {/* eye */}
      <circle cx="-70" cy="-162" r="5.5" fill="#ffffff" />
      <circle cx="-71" cy="-162" r="3.5" fill="#2b1d18" />
      <circle cx="-72.5" cy="-163.5" r="1.2" fill="#ffffff" />
    </g>
  );
}

/** Sheep, facing right, feet on y=0, ~200 wide. Origin at rear hoof. */
export function Sheep({ id }: { id: string }) {
  return (
    <g>
      {/* legs */}
      <Leg x={42} y={-58} w={16} h={58} fill="#3c3e46" hoof="#15161a" shade="rgba(0,0,0,0.3)" hoofH={7} />
      <Leg x={132} y={-58} w={16} h={58} fill="#3c3e46" hoof="#15161a" shade="rgba(0,0,0,0.3)" hoofH={7} />
      <Leg x={22} y={-60} w={18} h={60} fill="#2a2c33" hoof="#0f1013" shade="rgba(0,0,0,0.3)" hoofH={7} />
      <Leg x={110} y={-60} w={18} h={60} fill="#2a2c33" hoof="#0f1013" shade="rgba(0,0,0,0.3)" hoofH={7} />
      {/* wool */}
      <g fill={`url(#${id}-wool)`}>
        <ellipse cx="90" cy="-100" rx="92" ry="60" />
        <circle cx="20" cy="-110" r="28" />
        <circle cx="40" cy="-140" r="26" />
        <circle cx="80" cy="-152" r="28" />
        <circle cx="122" cy="-146" r="26" />
        <circle cx="156" cy="-120" r="26" />
        <circle cx="30" cy="-70" r="24" />
        <circle cx="150" cy="-72" r="24" />
      </g>
      <g fill="none" stroke="#b9b3a3" strokeWidth="1" opacity="0.6">
        <path d="M 60 -120 C 66 -130, 76 -130, 80 -122" />
        <path d="M 100 -130 C 106 -140, 116 -140, 120 -132" />
        <path d="M 80 -90 C 86 -100, 96 -100, 100 -92" />
      </g>
      {/* tail */}
      <ellipse cx="4" cy="-96" rx="12" ry="9" fill={`url(#${id}-wool)`} />
      {/* head */}
      <path d="M 158 -136 C 186 -140, 206 -118, 202 -94 C 200 -78, 188 -70, 176 -72 C 160 -74, 152 -96, 154 -116 C 155 -126, 156 -134, 158 -136 Z" fill="#2a2c33" />
      <ellipse cx="184" cy="-78" rx="14" ry="8" fill="#3c3e46" />
      <ellipse cx="192" cy="-84" rx="2.5" ry="1.8" fill="#15161a" />
      <ellipse cx="178" cy="-82" rx="2.5" ry="1.8" fill="#15161a" />
      {/* ears */}
      <path d="M 158 -128 C 140 -140, 132 -126, 148 -118 Z" fill="#2a2c33" />
      <path d="M 186 -136 C 196 -156, 212 -148, 200 -130 Z" fill="#2a2c33" />
      {/* eye */}
      <circle cx="184" cy="-112" r="6" fill="#ffffff" />
      <circle cx="185" cy="-112" r="3.8" fill="#15161a" />
      <circle cx="183.5" cy="-113.5" r="1.2" fill="#ffffff" />
      {/* wool tuft on head */}
      <circle cx="170" cy="-140" r="14" fill={`url(#${id}-wool)`} />
      <circle cx="186" cy="-142" r="10" fill={`url(#${id}-wool)`} />
    </g>
  );
}
