const suite = [
  { role: "CEO", label: "経営判断" },
  { role: "CFO", label: "資本・数値" },
  { role: "CMO", label: "市場・顧客" },
  { role: "CTO", label: "プロダクト・技術" },
];

export default function AIOrg() {
  return (
    <section className="border-b border-[var(--site-line)]">
      <div className="site-container site-y">
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--site-subtle)]">
            AI C-Suite
          </p>
          <h2 className="mt-10 text-center font-serif text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.3] tracking-[-0.025em] text-[var(--site-fg)] md:mt-12">
            AIで会社を作る
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-px border border-[var(--site-line)] bg-[var(--site-line)] md:mt-14 md:grid-cols-4">
            {suite.map((s) => (
              <div
                key={s.role}
                className="bg-[var(--site-bg)] px-4 py-8 text-center md:px-6 md:py-10"
              >
                <p className="font-mono text-[11px] font-medium tracking-[0.14em] text-[var(--site-fg)]">
                  {s.role}
                </p>
                <p className="mt-2 font-mono text-[9px] tracking-[0.12em] text-[var(--site-subtle)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-2xl text-center text-[clamp(1.05rem,2vw,1.25rem)] font-medium leading-[1.75] tracking-[-0.01em] text-[var(--site-fg)] md:mt-16">
            経営機能を、
            <br className="sm:hidden" />
            AIと人間で再構築する。
          </p>
          <p className="mx-auto mt-8 max-w-xl text-center text-[13px] leading-[1.95] tracking-[0.05em] text-[var(--site-muted)] md:mt-10">
            再現可能なモデルとして、組織に実装する。
          </p>
        </div>
      </div>
    </section>
  );
}
