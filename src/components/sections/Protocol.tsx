import { Fn } from "@/components/Fn";
import { Ostrich } from "@/components/ostrich/Ostrich";
import { protocol } from "@/lib/content";

export function Protocol() {
  return (
    <section id="protocol" className="bg-egg">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <h2 className="text-display-md sm:text-display-lg lg:col-span-6">
            Four steps from standing in a field to standing in a field, measured.
          </h2>
          <p className="measure-narrow text-lead text-slate lg:col-span-5 lg:col-start-8 lg:self-end">
            The same protocol for every species. Members are reminded that the Ostriscan is a shared instrument
            and to leave it as they found it.
          </p>
        </div>

        <div className="on-dark mt-14 grid grid-cols-1 overflow-hidden rounded-[1.75rem] bg-plumage text-egg shadow-panel md:grid-cols-2">
          <figure className="relative border-b border-plumage-line p-6 md:border-b-0 md:border-r md:p-10">
            <Ostrich
              id="scan"
              pose="scanner"
              className="mx-auto h-auto w-full max-w-[24rem]"
              title="An ostrich in a lab coat with its head inside the Ostriscan machine"
            />
            <figcaption className="mt-4 text-[0.9rem] text-egg/65">
              The Ostriscan reads 214 markers in nine minutes. Our Head of Diagnostics demonstrates the recommended
              posture.
              <Fn n={3} />
            </figcaption>
          </figure>
          <figure className="relative p-6 md:p-10">
            <Ostrich
              id="scope"
              pose="microscope"
              look="plain"
              className="mx-auto h-auto w-full max-w-[24rem]"
              title="An ostrich in a lab coat looking into a microscope on a bench"
            />
            <figcaption className="mt-4 text-[0.9rem] text-egg/65">
              Every sample is examined by a scientist. Results are then examined by the same scientist, to be sure.
              <Fn n={8} />
            </figcaption>
          </figure>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {protocol.map((step, i) => (
            <li key={step.title} className="border-t border-ink pt-5">
              <span className="font-display text-[0.95rem] text-slate">Step {i + 1}</span>
              <h3 className="mt-2 text-display-sm">{step.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-slate">
                {step.body}
                {step.fn && <Fn n={step.fn} />}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
