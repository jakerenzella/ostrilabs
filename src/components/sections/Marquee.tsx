import { marquee } from "@/lib/content";
import { EggIcon } from "@/components/illustrations/Icons";

export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="bg-egg text-butter border-y-[3px] border-egg py-3" aria-hidden="true">
      <div className="marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee-track">
            {items.map((word, i) => (
              <span key={i} className="flex items-center gap-6 pr-6 font-display font-semibold text-xl md:text-2xl whitespace-nowrap">
                {word}
                <EggIcon className="size-4 text-wattle" />
              </span>
            ))}
          </div>
        ))}
      </div>
      <p className="wrap fineprint text-butter/70 mt-2 text-center">*As reported by the emus. Descriptions are the emus’ own.</p>
    </div>
  );
}
