import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Recycled Asphalt Millings & Cold Patch Calculator",
  description:
    "Calculate recycled asphalt millings (RAP), cold-patch, and crushed asphalt quantities by area and depth — with density figures, cost comparisons, and a guide to when each material makes sense.",
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

      {/* ── HERO ── */}
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">Specialty Materials</span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            Recycled Millings & Cold Patch Calculator
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 font-body text-lg leading-relaxed text-steel">
            Recycled asphalt millings (RAP), cold-patch, and crushed asphalt
            are lighter and looser than fresh hot mix — they need their own
            density figures, not the standard 145 lb/ft³ default. Enter your
            dimensions and select the right material type below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Calculator headline="weight" idAnchor="calculator" />
        <p className="mt-3 font-body text-sm text-steel">
          Select "Cold Mix / patch" or "Recycled millings" from the mix type
          dropdown to use the correct density for those materials. For
          supplier-quoted densities, use "Standard Hot Mix" and override
          the density field directly.
        </p>
      </section>

      {/* ── MATERIAL COMPARISON ── */}
      <section className="border-y border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Millings vs. cold patch vs. hot mix — which one to use
          </h2>
          <p className="mt-3 max-w-2xl font-body text-steel">
            These three materials serve different jobs. Choosing the wrong one
            doesn't just waste money — it also produces a surface that won't
            perform correctly for the application.
          </p>
          <div className="mt-8 overflow-x-auto rounded-md border border-asphalt-900/10">
            <table className="w-full min-w-[600px] border-collapse font-body text-sm">
              <thead>
                <tr className="bg-asphalt-900 text-chalk">
                  {["Material","Density","Cost est.","Best use","Limitations"].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-asphalt-900/10">
                {[
                  [
                    "Recycled millings (RAP)",
                    "105–115 lb/ft³",
                    "$20–$60/ton",
                    "Driveway base, unpaved surface, low-traffic path",
                    "Not a structural wearing course; loosens over time without a binder"
                  ],
                  [
                    "Cold-mix patch",
                    "~130 lb/ft³",
                    "$8–$20/bag (50 lb)",
                    "Pothole repair, small patches, temporary fixes",
                    "Less durable than hot mix; best as a temporary or emergency fix"
                  ],
                  [
                    "Fresh hot mix (HMA)",
                    "145 lb/ft³",
                    "$100–$200/ton",
                    "Driveways, roads, parking lots, overlays",
                    "Requires heating equipment and skilled installation; minimum order applies"
                  ],
                  [
                    "Stone Mastic Asphalt (SMA)",
                    "~150 lb/ft³",
                    "$150–$250/ton",
                    "High-traffic roads, busy intersections",
                    "Overkill for residential; usually only available from specialist plants"
                  ],
                ].map(([mat, dens, cost, best, limit], i) => (
                  <tr key={mat} className={i % 2 === 0 ? "bg-chalk" : "bg-concrete-50"}>
                    <td className="px-4 py-3 font-medium text-asphalt-900">{mat}</td>
                    <td className="px-4 py-3 font-mono tabular text-asphalt-900">{dens}</td>
                    <td className="px-4 py-3 font-mono tabular text-marking-dim font-semibold">{cost}</td>
                    <td className="px-4 py-3 text-asphalt-900">{best}</td>
                    <td className="px-4 py-3 text-steel">{limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── MILLINGS GUIDE ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          Recycled asphalt millings: what they are and when to use them
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            Recycled asphalt millings — also called RAP (Reclaimed Asphalt
            Pavement) — are the ground-up remains of an old road or parking
            lot surface removed during a resurfacing project. The milling
            machine grinds the existing asphalt layer to a specified depth,
            producing a loose, granular material that looks and handles
            somewhat like coarse gravel.
          </p>
          <p>
            Millings have a residual asphalt binder coating each aggregate
            particle. When placed and compacted, that binder warms in summer
            sun and gradually re-hardens, giving the surface a semi-paved
            character over time — more durable than plain gravel but not as
            smooth or structurally sound as fresh hot mix. For a
            budget-conscious rural or secondary driveway, millings are a
            common and practical choice.
          </p>
          <p>
            The density of millings varies more than fresh hot mix because
            particle size, binder content, and moisture all differ between
            sources. Most suppliers can give you a specific density for their
            stockpile — use that figure in the calculator above for the most
            accurate estimate. If no supplier figure is available, 110 lb/ft³
            is a reasonable midpoint default.
          </p>
          <p>
            One important caveat: millings work best as a base material or
            low-traffic surface, not as a wearing course on a driveway that
            sees regular heavy vehicles. The binder in RAP is aged and
            brittle; under heavy loads, it doesn't re-compact like fresh
            material and can develop ruts or displacement.
          </p>
        </div>

        {/* COLD PATCH GUIDE */}
        <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Cold-mix patch: what it is and what it's actually good for
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            Cold-patch asphalt is a pre-mixed product containing asphalt
            aggregate and a petroleum-solvent-based binder that keeps it
            workable at ambient temperature — no heating required. It's sold in
            bags (typically 40–60 lb) at hardware stores and comes in two
            varieties: a temporary mix designed to hold a pothole until proper
            repair can be scheduled, and a more durable version intended for
            permanent small repairs.
          </p>
          <p>
            Cold patch works best for exactly what it sounds like: a pothole
            that needs to be filled quickly in cold weather when hot mix
            isn't available, or a small isolated patch that isn't worth
            mobilizing a hot-mix truck and crew. For anything larger than a
            few square feet, hot mix will produce a longer-lasting and better-
            bonded result.
          </p>
          <p>
            For patching potholes, the cold-patch calculation is volume-based:
            measure the length, width, and depth of the hole and use the
            calculator above (with "Cold Mix" selected as the mix type) to get
            the bag count. A 50 lb bag of standard cold patch fills roughly
            0.4 cubic feet — about a 1 ft × 1 ft × 5 in pothole.
          </p>
        </div>

        <p className="mt-8 font-body text-steel">
          Unfamiliar with a term on this page?{" "}
          <Link href="/glossary" className="text-marking-dim underline">
            The paving glossary
          </Link>{" "}
          covers RAP, tack coat, base course, and other terminology in
          plain English.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "How much do recycled asphalt millings cost?",
              a: "Recycled millings are significantly cheaper than fresh hot mix — typically $20–$60 per ton depending on the supplier, region, and whether delivery is included. Compare that to $100–$200 per ton for fresh dense-graded hot mix.",
            },
            {
              q: "What density should I use to calculate millings tonnage?",
              a: "Ask your supplier for their stockpile's specific density. If unavailable, use 105–115 lb/ft³ as the range (110 lb/ft³ as a midpoint default). Millings are looser and lighter than compacted fresh asphalt, so using the standard 145 lb/ft³ figure will significantly overestimate your tonnage.",
            },
            {
              q: "Can recycled millings be used as a finished driveway surface?",
              a: "Yes, for low-traffic residential driveways. Over time, the residual binder in the millings softens in summer heat and gradually hardens into a semi-paved surface. It's not as smooth or durable as fresh asphalt, and may need periodic re-grading, but it holds up reasonably well under light vehicle use.",
            },
            {
              q: "How much cold patch do I need for a pothole?",
              a: "Measure the pothole length, width, and depth, then enter those dimensions into the calculator with 'Cold Mix' selected. A standard 50 lb bag covers roughly 0.4 cubic feet — a pothole 1 ft × 1 ft × 5 in deep. For a 2 ft × 2 ft × 4 in pothole, you'd need approximately 2–3 bags.",
            },
            {
              q: "How long does cold-patch asphalt last?",
              a: "Temporary cold patch typically lasts weeks to a few months under traffic before loosening. Permanent cold-patch products claim longer life, but in practice, hot-mix repair bonded with a tack coat is more durable for any repair that will see regular vehicle loads. Cold patch is best treated as a fix-it-now solution.",
            },
            {
              q: "Is crushed asphalt the same as millings?",
              a: "Crushed asphalt and asphalt millings both come from recycled asphalt pavement, but the terms are sometimes used interchangeably and sometimes refer to different gradations. 'Millings' typically means the direct output of a cold planer — a finer, more uniform granular product. 'Crushed asphalt' sometimes refers to material from demolished slabs, which has a coarser, less consistent gradation. Ask your supplier what gradation they're providing.",
            },
          ]}
        />
      </section>
    </>
  );
}
