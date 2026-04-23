import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--site-line)] bg-[var(--site-surface)]/88 backdrop-blur-md">
      <div className="site-container flex h-14 items-center justify-between md:h-[3.75rem]">
        <Link
          href="/"
          className="text-sm font-medium tracking-[-0.01em] text-[var(--site-muted)] transition-colors hover:text-[var(--site-fg)]"
        >
          Invitation Brief
        </Link>
        <nav
          className="flex items-center gap-3 sm:gap-6 md:gap-8"
          aria-label="主要ナビゲーション"
        >
          <a
            href="#proof"
            className="hidden text-xs font-medium text-[var(--site-subtle)] transition-colors hover:text-[var(--site-fg)] sm:inline"
          >
            Proof
          </a>
          <a
            href="#filter"
            className="hidden text-xs font-medium text-[var(--site-subtle)] transition-colors hover:text-[var(--site-fg)] sm:inline"
          >
            Filter
          </a>
          <a
            href="#contact"
            className="cta-primary inline-flex h-9 items-center justify-center rounded-xl px-5 text-sm font-medium md:px-6"
          >
            Conversation
          </a>
        </nav>
      </div>
    </header>
  );
}
