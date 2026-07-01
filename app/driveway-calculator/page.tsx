import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import ThicknessGuide from "@/components/ThicknessGuide";
import ThicknessCompare from "@/components/ThicknessCompare";
import IrregularAreaGuide from "@/components/IrregularAreaGuide";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Asphalt Driveway Calculator – Material, Cost & Size Guide",
  description:
    "Calculate asphalt tonnage and cost for your driveway with built-in size presets. Includes thickness recommendations, common sizing mistakes, and what to expect from an installer.",
};

const PRESETS = [
  { label: "Single car (10×20 ft)", length: 20, width: 10 },
  { label: "Double car (20×20 ft)", length: 20, width: 20 },
  { label: "Long single (12×40 ft)", length: 40, width: 12 },
  { label: "Double + RV pad (24×50 ft)", length: 50, width: 24 },
];

export default function DrivewayCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to calculate asphalt needed for a driveway",
            step: [
              { "@type": "HowToStep", name: "Measure", text: "Measure the full driveway footprint in feet, including the apron, any widening areas, and turning pads." },
              { "@type": "HowToStep", name: "Choose thickness", text: "Select 2–2.5 inches for cars only, 3 inches for occasional heavy vehicles, 3.5+ inches for regular truck or RV use." },
              { "@type": "HowToStep", name: "Calculate", text: "Enter length, width, and thickness into the calculator. Add 5–7% waste allowance for a rectangular driveway." },
            ],
          }),
        }}
      />

      {/* ── HERO ── */}
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Built for Residential Driveways
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900 sm:text-6xl">
            Asphalt Driveway Calculator
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-steel">
            Pick a preset driveway size or enter your own measurements to get
            the tons of asphalt and estimated material cost. Thickness guidance
            and common sizing mistakes are below the calculator.
          </p>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Calculator headline="weight" presets={PRESETS} idAnchor="calculator" />
      </section>

      {/* ── STANDARD DRIVEWAY SIZES ── */}
      <section className="border-y border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Standard driveway sizes — and what they actually need
          </h2>
          <p className="mt-3 max-w-2xl font-body text-steel">
            These are the most common residential configurations. All tonnage
            figures use standard 145 lb/ft³ hot mix with a 7% waste allowance.
          </p>
          <div className="mt-8 overflow-x-auto rounded-md border border-asphalt-900/10">
            <table className="w-full min-w-[560px] border-collapse font-body text-sm">
              <thead>
                <tr className="bg-asphalt-900 text-chalk">
                  {["Driveway type","Dimensions","Area","Thickness","Approx. tons","Material est."].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-asphalt-900/10">
                {[
                  ["Single car","10×20 ft","200 ft²","2.5 in","≈ 3.2 T","~$450"],
                  ["Standard single","12×24 ft","288 ft²","2.5 in","≈ 4.6 T","~$645"],
                  ["Double car","20×20 ft","400 ft²","2.5 in","≈ 6.4 T","~$900"],
                  ["Long single","12×40 ft","480 ft²","2.5 in","≈ 7.7 T","~$1,080"],
                  ["Long double","20×40 ft","800 ft²","2.5 in","≈ 12.8 T","~$1,790"],
                  ["With RV pad (24×50)","24×50 ft","1,200 ft²","3.0 in","≈ 23.2 T","~$3,250"],
                ].map(([type, dim, area, thick, tons, est], i) => (
                  <tr key={type} className={i % 2 === 0 ? "bg-chalk" : "bg-concrete-50"}>
                    <td className="px-4 py-3 font-medium text-asphalt-900">{type}</td>
                    <td className="px-4 py-3 font-mono tabular text-asphalt-900">{dim}</td>
                    <td className="px-4 py-3 font-mono tabular text-asphalt-900">{area}</td>
                    <td className="px-4 py-3 font-mono tabular text-asphalt-900">{thick}</td>
                    <td className="px-4 py-3 font-mono tabular text-asphalt-900">{tons}</td>
                    <td className="px-4 py-3 font-mono tabular text-marking-dim font-semibold">{est}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 font-body text-xs text-steel">
            Material cost at $140/ton. Installed cost (including base prep and
            labor) typically runs 2.5–3× higher — see the{" "}
            <Link href="/cost-calculator" className="text-marking-dim underline">cost calculator</Link>{" "}
            for a full breakdown.
          </p>
        </div>
      </section>

      {/* ── THICKNESS GUIDE ── */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          How thick should a driveway be?
        </h2>
        <p className="mt-3 max-w-2xl font-body text-steel">
          Thickness is the biggest variable in your material cost — a third inch
          of extra depth on a 500 ft² driveway adds roughly 2 tons and $280 in
          material. Match your depth to the heaviest load the driveway will
          regularly carry, not just the car you drive today.
        </p>
        <div className="mt-6">
          <ThicknessGuide />
        </div>

        {/* ── VISUAL THICKNESS COMPARE ── */}
        <h3 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Visualizing 2 in vs 3 in vs 4 in
        </h3>
        <p className="mt-3 max-w-2xl font-body text-steel">
          The cross-sections below show the relative proportion of asphalt
          layer at each standard residential depth.
        </p>
        <div className="mt-6">
          <ThicknessCompare />
        </div>
      </section>

      {/* ── IRREGULAR SHAPES ── */}
      <section className="border-y border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            L-shaped or irregular driveways
          </h2>
          <p className="mt-3 max-w-2xl font-body text-steel">
            Most driveways look rectangular but aren't — they include aprons,
            widening areas, and angled sections. Use the guide below to split
            your driveway into rectangles and add the calculator results.
          </p>
          <div className="mt-6">
            <IrregularAreaGuide />
          </div>
        </div>
      </section>

      {/* ── HOW TO MEASURE ── */}
      <section className="border-y border-asphalt-900/10 bg-asphalt-900 text-chalk">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight">
            How to measure your driveway correctly
          </h2>
          <div className="mt-6 space-y-6">
            {[
              {
                n: "01",
                title: "Measure the full paved footprint",
                body: "Include the apron (where the driveway meets the street), any widening near the garage, turning pads, and side areas that will receive the same asphalt. These are easy to leave out and together can add 10–20% to the footprint of what looks like a simple straight driveway.",
              },
              {
                n: "02",
                title: "Break irregular shapes into rectangles",
                body: "If your driveway has an L-shape, a widening section, or a separate parking pad, split the total area into rectangles. Calculate the tonnage for each piece separately in the calculator above, then add the results. This is more accurate than trying to average the whole thing into one rectangle.",
              },
              {
                n: "03",
                title: "Account for the street edge",
                body: "The apron — the short section from the street to where your property begins — is usually required by local code to be paved, and typically has its own thickness spec set by the municipality. Check with your contractor whether the apron is included in their quote before finalizing measurements.",
              },
              {
                n: "04",
                title: "Add width for door-swing clearance",
                body: "A driveway that's just wide enough for the vehicle often doesn't leave room to open doors without stepping onto the lawn or gravel. Standard single-car driveways run 10–12 ft wide; double-car driveways run 18–24 ft. If you're replacing an existing driveway, verify the existing width is actually adequate before replicating it.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="flex gap-5 border-t border-chalk/10 pt-5">
                <span className="mt-0.5 shrink-0 font-mono text-sm text-marking">{n}</span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight">{title}</h3>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-steel-light">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BASE LAYER NOTE ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          What this calculator doesn't include: the base layer
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            The tonnage figure above is for the asphalt wearing course only —
            the layer you drive on. A properly built driveway also requires a
            compacted aggregate base beneath the asphalt, typically 4–6 inches
            of crushed stone for residential applications. This base layer is a
            separate material, a separate cost, and often the most important
            factor in how long the finished driveway lasts.
          </p>
          <p>
            Driveways built directly on poorly prepared subgrade — skipping or
            under-sizing the base — are the most common reason asphalt fails
            prematurely. The symptoms look like cracking and rutting in the
            asphalt, but the real cause is movement in the base below. When
            getting contractor quotes, confirm explicitly what base depth they're
            including and whether existing base material is being reused or
            replaced.
          </p>
          <p>
            For a gravel driveway being paved over for the first time, the
            contractor will typically test the existing base's compaction and
            either grade it, add more material, or in some cases remove and
            rebuild it entirely. That prep work is usually quoted separately
            from the asphalt tonnage and can range from negligible (good
            existing gravel) to significant (clay-heavy or waterlogged base).
          </p>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="border-t border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Related tools & guides
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <Card href="/cost-calculator" title="Cost Calculator" body="Material-only and installed price ranges side by side, with a breakdown of where each dollar goes." />
            <Card href="/guides/asphalt-vs-concrete-driveway-cost" title="Asphalt vs. Concrete" body="Side-by-side comparison of cost, lifespan, climate performance, and 30-year ownership economics." />
            <Card href="/glossary" title="Paving Glossary" body="Plain-English definitions for terms like tack coat, base course, PG binder, and compaction." />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <FAQ
          items={[
            {
              q: "What size is a standard driveway?",
              a: "A single-car driveway is typically 10–12 ft wide by 18–24 ft long, giving 180–288 sq ft. A double-car driveway is usually 18–24 ft wide by 20–24 ft long, or 360–576 sq ft. Longer driveways from the street to a detached garage can easily run 600–1,000+ sq ft.",
            },
            {
              q: "How many tons of asphalt for a 2-car driveway?",
              a: "A 20×20 ft (400 sq ft) double-car driveway at 2.5 inches thick needs roughly 6.4 tons of standard hot-mix asphalt including a 7% waste allowance. At 3 inches, the same footprint needs about 7.7 tons.",
            },
            {
              q: "How thick should an asphalt driveway be for a car?",
              a: "2 to 2.5 inches of compacted hot-mix asphalt over a properly prepared aggregate base is the standard recommendation for a driveway that only sees passenger cars. Going to 3 inches is worth the extra material cost if you regularly park a truck, SUV, or trailer.",
            },
            {
              q: "How thick should a driveway be for an RV or heavy truck?",
              a: "For an RV or regular heavy truck use, plan on at least 3–3.5 inches of compacted asphalt. The turning motion of large tires concentrates a lot of stress on a small area — undersized pavement shows rutting at the turning points first.",
            },
            {
              q: "Should I include the apron in my measurements?",
              a: "Yes — the apron (the section connecting your driveway to the street) should be measured and paved to at least the same spec as the rest of the driveway. It sees the most stress from vehicles turning in and out and is typically required by local code to be paved.",
            },
            {
              q: "Can I pave over an existing gravel driveway?",
              a: "Often yes, but only if the gravel base is well-compacted, properly graded for drainage, and deep enough. A contractor will assess the existing base, add and compact additional material as needed, then apply a tack coat before paving. If the gravel is loose, thin, or sitting on soft ground, it may need to be rebuilt first.",
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
      <span className="mt-3 inline-block font-mono text-xs uppercase tracking-widest text-marking-dim group-hover:underline">Open →</span>
    </Link>
  );
}
