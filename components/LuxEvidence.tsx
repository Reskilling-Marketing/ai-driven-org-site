const metrics = [
  {
    value: "50–90%",
    unit: "",
    label: "業務自動化率",
    note: "支援プロジェクト全体の平均値",
  },
  {
    value: "2–4×",
    unit: "",
    label: "CV改善倍率",
    note: "構造設計後、平均12週以内",
  },
  {
    value: "4週",
    unit: "",
    label: "立ち上げ速度",
    note: "診断から初期構造稼働まで",
  },
  {
    value: "83%",
    unit: "",
    label: "内製化定着率",
    note: "6ヶ月後のフォローアップ調査",
  },
];

const cases = [
  {
    category: "EC / D2C",
    outcome: "広告費を据え置いたまま、CV率を3.2倍に改善。構造の問題がツールの問題に見えていた典型例。",
    impact: "CV +220%",
  },
  {
    category: "BtoB SaaS",
    outcome: "リード獲得からクロージングまでの導線を再設計。商談化率が週次で追えるようになり、意思決定速度が劇的に上がった。",
    impact: "商談化率 +180%",
  },
  {
    category: "オーナー経営 / 小売",
    outcome: "属人化した業務をAIと構造で再設計。オーナーが現場から離れ、事業判断に集中できる状態を実現。",
    impact: "オーナー可処分時間 +週14時間",
  },
];

export default function LuxEvidence() {
  return (
    <section className="border-b border-[var(--lux-line)] bg-[var(--lux-surface)]">
      <div className="lux-container lux-y">
        <div className="mx-auto max-w-5xl">
          <p className="lux-label">Selected Outcomes</p>
          <h2 className="lux-h2 mt-12 max-w-[28rem] balance md:mt-14">
            実績は、数字より先に
            <br />
            構造で語る。
          </h2>

          {/* Metrics grid */}
          <div className="mt-16 grid grid-cols-2 gap-px border border-[var(--lux-line-strong)] bg-[var(--lux-line)] md:mt-20 md:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-[var(--lux-surface)] px-6 py-8 md:px-8 md:py-10"
              >
                <p className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-none tracking-[-0.04em] text-[var(--lux-fg)]">
                  {m.value}
                  <span className="text-[0.55em] text-[var(--lux-gold)]">
                    {m.unit}
                  </span>
                </p>
                <p className="mt-4 font-mono text-[10px] tracking-[0.16em] text-[var(--lux-muted)]">
                  {m.label}
                </p>
                <p className="mt-2 text-[11px] leading-[1.7] tracking-[0.03em] text-[var(--lux-subtle)]">
                  {m.note}
                </p>
              </div>
            ))}
          </div>

          {/* Case highlights */}
          <div className="mt-16 space-y-0 border-t border-[var(--lux-line)] md:mt-20">
            {cases.map((c, i) => (
              <div
                key={c.category}
                className={`grid grid-cols-1 gap-6 py-10 md:grid-cols-[12rem_1fr_8rem] md:items-baseline md:gap-10 md:py-12 ${
                  i > 0 ? "border-t border-[var(--lux-line)]" : ""
                }`}
              >
                <p className="font-mono text-[10px] tracking-[0.18em] text-[var(--lux-gold)]">
                  {c.category}
                </p>
                <p className="text-[14px] leading-[2] tracking-[0.04em] text-[var(--lux-muted)]">
                  {c.outcome}
                </p>
                <p className="font-serif text-[13px] font-medium tracking-[0.02em] text-[var(--lux-fg)] md:text-right">
                  {c.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
