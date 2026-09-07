import { Fn } from "@/components/Fn";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="bg-egg">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-16 lg:grid-cols-4 lg:px-10 lg:py-20">
        {stats.map((s) => (
          <div key={s.label} className="border-l border-egg-line pl-5">
            <dd className="font-display text-display-md font-medium text-ink sm:text-display-lg">
              {s.value}
              {s.fn && <Fn n={s.fn} />}
            </dd>
            <dt className="mt-2 max-w-[14rem] text-[0.95rem] text-slate">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
