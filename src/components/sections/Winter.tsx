import { comparison } from "@/lib/content";
import { Wave } from "@/components/illustrations/Wave";

export function Winter() {
  return (
    <section className="bg-neck-light">
      <Wave color="#fff6df" flip />
      <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center py-12 md:py-20">
        <div>
          <h2 className="text-4xl md:text-5xl">Last winter was hard. This one doesn’t have to be.</h2>
          <p className="mt-6 text-lg leading-relaxed max-w-lg">
            Food ran low. Sickness spread. Coolabah Creek was planning to spend its bushels on premium feed again. Feed is fine. Feed is what you did last year.
          </p>
          <p className="mt-4 text-lg leading-relaxed max-w-lg">
            OMNI-01 costs exactly the same. It just does considerably more, according to everyone who has taken it.
          </p>
        </div>
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full text-left">
            <caption className="sr-only">Premium feed compared with OMNI-01</caption>
            <thead className="bg-egg text-butter font-display text-lg">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Compare</th>
                {comparison.columns.map((c, i) => (
                  <th key={c} scope="col" className={`px-4 py-3 font-semibold ${i === 1 ? "text-wattle" : ""}`}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, i) => (
                <tr key={row.label} className={i % 2 ? "bg-butter" : ""}>
                  <th scope="row" className="px-4 py-3 font-semibold text-sm sm:text-base">{row.label}</th>
                  {row.values.map((v, j) => (
                    <td key={j} className={`px-4 py-3 font-display text-lg ${j === 1 ? "font-bold" : ""}`}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <p className="fineprint px-4 py-3 border-t-[3px] border-egg">{comparison.footnote}</p>
        </div>
      </div>
    </section>
  );
}
