const sells = [
  "視点",
  "構造化",
  "意思決定の精度",
  "抽象と実務の接続",
  "長期的な知的伴走",
];

const doesNotSell = [
  "施策の実行のみ",
  "短期のCV改善",
  "ツール導入",
  "表面的な改善提案",
];

export default function LuxStatement() {
  return (
    <section className="border-b border-[var(--lux-line)]">
      <div className="lux-container lux-y-loose">
        <div className="mx-auto max-w-5xl">
          <p className="lux-label">Statement</p>

          <div className="mt-12 grid grid-cols-1 gap-16 md:mt-16 md:grid-cols-2 md:gap-20">
            {/* Left: main statement */}
            <div>
              <h2 className="lux-h2 balance">
                私が売るのは、
                <br />
                施策ではない。
              </h2>
              <p className="mt-10 text-[15px] leading-[2.1] tracking-[0.04em] text-[var(--lux-muted)]">
                広告、AI、SEO、CRM——これらはすべて手段だ。
                私が設計するのは、その手段が正しく機能する「構造」だ。
              </p>
              <p className="mt-6 text-[15px] leading-[2.1] tracking-[0.04em] text-[var(--lux-muted)]">
                問いを磨く。選択肢を整理する。意思決定の精度を上げる。
                それが、私の本質的な仕事だ。
              </p>
              <p className="mt-8 text-[15px] leading-[2.1] tracking-[0.04em] text-[var(--lux-muted)]">
                施策を増やす前に、成果が出る構造を整える。
                その順番を間違えない相手とだけ、仕事をする。
              </p>
            </div>

            {/* Right: what is/isn't sold */}
            <div className="space-y-12 border-t border-[var(--lux-line)] pt-12 md:border-l md:border-t-0 md:pl-16 md:pt-0">
              <div>
                <p className="lux-label mb-6 text-[var(--lux-gold)]">
                  提供するもの
                </p>
                <ul className="space-y-3">
                  {sells.map((item) => (
                    <li key={item} className="flex items-baseline gap-3">
                      <span className="mt-1 block h-px w-3 shrink-0 bg-[var(--lux-gold)]" />
                      <span className="text-[14px] leading-[1.8] tracking-[0.04em] text-[var(--lux-fg)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[var(--lux-line)] pt-10">
                <p className="lux-label mb-6 text-[var(--lux-subtle)]">
                  提供しないもの
                </p>
                <ul className="space-y-3">
                  {doesNotSell.map((item) => (
                    <li key={item} className="flex items-baseline gap-3">
                      <span className="mt-1 block h-px w-3 shrink-0 bg-[var(--lux-subtle)]" />
                      <span className="text-[14px] leading-[1.8] tracking-[0.04em] text-[var(--lux-muted)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
