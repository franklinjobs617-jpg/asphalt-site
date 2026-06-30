# Asphalt Calculator HQ

Next.js 14 (App Router) + Tailwind site for `asphaltcalculatorhq.com`.

## What's built (Phase 1 + Phase 2)

**Core calculators**
- `/` — main Asphalt Calculator (targets "asphalt calculator", 22,200/mo)
- `/tonnage-calculator` — tons & truckloads (targets tonnage cluster, ~3,800/mo)
- `/cost-calculator` — material + installed price range, with a cost-breakdown
  donut chart (targets cost/price cluster, ~4,310/mo)
- `/driveway-calculator` — with size presets + side-by-side thickness
  comparison visual (targets driveway cluster, ~4,400/mo)
- `/unit-converter` — area unit converter + cubic yards→tons converter
  (targets unit-conversion long tail, ~900/mo)

**Guides** (`/guides` hub + 4 articles)
- `/guides/how-to-calculate-asphalt-tonnage` — worked-example tutorial
- `/guides/asphalt-density-explained` — density bar chart + mix-type explainer
- `/guides/recycled-millings-cold-patch-calculator` — mini calculator + explainer for RAP/cold patch
- `/guides/asphalt-vs-concrete-driveway-cost` — comparison table + analysis

**Compliance / E-E-A-T pages**
- `/about` — independent hobbyist-site positioning, methodology disclosure
- `/contact` — support@asphaltcalculatorhq.com
- `/privacy-policy` — AdSense/cookie/analytics/affiliate disclosure
- `/terms` — estimate disclaimer, liability, acceptable use

Every page: FAQ (FAQPage schema), internal links, and HowTo/Article/
SoftwareApplication schema where relevant. All 19 routes type-check and
statically build cleanly (`next build`).

**Still open for a later pass:** a `/blog` for ongoing freshness signal,
and possibly state/region-specific pricing pages once there's real GSC
data showing demand.


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
