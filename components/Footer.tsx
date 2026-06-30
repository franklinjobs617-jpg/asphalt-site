import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-chalk/10 bg-asphalt-900 text-chalk">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="font-display text-lg font-bold uppercase tracking-tight">
              Asphalt Calculator <span className="text-marking">HQ</span>
            </div>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-steel-light">
              Free estimating tools for driveways, parking lots, and paving
              projects — built on standard hot-mix asphalt formulas, not
              guesswork.
            </p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-steel-light">
              Calculators
            </div>
            <ul className="mt-3 space-y-2 font-body text-sm">
              <li><Link href="/" className="hover:text-marking">Asphalt Calculator</Link></li>
              <li><Link href="/tonnage-calculator" className="hover:text-marking">Tonnage Calculator</Link></li>
              <li><Link href="/cost-calculator" className="hover:text-marking">Cost Calculator</Link></li>
              <li><Link href="/driveway-calculator" className="hover:text-marking">Driveway Calculator</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-steel-light">
              Reference
            </div>
            <ul className="mt-3 space-y-2 font-body text-sm text-steel-light">
              <li>Standard hot mix density: 145 lb/ft³</li>
              <li>1 cubic yard ≈ 2.0 tons</li>
              <li>Recommended waste allowance: 5–10%</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-chalk/10 pt-6 font-body text-xs text-steel-light sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Asphalt Calculator HQ. Estimates only — confirm quantities and pricing with a licensed paving contractor.</p>
          <p>Not affiliated with any asphalt supplier, paving company, or contractor named on this site.</p>
        </div>
      </div>
    </footer>
  );
}
