const fit = [
  "年商1億〜10億で、次の打ち手を急いでいる",
  "経営者か、意思決定権を持つ責任者が同席できる",
  "AIを業務責任として運用する意思がある",
];

const unfit = [
  "丸投げしたい",
  "価格のみで判断する",
  "短期成果だけを求める",
];

export default function Filter() {
  return (
    <section className="border-b border-[var(--site-line)] bg-[var(--site-surface)]">
      <div className="site-container site-y">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--site-subtle)]">Filter</p>
          <h2 className="mt-8 font-serif text-[clamp(1.5rem,3.4vw,2.2rem)] font-semibold tracking-[-0.03em]">
            向き不向きを、先に明示します。
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="section-card rounded-lg p-6">
              <p className="font-mono text-[11px] tracking-[0.14em] text-[var(--site-accent)]">向いている企業</p>
              <ul className="mt-4 space-y-3 text-[14px] leading-[1.85] text-[var(--site-muted)]">
                {fit.map((item) => (
                  <li key={item}>・{item}</li>
                ))}
              </ul>
            </div>
            <div className="section-card rounded-lg p-6">
              <p className="font-mono text-[11px] tracking-[0.14em] text-[var(--site-subtle)]">向いていない企業</p>
              <ul className="mt-4 space-y-3 text-[14px] leading-[1.85] text-[var(--site-muted)]">
                {unfit.map((item) => (
                  <li key={item}>・{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
