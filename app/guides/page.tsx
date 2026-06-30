import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides",
  description: "Reference guides on asphalt formulas, density, recycled materials, and asphalt vs. concrete cost.",
};

const GUIDES = [
  {
    href: "/guides/how-to-calculate-asphalt-tonnage",
    title: "How to Calculate Asphalt Tonnage",
    body: "The formula step by step, with a worked example you can follow by hand.",
  },
  {
    href: "/guides/asphalt-density-explained",
    title: "Asphalt Density Explained",
    body: "Why density varies by mix type, and how it changes your tonnage estimate.",
  },
  {
    href: "/guides/recycled-millings-cold-patch-calculator",
    title: "Recycled Millings & Cold Patch Calculator",
    body: "A calculator and explainer for RAP, millings, and cold-patch repair material.",
  },
  {
    href: "/guides/asphalt-vs-concrete-driveway-cost",
    title: "Asphalt vs. Concrete Driveway Cost",
    body: "Side-by-side cost, lifespan, and maintenance comparison for driveway material.",
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
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
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
