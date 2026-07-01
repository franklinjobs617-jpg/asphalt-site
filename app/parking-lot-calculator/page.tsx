import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import IrregularAreaGuide from "@/components/IrregularAreaGuide";
import FAQ from "@/components/FAQ";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Parking Lot Asphalt Calculator – Tons, Cost & Truckloads",
  description:
    "Calculate asphalt tonnage and material cost for a parking lot. Includes commercial-spec thickness guidance, large-project presets, and irregular lot measurement help.",
};

const PRESETS = [
  { label: "Small lot (50×80 ft)", length: 80, width: 50, thickness: 3 },
  { label: "Medium lot (100×150 ft)", length: 150, width: 100, thickness: 3.5 },
  { label: "Large lot (200×300 ft)", length: 300, width: 200, thickness: 4 },
  { label: "Strip mall (80×400 ft)", length: 400, width: 80, thickness: 3.5 },
];

export default function ParkingLotCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to calculate asphalt for a parking lot",
            step: [
              { "@type": "HowToStep", name: "Measure the lot", text: "Measure total paved area in square feet. Split irregular lots into rectangles and add the areas together." },
              { "@type": "HowToStep", name: "Choose thickness", text: "Use 3 inches for light-duty lots (passenger cars), 3.5–4 inches for commercial or mixed-vehicle use, 4–5 inches for heavy truck access." },
              { "@type": "HowToStep", name: "Calculate tonnage", text: "Enter dimensions into the calculator. Add 8% waste allowance for a typical commercial lot with access drives and corners." },
              { "@type": "HowToStep", name: "Plan delivery", text: "Divide total tons by 16 to get truckload count. Large lots are typically poured in sections; coordinate delivery timing with the paving crew." },
            ],
          }),
        }}
      />

      {/* ── HERO ── */}
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Commercial & Multi-Bay
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900 sm:text-6xl">
            Parking Lot Asphalt Calculator
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-steel">
            Parking lots require thicker asphalt than driveways, different waste
            factors for irregular shapes, and multi-truck delivery coordination.
            Select a preset lot size or enter your dimensions for an accurate
            tonnage and cost estimate.
          </p>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Calculator
          headline="weight"
          presets={PRESETS}
          defaultThickness={3}
          idAnchor="calculator"
        />
      </section>

      {/* ── THICKNESS BY LOT TYPE ── */}
      <section className="border-y border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Parking lot asphalt thickness by use
          </h2>
          <p className="mt-3 max-w-2xl font-body text-steel">
            Parking lots see a much wider range of vehicle weights than
            residential driveways. Thickness spec should match the heaviest
            vehicle that will regularly use the lot — not just the typical
            passenger car.
          </p>
          <div className="mt-6 overflow-x-auto rounded-md border border-asphalt-900/10">
            <table className="w-full min-w-[560px] border-collapse font-body text-sm">
              <thead>
                <tr className="bg-asphalt-900 text-chalk">
                  {["Lot type", "Typical users", "Asphalt depth", "Base depth", "Notes"].map(
                    (h) => (
                      <th key={h} className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-asphalt-900/10">
                {[
                  ["Light-duty", "Passenger cars, small SUVs", "2.5–3 in", "4–6 in", "Apartment, retail strip, small office"],
                  ["Standard commercial", "Cars + occasional pickups/vans", "3–3.5 in", "6–8 in", "Shopping center, school, church"],
                  ["Mixed-vehicle", "Cars + regular delivery trucks", "3.5–4 in", "8–10 in", "Warehouse district, grocery, big box"],
                  ["Heavy commercial", "Semi trucks, forklifts, buses", "4–5 in", "10–12 in", "Industrial, logistics, transit depot"],
                  ["Fire lane / access drive", "Fire apparatus (75,000+ lb)", "5–6 in", "12+ in", "Required by code in most jurisdictions"],
                ].map(([type, users, asp, base, notes], i) => (
                  <tr key={type} className={i % 2 === 0 ? "bg-chalk" : "bg-concrete-50"}>
                    <td className="px-4 py-3 font-medium text-asphalt-900">{type}</td>
                    <td className="px-4 py-3 text-steel">{users}</td>
                    <td className="px-4 py-3 font-mono tabular text-asphalt-900">{asp}</td>
                    <td className="px-4 py-3 font-mono tabular text-asphalt-900">{base}</td>
                    <td className="px-4 py-3 text-steel">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 font-body text-xs text-steel">
            These are general guidelines. Local building codes, soil conditions,
            and frost depth may require modifications — confirm specs with a
            licensed civil engineer for commercial projects.
          </p>
        </div>
      </section>

      {/* ── HOW PARKING LOTS DIFFER FROM DRIVEWAYS ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          How parking lot paving differs from a driveway
        </h2>
        <div className="mt-4 space-y-5 font-body leading-relaxed text-steel">
          <DiffPoint
            title="Higher waste factor"
            body="Parking lots have more access drives, turning radii, islands, and curb returns than a straight rectangular driveway. These transitions require cutting and shaping material that can't be reused. Use 8–12% waste instead of the 5–7% standard for residential work — more if the lot has many islands or tight corners."
          />
          <DiffPoint
            title="Multi-section paving"
            body="Lots larger than about 5,000 sq ft are typically paved in sections, not all at once. The paving crew works in lanes, and hot mix deliveries are coordinated to arrive just ahead of the paver. This means your total tonnage order is spread across multiple trucks, and the job schedule needs to account for the plant's production rate."
          />
          <DiffPoint
            title="Stormwater and grading"
            body="Commercial lots are required to drain. Every parking surface must slope at least 1.5–2% toward a drain or curb — achieved through sub-base grading rather than the asphalt surface itself. If your site has drainage challenges, that engineering work needs to happen before any asphalt is placed and is a major cost factor."
          />
          <DiffPoint
            title="Striping and line painting"
            body="Parking lot striping (line painting) is a separate cost not included in the asphalt tonnage estimate. Standard stall dimensions are 8.5–9 ft wide by 18–19 ft deep, with 24 ft drive aisles. For an ADA-compliant lot, handicapped stalls need a minimum 8 ft stall plus 5 ft access aisle, with signage and pavement markings meeting specific requirements."
          />
          <DiffPoint
            title="Permit and code requirements"
            body="Most commercial paving projects require a permit. Local codes typically specify minimum pavement thickness, base depth, drainage slope, fire lane width, curb cuts, and striping standards. Check with your local planning department before finalizing any commercial paving spec."
          />
        </div>
      </section>

      {/* ── IRREGULAR LOT GUIDE ── */}
      <section className="border-y border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Measuring an irregular lot
          </h2>
          <p className="mt-3 max-w-2xl font-body text-steel">
            Most real parking lots aren't perfectly rectangular — they have
            access drives, cut corners, or L-shapes around a building footprint.
            Use the guide below to break the lot into measurable rectangles.
          </p>
          <div className="mt-6">
            <IrregularAreaGuide />
          </div>
        </div>
      </section>

      {/* ── SAMPLE LOT ESTIMATES ── */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
          Sample parking lot estimates
        </h2>
        <p className="mt-3 max-w-2xl font-body text-steel">
          Material cost at $145/ton; installed range at 2.6× material.
          8% waste included. These represent material-only and rough
          installed ranges — actual bids vary significantly by market.
        </p>
        <div className="mt-6 overflow-x-auto rounded-md border border-asphalt-900/10">
          <table className="w-full min-w-[560px] border-collapse font-body text-sm">
            <thead>
              <tr className="bg-asphalt-900 text-chalk">
                {["Lot", "Dimensions", "Approx. tons", "Approx. cars", "Material est.", "Installed est."].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-asphalt-900/10">
              {[
                ["Small retail", "50×80 ft, 3 in", "≈ 44 T", "~15 cars", "~$6,400", "~$16,600"],
                ["Office lot", "80×120 ft, 3 in", "≈ 106 T", "~35 cars", "~$15,400", "~$40,000"],
                ["Strip mall", "80×400 ft, 3.5 in", "≈ 410 T", "~90 cars", "~$59,500", "~$154,700"],
                ["Large retail", "200×300 ft, 4 in", "≈ 1,052 T", "~190 cars", "~$152,500", "~$396,500"],
              ].map(([lot, dim, tons, cars, mat, inst], i) => (
                <tr key={lot} className={i % 2 === 0 ? "bg-chalk" : "bg-concrete-50"}>
                  <td className="px-4 py-3 font-medium text-asphalt-900">{lot}</td>
                  <td className="px-4 py-3 font-mono tabular text-asphalt-900">{dim}</td>
                  <td className="px-4 py-3 font-mono tabular text-asphalt-900">{tons}</td>
                  <td className="px-4 py-3 text-steel">{cars}</td>
                  <td className="px-4 py-3 font-mono tabular text-marking-dim font-semibold">{mat}</td>
                  <td className="px-4 py-3 font-mono tabular text-steel">{inst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="border-t border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
            Related tools
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <Card href="/cost-calculator" title="Cost Calculator" body="Material-only and installed price ranges side by side, with a cost-breakdown chart." />
            <Card href="/tonnage-calculator" title="Tonnage Calculator" body="Focus on the weight output and exact truckload count for placing a material order." />
            <Card href="/driveway-calculator" title="Driveway Calculator" body="Residential-scale calculator with common driveway size presets." />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <FAQ
          items={[
            {
              q: "How thick should a parking lot be?",
              a: "Most standard commercial parking lots (passenger cars and light trucks) are paved at 3–3.5 inches of compacted hot-mix asphalt over a 6–8 inch compacted aggregate base. Lots that regularly see delivery trucks, garbage trucks, or buses need 4–5 inches of asphalt. Fire lanes are typically specified at 5–6 inches by local code.",
            },
            {
              q: "How much does it cost to asphalt a parking lot?",
              a: "Installed cost for a standard commercial parking lot typically runs $2.50–$5.00 per square foot for full construction — including excavation, base prep, and asphalt. Material-only asphalt cost is $0.80–$1.50 per square foot at 3-inch depth. Large lots (100,000+ sq ft) often get better per-square-foot rates due to economy of scale.",
            },
            {
              q: "How many tons of asphalt per parking space?",
              a: "A standard 9×18 ft parking stall is 162 sq ft. At 3 inches thick with standard 145 lb/ft³ hot mix and 8% waste, that's approximately 2.9 tons of asphalt per stall. At 3.5 inches, roughly 3.4 tons per stall. These figures don't include drive aisles — add about 50% more area for the aisle serving each row of stalls.",
            },
            {
              q: "Can I pave over an existing parking lot?",
              a: "Yes, if the existing pavement is structurally sound — no base failure, minimal alligator cracking, and no major drainage issues. A mill-and-overlay (grinding 1–2 inches off the existing surface, then repaving) is cheaper than full removal and replacement. A contractor should evaluate the existing structure before recommending overlay vs. full reconstruction.",
            },
            {
              q: "How much waste allowance should I use for a parking lot?",
              a: "Use 8–10% for a standard rectangular lot. Use 10–12% for lots with islands, angled corners, multiple access drives, or irregular shapes — these create more cuts and more material that can't be reused mid-pour.",
            },
            {
              q: "Do I need a permit to pave a parking lot?",
              a: "Almost always yes for commercial properties. Local codes typically require permits covering drainage, pavement thickness, fire lane standards, ADA-compliant stall and access aisle dimensions, and sometimes impervious surface limits. Check with your municipality before starting design.",
            },
          ]}
        />
      </section>
    </>
  );
}

function DiffPoint({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l-2 border-marking/40 pl-4">
      <h3 className="font-semibold text-asphalt-900">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function Card({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-md border border-asphalt-900/10 bg-chalk p-5 transition-colors hover:border-marking-dim"
    >
      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-asphalt-900">{title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-steel">{body}</p>
      <span className="mt-3 inline-block font-mono text-xs uppercase tracking-widest text-marking-dim group-hover:underline">
        Open calculator →
      </span>
    </Link>
  );
}
