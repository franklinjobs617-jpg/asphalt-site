"use client";

interface Segment {
  label: string;
  pct: number;
  color: string;
}

const SEGMENTS: Segment[] = [
  { label: "Material (asphalt mix)", pct: 35, color: "#19181A" },
  { label: "Labor & paving crew", pct: 30, color: "#F4B41A" },
  { label: "Base prep & grading", pct: 22, color: "#CC4B22" },
  { label: "Equipment & hauling", pct: 13, color: "#8A949B" },
];

export default function CostBreakdown() {
  const r = 70;
  const cx = 90;
  const cy = 90;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
      <svg width="180" height="180" viewBox="0 0 180 180" className="shrink-0 -rotate-90">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#DCD4C2" strokeWidth="22" />
        {SEGMENTS.map((seg) => {
          const dash = (seg.pct / 100) * circumference;
          const circle = (
            <circle
              key={seg.label}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth="22"
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          );
          offset += dash;
          return circle;
        })}
      </svg>
      <dl className="grid w-full grid-cols-1 gap-x-6 gap-y-3 font-body text-sm sm:grid-cols-1">
        {SEGMENTS.map((seg) => (
          <div key={seg.label} className="flex items-center justify-between gap-4 border-b border-asphalt-900/10 pb-2">
            <span className="flex items-center gap-2 text-asphalt-900">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: seg.color }} />
              {seg.label}
            </span>
            <span className="font-mono tabular text-steel">{seg.pct}%</span>
          </div>
        ))}
      </dl>
    </div>
  );
}
