# Ostrilabs

A satirical marketing site for Ostrilabs, a full-body diagnostics lab in the Animal Farm universe, run by scientific ostriches and selling OSTRA-9, a one-capsule cure-all. It parodies premium longevity clinics whose marketing runs ahead of their evidence.

Every numbered claim on the page links to the Disclosures section at the bottom, where the fine print does the honest work.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

- `src/app/page.tsx` composes the page from the sections in `src/components/sections/`.
- `src/lib/content.ts` holds all copy: disclosures, formulary, protocol steps, findings, testimonials, team, and pricing.
- `src/components/ostrich/` is the illustration system. `parts.tsx` has the ostrich body, coat, neck, head, and props. `Ostrich.tsx` composes poses (tablet, clipboard, microscope, head in the Ostriscan). `Portrait.tsx` makes the circular team portraits. `animals.tsx` draws the cow, pig, hen, and sheep, and `Scenes.tsx` places them in the scanning-bay scenes with the sweeping beam and holographic readouts.
- `src/app/icon.svg` and `src/app/apple-icon.svg` are the egg favicon. `src/app/opengraph-image.png` is the social preview poster, rendered from the same illustration components.
- `src/app/globals.css` defines the design tokens: plumage black, eggshell ivory, yolk accent, and the Bricolage Grotesque and Instrument Sans type scale.
