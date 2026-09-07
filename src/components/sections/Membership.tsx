import { Fn } from "@/components/Fn";
import { tiers } from "@/lib/content";

export function Membership() {
  return (
    <section id="membership" className="bg-egg">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <h2 className="text-display-md sm:text-display-lg lg:col-span-6">Membership</h2>
          <p className="measure-narrow text-lead text-slate lg:col-span-5 lg:col-start-8 lg:self-end">
            Priced in bushels, billed per season.
            <Fn n={14} /> All tiers include OSTRA-9. All tiers include the same OSTRA-9.
          </p>
        </div>
        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {tiers.map((t) => {
            const featured = "featured" in t && t.featured;
            return (
              <li
                key={t.name}
                className={
                  featured
                    ? "on-dark flex flex-col rounded-[1.5rem] bg-plumage p-7 text-egg shadow-panel md:-my-4 md:p-9"
                    : "flex flex-col rounded-[1.5rem] border border-egg-line bg-paper p-7 md:p-9"
                }
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-display-sm">{t.name}</h3>
                  {featured && <span className="text-[0.8rem] text-egg/60">Most chosen</span>}
                </div>
                <p className={`mt-2 text-[0.95rem] ${featured ? "text-egg/70" : "text-slate"}`}>{t.blurb}</p>
                <p className="mt-8 font-display text-display-md">{t.price}</p>
                <p className={`text-[0.9rem] ${featured ? "text-egg/60" : "text-slate"}`}>{t.per}</p>
                <ul className={`mt-8 flex-1 space-y-3 text-[0.95rem] ${featured ? "text-egg/85" : ""}`}>
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0" aria-hidden="true">
                        <path d="M 3 8.5 l 3.2 3.2 L 13 5" fill="none" stroke="#f0b429" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#disclosures"
                  className={
                    featured
                      ? "mt-10 rounded-full bg-yolk px-5 py-3 text-center font-medium text-plumage transition-colors hover:bg-[#f6c14a]"
                      : "mt-10 rounded-full border border-ink px-5 py-3 text-center font-medium transition-colors hover:bg-ink hover:text-egg"
                  }
                >
                  Choose {t.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
