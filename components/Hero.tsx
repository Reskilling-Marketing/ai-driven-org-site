export default function Hero() {
  return (
    <section className="hero-surface relative flex min-h-[100svh] flex-col border-b border-[var(--site-line)] pt-14 md:pt-[3.75rem]">
      <div className="site-container flex flex-1 flex-col justify-center py-16 md:py-28">
        <div className="mx-auto w-full max-w-5xl text-center md:text-left">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.38em] text-[var(--site-subtle)]">
            AIドリブン組織構築支援
          </p>
          <h1 className="mt-8 font-serif text-[clamp(2.5rem,9vw,5.5rem)] font-medium leading-[1.08] tracking-[-0.04em] text-[var(--site-fg)] text-balance-safe md:mt-10">
            1人で、会社を回せるか。
          </h1>
          <p className="mx-auto mt-10 max-w-3xl font-serif text-[clamp(1.25rem,3vw,1.875rem)] font-medium leading-[1.5] tracking-[-0.02em] text-[var(--site-muted)] md:mx-0 md:mt-12">
            AIで、経営を設計する。
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[2] tracking-[0.04em] text-[var(--site-muted)] md:mx-0 md:mt-10">
            人を増やさず、売上を伸ばす。
            <br className="hidden sm:block" />
            そのための「構造」を作る。
          </p>
          <p className="mx-auto mt-8 max-w-xl font-mono text-[10px] leading-relaxed tracking-[0.22em] text-[var(--site-subtle)] md:mx-0 md:mt-10">
            中小企業のオーナー・社長・経営幹部・管理職向け · 初回無料 · 営業なし
          </p>
          <div className="mx-auto mt-16 flex max-w-xl flex-col items-center gap-10 md:mx-0 md:mt-20 md:items-start">
            <a
              href="mailto:hello@example.com?subject=%E7%84%A1%E6%96%99%E7%9B%B8%E8%AB%87"
              className="inline-flex min-h-[4rem] w-full max-w-md items-center justify-center bg-[var(--site-fg)] px-10 text-[13px] font-medium tracking-[0.08em] text-[var(--site-bg)] transition-opacity hover:opacity-[0.88] sm:w-auto sm:min-w-[22rem] sm:px-16"
            >
              今の状況を整理する
            </a>
            <p className="font-mono text-[11px] leading-loose tracking-[0.18em] text-[var(--site-subtle)]">
              30分 / 無料 / オンライン / 営業なし
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
