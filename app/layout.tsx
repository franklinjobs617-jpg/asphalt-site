import type { Metadata } from "next";
import { Barlow_Condensed, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asphaltcalculatorhq.com"),
  title: {
    default: "Asphalt Calculator – Estimate Material & Cost for Your Project",
    template: "%s | Asphalt Calculator HQ",
  },
  description:
    "Free asphalt calculator for tonnage, cost, and driveway estimates. Enter your area and thickness to get an instant material and price estimate, built on real paving formulas.",
  openGraph: {
    title: "Asphalt Calculator HQ",
    description:
      "Estimate asphalt tonnage, volume, and cost for driveways, parking lots, and paving projects in seconds.",
    url: "https://asphaltcalculatorhq.com",
    siteName: "Asphalt Calculator HQ",
    images: [
      {
        url: "https://asphaltcalculatorhq.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Asphalt Calculator HQ — Free material and cost estimator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Calculator HQ",
    description:
      "Estimate asphalt tonnage, volume, and cost for your paving project in seconds.",
    images: ["https://asphaltcalculatorhq.com/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
