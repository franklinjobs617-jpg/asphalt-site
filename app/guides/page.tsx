import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Asphalt Guides & Reference",
  description:
    "Reference guides on asphalt formulas, density, sealcoating, recycled materials, asphalt vs. concrete cost, and calculator comparisons.",
};

const GUIDES = [
  {
    href: "/guides/how-to-calculate-asphalt-tonnage",
    title: "How to Calculate Asphalt Tonnage",
    body: "The formula step by step, with three fully worked examples from residential driveway to commercial parking lot.",
    tag: "Formula",
  },
  {
    href: "/guides/asphalt-density-explained",
    title: "Asphalt Density Explained",
    body: "Why density varies by mix type, how a 20 lb/ft³ difference changes your estimate, and how to confirm the right number with your supplier.",
    tag: "Reference",
  },
  {
    href: "/guides/recycled-millings-cold-patch-calculator",
    title: "Recycled Millings & Cold Patch Calculator",
    body: "Calculator and explainer for RAP, asphalt millings, crushed asphalt, and cold-patch repair material — with a 4-material comparison table.",
    tag: "Calculator",
  },
  {
    href: "/guides/asphalt-vs-concrete-driveway-cost",
    title: "Asphalt vs. Concrete Driveway Cost",
    body: "Side-by-side cost, lifespan, climate performance, and 30-year total cost of ownership comparison.",
    tag: "Comparison",
  },
  {
    href: "/guides/asphalt-sealcoating-calculator",
    title: "Asphalt Sealcoating Calculator",
    body: "Estimate gallons of sealcoat needed, coverage by driveway size, and when to seal — including what sealcoating does and doesn't do.",
    tag: "Calculator",
  },
  {
    href: "/guides/asphalt-calculator-alternatives",
    title: "Vulcan, Pike & Other Asphalt Calculator Alternatives",
    body: "How supplier-hosted calculators (Vulcan, Pike, Lehigh Hanson) compare to independent tools, and when to use each.",
    tag: "Comparison",
  },
];

export default function GuidesIndexPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">Reference</span>
      <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
        Guides
      </h1>
      <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-steel">
        The formulas, material facts, and comparisons behind our calculators
        — written so you can sanity-check the numbers yourself, not just
        trust a black box.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {GUIDES.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="group block rounded-md border border-asphalt-900/10 bg-chalk p-6 transition-colors hover:border-marking-dim"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-sm bg-asphalt-900/6 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-steel">
                {g.tag}
              </span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
              {g.title}
            </h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-steel">{g.body}</p>
            <span className="mt-3 inline-block font-mono text-xs uppercase tracking-widest text-marking-dim group-hover:underline">
              Read guide →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
