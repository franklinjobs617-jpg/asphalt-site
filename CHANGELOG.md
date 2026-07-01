# Changelog

Every entry lists exactly which files were added/changed, so you can match
it against the GitHub diff. Newest first.

---

## 2026-06-30 — Iteration 3: structural fixes (schema, freshness, glossary)

Per the content self-audit: Article schema was missing on 3/4 guides, no
page anywhere showed a visible "last updated" date, and there was no
glossary/terminology page despite that being a low-effort, high-signal
addition for AdSense's "does this site provide real knowledge value" check.

**Added:**
- `components/LastUpdated.tsx` — shared "Last updated: [date]" badge
  component, renders a `<time>` element for machine readability
- `app/glossary/page.tsx` — 17-term paving glossary (hot mix, tack coat,
  base course, PG binder, RAP, rutting, etc.), each definition includes
  *why it matters* rather than just a dictionary definition. Carries
  `DefinedTermSet`/`DefinedTerm` JSON-LD schema.

**Modified — added Article schema (datePublished/dateModified):**
- `app/guides/asphalt-density-explained/page.tsx`
- `app/guides/asphalt-vs-concrete-driveway-cost/page.tsx`
- `app/guides/recycled-millings-cold-patch-calculator/page.tsx`
(`app/guides/how-to-calculate-asphalt-tonnage/page.tsx` already had this
from the previous iteration.)

**Modified — added visible `<LastUpdated />` badge under the H1:**
- `app/page.tsx`
- `app/tonnage-calculator/page.tsx`
- `app/cost-calculator/page.tsx`
- `app/driveway-calculator/page.tsx`
- `app/unit-converter/page.tsx`
- `app/about/page.tsx`
- All 4 files in `app/guides/*/page.tsx`
- `app/glossary/page.tsx`

**Modified — navigation/internal linking:**
- `components/Header.tsx` — added "Glossary" nav item
- `components/Footer.tsx` — added Glossary link
- `app/sitemap.ts` — added `/glossary`
- `app/guides/recycled-millings-cold-patch-calculator/page.tsx` — added an
  inline cross-link to `/glossary`

**Not yet done (planned for Iteration 4 — content depth):** homepage
expanded to 1,500+ words with multi-scenario worked examples; cost-
calculator regional pricing explainer; each guide page deepened toward
800–1,000 words. See the conversation log / next message for the full
Iteration 4 scope.

---

## 2026-06-30 — Site icons

**Added:**
- `app/icon.svg` — favicon (SVG), reuses the cross-section logo mark from
  `components/Header.tsx`, on an asphalt-dark rounded-square background.
- `app/apple-icon.tsx` — 180×180 PNG apple-touch-icon, generated at build
  time via `next/og` `ImageResponse` (same mark, no external image asset
  to maintain).
- `app/manifest.ts` — web app manifest declaring both icons, theme color,
  and background color for browser tab / "add to home screen" treatment.

Next.js's file-based metadata convention auto-wires these into every
page's `<head>` — no changes needed in `app/layout.tsx`.

---

## 2026-06-30 — AdSense compliance pages + content depth + data viz

**Added — compliance / E-E-A-T:**
- `app/about/page.tsx` — independent hobbyist-site positioning, methodology
  disclosure (no fabricated credentials)
- `app/contact/page.tsx` — support@asphaltcalculatorhq.com
- `app/privacy-policy/page.tsx` — AdSense/Analytics cookie + affiliate
  disclosure
- `app/terms/page.tsx` — estimate-only disclaimer, liability limits

**Added — long-tail content pages:**
- `app/unit-converter/page.tsx` + `components/UnitConverter.tsx`
- `app/guides/page.tsx` — guides hub/index
- `app/guides/how-to-calculate-asphalt-tonnage/page.tsx`
- `app/guides/asphalt-density-explained/page.tsx`
- `app/guides/recycled-millings-cold-patch-calculator/page.tsx`
- `app/guides/asphalt-vs-concrete-driveway-cost/page.tsx`

**Added — data visualization components:**
- `components/CostBreakdown.tsx` — SVG donut chart, used in
  `app/cost-calculator/page.tsx`
- `components/ThicknessCompare.tsx` — 3-up `CrossSection` comparison, used
  in `app/driveway-calculator/page.tsx`
- `components/DensityChart.tsx` — bar comparison, used in
  `app/guides/asphalt-density-explained/page.tsx`
- `components/CompareTable.tsx` — generic two-column comparison table,
  used in `app/guides/asphalt-vs-concrete-driveway-cost/page.tsx`

**Modified:**
- `components/Header.tsx` — added "Guides" nav item
- `components/Footer.tsx` — added links to all new pages
- `app/sitemap.ts` — added all new routes
- `README.md` — updated page inventory and AdSense pre-launch notes

---

## 2026-06-30 — Initial build (Phase 1)

**Added — project scaffold:**
`package.json`, `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`,
`tailwind.config.ts`, `.gitignore`

**Added — design system / shared components:**
- `app/globals.css` — base styles, blueprint-grid utility, input/slider
  styling
- `app/layout.tsx` — fonts (Barlow Condensed / Inter / IBM Plex Mono),
  site-wide metadata
- `components/Header.tsx`, `components/Footer.tsx`
- `components/CrossSection.tsx` — signature pavement cross-section SVG,
  reused throughout the site
- `components/Calculator.tsx` — core reusable calculator (inputs, live
  output panel)
- `components/FAQ.tsx` — accordion + FAQPage schema
- `components/ThicknessGuide.tsx` — thickness-by-use-case table
- `lib/calc.ts` — all calculation formulas, defaults, mix types

**Added — pages:**
- `app/page.tsx` — homepage / main calculator
- `app/tonnage-calculator/page.tsx`
- `app/cost-calculator/page.tsx`
- `app/driveway-calculator/page.tsx`
- `app/sitemap.ts`, `app/robots.ts`

---

## Convention for future entries

When asking for a new iteration, request a dated entry at the top of this
file listing **Added** (new files) and **Modified** (existing files
touched) separately, with the file path next to each one — same format as
above. This keeps every change traceable to a diff before you push it.
