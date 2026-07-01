import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Recycled Asphalt Millings & Cold Patch Calculator",
  description: "Calculate how much recycled asphalt millings (RAP) or cold-patch material you need for a driveway base or pothole repair.",
};

export default function RecycledCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Recycled Asphalt Millings & Cold Patch Calculator",
            description:
              "How to calculate recycled asphalt millings (RAP) or cold-patch material quantities for a driveway base or pothole repair.",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
          }),
        }}
      />
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">Specialty Materials</span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            Recycled Millings & Cold Patch Calculator
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 font-body text-lg leading-relaxed text-steel">
            Recycled asphalt millings (RAP) and cold-patch material are
            lighter and looser than fresh hot mix, so they need their own
            density figure — not the standard 145 lb/ft³ default.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Calculator headline="weight" defaultMixId="recycled" idAnchor="calculator" />
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          What are millings, and why use them?
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          Asphalt millings (also called RAP — recycled asphalt pavement) are
          ground-up old asphalt removed during a resurfacing job. They're
          commonly reused as a low-cost driveway base or surface for
          gravel-style driveways, since they compact into a semi-solid
          surface that's more durable than plain gravel but cheaper than new
          hot mix.
        </p>

        <h2 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Millings vs. cold patch vs. hot mix
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 font-body leading-relaxed text-steel">
          <li>
            <strong>Recycled millings (RAP):</strong> loose, granular,
            roughly 105–115 lb/ft³ before compaction. Used for driveway base
            layers or low-traffic surfaces, not as a structural wearing
            course.
          </li>
          <li>
            <strong>Cold patch:</strong> pre-mixed asphalt and binder sold in
            bags, roughly 130 lb/ft³, designed to be applied without heating
            — best for pothole repair and small patches, not large areas.
          </li>
          <li>
            <strong>Hot mix:</strong> the standard fresh asphalt used for
            new driveways and resurfacing, at roughly 145 lb/ft³, requiring
            proper heating and compaction equipment to install correctly.
          </li>
        </ul>

        <h2 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          A note on accuracy
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          Millings density varies more than fresh hot mix because particle
          size and moisture content differ between sources. If a supplier
          gives you a specific density for the load you're buying, switch
          the calculator's mix type and use that number instead of our
          default for a closer estimate.
        </p>
        <p className="mt-3 font-body leading-relaxed text-steel">
          Unfamiliar with a term on this page?{" "}
          <Link href="/glossary" className="text-marking-dim underline">
            Check the glossary
          </Link>{" "}
          for plain-English definitions of RAP, base course, and other
          paving terms.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "How much do recycled asphalt millings cost?",
              a: "Recycled millings are typically significantly cheaper than new hot mix — often $20–$60 per ton depending on the supplier and region, compared to $100–$200/ton for fresh material.",
            },
            {
              q: "Can millings be used as a finished driveway surface?",
              a: "Yes, for low-traffic residential driveways. Millings compact into a semi-solid surface over time, though it's less smooth and durable than a paved hot-mix surface and may need periodic re-grading.",
            },
            {
              q: "How much cold patch do I need for a pothole?",
              a: "Cold patch is usually estimated by volume rather than area — a standard 50 lb bag fills roughly 0.4 cubic feet, enough for a pothole about 1 ft × 1 ft × 4 in deep. Use the calculator above with your pothole's dimensions for a more precise figure.",
            },
            {
              q: "Is recycled asphalt as durable as new asphalt?",
              a: "For base layers and low-traffic surfaces, recycled millings perform well. For a structural wearing course expected to handle regular vehicle traffic long-term, fresh hot mix is the more durable choice.",
            },
          ]}
        />
      </section>
    </>
  );
}
