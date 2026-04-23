const fits = [
  "すでに一定の事業成果を出されている",
  "施策の量より、構造の質に関心がある",
  "思考の壁打ちに、価値を感じる",
  "短期の数値改善より、長期の意思決定精度を求める",
  "外注先ではなく、知的パートナーを探している",
  "安さより、深さに投資できる",
];

const notFits = [
  "今すぐ売上が必要で、即効性の施策だけを求める",
  "思想より手法の説明を求める",
  "コンサルを「安価な実行部隊」として使いたい",
];

export default function LuxClientFit() {
  return (
    <section id="fit" className="border-b border-[var(--lux-line)] bg-[var(--lux-surface)]">
      <div className="lux-container lux-y">
        <div className="mx-auto max-w-5xl">
          <p className="lux-label">Fit</p>
          <h2 className="lux-h2 mt-12 max-w-[28rem] balance md:mt-14">
            誰と、仕事をするか。
          </h2>
          <p className="mt-6 text-[15px] leading-[2] tracking-[0.04em] text-[var(--lux-muted)]">
            対話の時間は有限だ。
            <br />
            価値観の合う相手とだけ、深く付き合う。
          </p>

          <div className="mt-16 grid grid-cols-1 gap-16 md:mt-20 md:grid-cols-2 md:gap-20">
            {/* Who fits */}
            <div>
              <p className="lux-label mb-8 text-[var(--lux-gold)]">
                対話したい方
              </p>
              <ul className="space-y-5">
                {fits.map((f) => (
                  <li key={f} className="flex items-start gap-4">
                    <span className="mt-[0.45em] block h-px w-4 shrink-0 bg-[var(--lux-gold)]" />
                    <span className="text-[14px] leading-[1.85] tracking-[0.04em] text-[var(--lux-fg)]">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who doesn't fit */}
            <div className="border-t border-[var(--lux-line)] pt-14 md:border-l md:border-t-0 md:pl-16 md:pt-0">
              <p className="lux-label mb-8 text-[var(--lux-subtle)]">
                対話が難しい方
              </p>
              <ul className="space-y-5">
                {notFits.map((f) => (
                  <li key={f} className="flex items-start gap-4">
                    <span className="mt-[0.45em] block h-px w-4 shrink-0 bg-[var(--lux-subtle)]" />
                    <span className="text-[14px] leading-[1.85] tracking-[0.04em] text-[var(--lux-muted)]">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-14 border-t border-[var(--lux-line)] pt-10">
                <p className="text-[13px] leading-[2] tracking-[0.04em] text-[var(--lux-muted)]">
                  対話が合わなかったとしても、それは互いにとって正直な時間だ。
                  まず話してみることを恐れないでほしい。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
