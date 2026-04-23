export default function Solution() {
  return (
    <section className="border-b border-[var(--site-line)]">
      <div className="site-container site-y">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--site-subtle)]">
            Solution
          </p>
          <h2 className="mt-8 font-serif text-[clamp(1.5rem,3.4vw,2.2rem)] font-semibold tracking-[-0.03em] text-[var(--site-fg)]">
            AI組織OSを実装する。
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[2] tracking-[0.04em] text-[var(--site-muted)]">
            AIに「考える・作る・回す」を任せる設計を行います。広告運用、分析、資料作成、顧客対応を
            分業し、業務の80%を自動化対象へ。経営陣は、判断と資源配分だけに集中します。
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="section-card rounded-lg p-5 text-[13px] tracking-[0.05em] text-[var(--site-muted)]">
              AIワーカー設計
            </div>
            <div className="section-card rounded-lg p-5 text-[13px] tracking-[0.05em] text-[var(--site-muted)]">
              意思決定パイプライン
            </div>
            <div className="section-card rounded-lg p-5 text-[13px] tracking-[0.05em] text-[var(--site-muted)]">
              収益KPI自動追跡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
