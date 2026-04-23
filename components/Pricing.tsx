export default function Pricing() {
  return (
    <section id="pricing" className="section-surface border-b border-[var(--site-line)]">
      <div className="site-container site-y">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--site-subtle)]">Pricing</p>
          <h2 className="mt-8 font-serif text-[clamp(1.5rem,3.4vw,2.2rem)] font-semibold tracking-[-0.03em]">
            価格を先に提示します。
          </h2>
          <div className="mt-10 section-card rounded-lg p-7 md:p-8">
            <p className="text-[13px] tracking-[0.08em] text-[var(--site-subtle)]">月額</p>
            <p className="mt-3 font-serif text-[clamp(2rem,4.6vw,3rem)] font-semibold tracking-[-0.03em] text-[var(--site-fg)]">
              30万円〜
            </p>
            <p className="mt-5 text-[14px] leading-[1.9] text-[var(--site-muted)]">
              同時支援は最大8社。毎月の新規受入は5社まで。面談は商談ではなく、適合性の選考です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
