// Core asphalt estimating formulas.
// Reference: standard hot-mix asphalt density ~140-150 lb/ft3 (145 lb/ft3 typical),
// 1 ton = 2000 lb. Waste factor accounts for compaction, spillage, irregular edges.

export type Units = "imperial" | "metric";

export interface CalcInput {
  length: number; // ft (or m if metric)
  width: number; // ft (or m if metric)
  thickness: number; // inches (or cm if metric)
  density: number; // lb/ft3 (or kg/m3 if metric)
  wastePct: number; // percent, e.g. 7
  pricePerTon: number; // USD
  units: Units;
}

export interface CalcResult {
  areaSqFt: number;
  volumeCuFt: number;
  volumeCuYd: number;
  weightLb: number;
  weightTons: number;
  weightTonsWithWaste: number;
  estimatedCostLow: number;
  estimatedCostHigh: number;
  truckloads: number;
}

const LB_PER_TON = 2000;
const CUFT_PER_CUYD = 27;
const TRUCK_CAPACITY_TONS = 16; // typical tandem dump truck payload

export const DEFAULTS = {
  density: 145, // lb/ft3, standard dense-graded hot mix
  wastePct: 7,
  pricePerTon: 120, // material-only national avg, editable
  thicknessDriveway: 2.5,
  thicknessCommercial: 4,
};

export function metersToFeet(m: number) {
  return m * 3.28084;
}
export function cmToInches(cm: number) {
  return cm / 2.54;
}
export function kgm3ToLbft3(kgm3: number) {
  return kgm3 * 0.062428;
}

export function calculate(input: CalcInput): CalcResult {
  let { length, width, thickness, density } = input;

  if (input.units === "metric") {
    length = metersToFeet(length);
    width = metersToFeet(width);
    thickness = cmToInches(thickness);
    density = kgm3ToLbft3(density);
  }

  const areaSqFt = Math.max(length, 0) * Math.max(width, 0);
  const thicknessFt = Math.max(thickness, 0) / 12;
  const volumeCuFt = areaSqFt * thicknessFt;
  const volumeCuYd = volumeCuFt / CUFT_PER_CUYD;
  const weightLb = volumeCuFt * Math.max(density, 0);
  const weightTons = weightLb / LB_PER_TON;
  const waste = Math.max(input.wastePct, 0) / 100;
  const weightTonsWithWaste = weightTons * (1 + waste);

  const estimatedCostLow = weightTonsWithWaste * Math.max(input.pricePerTon, 0);
  // High estimate reflects installed (labor + material) pricing, roughly 2.4-3.2x material-only cost
  const estimatedCostHigh = estimatedCostLow * 2.8;

  const truckloads = weightTonsWithWaste / TRUCK_CAPACITY_TONS;

  return {
    areaSqFt,
    volumeCuFt,
    volumeCuYd,
    weightLb,
    weightTons,
    weightTonsWithWaste,
    estimatedCostLow,
    estimatedCostHigh,
    truckloads,
  };
}

export function fmt(n: number, digits = 1): string {
  if (!isFinite(n) || isNaN(n)) return "0";
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  });
}

export function fmtCurrency(n: number): string {
  if (!isFinite(n) || isNaN(n)) return "$0";
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export const MIX_TYPES = [
  { id: "dense", label: "Standard Hot Mix (dense-graded)", density: 145 },
  { id: "open", label: "Porous / Open-graded Mix", density: 125 },
  { id: "sma", label: "Stone Mastic Asphalt (SMA)", density: 150 },
  { id: "cold", label: "Cold Mix (patch & repair)", density: 130 },
];

export const THICKNESS_GUIDE = [
  { use: "Residential driveway (cars only)", range: "2 – 2.5 in", value: 2.25 },
  { use: "Driveway with occasional trucks/RV", range: "3 – 3.5 in", value: 3.25 },
  { use: "Light-duty parking lot", range: "2.5 – 3 in", value: 2.75 },
  { use: "Commercial driveway / lot", range: "3 – 4 in", value: 3.5 },
  { use: "Heavy-duty / highway", range: "4 – 6 in", value: 5 },
  { use: "Walkway or path", range: "1.5 – 2 in", value: 1.75 },
];
