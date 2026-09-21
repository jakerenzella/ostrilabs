import { Ellie } from "@/components/illustrations/Ellie";
import { Tin } from "@/components/illustrations/Tin";
import { Scene } from "@/components/illustrations/Scene";
import { Sticker } from "@/components/illustrations/Sticker";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 md:pt-16">
      <div className="wrap grid gap-10 lg:grid-cols-[1.05fr_1fr] items-end relative z-10">
        <div className="pb-8 lg:pb-24">
          <p className="inline-flex items-center gap-2 rounded-full border-[3px] border-egg bg-wattle px-4 py-1.5 font-display font-semibold shadow-hard-sm">
            <span className="size-2.5 rounded-full bg-sun border-2 border-egg" aria-hidden="true" />
            Now arriving at Coolabah Creek
          </p>
          <h1 className="mt-6 text-[2.75rem] leading-[1] sm:text-6xl lg:text-7xl">
            The results speak for themselves.<a href="#hero-note" className="fn" aria-label="Footnote">*</a>
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed">
            OMNI-01 is the all-in-one supplement from the emus next door. Strength, growth, vitality and everything else, in one daily scoop. Same price as premium feed. Considerably more omni.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#reserve" className="btn btn-sun">Reserve your scoop</a>
            <a href="#findings" className="btn">Read our findings</a>
          </div>
          <p id="hero-note" className="fineprint mt-8 max-w-md">
            <b>*</b>Six of them did. All emus. All ours. Individual results may vary, though ours didn’t.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
          <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-end gap-2 sm:gap-4">
            <Ellie className="w-full min-w-0 max-w-[24rem] drop-shadow-[8px_8px_0_#1f4a3f]" />
            <Tin className="w-24 sm:w-44 lg:w-52 mb-2 drop-shadow-[6px_6px_0_#1f4a3f]" />
          </div>
          <div className="absolute -top-2 right-0 sm:right-4">
            <Sticker tilt={10}>New!</Sticker>
          </div>
          <div className="absolute bottom-28 -left-2 sm:-left-6">
            <Sticker color="#86b7cb" tilt={-12}>Emu tested</Sticker>
          </div>
          <div className="absolute top-[38%] -right-4 hidden sm:block">
            <Sticker color="#ff7a3d" tilt={6}>100% happy*</Sticker>
          </div>
          <div className="absolute left-[36%] top-2 max-w-[11rem] rounded-2xl border-[3px] border-egg bg-cream px-4 py-3 font-display font-semibold shadow-hard-sm rotate-[-3deg] hidden md:block">
            Ask me about the results!
            <span className="absolute -bottom-3 left-6 size-5 rotate-45 border-b-[3px] border-r-[3px] border-egg bg-cream" aria-hidden="true" />
          </div>
        </div>
      </div>
      <Scene className="w-full h-28 md:h-44 -mt-6 relative z-0" />
    </section>
  );
}
