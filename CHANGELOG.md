# Changelog

Every entry lists exactly which files were added/changed, so you can match
it against the GitHub diff. Newest first.

---

## 2026-06-30 — Iteration 7: FAQ aggregation page

**Key design decision:** all 38 answers are fully visible on page load —
no accordion, no collapse. Google's FAQPage rich result guidelines require
answers to be visible to users without interaction. Collapsible accordions
risk disqualifying the page from rich results and make it harder for
crawlers to read content. The existing `FAQ.tsx` accordion component on
individual pages is kept for UX (condensed sections), but the dedicated
FAQ page uses a permanently-expanded layout.

**Added:**
- `app/faq/page.tsx` (~2,320 words, 38 Q&A pairs across 7 categories)
  - 7 sections with jump-link navigation: Calculating tonnage & volume /
    Density & mix types / Cost & pricing / Thickness & specifications /
    Driveways / Materials & alternatives / Ordering & working with
    contractors
  - Every answer fully visible on page load (no accordion)
  - FAQPage JSON-LD schema covering all 38 questions — schema text
    mirrors the on-page text exactly (Google requires this)
  - Jump-link nav at the top of the page for each section
  - 13 answers include an inline "→" link to the relevant calculator
    or guide page for internal linking
  - Calculator CTA panel at the bottom linking to all 5 calculators
  - Content draws from and consolidates questions across all existing
    pages, adding new questions not covered elsewhere (contractor
    questions, batch plant minimums, what to ask before signing a quote)

**Modified — wiring:**
- `components/Header.tsx` — added "FAQ" nav item between Guides and
  Glossary
- `components/Footer.tsx` — added FAQ link
- `app/sitemap.ts` — added `/faq`

**Site now: 27 static routes, ~19,500+ words of content.**
**All structural gaps identified in the cross-audit are now closed.**

---

## 2026-06-30 — Iteration 6: parking lot calculator, copy button, irregular area guide, About expansion

Addressed the three genuine gaps identified in the cross-audit against the
external analysis document: missing parking-lot page (separate commercial
search intent), no copy-result function (B-end user need), thin About page
(E-E-A-T/formula transparency). Also added `IrregularAreaGuide` SVG
component flagged in both the self-audit and external doc.

**Added — new page:**
- `app/parking-lot-calculator/page.tsx` (~1,366 words)
  Targets "parking lot asphalt calculator / estimator" commercial cluster.
  - 4 commercial-scale presets (50×80 / 100×150 / 200×300 / 80×400 ft),
    each with its own default thickness
  - 5-row thickness-by-lot-type table (light-duty → fire lane, with base
    depth and example use per row)
  - "How parking lots differ from driveways" section: 5 points covering
    higher waste factor, multi-section paving, stormwater/grading,
    striping costs, permit requirements
  - Irregular lot measurement guide (embeds `IrregularAreaGuide`)
  - 4-row sample lot estimates table (small retail → large retail,
    with tons, car count, material and installed cost)
  - 6-item FAQ; HowTo schema with 4 steps
  - `defaultThickness={3}` prop set (parking lots default to 3 in,
    not the residential 2.5 in)

**Added — new component:**
- `components/IrregularAreaGuide.tsx`
  Three-panel SVG guide for L-shaped, widening/apron, and rounded-corner
  surfaces — each with an annotated SVG diagram and numbered steps.
  Embedded in both `parking-lot-calculator` and `driveway-calculator`.

**Modified — `components/Calculator.tsx`**
  - Added `Copy` button to the output panel header (top-right, inline with
    "Estimated result" label)
  - Copy formats a plain-text summary including project dimensions, mix
    type, area, volume, tons (net + with waste), truckloads, material cost,
    and installed range (if applicable), plus a disclaimer note
  - Button shows a ✓ "Copied" confirmation state for 2.5 seconds
  - Added `defaultThickness` prop — lets individual pages override the
    slider starting position (parking-lot uses 3, others remain 2.5)
  - Added `thickness` field to `Preset` interface so presets can also
    set thickness when clicked

**Modified — `app/about/page.tsx`** (397 → ~841 words)
  - Added "How the calculators work" section with the formula displayed
    explicitly and attributed to NAPA guidance + state DOT specs
  - Added sourcing for all 5 density figures (145/150/130/125/105–115
    lb/ft³) — explains what each is based on and where it comes from
  - Added "Pricing figures" sourcing paragraph
  - Added "How to use these estimates responsibly" section with two
    structured lists: "Good for" and "Not a substitute for"
  - Added "Keeping content accurate" paragraph with correction contact CTA
  - This page now functions as the E-E-A-T / methodology transparency
    page that AdSense reviewers look for on tool sites

**Modified — `app/driveway-calculator/page.tsx`**
  - Added `IrregularAreaGuide` import and new "L-shaped or irregular
    driveways" section (placed after the ThicknessCompare visual)

**Modified — wiring:**
  - `components/Header.tsx` — added "Parking Lot" nav item
  - `components/Footer.tsx` — added Parking Lot Calculator link
  - `app/sitemap.ts` — added `/parking-lot-calculator`

**Site now: 26 static routes, ~17,500+ words of content.**

---

## 2026-06-30 — Iteration 5: remaining page expansions + 2 new intent-gap pages

**Modified — content depth (4 pages that hadn't been expanded yet):**

- `app/driveway-calculator/page.tsx` (~678 → ~1,420 words)
  - Added 6-row standard driveway sizes table (dimensions, area, thickness,
    approx. tons, material estimate)
  - Added 4-step "How to measure your driveway correctly" dark section
    (full footprint, irregular shapes, street edge/apron, door-swing width)
  - Added "What this calculator doesn't include: the base layer" section
    — explains aggregate base, why skipping it causes early pavement
    failure, and what "paving over gravel" actually requires
  - Related tools links updated to include vs-concrete guide and glossary
  - FAQ expanded from 5 to 6 items

- `app/unit-converter/page.tsx` (~344 → ~811 words)
  - Added 10-row quick-conversion reference table (all common conversions
    with factor column and notes)
  - Added "Why asphalt uses so many different units" section explaining
    why the industry spans sq ft / sq yd / acres / cubic yards / tons
  - Added 4 formula boxes (area→volume, volume→tons, cy→tons, sqft→tons
    direct) in the dark panel format used on other pages

- `app/guides/how-to-calculate-asphalt-tonnage/page.tsx` (~596 → ~1,040 words)
  - Added inline formula reference panel (L × W × (T÷12) × D ÷ 2,000)
    with variable legend
  - Rewrote 5-step walkthrough as full structured sections with Step n /
    title / body / tip (where relevant) format
  - Added three worked examples: residential driveway (18×36 ft, 2.5 in),
    commercial parking lot (60×120 ft, 3 in), permeable path with porous
    mix (6×50 ft, 2 in, 125 lb/ft³ density)

- `app/guides/recycled-millings-cold-patch-calculator/page.tsx`
  (~594 → ~1,223 words)
  - Added 4-material comparison table (millings, cold patch, hot mix, SMA)
    with density, cost, best use, and limitations columns
  - Expanded millings section to 4 paragraphs covering what RAP is, how
    residual binder behaves, density variability, and when not to use it
  - Added cold-patch section covering product types (temporary vs.
    permanent), use cases, and bag-count calculation for potholes

**Added — 2 new intent-gap pages:**

- `app/guides/asphalt-sealcoating-calculator/page.tsx` (~1,062 words)
  - Targets "asphalt sealcoating calculator" / "asphalt sealer calculator"
    cluster (~320/mo, KD 7–11)
  - Includes a live interactive sealcoat calculator (gallons needed,
    coverage rate adjustment, coat count, material cost estimate)
  - "What sealcoating does and doesn't do" section in dark panel
  - "When to sealcoat — and when to wait" section (timing, temperature,
    first-seal delay)
  - 6-row coverage by driveway size reference table
  - HowTo schema + Article schema

- `app/guides/asphalt-calculator-alternatives/page.tsx` (~1,083 words)
  - Targets "vulcan asphalt calculator" / "pike asphalt calculator" brand
    searches (~550/mo combined, KD 6–9)
  - Explains how supplier-hosted calculators (Vulcan, Pike, Lehigh Hanson)
    work and what their structural limitations are
  - "What an independent calculator does differently" section (4 points)
  - "When to use each" guidance
  - 7-row feature comparison table
  - Article schema

**Added — new component:**
- `components/SealcoatCalc.tsx` — standalone client component for the
  sealcoat calculator interactive widget (pulled out of the page file to
  satisfy Next.js server/client component rules)

**Modified — wiring:**
- `app/guides/page.tsx` — added 2 new guides to the GUIDES array; updated
  metadata description; added tag badges to guide cards
- `app/sitemap.ts` — added 2 new routes
- `components/Footer.tsx` — added Sealcoating Calculator and Calculator
  Alternatives links

**Site now has 25 static routes and ~16,000+ words of content across all pages.**

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
