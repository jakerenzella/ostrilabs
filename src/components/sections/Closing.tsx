import { closing } from "@/lib/content";
import { Ellie } from "@/components/illustrations/Ellie";

export function Closing() {
  return (
    <section className="bg-egg text-butter border-t-[3px] border-egg overflow-hidden">
      <div className="wrap py-14 md:py-20 grid gap-8 md:grid-cols-[1fr_auto] items-center">
        <div>
          <h2 className="text-4xl md:text-6xl text-wattle">{closing.heading}</h2>
          <p className="mt-5 text-lg md:text-xl max-w-xl text-butter/85">{closing.copy}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#reserve" className="btn btn-sun">Reserve OMNI-01</a>
            <a href="#findings" className="btn btn-wattle">Read the findings again</a>
          </div>
        </div>
        <Ellie className="w-56 md:w-72 -mb-16 md:-mb-24 drop-shadow-[6px_6px_0_#ffd23f]" />
      </div>
    </section>
  );
}
