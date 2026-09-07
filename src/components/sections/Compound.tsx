import { Fn } from "@/components/Fn";
import { ingredients } from "@/lib/content";

function Capsule() {
  return (
    <svg viewBox="0 0 320 140" className="w-full max-w-sm" role="img" aria-label="An OSTRA-9 capsule">
      <defs>
        <linearGradient id="cap-y" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7c556" />
          <stop offset="0.55" stopColor="#f0b429" />
          <stop offset="1" stopColor="#c98f0f" />
        </linearGradient>
        <linearGradient id="cap-w" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#efece4" />
          <stop offset="1" stopColor="#c9c3b4" />
        </linearGradient>
        <filter id="cap-shadow" x="-10%" y="-10%" width="120%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#1c1d21" floodOpacity="0.22" />
        </filter>
      </defs>
      <g filter="url(#cap-shadow)" transform="rotate(-14 160 70)">
        <path d="M 60 40 h 100 v 60 h -100 a 30 30 0 0 1 0 -60 Z" fill="url(#cap-y)" />
        <path d="M 160 40 h 100 a 30 30 0 0 1 0 60 h -100 Z" fill="url(#cap-w)" />
        <rect x="158" y="40" width="4" height="60" fill="#b78412" opacity="0.5" />
        <ellipse cx="120" cy="52" rx="44" ry="5" fill="#ffffff" opacity="0.35" />
        <ellipse cx="220" cy="52" rx="44" ry="5" fill="#ffffff" opacity="0.6" />
        <text x="178" y="76" fontFamily="var(--font-bricolage), sans-serif" fontSize="14" fontWeight="600" fill="#6b7078" letterSpacing="0.5">
          OSTRA-9
        </text>
      </g>
    </svg>
  );
}

export function Compound() {
  return (
    <section id="compound" className="bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-28">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-display-md sm:text-display-lg">One compound. Nine active systems.</h2>
            <p className="measure-narrow mt-6 text-lead text-slate">
              OSTRA-9 was developed at our facility behind the long barn over eleven weeks of rigorous internal
              testing.
              <Fn n={6} /> It is taken once daily by every species on the farm, in the same dose, from the same
              trough.
            </p>
            <div className="mt-10">
              <Capsule />
            </div>
            <p className="mt-6 text-[0.85rem] text-slate">
              OSTRA-9 is not a medicine.
              <Fn n={12} /> It is a capsule.
            </p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">OSTRA-9 formulary</caption>
            <thead>
              <tr className="border-b border-ink text-[0.85rem] text-slate">
                <th scope="col" className="py-3 pr-4 font-medium">Ingredient</th>
                <th scope="col" className="py-3 pr-4 font-medium">Per dose</th>
                <th scope="col" className="hidden py-3 font-medium sm:table-cell">Rationale</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((row) => (
                <tr key={row.name} className="border-b border-egg-line align-top">
                  <th scope="row" className="py-4 pr-4 font-display text-[1.1rem] font-medium">
                    {row.name}
                    <p className="mt-1 text-[0.9rem] font-normal text-slate sm:hidden">
                      {row.role}
                      {row.fn && <Fn n={row.fn} />}
                    </p>
                  </th>
                  <td className="whitespace-nowrap py-4 pr-4 text-[0.95rem] tabular-nums">{row.dose}</td>
                  <td className="hidden py-4 text-[0.95rem] text-slate sm:table-cell">
                    {row.role}
                    {row.fn && <Fn n={row.fn} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
