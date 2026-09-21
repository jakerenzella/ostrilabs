import { testimonials, testimonialsNote } from "@/lib/content";
import { Portrait } from "@/components/illustrations/Portrait";
import { StarIcon } from "@/components/illustrations/Icons";
import { Wave } from "@/components/illustrations/Wave";

export function Testimonials() {
  return (
    <section className="bg-gum text-butter">
      <Wave color="#fff6df" flip />
      <div className="wrap py-12 md:py-20">
        <h2 className="text-4xl md:text-5xl">The results, speaking for themselves.</h2>
        <p className="mt-4 text-lg max-w-xl text-butter/85">Every animal who took OMNI-01 had something to say. Here is all of it.</p>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <li key={t.name} className="card p-6 text-egg" style={{ transform: `rotate(${(i % 3) - 1}deg)` }}>
              <div className="flex gap-0.5" aria-label="Five stars">{[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} className="size-6" />)}</div>
              <blockquote className="mt-4 font-display font-semibold text-2xl leading-tight">“{t.quote}”</blockquote>
              <div className="mt-5 flex items-center gap-3">
                <Portrait variant={t.variant} label={`${t.name} the emu`} className="size-14" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm">{t.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="fineprint text-butter/75 mt-6">{testimonialsNote}</p>
      </div>
      <Wave color="#fff6df" />
    </section>
  );
}
