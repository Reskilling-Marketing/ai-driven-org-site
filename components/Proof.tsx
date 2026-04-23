const points = [
  { label: "週次レポート作成", before: "6時間", after: "45分" },
  { label: "顧客一次対応", before: "担当者1名専任", after: "AI+人で即日運用" },
  { label: "経営会議準備", before: "3日", after: "半日" },
];

export default function Proof() {
  return (
    <section id="proof" className="border-b border-[var(--site-line)] bg-[var(--site-surface)]">
      <div className="site-container site-y">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--site-subtle)]">
            Proof
          </p>
          <h2 className="mt-8 font-serif text-[clamp(1.5rem,3.4vw,2.2rem)] font-semibold tracking-[-0.03em]">
            実績でしか、選別は成立しない。
          </h2>
          <div className="mt-10 space-y-4">
            {points.map((p) => (
              <div key={p.label} className="section-card rounded-lg p-5">
                <p className="text-[12px] tracking-[0.08em] text-[var(--site-subtle)]">{p.label}</p>
                <p className="mt-2 text-[15px] tracking-[0.03em] text-[var(--site-fg)]">
                  改善前 {p.before} → 改善後 {p.after}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[14px] leading-[1.9] tracking-[0.05em] text-[var(--site-muted)]">
            数字で改善可能性を示せない案件は、受けません。
          </p>
        </div>
      </div>
    </section>
  );
}
