export default function Hero() {
  return (
    <section className="hero-surface border-b border-[var(--site-line)] pt-14 md:pt-[3.75rem]">
      <div className="site-container site-y-loose">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--site-subtle)]">
            Initial AI / Selective LP
          </p>
          <h1 className="mt-8 font-serif text-[clamp(2rem,8vw,4.6rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--site-fg)]">
            AIを使う企業か。
            <br />
            AIを働かせる企業か。
          </h1>
          <p className="mt-8 max-w-3xl text-[15px] leading-[2] tracking-[0.04em] text-[var(--site-muted)]">
            私たちは全ての企業を受け入れません。人を増やさず、売上を伸ばす構造を
            本気で実装する経営チームだけを対象にしています。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="pill rounded-full px-3 py-1.5 text-[11px] tracking-[0.06em] text-[var(--site-muted)]">
              年商1億〜10億向け
            </span>
            <span className="pill rounded-full px-3 py-1.5 text-[11px] tracking-[0.06em] text-[var(--site-muted)]">
              月額30万円以上
            </span>
            <span className="pill rounded-full px-3 py-1.5 text-[11px] tracking-[0.06em] text-[var(--site-muted)]">
              5〜8社限定
            </span>
          </div>
          <div className="mt-12">
            <a
              href="#cta"
              className="cta-primary inline-flex min-h-[3.75rem] items-center justify-center rounded-md px-10 text-[13px] font-semibold tracking-[0.08em]"
            >
              適合性を確認する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
