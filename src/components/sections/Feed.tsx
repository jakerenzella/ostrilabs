const feed = [
  "Clover, dairy cow. Marker 118 of 214. Height 1.4 m. Different: yes.",
  "Boxer, draught horse. Marker 214 of 214. Height 1.8 m. Purpose: detected.",
  "Hen 04. Marker 12 of 214. Height 0.4 m. Egg output: elevated.",
  "Napoleon, pig. Marker 61 of 214. Height 0.9 m. Appetite: within range.",
  "Muriel, goat. Marker 3 of 214. Reading paused. Goat has eaten the sensor.",
  "Benjamin, donkey. Declined scan. Observed from a distance: unchanged.",
  "Dr Camelus, ostrich. Marker 214 of 214. All values optimal. Reference range: Dr Camelus.",
];

/** Live Ostriscan feed. Pauses on hover. */
export function Feed() {
  const items = [...feed, ...feed];
  return (
    <div className="border-t border-plumage-line bg-plumage text-egg" aria-label="Ostriscan live feed">
      <div className="mx-auto flex max-w-7xl items-stretch lg:px-10">
        <p className="flex shrink-0 items-center gap-2 border-r border-plumage-line py-3 pl-6 pr-5 text-[0.8rem] text-egg/70 lg:pl-0">
          <span className="pulse h-1.5 w-1.5 rounded-full bg-scan" />
          Ostriscan live
        </p>
        <div className="relative flex-1 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, #000 4%, #000 96%, transparent)" }}>
          <ul className="ticker flex w-max items-center whitespace-nowrap py-3 text-[0.8rem] tabular-nums text-egg/70">
            {items.map((t, i) => (
              <li key={i} className="flex items-center gap-4 pr-10" aria-hidden={i >= feed.length}>
                <span className="h-1 w-1 rounded-full bg-scan/80" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
