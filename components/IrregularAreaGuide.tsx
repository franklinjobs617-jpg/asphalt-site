export default function IrregularAreaGuide() {
  return (
    <div className="rounded-md border border-asphalt-900/10 bg-chalk">
      <div className="border-b border-asphalt-900/10 px-6 py-4">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-asphalt-900">
          Measuring irregular or L-shaped areas
        </h3>
        <p className="mt-1 font-body text-sm text-steel">
          Split any non-rectangular surface into simple rectangles, calculate
          each one, then add the totals.
        </p>
      </div>

      <div className="grid gap-0 divide-y divide-asphalt-900/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {/* ── L-SHAPE ── */}
        <ShapeCard
          label="L-shaped driveway"
          diagram={
            <svg viewBox="0 0 160 140" className="w-full max-w-[200px]">
              {/* shape outline */}
              <polygon
                points="20,20 90,20 90,70 140,70 140,120 20,120"
                fill="#DCD4C2"
                stroke="#19181A"
                strokeWidth="1.5"
              />
              {/* rectangle A */}
              <rect x="20" y="20" width="70" height="100" fill="#F4B41A" fillOpacity="0.18" />
              <text x="55" y="72" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#C7920F" fontWeight="bold">A</text>
              {/* rectangle B */}
              <rect x="90" y="70" width="50" height="50" fill="#322F34" fillOpacity="0.14" />
              <text x="115" y="97" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#5B6770" fontWeight="bold">B</text>
              {/* dimension labels */}
              <text x="55" y="135" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#5B6770">70 ft</text>
              <text x="115" y="135" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#5B6770">50 ft</text>
              <text x="8" y="72" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#5B6770" transform="rotate(-90,8,72)">100 ft</text>
              <text x="152" y="97" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#5B6770" transform="rotate(90,152,97)">50 ft</text>
            </svg>
          }
          steps={[
            "Split into rectangle A (main run) and rectangle B (side extension)",
            "A: 70 × 100 = 7,000 ft²",
            "B: 50 × 50 = 2,500 ft²",
            "Total: 9,500 ft² → enter each into the calculator and add results",
          ]}
        />

        {/* ── T-SHAPE / WIDENING ── */}
        <ShapeCard
          label="Widening / apron + run"
          diagram={
            <svg viewBox="0 0 160 140" className="w-full max-w-[200px]">
              {/* narrow run */}
              <rect x="55" y="20" width="50" height="70" fill="#F4B41A" fillOpacity="0.18" stroke="#19181A" strokeWidth="1.5" />
              <text x="80" y="58" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#C7920F" fontWeight="bold">A</text>
              {/* wide apron */}
              <rect x="20" y="90" width="120" height="30" fill="#322F34" fillOpacity="0.14" stroke="#19181A" strokeWidth="1.5" />
              <text x="80" y="109" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#5B6770" fontWeight="bold">B</text>
              {/* labels */}
              <text x="80" y="135" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#5B6770">120 ft wide</text>
              <text x="43" y="58" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#5B6770" transform="rotate(-90,43,58)">70 ft</text>
            </svg>
          }
          steps={[
            "Treat the narrow driveway run as rectangle A",
            "Treat the wide apron or street connection as rectangle B",
            "A: 50 × 70 = 3,500 ft²",
            "B: 120 × 30 = 3,600 ft²",
            "Total: 7,100 ft² — add both calculator results together",
          ]}
        />

        {/* ── ROUNDED CORNER ── */}
        <ShapeCard
          label="Lot with rounded corners"
          diagram={
            <svg viewBox="0 0 160 140" className="w-full max-w-[200px]">
              {/* main rectangle */}
              <rect x="20" y="20" width="120" height="95" rx="14" ry="14" fill="#DCD4C2" stroke="#19181A" strokeWidth="1.5" />
              {/* inner inscribed rect */}
              <rect x="34" y="34" width="92" height="67" fill="none" stroke="#F4B41A" strokeWidth="1.2" strokeDasharray="4 2" />
              <text x="80" y="71" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#C7920F">measure</text>
              <text x="80" y="83" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#C7920F">straight sides</text>
              {/* labels */}
              <text x="80" y="130" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#5B6770">measure L × W</text>
              <text x="80" y="14" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#5B6770">ignore curves — add 7% waste</text>
            </svg>
          }
          steps={[
            "Measure the straight-line length and width, ignoring curves",
            "Calculate as a full rectangle — the rounded corners slightly overestimate",
            "The overage is covered by (or is less than) your waste allowance",
            "For tighter curves, bump waste to 8–10% instead of the standard 5–7%",
          ]}
        />
      </div>

      <div className="border-t border-asphalt-900/10 bg-concrete-50 px-6 py-4">
        <p className="font-body text-sm text-steel">
          <strong className="text-asphalt-900">General rule:</strong> always split
          at corners where direction changes. Add a rectangle for every paved
          section that doesn't share the same two dimensions. When in doubt,
          overestimate slightly and add 8–10% waste — surplus asphalt from a
          single delivery is far cheaper than a second truck call.
        </p>
      </div>
    </div>
  );
}

function ShapeCard({
  label,
  diagram,
  steps,
}: {
  label: string;
  diagram: React.ReactNode;
  steps: string[];
}) {
  return (
    <div className="flex flex-col gap-4 p-5">
      <span className="font-mono text-xs uppercase tracking-widest text-marking-dim">{label}</span>
      <div className="flex justify-center">{diagram}</div>
      <ol className="list-none space-y-1.5">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-2 font-body text-xs leading-relaxed text-steel">
            <span className="mt-0.5 shrink-0 font-mono text-[10px] text-marking-dim">
              {String(i + 1).padStart(2, "0")}
            </span>
            {s}
          </li>
        ))}
      </ol>
    </div>
  );
}
