import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Asphalt Tonnage Calculator – Tons & Truckloads from Area",
  description:
    "Calculate exactly how many tons of asphalt you need from area and thickness, plus truckload counts for ordering bulk hot-mix material.",
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
            To calculate asphalt tonnage, multiply area by thickness to get
            volume, then multiply by density and divide by 2,000. This tool
            does that math instantly and also tells you how many truckloads
            to expect.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Calculator headline="weight" idAnchor="calculator" />
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          The tonnage formula, step by step
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            Asphalt tonnage = area (ft²) × thickness (ft) × density (lb/ft³) ÷
            2,000. For a 1,000 sq ft driveway at 3 inches (0.25 ft) thick
            using standard 145 lb/ft³ hot mix: 1,000 × 0.25 × 145 ÷ 2,000 =
            <strong> 18.1 tons</strong>.
          </p>
          <p>
            Suppliers typically sell asphalt by the ton because truck
            payloads and batch plant output are measured that way. A
            standard tandem-axle dump truck carries about 16 tons per load,
            which is why this calculator also estimates truckloads — useful
            for scheduling deliveries on larger jobs.
          </p>
          <p>
            Always round your final order up to the nearest half-ton or
            truckload. Running short mid-pour means a second delivery at a
            higher per-ton rate and a visible cold joint where the old and
            new material meet.
          </p>
        </div>
      </section>

      <section className="border-t border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Related tools
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <Card href="/" title="Asphalt Calculator" body="The full calculator: area, weight, volume, and cost in one place." />
            <Card href="/cost-calculator" title="Cost Calculator" body="Turn your tonnage into a material and installed price estimate." />
            <Card href="/driveway-calculator" title="Driveway Calculator" body="Presets for common driveway sizes, dialed in for residential jobs." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <FAQ
          items={[
            {
              q: "How do you calculate asphalt tonnage?",
              a: "Multiply the area in square feet by the thickness in feet, then multiply by the asphalt density (typically 145 lb/ft³), then divide by 2,000 to convert pounds to tons.",
            },
            {
              q: "How many tons of asphalt do I need per square foot?",
              a: "At a standard 2.5-inch driveway thickness, you need roughly 0.0151 tons per square foot. At 3 inches, that rises to about 0.0181 tons per square foot. Thicker layers scale up proportionally.",
            },
            {
              q: "How much does one truckload of asphalt cover?",
              a: "A typical 16-ton truckload covers about 880 square feet at 2 inches thick, or roughly 590 square feet at 3 inches thick, using standard hot-mix density.",
            },
            {
              q: "Does asphalt tonnage change with mix type?",
              a: "Yes. Porous/open-graded mixes run lighter at around 125 lb/ft³, while stone mastic asphalt (SMA) runs heavier at around 150 lb/ft³ — both about 10–15% different from standard dense-graded mix.",
            },
            {
              q: "Should I round up my tonnage order?",
              a: "Yes — round up to the nearest half-ton after adding a 5–10% waste allowance. Running out mid-job means a rushed second delivery and a visible seam where old and new asphalt meet.",
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
