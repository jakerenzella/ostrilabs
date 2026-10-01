# EmuLabs SuperHealth · Coolabah Creek

A fictional supplement company run by emus, built as a setting for a game teaching children about AI, health literacy and misinformation. EmuLabs sells SuperHealth tablets to the farm animals with illustrated marketing that is deliberately more confident than its evidence. The brand is styled **EmuLabs** (or **EMULABS** on packaging).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run lint` checks the source; `npm run build` checks TypeScript and creates the static site in `out/`.

## Explore

- The findings section includes numbered source notes, a vitality chart and a full fictional study dialog describing the study methods and conflicts of interest.
- The two-question SuperHealth Check changes its wording for eight species and four goals. Every combination recommends SuperHealth tablets. This is an intentional illustration of automated sales advice.
- Reservations use fictional bushels and bottles of tablets. The form is an in-memory simulation: there is no payment, account, subscription, network request or persistent storage.
- The footer explains that EmuLabs is fictional and the site is not health advice.

## Source

- `src/components/sections/`: illustrated storefront sections.
- `src/components/`: navigation, study and reservation dialogs, and the SuperHealth Check.
- `src/lib/content.ts`: product copy, study, pricing, species and goals.
- `src/app/globals.css`: responsive design, type, components and reduced-motion support.
- `src/components/illustrations/`: SVG artwork, including the SuperHealth tablet bottle; details in `docs/image-assets.md`.

The claims, characters, research and sales practices on this site are entirely fictional. No real health advice or supplement dosing is provided.

The app uses Next.js 16 App Router with a static export. Read the installed framework documentation referenced by `AGENTS.md` before changing framework code.
