import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Asphalt Calculator HQ — corrections, regional pricing tips, and general questions.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-20">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">Get in touch</span>
      <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
        Contact
      </h1>
      <p className="mt-5 font-body leading-relaxed text-steel">
        Found a calculation that looks off? Have better regional pricing
        data than our defaults? Work in paving and think one of our
        thickness recommendations needs a caveat? We read every message.
      </p>

      <div className="mt-8 rounded-md border border-asphalt-900/10 bg-concrete-50 p-6">
        <span className="font-mono text-xs uppercase tracking-widest text-steel">Email</span>
        <a
          href="mailto:support@asphaltcalculatorhq.com"
          className="mt-1 block font-display text-2xl font-bold text-asphalt-900 underline decoration-marking decoration-2 underline-offset-4"
        >
          support@asphaltcalculatorhq.com
        </a>
      </div>

      <div className="mt-8 space-y-3 font-body text-sm leading-relaxed text-steel">
        <p>A few things that help us help you faster:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Which page or calculator you&apos;re referring to</li>
          <li>What input values produced the result you&apos;re questioning</li>
          <li>Your region, if it&apos;s a pricing-related note — costs vary a lot by state</li>
        </ul>
      </div>
    </section>
  );
}
