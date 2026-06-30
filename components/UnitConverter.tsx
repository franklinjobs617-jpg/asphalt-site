"use client";

import { useMemo, useState } from "react";
import { fmt } from "@/lib/calc";

const SQFT_PER = { sqft: 1, sqyd: 9, acre: 43560, sqm: 10.7639 };
type AreaUnit = keyof typeof SQFT_PER;

export default function UnitConverter() {
  const [areaValue, setAreaValue] = useState(1000);
  const [areaUnit, setAreaUnit] = useState<AreaUnit>("sqft");

  const sqft = areaValue * SQFT_PER[areaUnit];

  const [cuYd, setCuYd] = useState(10);
  const [density, setDensity] = useState(145);
  const tonsFromYd = useMemo(() => (cuYd * 27 * density) / 2000, [cuYd, density]);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* AREA CONVERTER */}
      <div className="rounded-md border border-asphalt-900/10 bg-chalk p-6">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-asphalt-900">
          Area converter
        </h3>
        <div className="mt-4 flex gap-3">
          <input
            type="number"
            value={areaValue}
            onChange={(e) => setAreaValue(parseFloat(e.target.value) || 0)}
            className="num-input"
          />
          <select
            value={areaUnit}
            onChange={(e) => setAreaUnit(e.target.value as AreaUnit)}
            className="num-input w-40"
          >
            <option value="sqft">sq ft</option>
            <option value="sqyd">sq yd</option>
            <option value="acre">acre</option>
            <option value="sqm">m²</option>
          </select>
        </div>
        <dl className="mt-5 space-y-2 border-t border-asphalt-900/10 pt-4 font-mono text-sm tabular text-asphalt-900">
          <Row label="Square feet" value={`${fmt(sqft, 1)} ft²`} />
          <Row label="Square yards" value={`${fmt(sqft / 9, 2)} yd²`} />
          <Row label="Acres" value={`${fmt(sqft / 43560, 4)} ac`} />
          <Row label="Square meters" value={`${fmt(sqft / 10.7639, 1)} m²`} />
        </dl>
      </div>

      {/* VOLUME TO WEIGHT CONVERTER */}
      <div className="rounded-md border border-asphalt-900/10 bg-chalk p-6">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-asphalt-900">
          Cubic yards → tons
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <label className="block">
            <span className="font-mono text-xs uppercase tracking-widest text-steel">Cubic yards</span>
            <input
              type="number"
              value={cuYd}
              onChange={(e) => setCuYd(parseFloat(e.target.value) || 0)}
              className="num-input mt-1.5"
            />
          </label>
          <label className="block">
            <span className="font-mono text-xs uppercase tracking-widest text-steel">Density (lb/ft³)</span>
            <input
              type="number"
              value={density}
              onChange={(e) => setDensity(parseFloat(e.target.value) || 0)}
              className="num-input mt-1.5"
            />
          </label>
        </div>
        <dl className="mt-5 space-y-2 border-t border-asphalt-900/10 pt-4 font-mono text-sm tabular text-asphalt-900">
          <Row label="Cubic feet" value={`${fmt(cuYd * 27, 1)} ft³`} />
          <Row label="Weight" value={`${fmt(tonsFromYd * 2000, 0)} lb`} />
          <Row label="Tons" value={`${fmt(tonsFromYd, 2)} tons`} />
        </dl>
        <p className="mt-3 font-body text-xs text-steel">
          Default density is standard hot mix (145 lb/ft³). Adjust if your
          supplier quotes a different mix.
        </p>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between font-body">
      <span className="text-steel">{label}</span>
      <span className="font-mono">{value}</span>
    </div>
  );
}
