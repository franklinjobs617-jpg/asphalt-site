import Link from "next/link";
import Calculator from "@/components/Calculator";
import ThicknessGuide from "@/components/ThicknessGuide";
import FAQ from "@/components/FAQ";

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
      {/* HERO */}
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Free Tool — No Sign-up
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900 sm:text-6xl">
            Asphalt Calculator
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-steel">
            Enter your area and thickness to get the tons of asphalt, cubic
            yards, and estimated material cost for your driveway, parking
            lot, or paving project — calculated with the same density and
            waste-factor formulas paving estimators use.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Calculator headline="weight" idAnchor="calculator" />
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-asphalt-900/10 bg-asphalt-900 text-chalk">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight">
            How the calculation works
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <Step
              n="1"
              title="Find the volume"
              body="Length × width gives the surface area. Multiply by thickness (converted to feet) to get the volume of asphalt in cubic feet."
            />
            <Step
              n="2"
              title="Convert to weight"
              body="Volume × density (typically 145 lb/ft³ for standard hot mix) gives total weight in pounds, then divide by 2,000 to get tons."
            />
            <Step
              n="3"
              title="Add waste & price"
              body="A 5–10% waste allowance covers compaction and irregular edges, then tons × price/ton gives a material cost estimate."
            />
          </div>
        </div>
      </section>

      {/* THICKNESS GUIDE */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          How thick should your asphalt be?
        </h2>
        <p className="mt-3 max-w-2xl font-body text-steel">
          Thickness is the single biggest factor in your material total —
          doubling it roughly doubles the tons and cost. Use this as a
          starting point, then check local building code for your project.
        </p>
        <div className="mt-6">
          <ThicknessGuide />
        </div>
      </section>

      {/* RELATED CALCULATORS */}
      <section className="border-t border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            More asphalt calculators
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <RelatedCard
              href="/tonnage-calculator"
              title="Tonnage Calculator"
              body="Get tons and truckload counts for ordering bulk material from a supplier."
            />
            <RelatedCard
              href="/cost-calculator"
              title="Cost Calculator"
              body="Estimate both material-only price and a typical installed price range."
            />
            <RelatedCard
              href="/driveway-calculator"
              title="Driveway Calculator"
              body="Built-in presets for single, double, and RV-length driveways."
            />
          </div>
        </div>
      </section>

      {/* CONTENT / AI-GEO SECTION */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          What an asphalt calculator actually estimates
        </h2>
        <div className="mt-4 space-y-4 font-body leading-relaxed text-steel">
          <p>
            An asphalt calculator estimates the volume, weight, and material
            cost of hot-mix asphalt needed to pave a given area at a given
            thickness. It does this by treating the paved surface as a thin
            rectangular slab: area times thickness gives volume, and volume
            times the mix density gives weight.
          </p>
          <p>
            Standard dense-graded hot-mix asphalt weighs about 145 pounds per
            cubic foot once compacted, though porous mixes run lighter
            (around 125 lb/ft³) and stone mastic asphalt runs heavier (around
            150 lb/ft³). That density figure is the part most generic
            calculators get wrong by defaulting to a single fixed number —
            this calculator lets you pick the mix type so the estimate
            matches what your supplier is actually quoting.
          </p>
          <p>
            Material cost then comes from multiplying total tons (including a
            waste allowance) by your local price per ton. Material-only
            pricing nationally runs roughly $100–$200 per ton, but installed
            pricing — which includes excavation, base prep, and labor — is
            typically 2.5–3x higher per ton equivalent. For a binding quote,
            always confirm pricing with a licensed local paving contractor.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <FAQ
          items={[
            {
              q: "How much asphalt do I need for a driveway?",
              a: "For a standard residential driveway at 2.5 inches thick, you'll need roughly 0.16 tons of asphalt per square foot of area. A typical 16×40 ft single driveway (640 sq ft) needs about 6 tons. Use the calculator above with your exact dimensions for a precise figure.",
            },
            {
              q: "What is the standard density used for asphalt calculations?",
              a: "Standard dense-graded hot-mix asphalt is typically calculated at 145 lb/ft³ (about 2,322 kg/m³). Porous or open-graded mixes run lighter at roughly 125 lb/ft³, and stone mastic asphalt (SMA) runs heavier at around 150 lb/ft³.",
            },
            {
              q: "How many tons of asphalt are in a cubic yard?",
              a: "One cubic yard of standard compacted hot-mix asphalt weighs approximately 2.0–2.05 tons, based on a density of about 145 lb/ft³. This ratio shifts slightly with mix type and compaction.",
            },
            {
              q: "How much waste allowance should I add?",
              a: "Most estimators add 5–10% to the calculated tonnage to account for compaction, spillage, and irregular edges. Projects with curves, multiple cuts, or tight access typically need the higher end of that range.",
            },
            {
              q: "Is this calculator accurate enough to order material?",
              a: "It uses the same area × thickness × density formula professional estimators use, so it's accurate for budgeting and rough ordering. For a final order, confirm density and pricing with your specific asphalt supplier, since mix designs vary by region.",
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
      <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-tight">
        {title}
      </h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-steel-light">{body}</p>
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
