import CrossSection from "./CrossSection";

const OPTIONS = [
  { inches: 2, label: "2\u2033", use: "Cars only" },
  { inches: 3, label: "3\u2033", use: "Occasional truck/RV" },
  { inches: 4, label: "4\u2033", use: "Commercial traffic" },
];

export default function ThicknessCompare() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {OPTIONS.map((opt) => (
        <div key={opt.inches} className="rounded-md border border-asphalt-900/10 bg-asphalt-900 p-4">
          <CrossSection thicknessIn={opt.inches} variant="dark" />
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-mono text-2xl font-semibold text-chalk">{opt.label}</span>
            <span className="font-body text-xs text-steel-light">{opt.use}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
