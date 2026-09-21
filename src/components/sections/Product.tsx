import { benefits, ingredients } from "@/lib/content";
import { Tin } from "@/components/illustrations/Tin";
import { Wave } from "@/components/illustrations/Wave";
import { MuscleIcon, SproutIcon, FlaskIcon, RocketIcon } from "@/components/illustrations/Icons";

const icons = { muscle: MuscleIcon, sprout: SproutIcon, flask: FlaskIcon, rocket: RocketIcon } as const;

export function Product() {
  const footnotes = benefits.filter((b) => b.footnote);
  return (
    <section id="omni" className="bg-butter">
      <Wave color="#d3e7ef" flip />
      <div className="wrap py-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] items-center">
          <div className="relative mx-auto">
            <div className="absolute inset-4 rounded-full bg-wattle border-[3px] border-egg" aria-hidden="true" />
            <Tin className="relative w-64 md:w-80 drop-shadow-[8px_8px_0_#1f4a3f]" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl">One scoop. Omni benefits.</h2>
            <p className="mt-5 text-lg leading-relaxed max-w-xl">
              Omni means everything, which is what we’re going for. OMNI-01 is designed to support vitality, improve performance and help animals stay in better condition throughout the season. Designed to, and we designed it.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = icons[b.icon as keyof typeof icons];
                return (
                  <li key={b.title} className="card p-5 flex gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full border-[3px] border-egg bg-neck text-egg"><Icon className="size-7" /></span>
                    <div>
                      <h3 className="text-xl">{b.title}</h3>
                      <p className="mt-1.5 leading-relaxed">{b.copy}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            {footnotes.map((b) => <p key={b.title} className="fineprint mt-4">{b.footnote}</p>)}
          </div>
        </div>

        <div className="mt-12 card p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-6 items-start bg-egg text-butter">
          <h3 className="text-2xl md:text-3xl text-wattle">{ingredients.heading}</h3>
          <div>
            <ul className="flex flex-wrap gap-3">
              {ingredients.list.map((item) => (
                <li key={item} className="rounded-full border-[3px] border-butter/80 px-4 py-1.5 font-display font-semibold">{item}</li>
              ))}
            </ul>
            <p className="fineprint text-butter/75 mt-4">{ingredients.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
