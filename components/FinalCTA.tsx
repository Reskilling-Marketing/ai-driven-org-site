export default function FinalCTA() {
  return (
    <section id="cta" className="border-b border-[var(--site-line)] bg-[var(--site-bg)]">
      <div className="site-container site-y-loose">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--site-subtle)]">CTA</p>
          <h2 className="mt-8 font-serif text-[clamp(1.6rem,3.8vw,2.4rem)] font-semibold leading-[1.35] tracking-[-0.03em]">
            面談は、商談ではありません。
            <br />
            適合性の選考です。
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[2] tracking-[0.04em] text-[var(--site-muted)]">
            ここで確認するのは、相性ではなく実行可能性です。覚悟と意思決定速度が一致しない場合は、
            お断りします。
          </p>
          <div className="mt-12">
            <a
              href="#form"
              className="cta-primary inline-flex min-h-[3.8rem] rounded-md px-10 text-[13px] font-semibold tracking-[0.08em]"
            >
              適合性を確認する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
