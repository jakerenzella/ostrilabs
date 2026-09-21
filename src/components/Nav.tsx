"use client";

import { useState } from "react";
import { nav, site } from "@/lib/content";
import { Mark, CloseIcon } from "@/components/illustrations/Icons";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-butter/90 backdrop-blur border-b-[3px] border-egg">
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-2xl tracking-tight">
          <Mark className="size-10" />
          {site.name}
        </a>
        <nav aria-label="Main" className="hidden md:flex items-center gap-7 font-display font-semibold text-lg">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-sun">{item.label}</a>
          ))}
          <a href="#reserve" className="btn btn-sun min-h-11 py-2 text-base">Reserve OMNI-01</a>
        </nav>
        <button type="button" className="md:hidden grid size-11 place-items-center rounded-full border-[3px] border-egg bg-wattle shadow-hard-sm" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((v) => !v)}>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <CloseIcon className="size-5" /> : (
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true"><path d="M4 7 L20 7 M4 12 L20 12 M4 17 L20 17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
          )}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Main" className="md:hidden border-t-[3px] border-egg bg-cream">
          <div className="wrap flex flex-col py-3 font-display font-semibold text-xl">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-3 border-b-2 border-egg/15 last:border-0">{item.label}</a>
            ))}
            <a href="#reserve" onClick={() => setOpen(false)} className="btn btn-sun mt-3 self-start">Reserve OMNI-01</a>
          </div>
        </nav>
      )}
    </header>
  );
}
