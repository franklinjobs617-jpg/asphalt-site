import type { Metadata } from "next";
import Link from "next/link";
import DensityChart from "@/components/DensityChart";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Asphalt Density Explained — Why It Changes Your Estimate",
  description: "How asphalt density works, why it varies by mix type, and how a 20 lb/ft³ difference changes your tonnage and cost.",
};

export default function DensityGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Asphalt Density Explained",
            description:
              "How asphalt density works, why it varies by mix type, and how it changes a tonnage and cost estimate.",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
          }),
        }}
      />
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">Guide</span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            Asphalt Density Explained
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 font-body text-lg leading-relaxed text-steel">
            Asphalt density is the weight of compacted asphalt per cubic
            foot. It's the single number that converts a volume of asphalt
            into a weight you can order — and it isn't the same for every
            mix.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Density by mix type
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          Standard dense-graded hot mix is the default most calculators use,
          but density shifts meaningfully with mix design:
        </p>
        <div className="mt-6 rounded-md border border-asphalt-900/10 bg-chalk p-6">
          <DensityChart />
        </div>

        <h2 className="mt-10 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Why the difference matters
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          For a 1,000 sq ft area at 3 inches thick, the gap between porous
          mix (125 lb/ft³) and SMA (150 lb/ft³) is about 3.1 tons — roughly
          a 20% swing in both material weight and cost. If your supplier
          quotes a mix design you don't recognize, ask for its density
          rather than assuming the standard 145 lb/ft³ figure.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          What actually changes density
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 font-body leading-relaxed text-steel">
          <li>
            <strong>Aggregate gradation</strong> — open-graded mixes have
            more air voids by design (for drainage), which lowers density.
          </li>
          <li>
            <strong>Binder content</strong> — more asphalt binder relative to
            aggregate generally increases density slightly.
          </li>
          <li>
            <strong>Compaction</strong> — under-compacted asphalt is less
            dense than the design spec, which is one reason field tonnage
            can run higher than a textbook calculation predicts.
          </li>
          <li>
            <strong>Temperature</strong> — hot mix is denser when properly
            compacted at the right temperature; compacting too cool traps
            more air voids.
          </li>
        </ul>

        <p className="mt-8 font-body text-steel">
          Want to plug a specific density into a full estimate?{" "}
          <Link href="/" className="text-marking-dim underline">
            Use the asphalt calculator
          </Link>{" "}
          — it includes mix-type presets for all four densities above.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "What is the standard density of asphalt?",
              a: "Standard dense-graded hot-mix asphalt is typically calculated at 145 lb/ft³ (about 2,322 kg/m³). This is the figure most general-purpose asphalt calculators default to.",
            },
            {
              q: "Why is porous asphalt lighter?",
              a: "Porous (open-graded) asphalt is designed with more air voids between aggregate particles to let water drain through, which lowers its compacted density to roughly 125 lb/ft³.",
            },
            {
              q: "Is SMA always heavier than standard hot mix?",
              a: "Stone mastic asphalt (SMA) typically runs denser, around 150 lb/ft³, due to its higher proportion of coarse aggregate and binder content, though exact figures vary by specific mix design.",
            },
            {
              q: "How much does density affect my final cost?",
              a: "Directly and proportionally — a 10% higher density means roughly 10% more tons for the same volume, and tons are what you're billed for. Always confirm density with your supplier before finalizing a budget.",
            },
          ]}
        />
      </section>
    </>
  );
}
