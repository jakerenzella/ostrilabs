import { Fn } from "@/components/Fn";
import { CowScan, HenPad, PigDispenser, SheepMonitor } from "@/components/ostrich/Scenes";

const scenes = [
  {
    Scene: CowScan,
    title: "Full-body scan",
    caption: "Clover in the Ostriscan Mk II. The gantry reads 214 markers as the beam passes. She is asked to hold her head a little higher.",
    fn: 15,
  },
  {
    Scene: PigDispenser,
    title: "Daily compound",
    caption: "Napoleon collects his dose from the dispenser. One capsule for every species, calibrated to the size of the mouth.",
    fn: 16,
  },
  {
    Scene: HenPad,
    title: "Micro-scan",
    caption: "Hen 04 on the micro-scan pad. Egg output is elevated relative to her own output on a day she did not lay.",
    fn: 17,
  },
  {
    Scene: SheepMonitor,
    title: "Continuous monitoring",
    caption: "Muriel wears the sensor collar between scans. Readings are transmitted to the long barn hourly, by pigeon.",
    fn: 18,
  },
];

export function Bay() {
  return (
    <section id="bay" className="on-dark bg-plumage text-egg">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <h2 className="text-display-md sm:text-display-lg lg:col-span-6">
            The whole farm, one instrument at a time.
          </h2>
          <p className="measure-narrow text-lead text-egg/75 lg:col-span-5 lg:col-start-8 lg:self-end">
            Every member is scanned by the same machines, dosed from the same dispenser, and reviewed by the same
            scientists. Consistency is the foundation of our method.
            <Fn n={5} />
          </p>
        </div>
        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {scenes.map(({ Scene, title, caption, fn }) => (
            <li key={title} className="overflow-hidden rounded-[1.25rem] border border-plumage-line bg-plumage-soft">
              <Scene />
              <div className="border-t border-plumage-line px-6 py-5">
                <h3 className="font-display text-[1.15rem] font-medium">{title}</h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-egg/65">
                  {caption}
                  <Fn n={fn} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
