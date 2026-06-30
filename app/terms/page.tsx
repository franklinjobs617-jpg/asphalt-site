import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use & Disclaimer",
  description: "Terms for using Asphalt Calculator HQ's free calculators and content, including our estimate disclaimer.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">Legal</span>
      <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
        Terms of Use
      </h1>
      <p className="mt-3 font-mono text-xs text-steel">Last updated: June 30, 2026</p>

      <div className="mt-8 space-y-6 font-body leading-relaxed text-steel">
        <Block title="Estimates only — not engineering or financial advice">
          <p>
            Every figure produced by this site&apos;s calculators —
            tonnage, volume, cost, or otherwise — is a planning-stage
            estimate based on standard formulas and typical material
            densities. It is <strong>not</strong> a structural engineering
            calculation, a binding quote, or a substitute for advice from a
            licensed contractor, paving engineer, or your local building
            authority. Actual material needs and project cost vary based on
            soil conditions, drainage, regional pricing, supplier mix
            design, and other site-specific factors we cannot account for.
          </p>
        </Block>

        <Block title="No liability for project outcomes">
          <p>
            We make a good-faith effort to keep formulas and reference data
            accurate, but we provide this site &quot;as is&quot; without
            warranty of any kind. We are not liable for material shortages,
            cost overruns, project delays, or any other outcome resulting
            from reliance on these calculators.
          </p>
        </Block>

        <Block title="Acceptable use">
          <p>
            You may use this site for personal or professional project
            planning. You may not scrape, republish, or redistribute our
            calculators, copy, or page content without permission, or use
            automated tools to overload our servers.
          </p>
        </Block>

        <Block title="Third-party links">
          <p>
            This site contains links to third-party retailers, suppliers,
            and reference sources. We don&apos;t control and aren&apos;t
            responsible for the content, accuracy, or practices of those
            external sites.
          </p>
        </Block>

        <Block title="Changes to these terms">
          <p>
            We may update these terms as the site changes. Continued use of
            the site after an update means you accept the revised terms.
          </p>
        </Block>

        <Block title="Contact">
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:support@asphaltcalculatorhq.com" className="text-marking-dim underline">
              support@asphaltcalculatorhq.com
            </a>
            .
          </p>
        </Block>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-asphalt-900">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
}
