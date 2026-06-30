import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://asphaltcalculatorhq.com";
  const routes = [
    "",
    "/tonnage-calculator",
    "/cost-calculator",
    "/driveway-calculator",
    "/unit-converter",
    "/guides",
    "/guides/how-to-calculate-asphalt-tonnage",
    "/guides/asphalt-density-explained",
    "/guides/recycled-millings-cold-patch-calculator",
    "/guides/asphalt-vs-concrete-driveway-cost",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
