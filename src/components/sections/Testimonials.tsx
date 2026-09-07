import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="bg-egg">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <h2 className="text-display-md sm:text-display-lg">Members on OSTRA-9</h2>
        <ul className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <li key={t.name} className="flex flex-col border-t border-ink pt-6">
              <blockquote className="flex flex-1 flex-col">
                <p className="text-display-sm font-display">“{t.quote}”</p>
                <footer className="mt-6 text-[0.9rem] text-slate">
                  <span className="font-medium text-ink">{t.name}</span>
                  <br />
                  {t.role}
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
        <p className="mt-14 text-[0.9rem] text-slate">
          Ostrilabs internal review, week 11: <span className="font-display text-ink">“Two legs good.”</span>
        </p>
      </div>
    </section>
  );
}
