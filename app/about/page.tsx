import type { Metadata } from "next";
import Link from "next/link";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "About Asphalt Calculator HQ",
  description:
    "Who we are, how our calculators work, where the density and pricing figures come from, and how to use estimates responsibly alongside a real contractor quote.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            About
          </span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            About Asphalt Calculator HQ
          </h1>
          <LastUpdated date="2026-06-30" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <div className="space-y-10 font-body leading-relaxed text-steel">

          {/* WHO WE ARE */}
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
              Who we are
            </h2>
            <p className="mt-4">
              Asphalt Calculator HQ is an independent tool site built and
              maintained by a small team of construction hobbyists and
              self-builders who got tired of the same problem: every time we
              needed to estimate paving material for a driveway or small lot
              project, the available online calculators either locked density
              to a single hardcoded figure, gave no explanation of the formula,
              or required signing up to see the output.
            </p>
            <p className="mt-4">
              We're not a paving company, a materials supplier, or a contractor
              referral service. We have no financial relationship with any
              asphalt supplier, batch plant, or paving contractor. This site
              earns revenue through display advertising — which means our
              incentive is to give you useful, accurate estimates that bring
              you back, not to push you toward a particular purchase or vendor.
            </p>
            <p className="mt-4">
              Our backgrounds are in DIY construction, project management, and
              software — not in licensed civil engineering. We built these tools
              because we needed them ourselves, then made them public so others
              could benefit from the same calculations.
            </p>
          </div>

          {/* HOW WE BUILT THE CALCULATORS */}
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
              How the calculators work — and where the numbers come from
            </h2>
            <p className="mt-4">
              Every calculator on this site uses the same standard formula
              used by professional paving estimators:
            </p>
            <div className="my-5 rounded-md border border-asphalt-900/10 bg-asphalt-900 p-5 text-chalk">
              <div className="font-mono text-sm">Tons = Area (ft²) × Thickness (in) ÷ 12 × Density (lb/ft³) ÷ 2,000</div>
              <div className="mt-2 font-body text-xs text-steel-light">Then × (1 + waste%) for the final order quantity.</div>
            </div>
            <p className="mt-4">
              This isn't a proprietary formula — it's basic dimensional
              analysis. The same calculation appears in NAPA (National Asphalt
              Pavement Association) estimating guidance, state DOT paving
              specifications, and every professional contractor's estimating
              spreadsheet. We didn't invent it; we just made it faster to run.
            </p>

            <h3 className="mt-6 font-body font-semibold text-asphalt-900">Density figures</h3>
            <p className="mt-2">
              Our default density values come from published industry standards
              and commonly cited engineering references:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
              <li><strong className="text-asphalt-900">145 lb/ft³</strong> for standard dense-graded hot-mix asphalt — the most widely cited value in NAPA guidance and state DOT specifications for estimating purposes.</li>
              <li><strong className="text-asphalt-900">150 lb/ft³</strong> for Stone Mastic Asphalt (SMA) — reflects the higher binder content and coarse aggregate proportion typical of SMA mix designs.</li>
              <li><strong className="text-asphalt-900">130 lb/ft³</strong> for cold-mix / patch material — a commonly used midpoint; individual product densities vary and the manufacturer's data sheet is the authoritative source.</li>
              <li><strong className="text-asphalt-900">125 lb/ft³</strong> for porous / open-graded mixes — reflects intentional air void content designed for drainage. Actual density varies by design void target.</li>
              <li><strong className="text-asphalt-900">105–115 lb/ft³</strong> for recycled asphalt millings — a range reflecting typical loose-material density before recompaction. Your supplier's stockpile figure is more accurate for any specific order.</li>
            </ul>
            <p className="mt-4">
              These are planning-phase defaults, not material specifications.
              For a final order, always confirm the compacted density of the
              specific mix you're purchasing with your batch plant or supplier.

            </p>

            <h3 className="mt-6 font-body font-semibold text-asphalt-900">Pricing figures</h3>
            <p className="mt-2">
              Material price ranges ($100–$200/ton) and installed price
              multipliers (2.5–3×) are derived from publicly reported regional
              cost data, contractor trade publications, and our own research
              into current market rates. These figures are reviewed periodically
              but will lag actual market conditions — particularly for hot-mix,
              which tracks crude oil prices closely. Use our cost estimates as
              a budgeting benchmark, not a substitute for a real supplier quote.
            </p>
          </div>

          {/* HOW TO USE THIS RESPONSIBLY */}
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
              How to use these estimates responsibly
            </h2>
            <p className="mt-4">
              Our calculators are planning tools, not professional engineering
              specifications. Here's what they're good for — and where they
              stop:
            </p>
            <div className="mt-5 space-y-4">
              <UseCase
                label="Good for"
                items={[
                  "Getting a ballpark tonnage before calling suppliers",
                  "Sanity-checking a contractor's material estimate",
                  "Budgeting a project before receiving formal quotes",
                  "Understanding how thickness changes material quantity",
                  "Converting between units (sq ft, cubic yards, tons)",
                ]}
                positive
              />
              <UseCase
                label="Not a substitute for"
                items={[
                  "A licensed contractor's site-specific estimate",
                  "A structural engineer's pavement design for commercial projects",
                  "A batch plant's mix-specific density for final ordering",
                  "Local code review for permits or fire lane specifications",
                  "Soil or subgrade assessment before construction",
                ]}
                positive={false}
              />
            </div>
            <p className="mt-5">
              If your project is commercial, involves fire lanes, requires a
              permit, or is being built on problematic soil, work with a
              licensed civil engineer and a reputable local contractor from the
              start. The cost of a proper design is almost always less than the
              cost of a pavement failure that needed it.
            </p>
          </div>

          {/* CONTENT ACCURACY */}
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
              Keeping content accurate
            </h2>
            <p className="mt-4">
              We update our guides and reference tables when industry standards
              change, when we find errors, or when new data becomes available.
              Every content page shows a "Last updated" date so you can judge
              recency. If you notice an error in our formulas, density values,
              or cost guidance, please{" "}
              <Link href="/contact" className="text-marking-dim underline">
                contact us
              </Link>
              {" "}— we review and correct reported issues.
            </p>
          </div>

          {/* CONTACT CTA */}
          <div className="rounded-md border border-asphalt-900/10 bg-concrete-50 p-6">
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-asphalt-900">
              Questions or corrections?
            </h2>
            <p className="mt-2 text-sm">
              We read every message. For errors, formula questions, or anything
              else:{" "}
              <a
                href="mailto:support@asphaltcalculatorhq.com"
                className="text-marking-dim underline"
              >
                support@asphaltcalculatorhq.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function UseCase({
  label,
  items,
  positive,
}: {
  label: string;
  items: string[];
  positive: boolean;
}) {
  return (
    <div className={`rounded-sm border-l-2 pl-4 ${positive ? "border-marking/50" : "border-steel/30"}`}>
      <span className={`font-mono text-xs uppercase tracking-widest ${positive ? "text-marking-dim" : "text-steel"}`}>
        {label}
      </span>
      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
