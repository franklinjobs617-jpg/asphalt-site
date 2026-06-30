import type { Metadata } from "next";
import Link from "next/link";
import UnitConverter from "@/components/UnitConverter";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Asphalt Unit Converter — Sq Ft, Sq Yd, Acres, Cubic Yards to Tons",
  description: "Convert between square feet, square yards, acres, and convert cubic yards of asphalt to tons using a custom density.",
};

export default function UnitConverterPage() {
  return (
    <>
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">Quick Tool</span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            Asphalt Unit Converter
          </h1>
          <p className="mt-4 font-body text-lg leading-relaxed text-steel">
            Two quick converters: switch between area units (square feet,
            square yards, acres, square meters), or convert a volume in
            cubic yards into tons using your mix&apos;s density.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <UnitConverter />
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Why these conversions trip people up
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          Project plans are usually drawn in square feet, suppliers often
          quote material by the cubic yard or the ton, and land area shows
          up in acres on a property survey. None of those units convert
          directly into each other without going through a density figure
          first — that's the step most people skip, and it's the one this
          page handles automatically.
        </p>
        <p className="mt-4 font-body leading-relaxed text-steel">
          For a full project estimate that combines area, thickness, and
          cost in one pass, use the{" "}
          <Link href="/" className="text-marking-dim underline">
            main asphalt calculator
          </Link>{" "}
          instead — this page is for quick one-off conversions.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "How many square feet are in an acre?",
              a: "One acre equals 43,560 square feet, or about 4,840 square yards.",
            },
            {
              q: "How do I convert cubic yards of asphalt to tons?",
              a: "Multiply cubic yards by 27 to get cubic feet, then multiply by the asphalt's density in lb/ft³ (145 for standard hot mix), then divide by 2,000 to get tons.",
            },
            {
              q: "How many tons are in a cubic yard of asphalt?",
              a: "At standard 145 lb/ft³ density, one cubic yard of asphalt weighs approximately 1.96 tons — commonly rounded to 2 tons per cubic yard for quick estimates.",
            },
            {
              q: "How many square yards are in a square foot?",
              a: "There are 9 square feet in 1 square yard, since a square yard is 3 ft × 3 ft.",
            },
          ]}
        />
      </section>
    </>
  );
}
