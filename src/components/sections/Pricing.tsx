import { plan } from "@/lib/content";
import { ReserveDialog } from "@/components/ReserveDialog";
import { Tin } from "@/components/illustrations/Tin";
import { Sticker } from "@/components/illustrations/Sticker";

export function Pricing() {
  return (
    <section id="reserve" className="bg-butter">
      <div className="wrap py-14 md:py-24 grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
        <div>
          <h2 className="text-4xl md:text-5xl">Same price as premium feed. Infinitely more omni.</h2>
          <p className="mt-5 text-lg leading-relaxed max-w-lg">{plan.copy}</p>
          <p className="mt-4 text-lg leading-relaxed max-w-lg">The vote is only days away. Reserve now, and OMNI-01 will be ready the moment Coolabah Creek chooses the future.</p>
        </div>
        <div className="card p-6 md:p-8 relative bg-cream">
          <div className="absolute -top-8 -right-3 md:-right-8">
            <Sticker color="#ff7a3d" tilt={8}>Same price!</Sticker>
          </div>
          <div className="flex items-end gap-4">
            <Tin className="w-24 md:w-28" scoop={false} />
            <div>
              <p className="font-display font-bold text-5xl md:text-6xl leading-none">{plan.price}</p>
              <p className="font-display font-semibold text-lg mt-1">{plan.unit}</p>
            </div>
          </div>
          <ul className="mt-6 space-y-2">
            {plan.includes.map((item) => (
              <li key={item} className="flex items-center gap-3 font-semibold">
                <span className="grid size-6 place-items-center rounded-full bg-gum text-butter" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="size-3.5"><path d="M5 12 L10 17 L19 7" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <ReserveDialog className="btn btn-sun w-full sm:w-auto" />
          </div>
          <p className="fineprint mt-4">{plan.note}</p>
        </div>
      </div>
    </section>
  );
}
