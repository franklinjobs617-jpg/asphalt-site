import { MIX_TYPES } from "@/lib/calc";

export default function DensityChart() {
  const max = Math.max(...MIX_TYPES.map((m) => m.density));
  return (
    <div className="space-y-4">
      {MIX_TYPES.map((m) => (
        <div key={m.id}>
          <div className="flex items-baseline justify-between font-body text-sm text-asphalt-900">
            <span>{m.label}</span>
            <span className="font-mono tabular text-steel">{m.density} lb/ft³</span>
          </div>
          <div className="mt-1 h-3 w-full rounded-sm bg-concrete-200">
            <div
              className="h-3 rounded-sm bg-marking"
              style={{ width: `${(m.density / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
