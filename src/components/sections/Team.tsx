import { Portrait } from "@/components/ostrich/Portrait";
import { team } from "@/lib/content";

const looks = {
  glasses: { eye: "#3a2a22", backdrop: "#e6e1d4" },
  goggles: { eye: "#2b3a4a", backdrop: "#d9d6cd" },
  bowtie: { eye: "#4a2e1f", backdrop: "#e2dccb" },
  plain: { eye: "#2f2a26", backdrop: "#ded9d0" },
} as const;

export function Team() {
  return (
    <section id="team" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <h2 className="text-display-md sm:text-display-lg lg:col-span-6">The scientists</h2>
          <p className="measure-narrow text-lead text-slate lg:col-span-5 lg:col-start-8 lg:self-end">
            Four founding ostriches. Between them, one doctorate, and it is shared.
          </p>
        </div>
        <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <li key={m.name}>
              <Portrait
                id={`p-${m.look}`}
                name={m.name}
                look={m.look}
                eyeColor={looks[m.look].eye}
                backdrop={looks[m.look].backdrop}
                className="w-40 sm:w-44"
              />
              <h3 className="mt-6 text-display-sm">{m.name}</h3>
              <p className="mt-1 text-[0.95rem] text-slate">{m.title}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed">{m.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
