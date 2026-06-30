import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "How to Calculate Asphalt Tonnage (Step by Step)",
  description: "Learn the exact formula for calculating asphalt tonnage from area, thickness, and density, with a full worked example.",
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
            description: "Step-by-step formula and worked example for calculating asphalt tonnage from area, thickness, and density.",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
          }),
        }}
      />
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">Guide</span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            How to Calculate Asphalt Tonnage
          </h1>
          <p className="mt-4 font-body text-lg leading-relaxed text-steel">
            Asphalt tonnage = area (ft²) × thickness (ft) × density (lb/ft³)
            ÷ 2,000. That&apos;s the whole formula — everything below is how
            to apply it correctly and where people get it wrong.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Step 1 — Measure the area
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          Measure length and width in feet and multiply them. For an
          irregular shape, split it into rectangles, calculate each one, and
          add the areas together. Round measurements to the nearest half
          foot — precision beyond that doesn&apos;t meaningfully change your
          material order.
        </p>

        <h2 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Step 2 — Convert thickness to feet
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          Asphalt thickness is specified in inches, but the formula needs
          feet. Divide your thickness in inches by 12. A 3-inch layer
          becomes 0.25 ft; a 2.5-inch layer becomes 0.208 ft.
        </p>

        <h2 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Step 3 — Find the volume
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          Multiply area by thickness-in-feet to get volume in cubic feet.
          This is the actual physical volume of asphalt the project needs,
          before you convert it into a unit your supplier sells by.
        </p>

        <h2 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Step 4 — Apply density to get weight
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          Multiply volume by the density of your specific mix. Standard
          dense-graded hot mix runs about 145 lb/ft³ — see our{" "}
          <Link href="/guides/asphalt-density-explained" className="text-marking-dim underline">
            density guide
          </Link>{" "}
          if you&apos;re using a different mix type. This gives total weight
          in pounds.
        </p>

        <h2 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Step 5 — Convert to tons and add waste
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          Divide pounds by 2,000 to get tons. Then add a 5–10% waste
          allowance for compaction, spillage, and irregular edges before
          placing your order.
        </p>

        <div className="mt-10 rounded-md border border-asphalt-900/10 bg-asphalt-900 p-6 text-chalk">
          <span className="font-mono text-xs uppercase tracking-widest text-marking">Worked example</span>
          <p className="mt-3 font-body text-sm leading-relaxed text-steel-light">
            A driveway measures 18 ft × 36 ft, paved 2.5 inches thick, using
            standard 145 lb/ft³ hot mix.
          </p>
          <ol className="mt-4 space-y-2 font-mono text-sm tabular text-chalk">
            <li>1. Area: 18 × 36 = 648 ft²</li>
            <li>2. Thickness: 2.5 ÷ 12 = 0.208 ft</li>
            <li>3. Volume: 648 × 0.208 = 135 ft³</li>
            <li>4. Weight: 135 × 145 = 19,575 lb</li>
            <li>5. Tons: 19,575 ÷ 2,000 = 9.79 tons</li>
            <li>6. With 7% waste: 9.79 × 1.07 ≈ <span className="text-marking">10.5 tons</span></li>
          </ol>
        </div>

        <p className="mt-6 font-body text-steel">
          Don&apos;t want to do this by hand every time?{" "}
          <Link href="/tonnage-calculator" className="text-marking-dim underline">
            Use the tonnage calculator
          </Link>{" "}
          — it runs the same formula instantly and lets you switch mix types.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "What's the asphalt tonnage formula?",
              a: "Tonnage = area (ft²) × thickness (ft) × density (lb/ft³) ÷ 2,000. Thickness must be converted from inches to feet first by dividing by 12.",
            },
            {
              q: "Why divide by 2,000?",
              a: "Because the formula's intermediate result is in pounds, and there are 2,000 pounds in a US ton. Dividing converts the weight into the unit asphalt is sold by.",
            },
            {
              q: "What if my area isn't a perfect rectangle?",
              a: "Split it into rectangles or triangles, calculate the tonnage for each section separately using the same formula, then add the results together.",
            },
            {
              q: "Do I need to know the exact density of my mix?",
              a: "It helps, but 145 lb/ft³ is a reasonable default for standard hot mix if your supplier hasn't specified otherwise. For specialty mixes — porous, SMA, or cold patch — ask your supplier for the exact figure.",
            },
          ]}
        />
      </section>
    </>
  );
}
