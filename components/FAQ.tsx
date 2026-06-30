"use client";

import { useState } from "react";

export interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items, title = "Frequently asked questions" }: { items: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt-900">
        {title}
      </h2>
      <div className="mt-6 divide-y divide-asphalt-900/10 border-y border-asphalt-900/10">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-body text-base font-semibold text-asphalt-900">
                  {item.q}
                </span>
                <span
                  className={`shrink-0 font-mono text-xl text-marking-dim transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="pb-5 pr-8 font-body text-sm leading-relaxed text-steel">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((item) => ({
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
    </div>
  );
}
