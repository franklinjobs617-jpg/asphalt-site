import type { Metadata } from "next";
import Link from "next/link";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Asphalt & Paving Glossary",
  description:
    "Plain-English definitions for asphalt and paving terms — hot mix, tack coat, base course, compaction, PG binder, and more.",
};

const TERMS = [
  {
    term: "Hot-mix asphalt (HMA)",
    def: "Asphalt produced by heating aggregate and asphalt binder together, then compacting it while still hot. This is the standard material for driveways, roads, and parking lots, typically weighing around 145 lb/ft³ when compacted.",
  },
  {
    term: "Cold-mix asphalt",
    def: "An asphalt mix designed to stay workable at ambient temperature, used for patching potholes and small repairs rather than full paving jobs. It's softer and less durable than hot mix, so it's not a substitute for new construction.",
  },
  {
    term: "Aggregate base course",
    def: "The compacted layer of crushed stone or gravel placed beneath the asphalt layer. It distributes the weight of traffic down into the subgrade and provides drainage — skipping or under-building this layer is the most common cause of early pavement failure.",
  },
  {
    term: "Subgrade",
    def: "The native soil beneath the base course. Its load-bearing capacity and drainage determine how thick the base and asphalt layers need to be — poor subgrade (clay, organic soil) typically needs a thicker base than well-draining sand or gravel.",
  },
  {
    term: "Tack coat",
    def: "A thin layer of liquid asphalt emulsion sprayed between an existing surface and a new asphalt layer (such as in an overlay) to bond the two together. Without it, the new layer can delaminate and slide.",
  },
  {
    term: "Compaction",
    def: "The process of rolling fresh asphalt with heavy equipment to remove air voids and increase density. Under-compacted asphalt is more porous, wears faster, and is more prone to water damage and rutting.",
  },
  {
    term: "PG binder (Performance Grade)",
    def: "A binder classification system (e.g., PG 64-22) that rates asphalt cement by the high and low temperatures it can withstand without rutting or cracking. Regions with hot summers and cold winters need a binder grade with a wider performance range.",
  },
  {
    term: "RAP (Reclaimed Asphalt Pavement)",
    def: "Asphalt millings recovered from grinding up an old road or parking lot, recycled into new mix or used as a lower-cost base material. RAP is lighter and looser than fresh hot mix, so it needs its own density figure — see the recycled millings calculator.",
  },
  {
    term: "Crown / cross-slope",
    def: "The slight slope built into a paved surface (typically 1/4 inch per foot) so rainwater drains off rather than pooling. A driveway with no crown or slope toward the house is a common, expensive-to-fix design mistake.",
  },
  {
    term: "Rutting",
    def: "Permanent depressions that form in wheel paths from repeated heavy loads, especially in hot weather or with under-compacted asphalt. Rutting is a sign the pavement structure (thickness, base, or mix) was undersized for the actual traffic load.",
  },
  {
    term: "Alligator cracking",
    def: "Interconnected cracks resembling alligator skin, caused by fatigue failure — usually from an asphalt layer that's too thin for the load it carries, or a failing base course beneath it.",
  },
  {
    term: "Sealcoat",
    def: "A protective liquid coating applied over cured asphalt (typically 6–12 months after paving) to slow oxidation and water penetration. It's maintenance, not structural repair — it won't fix existing cracks or rutting.",
  },
  {
    term: "Stone Mastic Asphalt (SMA)",
    def: "A dense, rut-resistant asphalt mix with a higher proportion of coarse aggregate and binder, commonly used on high-traffic roads and intersections. It runs heavier than standard hot mix, around 150 lb/ft³.",
  },
  {
    term: "Open-graded / porous asphalt",
    def: "A mix with larger void spaces that lets water drain through the pavement itself, reducing runoff. It's lighter than standard hot mix (around 125 lb/ft³) and requires a compatible open-graded base to function correctly.",
  },
  {
    term: "Milling (cold planing)",
    def: "Grinding off the top layer of an existing asphalt surface, either to prepare it for a new overlay or to recover RAP material. Milling depth is typically 1–2 inches per pass.",
  },
  {
    term: "Overlay",
    def: "A new layer of asphalt placed over an existing, structurally sound surface rather than full removal and replacement. Overlays are cheaper than full reconstruction but require a tack coat and won't fix base-level failures.",
  },
  {
    term: "Apron",
    def: "The section of a driveway where it meets the public street, often subject to a different specification (thickness, material) set by local municipal code rather than the homeowner's choice.",
  },
];

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "Asphalt & Paving Glossary",
            hasDefinedTerm: TERMS.map((t) => ({
              "@type": "DefinedTerm",
              name: t.term,
              description: t.def,
            })),
          }),
        }}
      />
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Reference
          </span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            Asphalt & Paving Glossary
          </h1>
          <LastUpdated date="2026-06-30" />
          <p className="mt-4 font-body text-lg leading-relaxed text-steel">
            The terms a contractor or supplier might use without explaining
            — defined in plain English, with notes on why each one actually
            affects your project.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <dl className="divide-y divide-asphalt-900/10 border-y border-asphalt-900/10">
          {TERMS.map((t) => (
            <div key={t.term} className="py-5">
              <dt className="font-display text-xl font-bold uppercase tracking-tight text-asphalt-900">
                {t.term}
              </dt>
              <dd className="mt-2 font-body text-sm leading-relaxed text-steel">
                {t.def}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 font-body text-steel">
          Ready to put these into a real estimate?{" "}
          <Link href="/" className="text-marking-dim underline">
            Use the asphalt calculator
          </Link>{" "}
          or browse the full{" "}
          <Link href="/guides" className="text-marking-dim underline">
            guides library
          </Link>
          .
        </p>
      </section>
    </>
  );
}
