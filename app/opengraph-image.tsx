import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Asphalt Calculator HQ — Free material & cost estimator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#19181A",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blueprint grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(250,248,243,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(250,248,243,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Pavement cross-section stripes — left accent */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 12, display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1, backgroundColor: "#0F0E10" }} />
          <div style={{ height: 48, backgroundColor: "#DCD4C2", opacity: 0.7 }} />
          <div style={{ height: 24, backgroundColor: "#F4B41A" }} />
          <div style={{ flex: 2, backgroundColor: "#19181A" }} />
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", paddingLeft: 80, paddingRight: 80 }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F4B41A",
              marginBottom: 20,
            }}
          >
            FREE TOOL — NO SIGN-UP
          </div>

          {/* Site name */}
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              color: "#FAF8F3",
              marginBottom: 28,
            }}
          >
            ASPHALT
            <br />
            CALCULATOR HQ
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 26,
              color: "#8A949B",
              lineHeight: 1.4,
              maxWidth: 640,
            }}
          >
            Estimate tonnage, volume &amp; cost for driveways, parking lots, and paving projects — built on real paving formulas.
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 48, marginTop: 44 }}>
            {[
              { n: "5", label: "Calculators" },
              { n: "27", label: "Pages" },
              { n: "Free", label: "Always" },
            ].map(({ n, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: "monospace", fontSize: 40, fontWeight: 600, color: "#FAF8F3" }}>{n}</span>
                <span style={{ fontFamily: "monospace", fontSize: 14, letterSpacing: "0.15em", textTransform: "uppercase", color: "#5B6770" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Domain — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 48,
            fontFamily: "monospace",
            fontSize: 18,
            color: "#5B6770",
          }}
        >
          asphaltcalculatorhq.com
        </div>
      </div>
    ),
    { ...size }
  );
}
