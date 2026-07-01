"use client";

import { useState } from "react";

export default function SealcoatCalc() {
  const [area, setArea] = useState(400);
  const [coverage, setCoverage] = useState(65);
  const [coats, setCoats] = useState(2);
  const [pricePerGal, setPricePerGal] = useState(7);

  const gallons = Math.ceil((area / coverage) * coats * 1.1);
  const cost = gallons * pricePerGal;

  return (
    <div className="rounded-md border border-asphalt-900/10 bg-chalk">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="border-b border-asphalt-900/10 p-6 lg:border-b-0 lg:border-r">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
            Sealcoat Estimate
          </h2>
          <div className="mt-5 space-y-4">
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-widest text-steel">
                Driveway area (sq ft)
              </span>
              <input
                type="number"
                min={0}
                value={area}
                onChange={(e) => setArea(parseFloat(e.target.value) || 0)}
                className="num-input mt-1.5"
              />
            </label>
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-widest text-steel">
                Coverage rate (sq ft / gallon / coat)
              </span>
              <input
                type="number"
                min={1}
                value={coverage}
                onChange={(e) => setCoverage(parseFloat(e.target.value) || 65)}
                className="num-input mt-1.5"
              />
              <span className="mt-1 block font-body text-xs text-steel">
                50–60 for rough/pitted surfaces; 65–80 for smooth
              </span>
            </label>
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-widest text-steel">
                Number of coats
              </span>
              <select
                value={coats}
                onChange={(e) => setCoats(Number(e.target.value))}
                className="num-input mt-1.5"
              >
                <option value={1}>1 coat</option>
                <option value={2}>2 coats (recommended)</option>
                <option value={3}>3 coats (heavy traffic)</option>
              </select>
            </label>
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-widest text-steel">
                Price per gallon ($)
              </span>
              <input
                type="number"
                min={0}
                value={pricePerGal}
                onChange={(e) =>
                  setPricePerGal(parseFloat(e.target.value) || 7)
                }
                className="num-input mt-1.5"
              />
            </label>
          </div>
        </div>
        <div className="relative overflow-hidden bg-asphalt-900 p-6 text-chalk">
          <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative">
            <span className="font-mono text-xs uppercase tracking-widest text-steel-light">
              Result
            </span>
            <div className="mt-2 font-mono text-7xl font-semibold tabular leading-none">
              {gallons}
            </div>
            <div className="mt-1 font-display text-xl uppercase tracking-wide text-marking">
              gallons needed
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-chalk/10 pt-5 font-body text-sm">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-steel-light">Area</div>
                <div className="mt-0.5 font-mono text-lg tabular">
                  {area.toLocaleString()} ft²
                </div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-steel-light">Coats</div>
                <div className="mt-0.5 font-mono text-lg tabular">{coats}</div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-steel-light">
                  +10% waste
                </div>
                <div className="mt-0.5 font-mono text-lg tabular">included</div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-steel-light">
                  Material est.
                </div>
                <div className="mt-0.5 font-mono text-lg tabular text-marking">
                  ${cost.toLocaleString()}
                </div>
              </div>
            </dl>
            <p className="mt-4 font-body text-xs text-steel-light">
              Material only. Contractor-installed sealcoating typically runs
              $0.15–$0.35/sq ft for labor + product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
