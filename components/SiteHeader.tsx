import Link from "next/link";

const navItems = [
  { href: "#premise", label: "Premise" },
  { href: "#thought", label: "Thought" },
  { href: "#proof", label: "Proof" },
  { href: "#filter", label: "Filter" },
  { href: "#contact", label: "Meeting" },
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--site-line)] bg-[var(--site-bg)]/85 backdrop-blur-xl">
      <div className="site-container flex h-14 items-center justify-between gap-5 md:h-[3.75rem]">
        <Link
          href="/"
          className="font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--site-muted)] transition-colors hover:text-[var(--site-fg)]"
        >
          Thought Driven Studio
        </Link>
        <nav
          className="flex items-center gap-3 sm:gap-6 md:gap-8"
          aria-label="主要ナビゲーション"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] font-medium uppercase tracking-[0.08em] text-[var(--site-subtle)] transition-colors hover:text-[var(--site-fg)] sm:text-[11px]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
