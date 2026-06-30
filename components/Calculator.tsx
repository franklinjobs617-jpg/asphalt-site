"use client";

import { useMemo, useState } from "react";
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
}

interface CalculatorProps {
  headline: "weight" | "cost" | "volume";
  presets?: Preset[];
  showInstalledRange?: boolean;
  idAnchor?: string;
}

export default function Calculator({
  headline,
  presets,
  showInstalledRange = false,
  idAnchor = "calculator",
}: CalculatorProps) {
  const [units, setUnits] = useState<Units>("imperial");
  const [length, setLength] = useState(20);
  const [width, setWidth] = useState(16);
  const [thickness, setThickness] = useState(DEFAULTS.thicknessDriveway);
  const [mixId, setMixId] = useState(MIX_TYPES[0].id);
  const [wastePct, setWastePct] = useState(DEFAULTS.wastePct);
  const [pricePerTon, setPricePerTon] = useState(DEFAULTS.pricePerTon);

  const density = MIX_TYPES.find((m) => m.id === mixId)?.density ?? DEFAULTS.density;

  const result = useMemo(
    () =>
      calculate({
        length,
        width,
        thickness,
        density,
        wastePct,
        pricePerTon,
        units,
      }),
    [length, width, thickness, density, wastePct, pricePerTon, units]
  );

  const lengthLabel = units === "imperial" ? "ft" : "m";
  const thicknessLabel = units === "imperial" ? "in" : "cm";

  return (
    <div id={idAnchor} className="scroll-mt-24 rounded-md border border-asphalt-900/10 bg-chalk shadow-[0_1px_0_0_rgba(25,24,26,0.06)]">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        {/* INPUT SIDE */}
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

        {/* OUTPUT SIDE */}
        <div className="relative overflow-hidden bg-asphalt-900 p-6 text-chalk sm:p-8">
          <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative">
            <span className="font-mono text-xs uppercase tracking-widest text-steel-light">
              Estimated result
            </span>

            <HeadlineResult headline={headline} result={result} showInstalledRange={showInstalledRange} />

            <div className="mt-6 -mx-2">
              <CrossSection thicknessIn={units === "imperial" ? thickness : thickness / 2.54} variant="dark" />
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
            <span className="text-steel-light"> – {fmtCurrency(result.estimatedCostHigh)}</span>
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
