import type { Metadata } from "next";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Contact – Asphalt Calculator HQ",
  description:
    "Contact Asphalt Calculator HQ with questions, formula corrections, or feedback about our paving calculators and guides.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-asphalt-900/10 bg-concrete-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">
            Contact
          </span>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
            Get in Touch
          </h1>
          <LastUpdated date="2026-06-30" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <div className="space-y-10 font-body leading-relaxed text-steel">

          {/* PRIMARY CONTACT */}
          <div className="rounded-md border border-asphalt-900/10 bg-asphalt-900 p-6 text-chalk">
            <div className="font-mono text-xs uppercase tracking-widest text-marking">
              Email us
            </div>
            <a
              href="mailto:support@asphaltcalculatorhq.com"
              className="mt-2 block font-display text-3xl font-bold uppercase tracking-tight text-chalk hover:text-marking"
            >
              support@asphaltcalculatorhq.com
            </a>
            <p className="mt-3 font-body text-sm text-steel-light">
              We read every message and typically respond within 1–3 business
              days. There's no ticket system or phone support — just email.
            </p>
          </div>

          {/* WHAT WE CAN HELP WITH */}
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
              What we can help with
            </h2>
            <div className="mt-5 space-y-4">
              {[
                {
                  title: "Formula or calculation errors",
                  body: "If you believe one of our formulas, density figures, or cost estimates is wrong, please tell us. Include the specific page, the figure in question, and the source you're comparing it to (e.g. a supplier spec sheet, state DOT document, or NAPA guidance). We take accuracy corrections seriously and update quickly when a genuine error is found.",
                },
                {
                  title: "Calculator not working as expected",
                  body: "If a calculator is producing unexpected results, giving us the inputs you entered and the output you received helps us reproduce the issue. Include your browser and device if you can. Most calculation issues turn out to be unit-conversion surprises (inches vs. feet), but occasionally there are genuine bugs.",
                },
                {
                  title: "Content questions",
                  body: "If you have a paving or estimating question that isn't covered by our FAQ, guides, or glossary, send it in. We may not be able to answer highly project-specific engineering questions (for those, a licensed civil engineer is the right resource), but general estimating and material questions are exactly what we built this site to address.",
                },
                {
                  title: "Advertising or partnership inquiries",
                  body: "For display advertising partnerships or relevant supplier/contractor directory discussions, email us with details about your business and what you have in mind. We review all inquiries but don't respond to cold outreach for link exchanges, paid link placements, or SEO partnerships.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="border-l-2 border-marking/40 pl-4">
                  <h3 className="font-semibold text-asphalt-900">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT NOT TO EXPECT */}
          <div className="rounded-md border border-asphalt-900/10 bg-concrete-50 p-5">
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-asphalt-900">
              What we don't provide
            </h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
              <li>Contractor referrals or quotes — we're not connected to any paving company</li>
              <li>Site-specific engineering advice — use a licensed civil engineer for commercial projects or anything requiring a permit</li>
              <li>Material sourcing — contact a local batch plant or building materials supplier directly</li>
              <li>Phone or live chat support</li>
            </ul>
          </div>

          {/* RESPONSE EXPECTATION */}
          <p className="text-sm">
            This is an independent tool site maintained by a small team. We
            appreciate your patience and read every message, even if we can't
            always reply at length to every inquiry.
          </p>
        </div>
      </section>
    </>
  );
}
