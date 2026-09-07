import { disclosures } from "@/lib/content";

export function Disclosures() {
  return (
    <section id="disclosures" className="border-t border-egg-line bg-egg-deep">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <h2 className="text-display-sm">Disclosures</h2>
        <p className="measure mt-3 text-[0.9rem] text-slate">
          Every numbered claim on this page refers to one of the following. Ostrilabs is committed to transparency
          in a typeface of this size.
        </p>
        <ol className="mt-8 grid grid-cols-1 gap-x-10 gap-y-3 text-[0.85rem] leading-relaxed text-slate md:grid-cols-2">
          {disclosures.map((d) => (
            <li key={d.n} id={`fn-${d.n}`} className="disclosure flex gap-3 rounded-md px-2 py-1 -mx-2">
              <span className="w-5 shrink-0 font-display text-ink tabular-nums">{d.n}</span>
              <span>{d.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
