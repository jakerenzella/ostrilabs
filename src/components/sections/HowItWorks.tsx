import { steps } from "@/lib/content";
import { ScoopIcon, StrideIcon, SpeakIcon } from "@/components/illustrations/Icons";

const icons = [ScoopIcon, StrideIcon, SpeakIcon];

export function HowItWorks() {
  return (
    <section className="bg-wattle border-y-[3px] border-egg">
      <div className="wrap py-12 md:py-20">
        <h2 className="text-4xl md:text-5xl">How OMNI-01 works</h2>
        <p className="mt-4 text-lg max-w-xl">Three steps. The third one is the important one.</p>
        <ol className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li key={step.title} className="card p-6 relative">
                <span className="absolute -top-5 -left-3 grid size-12 place-items-center rounded-full border-[3px] border-egg bg-sun font-display font-bold text-xl shadow-hard-sm">{i + 1}</span>
                <Icon className="size-12 mt-2" />
                <h3 className="mt-4 text-2xl">{step.title}</h3>
                <p className="mt-2 leading-relaxed">{step.copy}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
