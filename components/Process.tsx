const steps = [
  "診断: ボトルネックと自動化余地を定量化",
  "設計: AIワーカーの役割と権限を定義",
  "実装: 業務フローへ組み込み、週次で調整",
  "運用: KPI監視と改善を仕組み化",
];

export default function Process() {
  return (
    <section className="section-surface border-b border-[var(--site-line)]">
      <div className="site-container site-y">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--site-subtle)]">
            Process
          </p>
          <h2 className="mt-8 font-serif text-[clamp(1.5rem,3.4vw,2.2rem)] font-semibold tracking-[-0.03em]">
            診断だけで終わらせない。
          </h2>
          <ol className="mt-10 space-y-3">
            {steps.map((step, index) => (
              <li key={step} className="section-card rounded-lg p-5 text-[15px] leading-[1.9] text-[var(--site-muted)]">
                <span className="mr-2 font-mono text-[11px] text-[var(--site-accent)]">
                  0{index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
