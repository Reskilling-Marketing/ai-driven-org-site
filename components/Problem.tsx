export default function Problem() {
  return (
    <section className="section-surface border-b border-[var(--site-line)]">
      <div className="site-container site-y">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--site-subtle)]">
            Problem
          </p>
          <h2 className="mt-8 font-serif text-[clamp(1.5rem,3.5vw,2.2rem)] font-semibold tracking-[-0.03em]">
            AI導入で、会社は変わらない。
          </h2>
          <ul className="mt-10 space-y-4">
            <li className="section-card rounded-lg p-5 text-[15px] leading-[1.9] text-[var(--site-muted)]">
              人手不足のまま、管理工数だけ増える。
            </li>
            <li className="section-card rounded-lg p-5 text-[15px] leading-[1.9] text-[var(--site-muted)]">
              属人化が進み、担当者が抜けると数字が止まる。
            </li>
            <li className="section-card rounded-lg p-5 text-[15px] leading-[1.9] text-[var(--site-muted)]">
              意思決定が遅れ、広告も採用も後手に回る。
            </li>
          </ul>
          <p className="mt-8 text-[15px] tracking-[0.03em] text-[var(--site-fg)]">
            これはツール不足ではなく、経営構造の欠陥です。
          </p>
          <div className="mt-10">
            <a href="#cta" className="text-[13px] font-semibold tracking-[0.08em] text-[var(--site-accent)]">
              適合性を確認する →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
