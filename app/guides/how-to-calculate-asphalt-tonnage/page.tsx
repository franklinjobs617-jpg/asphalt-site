import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "How to Calculate Asphalt Tonnage (Step-by-Step Formula + Examples)",
  description:
    "Learn the exact formula for calculating asphalt tonnage from area, thickness, and density. Includes three worked examples, a quick-reference chart, and common mistakes to avoid.",
};

export default function HowToTonnagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Calculate Asphalt Tonnage",
            description:
              "Step-by-step formula and worked examples for calculating asphalt tonnage from area, thickness, and density.",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
          }),
        }}
      />

      {/* ── HERO — full-bleed image background ── */}
      <section className="relative overflow-hidden bg-asphalt-900">
        {/* Background photo: close-up compacted asphalt surface texture. Unsplash license — free commercial use. */}
        <Image
          src="https://images.unsplash.com/photo-1635789146064-ffa7966c32e3?auto=format&fit=crop&w=1800&q=80"
          alt="Close-up of compacted hot-mix asphalt surface showing aggregate gradation"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt-900/97 via-asphalt-900/80 to-asphalt-900/40 sm:from-asphalt-900/92 sm:via-asphalt-900/70 sm:to-asphalt-900/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt-900/85 via-transparent to-transparent sm:hidden" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking">Guide</span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-chalk sm:text-6xl">
            How to Calculate Asphalt Tonnage
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-chalk/75">
            Asphalt tonnage = area (ft²) × thickness (ft) × density (lb/ft³)
            ÷ 2,000. Everything below explains each step, shows where people
            get it wrong, and walks through three real projects from first
            measurement to final order quantity.
          </p>
        </div>
      </section>

      {/* ── THE FORMULA ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          The formula in full
        </h2>
        <div className="mt-4 rounded-md border border-asphalt-900/10 bg-asphalt-900 p-5 text-chalk">
          <div className="font-mono text-xs uppercase tracking-widest text-marking">Standard tonnage formula</div>
          <div className="mt-3 font-mono text-lg">Tons = L × W × (T ÷ 12) × D ÷ 2,000</div>
          <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-xs text-steel-light sm:grid-cols-4">
            <div><span className="text-chalk">L</span> = length (ft)</div>
            <div><span className="text-chalk">W</span> = width (ft)</div>
            <div><span className="text-chalk">T</span> = thickness (in)</div>
            <div><span className="text-chalk">D</span> = density (lb/ft³)</div>
          </div>
        </div>

        {/* STEP BY STEP */}
        <h2 className="mt-10 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Step-by-step breakdown
        </h2>
        <div className="mt-6 space-y-6">
          {[
            {
              n: "Step 1",
              title: "Measure the area",
              body: "Multiply length × width to get area in square feet. For irregular shapes, divide the surface into rectangles, calculate each one separately, and add the totals. Measure to the nearest half foot — more precision than that doesn't meaningfully change the material order.",
              tip: "Include the apron, any widening near a garage, and turning areas. Driveways that look rectangular often aren't when you include all paved sections.",
            },
            {
              n: "Step 2",
              title: "Convert thickness to feet",
              body: "Divide your thickness specification (always given in inches) by 12 to get feet. A 2.5-inch layer = 0.2083 ft. A 3-inch layer = 0.25 ft. This conversion is where manual calculations most often go wrong — entering the thickness in inches directly into the formula overstates the tonnage by 12×.",
              tip: "Quick check: 1 inch = 0.0833 ft. Anything over 1.0 ft for residential paving is almost certainly an error.",
            },
            {
              n: "Step 3",
              title: "Calculate volume in cubic feet",
              body: "Area (ft²) × thickness (ft) = volume (ft³). This is the geometric volume of asphalt that the project requires before any density conversion. The number should feel proportional — 1,000 sq ft at 3 inches gives 250 cubic feet, roughly the size of a small room.",
              tip: null,
            },
            {
              n: "Step 4",
              title: "Apply density to get weight in pounds",
              body: "Volume (ft³) × density (lb/ft³) = weight in pounds. Standard dense-graded hot mix uses 145 lb/ft³. Porous mix: 125 lb/ft³. Stone mastic asphalt: 150 lb/ft³. Cold patch: 130 lb/ft³. Always confirm the density with your supplier — see the density guide for a full explanation of why this varies.",
              tip: "If your supplier quotes a density you don't recognize, ask for the mix design specification sheet. The compacted target density will be listed.",
            },
            {
              n: "Step 5",
              title: "Convert pounds to tons",
              body: "Divide the weight in pounds by 2,000 to get US tons (short tons). This is what asphalt is sold and invoiced by at the batch plant. The figure at this step is your raw calculated quantity before ordering.",
              tip: null,
            },
            {
              n: "Step 6",
              title: "Add waste allowance and round up",
              body: "Multiply your raw tonnage by 1.05 to 1.10 (5–10% waste allowance) to account for compaction variation, edge cuts, spillage, and irregular areas. Then round up to the nearest half-ton. Ordering exactly the minimum calculated quantity almost always results in running short.",
              tip: "Use 5–7% for a clean rectangular project with no curves. Use 8–10% for irregular shapes, projects with many cuts, or anywhere trucks have difficult access.",
            },
          ].map(({ n, title, body, tip }) => (
            <div key={n} className="border-t border-asphalt-900/10 pt-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-marking-dim">{n}</span>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-asphalt-900">{title}</h3>
              </div>
              <p className="mt-2 font-body leading-relaxed text-steel">{body}</p>
              {tip && (
                <div className="mt-3 rounded-sm border-l-2 border-marking/40 pl-3 font-body text-sm text-steel">
                  <span className="font-semibold text-asphalt-900">Note: </span>{tip}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── THREE WORKED EXAMPLES ── */}
        <h2 className="mt-14 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Three worked examples
        </h2>
        <p className="mt-3 font-body text-steel">
          The same formula applied to three different projects, with every
          intermediate step shown.
        </p>
        <div className="mt-6 space-y-5">
          {[
            {
              label: "Example 1 — Residential driveway",
              desc: "18 ft × 36 ft, 2.5 in thick, standard 145 lb/ft³ hot mix, 7% waste",
              steps: [
                "Area: 18 × 36 = 648 ft²",
                "Thickness: 2.5 ÷ 12 = 0.2083 ft",
                "Volume: 648 × 0.2083 = 135 ft³",
                "Weight: 135 × 145 = 19,575 lb",
                "Tons: 19,575 ÷ 2,000 = 9.8 tons",
                "+7% waste: 9.8 × 1.07 = 10.5 tons",
              ],
              result: "Order 10.5 tons",
            },
            {
              label: "Example 2 — Small commercial parking lot",
              desc: "60 ft × 120 ft, 3 in thick, standard 145 lb/ft³, 8% waste",
              steps: [
                "Area: 60 × 120 = 7,200 ft²",
                "Thickness: 3 ÷ 12 = 0.25 ft",
                "Volume: 7,200 × 0.25 = 1,800 ft³",
                "Weight: 1,800 × 145 = 261,000 lb",
                "Tons: 261,000 ÷ 2,000 = 130.5 tons",
                "+8% waste: 130.5 × 1.08 = 140.9 tons",
              ],
              result: "Order 141 tons (≈ 9 truckloads)",
            },
            {
              label: "Example 3 — Permeable path (porous mix)",
              desc: "6 ft × 50 ft, 2 in thick, porous mix at 125 lb/ft³, 5% waste",
              steps: [
                "Area: 6 × 50 = 300 ft²",
                "Thickness: 2 ÷ 12 = 0.1667 ft",
                "Volume: 300 × 0.1667 = 50 ft³",
                "Weight: 50 × 125 = 6,250 lb",
                "Tons: 6,250 ÷ 2,000 = 3.1 tons",
                "+5% waste: 3.1 × 1.05 = 3.3 tons",
              ],
              result: "Order 3.5 tons",
            },
          ].map(({ label, desc, steps, result }) => (
            <div key={label} className="rounded-md border border-asphalt-900/10 bg-asphalt-900 p-5 text-chalk">
              <div className="font-mono text-xs uppercase tracking-widest text-marking">{label}</div>
              <p className="mt-2 font-body text-xs text-steel-light">{desc}</p>
              <ol className="mt-4 space-y-1.5 font-mono text-sm tabular">
                {steps.map((s, i) => <li key={i} className="text-steel-light">{s}</li>)}
              </ol>
              <div className="mt-4 border-t border-chalk/10 pt-3 font-mono text-base font-semibold text-marking">
                → {result}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 font-body text-steel">
          Don't want to do this manually?{" "}
          <Link href="/tonnage-calculator" className="text-marking-dim underline">
            The tonnage calculator
          </Link>{" "}
          runs the same formula — plus truckload counts — instantly.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "What's the full asphalt tonnage formula?",
              a: "Tons = Length (ft) × Width (ft) × Thickness (in) ÷ 12 × Density (lb/ft³) ÷ 2,000. Then add a 5–10% waste allowance before ordering. For standard 145 lb/ft³ hot mix at 2.5 inches, the simplified version is: Area (ft²) × 0.0151 = tons (before waste).",
            },
            {
              q: "What density should I use for the calculation?",
              a: "145 lb/ft³ for standard dense-graded hot mix. 125 lb/ft³ for porous or open-graded. 150 lb/ft³ for stone mastic asphalt (SMA). 130 lb/ft³ for cold mix. 105–115 lb/ft³ for recycled millings. When in doubt, ask your supplier for the specific mix design's target density.",
            },
            {
              q: "Why do I have to divide thickness by 12?",
              a: "Because the formula needs all measurements in consistent units — area in square feet and thickness in feet. Thickness specs are always given in inches, so dividing by 12 converts to feet. Skipping this step overstates your tonnage by a factor of 12.",
            },
            {
              q: "How much waste allowance should I add?",
              a: "5–7% for a simple rectangular job with straight cuts. 8–10% for irregular shapes, multiple access points, or jobs with significant elevation changes. After adding the allowance, round up to the nearest half-ton — never round down.",
            },
            {
              q: "Can I use this formula for recycled millings?",
              a: "Yes, with a different density figure. Recycled asphalt millings (RAP) are loosely graded and typically run 105–115 lb/ft³ before compaction — about 20–30% lighter than fresh hot mix. Use the supplier's stated density or 110 lb/ft³ as a midpoint default.",
            },
          ]}
        />
      </section>
    </>
  );
}
