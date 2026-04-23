import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "https://lin.ee/oocZ0Cw9", label: "Contact" },
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#fit", label: "Fit" },
];

export default function LuxFooter() {
  return (
    <footer className="border-t border-[var(--lux-line)] bg-[var(--lux-bg)]">
      <div className="lux-container flex flex-col gap-10 py-12 md:flex-row md:items-end md:justify-between md:py-14">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.44em] text-[var(--lux-gold)]">
            Initial AI
          </p>
          <p className="mt-4 max-w-[22rem] text-[12px] leading-[1.9] tracking-[0.04em] text-[var(--lux-muted)]">
            意思決定の構造を設計する。
            <br />
            少数の経営者と、長期で伴走する。
          </p>
        </div>

        <nav className="flex flex-col gap-3 sm:flex-row sm:gap-8" aria-label="フッターナビゲーション">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-[10px] tracking-[0.18em] text-[var(--lux-subtle)] transition-colors hover:text-[var(--lux-muted)]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[var(--lux-subtle)]">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
