import Link from "next/link";

export default function LuxStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--lux-line)] bg-[var(--lux-bg)]/90 px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-4 backdrop-blur-xl md:hidden">
      <Link
        href="https://lin.ee/oocZ0Cw9"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-solid flex h-[3.25rem] w-full items-center justify-center rounded-sm shadow-[0_0_24px_rgba(181,143,96,0.1)]"
      >
        対話を始める →
      </Link>
    </div>
  );
}
