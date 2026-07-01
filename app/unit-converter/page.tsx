import type { Metadata } from "next";
import Link from "next/link";
import UnitConverter from "@/components/UnitConverter";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Asphalt Unit Converter – sq ft to tons, cubic yards to tons",
  description:
    "Convert asphalt quantities between square feet, square yards, acres, cubic yards, cubic feet, and tons. Includes a reference table and formula explanations.",
};

export default function UnitConverterPage() {
  return (
    <>
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Unit Conversion
          </span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            Asphalt Unit Converter
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 font-body text-lg leading-relaxed text-steel">
            Convert between the units that come up when estimating and ordering
            asphalt: square feet, square yards, acres, cubic feet, cubic yards,
            and tons. All conversions use standard 145 lb/ft³ hot-mix density
            and can be adjusted for specialty mixes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
        <UnitConverter />
      </section>

      {/* ── CONVERSION REFERENCE ── */}
      <section className="border-y border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Quick conversion reference
          </h2>
          <p className="mt-3 max-w-2xl font-body text-steel">
            Fixed conversion factors for standard 145 lb/ft³ dense-graded hot
            mix. Any figure that includes "tons" changes proportionally if you're
            using a different mix density.
          </p>
          <div className="mt-6 overflow-x-auto rounded-md border border-asphalt-900/10">
            <table className="w-full min-w-[480px] border-collapse font-body text-sm">
              <thead>
                <tr className="bg-asphalt-900 text-chalk">
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Convert from</th>
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Convert to</th>
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Factor</th>
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-asphalt-900/10">
                {[
                  ["1 square yard","9 square feet","× 9","Area only"],
                  ["1 acre","43,560 sq ft","× 43,560","Area only"],
                  ["1 cubic yard","27 cubic feet","× 27","Volume only"],
                  ["1 cubic yard (HMA)","≈ 2.02 tons","× 2.02","At 145 lb/ft³"],
                  ["1 cubic foot (HMA)","≈ 0.0725 tons","× 0.0725","At 145 lb/ft³"],
                  ["1 ton (HMA)","≈ 13.8 cubic feet","× 13.8","At 145 lb/ft³"],
                  ["1 ton (HMA)","≈ 0.51 cubic yards","× 0.51","At 145 lb/ft³"],
                  ["1 ton covers @ 2 in","≈ 82 sq ft","÷ depth factor","At 145 lb/ft³"],
                  ["1 ton covers @ 3 in","≈ 55 sq ft","÷ depth factor","At 145 lb/ft³"],
                  ["1 ton covers @ 4 in","≈ 41 sq ft","÷ depth factor","At 145 lb/ft³"],
                ].map(([from, to, factor, notes], i) => (
                  <tr key={from+i} className={i % 2 === 0 ? "bg-chalk" : "bg-concrete-50"}>
                    <td className="px-4 py-3 text-asphalt-900">{from}</td>
                    <td className="px-4 py-3 font-mono tabular text-asphalt-900">{to}</td>
                    <td className="px-4 py-3 font-mono tabular text-marking-dim font-semibold">{factor}</td>
                    <td className="px-4 py-3 text-steel">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHY UNITS MATTER ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          Why asphalt uses so many different units
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            The unit confusion in asphalt estimating comes from the fact that
            different parts of the process use different measurement conventions.
            Architects and surveyors work in square feet or square yards.
            Landscaping and earthwork specs often use acres. Concrete contractors
            think in cubic yards. Asphalt suppliers sell by the ton. And
            structural specs specify thickness in inches. Getting from a site
            drawing to a material order requires converting through several of
            these at once.
          </p>
          <p>
            The two most common conversion errors in practice: forgetting that
            one cubic yard contains 27 cubic feet (not 3), and using volume
            in cubic yards directly in the density formula without converting
            to cubic feet first. Both produce estimates that are wildly off
            — by a factor of 3 and 27 respectively — which is why the main{" "}
            <Link href="/" className="text-marking-dim underline">asphalt calculator</Link>{" "}
            handles all the intermediate conversion steps automatically.
          </p>
          <p>
            For large commercial projects specified in acres, the acre-to-tons
            figure is worth understanding: one acre of asphalt at 3 inches thick
            using standard hot mix weighs approximately 789 tons. At $150/ton
            material cost, that's about $118,000 in asphalt material alone for
            a single acre of parking lot — before base prep, labor, or equipment.
          </p>
        </div>

        {/* ── FORMULA BOXES ── */}
        <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          The formulas behind the conversions
        </h2>
        <div className="mt-5 space-y-4">
          {[
            {
              label: "Area → Volume",
              formula: "Volume (ft³) = Area (ft²) × Thickness (in) ÷ 12",
              note: "Dividing by 12 converts thickness from inches to feet.",
            },
            {
              label: "Volume → Weight (tons)",
              formula: "Tons = Volume (ft³) × Density (lb/ft³) ÷ 2,000",
              note: "Dividing by 2,000 converts pounds to US tons.",
            },
            {
              label: "Cubic yards → Tons",
              formula: "Tons = Cubic yards × 27 × Density (lb/ft³) ÷ 2,000",
              note: "Multiplying by 27 converts cubic yards to cubic feet first.",
            },
            {
              label: "Square feet → Tons (direct)",
              formula: "Tons = Sq ft × Thickness (in) ÷ 12 × 145 ÷ 2,000",
              note: "The full chain in one formula. Result ÷ 0.0531 at 2.5 in, standard mix.",
            },
          ].map(({ label, formula, note }) => (
            <div key={label} className="rounded-md border border-asphalt-900/10 bg-asphalt-900 p-4 text-chalk">
              <div className="font-mono text-xs uppercase tracking-widest text-marking">{label}</div>
              <div className="mt-2 font-mono text-sm tabular">{formula}</div>
              <div className="mt-2 font-body text-xs text-steel-light">{note}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 font-body text-steel">
          Need to run a full project estimate rather than a one-off
          conversion?{" "}
          <Link href="/" className="text-marking-dim underline">
            The asphalt calculator
          </Link>{" "}
          applies all these formulas together and shows tons, cubic yards, and
          cost in one result.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "How many tons of asphalt in a cubic yard?",
              a: "One cubic yard of standard compacted hot-mix asphalt (145 lb/ft³) weighs approximately 2.02 tons. For porous mix at 125 lb/ft³, that drops to about 1.74 tons per cubic yard. For SMA at 150 lb/ft³, it's about 2.08 tons per cubic yard.",
            },
            {
              q: "How do you convert square feet to tons of asphalt?",
              a: "Multiply square feet by thickness in inches, divide by 12 (to get cubic feet), multiply by 145 (density in lb/ft³), then divide by 2,000 (to convert pounds to tons). For example: 1,000 sq ft at 2.5 inches = 1,000 × 2.5 ÷ 12 × 145 ÷ 2,000 = 15.1 tons.",
            },
            {
              q: "How many square yards are in a square foot?",
              a: "There are 9 square feet in 1 square yard (3 ft × 3 ft). To convert square feet to square yards, divide by 9. To convert square yards to square feet, multiply by 9.",
            },
            {
              q: "How many tons of asphalt per acre?",
              a: "One acre is 43,560 square feet. At 3 inches thick with standard 145 lb/ft³ hot mix: 43,560 × 0.25 × 145 ÷ 2,000 = approximately 789 tons per acre. At 2 inches thick, that's roughly 527 tons per acre.",
            },
            {
              q: "Why does density affect the cubic yards to tons conversion?",
              a: "Because the conversion from volume to weight requires knowing how heavy each cubic foot of material is. Standard hot mix is 145 lb/ft³, but porous mixes are 125 lb/ft³ and SMA is 150 lb/ft³. The same cubic yard of each mix weighs a different number of tons.",
            },
          ]}
        />
      </section>
    </>
  );
}
