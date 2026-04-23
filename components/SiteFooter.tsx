export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--site-line)] bg-[var(--site-surface)]">
      <div className="site-container flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
        <p className="text-sm font-medium text-[var(--site-subtle)]">
          Invitation Brief
        </p>
        <p className="max-w-xl text-sm text-[var(--site-muted)]">
          紹介者だけが閲覧できる、超富裕層向けの思想選別ページ。
        </p>
        <p className="text-xs text-[var(--site-subtle)]">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
