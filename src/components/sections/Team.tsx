import { team } from "@/lib/content";
import { Portrait } from "@/components/illustrations/Portrait";

export function Team() {
  const [ellie, ...others] = team;
  return (
    <section id="emus" className="bg-butter">
      <div className="wrap py-12 md:py-20">
        <h2 className="text-4xl md:text-5xl">Meet the emus behind the emus.</h2>
        <p className="mt-4 text-lg max-w-xl">Four emus, one shed, and a shared belief that the results speak for themselves.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_2fr]">
          <article className="card p-6 md:p-8 bg-sun flex flex-col items-start">
            <Portrait variant={ellie.variant} label={ellie.name} className="w-40 md:w-48" />
            <h3 className="mt-5 text-3xl">{ellie.name}</h3>
            <p className="font-display font-semibold text-lg">{ellie.role}</p>
            <p className="mt-3 leading-relaxed text-lg">{ellie.bio}</p>
          </article>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((member) => (
              <article key={member.name} className="card p-5 flex flex-col items-start">
                <Portrait variant={member.variant} label={member.name} className="w-24" />
                <h3 className="mt-4 text-2xl">{member.name}</h3>
                <p className="font-display font-semibold text-sun">{member.role}</p>
                <p className="mt-2 leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
