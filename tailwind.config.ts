import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        asphalt: {
          DEFAULT: "#19181A",
          900: "#0F0E10",
          800: "#19181A",
          700: "#242226",
          600: "#322F34",
        },
        concrete: {
          DEFAULT: "#EDE8DD",
          50: "#FBF9F4",
          100: "#EDE8DD",
          200: "#DCD4C2",
        },
        chalk: "#FAF8F3",
        marking: {
          DEFAULT: "#F4B41A",
          dim: "#C7920F",
        },
        cone: {
          DEFAULT: "#CC4B22",
          dim: "#A23A19",
        },
        steel: {
          DEFAULT: "#5B6770",
          light: "#8A949B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
