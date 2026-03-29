import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--site-line)] bg-[var(--site-bg)]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--site-bg)]/65">
      <div className="site-container flex h-14 items-center justify-between md:h-[3.75rem]">
        <Link
          href="/"
          className="font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--site-subtle)] transition-colors hover:text-[var(--site-fg)]"
        >
          AI org build
        </Link>
        <nav
          className="flex items-center gap-6 md:gap-10"
          aria-label="主要ナビゲーション"
        >
          <a
            href="#proof"
            className="hidden text-[11px] font-medium tracking-[0.08em] text-[var(--site-subtle)] transition-colors hover:text-[var(--site-fg)] sm:inline"
          >
            実績
          </a>
          <a
            href="#services"
            className="hidden text-[11px] font-medium tracking-[0.08em] text-[var(--site-subtle)] transition-colors hover:text-[var(--site-fg)] sm:inline"
          >
            サービス
          </a>
          <a
            href="#contact"
            className="inline-flex h-9 items-center justify-center bg-[var(--site-fg)] px-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--site-bg)] transition-opacity hover:opacity-[0.88] md:h-9 md:px-6"
          >
            無料相談
          </a>
        </nav>
      </div>
    </header>
  );
}
