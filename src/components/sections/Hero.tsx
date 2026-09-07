import { Fn } from "@/components/Fn";
import { Defs } from "@/components/ostrich/parts";
import { OstrichFigure } from "@/components/ostrich/Ostrich";

type Callout = {
  point: [number, number];
  anchor: [number, number];
  side: "left" | "right";
  text: React.ReactNode;
  plain: string;
};

/* Coordinates in a 640 × 640 space; the figure is shifted +80 on x. */
const callouts: Callout[] = [
  {
    point: [392, 74],
    anchor: [300, 30],
    side: "left",
    text: (
      <>
        Cranial capacity: 40 g. Within range.
        <Fn n={2} />
      </>
    ),
    plain: "Cranial capacity: 40 g. Within range.",
  },
  {
    point: [420, 84],
    anchor: [498, 58],
    side: "right",
    text: (
      <>
        Ocular diameter: 50 mm. Larger than the brain.
        <Fn n={2} /> Excellent.
      </>
    ),
    plain: "Ocular diameter: 50 mm. Larger than the brain. Excellent.",
  },
  {
    point: [352, 206],
    anchor: [262, 212],
    side: "left",
    text: <>Neck: 1.1 m. Optimal for oversight.</>,
    plain: "Neck: 1.1 m. Optimal for oversight.",
  },
  {
    point: [382, 356],
    anchor: [508, 330],
    side: "right",
    text: <>Compound carried on person at all times.</>,
    plain: "Compound carried on person at all times.",
  },
  {
    point: [258, 436],
    anchor: [150, 500],
    side: "left",
    text: (
      <>
        Output index: rising. Y-axis withheld.
        <Fn n={10} />
      </>
    ),
    plain: "Output index: rising. Y-axis withheld.",
  },
  {
    point: [330, 530],
    anchor: [470, 560],
    side: "right",
    text: (
      <>
        Sprint output: 70 km/h. Post-protocol.
        <Fn n={9} />
      </>
    ),
    plain: "Sprint output: 70 km/h. Post-protocol.",
  },
];

function Specimen() {
  return (
    <figure className="relative w-full">
      <div className="relative aspect-square w-full">
        <svg viewBox="0 0 640 640" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <Defs id="hero" />
          {/* graph paper */}
          <defs>
            <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#33363e" strokeWidth="0.6" />
            </pattern>
            <radialGradient id="hero-vignette" cx="50%" cy="50%" r="60%">
              <stop offset="0.5" stopColor="#17181c" stopOpacity="0" />
              <stop offset="1" stopColor="#17181c" />
            </radialGradient>
          </defs>
          <rect width="640" height="640" fill="url(#hero-grid)" opacity="0.7" />
          <rect width="640" height="640" fill="url(#hero-vignette)" />
          <g transform="translate(80 0)">
            <OstrichFigure id="hero" pose="tablet" look="goggles" />
          </g>
          <g className="hidden md:block">
            {callouts.map((c, i) => {
              const [px, py] = c.point;
              const [ax, ay] = c.anchor;
              const elbow = c.side === "left" ? ax + 18 : ax - 18;
              return (
                <g key={i}>
                  <path
                    className="callout-line"
                    style={{ animationDelay: `${0.6 + i * 0.12}s` }}
                    d={`M ${px} ${py} L ${elbow} ${ay} L ${ax} ${ay}`}
                    fill="none"
                    stroke="#8b8f98"
                    strokeWidth="1"
                    pathLength={1}
                  />
                  <circle cx={px} cy={py} r="3.5" fill="#f0b429" />
                  <circle cx={px} cy={py} r="7" fill="none" stroke="#f0b429" strokeWidth="1" opacity="0.5" />
                </g>
              );
            })}
          </g>
        </svg>
        <div className="absolute inset-0 hidden md:block">
          {callouts.map((c, i) => {
            const [ax, ay] = c.anchor;
            return (
              <div
                key={i}
                className="absolute w-[15rem] text-[0.8rem] leading-snug text-egg/90"
                style={{
                  left: `${(ax / 640) * 100}%`,
                  top: `${(ay / 640) * 100}%`,
                  transform: c.side === "left" ? "translate(-100%, -50%)" : "translate(0, -50%)",
                  textAlign: c.side === "left" ? "right" : "left",
                  paddingRight: c.side === "left" ? "0.6rem" : 0,
                  paddingLeft: c.side === "right" ? "0.6rem" : 0,
                }}
              >
                <div className="callout" style={{ animationDelay: `${0.7 + i * 0.12}s` }}>
                  {c.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <figcaption className="mt-2 text-[0.8rem] text-egg/60 md:hidden">
        <p className="mb-2">Specimen 001. Head of Diagnostics, self-assessed.</p>
        <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {callouts.map((c) => (
            <li key={c.plain} className="flex gap-2">
              <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-yolk" />
              <span>{c.text}</span>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <section className="on-dark relative overflow-hidden bg-plumage text-egg">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-6 lg:grid-cols-12 lg:gap-6 lg:px-10 lg:pb-24 lg:pt-10">
        <div className="lg:col-span-6">
          <p className="rise rise-1 mb-6 inline-flex items-center gap-2 rounded-full border border-plumage-line px-3 py-1 text-[0.8rem] text-egg/75">
            <span className="pulse h-1.5 w-1.5 rounded-full bg-yolk" />
            Now enrolling cows, pigs, horses, hens, sheep, and one goat
          </p>
          <h1 className="rise rise-2 text-display-lg sm:text-display-xl">
            Every animal on the farm, optimised.
          </h1>
          <p className="rise rise-3 measure-narrow mt-7 text-lead text-egg/80">
            OSTRA-9 is a single daily compound, formulated by ostriches, that addresses 214 biomarkers at once.
            <Fn n={1} /> Full-body diagnostics, one protocol, measurable output.
          </p>
          <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#membership"
              className="rounded-full bg-yolk px-6 py-3.5 font-medium text-plumage shadow-lift transition-colors hover:bg-[#f6c14a]"
            >
              Start your protocol
            </a>
            <a
              href="#evidence"
              className="rounded-full border border-plumage-line px-6 py-3.5 font-medium text-egg transition-colors hover:border-egg/50"
            >
              Read the evidence
            </a>
          </div>
          <p className="rise rise-4 mt-10 text-[0.85rem] text-egg/55">
            Behind the long barn, Manor Farm. Open dawn until the dogs come round.
          </p>
        </div>
        <div className="rise rise-2 lg:col-span-6">
          <Specimen />
        </div>
      </div>
    </section>
  );
}
