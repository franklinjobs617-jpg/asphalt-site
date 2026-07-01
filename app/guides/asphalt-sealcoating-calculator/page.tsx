import type { Metadata } from "next";
import Link from "next/link";
import SealcoatCalc from "@/components/SealcoatCalc";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";
export const metadata: Metadata = {
  title: "Asphalt Sealcoating Calculator – Coverage, Gallons & Cost",
  description:
    "Estimate how much sealcoat you need for a driveway or parking lot, with coverage rates, cost per gallon guidance, and a guide to what sealcoating actually does.",
};

// Sealcoat is sold by the gallon, not the ton.
// Industry standard coverage: 50–80 sq ft per gallon (2 coats recommended).
// Typical coverage: 60–65 sq ft / gallon per coat on a standard driveway.

export default function SealcoatingCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Asphalt Sealcoating Calculator",
            description:
              "How to calculate sealcoat coverage for a driveway or parking lot, including gallons needed and cost estimate.",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to calculate sealcoating coverage",
            step: [
              { "@type": "HowToStep", name: "Measure", text: "Measure the total paved area in square feet." },
              { "@type": "HowToStep", name: "Divide by coverage rate", text: "Divide area by the coverage rate per gallon (60–65 sq ft per gallon per coat is typical for a smooth-textured driveway)." },
              { "@type": "HowToStep", name: "Multiply for coats", text: "Multiply by 2 for two coats (strongly recommended). Add 10% for waste and texture variation." },
            ],
          }),
        }}
      />

      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Driveway Maintenance
          </span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            Asphalt Sealcoating Calculator
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 font-body text-lg leading-relaxed text-steel">
            Sealcoat is sold by the gallon, not the ton. Coverage runs
            roughly 60–65 square feet per gallon per coat — and two coats are
            always recommended. Enter your driveway area to get your gallon
            count and cost estimate.
          </p>
        </div>
      </section>

      {/* ── INLINE CALCULATOR ── */}
      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
        <SealcoatCalc />
      </section>

      {/* ── WHAT SEALCOATING DOES ── */}
      <section className="border-y border-asphalt-900/10 bg-asphalt-900 text-chalk">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight">
            What sealcoating actually does — and doesn't do
          </h2>
          <div className="mt-6 space-y-5 font-body text-sm leading-relaxed text-steel-light">
            <div className="border-t border-chalk/10 pt-5">
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-chalk">
                What sealcoating does
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Slows oxidation: asphalt binder degrades when exposed to UV light and oxygen, making the surface brittle and gray. Sealcoat blocks UV penetration and significantly slows this process.</li>
                <li>Reduces water infiltration: water is asphalt's main structural enemy — it enters cracks, freezes, and expands, widening damage. Sealcoat closes surface pores and slows water entry into the asphalt matrix.</li>
                <li>Restores appearance: a freshly sealed driveway looks close to newly paved, which many homeowners value and which helps curb appeal.</li>
                <li>Improves fuel and chemical resistance: gasoline, oil, and road salts degrade asphalt binder; sealcoat provides a barrier against surface-level spills.</li>
              </ul>
            </div>
            <div className="border-t border-chalk/10 pt-5">
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-chalk">
                What sealcoating does not do
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Fix structural cracks or rutting: sealcoat is a coating, not a repair. Applying it over alligator cracking or base-related rutting seals the problem out of sight but doesn't address the underlying failure.</li>
                <li>Restore significant surface damage: deep pitting, edge cracking, or extensive surface deterioration requires crack filling or patching before sealcoating, not instead of it.</li>
                <li>Last forever: residential sealcoating typically lasts 2–5 years depending on traffic, climate, and product quality before it needs reapplication.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHEN TO SEALCOAT ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          When to sealcoat — and when to wait
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            New asphalt should not be sealed immediately. Fresh hot-mix asphalt
            contains volatile compounds that need to cure and off-gas for at
            least 6–12 months after installation before a sealer can bond
            properly. Sealing too soon traps these compounds and can prevent
            the asphalt from reaching its final hardened state.
          </p>
          <p>
            The ideal time to first seal a driveway is 12–18 months after
            initial paving. After that, reseal every 2–5 years depending on
            traffic and climate. In hotter climates with intense UV, every
            2–3 years is common. In moderate climates with less UV exposure,
            every 4–5 years is often sufficient.
          </p>
          <p>
            Wait for the right weather: sealcoat needs temperatures above 50°F
            (ideally above 60°F) and no rain for at least 24–48 hours after
            application to cure properly. Most contractors recommend sealing in
            late spring or early fall — avoiding peak summer heat, which can
            cause the sealer to dry too quickly and streak.
          </p>
        </div>

        {/* COVERAGE REFERENCE TABLE */}
        <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
          Sealcoat coverage by driveway size
        </h2>
        <p className="mt-3 font-body text-steel">
          Based on 65 sq ft/gallon per coat (typical for a smooth residential
          driveway) and two coats. Rough or highly textured surfaces need
          more product.
        </p>
        <div className="mt-5 overflow-x-auto rounded-md border border-asphalt-900/10">
          <table className="w-full min-w-[400px] border-collapse font-body text-sm">
            <thead>
              <tr className="bg-asphalt-900 text-chalk">
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Driveway</th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Area</th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Gallons (2 coats)</th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">Est. material cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-asphalt-900/10">
              {[
                ["Small single car", "200 ft²", "≈ 6 gal", "~$30–$60"],
                ["Standard single", "288 ft²", "≈ 9 gal", "~$45–$90"],
                ["Double car", "400 ft²", "≈ 12 gal", "~$60–$120"],
                ["Long single", "480 ft²", "≈ 15 gal", "~$75–$150"],
                ["Long double", "800 ft²", "≈ 25 gal", "~$125–$250"],
                ["Large estate / commercial", "2,000 ft²", "≈ 62 gal", "~$310–$620"],
              ].map(([type, area, gal, cost], i) => (
                <tr key={type} className={i % 2 === 0 ? "bg-chalk" : "bg-concrete-50"}>
                  <td className="px-4 py-3 text-asphalt-900">{type}</td>
                  <td className="px-4 py-3 font-mono tabular text-asphalt-900">{area}</td>
                  <td className="px-4 py-3 font-mono tabular text-asphalt-900">{gal}</td>
                  <td className="px-4 py-3 font-mono tabular text-marking-dim font-semibold">{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 font-body text-xs text-steel">
          Material cost at $5–$10 per gallon for a quality driveway sealer.
          Contractor-applied sealcoating on a typical residential driveway
          usually runs $0.15–$0.35 per square foot (installed), including product and labor.
        </p>

        <p className="mt-8 font-body text-steel">
          Need to estimate the asphalt itself for a new driveway?{" "}
          <Link href="/driveway-calculator" className="text-marking-dim underline">
            Use the driveway calculator
          </Link>{" "}
          for tonnage and material cost.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "How many gallons of sealcoat do I need per square foot?",
              a: "Roughly 1 gallon covers 60–65 square feet per coat on a typical smooth residential driveway surface. Two coats are recommended, so plan on approximately 1 gallon per 30–32 square feet total (for both coats combined). Rough or weathered surfaces absorb more product and need slightly higher coverage.",
            },
            {
              q: "How soon after paving can I sealcoat?",
              a: "Wait at least 6–12 months after initial paving. New asphalt contains volatile compounds that need to cure and off-gas before a sealer can bond properly. Most professionals recommend waiting 12–18 months for the first sealing.",
            },
            {
              q: "How often should I reseal my asphalt driveway?",
              a: "Every 2–5 years is the typical range. Hot, sunny climates with intense UV exposure often require resealing every 2–3 years. Moderate climates with good initial sealing can often go 4–5 years between applications.",
            },
            {
              q: "Will sealcoat fix cracks in my driveway?",
              a: "No. Sealcoat is a surface coating, not a structural repair. Cracks should be cleaned and filled with a crack filler product before sealcoating. Applying sealcoat over unfilled cracks seals them from view but doesn't stop water from entering through the sides.",
            },
            {
              q: "What's the difference between coal tar sealant and asphalt emulsion sealant?",
              a: "Coal tar sealcoat is more durable and fuel-resistant but contains polycyclic aromatic hydrocarbons (PAHs), which are regulated or banned in many municipalities due to environmental concerns. Asphalt emulsion sealers are petroleum-based and more environmentally acceptable, and are now the dominant product in most US markets.",
            },
          ]}
        />
      </section>
    </>
  );
}
