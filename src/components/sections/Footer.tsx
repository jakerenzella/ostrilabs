import { legal, nav, site } from "@/lib/content";
import { Mark } from "@/components/illustrations/Icons";

export function Footer() {
  return (
    <footer className="bg-butter border-t-[3px] border-egg">
      <div className="wrap py-10 grid gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="flex items-center gap-2 font-display font-bold text-2xl"><Mark className="size-9" />{site.name}</p>
          <p className="mt-2 max-w-sm">The farm next door. Coolabah Creek’s neighbour since recently.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 font-display font-semibold text-lg md:justify-end md:self-start">
          {nav.map((item) => <a key={item.href} href={item.href} className="hover:text-sun">{item.label}</a>)}
          <a href="#reserve" className="hover:text-sun">Reserve</a>
        </nav>
        <div className="md:col-span-2 border-t-2 border-egg/20 pt-6">
          <p className="fineprint max-w-3xl">{legal.inCharacter}</p>
          <p className="fineprint mt-3 max-w-3xl opacity-70">{legal.outOfCharacter}</p>
          <p className="fineprint mt-3">© {new Date().getFullYear()} Emulabs. Findings printed on the tin.</p>
        </div>
      </div>
    </footer>
  );
}
