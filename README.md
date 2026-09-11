# Emulabs · Coolabah Creek

A fictional premium supplement company run by emus, built as a setting for a game teaching children about AI, health literacy and misinformation. Emulabs sells the idea of DAILY+ to the farm animals with polished marketing that is deliberately more confident than its evidence.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run lint` checks the source; `npm run build` checks TypeScript and creates the static site in `out/`.

## Explore

- The numbered claim references open seven source notes with study methods, missing information, conflicts of interest and optional discussion prompts.
- The two-question assessment changes its wording for six species and four goals. Every combination recommends DAILY+ and the Thrive plan. This is an intentional illustration of automated sales advice.
- The sample CreekScan report lets players change species while retaining the same unvalidated score. Its source explains the biased training sample.
- Three membership tiers use fictional bushels. Reserving a plan is an in-memory simulation: there is no payment, account, subscription, network request or personal-data collection.
- The footer contains expandable educator notes explaining the fiction and offering debrief questions. The brand is original and is not affiliated with a real health provider.

## Source

- `src/components/emulabs/Emulabs.tsx`: storefront, mobile navigation, source dialogs, assessment and simulated reservations.
- `src/lib/content.ts`: evidence files, memberships, species and goals.
- `src/app/globals.css`: responsive design, type, components and reduced-motion support.
- `public/images/`: three original AI-generated images; briefs in `docs/image-assets.md`.

The visual direction draws inspiration from premium preventive-health marketing, including [Everlab](https://www.everlab.com.au/), while the claims, characters, research and sales practices on this site are entirely fictional. No real health advice or supplement dosing is provided.

The app uses Next.js 16 App Router with a static export. Read the installed framework documentation referenced by `AGENTS.md` before changing framework code.
