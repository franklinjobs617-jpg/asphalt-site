import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#19181A",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 32 32">
          <rect x="5" y="19" width="22" height="7" fill="#0F0E10" />
          <rect x="5" y="13" width="22" height="5" fill="#DCD4C2" opacity="0.85" />
          <rect x="5" y="7" width="22" height="5" fill="#322F34" />
          <rect x="5" y="7" width="22" height="2" fill="#F4B41A" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
