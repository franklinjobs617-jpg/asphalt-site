import Link from "next/link";
import Calculator from "@/components/Calculator";
import ThicknessGuide from "@/components/ThicknessGuide";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Asphalt Calculator",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "Any (web browser)",
              url: "https://asphaltcalculatorhq.com/",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              description:
                "Free calculator that estimates asphalt tonnage, volume, and material cost from area and thickness inputs.",
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to calculate how much asphalt you need",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Find the volume",
                  text: "Multiply length by width to get area, then multiply by thickness (in feet) to get volume in cubic feet.",
                },
                {
                  "@type": "HowToStep",
                  name: "Convert to weight",
                  text: "Multiply volume by asphalt density (about 145 lb/ft³ for standard hot mix) to get pounds, then divide by 2,000 for tons.",
                },
                {
                  "@type": "HowToStep",
                  name: "Add waste and price",
                  text: "Add a 5–10% waste allowance, then multiply total tons by your price per ton for a material cost estimate.",
                },
              ],
            },
          ]),
        }}
      />

      {/* ── HERO ── */}
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Free Tool — No Sign-up
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900 sm:text-6xl">
            Asphalt Calculator
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-steel">
            Enter your area and thickness to instantly get the tons of asphalt,
            cubic yards, truckload count, and estimated material cost for any
            paving project — using the same density and waste-factor formulas
            professional paving estimators rely on.
          </p>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Calculator headline="weight" idAnchor="calculator" />
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="border-y border-asphalt-900/10 bg-asphalt-900 text-chalk">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight">
            How the calculation works
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <Step
              n="1"
              title="Find the volume"
              body="Length × width gives the surface area in square feet. Multiply by the thickness converted to feet (inches ÷ 12) to get volume in cubic feet."
            />
            <Step
              n="2"
              title="Convert to weight"
              body="Volume × density (typically 145 lb/ft³ for standard hot mix) gives total weight in pounds. Divide by 2,000 to convert to tons — the unit asphalt is sold by."
            />
            <Step
              n="3"
              title="Add waste & price"
              body="Add a 5–10% waste allowance for compaction, spillage, and irregular edges, then multiply by your price per ton for a material cost estimate."
            />
          </div>
        </div>
      </section>

      {/* ── THICKNESS GUIDE ── */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          How thick should your asphalt be?
        </h2>
        <p className="mt-3 max-w-2xl font-body text-steel">
          Thickness is the single biggest variable in your estimate — doubling
          it roughly doubles both tons and cost for the same footprint. Use this
          as your starting point, then check local building code and confirm
          with your contractor.
        </p>
        <div className="mt-6">
          <ThicknessGuide />
        </div>
        <p className="mt-4 font-body text-sm text-steel">
          These are depth recommendations for the asphalt wearing course only.
          A properly engineered pavement section also includes a compacted
          aggregate base beneath the asphalt — typically 4–8 inches of crushed
          stone — which is a separate cost and material from the asphalt itself.
        </p>
      </section>

      {/* ── WORKED EXAMPLES ── */}
      <section className="border-y border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Real-world calculation examples
          </h2>
          <p className="mt-3 max-w-2xl font-body text-steel">
            Same formula, three different projects. Every number below was
            calculated using the formula on this page — you can verify each one
            with the calculator above.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <WorkedExample
              label="Residential driveway"
              spec="20 ft × 40 ft × 2.5 in"
              steps={[
                "Area: 20 × 40 = 800 ft²",
                "Volume: 800 × (2.5 ÷ 12) = 166.7 ft³",
                "Weight: 166.7 × 145 = 24,167 lb",
                "Tons: 24,167 ÷ 2,000 = 12.1 tons",
                "+7% waste = 12.9 tons",
              ]}
              result="≈ 13 tons"
              hint="Standard single/double driveway; 145 lb/ft³ dense hot mix"
            />
            <WorkedExample
              label="Small parking lot"
              spec="60 ft × 80 ft × 3 in"
              steps={[
                "Area: 60 × 80 = 4,800 ft²",
                "Volume: 4,800 × (3 ÷ 12) = 1,200 ft³",
                "Weight: 1,200 × 145 = 174,000 lb",
                "Tons: 174,000 ÷ 2,000 = 87 tons",
                "+8% waste = 93.96 tons",
              ]}
              result="≈ 94 tons"
              hint="Light commercial lot at 3 in depth; roughly 6 truckloads"
            />
            <WorkedExample
              label="Residential walkway"
              spec="4 ft × 50 ft × 2 in"
              steps={[
                "Area: 4 × 50 = 200 ft²",
                "Volume: 200 × (2 ÷ 12) = 33.3 ft³",
                "Weight: 33.3 × 145 = 4,833 lb",
                "Tons: 4,833 ÷ 2,000 = 2.4 tons",
                "+5% waste = 2.5 tons",
              ]}
              result="≈ 2.5 tons"
              hint="Path or walkway at minimum recommended depth"
            />
          </div>
        </div>
      </section>

      {/* ── WHAT THIS CALCULATOR ESTIMATES ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          What an asphalt calculator actually estimates
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            An asphalt calculator estimates the volume, weight, and material
            cost of hot-mix asphalt (HMA) needed to pave a given area at a
            given compacted thickness. The core model treats the paved surface
            as a thin rectangular slab: area × thickness gives volume, and
            volume × mix density gives weight. Asphalt is priced and sold by
            the ton, so converting volume to weight is the key step.
          </p>
          <p>
            Standard dense-graded hot-mix asphalt weighs about 145 pounds per
            cubic foot once compacted. That said, the actual figure varies with
            the mix design — porous or open-graded mixes run lighter (around
            125 lb/ft³) because they're intentionally full of drainage voids,
            while stone mastic asphalt (SMA) runs heavier (around 150 lb/ft³)
            due to its higher binder and coarse aggregate content. Most
            one-size-fits-all online calculators lock in at 145 — this one
            lets you pick the mix type so the estimate reflects what your
            supplier is actually quoting.
          </p>
          <p>
            Material cost then comes from multiplying total ordered tons
            (calculated quantity plus the waste allowance) by your local price
            per ton. Material-only pricing nationally averages roughly
            $100–$200 per ton, but installed pricing — which includes
            excavation, compacted aggregate base, paving crew, equipment, and
            compaction — typically runs 2.5–3× higher. The cost calculator
            on this site shows both figures side by side so you know what
            you're comparing when a contractor sends you a quote.
          </p>
          <p>
            The waste allowance exists because asphalt compacts differently at
            edges and corners, irregular shapes waste material during cutting,
            and some fraction is always lost to the batch plant's minimum load
            requirements. For a clean rectangular driveway with straight
            runs, 5–7% is usually adequate. For a project with tight curves,
            multiple elevation changes, or many access restrictions, use 10%.
          </p>
        </div>
      </section>

      {/* ── COMMON MISTAKES ── */}
      <section className="border-t border-asphalt-900/10 bg-asphalt-900 text-chalk">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight">
            Common estimating mistakes — and how to avoid them
          </h2>
          <div className="mt-8 space-y-6">
            <Mistake
              n="01"
              title="Using the wrong density"
              body="Defaulting to 145 lb/ft³ when your supplier is using a porous or SMA mix can skew your tonnage by 10–20%. Always confirm the mix design and its compacted density before locking in a material order."
            />
            <Mistake
              n="02"
              title="Forgetting to convert thickness to feet"
              body='The formula needs thickness in feet, but specs are always given in inches. Divide by 12 first. Forgetting this step — entering "3" instead of "0.25" — inflates your volume by a factor of 4, which is the most common raw calculation error.'
            />
            <Mistake
              n="03"
              title="Skipping the waste allowance"
              body="Ordering exactly the calculated tons almost always results in running short. The last section of any pour is where you discover the edge cuts, the slightly thicker spot over a low point, and the spillage near the truck chute. Add at least 5%."
            />
            <Mistake
              n="04"
              title="Measuring only the parking area"
              body="Aprons (where the driveway meets the street), turning areas, and walkway connections all need to be paved too, and they're easy to leave out of a measurement. Include every surface that needs asphalt in your total area."
            />
            <Mistake
              n="05"
              title="Confusing material cost with installed cost"
              body="Material-only pricing and installed (contractor) pricing are completely different numbers — roughly 2.5–3× apart. Online estimates typically show material only. Make sure you're comparing apples to apples when evaluating a contractor's quote."
            />
          </div>
        </div>
      </section>

      {/* ── RELATED CALCULATORS ── */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          More asphalt calculators
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <RelatedCard
            href="/tonnage-calculator"
            title="Tonnage Calculator"
            body="Get the exact ton count and number of truckloads to order from a supplier, with a focus on the weight output."
          />
          <RelatedCard
            href="/cost-calculator"
            title="Cost Calculator"
            body="Estimate both material-only price and a typical installed price range, with a cost-breakdown chart showing where each dollar goes."
          />
          <RelatedCard
            href="/driveway-calculator"
            title="Driveway Calculator"
            body="Built-in presets for single, double, long single, and RV-pad driveways — pick your size and adjust from there."
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "How much asphalt do I need for a driveway?",
              a: "For a standard residential driveway at 2.5 inches thick, you need roughly 0.016 tons per square foot of area. A typical 20×40 ft driveway (800 sq ft) needs about 13 tons including waste. Use the calculator above with your exact measurements for a precise figure.",
            },
            {
              q: "What is the standard density used for asphalt calculations?",
              a: "Standard dense-graded hot-mix asphalt is typically calculated at 145 lb/ft³ (about 2,322 kg/m³). Porous or open-graded mixes run lighter at roughly 125 lb/ft³, and stone mastic asphalt (SMA) runs heavier at around 150 lb/ft³. Always confirm your specific mix's density with the supplier.",
            },
            {
              q: "How many tons of asphalt are in a cubic yard?",
              a: "One cubic yard of standard compacted hot-mix asphalt weighs approximately 2.0–2.05 tons, based on a density of about 145 lb/ft³. This ratio shifts slightly with mix type — porous mix comes out closer to 1.7 tons per cubic yard, SMA closer to 2.1.",
            },
            {
              q: "How much waste allowance should I add to my order?",
              a: "Most estimators add 5–10% to the calculated tonnage. For a straight rectangular driveway, 5–7% is usually enough. For a project with curves, multiple cuts, elevation changes, or tricky access, use 10%. It's cheaper to have a small surplus than to wait for a second delivery.",
            },
            {
              q: "Is this calculator accurate enough to actually place a material order?",
              a: "It uses the same area × thickness × density formula professional estimators use, so it's reliable for budgeting and supplier conversations. For a final order, confirm the exact mix density and current pricing with your asphalt supplier, since both vary by region and time of year.",
            },
            {
              q: "How many square feet does a ton of asphalt cover?",
              a: "At 2 inches thick, one ton of standard hot-mix asphalt covers roughly 80–85 square feet. At 3 inches thick, coverage drops to about 53–57 square feet per ton. The exact figure depends on compacted density and how tightly the material is placed.",
            },
          ]}
        />
      </section>
    </>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="border-t border-chalk/20 pt-4">
      <span className="font-mono text-sm text-marking">{n.padStart(2, "0")}</span>
      <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-tight">{title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-steel-light">{body}</p>
    </div>
  );
}

function Mistake({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="flex gap-5 border-t border-chalk/10 pt-5">
      <span className="mt-0.5 shrink-0 font-mono text-sm text-marking">{n}</span>
      <div>
        <h3 className="font-display text-lg font-bold uppercase tracking-tight">{title}</h3>
        <p className="mt-1.5 font-body text-sm leading-relaxed text-steel-light">{body}</p>
      </div>
    </div>
  );
}

function WorkedExample({
  label,
  spec,
  steps,
  result,
  hint,
}: {
  label: string;
  spec: string;
  steps: string[];
  result: string;
  hint: string;
}) {
  return (
    <div className="rounded-md border border-asphalt-900/10 bg-chalk p-5">
      <span className="font-mono text-xs uppercase tracking-widest text-marking-dim">{label}</span>
      <p className="mt-1 font-display text-lg font-bold uppercase tracking-tight text-asphalt-900">
        {spec}
      </p>
      <ol className="mt-4 space-y-1.5 font-mono text-xs tabular text-steel">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
      <div className="mt-4 border-t border-asphalt-900/10 pt-4">
        <span className="font-mono text-2xl font-semibold tabular text-asphalt-900">{result}</span>
      </div>
      <p className="mt-1 font-body text-xs text-steel">{hint}</p>
    </div>
  );
}

function RelatedCard({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-md border border-asphalt-900/10 bg-chalk p-5 transition-colors hover:border-marking-dim"
    >
      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-asphalt-900">
        {title}
      </h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-steel">{body}</p>
      <span className="mt-3 inline-block font-mono text-xs uppercase tracking-widest text-marking-dim group-hover:underline">
        Open calculator →
      </span>
    </Link>
  );
}
