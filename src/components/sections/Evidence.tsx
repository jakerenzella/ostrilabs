import { Fn } from "@/components/Fn";
import { findings, outputSeries } from "@/lib/content";

const W = 560;
const H = 300;
const PAD = { top: 28, right: 64, bottom: 44, left: 24 };
const DOMAIN: [number, number] = [20, 80];

function OutputChart() {
  const n = outputSeries.length;
  const x = (i: number) => PAD.left + (i / (n - 1)) * (W - PAD.left - PAD.right);
  const y = (v: number) =>
    PAD.top + (1 - (v - DOMAIN[0]) / (DOMAIN[1] - DOMAIN[0])) * (H - PAD.top - PAD.bottom);
  const line = outputSeries.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(v)}`).join(" ");
  const area = `${line} L ${x(n - 1)} ${H - PAD.bottom} L ${x(0)} ${H - PAD.bottom} Z`;
  const last = outputSeries[n - 1];

  return (
    <figure className="rounded-[1.25rem] border border-plumage-line bg-plumage-soft p-5 sm:p-7">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-display text-[1.1rem] font-medium">Farm output index, weeks 0 to 11</span>
        <span className="text-[0.85rem] text-egg/55">Treatment group, n = 1 farm</span>
      </figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-4 w-full" role="img" aria-labelledby="output-chart-title output-chart-desc">
        <title id="output-chart-title">Farm output index over eleven weeks</title>
        <desc id="output-chart-desc">
          A single line rising from 31 in week 0 to 71 in week 11. The vertical axis has no labels.
        </desc>
        <defs>
          <linearGradient id="output-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0b429" stopOpacity="0.28" />
            <stop offset="1" stopColor="#f0b429" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* recessive grid without values */}
        {[0, 1, 2, 3, 4].map((g) => {
          const gy = PAD.top + (g / 4) * (H - PAD.top - PAD.bottom);
          return <line key={g} x1={PAD.left} x2={W - PAD.right} y1={gy} y2={gy} stroke="#33363e" strokeWidth="1" />;
        })}
        <path d={area} fill="url(#output-fill)" />
        <path d={line} fill="none" stroke="#f0b429" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        {outputSeries.map((v, i) => (
          <g key={i}>
            <rect
              x={x(i) - (W - PAD.left - PAD.right) / (n - 1) / 2}
              y={PAD.top}
              width={(W - PAD.left - PAD.right) / (n - 1)}
              height={H - PAD.top - PAD.bottom}
              fill="transparent"
            >
              <title>{`Week ${i}: ${v}. Unit withheld.`}</title>
            </rect>
            {(i === 0 || i === n - 1) && (
              <circle cx={x(i)} cy={y(v)} r="4.5" fill="#f0b429" stroke="#23252b" strokeWidth="2" />
            )}
          </g>
        ))}
        <text x={x(n - 1) + 12} y={y(last) + 4} fontSize="13" fill="#f3f0e8" fontFamily="var(--font-instrument), sans-serif">
          {last}
        </text>
        {/* x axis */}
        <line x1={PAD.left} x2={W - PAD.right} y1={H - PAD.bottom} y2={H - PAD.bottom} stroke="#4a4d55" strokeWidth="1" />
        {outputSeries.map((_, i) =>
          i % 2 === 0 || i === n - 1 ? (
            <text
              key={i}
              x={x(i)}
              y={H - PAD.bottom + 20}
              fontSize="12"
              textAnchor="middle"
              fill="#8b8f98"
              fontFamily="var(--font-instrument), sans-serif"
            >
              {i}
            </text>
          ) : null,
        )}
        <text x={PAD.left} y={H - 4} fontSize="11" fill="#6b7078" fontFamily="var(--font-instrument), sans-serif">
          Week
        </text>
        <text x={PAD.left} y={PAD.top - 12} fontSize="11" fill="#6b7078" fontFamily="var(--font-instrument), sans-serif">
          Output
        </text>
      </svg>
      <p className="mt-3 text-[0.85rem] text-egg/55">
        Y-axis intentionally unlabelled.
        <Fn n={10} /> Hover a week for its value.
      </p>
    </figure>
  );
}

export function Evidence() {
  return (
    <section id="evidence" className="on-dark bg-plumage text-egg">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-28">
        <div className="lg:col-span-5">
          <h2 className="text-display-md sm:text-display-lg">The evidence</h2>
          <p className="measure-narrow mt-6 text-lead text-egg/75">
            Eleven weeks. One farm. Every finding below was reviewed by three independent scientists before we
            wrote it down.
            <Fn n={5} />
          </p>
          <ul className="mt-10 space-y-6">
            {findings.map((f) => (
              <li key={f.text} className="flex gap-4 border-t border-plumage-line pt-5">
                <span className="mt-[0.55em] h-2 w-2 shrink-0 rounded-full bg-yolk" aria-hidden="true" />
                <p className="text-[1rem] leading-relaxed text-egg/85">
                  {f.text}
                  {f.fn && <Fn n={f.fn} />}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <OutputChart />
          <blockquote className="mt-8 border-l-2 border-yolk pl-6">
            <p className="text-display-sm font-display">
              “The data is very strong. We have looked at it many times.”
            </p>
            <footer className="mt-3 text-[0.9rem] text-egg/60">Dr Struthio Camelus, Chief Scientific Officer</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
