import type { Metadata } from "next";
import Link from "next/link";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Asphalt FAQ – Answers to Common Paving Questions",
  description:
    "Answers to the most common asphalt questions: how to calculate tonnage, what things cost, how thick pavement should be, how to measure irregular areas, and more.",
};

// ── DATA ──────────────────────────────────────────────────────────────────────
// All answers are ALWAYS VISIBLE — no accordion, no collapse.
// Google's FAQPage rich result guidelines require answers to be visible
// on page load. Schema mirrors the visible content exactly.

const SECTIONS: {
  id: string;
  title: string;
  items: { q: string; a: string; link?: { href: string; label: string } }[];
}[] = [
  {
    id: "formula",
    title: "Calculating tonnage & volume",
    items: [
      {
        q: "How do you calculate how much asphalt you need?",
        a: "Multiply the area (length × width in square feet) by the thickness converted to feet (thickness in inches ÷ 12), then multiply by the asphalt density (typically 145 lb/ft³ for standard hot mix), and divide by 2,000 to convert pounds to tons. Add a 5–10% waste allowance before placing an order.",
        link: { href: "/guides/how-to-calculate-asphalt-tonnage", label: "Step-by-step guide with worked examples" },
      },
      {
        q: "What is the asphalt tonnage formula?",
        a: "Tons = Length (ft) × Width (ft) × Thickness (in) ÷ 12 × Density (lb/ft³) ÷ 2,000. For standard 145 lb/ft³ hot mix at 2.5 inches, a simplified version is: Area (ft²) × 0.0151 = tons before waste. Always add a 5–10% waste allowance to the result before ordering.",
      },
      {
        q: "Why do I have to divide thickness by 12?",
        a: "Because the formula requires all measurements in the same unit — feet. Thickness specs are always given in inches, so dividing by 12 converts to feet. Skipping this step multiplies your tonnage estimate by 12, which is the single most common manual calculation error.",
      },
      {
        q: "How many tons of asphalt are in a cubic yard?",
        a: "One cubic yard of standard compacted hot-mix asphalt (145 lb/ft³) weighs approximately 2.02 tons. For porous mix at 125 lb/ft³, that drops to about 1.74 tons per cubic yard. For Stone Mastic Asphalt at 150 lb/ft³, it's about 2.08 tons per cubic yard.",
        link: { href: "/unit-converter", label: "Full unit converter" },
      },
      {
        q: "How many square feet does one ton of asphalt cover?",
        a: "At 2 inches thick: roughly 80–85 sq ft per ton. At 2.5 inches: roughly 64–68 sq ft per ton. At 3 inches: roughly 53–57 sq ft per ton. The exact figure depends on the compacted density of the specific mix.",
      },
      {
        q: "How many tons of asphalt per acre?",
        a: "One acre is 43,560 sq ft. At 3 inches thick with standard 145 lb/ft³ hot mix: approximately 789 tons per acre. At 2 inches thick: roughly 527 tons per acre. These are before any waste allowance.",
      },
      {
        q: "Should I round up my asphalt order?",
        a: "Yes — always round up after applying the waste allowance. Running short mid-pour means a second delivery at premium rates, and a cold joint where the old and new material meet that stays visible for the life of the pavement. It costs less to have a small surplus than to call a second truck.",
      },
    ],
  },
  {
    id: "density",
    title: "Density & mix types",
    items: [
      {
        q: "What is the standard density of asphalt?",
        a: "Standard dense-graded hot-mix asphalt is typically 145 lb/ft³ (about 2,322 kg/m³) when compacted. This is the default used in NAPA estimating guidance and most state DOT paving specifications for quantity calculations.",
        link: { href: "/guides/asphalt-density-explained", label: "Full density guide" },
      },
      {
        q: "What density should I use for different asphalt types?",
        a: "Standard hot mix (dense-graded): 145 lb/ft³. Stone Mastic Asphalt (SMA): 150 lb/ft³. Cold-mix / patch material: 130 lb/ft³. Porous or open-graded mix: 125 lb/ft³. Recycled asphalt millings (RAP): 105–115 lb/ft³ (loose, before recompaction). Always confirm with your supplier for any specific order.",
      },
      {
        q: "How much does a 10 lb/ft³ density difference change my estimate?",
        a: "It's directly proportional. On a 1,000 cubic foot volume (roughly 3,700 sq ft at 3 inches), a 10 lb/ft³ difference shifts the tonnage by 5 tons. At $150/ton, that's a $750 swing from a single input error — which is why confirming density with your supplier matters.",
      },
      {
        q: "Why is porous asphalt lighter than standard hot mix?",
        a: "Porous (open-graded) asphalt is designed with intentional air voids between aggregate particles so rainwater can drain through. Those voids displace weight, reducing the compacted density to roughly 125 lb/ft³ — about 14% lighter than standard dense-graded mix.",
      },
      {
        q: "What is the density of recycled asphalt millings?",
        a: "Recycled millings typically run 105–115 lb/ft³ in loose form — about 20–30% lighter than fresh compacted hot mix. The actual figure varies with particle size and moisture content. Use your supplier's stockpile density when available.",
      },
    ],
  },
  {
    id: "cost",
    title: "Cost & pricing",
    items: [
      {
        q: "How much does asphalt cost per ton?",
        a: "Material-only hot-mix asphalt averages roughly $100–$200 per ton nationally. This varies with crude oil prices (asphalt binder is petroleum-based), local aggregate costs, and distance to the nearest batch plant. Installed pricing — which adds labor, equipment, and base prep — works out to roughly $250–$450 per ton-equivalent.",
        link: { href: "/cost-calculator", label: "Cost calculator" },
      },
      {
        q: "How much does asphalt cost per square foot?",
        a: "Installed asphalt typically runs $3–$7 per square foot for a residential driveway. Material-only cost is roughly $1–$2 per square foot at standard 2.5-inch depth. Commercial parking lots with larger economies of scale often come in lower per square foot.",
      },
      {
        q: "What's the difference between material cost and installed cost?",
        a: "Material cost is what the hot-mix asphalt itself costs at the plant, sold by the ton. Installed cost is what a contractor charges for the complete job: site prep, excavation, compacted aggregate base, delivery, paving, and compaction. Installed typically runs 2.5–3× the material-only figure.",
      },
      {
        q: "Why do asphalt prices vary so much by region?",
        a: "Five main factors: (1) distance to the nearest batch plant — hot mix must be placed within 30–60 minutes of leaving the plant; (2) local aggregate availability — trucked-in rock adds cost; (3) PG binder grade required for the climate — wider-grade binders cost more; (4) seasonal demand peaks in late spring and summer; (5) local labor market wages.",
      },
      {
        q: "Does this calculator account for the aggregate base?",
        a: "No — the tonnage calculation covers the asphalt wearing course only. The compacted aggregate base beneath the asphalt (typically 4–8 inches of crushed stone) is a separate material and separate line item on any contractor quote. Base cost depends on depth, material source, and how much site prep is needed.",
      },
      {
        q: "Is a thicker driveway worth the extra cost?",
        a: "For standard passenger cars, 2–2.5 inches is usually sufficient. Upgrading to 3 inches adds ~50% more material cost for the same footprint but meaningfully extends pavement life if the driveway sees trucks, RVs, or trailers. It's generally worth it if anything heavier than a standard passenger car parks there regularly.",
      },
      {
        q: "How much does it cost to asphalt a parking lot?",
        a: "Installed cost for a standard commercial parking lot runs $2.50–$5.00 per square foot for full construction. Material-only asphalt runs $0.80–$1.50 per square foot at 3-inch depth. Larger lots often get lower per-square-foot rates due to economy of scale.",
        link: { href: "/parking-lot-calculator", label: "Parking lot calculator" },
      },
    ],
  },
  {
    id: "thickness",
    title: "Thickness & specifications",
    items: [
      {
        q: "How thick should an asphalt driveway be?",
        a: "For a residential driveway that only sees passenger cars: 2–2.5 inches of compacted hot-mix asphalt over a properly prepared aggregate base. For a driveway that regularly sees pickups, SUVs, or trailers: 3 inches. For regular RV or heavy truck use: 3–3.5 inches.",
        link: { href: "/driveway-calculator", label: "Driveway calculator with thickness guide" },
      },
      {
        q: "How thick should a parking lot be?",
        a: "Light-duty (passenger cars): 2.5–3 inches. Standard commercial (cars + occasional trucks): 3–3.5 inches. Mixed-vehicle (regular delivery trucks): 3.5–4 inches. Heavy commercial (semis, forklifts, buses): 4–5 inches. Fire lanes: 5–6 inches, typically specified by local code.",
        link: { href: "/parking-lot-calculator", label: "Parking lot thickness table" },
      },
      {
        q: "Does the thickness spec include the base layer?",
        a: "No. Thickness specifications for the asphalt layer are separate from the aggregate base beneath it. A 3-inch asphalt spec on top of a 6-inch compacted base is a 3-inch asphalt spec — the base is not counted. Both layers are required for a structurally sound pavement.",
      },
      {
        q: "What happens if asphalt is too thin?",
        a: "Thin asphalt fails faster under load. The most common result is fatigue cracking — the interconnected 'alligator' pattern that forms when the pavement flexes more than it was designed to. This is a structural failure, not a surface issue, and can't be fixed with sealcoating. It typically means the section needs to be dug up and rebuilt.",
      },
    ],
  },
  {
    id: "driveway",
    title: "Driveways",
    items: [
      {
        q: "How much asphalt do I need for a driveway?",
        a: "For a standard single-car driveway (20×10 ft, 2.5 in thick): roughly 3.2 tons. For a double-car driveway (20×20 ft, 2.5 in): roughly 6.4 tons. For a long single driveway (40×12 ft, 2.5 in): roughly 7.7 tons. All figures include a 7% waste allowance.",
        link: { href: "/driveway-calculator", label: "Driveway calculator" },
      },
      {
        q: "What is a standard driveway size?",
        a: "A single-car driveway is typically 10–12 ft wide by 18–24 ft long (180–288 sq ft). A double-car driveway is usually 18–24 ft wide by 20–24 ft long (360–576 sq ft). Driveways from the street to a detached garage often run 600–1,000+ sq ft.",
      },
      {
        q: "Should I include the apron in my measurements?",
        a: "Yes. The apron — the section connecting your driveway to the street — needs to be paved to at least the same spec as the rest of the driveway. It sees the most stress from turning tires and is typically required by local code. Leaving it out of your estimate will result in a short order.",
      },
      {
        q: "Can I pave over an existing gravel driveway?",
        a: "Often yes, if the gravel base is well-compacted, properly graded for drainage, and deep enough. A contractor will assess existing conditions, add and compact additional base material as needed, then apply a tack coat before paving. If the gravel is loose, thin, or waterlogged, it may need to be rebuilt first.",
      },
      {
        q: "How do I measure an L-shaped or irregular driveway?",
        a: "Split the surface into simple rectangles at each point where direction or width changes. Measure each rectangle separately, calculate the tonnage for each, and add the results. For corners with curves, measure to the outside edge and treat as rectangular — the overage is absorbed by your waste allowance.",
        link: { href: "/driveway-calculator#irregular", label: "Irregular area measurement guide" },
      },
      {
        q: "How long before I can drive on a new asphalt driveway?",
        a: "Most asphalt driveways can handle light passenger car traffic within 48–72 hours of paving. However, the asphalt continues to cure and harden for several weeks. Avoid parking heavy vehicles, turning in place, or driving on it in extreme heat for the first 2–3 weeks.",
      },
    ],
  },
  {
    id: "materials",
    title: "Materials & alternatives",
    items: [
      {
        q: "Is asphalt cheaper than concrete for a driveway?",
        a: "Yes, upfront. Installed asphalt typically runs $3–$7 per square foot versus $6–$12 for concrete — roughly half the initial cost. Over a 30-year period, concrete can come out cheaper once you account for asphalt's replacement cycle and ongoing sealcoating, but asphalt wins on initial cost and performs better in cold climates.",
        link: { href: "/guides/asphalt-vs-concrete-driveway-cost", label: "Full asphalt vs. concrete comparison" },
      },
      {
        q: "Which lasts longer, asphalt or concrete?",
        a: "Concrete typically lasts 25–40 years; asphalt typically 15–20 years. Asphalt is easier and cheaper to resurface when it wears out, which partially offsets the shorter lifespan in a total cost of ownership comparison. Climate matters: asphalt outperforms concrete in freeze-thaw climates; concrete outperforms in extreme heat.",
      },
      {
        q: "What are recycled asphalt millings good for?",
        a: "Millings work well as a base material or surface for low-traffic secondary driveways. The residual binder gradually hardens in sunlight, giving the surface a semi-paved character over time. They're not suitable as a wearing course for driveways with regular heavy vehicle use, where fresh hot mix is more durable.",
        link: { href: "/guides/recycled-millings-cold-patch-calculator", label: "Millings calculator & guide" },
      },
      {
        q: "What is cold-patch asphalt used for?",
        a: "Cold patch is a pre-mixed material (no heating required) used for pothole repair and small isolated patches. It's available in bags at hardware stores and is practical for quick emergency repairs. It's less durable than hot-mix repair and is best treated as a temporary or maintenance fix, not a permanent solution for larger areas.",
      },
      {
        q: "How soon after paving should I apply sealcoat?",
        a: "Wait at least 6–12 months after initial paving, ideally 12–18 months. New asphalt contains volatile compounds that need to cure before a sealer can bond properly. Sealing too soon can trap those compounds and prevent the asphalt from reaching its final hardened state.",
        link: { href: "/guides/asphalt-sealcoating-calculator", label: "Sealcoating calculator & guide" },
      },
    ],
  },
  {
    id: "ordering",
    title: "Ordering & working with contractors",
    items: [
      {
        q: "How do I know if a contractor's tonnage estimate is accurate?",
        a: "Run the same calculation yourself using this calculator with the same dimensions. If the results differ by more than 10%, ask the contractor which density figure and waste percentage they used — those two variables explain most discrepancies. A legitimate estimate should be able to account for any gap between their number and yours.",
        link: { href: "/guides/asphalt-calculator-alternatives", label: "Supplier calculators vs. independent tools" },
      },
      {
        q: "What waste allowance do contractors typically add?",
        a: "Most professional estimators add 5–10%. Residential driveways (clean rectangles, good access): 5–7%. Commercial lots with islands, curves, or tight access: 8–12%. Projects with multiple elevation changes or complex shapes: up to 15%. Ask your contractor what figure they're using — if they can't tell you, that's a concern.",
      },
      {
        q: "What should I ask a contractor before signing a paving quote?",
        a: "Key questions: What mix type and density are you using? How deep is the aggregate base, and is it new material or existing? What's your waste allowance? Is striping (for parking lots) included? What's the warranty on the work? When is the earliest pour date, and what weather conditions will delay it?",
      },
      {
        q: "What is a batch plant minimum order?",
        a: "Most asphalt batch plants have minimum order quantities, often 1–3 tons, and delivery minimums that reflect the cost of mobilizing a truck. For very small jobs like a single pothole or a short path, pre-bagged cold-patch material from a hardware store is often more economical than ordering hot mix from a plant.",
      },
    ],
  },
];

export default function FAQPage() {
  const allItems = SECTIONS.flatMap((s) => s.items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      {/* ── HERO ── */}
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            {allItems.length} questions answered
          </span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            Asphalt FAQ
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 font-body text-lg leading-relaxed text-steel">
            Answers to the most common asphalt questions — organized by topic.
            Every answer is written to match what a real paving estimator or
            experienced contractor would tell you.
          </p>

          {/* ── JUMP LINKS ── */}
          <nav className="mt-6 flex flex-wrap gap-2">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-sm border border-asphalt-900/15 bg-chalk px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-steel transition-colors hover:border-marking-dim hover:text-asphalt-900"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── FAQ SECTIONS ── */}
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <div className="space-y-16">
          {SECTIONS.map((section, si) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              {/* Section header */}
              <div className="flex items-center gap-3 border-b-2 border-asphalt-900 pb-3">
                <span className="font-mono text-xs text-steel">
                  {String(si + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
                  {section.title}
                </h2>
              </div>

              {/* Q&A — ALL EXPANDED, NO ACCORDION */}
              <div className="mt-6 space-y-8">
                {section.items.map((item) => (
                  <div key={item.q} className="border-b border-asphalt-900/8 pb-8 last:border-0 last:pb-0">
                    <h3 className="font-body text-base font-semibold text-asphalt-900">
                      {item.q}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-steel">
                      {item.a}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-marking-dim hover:underline"
                      >
                        {item.link.label} →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* ── CALCULATORS CTA ── */}
        <div className="mt-16 rounded-md border border-asphalt-900/10 bg-asphalt-900 p-6 text-chalk">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
            Ready to calculate?
          </h2>
          <p className="mt-2 font-body text-sm leading-relaxed text-steel-light">
            Put these answers to work with our free calculators — no sign-up required.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { href: "/", label: "Asphalt Calculator" },
              { href: "/driveway-calculator", label: "Driveway" },
              { href: "/parking-lot-calculator", label: "Parking Lot" },
              { href: "/cost-calculator", label: "Cost" },
              { href: "/tonnage-calculator", label: "Tonnage" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-sm border border-chalk/20 px-3 py-2 font-mono text-xs uppercase tracking-widest text-chalk transition-colors hover:border-marking hover:text-marking"
              >
                {c.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
