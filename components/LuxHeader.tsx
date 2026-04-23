import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#fit", label: "Fit" },
];

export default function LuxHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--lux-line)] bg-[var(--lux-bg)]/85 backdrop-blur-xl">
      <div className="lux-container flex h-[3.5rem] items-center justify-between md:h-[3.75rem]">
        <Link
          href="/"
          className="font-mono text-[9px] font-medium uppercase tracking-[0.44em] text-[var(--lux-muted)] transition-colors hover:text-[var(--lux-fg)]"
          aria-label="トップページへ"
        >
          Initial AI
        </Link>

        <nav className="flex items-center gap-7 md:gap-10" aria-label="主要ナビゲーション">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hidden text-[10px] font-medium tracking-[0.12em] text-[var(--lux-muted)] transition-colors hover:text-[var(--lux-fg)] sm:inline"
            >
              {label}
            </Link>
          ))}
          <Link
            href="https://lin.ee/oocZ0Cw9"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-ghost inline-flex h-9 min-w-[6.5rem] items-center justify-center rounded-sm px-4"
          >
            対話する
          </Link>
        </nav>
      </div>
    </header>
  );
}
