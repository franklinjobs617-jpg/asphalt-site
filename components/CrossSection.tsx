"use client";

interface CrossSectionProps {
  thicknessIn: number; // inches, drives the height of the asphalt band
  className?: string;
  variant?: "dark" | "light";
}

// Maps a thickness in inches (typical range ~1.5–6in) to a pixel band height
// so the diagram visibly responds to the user's input without being literal.
function thicknessToPx(inches: number) {
  const clamped = Math.min(Math.max(inches, 1), 8);
  return 14 + clamped * 9; // 23px..86px
}

export default function CrossSection({
  thicknessIn,
  className = "",
  variant = "dark",
}: CrossSectionProps) {
  const bandH = thicknessToPx(thicknessIn);
  const W = 560;
  const H = 360;
  const groundY = 230;
  const baseH = 56;
  const subH = 64;
  const asphaltY = groundY - bandH;
  const baseY = groundY;
  const subY = groundY + baseH;

  const ink = variant === "dark" ? "#FAF8F3" : "#19181A";
  const dim = variant === "dark" ? "#8A949B" : "#5B6770";

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label={`Pavement cross-section showing a ${thicknessIn.toFixed(1)} inch asphalt layer over a compacted base`}
    >
      <defs>
        <pattern id="hatchBase" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke={dim} strokeWidth="1" opacity="0.5" />
        </pattern>
        <pattern id="hatchSub" width="10" height="10" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="10" stroke={dim} strokeWidth="1" opacity="0.3" />
        </pattern>
        <linearGradient id="asphaltGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#322F34" />
          <stop offset="100%" stopColor="#0F0E10" />
        </linearGradient>
      </defs>

      {/* Subgrade */}
      <rect x="60" y={subY} width="380" height={subH} fill="url(#hatchSub)" />
      <rect x="60" y={subY} width="380" height={subH} fill="none" stroke={dim} strokeOpacity="0.4" />

      {/* Aggregate base */}
      <rect x="60" y={baseY} width="380" height={baseH} fill="url(#hatchBase)" />
      <rect x="60" y={baseY} width="380" height={baseH} fill="#DCD4C2" opacity="0.12" />
      <rect x="60" y={baseY} width="380" height={baseH} fill="none" stroke={dim} strokeOpacity="0.5" />

      {/* Asphalt layer — the responsive band */}
      <rect x="60" y={asphaltY} width="380" height={bandH} fill="url(#asphaltGrad)" />
      <rect x="60" y={asphaltY} width="380" height={bandH} fill="none" stroke={ink} strokeOpacity="0.25" />
      {/* surface texture flecks */}
      {Array.from({ length: 26 }).map((_, i) => {
        const fx = 70 + ((i * 37) % 360);
        const fy = asphaltY + 4 + ((i * 13) % Math.max(bandH - 8, 4));
        return <circle key={i} cx={fx} cy={fy} r={i % 3 === 0 ? 1.4 : 0.8} fill={ink} opacity="0.12" />;
      })}

      {/* Dimension line for asphalt thickness */}
      <g stroke={ink} strokeWidth="1">
        <line x1="470" y1={asphaltY} x2="490" y2={asphaltY} />
        <line x1="470" y1={groundY} x2="490" y2={groundY} />
        <line x1="480" y1={asphaltY} x2="480" y2={groundY} markerStart="url(#tick)" markerEnd="url(#tick)" />
      </g>
      <text
        x="498"
        y={(asphaltY + groundY) / 2}
        fill={ink}
        fontFamily="var(--font-mono)"
        fontSize="13"
        dominantBaseline="middle"
      >
        {thicknessIn.toFixed(1)}&quot;
      </text>

      {/* Labels */}
      <text x="60" y={asphaltY - 10} fill={ink} fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.04em">
        ASPHALT
      </text>
      <text x="60" y={baseY + baseH / 2} fill={dim} fontFamily="var(--font-mono)" fontSize="10" dominantBaseline="middle">
        AGGREGATE BASE
      </text>
      <text x="60" y={subY + subH / 2} fill={dim} fontFamily="var(--font-mono)" fontSize="10" dominantBaseline="middle">
        SUBGRADE
      </text>

      {/* Baseline ruler ticks across the top of the asphalt for scale */}
      <g stroke={dim} strokeOpacity="0.4">
        {Array.from({ length: 17 }).map((_, i) => (
          <line key={i} x1={60 + i * 23.75} y1={asphaltY - 4} x2={60 + i * 23.75} y2={asphaltY} />
        ))}
      </g>
    </svg>
  );
}
