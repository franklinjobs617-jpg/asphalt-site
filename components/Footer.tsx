import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-chalk/10 bg-asphalt-900 text-chalk">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-4">
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
              <li><Link href="/unit-converter" className="hover:text-marking">Unit Converter</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-steel-light">
              Guides
            </div>
            <ul className="mt-3 space-y-2 font-body text-sm">
              <li><Link href="/guides" className="hover:text-marking">All guides</Link></li>
              <li><Link href="/guides/how-to-calculate-asphalt-tonnage" className="hover:text-marking">How to calculate tonnage</Link></li>
              <li><Link href="/guides/asphalt-density-explained" className="hover:text-marking">Asphalt density explained</Link></li>
              <li><Link href="/guides/recycled-millings-cold-patch-calculator" className="hover:text-marking">Recycled & millings calculator</Link></li>
              <li><Link href="/guides/asphalt-vs-concrete-driveway-cost" className="hover:text-marking">Asphalt vs. concrete cost</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-steel-light">
              Company
            </div>
            <ul className="mt-3 space-y-2 font-body text-sm">
              <li><Link href="/about" className="hover:text-marking">About</Link></li>
              <li><Link href="/contact" className="hover:text-marking">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-marking">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-marking">Terms of Use</Link></li>
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
