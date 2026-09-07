import { AnimalDefs, Cow, Hen, Pig, SceneFloor, Sheep } from "./animals";
import { OstrichFigure } from "./Ostrich";
import { Defs } from "./parts";

const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";

/** Floating holographic readout card. */
function Readout({
  x,
  y,
  w = 150,
  lines,
  accent = 0,
}: {
  x: number;
  y: number;
  w?: number;
  lines: string[];
  accent?: number;
}) {
  const h = 18 + lines.length * 13;
  return (
    <g className="hover-float">
      <rect x={x} y={y} width={w} height={h} rx="5" fill="#1b1c20" opacity="0.92" stroke="#7dd3f0" strokeWidth="0.8" strokeOpacity="0.7" />
      <circle cx={x + 10} cy={y + 10} r="2.5" fill="#7dd3f0" className="pulse" />
      <text x={x + 18} y={y + 13} fontSize="7" fill="#7dd3f0" fontFamily={MONO} letterSpacing="0.6">
        OSTRISCAN
      </text>
      {lines.map((l, i) => (
        <text
          key={l}
          x={x + 10}
          y={y + 30 + i * 13}
          fontSize="8.5"
          fill={i === accent ? "#f0b429" : "#e6e1d4"}
          fontFamily={MONO}
        >
          {l}
        </text>
      ))}
    </g>
  );
}

function Node({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="3" fill="#7dd3f0" />
      <circle cx={x} cy={y} r="7" fill="none" stroke="#7dd3f0" strokeWidth="1" opacity="0.5" />
    </g>
  );
}

/** Corner brackets for a HUD bounding box. */
function Brackets({ x, y, w, h, s = 14 }: { x: number; y: number; w: number; h: number; s?: number }) {
  return (
    <g fill="none" stroke="#7dd3f0" strokeWidth="1.2" opacity="0.8">
      <path d={`M ${x} ${y + s} V ${y} H ${x + s}`} />
      <path d={`M ${x + w - s} ${y} H ${x + w} V ${y + s}`} />
      <path d={`M ${x} ${y + h - s} V ${y + h} H ${x + s}`} />
      <path d={`M ${x + w - s} ${y + h} H ${x + w} V ${y + h - s}`} />
    </g>
  );
}

function Beam({ id, x, w, from, to }: { id: string; x: number; w: number; from: number; to: number }) {
  return (
    <g className="sweep" style={{ "--sweep": `${to - from}px` } as React.CSSProperties}>
      <rect x={x} y={from - 56} width={w} height={56} fill={`url(#${id}-beam)`} />
      <rect x={x} y={from - 2} width={w} height="4" fill="#7dd3f0" filter={`url(#${id}-glow)`} />
      <rect x={x} y={from - 1} width={w} height="2" fill="#dff6ff" />
    </g>
  );
}

const sceneClass = "h-auto w-full";

export function CowScan() {
  const id = "cow";
  return (
    <svg viewBox="0 0 600 420" className={sceneClass} role="img" aria-label="A Holstein cow standing inside a scanning gantry while a light beam sweeps over her">
      <AnimalDefs id={id} />
      <SceneFloor id={id} />
      {/* platform */}
      <rect x="90" y="356" width="420" height="14" rx="4" fill="#23252b" stroke="#33363e" />
      <rect x="100" y="356" width="400" height="2" fill="#7dd3f0" opacity="0.7" />
      {/* gantry */}
      <rect x="96" y="44" width="22" height="316" rx="6" fill="#23252b" stroke="#33363e" />
      <rect x="482" y="44" width="22" height="316" rx="6" fill="#23252b" stroke="#33363e" />
      <rect x="96" y="44" width="408" height="22" rx="6" fill="#23252b" stroke="#33363e" />
      <g fill="#7dd3f0">
        {[140, 200, 260, 320, 380, 440].map((x) => (
          <rect key={x} x={x} y="52" width="14" height="4" rx="1" opacity="0.8" />
        ))}
      </g>
      <text x="300" y="60" fontSize="7" textAnchor="middle" fill="#6b7078" fontFamily={MONO} letterSpacing="1">
        OSTRISCAN MK II
      </text>
      <g transform="translate(166 356)">
        <Cow id={id} />
      </g>
      <Brackets x={150} y={178} w={300} h={178} />
      <Node x={228} y={252} />
      <Node x={322} y={218} />
      <Node x={392} y={300} />
      <path d="M 322 218 L 322 150 L 372 150" fill="none" stroke="#7dd3f0" strokeWidth="0.8" opacity="0.6" />
      <Readout x={372} y={124} w={130} lines={["MARKER 118 / 214", "HEIGHT: 1.4 M", "DIFFERENT: YES"]} accent={2} />
      <path d="M 228 252 L 190 300 L 150 300" fill="none" stroke="#7dd3f0" strokeWidth="0.8" opacity="0.6" />
      <text x="20" y="303" fontSize="8" fill="#7dd3f0" fontFamily={MONO}>
        M-042 UDDER OK
      </text>
      <clipPath id={`${id}-clip`}>
        <rect x="118" y="66" width="364" height="290" />
      </clipPath>
      <g clipPath={`url(#${id}-clip)`}>
        <Beam id={id} x={118} w={364} from={70} to={350} />
      </g>
    </svg>
  );
}

export function PigDispenser() {
  const id = "pig";
  return (
    <svg viewBox="0 0 600 420" className={sceneClass} role="img" aria-label="A pig looking up at an OSTRA-9 dispenser as a capsule drops into a bowl">
      <AnimalDefs id={id} />
      <SceneFloor id={id} />
      {/* dispenser */}
      <rect x="418" y="104" width="76" height="256" rx="10" fill="#23252b" stroke="#33363e" />
      <rect x="418" y="104" width="76" height="256" rx="10" fill="url(#pig-sheen)" />
      <defs>
        <linearGradient id="pig-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3a3d46" stopOpacity="0.6" />
          <stop offset="0.5" stopColor="#23252b" stopOpacity="0" />
          <stop offset="1" stopColor="#0f1013" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="pig-cap-y" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7c556" />
          <stop offset="1" stopColor="#c98f0f" />
        </linearGradient>
      </defs>
      <rect x="428" y="120" width="56" height="70" rx="4" fill="#101116" stroke="#33363e" />
      <g fontFamily={MONO} fill="#a0a4ae">
        <text x="433" y="134" fontSize="6.5">OSTRA-9</text>
        <text x="433" y="146" fontSize="6.5">DOSE 1 / 1</text>
        <text x="433" y="158" fontSize="6.5">SPECIES: ANY</text>
        <text x="433" y="176" fontSize="7" fill="#7dd3f0">DISPENSING</text>
      </g>
      <rect x="434" y="182" width="44" height="2" fill="#7dd3f0" opacity="0.8" />
      <rect x="440" y="228" width="32" height="6" rx="2" fill="#0f1013" stroke="#4a4d55" />
      <circle cx="456" cy="248" r="3" fill="#7dd3f0" className="pulse" />
      <text x="456" y="326" fontSize="7" textAnchor="middle" fill="#6b7078" fontFamily={MONO} letterSpacing="1">
        MK II
      </text>
      {/* falling capsule */}
      <g transform="translate(456 276) rotate(72)">
        <path d="M -16 -6 h 16 v 12 h -16 a 6 6 0 0 1 0 -12 Z" fill="url(#pig-cap-y)" />
        <path d="M 0 -6 h 16 a 6 6 0 0 1 0 12 h -16 Z" fill="#f3f0e8" />
      </g>
      <g stroke="#7dd3f0" strokeWidth="1" opacity="0.5" strokeLinecap="round">
        <path d="M 446 250 v 10 M 466 250 v 10 M 456 240 v 6" />
      </g>
      {/* bowl */}
      <path d="M 400 334 C 402 356, 510 356, 512 334 Z" fill="#33363e" />
      <ellipse cx="456" cy="334" rx="56" ry="9" fill="#1b1c20" stroke="#4a4d55" />
      <g>
        <ellipse cx="440" cy="332" rx="9" ry="4" fill="#f0b429" />
        <ellipse cx="466" cy="333" rx="9" ry="4" fill="#f3f0e8" />
        <ellipse cx="452" cy="336" rx="9" ry="4" fill="#f0b429" transform="rotate(-20 452 336)" />
      </g>
      <g transform="translate(120 356)">
        <Pig id={id} />
      </g>
      <Readout x={60} y={80} w={150} lines={["MEMBER: NAPOLEON", "COMPLIANCE: 100%", "APPETITE: IN RANGE"]} accent={1} />
      <path d="M 210 118 L 260 118 L 296 200" fill="none" stroke="#7dd3f0" strokeWidth="0.8" opacity="0.6" />
      <Node x={296} y={200} />
    </svg>
  );
}

export function HenPad() {
  const id = "hen";
  return (
    <svg viewBox="0 0 600 420" className={sceneClass} role="img" aria-label="A hen standing on a glowing circular scan pad under a cone of light">
      <AnimalDefs id={id} />
      <SceneFloor id={id} />
      {/* light cone */}
      <path d="M 196 346 L 404 346 L 352 40 L 248 40 Z" fill={`url(#${id}-cone)`} />
      <g fill="none" stroke="#7dd3f0" strokeWidth="0.8" opacity="0.35">
        <ellipse cx="300" cy="300" rx="86" ry="10" />
        <ellipse cx="300" cy="240" rx="76" ry="9" />
        <ellipse cx="300" cy="180" rx="66" ry="8" />
        <ellipse cx="300" cy="120" rx="58" ry="7" />
      </g>
      {/* pad */}
      <ellipse cx="300" cy="350" rx="114" ry="20" fill="#23252b" stroke="#33363e" />
      <ellipse cx="300" cy="346" rx="104" ry="16" fill="#1b1c20" />
      <ellipse cx="300" cy="346" rx="104" ry="16" fill="none" stroke="#7dd3f0" strokeWidth="2" opacity="0.9" />
      <ellipse cx="300" cy="346" rx="70" ry="10" fill="none" stroke="#7dd3f0" strokeWidth="0.8" opacity="0.5" />
      <text x="300" y="376" fontSize="7" textAnchor="middle" fill="#6b7078" fontFamily={MONO} letterSpacing="1">
        MICRO-SCAN PAD
      </text>
      <g transform="translate(300 344)">
        <Hen id={id} />
      </g>
      <Brackets x={200} y={140} w={200} h={210} s={12} />
      <Node x={236} y={186} />
      <path d="M 236 186 L 236 110 L 410 110" fill="none" stroke="#7dd3f0" strokeWidth="0.8" opacity="0.6" />
      <Readout x={410} y={84} w={150} lines={["MEMBER: HEN 04", "HEIGHT: 0.4 M", "EGG OUTPUT: ELEVATED"]} accent={2} />
      <clipPath id={`${id}-clip`}>
        <path d="M 196 346 L 404 346 L 352 40 L 248 40 Z" />
      </clipPath>
      <g clipPath={`url(#${id}-clip)`}>
        <Beam id={id} x={180} w={240} from={60} to={340} />
      </g>
    </svg>
  );
}

export function SheepMonitor() {
  const id = "sheep";
  return (
    <svg viewBox="0 0 600 420" className={sceneClass} role="img" aria-label="A sheep wearing a sensor collar while an ostrich in a lab coat reads a tablet beside it">
      <AnimalDefs id={id} />
      <Defs id={`${id}-o`} />
      <SceneFloor id={id} />
      <g transform="translate(70 360)">
        <Sheep id={id} />
        {/* sensor collar */}
        <rect x="136" y="-138" width="14" height="52" rx="6" fill="#1c1d21" stroke="#7dd3f0" strokeWidth="1" />
        <circle cx="143" cy="-114" r="2.6" fill="#7dd3f0" className="pulse" />
        <rect x="139" y="-130" width="8" height="2" fill="#4a4d55" />
        <rect x="139" y="-100" width="8" height="2" fill="#4a4d55" />
      </g>
      <path d="M 213 246 L 213 140 L 170 140" fill="none" stroke="#7dd3f0" strokeWidth="0.8" opacity="0.6" />
      <Node x={213} y={246} />
      <Readout x={20} y={96} w={150} lines={["MEMBER: MURIEL 2", "WOOL DENSITY: HIGH", "MOOD: SHEEPISH"]} accent={1} />
      <g transform="translate(300 40) scale(0.5)">
        <OstrichFigure id={`${id}-o`} pose="tablet" look="glasses" />
      </g>
      <text x="300" y="378" fontSize="7" fill="#6b7078" fontFamily={MONO} letterSpacing="1">
        CONTINUOUS MONITORING
      </text>
    </svg>
  );
}
