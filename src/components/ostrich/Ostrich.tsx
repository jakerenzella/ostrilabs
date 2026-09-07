import {
  Body,
  Clipboard,
  Coat,
  Defs,
  Head,
  Legs,
  Neck,
  NeckFluff,
  Shadow,
  Tablet,
  type HeadLook,
} from "./parts";

export type OstrichPose = "tablet" | "clipboard" | "microscope" | "scanner";

type Props = {
  id: string;
  pose?: OstrichPose;
  look?: HeadLook;
  className?: string;
  title?: string;
};

/** A `<g>` containing the whole scientist, in the 480 × 640 space. */
export function OstrichFigure({ id, pose = "tablet", look = "plain" }: Omit<Props, "className">) {
  return (
    <g>
      <Shadow />
      {pose === "microscope" && <Bench />}
      <Legs id={id} />
      <Body id={id} />
      <Coat id={id} />
      {pose === "tablet" && <Tablet id={id} />}
      {pose === "clipboard" && <Clipboard />}

      {pose === "scanner" ? (
        <>
          <NeckFluff id={id} />
          <Neck id={id} d="M 283 282 C 300 236, 302 204, 330 180 L 352 172" />
          <Ostriscan id={id} />
        </>
      ) : pose === "microscope" ? (
        <>
          <Microscope />
          <NeckFluff id={id} />
          <Neck id={id} d="M 283 282 C 330 230, 392 246, 400 300 C 402 312, 401 324, 400 332" />
          <g transform="translate(400 336) rotate(110)">
            <Head look={look} />
          </g>
        </>
      ) : (
        <>
          <NeckFluff id={id} />
          <Neck id={id} d="M 283 282 C 298 240, 262 200, 286 158 C 300 134, 318 118, 326 100" />
          <g transform="translate(330 88)">
            <Head look={look} />
          </g>
        </>
      )}
    </g>
  );
}

export function Ostrich({ id, pose, look, className, title }: Props) {
  return (
    <svg
      viewBox="0 0 480 640"
      className={className}
      role="img"
      aria-label={title ?? "An ostrich in a lab coat"}
    >
      <Defs id={id} />
      <OstrichFigure id={id} pose={pose} look={look} />
    </svg>
  );
}

function Bench() {
  return (
    <g>
      <rect x="330" y="430" width="150" height="12" rx="2" fill="#8a6f52" />
      <rect x="330" y="442" width="150" height="4" fill="#6b5540" />
      <rect x="344" y="446" width="10" height="160" fill="#4a4d55" />
      <rect x="456" y="446" width="10" height="160" fill="#4a4d55" />
      <rect x="344" y="520" width="122" height="6" fill="#4a4d55" />
      {/* a flask and rack on the bench */}
      <path d="M 446 396 l 0 14 l -10 18 h 32 l -10 -18 v -14 Z" fill="#dfe8ee" opacity="0.85" stroke="#9aa5ae" strokeWidth="1" />
      <path d="M 438 420 h 28 l -10 -18 v -6 h -8 v 6 Z" fill="#f0b429" opacity="0.8" />
    </g>
  );
}

function Microscope() {
  return (
    <g>
      <rect x="378" y="414" width="66" height="16" rx="3" fill="#2a2c33" />
      <path d="M 430 414 C 442 386, 436 366, 416 358" fill="none" stroke="#3a3e48" strokeWidth="9" strokeLinecap="round" />
      <rect x="384" y="384" width="46" height="6" rx="1" fill="#3a3e48" />
      <rect x="396" y="390" width="22" height="4" fill="#dfe8ee" opacity="0.8" />
      <circle cx="407" cy="392" r="3" fill="#f0b429" />
      <g transform="rotate(-8 403 372)">
        <rect x="397" y="354" width="12" height="32" rx="2" fill="#4a4d55" />
        <rect x="393" y="346" width="20" height="9" rx="2" fill="#1c1d21" />
        <rect x="399" y="386" width="8" height="8" rx="1" fill="#1c1d21" />
      </g>
      <circle cx="392" cy="422" r="3" fill="#f0b429" />
    </g>
  );
}

/** The Ostriscan: a grain silo, a photocopier, and a round port for the head. */
function Ostriscan({ id }: { id: string }) {
  return (
    <g>
      <rect x="338" y="36" width="142" height="570" rx="12" fill="#23252b" stroke="#33363e" strokeWidth="1.5" />
      <rect x="338" y="36" width="142" height="570" rx="12" fill="url(#ostriscan-sheen)" opacity="0.5" />
      <defs>
        <linearGradient id="ostriscan-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3a3d46" />
          <stop offset="0.3" stopColor="#23252b" stopOpacity="0" />
          <stop offset="1" stopColor="#0f1013" />
        </linearGradient>
      </defs>
      {/* head port */}
      <circle cx="342" cy="172" r="32" fill="#0f1013" stroke="#4a4d55" strokeWidth="3" />
      <circle cx="342" cy="172" r="26" fill="#000" />
      <circle cx="342" cy="172" r="32" fill="none" stroke="#f0b429" strokeWidth="1.5" strokeDasharray="4 6" className="pulse" />
      {/* screen */}
      <rect x="366" y="240" width="98" height="150" rx="4" fill={`url(#${id}-screen)`} stroke="#3a3e48" strokeWidth="1" />
      <g fontFamily="ui-monospace, monospace" fill="#a0a4ae">
        <text x="374" y="256" fontSize="6.5">READING</text>
        <text x="374" y="266" fontSize="6.5">MARKER 118 / 214</text>
        <text x="374" y="276" fontSize="6.5">HEIGHT: 2.4 M</text>
        <text x="374" y="286" fontSize="6.5">HEIGHT: 2.4 M</text>
        <text x="374" y="296" fontSize="6.5">HEIGHT: 2.4 M</text>
        <text x="374" y="306" fontSize="6.5" fill="#f0b429">DIFFERENT: YES</text>
      </g>
      <path
        d="M 374 350 l 8 0 l 4 -14 l 5 22 l 4 -10 l 6 2 l 8 0 l 4 -18 l 5 26 l 4 -8 l 6 0 l 8 0 l 4 -12 l 6 14 l 4 -2"
        fill="none"
        stroke="#f0b429"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <g stroke="#3a3e48" strokeWidth="0.7">
        <path d="M 374 330 h 82 M 374 372 h 82" />
      </g>
      <clipPath id={`${id}-screenclip`}>
        <rect x="366" y="240" width="98" height="150" rx="4" />
      </clipPath>
      <g clipPath={`url(#${id}-screenclip)`}>
        <rect x="366" y="236" width="98" height="3" fill="#f0b429" opacity="0.5" className="scanline" style={{ transformBox: "view-box" }} />
      </g>
      {/* indicator lights and buttons */}
      <circle cx="380" cy="420" r="4" fill="#f0b429" className="pulse" />
      <circle cx="396" cy="420" r="4" fill="#3a3e48" />
      <circle cx="412" cy="420" r="4" fill="#3a3e48" />
      <rect x="366" y="440" width="98" height="8" rx="2" fill="#33363e" />
      <rect x="366" y="456" width="60" height="8" rx="2" fill="#33363e" />
      {/* photocopier tray */}
      <rect x="352" y="520" width="114" height="6" rx="1" fill="#33363e" />
      <rect x="360" y="526" width="98" height="30" rx="2" fill="#1b1c20" />
      <rect x="366" y="530" width="86" height="1.5" fill="#fbfaf7" opacity="0.8" />
      <rect x="366" y="536" width="86" height="1.5" fill="#fbfaf7" opacity="0.5" />
      {/* vertical wordmark */}
      <text
        x="472"
        y="600"
        fontSize="13"
        fill="#6b7078"
        fontFamily="var(--font-bricolage), sans-serif"
        fontWeight="600"
        transform="rotate(-90 472 600)"
        letterSpacing="1"
      >
        OSTRISCAN
      </text>
    </g>
  );
}
