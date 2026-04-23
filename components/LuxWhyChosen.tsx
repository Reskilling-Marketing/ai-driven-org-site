const traits = [
  {
    origin: "MENSA",
    quality: "構造化の速度",
    description:
      "問題の本質に最短で到達する。情報の密度に怯まず、抽象と具体を往復する思考回路。",
  },
  {
    origin: "京都大学 MBA",
    quality: "理論と実務の接続",
    description:
      "戦略論・組織論・財務を基礎として持ちながら、現実の泥臭い事業に落とす。両者を一人で動かせる。",
  },
  {
    origin: "フルコンタクト空手 黒帯",
    quality: "決断の胆力",
    description:
      "痛みを知っている。リスクを恐れず、しかし無謀ではない。その感覚が、意思決定の質に滲み出る。",
  },
  {
    origin: "元 大阪市会議員",
    quality: "利害調整の現実感覚",
    description:
      "複雑な利害関係の中で合意を形成してきた。綺麗な理論だけでは動かない現実を、知っている。",
  },
  {
    origin: "ライター / 世界25カ国",
    quality: "観察と言語化",
    description:
      "多様な文脈を読み、言葉に変換する。「見えているけど言えない」を、正確に言語化する。",
  },
];

export default function LuxWhyChosen() {
  return (
    <section className="border-b border-[var(--lux-line)] bg-[var(--lux-surface)]">
      <div className="lux-container lux-y">
        <div className="mx-auto max-w-5xl">
          <p className="lux-label">Characteristics</p>
          <h2 className="lux-h2 mt-12 max-w-xl balance md:mt-14">
            なぜ選ばれるのか。
          </h2>
          <p className="mt-6 text-[15px] leading-[2] tracking-[0.04em] text-[var(--lux-muted)]">
            肩書を並べても意味はない。
            <br className="hidden sm:block" />
            思考の特性として、翻訳する。
          </p>

          <div className="mt-16 md:mt-20">
            {traits.map((t, i) => (
              <div
                key={t.origin}
                className={`grid grid-cols-1 gap-6 py-10 md:grid-cols-[12rem_1fr] md:gap-12 md:py-12 ${
                  i > 0 ? "border-t border-[var(--lux-line)]" : ""
                }`}
              >
                {/* Origin label */}
                <div>
                  <p className="font-mono text-[9px] tracking-[0.22em] text-[var(--lux-gold)]">
                    {t.origin}
                  </p>
                  <p className="mt-3 font-serif text-[clamp(1rem,1.8vw,1.2rem)] font-medium leading-[1.45] tracking-[-0.01em] text-[var(--lux-fg)]">
                    {t.quality}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[14px] leading-[2.05] tracking-[0.04em] text-[var(--lux-muted)]">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
