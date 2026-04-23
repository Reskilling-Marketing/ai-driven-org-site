export default function ProofClosing() {
  return (
    <section
      aria-labelledby="proof-closing-heading"
      className="border-b border-[var(--site-line)] bg-[var(--site-bg)]"
    >
      <div className="site-container site-y-loose">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="proof-closing-heading"
            className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.35] tracking-[-0.025em] text-[var(--site-fg)]"
          >
            本人は、1人で回している。
          </h2>
          <p className="mt-10 text-[15px] leading-[2] tracking-[0.05em] text-[var(--site-muted)] md:mt-12">
            営業、マーケ、分析、制作、開発。
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[2.05] tracking-[0.04em] text-[var(--site-muted)] md:mt-10">
            理論ではなく、実装済みのモデル。
            <br />
            <span className="text-[13px] text-[var(--site-subtle)]">
              AIで組織を運用している。
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
