import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Vulcan, Pike & Other Asphalt Calculator Alternatives",
  description:
    "Comparing asphalt calculators from suppliers like Vulcan Materials and Pike Industries with independent tools — and what to use for an unbiased estimate.",
};

export default function AlternativesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Asphalt Calculator Alternatives: Vulcan, Pike & Others",
            description:
              "How supplier-hosted asphalt calculators compare to independent tools, and what to watch out for when estimating with either.",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
          }),
        }}
      />

      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Tool Comparison
          </span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            Asphalt Calculator Alternatives
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 font-body text-lg leading-relaxed text-steel">
            Vulcan Materials, Pike Industries, and other major asphalt producers
            offer calculators on their websites. This page explains how those
            tools work, where they have limitations, and when an independent
            calculator gives you a more useful starting number.
          </p>
        </div>
      </section>

      {/* ── SUPPLIER CALCULATORS ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          How supplier-hosted calculators work
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            Asphalt suppliers like Vulcan Materials, Pike Industries, and
            Lehigh Hanson offer online calculators primarily as lead-generation
            tools — the goal is to get you comfortable with a tonnage number
            and then connect you with a local sales rep or batch plant.
            That's a legitimate purpose, and the underlying math is usually
            the same as any other calculator: area × thickness × density ÷
            2,000.
          </p>
          <p>
            The main limitation of supplier-hosted calculators is that they
            typically default to a single density figure (usually their own
            standard mix design) and are designed to output a number that
            prompts a call to their sales team. They rarely explain the
            formula, let you adjust density for a different mix type, or show
            you the intermediate steps that reveal whether the estimate makes
            sense for your specific project.
          </p>
          <p>
            This isn't unique to Vulcan or Pike — it's a structural feature
            of any calculator built by a party that profits from the material
            order. The tool is accurate within its assumptions; the assumptions
            just aren't always visible.
          </p>
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          What an independent calculator does differently
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            An independent calculator like the one on this site isn't attached
            to a material sale, so it has no incentive to optimize for a
            particular output. That translates to a few practical differences:
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Multiple mix types",
                body: "The density input is editable and includes presets for standard hot mix, porous mix, SMA, cold patch, and recycled millings — because the right density depends on what you're actually ordering, not what any one supplier stocks.",
              },
              {
                title: "Transparent intermediate steps",
                body: "The calculator shows area, volume, weight, and waste-adjusted tonnage separately, not just a final number. If the result looks wrong, you can see exactly which input is driving it.",
              },
              {
                title: "Both material and installed cost",
                body: "Material cost (what you pay the supplier) and installed cost (what you pay a contractor) are completely different numbers — 2.5–3× apart. The cost calculator on this site shows both, which matters when you're comparing a contractor's quote to your own estimate.",
              },
              {
                title: "No required follow-up",
                body: "Using this calculator doesn't put you in a supplier's CRM or trigger a sales call. It's a planning tool, not a lead form.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="border-l-2 border-marking/40 pl-4">
                <h3 className="font-body font-semibold text-asphalt-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          When to use a supplier's calculator vs. an independent one
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            Supplier calculators are most useful once you've already chosen a
            supplier and want to verify a tonnage figure using their specific
            mix design. At that stage, their density assumptions are exactly
            right for the material you're ordering — and using their tool
            gives you a number directly comparable to what appears on the
            invoice.
          </p>
          <p>
            Independent calculators are more useful in the planning and
            budgeting phase, when you're comparing suppliers, evaluating
            different mix types, or verifying a contractor's quote against
            your own calculation. Having a number that isn't linked to
            anyone's sale price gives you a neutral reference point for
            those conversations.
          </p>
          <p>
            The most accurate approach at any stage: confirm the compacted
            density of the specific mix you're ordering, enter that exact
            figure into whichever calculator you're using, and verify that
            the two outputs agree before committing to an order.
          </p>
        </div>

        {/* COMPARISON TABLE */}
        <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Feature comparison
        </h2>
        <div className="mt-5 overflow-x-auto rounded-md border border-asphalt-900/10">
          <table className="w-full min-w-[480px] border-collapse font-body text-sm">
            <thead>
              <tr className="bg-asphalt-900 text-chalk">
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Feature</th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Supplier calculator</th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Independent calculator</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-asphalt-900/10">
              {[
                ["Formula used", "Area × thickness × density ÷ 2,000", "Same formula"],
                ["Adjustable density", "Usually no (fixed to their mix)", "Yes — multiple mix types"],
                ["Shows intermediate steps", "Rarely", "Yes (area, volume, weight)"],
                ["Shows installed vs. material cost", "No", "Yes"],
                ["Requires sign-up or contact info", "Often yes", "No"],
                ["Linked to a sales process", "Yes", "No"],
                ["Best for", "Verifying order with chosen supplier", "Planning, budgeting, comparing quotes"],
              ].map(([feat, sup, ind], i) => (
                <tr key={feat} className={i % 2 === 0 ? "bg-chalk" : "bg-concrete-50"}>
                  <td className="px-4 py-3 font-medium text-asphalt-900">{feat}</td>
                  <td className="px-4 py-3 text-steel">{sup}</td>
                  <td className="px-4 py-3 text-asphalt-900">{ind}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 font-body text-steel">
          Ready to run your own independent estimate?{" "}
          <Link href="/" className="text-marking-dim underline">
            Use the asphalt calculator
          </Link>{" "}
          — no sign-up, no sales follow-up.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "Does Vulcan Materials have an asphalt calculator?",
              a: "Yes, Vulcan Materials offers an asphalt calculator on their website as part of their customer tools. It's designed to help users estimate tonnage for their specific Vulcan mix products. For an unbiased estimate not tied to a Vulcan product, an independent calculator lets you adjust the density and compare scenarios without a sales connection.",
            },
            {
              q: "Does Pike Industries have an asphalt calculator?",
              a: "Pike Industries, a major asphalt paving and materials company operating primarily in New England, provides estimating resources for customers. Like other supplier tools, these are calibrated to Pike's specific mix designs. For a neutral estimate, use an independent calculator and input the density from Pike's mix specification when you have it.",
            },
            {
              q: "Are supplier asphalt calculators accurate?",
              a: "The underlying math in supplier calculators is the same standard formula used everywhere. The main variable is the density assumption — which is set to the supplier's own mix design. If you're ordering from that supplier, their density is correct. If you're in the planning phase and comparing options, an independent calculator with adjustable density gives you more flexibility.",
            },
            {
              q: "Why does my contractor's tonnage estimate differ from mine?",
              a: "Three common reasons: (1) they're using a different mix density than the default 145 lb/ft³, (2) they've measured additional area you didn't include (apron, turning pad, widening), or (3) they're using a higher waste factor for your specific site conditions. Ask which density figure and waste percentage they used — those two numbers should explain most of the gap.",
            },
          ]}
        />
      </section>
    </>
  );
}
