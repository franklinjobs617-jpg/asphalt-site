import Link from "next/link";

const NAV = [
  { href: "/", label: "Calculator" },
  { href: "/tonnage-calculator", label: "Tonnage" },
  { href: "/cost-calculator", label: "Cost" },
  { href: "/driveway-calculator", label: "Driveway" },
  { href: "/guides", label: "Guides" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-asphalt-900/10 bg-chalk/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 28 28" className="shrink-0">
            <rect x="2" y="16" width="24" height="8" fill="#19181A" />
            <rect x="2" y="11" width="24" height="5" fill="#DCD4C2" />
            <rect x="2" y="6" width="24" height="5" fill="#19181A" />
            <rect x="2" y="6" width="24" height="2" fill="#F4B41A" />
          </svg>
          <span className="font-display text-xl font-bold uppercase tracking-tight text-asphalt-900">
            Asphalt Calculator <span className="text-marking-dim">HQ</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 sm:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 font-body text-sm font-medium text-steel transition-colors hover:bg-asphalt-900/5 hover:text-asphalt-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#calculator"
          className="rounded-sm bg-asphalt-900 px-4 py-2 font-body text-sm font-semibold text-chalk transition-transform hover:-translate-y-0.5 sm:hidden"
        >
          Calculate
        </Link>
      </div>
    </header>
  );
}
