const useCases = [
  "広告レポート自動生成: 週次6時間を45分へ",
  "分析の自動化: KPI更新を日次で実行",
  "資料作成高速化: 提案初稿を同日作成",
  "LINE一次対応: 返信待ちを即日化",
];

export default function UseCase() {
  return (
    <section className="border-b border-[var(--site-line)] bg-[var(--site-surface)]">
      <div className="site-container site-y">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--site-subtle)]">UseCase</p>
          <h2 className="mt-8 font-serif text-[clamp(1.5rem,3.4vw,2.2rem)] font-semibold tracking-[-0.03em]">
            何が変わるかだけを示します。
          </h2>
          <ul className="mt-10 space-y-3">
            {useCases.map((item) => (
              <li key={item} className="section-card rounded-lg p-5 text-[15px] leading-[1.9] text-[var(--site-muted)]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
