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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--site-line)] bg-[var(--site-surface)]/88 backdrop-blur-md">
      <div className="site-container flex h-14 items-center justify-between gap-5 md:h-[3.75rem]">
        <Link
          href="/"
          className="text-sm font-medium tracking-[-0.01em] text-[var(--site-muted)] transition-colors hover:text-[var(--site-fg)]"
        >
          Initial AI
        </Link>
        <nav
          className="flex items-center gap-3 sm:gap-6 md:gap-8"
          aria-label="主要ナビゲーション"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-[var(--site-subtle)] transition-colors hover:text-[var(--site-fg)] sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
