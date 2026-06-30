import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Asphalt Calculator HQ",
    short_name: "Asphalt Calc",
    description:
      "Free calculators for asphalt tonnage, cost, and driveway material estimates.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F3",
    theme_color: "#19181A",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
