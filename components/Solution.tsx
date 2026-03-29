export default function Solution() {
  return (
    <section className="border-b border-[var(--site-line)] bg-[var(--site-surface)]">
      <div className="site-container site-y-loose">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--site-subtle)]">
            Solution
          </p>
          <div className="mt-12 space-y-8 md:mt-16 md:space-y-10">
            <p className="font-serif text-[clamp(1.65rem,3.2vw,2.25rem)] font-medium leading-[1.3] tracking-[-0.03em] text-[var(--site-fg)]">
              AIは、ツールではない。
            </p>
            <p className="font-serif text-[clamp(1.35rem,2.6vw,1.95rem)] font-medium leading-[1.4] tracking-[-0.02em] text-[var(--site-fg)]">
              経営を再設計するための構造だ。
            </p>
            <p className="mx-auto max-w-2xl text-[14px] leading-[2.05] tracking-[0.04em] text-[var(--site-muted)]">
              AI経営OSとして、役割とプロセスに組み込む。
              <br className="hidden sm:inline" />
              人とAIの役割を定義し、少人数でも成果が出る状態を作る。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
