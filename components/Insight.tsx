export default function Insight() {
  return (
    <section className="border-b border-[var(--site-line)] bg-[var(--site-surface)]">
      <div className="site-container site-y">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--site-subtle)]">
            Insight
          </p>
          <h2 className="mt-8 font-serif text-[clamp(1.5rem,3.4vw,2.2rem)] font-semibold leading-[1.35] tracking-[-0.03em] text-[var(--site-fg)]">
            問題は、人でもツールでもない。
            <br />
            構造だ。
          </h2>
          <p className="mt-8 max-w-3xl text-[15px] leading-[2] tracking-[0.04em] text-[var(--site-muted)]">
            現場の努力を増やしても、経営構造が古いままなら再現性は生まれません。必要なのは、
            AIに仕事を割り当て、人間が判断に集中する構造設計です。
          </p>
        </div>
      </div>
    </section>
  );
}
