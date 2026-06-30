# Asphalt Calculator HQ

Next.js 14 (App Router) + Tailwind site for `asphaltcalculatorhq.com`.

## What's built (Phase 1)

- `/` — main Asphalt Calculator (targets "asphalt calculator", 22,200/mo)
- `/tonnage-calculator` — tons & truckloads (targets tonnage cluster, ~3,800/mo)
- `/cost-calculator` — material + installed price range (targets cost/price cluster, ~4,310/mo)
- `/driveway-calculator` — with size presets (targets driveway cluster, ~4,400/mo)

Each page: live calculator, "how it works" explainer, FAQ (FAQPage schema),
internal links to the other 3 calculators, and SoftwareApplication/HowTo
schema where relevant.

**Not yet built (Phase 2 — see the planning doc):** `/guides/` knowledge
pages (millings/cold-patch/recycled material, density & formula explainer,
unit converter). These are lower search volume and were intentionally
deferred so Phase 1 could ship with full depth on the four core pages
rather than thin content across more pages.

## Design system

- Colors: asphalt charcoal, concrete off-white, DOT-yellow ("marking"),
  cone-orange accent, steel gray — defined in `tailwind.config.ts`.
- Type: Barlow Condensed (display/headlines — referencing highway signage),
  Inter (body), IBM Plex Mono (all calculator numbers/data).
- Signature element: `components/CrossSection.tsx` — an animated pavement
  cross-section (asphalt/base/subgrade layers with a blueprint dimension
  line) that resizes live as the user adjusts the thickness slider. Reused
  across all four calculator pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Note: `next/font/google` fetches font files at build time, which requires
> internet access. This works automatically on Vercel; if building in a
> network-restricted sandbox, swap the `next/font/google` imports in
> `app/layout.tsx` for plain CSS variables temporarily.

## Deploying

1. Push this folder to a new GitHub repo via GitHub Desktop.
2. Go to vercel.com → New Project → import the repo. Vercel auto-detects
   Next.js, no config needed.
3. Add the custom domain `asphaltcalculatorhq.com` in Vercel's domain
   settings and point your DNS (A/CNAME records as Vercel instructs).
4. After first deploy, submit `https://asphaltcalculatorhq.com/sitemap.xml`
   to Google Search Console and request indexing for all 4 pages.

## Editing content / numbers

- All calculation formulas live in `lib/calc.ts` — density defaults, waste
  %, truck capacity, mix types, and the thickness guide table data are all
  there in one place.
- Each page's FAQ array is inline in that page's `.tsx` file — edit the
  `items` array passed to `<FAQ />` directly.
- Site-wide metadata (title template, description) is in `app/layout.tsx`.
  Per-page title/description overrides are in each page's `metadata` export.
