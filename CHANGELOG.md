# Changelog

Every entry lists exactly which files were added/changed, so you can match
it against the GitHub diff. Newest first.

---

## 2026-06-30 — Iteration 4: content depth expansion

Self-audit found every page was running 500–930 visible words against
competitors at 1,500–2,500 words. This iteration brings the five highest-
priority pages up to 1,000–1,650 words with substantive additions — not
padding, but content that directly covers additional search intent within
each page's keyword cluster.

**Modified (content depth only — no new files, no structural changes):**

- `app/page.tsx` (~930 → ~1,645 words)
  - Added three-column "Real-world calculation examples" section with
    fully worked-out numbers for a residential driveway (20×40 ft, 2.5 in),
    small parking lot (60×80 ft, 3 in), and residential walkway (4×50 ft,
    2 in) — with each step shown explicitly
  - Added "Common estimating mistakes" section with 5 numbered entries
    covering: wrong density, forgetting to convert thickness to feet,
    skipping waste allowance, measuring only the parking pad, and
    confusing material cost with installed cost
  - Expanded main explainer copy with more detail on the waste allowance
    rationale and when to use 5% vs 10%
  - Added a 6th FAQ item ("How many square feet does a ton cover?")

- `app/tonnage-calculator/page.tsx` (~610 → ~1,204 words)
  - Expanded the 5-step formula walkthrough from single-sentence bullets
    into full paragraphs with a note on the most common arithmetic error
  - Added a commercial parking-row worked example (24×80 ft, 3 in,
    8% waste, 3 truckloads)
  - Added 7-row "Tons per 1,000 sq ft by thickness" quick-reference table
    (1.5 in through 6 in, with cubic yards and typical use case per row)
  - Added "Why asphalt is sold by the ton, not the yard" section explaining
    batch plant mechanics, truck capacity types, and minimum order context

- `app/cost-calculator/page.tsx` (~735 → ~1,424 words)
  - Added "Why asphalt prices vary by location" section with 5 structural
    price factors (plant distance, aggregate availability, PG binder grade,
    seasonal demand, labor market) — each as a full paragraph, not a bullet
  - Added "Sample project cost ranges" table (5 project types × 5 columns:
    size, tons, material est., installed est.)
  - Expanded FAQ from 5 to 6 items; added "Does this calculator account
    for the aggregate base?" which is a top real-user confusion point

- `app/guides/asphalt-density-explained/page.tsx` (~500 → ~1,017 words)
  - Added a full 5-row density comparison table (all mix types with lb/ft³,
    kg/m³, and typical use columns)
  - Added a 4-cell "density difference worked example" panel showing the
    exact tonnage for 1,000 sq ft at 3 in for all four mix types,
    illustrating the 20% swing between porous and SMA
  - Expanded "What actually changes density" section from a bulleted list
    to 5 full Factor paragraphs (gradation, binder content, compaction
    effort, temperature, aggregate specific gravity)
  - Added "How to confirm density with your supplier" section with
    terminology (TMD, bulk specific gravity) and a cross-link to glossary
  - Expanded FAQ from 4 to 5 items; added RAP density FAQ

- `app/guides/asphalt-vs-concrete-driveway-cost/page.tsx` (~460 → ~1,056 words)
  - Expanded comparison table from 8 to 10 rows (added recyclability,
    install timeline, material pricing format)
  - Expanded "When asphalt wins" and "When concrete wins" from brief
    paragraphs to 4-point structured sections with full paragraphs
    covering cold-climate performance, hot-climate performance, budget,
    ownership timeline, quick return to use, maintenance preference,
    aesthetic customization
  - Added "Total cost of ownership over 30 years" table (600 sq ft
    driveway, 5 cost line items side by side) to give users a concrete
    apples-to-apples comparison rather than just upfront cost

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
