const beliefs = [
  {
    q: "なぜ、構造にこだわるのか。",
    a: "施策は、構造が整っていれば機能する。整っていなければ、何をやっても止まらない漏れ桶だ。ほとんどの経営者が「正しい施策を間違った構造でやっている」。その逆転を直すことが、一番早い。",
  },
  {
    q: "なぜ、少数の相手とだけ付き合うのか。",
    a: "思考を深めるには、関係の深度が必要だ。表面的な案件を量産することに興味はない。一人の経営者と長期で伴走し、事業の変化を共に見る。そこにしか、本質的な価値は生まれない。",
  },
  {
    q: "なぜ、人を増やさずに仕組みを整えるのか。",
    a: "人を増やすことは、コストと複雑性を増やすことだ。正しく設計された構造は、人数が増えなくても機能し続ける。AIは、その構造を強化するための手段だ——それ以上でも、それ以下でもない。",
  },
];

export default function LuxPhilosophy() {
  return (
    <section id="philosophy" className="border-b border-[var(--lux-line)]">
      <div className="lux-container lux-y-loose">
        <div className="mx-auto max-w-5xl">
          <p className="lux-label">Philosophy</p>
          <h2 className="lux-h2 mt-12 max-w-[30rem] balance md:mt-14">
            なぜ、この仕事を
            <br />
            しているのか。
          </h2>

          {/* Gold divider */}
          <div className="mt-14 flex items-center gap-6 md:mt-16">
            <span className="lux-gold-line" />
          </div>

          <div className="mt-14 grid grid-cols-1 gap-0 border-t border-[var(--lux-line)] md:mt-16 md:grid-cols-2 md:gap-x-20">
            {beliefs.map((b, i) => (
              <div
                key={b.q}
                className={`py-12 md:py-14 ${
                  i > 0 ? "border-t border-[var(--lux-line)] md:border-t-0" : ""
                } ${
                  i === 2
                    ? "md:col-span-2 md:border-t md:border-[var(--lux-line)] md:pt-14"
                    : ""
                }`}
              >
                <p className="font-serif text-[clamp(1rem,1.8vw,1.2rem)] font-medium leading-[1.5] tracking-[-0.01em] text-[var(--lux-fg)]">
                  {b.q}
                </p>
                <p className="mt-5 max-w-[36rem] text-[14px] leading-[2.1] tracking-[0.04em] text-[var(--lux-muted)]">
                  {b.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
