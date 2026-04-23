export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--site-line)] bg-[var(--site-bg)]">
      <div className="site-container flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
