import type { Metadata } from "next";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "About",
  description:
    "Asphalt Calculator HQ is an independent, ad-supported tool site built by builders who got tired of inconsistent paving math. Here's who we are and how we calculate.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
        About
      </span>
      <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
        Built by people who measure their own driveways
      </h1>
      <LastUpdated date="2026-06-30" />

      <div className="mt-8 space-y-5 font-body leading-relaxed text-steel">
        <p>
          Asphalt Calculator HQ is an independent site run by a small group
          of DIY builders and construction hobbyists — not a paving company,
          a supplier, or a contractor. We built the tool we wished existed
          the first time we had to figure out how much hot mix to order for
          a driveway resurface: something that showed the actual math, let
          you change the mix density, and didn&apos;t bury the calculator
          under five paragraphs of fluff before you could use it.
        </p>
        <p>
          None of us are licensed civil engineers, and we don&apos;t claim to
          be. What we do is read the same publicly available references
          paving estimators use — material density specs from asphalt
          producers, state DOT pavement design guides, and industry
          publications — and turn them into a tool that&apos;s honest about
          what it is: a planning-stage estimate, not an engineering
          calculation or a quote.
        </p>
        <p>
          The site is supported by display advertising and, where relevant,
          affiliate links to building-material retailers. We don&apos;t
          accept payment to feature a specific supplier, contractor, or
          product, and our calculators don&apos;t change their output based
          on any commercial relationship.
        </p>

        <h2 className="pt-4 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          How we source our numbers
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Standard hot-mix density (145 lb/ft³) and mix-type variations
            reflect commonly published ranges from asphalt producer technical
            sheets and civil engineering references.
          </li>
          <li>
            Thickness recommendations by use case (driveway, parking lot,
            highway) are based on general guidance published by state
            departments of transportation and paving trade associations —
            always confirm against your local building code, since
            requirements vary by jurisdiction and climate.
          </li>
          <li>
            Pricing ranges are directional, drawn from publicly reported
            national averages. Material and labor costs vary significantly
            by region, season, and supplier — get a written local quote
            before budgeting a real project.
          </li>
        </ul>

        <h2 className="pt-4 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Corrections welcome
        </h2>
        <p>
          If you spot a calculation that looks off, or you&apos;re a paving
          professional who thinks one of our defaults is wrong for your
          region, we&apos;d genuinely like to hear it — see the{" "}
          <a href="/contact" className="text-marking-dim underline">
            contact page
          </a>
          .
        </p>
      </div>
    </section>
  );
}
