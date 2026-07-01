import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import CostBreakdown from "@/components/CostBreakdown";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Asphalt Cost Calculator – Material & Installed Price Estimate",
  description:
    "Estimate the cost of your asphalt project from area and thickness, with both material-only pricing and a typical installed price range.",
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
            Asphalt cost scales with tonnage: area × thickness × density gives
            weight, and weight × price per ton gives material cost.
            Installed pricing — which adds excavation, base, and labor — runs
            roughly 2.5–3x higher. Enter your dimensions for both numbers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Calculator headline="cost" showInstalledRange idAnchor="calculator" />
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          What drives asphalt cost
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            <strong>Material price</strong> is the cost of the hot-mix asphalt
            itself, sold by the ton. It nationally averages roughly
            $100–$200 per ton and moves with crude oil prices, since asphalt
            binder is a petroleum byproduct, plus local aggregate and hauling
            costs.
          </p>
          <p>
            <strong>Installed price</strong> covers everything beyond the raw
            material: excavation, grading, compacted aggregate base, the
            paving crew, equipment, and compaction. For driveways, installed
            pricing is commonly quoted per square foot — typically $3–$7/sq
            ft for a standard residential job, which is roughly equivalent to
            $250–$450 per ton once labor is folded in.
          </p>
          <p>
            The biggest cost lever you control is thickness. Going from 2
            inches to 3 inches adds about 50% more material — and 50% more
            material cost — for the same footprint. Use the thickness slider
            above to see that tradeoff before you commit to a spec with your
            contractor.
          </p>
        </div>
      </section>

      <section className="border-t border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Where an installed asphalt dollar goes
          </h2>
          <p className="mt-3 font-body leading-relaxed text-steel">
            For a typical professionally installed driveway, material is
            usually only about a third of what you pay. Labor and base
            preparation make up most of the rest — which is why a DIY-supplied
            material order can come in well under a contractor&apos;s
            installed quote.
          </p>
          <div className="mt-8">
            <CostBreakdown />
          </div>
          <p className="mt-4 font-body text-xs text-steel-light">
            Illustrative national-average split for a standard residential
            asphalt driveway. Your project&apos;s actual breakdown shifts with
            site conditions — heavy regrading or drainage work raises the
            base-prep share significantly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          Related tools
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <Card href="/" title="Asphalt Calculator" body="The full calculator: area, weight, volume, and cost in one place." />
          <Card href="/tonnage-calculator" title="Tonnage Calculator" body="Get exact tons and truckload counts for ordering material." />
          <Card href="/driveway-calculator" title="Driveway Calculator" body="Presets for common driveway sizes, dialed in for residential jobs." />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <FAQ
          items={[
            {
              q: "How much does asphalt cost per square foot?",
              a: "Installed asphalt typically costs $3–$7 per square foot for a residential driveway, depending on thickness, region, and site prep needs. Material-only cost (if you're supplying it yourself) is usually $1–$2 per square foot at standard 2.5-inch thickness.",
            },
            {
              q: "How much does asphalt cost per ton?",
              a: "Material-only hot-mix asphalt averages roughly $100–$200 per ton nationally. Installed pricing, which bundles in labor and equipment, works out closer to $250–$450 per ton-equivalent.",
            },
            {
              q: "Why do asphalt prices vary so much by region?",
              a: "Asphalt binder is petroleum-based, so crude oil prices affect cost directly. Local aggregate availability, hauling distance to the nearest batch plant, and regional labor rates also shift pricing significantly between markets.",
            },
            {
              q: "Is a thicker driveway worth the extra cost?",
              a: "For standard passenger vehicles, 2–2.5 inches is usually sufficient. Going thicker mainly pays off if you expect heavier loads — trucks, RVs, or trailers — since added thickness resists cracking and rutting under that weight.",
            },
            {
              q: "Does this calculator give a binding quote?",
              a: "No — it gives a planning-stage estimate based on standard formulas and national average pricing. Get a written quote from a licensed local paving contractor before committing to a project.",
            },
          ]}
        />
      </section>
    </>
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
