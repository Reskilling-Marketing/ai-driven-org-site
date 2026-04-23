const steps = [
  {
    action: "小さく試す",
    phase: "診断",
    note: "（まず整理する）",
  },
  {
    action: "作り替える",
    phase: "設計",
    note: "（AIで組織を再設計）",
  },
  {
    action: "回し続ける",
    phase: "顧問",
    note: "（顧問で最適化）",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-[var(--site-line)] bg-[var(--site-surface)]">
      <div className="site-container site-y">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--site-subtle)]">
            Services
          </p>
          <h2 className="mt-8 font-serif text-[clamp(1.35rem,2.5vw,1.75rem)] font-medium tracking-[-0.02em] text-[var(--site-fg)] md:mt-10">
            構造
          </h2>
          <p className="mt-4 text-[12px] leading-[1.8] tracking-[0.06em] text-[var(--site-subtle)]">
            投資判断の流れ：診断 → 設計 → 顧問
          </p>
          <ol className="mt-12 md:mt-14">
            {steps.map((s, i) => (
              <li key={s.phase}>
                {i > 0 && (
                  <div
                    className="flex justify-center py-5 md:py-6"
                    aria-hidden
                  >
                    <span className="font-mono text-[12px] tracking-[0.15em] text-[var(--site-subtle)]">
                      →
                    </span>
                  </div>
                )}
                <div
                  className={
                    i === 0
                      ? "pt-0"
                      : "border-t border-[var(--site-line-strong)] pt-10 md:pt-12"
                  }
                >
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--site-subtle)]">
                    {s.phase}
                  </p>
                  <p className="mt-3 font-serif text-[clamp(1.25rem,2.4vw,1.5rem)] font-medium leading-[1.4] tracking-[-0.02em] text-[var(--site-fg)]">
                    {s.action}
                  </p>
                  <p className="mt-3 text-[13px] leading-[1.8] tracking-[0.04em] text-[var(--site-muted)]">
                    {s.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
