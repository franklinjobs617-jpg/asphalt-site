import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Asphalt Calculator HQ collects and uses data, including advertising and analytics cookies.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-marking-dim">Legal</span>
      <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-asphalt-900">
        Privacy Policy
      </h1>
      <p className="mt-3 font-mono text-xs text-steel">Last updated: June 30, 2026</p>

      <div className="prose-block mt-8 space-y-6 font-body leading-relaxed text-steel">
        <Block title="What this site does">
          <p>
            Asphalt Calculator HQ (&quot;we&quot;, &quot;us&quot;) provides
            free online calculators. The calculators run entirely in your
            browser — the numbers you enter (length, width, thickness,
            price, etc.) are not sent to or stored on our servers.
          </p>
        </Block>

        <Block title="Cookies & advertising">
          <p>
            We use Google AdSense to display ads on this site. Google and
            its partners may use cookies, including the DoubleClick cookie,
            to serve ads based on your prior visits to this and other
            websites. You can opt out of personalized advertising by
            visiting{" "}
            <a href="https://adssettings.google.com" className="text-marking-dim underline" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>
            , or generally at{" "}
            <a href="https://optout.aboutads.info" className="text-marking-dim underline" target="_blank" rel="noopener noreferrer">
              aboutads.info
            </a>
            .
          </p>
        </Block>

        <Block title="Analytics">
          <p>
            We use an analytics tool (such as Google Analytics) to
            understand aggregate traffic patterns — which pages are visited,
            roughly where visitors are located by country/region, and which
            device types are used. This data is anonymized/aggregated and is
            not used to identify individual visitors.
          </p>
        </Block>

        <Block title="Affiliate links">
          <p>
            Some pages may include affiliate links to retailers such as The
            Home Depot or Lowe&apos;s. If you click one of these links and
            make a purchase, we may earn a commission at no extra cost to
            you. This never affects calculator output or editorial content.
          </p>
        </Block>

        <Block title="Your choices">
          <p>
            You can disable cookies in your browser settings at any time.
            Doing so may make some site features behave differently, but the
            calculators themselves will continue to work since they don&apos;t
            depend on cookies to function.
          </p>
        </Block>

        <Block title="Contact">
          <p>
            Questions about this policy can be sent to{" "}
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
