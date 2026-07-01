import type { Metadata } from "next";
import Link from "next/link";
import DensityChart from "@/components/DensityChart";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Asphalt Density Explained — Why It Changes Your Estimate",
  description:
    "How asphalt density works, why it varies by mix type, how to confirm density with your supplier, and how a 20 lb/ft³ difference changes your tonnage and cost.",
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

      {/* ── HERO ── */}
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">Guide</span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            Asphalt Density Explained
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 font-body text-lg leading-relaxed text-steel">
            Asphalt density is the compacted weight of asphalt per cubic foot.
            It's the one number that converts a volume into a quantity you can
            actually order — and it isn't the same for every mix. Getting it
            wrong by 15% means your tonnage estimate is off by 15% before you
            even pick up a phone.
          </p>
        </div>
      </section>

      {/* ── DENSITY BY MIX TYPE ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Density by mix type
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          Standard dense-graded hot mix is the default most calculators assume,
          but density shifts meaningfully with mix design. These are the
          industry-standard compacted density figures used in quantity estimating:
        </p>
        <div className="mt-6 rounded-md border border-asphalt-900/10 bg-chalk p-6">
          <DensityChart />
        </div>
        <div className="mt-6 overflow-x-auto rounded-md border border-asphalt-900/10">
          <table className="w-full min-w-[400px] border-collapse font-body text-sm">
            <thead>
              <tr className="bg-asphalt-900 text-chalk">
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Mix type</th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Density (lb/ft³)</th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Density (kg/m³)</th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Typical use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-asphalt-900/10">
              {[
                ["Standard hot mix (dense-graded)", "145", "2,322", "Driveways, roads, parking lots"],
                ["Stone Mastic Asphalt (SMA)", "150", "2,403", "High-traffic roads, intersections"],
                ["Cold mix / patch", "130", "2,082", "Pothole repair, maintenance"],
                ["Porous / open-graded", "125", "2,002", "Permeable driveways, drainage areas"],
                ["Recycled millings (RAP)", "105–115", "1,682–1,842", "Driveway bases, low-traffic surfaces"],
              ].map(([mix, lbft, kgm, use], i) => (
                <tr key={mix} className={i % 2 === 0 ? "bg-chalk" : "bg-concrete-50"}>
                  <td className="px-4 py-3 font-medium text-asphalt-900">{mix}</td>
                  <td className="px-4 py-3 font-mono tabular text-asphalt-900">{lbft}</td>
                  <td className="px-4 py-3 font-mono tabular text-asphalt-900">{kgm}</td>
                  <td className="px-4 py-3 text-steel">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── WHY IT MATTERS ── */}
        <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Why the difference matters — a worked example
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          Consider a 1,000 sq ft area paved at 3 inches (0.25 ft) thick.
          Volume is constant at 250 cubic feet regardless of mix type. Here's
          how density changes the tonnage:
        </p>
        <div className="mt-5 rounded-md border border-asphalt-900/10 bg-asphalt-900 p-5 text-chalk">
          <div className="grid gap-3 font-mono text-sm sm:grid-cols-2">
            {[
              ["Porous (125 lb/ft³)", "250 × 125 ÷ 2,000", "15.6 tons"],
              ["Cold mix (130 lb/ft³)", "250 × 130 ÷ 2,000", "16.3 tons"],
              ["Standard HMA (145 lb/ft³)", "250 × 145 ÷ 2,000", "18.1 tons"],
              ["SMA (150 lb/ft³)", "250 × 150 ÷ 2,000", "18.8 tons"],
            ].map(([mix, calc, result]) => (
              <div key={mix} className="border border-chalk/10 p-3">
                <div className="text-xs text-steel-light">{mix}</div>
                <div className="mt-1 text-xs tabular text-steel-light">{calc}</div>
                <div className="mt-1 text-lg font-semibold tabular text-marking">{result}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 font-body text-xs text-steel-light">
            The gap between porous and SMA is 3.2 tons on this 1,000 sq ft example —
            roughly 20% more material, and 20% more material cost, purely from
            using the wrong density figure.
          </p>
        </div>

        {/* ── WHAT CHANGES DENSITY ── */}
        <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          What actually changes asphalt density
        </h2>
        <div className="mt-4 space-y-5 font-body leading-relaxed text-steel">
          <Factor
            title="Aggregate gradation"
            body="Open-graded mixes have more intentional air voids between aggregate particles — for drainage — which lowers density. Dense-graded mixes pack aggregate as tightly as possible, pushing density up."
          />
          <Factor
            title="Binder content"
            body="More asphalt binder (liquid bitumen) relative to aggregate generally increases density slightly. However, binder is less dense than aggregate, so beyond a certain point, too much binder actually lowers density while degrading performance."
          />
          <Factor
            title="Compaction effort"
            body="Under-compacted asphalt is measurably less dense than the mix design specifies. A mix designed at 145 lb/ft³ might achieve only 135–138 lb/ft³ in the field if rollers don't make enough passes, or if the mat cools too quickly before compaction is complete."
          />
          <Factor
            title="Temperature during compaction"
            body="Hot mix must be compacted within a narrow temperature window, typically between 275°F and 175°F. Material that cools below this range before the rollers finish doesn't compact fully, trapping air voids and producing a finished pavement with lower density than specified."
          />
          <Factor
            title="Aggregate specific gravity"
            body="Different rock types have different base densities. Granite aggregate is denser than limestone, which is denser than some volcanic aggregates. Local aggregate sources partly explain why density figures aren't perfectly uniform across regions even for nominally identical mix designs."
          />
        </div>

        {/* ── HOW TO CONFIRM WITH SUPPLIER ── */}
        <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          How to confirm density with your supplier
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          When you call a batch plant for a quote, ask for the{" "}
          <strong>mix design's target density</strong> — sometimes called the{" "}
          <em>theoretical maximum density</em> (TMD) or{" "}
          <em>bulk specific gravity</em>. The plant's estimators use this
          figure when they convert your square footage into a tonnage quote, so
          using the same number in your own calculation closes the loop and
          ensures you're ordering the right amount.
        </p>
        <p className="mt-3 font-body leading-relaxed text-steel">
          If the supplier quotes a figure that looks unfamiliar (say, 148 or
          137 lb/ft³), switch the "Asphalt mix type" field in{" "}
          <Link href="/" className="text-marking-dim underline">
            the asphalt calculator
          </Link>{" "}
          to the custom option and enter the exact number. The rest of the
          estimate will update automatically.
        </p>
        <p className="mt-3 font-body leading-relaxed text-steel">
          Need to look up more terminology? The{" "}
          <Link href="/glossary" className="text-marking-dim underline">
            paving glossary
          </Link>{" "}
          covers terms like PG binder, compaction, and SMA in plain English.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "What is the standard density of asphalt?",
              a: "Standard dense-graded hot-mix asphalt is typically 145 lb/ft³ (about 2,322 kg/m³) once compacted. This is the figure most general-purpose asphalt calculators default to, and it's appropriate for standard residential and light commercial paving jobs.",
            },
            {
              q: "Why is porous asphalt lighter than standard hot mix?",
              a: "Porous (open-graded) asphalt is designed with intentional air voids between aggregate particles to allow rainwater to drain through the surface. Those voids displace weight, reducing the compacted density to roughly 125 lb/ft³ — about 14% lighter than standard mix.",
            },
            {
              q: "Is SMA always heavier than standard hot mix?",
              a: "Stone mastic asphalt (SMA) typically runs denser, around 150 lb/ft³, due to its high proportion of coarse aggregate and elevated binder content. However, exact density varies by specific mix design and regional aggregate — your supplier's mix design report will give the precise figure.",
            },
            {
              q: "How much does a 10 lb/ft³ density difference change my estimate?",
              a: "Directly proportional. A 10 lb/ft³ difference on a 1,000 cubic foot volume (roughly 3,700 sq ft at 3 inches) shifts the tonnage by about 5 tons. At $150/ton, that's a $750 swing from a single number error.",
            },
            {
              q: "What's the density of recycled asphalt millings?",
              a: "Recycled asphalt millings (RAP) are loosely graded and haven't been compacted to final density yet, so they typically run 105–115 lb/ft³ — about 20–30% lighter than fresh compacted hot mix. Use the specific figure your supplier provides for the most accurate estimate.",
            },
          ]}
        />
      </section>
    </>
  );
}

function Factor({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l-2 border-marking/40 pl-4">
      <h3 className="font-semibold text-asphalt-900">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
