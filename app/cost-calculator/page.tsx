import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import CostBreakdown from "@/components/CostBreakdown";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Asphalt Cost Calculator – Material & Installed Price Estimate",
  description:
    "Estimate the cost of your asphalt project from area and thickness, with material-only pricing, a typical installed range, and a breakdown of where each dollar goes.",
};

export default function CostCalculatorPage() {
  return (
    <>
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Material & Installed Pricing
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900 sm:text-6xl">
            Asphalt Cost Calculator
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-steel">
            Asphalt cost scales directly with tonnage: area × thickness ×
            density gives you weight, and weight × price per ton gives material
            cost. Enter your dimensions — the calculator handles the math and
            shows both what material costs and what installed typically runs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Calculator headline="cost" showInstalledRange idAnchor="calculator" />
      </section>

      {/* ── WHAT DRIVES COST ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          What drives asphalt cost
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            <strong>Material price</strong> is what the hot-mix asphalt itself
            costs at the plant, sold by the ton. Nationally it averages roughly
            $100–$200 per ton for standard dense-graded hot mix, and it moves
            directly with crude oil prices — asphalt binder is a petroleum
            refinery byproduct, so fuel-price swings flow through to your
            material quote within weeks.
          </p>
          <p>
            <strong>Installed price</strong> covers everything beyond raw
            material: site grading and excavation, the compacted aggregate base
            layer, delivery, the paving crew and equipment, and roller
            compaction. For a standard residential driveway, installed pricing
            typically runs $3–$7 per square foot — which works out to roughly
            $250–$450 per ton-equivalent once labor is folded in, or 2.5–3×
            the material-only figure.
          </p>
          <p>
            <strong>Thickness</strong> is the single biggest lever you control
            before getting quotes. Going from 2 inches to 3 inches adds exactly
            50% more material for the same footprint — and 50% more material
            cost. Use the thickness slider above to see that tradeoff before
            committing to a spec with your contractor.
          </p>
        </div>
      </section>

      {/* ── WHERE THE DOLLAR GOES ── */}
      <section className="border-y border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Where an installed asphalt dollar goes
          </h2>
          <p className="mt-3 font-body leading-relaxed text-steel">
            For a typical professionally paved driveway, material is usually
            only about a third of what you pay. Labor, equipment, and base
            preparation make up the rest — which is why a contractor's
            installed quote can look dramatically higher than a raw material
            estimate from a supplier.
          </p>
          <div className="mt-8">
            <CostBreakdown />
          </div>
          <p className="mt-4 font-body text-xs text-steel-light">
            Illustrative national-average split for a standard residential
            asphalt driveway. Actual breakdown shifts with site conditions —
            heavy regrading, drainage work, or demo of existing pavement
            raises the base-prep share significantly.
          </p>
        </div>
      </section>

      {/* ── REGIONAL PRICE FACTORS ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          Why asphalt prices vary so much by location
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            The same driveway can cost meaningfully more in one region than
            another, and it's not just contractor markup. Several structural
            factors drive geographic price differences that won't change
            regardless of how many quotes you get:
          </p>
          <div className="space-y-5">
            <PriceFactor
              title="Distance to the nearest batch plant"
              body="Asphalt must be placed within a narrow temperature window after it leaves the plant — typically within 30–60 minutes. If the nearest plant is 45 miles away, the supplier charges more per ton to cover hotter trucks, faster delivery logistics, and the risk of unusable material. Rural jobs cost more than suburban ones for this reason alone."
            />
            <PriceFactor
              title="Local aggregate availability"
              body="The aggregate (crushed stone or gravel) in hot-mix asphalt is the heaviest and cheapest component per pound — but only if it's sourced locally. In areas without good local quarries, aggregate has to be trucked in, which raises the base price of every ton delivered to the plant."
            />
            <PriceFactor
              title="Climate and PG binder grade"
              body="Regions with extreme temperature swings — hot summers and cold winters — require a wider-grade performance binder (PG 64-22 or stiffer) to prevent both rutting and low-temperature cracking. Wider-grade binders cost more to refine and source, adding to the per-ton price in those markets."
            />
            <PriceFactor
              title="Seasonal demand"
              body="Paving season peaks in late spring and summer when weather is reliable and ground conditions are dry. Prices at the plant and contractor rates both peak during this window and often soften in late fall. If your project can wait until September–October, you may find both better availability and lower rates."
            />
            <PriceFactor
              title="Labor market"
              body="Paving crew wages vary significantly between high-cost metro areas and rural markets. Contractor labor is typically 25–40% of an installed quote, so local wage levels directly affect the final number even if material costs are identical."
            />
          </div>
          <p className="pt-2">
            The upshot: use the national-average price per ton in the calculator
            above for an initial planning budget, then replace it with an actual
            local supplier quote once you have one — local prices can land
            anywhere from 20% below to 40% above the national average depending
            on which of the above factors applies to your market.
          </p>
        </div>
      </section>

      {/* ── PROJECT COST EXAMPLES ── */}
      <section className="border-y border-asphalt-900/10 bg-asphalt-900 text-chalk">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight">
            Sample project cost ranges
          </h2>
          <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-steel-light">
            Material cost at $140/ton; installed range at 2.6× material.
            Actual costs depend on location, site conditions, and contractor.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse font-body text-sm">
              <thead>
                <tr className="border-b border-chalk/20 text-left">
                  <th className="pb-3 pr-6 font-mono text-xs uppercase tracking-widest text-steel-light">Project</th>
                  <th className="pb-3 pr-6 font-mono text-xs uppercase tracking-widest text-steel-light">Size</th>
                  <th className="pb-3 pr-6 font-mono text-xs uppercase tracking-widest text-steel-light">Approx. tons</th>
                  <th className="pb-3 pr-6 font-mono text-xs uppercase tracking-widest text-steel-light">Material est.</th>
                  <th className="pb-3 font-mono text-xs uppercase tracking-widest text-steel-light">Installed est.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-chalk/10">
                {[
                  ["Single driveway", "10×20 ft, 2.5 in", "≈ 3.2 T", "~$450", "~$1,200"],
                  ["Double driveway", "20×20 ft, 2.5 in", "≈ 6.5 T", "~$910", "~$2,400"],
                  ["Long single driveway", "12×40 ft, 2.5 in", "≈ 7.7 T", "~$1,080", "~$2,800"],
                  ["Small parking lot", "40×60 ft, 3 in", "≈ 52 T", "~$7,300", "~$19,000"],
                  ["Residential path", "4×50 ft, 2 in", "≈ 2.5 T", "~$350", "~$900"],
                ].map(([proj, size, tons, mat, inst]) => (
                  <tr key={proj} className="text-steel-light">
                    <td className="py-3 pr-6 font-medium text-chalk">{proj}</td>
                    <td className="py-3 pr-6 font-mono tabular">{size}</td>
                    <td className="py-3 pr-6 font-mono tabular">{tons}</td>
                    <td className="py-3 pr-6 font-mono tabular text-marking">{mat}</td>
                    <td className="py-3 font-mono tabular">{inst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          Related tools
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <Card href="/" title="Asphalt Calculator" body="Full calculator: tonnage, volume, and cost output in one place." />
          <Card href="/tonnage-calculator" title="Tonnage Calculator" body="Focused on the weight output and truckload count for placing a material order." />
          <Card href="/driveway-calculator" title="Driveway Calculator" body="Quick presets for common driveway footprints, sized for residential jobs." />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "How much does asphalt cost per square foot?",
              a: "Installed asphalt typically runs $3–$7 per square foot for a residential driveway, depending on thickness, region, and site prep requirements. Material-only cost (if you're supplying directly) is roughly $1–$2 per square foot at a standard 2.5-inch depth.",
            },
            {
              q: "How much does asphalt cost per ton?",
              a: "Material-only hot-mix asphalt averages roughly $100–$200 per ton nationally in 2026. Installed pricing — which includes labor, equipment, and base prep — works out closer to $250–$450 per ton-equivalent, depending on site conditions and location.",
            },
            {
              q: "Why do asphalt prices vary so much by region?",
              a: "Several factors drive regional price differences: distance to the nearest batch plant, local aggregate availability, the required PG binder grade (cold climates need wider-grade binders that cost more), seasonal demand peaks, and local labor market rates. See the 'Why prices vary' section above for detail on each factor.",
            },
            {
              q: "Is a thicker driveway worth the extra cost?",
              a: "For standard passenger vehicles, 2–2.5 inches is usually sufficient. Upgrading to 3 inches adds ~50% material cost for the same footprint but meaningfully extends life expectancy if you park trucks, RVs, or trailers on the surface. It's generally worth it if the driveway sees anything heavier than a standard passenger car.",
            },
            {
              q: "What's the difference between material cost and installed cost?",
              a: "Material cost is what the asphalt itself costs at the plant, sold by the ton. Installed cost is what you pay a contractor to do the complete job: demo (if needed), grading, compacted aggregate base, delivery, paving, and compaction. Installed typically runs 2.5–3× the material-only figure.",
            },
            {
              q: "Does this calculator account for the aggregate base?",
              a: "No — it calculates the asphalt wearing course only. The compacted aggregate base beneath the asphalt is a separate material (typically crushed stone) and a separate line item on a contractor's quote. Base depth depends on soil conditions and traffic load, usually 4–8 inches for residential work.",
            },
          ]}
        />
      </section>
    </>
  );
}

function PriceFactor({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l-2 border-marking/40 pl-4">
      <h3 className="font-body font-semibold text-asphalt-900">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function Card({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <Link href={href} className="group block rounded-md border border-asphalt-900/10 bg-chalk p-5 transition-colors hover:border-marking-dim">
      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-asphalt-900">{title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-steel">{body}</p>
      <span className="mt-3 inline-block font-mono text-xs uppercase tracking-widest text-marking-dim group-hover:underline">Open calculator →</span>
    </Link>
  );
}
