const rows = [
  { label: "意思決定", value: "数日 → 数時間" },
  { label: "人件費", value: "削減または再配分" },
  { label: "業務", value: "属人 → 再現可能" },
  { label: "組織", value: "人数依存 → 構造依存" },
  { label: "売上", value: "構造的に伸ばせる状態へ" },
];

export default function Outcomes() {
  return (
    <section className="border-b border-[var(--site-line)]">
      <div className="site-container site-y">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--site-subtle)]">
            Outcomes
          </p>
          <h2 className="mt-8 font-serif text-[clamp(1.35rem,2.5vw,1.75rem)] font-medium tracking-[-0.02em] text-[var(--site-fg)] md:mt-10">
            変化
          </h2>
          <dl className="mt-12 border-t border-[var(--site-line-strong)] md:mt-14">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 border-b border-[var(--site-line)] py-7 sm:grid-cols-[minmax(0,8rem)_1fr] sm:items-baseline sm:gap-10 sm:py-8"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--site-subtle)]">
                  {row.label}
                </dt>
                <dd className="text-[15px] leading-[1.85] tracking-[0.04em] text-[var(--site-muted)]">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
