import { press } from "@/lib/content";

export function Press() {
  return (
    <section className="border-y border-plumage-line bg-plumage-soft text-egg">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 lg:flex-row lg:items-baseline lg:gap-10 lg:px-10">
        <p className="shrink-0 text-[0.85rem] text-egg/55">Covered by</p>
        <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-2 font-display text-[1.05rem] font-medium text-egg/85 sm:gap-x-12">
          {press.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
