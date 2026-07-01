import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Asphalt Tonnage Calculator – Tons & Truckloads from Area",
  description:
    "Calculate exactly how many tons of asphalt you need from area and thickness, with truckload counts and a step-by-step walkthrough of the tonnage formula.",
};

export default function TonnageCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to calculate asphalt tonnage",
            step: [
              { "@type": "HowToStep", name: "Get volume", text: "Length × width × thickness (in feet) = volume in cubic feet." },
              { "@type": "HowToStep", name: "Apply density", text: "Volume × 145 lb/ft³ (standard hot mix) = total weight in pounds." },
              { "@type": "HowToStep", name: "Convert to tons", text: "Divide pounds by 2,000 to get tons, then add 5–10% for waste." },
            ],
          }),
        }}
      />

      {/* ── HERO ── */}
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Tons & Truckloads
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900 sm:text-6xl">
            Asphalt Tonnage Calculator
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-steel">
            Asphalt tonnage = area × thickness × density ÷ 2,000. Enter your
            dimensions and this calculator runs that formula instantly — plus
            tells you how many truckloads to schedule for delivery.
          </p>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Calculator headline="weight" idAnchor="calculator" />
      </section>

      {/* ── FORMULA WALKTHROUGH ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          The tonnage formula, step by step
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            The core formula has four steps. All four are what the calculator
            above runs for every keypress — but understanding them manually
            helps you catch errors and gives you confidence when talking to a
            supplier.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          {[
            {
              n: "01",
              title: "Measure area in square feet",
              body: "Multiply length × width. For irregular shapes, break the area into rectangles, calculate each one, and add them together. Measure to the nearest half foot — precision beyond that doesn't meaningfully change a material order.",
            },
            {
              n: "02",
              title: "Convert thickness from inches to feet",
              body: "Divide your depth specification in inches by 12. A 2.5-inch layer = 0.208 ft. A 3-inch layer = 0.25 ft. This is the most common manual calculation error — entering 3 instead of 0.25 makes the result 12× too high.",
            },
            {
              n: "03",
              title: "Calculate volume in cubic feet",
              body: "Area (sq ft) × thickness (ft) = volume (cubic feet). This is the physical space the asphalt will occupy before any density conversion.",
            },
            {
              n: "04",
              title: "Apply density to get weight",
              body: "Volume (ft³) × density (lb/ft³) = weight in pounds. Standard dense-graded hot mix uses 145 lb/ft³. Confirm the figure with your supplier for specialty mixes.",
            },
            {
              n: "05",
              title: "Convert to tons and add waste",
              body: "Pounds ÷ 2,000 = tons. Then multiply by 1.05–1.10 for a 5–10% waste allowance before placing your order. Round up to the nearest half-ton or truckload.",
            },
          ].map((s) => (
            <div key={s.n} className="flex gap-5 border-t border-asphalt-900/10 pt-5">
              <span className="mt-0.5 shrink-0 font-mono text-sm text-marking-dim">{s.n}</span>
              <div>
                <h3 className="font-body font-semibold text-asphalt-900">{s.title}</h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-steel">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WORKED EXAMPLE */}
        <div className="mt-10 rounded-md border border-asphalt-900/10 bg-asphalt-900 p-6 text-chalk">
          <span className="font-mono text-xs uppercase tracking-widest text-marking">
            Worked example — commercial parking row
          </span>
          <p className="mt-3 font-body text-sm leading-relaxed text-steel-light">
            A 24 ft × 80 ft parking row paved at 3 inches with standard
            145 lb/ft³ hot mix.
          </p>
          <ol className="mt-4 space-y-2 font-mono text-sm tabular text-chalk">
            <li>1. Area: 24 × 80 = <span className="text-marking">1,920 ft²</span></li>
            <li>2. Thickness: 3 ÷ 12 = <span className="text-marking">0.25 ft</span></li>
            <li>3. Volume: 1,920 × 0.25 = <span className="text-marking">480 ft³</span></li>
            <li>4. Weight: 480 × 145 = <span className="text-marking">69,600 lb</span></li>
            <li>5. Tons: 69,600 ÷ 2,000 = <span className="text-marking">34.8 tons</span></li>
            <li>6. +8% waste: 34.8 × 1.08 = <span className="text-marking font-bold">37.6 tons ≈ 38 tons</span></li>
            <li>7. Truckloads: 38 ÷ 16 = <span className="text-marking">2.4 → order 3 loads</span></li>
          </ol>
        </div>
      </section>

      {/* ── TONNAGE QUICK REFERENCE ── */}
      <section className="border-y border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Tons per 1,000 sq ft by thickness
          </h2>
          <p className="mt-3 max-w-2xl font-body text-steel">
            Quick reference for standard 145 lb/ft³ dense-graded hot mix,
            without waste. Add 5–10% to any figure before ordering.
          </p>
          <div className="mt-6 overflow-x-auto rounded-md border border-asphalt-900/10">
            <table className="w-full min-w-[480px] border-collapse font-body text-sm">
              <thead>
                <tr className="bg-asphalt-900 text-chalk">
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Thickness</th>
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Tons / 1,000 ft²</th>
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Cubic yards / 1,000 ft²</th>
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-asphalt-900/10">
                {[
                  ["1.5 in", "9.1", "3.7", "Light walkways / paths"],
                  ["2 in", "12.1", "6.2", "Residential walkways"],
                  ["2.5 in", "15.1", "7.7", "Standard residential driveway"],
                  ["3 in", "18.1", "9.3", "Driveway with trucks / RV"],
                  ["4 in", "24.2", "12.3", "Light commercial lot"],
                  ["5 in", "30.2", "15.4", "Heavy-duty / highway base"],
                  ["6 in", "36.3", "18.5", "High-load industrial"],
                ].map(([thick, tons, cyd, use], i) => (
                  <tr key={thick} className={i % 2 === 0 ? "bg-chalk" : "bg-concrete-50"}>
                    <td className="px-4 py-3 font-mono tabular font-medium text-asphalt-900">{thick}</td>
                    <td className="px-4 py-3 font-mono tabular text-asphalt-900">{tons} T</td>
                    <td className="px-4 py-3 font-mono tabular text-asphalt-900">{cyd} yd³</td>
                    <td className="px-4 py-3 text-steel">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHY SUPPLIERS USE TONS ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          Why asphalt is sold by the ton, not the yard
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            Asphalt batch plants produce mix in measured weight batches —
            typically 2–5 tons per batch — because binder content, aggregate
            proportions, and quality control are all specified by weight.
            Trucks are loaded and weighed at the plant, and the invoice
            reflects the weight on the scale ticket. That's why the unit
            of sale is tons rather than cubic yards.
          </p>
          <p>
            A standard tandem-axle dump truck carries about 16 tons of hot
            mix. Tri-axle trucks can carry 18–20 tons. For larger jobs,
            contractors sometimes use belly dumps or end-dump semi-trailers
            with 20–25 ton payloads. This calculator uses 16 tons as the
            default truckload size — adjust your planning if your contractor
            specifies a different configuration.
          </p>
          <p>
            One practical implication: batch plants have minimum order
            quantities, often 1–2 tons, and delivery minimums that can
            reflect the cost of mobilizing a truck. For very small jobs
            (a single pothole or a short path), pre-bagged cold-patch
            material from a hardware store is often more economical than
            ordering hot mix.
          </p>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="border-t border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Related tools
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <Card href="/" title="Asphalt Calculator" body="The full calculator: tonnage, volume, and cost output in one place." />
            <Card href="/cost-calculator" title="Cost Calculator" body="Turn your tonnage into a material and installed price estimate." />
            <Card href="/driveway-calculator" title="Driveway Calculator" body="Presets for common residential driveway sizes." />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <FAQ
          items={[
            {
              q: "How do you calculate asphalt tonnage?",
              a: "Tonnage = area (ft²) × thickness (ft) × density (lb/ft³) ÷ 2,000. Thickness must be converted from inches to feet first. For standard hot mix at 145 lb/ft³: a 1,000 sq ft surface at 3 inches needs 1,000 × 0.25 × 145 ÷ 2,000 = 18.1 tons, plus 5–10% waste allowance.",
            },
            {
              q: "How many tons of asphalt per square foot?",
              a: "At 2.5 inches thick, roughly 0.0151 tons per square foot using standard 145 lb/ft³ hot mix. At 3 inches, about 0.0181 tons per square foot. The figure scales linearly with thickness — doubling thickness doubles the tons per square foot.",
            },
            {
              q: "How much does one truckload of asphalt cover?",
              a: "A 16-ton tandem truck load covers about 1,060 sq ft at 2 inches thick, 795 sq ft at 2.5 inches, or 640 sq ft at 3 inches thick, using standard hot-mix density. Actual coverage shifts with exact density and how tightly the material is spread.",
            },
            {
              q: "Does the tonnage formula change for different mix types?",
              a: "The formula stays the same; what changes is the density input. Porous mix runs 125 lb/ft³, cold patch runs 130 lb/ft³, SMA runs 150 lb/ft³. Using the wrong density adds or removes 10–20% from your tonnage estimate before any other errors come in.",
            },
            {
              q: "Should I always round up my tonnage order?",
              a: "Yes — after adding the waste allowance, round up to the nearest half-ton or truckload. Running short mid-job means a second delivery at a premium, and a cold joint where the old and new material meet that will remain visible for the life of the pavement.",
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
