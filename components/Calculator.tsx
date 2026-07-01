"use client";

import { useMemo, useState, useCallback } from "react";
import CrossSection from "./CrossSection";
import {
  calculate,
  DEFAULTS,
  fmt,
  fmtCurrency,
  MIX_TYPES,
  Units,
} from "@/lib/calc";

interface Preset {
  label: string;
  length: number;
  width: number;
  thickness?: number;
}

interface CalculatorProps {
  headline: "weight" | "cost" | "volume";
  presets?: Preset[];
  showInstalledRange?: boolean;
  idAnchor?: string;
  defaultMixId?: string;
  defaultThickness?: number;
}

export default function Calculator({
  headline,
  presets,
  showInstalledRange = false,
  idAnchor = "calculator",
  defaultMixId = MIX_TYPES[0].id,
  defaultThickness = DEFAULTS.thicknessDriveway,
}: CalculatorProps) {
  const [units, setUnits] = useState<Units>("imperial");
  const [length, setLength] = useState(20);
  const [width, setWidth] = useState(16);
  const [thickness, setThickness] = useState(defaultThickness);
  const [mixId, setMixId] = useState(defaultMixId);
  const [wastePct, setWastePct] = useState(DEFAULTS.wastePct);
  const [pricePerTon, setPricePerTon] = useState(DEFAULTS.pricePerTon);
  const [copied, setCopied] = useState(false);

  const density = MIX_TYPES.find((m) => m.id === mixId)?.density ?? DEFAULTS.density;
  const mixLabel = MIX_TYPES.find((m) => m.id === mixId)?.label ?? "Hot Mix";

  const result = useMemo(
    () =>
      calculate({ length, width, thickness, density, wastePct, pricePerTon, units }),
    [length, width, thickness, density, wastePct, pricePerTon, units]
  );

  const lengthLabel = units === "imperial" ? "ft" : "m";
  const thicknessLabel = units === "imperial" ? "in" : "cm";

  const handleCopy = useCallback(() => {
    const thickUnit = units === "imperial" ? "in" : "cm";
    const areaUnit = units === "imperial" ? "ft²" : "m²";
    const text = [
      `Asphalt Estimate — AsphaltCalculatorHQ.com`,
      ``,
      `Project: ${length} × ${width} ${lengthLabel}, ${thickness.toFixed(1)} ${thickUnit} thick`,
      `Mix: ${mixLabel}`,
      ``,
      `Area:           ${fmt(result.areaSqFt)} ${areaUnit}`,
      `Volume:         ${fmt(result.volumeCuYd)} yd³`,
      `Weight (net):   ${fmt(result.weightTons)} tons`,
      `+${wastePct}% waste:     ${fmt(result.weightTonsWithWaste)} tons`,
      `Truckloads:     ≈ ${fmt(result.truckloads, 1)} loads (16-ton tandem)`,
      `Material cost:  ${fmtCurrency(result.estimatedCostLow)} (at $${pricePerTon}/ton)`,
      showInstalledRange
        ? `Installed est.: ${fmtCurrency(result.estimatedCostLow)} – ${fmtCurrency(result.estimatedCostHigh)}`
        : "",
      ``,
      `Note: Estimates only. Confirm with your asphalt supplier before ordering.`,
    ]
      .filter((l) => l !== undefined)
      .join("\n");

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [result, length, width, thickness, wastePct, pricePerTon, units, mixLabel, showInstalledRange, lengthLabel]);

  return (
    <div
      id={idAnchor}
      className="scroll-mt-24 rounded-md border border-asphalt-900/10 bg-chalk shadow-[0_1px_0_0_rgba(25,24,26,0.06)]"
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        {/* ── INPUT ── */}
        <div className="border-b border-asphalt-900/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-asphalt-900">
              Project Dimensions
            </h2>
            <div className="flex rounded-sm border border-asphalt-900/15 font-mono text-xs">
              {(["imperial", "metric"] as Units[]).map((u) => (
                <button
                  key={u}
                  onClick={() => setUnits(u)}
                  className={`px-2.5 py-1.5 uppercase transition-colors ${
                    units === u
                      ? "bg-asphalt-900 text-chalk"
                      : "bg-transparent text-steel hover:bg-asphalt-900/5"
                  }`}
                >
                  {u === "imperial" ? "ft / in" : "m / cm"}
                </button>
              ))}
            </div>
          </div>

          {presets && presets.length > 0 && (
            <div className="mt-5">
              <span className="font-mono text-xs uppercase tracking-widest text-steel">
                Quick presets
              </span>
              <div className="mt-2 flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => {
                      setLength(p.length);
                      setWidth(p.width);
                      if (p.thickness) setThickness(p.thickness);
                    }}
                    className="rounded-sm border border-asphalt-900/15 bg-concrete-50 px-3 py-1.5 font-body text-sm text-asphalt-900 transition-colors hover:border-marking-dim hover:bg-marking/10"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Field label={`Length (${lengthLabel})`}>
              <input
                type="number"
                min={0}
                step="0.1"
                value={length}
                onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                className="num-input"
              />
            </Field>
            <Field label={`Width (${lengthLabel})`}>
              <input
                type="number"
                min={0}
                step="0.1"
                value={width}
                onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                className="num-input"
              />
            </Field>
          </div>

          <div className="mt-5">
            <div className="flex items-baseline justify-between">
              <label className="font-mono text-xs uppercase tracking-widest text-steel">
                Thickness
              </label>
              <span className="font-mono text-sm tabular text-asphalt-900">
                {thickness.toFixed(1)} {thicknessLabel}
              </span>
            </div>
            <input
              type="range"
              min={units === "imperial" ? 1 : 2.5}
              max={units === "imperial" ? 8 : 20}
              step="0.25"
              value={thickness}
              onChange={(e) => setThickness(parseFloat(e.target.value))}
              className="slider mt-2"
            />
            <div className="mt-1 flex justify-between font-mono text-[11px] text-steel-light">
              <span>{units === "imperial" ? "1 in" : "2.5 cm"}</span>
              <span>{units === "imperial" ? "8 in" : "20 cm"}</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <Field label="Asphalt mix type">
              <select
                value={mixId}
                onChange={(e) => setMixId(e.target.value)}
                className="num-input"
              >
                {MIX_TYPES.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Waste allowance (%)">
              <input
                type="number"
                min={0}
                max={30}
                value={wastePct}
                onChange={(e) => setWastePct(parseFloat(e.target.value) || 0)}
                className="num-input"
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Material price ($ / ton)">
              <input
                type="number"
                min={0}
                value={pricePerTon}
                onChange={(e) => setPricePerTon(parseFloat(e.target.value) || 0)}
                className="num-input"
              />
            </Field>
            <p className="mt-1.5 font-body text-xs text-steel">
              National average is roughly $100–$200/ton for hot mix material.
              Adjust to match a local supplier quote for a more precise number.
            </p>
          </div>
        </div>

        {/* ── OUTPUT ── */}
        <div className="relative overflow-hidden bg-asphalt-900 p-6 text-chalk sm:p-8">
          <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-steel-light">
                Estimated result
              </span>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1.5 rounded-sm border px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-all ${
                  copied
                    ? "border-marking/50 bg-marking/20 text-marking"
                    : "border-chalk/20 text-steel-light hover:border-chalk/40 hover:text-chalk"
                }`}
                title="Copy estimate to clipboard"
              >
                {copied ? (
                  <>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="4" y="1" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M1 4h2v6a1 1 0 001 1h4v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>

            <HeadlineResult
              headline={headline}
              result={result}
              showInstalledRange={showInstalledRange}
            />

            <div className="mt-6 -mx-2">
              <CrossSection
                thicknessIn={units === "imperial" ? thickness : thickness / 2.54}
                variant="dark"
              />
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-chalk/10 pt-5 font-body text-sm">
              <Stat label="Area" value={`${fmt(result.areaSqFt)} ft²`} />
              <Stat label="Volume" value={`${fmt(result.volumeCuYd)} yd³`} />
              <Stat label="Weight" value={`${fmt(result.weightTons)} tons`} />
              <Stat label="With waste" value={`${fmt(result.weightTonsWithWaste)} tons`} />
              <Stat label="Truckloads" value={`≈ ${fmt(result.truckloads, 1)}`} hint="16-ton tandem dump" />
              <Stat label="Material cost" value={fmtCurrency(result.estimatedCostLow)} />
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeadlineResult({
  headline,
  result,
  showInstalledRange,
}: {
  headline: "weight" | "cost" | "volume";
  result: ReturnType<typeof calculate>;
  showInstalledRange: boolean;
}) {
  if (headline === "weight") {
    return (
      <div className="mt-2">
        <div className="font-mono text-6xl font-semibold tabular leading-none sm:text-7xl">
          {fmt(result.weightTonsWithWaste)}
        </div>
        <div className="mt-1 font-display text-xl uppercase tracking-wide text-marking">
          tons of asphalt
        </div>
      </div>
    );
  }
  if (headline === "cost") {
    return (
      <div className="mt-2">
        <div className="font-mono text-5xl font-semibold tabular leading-none sm:text-6xl">
          {fmtCurrency(result.estimatedCostLow)}
          {showInstalledRange && (
            <span className="text-steel-light">
              {" "}– {fmtCurrency(result.estimatedCostHigh)}
            </span>
          )}
        </div>
        <div className="mt-1 font-display text-xl uppercase tracking-wide text-marking">
          {showInstalledRange ? "material to installed" : "estimated material cost"}
        </div>
      </div>
    );
  }
  return (
    <div className="mt-2">
      <div className="font-mono text-6xl font-semibold tabular leading-none sm:text-7xl">
        {fmt(result.volumeCuYd)}
      </div>
      <div className="mt-1 font-display text-xl uppercase tracking-wide text-marking">
        cubic yards
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-widest text-steel">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-steel-light">{label}</div>
      <div className="mt-0.5 font-mono text-lg tabular">{value}</div>
      {hint && <div className="font-body text-[11px] text-steel-light">{hint}</div>}
    </div>
  );
}
