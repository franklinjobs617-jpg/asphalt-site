import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
      {/* Large 404 with cross-section visual accent */}
      <div className="flex items-start gap-6">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:gap-1 sm:pt-1">
          <div className="h-2 w-8 rounded-sm bg-asphalt-900" />
          <div className="h-2 w-8 rounded-sm bg-concrete-200" />
          <div className="h-1 w-8 rounded-sm bg-marking" />
          <div className="h-4 w-8 rounded-sm bg-asphalt-900/20" />
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Error 404
          </span>
          <h1 className="mt-2 font-display text-7xl font-extrabold uppercase leading-none tracking-tight text-asphalt-900 sm:text-8xl">
            Page not found
          </h1>
          <p className="mt-5 max-w-lg font-body text-lg leading-relaxed text-steel">
            This page doesn't exist — it may have been moved, or the URL might
            have a typo. The calculator you're looking for is probably one of
            these:
          </p>
        </div>
      </div>

      {/* Quick links */}
      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {[
          { href: "/", label: "Asphalt Calculator", desc: "Main tonnage & cost estimator" },
          { href: "/driveway-calculator", label: "Driveway Calculator", desc: "With residential size presets" },
          { href: "/parking-lot-calculator", label: "Parking Lot Calculator", desc: "Commercial-scale estimator" },
          { href: "/cost-calculator", label: "Cost Calculator", desc: "Material & installed price range" },
          { href: "/tonnage-calculator", label: "Tonnage Calculator", desc: "Tons & truckload count" },
          { href: "/guides", label: "Guides", desc: "Formula walkthroughs & comparisons" },
          { href: "/faq", label: "FAQ", desc: "38 common questions answered" },
          { href: "/glossary", label: "Glossary", desc: "Paving terminology explained" },
        ].map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col rounded-md border border-asphalt-900/10 bg-chalk p-4 transition-colors hover:border-marking-dim"
          >
            <span className="font-display text-lg font-bold uppercase tracking-tight text-asphalt-900">
              {label}
            </span>
            <span className="mt-0.5 font-body text-sm text-steel">{desc}</span>
          </Link>
        ))}
      </div>

      <p className="mt-8 font-body text-sm text-steel">
        Still can't find what you need?{" "}
        <Link href="/contact" className="text-marking-dim underline">
          Contact us
        </Link>
        .
      </p>
    </section>
  );
}
