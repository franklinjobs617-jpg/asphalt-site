import type { Metadata } from "next";
import Link from "next/link";
import CompareTable from "@/components/CompareTable";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Asphalt vs. Concrete Driveway Cost Compared",
  description:
    "Side-by-side cost, lifespan, climate fit, maintenance, and total cost of ownership comparison to help you choose between asphalt and concrete for a driveway.",
};

export default function AsphaltVsConcretePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Asphalt vs. Concrete Driveway Cost",
            description:
              "Side-by-side cost, lifespan, climate fit, and maintenance comparison between asphalt and concrete driveways.",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
          }),
        }}
      />

      {/* ── HERO ── */}
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Material Comparison
          </span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            Asphalt vs. Concrete Driveway Cost
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 font-body text-lg leading-relaxed text-steel">
            Asphalt costs less upfront and holds up better in freeze-thaw
            climates. Concrete lasts longer and needs less routine maintenance.
            Neither is always the right answer — but the data below shows which
            one usually wins for a given situation.
          </p>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <CompareTable
          colA="Asphalt"
          colB="Concrete"
          rows={[
            { label: "Installed cost", a: "$3 – $7 / sq ft", b: "$6 – $12 / sq ft" },
            { label: "Material cost per ton", a: "$100 – $200", b: "N/A (sold by yard)" },
            { label: "Typical lifespan", a: "15 – 20 years", b: "25 – 40 years" },
            { label: "Cold-climate performance", a: "Flexes with freeze-thaw, fewer cracks", b: "More prone to frost-heave cracking" },
            { label: "Hot-climate performance", a: "Can soften / rut in extreme heat", b: "Stable; surface may crack eventually" },
            { label: "Routine maintenance", a: "Reseal every 2–5 years", b: "Seal joints occasionally; otherwise low" },
            { label: "Crack / damage repair", a: "Patch and blend fairly invisibly", b: "Patches and cracks remain visible" },
            { label: "Time to use after install", a: "Drive on in 2–3 days", b: "Wait 5–7 days minimum" },
            { label: "Aesthetic options", a: "Uniform dark gray / black only", b: "Color, stamp, exposed aggregate" },
            { label: "Recyclability", a: "Nearly 100% recyclable (RAP)", b: "Can be crushed for aggregate" },
          ]}
        />
      </section>

      {/* ── WHEN ASPHALT WINS ── */}
      <section className="border-y border-asphalt-900/10 bg-asphalt-900 text-chalk">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
            When asphalt is the better choice
          </h2>
          <div className="mt-6 space-y-5">
            <Reason
              label="Cold climates"
              body="Asphalt's flexibility is a real advantage in regions where ground freezes and thaws repeatedly through winter. Concrete's rigidity makes it prone to cracking and heaving when the substrate shifts with temperature. If you're in the northern US, upper Midwest, or high-altitude regions, asphalt almost always outperforms concrete over a 15-year period."
            />
            <Reason
              label="Budget-constrained projects"
              body="The upfront install cost gap is real and material — typically $3–$5 per square foot lower for asphalt on a comparable spec. For a 600–800 sq ft driveway, that's $1,800–$4,000 in cost difference right now, before accounting for any long-term differences."
            />
            <Reason
              label="Short-to-medium ownership timelines"
              body="If you plan to sell or move within 10–15 years, you likely won't be around to capture concrete's long-term durability advantages. Asphalt's lower install cost produces better economics when the ownership window is shorter."
            />
            <Reason
              label="Faster return to use"
              body="A new asphalt driveway can typically be driven on within 48–72 hours of installation, versus 5–7 days minimum for concrete. If the driveway access is critical — parking for a vehicle in use, for example — asphalt's quick set time reduces disruption."
            />
          </div>
        </div>
      </section>

      {/* ── WHEN CONCRETE WINS ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          When concrete is the better choice
        </h2>
        <div className="mt-6 space-y-5">
          <Reason
            label="Hot climates"
            body="In regions where summer temperatures routinely exceed 95–100°F, standard asphalt softens enough to rut under vehicle weight — especially slow-moving or stationary loads like turning tires. Concrete doesn't have this problem. The Southwest, Southeast, and Gulf Coast are areas where concrete often makes more sense for long-term durability."
          />
          <Reason
            label="Long ownership timelines"
            body="Concrete's 25–40 year lifespan versus asphalt's 15–20 means that over a 30-year period, asphalt may need to be replaced once while concrete doesn't. When you account for the cost of a second asphalt installation, concrete's higher upfront cost sometimes breaks even or wins."
          />
          <Reason
            label="Low maintenance preference"
            body="Asphalt requires periodic sealing (typically every 2–5 years) to prevent oxidation and water infiltration. While sealcoating is relatively inexpensive, it's a recurring cost and time commitment. Concrete requires almost no routine maintenance beyond occasional joint sealing."
          />
          <Reason
            label="Aesthetic customization"
            body="If you want a stamped pattern, exposed aggregate texture, or a color other than dark gray, concrete is the only option. Asphalt comes in one color and one texture — some homeowners want something that better complements a house's design."
          />
        </div>

        {/* ── TOTAL COST OF OWNERSHIP ── */}
        <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Total cost of ownership over 30 years
        </h2>
        <p className="mt-3 font-body leading-relaxed text-steel">
          For a 600 sq ft driveway, here's how the economics play out over a
          30-year window — including one asphalt replacement at year 17, and
          routine sealing every 4 years for asphalt:
        </p>
        <div className="mt-6 overflow-x-auto rounded-md border border-asphalt-900/10">
          <table className="w-full min-w-[360px] border-collapse font-body text-sm">
            <thead>
              <tr className="bg-asphalt-900 text-chalk">
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Cost item</th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Asphalt</th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Concrete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-asphalt-900/10">
              {[
                ["Initial install (600 sq ft)", "$3,000", "$5,400"],
                ["Sealing / joint maintenance", "$1,500 (8× over 30 yr)", "$400 (occasional)"],
                ["Crack repairs", "$600", "$800"],
                ["Replacement (once for asphalt)", "$3,600 (at yr ~17)", "$0"],
                ["Total 30-year cost (est.)", "$8,700", "$6,600"],
              ].map(([item, asp, con], i) => (
                <tr key={item} className={i % 2 === 0 ? "bg-chalk" : "bg-concrete-50"}>
                  <td className="px-4 py-3 text-asphalt-900">{item}</td>
                  <td className={`px-4 py-3 font-mono tabular ${i === 4 ? "font-bold text-cone" : "text-asphalt-900"}`}>{asp}</td>
                  <td className={`px-4 py-3 font-mono tabular ${i === 4 ? "font-bold text-asphalt-900" : "text-asphalt-900"}`}>{con}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 font-body text-xs text-steel">
          Estimates based on national average pricing; assume no major base
          failure on either surface. Individual results vary significantly with
          climate, traffic load, and local contractor rates.
        </p>

        <p className="mt-8 font-body text-steel">
          Already decided on asphalt?{" "}
          <Link href="/cost-calculator" className="text-marking-dim underline">
            Run your dimensions through the cost calculator
          </Link>{" "}
          to get a project-specific material estimate rather than a national
          average range.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "Is asphalt cheaper than concrete for a driveway?",
              a: "Yes, upfront. Asphalt typically runs $3–$7 per square foot installed versus $6–$12 for concrete — roughly half the initial cost for a comparable residential driveway. Over 30 years, concrete can come out cheaper once you account for asphalt's replacement cycle and ongoing sealcoating.",
            },
            {
              q: "Which lasts longer, asphalt or concrete?",
              a: "Concrete typically lasts 25–40 years; asphalt typically 15–20 years. Asphalt is easier and cheaper to resurface when it wears out, which partially offsets the shorter lifespan in total cost of ownership calculations.",
            },
            {
              q: "Is asphalt or concrete better for cold climates?",
              a: "Asphalt generally performs better in freeze-thaw climates. Its flexibility allows it to expand and contract with temperature changes without cracking, whereas rigid concrete slabs are more vulnerable to frost heave and thermal cracking in northern climates.",
            },
            {
              q: "Is concrete better in hot climates?",
              a: "Yes. Standard asphalt can soften and rut in extreme heat, especially under slow-moving or stationary loads (turning tires are the most common culprit). Concrete doesn't have this problem. For the Southwest, Gulf Coast, and other hot-summer regions, concrete often makes more long-term sense.",
            },
            {
              q: "How soon can you drive on a new asphalt or concrete driveway?",
              a: "Asphalt can typically handle vehicle traffic within 48–72 hours of installation. Concrete needs at least 5–7 days before light vehicle traffic and up to 28 days for full design strength — though most contractors will allow normal passenger car use after the first week.",
            },
          ]}
        />
      </section>
    </>
  );
}

function Reason({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-l-2 border-marking/40 pl-4">
      <h3 className="font-body font-semibold text-asphalt-900 dark:text-chalk">{label}</h3>
      <p className="mt-1 font-body text-sm leading-relaxed text-steel">{body}</p>
    </div>
  );
}
