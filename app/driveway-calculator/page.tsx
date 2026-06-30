import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import ThicknessGuide from "@/components/ThicknessGuide";
import ThicknessCompare from "@/components/ThicknessCompare";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Asphalt Driveway Calculator – Material & Cost by Size",
  description:
    "Calculate asphalt tons and cost for your driveway with built-in presets for single, double, and RV-length driveways, or enter your own dimensions.",
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
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Built for Residential Driveways
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900 sm:text-6xl">
            Asphalt Driveway Calculator
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-steel">
            Pick a common driveway size below or enter your own measurements.
            Residential driveways are typically paved 2–2.5 inches thick for
            cars, or 3+ inches if you regularly park trucks or an RV.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Calculator headline="weight" presets={PRESETS} idAnchor="calculator" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          Driveway thickness by use case
        </h2>
        <p className="mt-3 max-w-2xl font-body text-steel">
          A driveway that only sees passenger cars can run thinner than one
          that regularly carries a delivery truck, trailer, or RV. Match
          your thickness to the heaviest thing that will actually park on it.
        </p>
        <div className="mt-6">
          <ThicknessCompare />
        </div>
        <div className="mt-8">
          <ThicknessGuide />
        </div>
      </section>

      <section className="border-t border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Sizing your driveway correctly
          </h2>
          <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
            <p>
              Measure the full paved footprint, not just the parking pad —
              include the apron where the driveway meets the street and any
              turning area, since both need the same base prep and asphalt
              depth as the rest of the surface.
            </p>
            <p>
              For irregular shapes, split the driveway into rectangles (a
              straight run plus a turning pad, for example), calculate each
              separately, and add the tonnage together. This is more
              accurate than averaging an odd shape into a single rectangle.
            </p>
            <p>
              Most single-car driveways run 8–12 ft wide; double-car
              driveways run 16–24 ft. Length depends entirely on the distance
              from the street to the garage or parking area on your lot.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          Related tools
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <Card href="/" title="Asphalt Calculator" body="The full calculator: area, weight, volume, and cost in one place." />
          <Card href="/tonnage-calculator" title="Tonnage Calculator" body="Get exact tons and truckload counts for ordering material." />
          <Card href="/cost-calculator" title="Cost Calculator" body="Material-only and installed price ranges side by side." />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "What size is a standard driveway?",
              a: "A single-car driveway is typically about 10×20 ft (200 sq ft), and a double-car driveway is about 20×20 ft (400 sq ft). Longer driveways from street to garage can easily run 600–1,000+ sq ft.",
            },
            {
              q: "How many tons of asphalt for a 2-car driveway?",
              a: "A 20×20 ft (400 sq ft) double-car driveway at 2.5 inches thick needs roughly 6 tons of standard hot-mix asphalt, including a typical waste allowance. Use the calculator above for your exact dimensions.",
            },
            {
              q: "How thick should a driveway be for an RV?",
              a: "For an RV pad, plan on at least 3–3.5 inches of compacted asphalt over a properly prepared base, since RVs are significantly heavier than passenger cars and concentrate weight on fewer wheels.",
            },
            {
              q: "Should I include the apron in my measurements?",
              a: "Yes. The apron — the section connecting the driveway to the street — should be measured and paved to the same spec as the rest of the driveway, since it sees frequent turning stress from tires.",
            },
            {
              q: "Can I pave over an existing gravel driveway?",
              a: "Often yes, if the gravel base is well-compacted and properly graded for drainage. A contractor will typically add and compact additional base material before the asphalt layer to ensure it meets the depth your project needs.",
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
