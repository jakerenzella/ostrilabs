import { badges, chart, statNotes, stats } from "@/lib/content";
import { Chart } from "@/components/illustrations/Chart";
import { StudyDialog } from "@/components/StudyDialog";
import { Portrait } from "@/components/illustrations/Portrait";

export function Findings() {
  return (
    <section id="findings" className="bg-butter">
      <div className="wrap py-14 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] items-end">
          <div>
            <h2 className="text-4xl md:text-6xl">Our findings. We found every one ourselves.</h2>
            <p className="mt-5 text-lg leading-relaxed max-w-2xl">
              At Emulabs, research means going out and finding things. We looked hard, mostly at the ground, and here is what we found.
            </p>
          </div>
          <Portrait variant="coat" label="Ernie Emu in his lab coat" className="w-32 md:w-40 hidden sm:block" />
        </div>

        <dl className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="card p-5 bg-cream">
              <dd className="font-display font-bold text-5xl md:text-6xl leading-none order-first">
                {s.value}<a href={`#stat-note-${s.note}`} className="fn text-[0.45em]" aria-label={`Footnote ${s.note}`}>{s.note}</a>
              </dd>
              <dt className="mt-3 leading-snug font-semibold">{s.label}</dt>
            </div>
          ))}
        </dl>
        <ol className="fineprint mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-1">
          {statNotes.map((note, i) => (
            <li key={note} id={`stat-note-${i + 1}`}><b>{i + 1}</b> {note}</li>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr] items-start">
          <figure className="card p-6 md:p-8">
            <figcaption className="font-display font-semibold text-2xl">{chart.title}</figcaption>
            <Chart className="mt-4 w-full" />
            <p className="fineprint mt-2">{chart.caption}</p>
          </figure>
          <div className="grid sm:grid-cols-2 gap-4">
            {badges.map((b) => (
              <div key={b.title} className="rounded-2xl border-[3px] border-egg bg-cream p-5">
                <h3 className="text-xl flex items-center gap-2">
                  <span className="grid size-7 place-items-center rounded-full bg-gum text-butter" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="size-4"><path d="M5 12 L10 17 L19 7" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {b.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed">{b.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 card p-6 md:p-8 bg-neck flex flex-wrap items-center justify-between gap-5">
          <div>
            <h3 className="text-2xl md:text-3xl">The EMU-1 Study</h3>
            <p className="mt-1 text-lg">Six emus. Three weeks. One conclusion, arrived at early.</p>
          </div>
          <StudyDialog />
        </div>
      </div>
    </section>
  );
}
