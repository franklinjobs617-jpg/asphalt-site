import type { Metadata } from "next";
import Link from "next/link";
import CompareTable from "@/components/CompareTable";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Asphalt vs. Concrete Driveway Cost Compared",
  description: "Side-by-side cost, lifespan, climate fit, and maintenance comparison to help you choose between asphalt and concrete for a driveway.",
};

export default function AsphaltVsConcretePage() {
  return (
    <>
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">Material Comparison</span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            Asphalt vs. Concrete Driveway Cost
          </h1>
          <p className="mt-4 font-body text-lg leading-relaxed text-steel">
            Asphalt costs less upfront and handles freeze-thaw cycles
            better; concrete lasts longer and needs less routine
            maintenance. The right choice depends on your climate, budget,
            and how long you plan to own the property.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <CompareTable
          colA="Asphalt"
          colB="Concrete"
          rows={[
            { label: "Installed cost", a: "$3 – $7 / sq ft", b: "$6 – $12 / sq ft" },
            { label: "Typical lifespan", a: "15 – 20 years", b: "25 – 40 years" },
            { label: "Cold-climate performance", a: "Flexes with freeze-thaw, fewer cracks", b: "More prone to frost-heave cracking" },
            { label: "Hot-climate performance", a: "Can soften / rut in extreme heat", b: "Stable, but can surface-crack" },
            { label: "Maintenance", a: "Reseal every 2–3 years", b: "Seal joints occasionally, otherwise low" },
            { label: "Repair", a: "Patch and blend easily", b: "Cracks/patches are more visible" },
            { label: "Install time", a: "1 – 2 days, drive on it in 2–3 days", b: "Several days to a week to fully cure" },
            { label: "Look", a: "Uniform dark gray/black", b: "Customizable color, stamping, texture" },
          ]}
        />

        <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          When asphalt usually wins
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          If you're budget-constrained, live somewhere with real winters, or
          plan to resurface/replace within 15–20 years anyway, asphalt's
          lower upfront cost and flexibility under freeze-thaw cycling make
          it the more practical pick for most residential driveways.
        </p>

        <h2 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          When concrete usually wins
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          If you're staying in the home long-term, want a specific look
          (stamped, colored, exposed aggregate), or live somewhere hot
          enough that asphalt softening is a real concern, concrete's
          longer lifespan and lower routine maintenance can offset its
          higher install cost over time.
        </p>

        <p className="mt-8 font-body text-steel">
          Already leaning asphalt?{" "}
          <Link href="/cost-calculator" className="text-marking-dim underline">
            Run your dimensions through the cost calculator
          </Link>{" "}
          to get a project-specific number instead of a national average.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "Is asphalt cheaper than concrete?",
              a: "Yes, generally. Asphalt typically runs $3–$7 per square foot installed versus $6–$12 per square foot for concrete, roughly half the cost for a comparable residential driveway.",
            },
            {
              q: "Which lasts longer, asphalt or concrete?",
              a: "Concrete typically lasts longer — 25 to 40 years with proper maintenance, compared to 15 to 20 years for asphalt. Asphalt is easier and cheaper to resurface, which partly offsets the shorter lifespan.",
            },
            {
              q: "Is asphalt or concrete better for cold climates?",
              a: "Asphalt generally performs better in freeze-thaw climates because it has more flexibility and resists frost-heave cracking better than rigid concrete slabs.",
            },
            {
              q: "How soon can you drive on each surface?",
              a: "Asphalt can typically be driven on within 2-3 days of installation. Concrete needs about a week to reach enough strength for vehicle traffic, and full cure can take closer to a month.",
            },
          ]}
        />
      </section>
    </>
  );
}
