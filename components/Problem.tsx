export default function Problem() {
  return (
    <section className="border-b border-[var(--site-line)]">
      <div className="site-container site-y">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--site-subtle)]">
            Problem
          </p>
          <div className="mt-10 space-y-8 md:mt-12 md:space-y-10">
            <p className="font-serif text-[clamp(1.5rem,3vw,2.125rem)] font-medium leading-[1.35] tracking-[-0.025em] text-[var(--site-fg)]">
              ツールは増えた。
              <br />
              しかし、売上も利益も変わらない。
            </p>
            <p className="text-[15px] leading-[2.05] tracking-[0.04em] text-[var(--site-muted)]">
              現場は変わらないまま、業務だけが増えていく。
              <br />
              停滞、属人化、意思決定の遅延——そこにツールは効かない。
            </p>
            <div className="border-t border-[var(--site-line-strong)] pt-10 md:pt-12">
              <p className="font-serif text-[clamp(1.25rem,2.2vw,1.5rem)] font-medium leading-[1.45] tracking-[-0.02em] text-[var(--site-fg)]">
                問題は、ツールではない。
                <br />
                構造だ。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
