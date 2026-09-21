import { faqs } from "@/lib/content";
import { PlusIcon } from "@/components/illustrations/Icons";

export function Faq() {
  return (
    <section id="questions" className="bg-wattle border-t-[3px] border-egg">
      <div className="wrap py-12 md:py-20 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="text-4xl md:text-5xl">Naturally, you have questions.</h2>
          <p className="mt-4 text-lg">We have answers. Whether they line up is a matter for the vote.</p>
        </div>
        <div className="grid gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="faq card rounded-2xl p-0 overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 font-display font-semibold text-lg md:text-xl">
                {f.q}
                <PlusIcon className="faq-plus size-6 shrink-0" />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-[1.05rem]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
