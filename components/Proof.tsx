const points = [
  "業務の50〜90%をAI化",
  "複数事業を同時運営",
  "意思決定の高速化",
];

export default function Proof() {
  return (
    <section
      id="proof"
      className="border-b border-white/[0.06] bg-[var(--proof-bg)] text-[var(--proof-fg)]"
    >
      <div className="site-container site-y-loose">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.38em] text-[var(--proof-muted)]">
            Proof
          </p>
          <p className="mt-10 font-mono text-[11px] tracking-[0.25em] text-[var(--proof-muted)] md:mt-12">
            実証済み
          </p>
          <p className="mt-12 max-w-[34rem] font-serif text-[clamp(1.4rem,2.8vw,1.95rem)] font-medium leading-[1.45] tracking-[-0.02em] md:mt-14">
            広告運用、分析、制作、開発。
          </p>
          <p className="mt-8 text-[15px] leading-[2.05] tracking-[0.06em] text-[var(--proof-whisper)] md:mt-10">
            これらすべてを、AIで設計し、1人で運用している。
          </p>
          <p className="mt-4 font-serif text-[clamp(1.05rem,2.1vw,1.3rem)] font-medium leading-[1.9] tracking-[-0.01em] text-[var(--proof-fg)]">
            すべてを、1人で回している。
          </p>
          <p className="mt-9 text-[12px] leading-[1.95] tracking-[0.08em] text-[var(--proof-muted)]">
            「使う」のではなく、組織として回している。
          </p>
          <ul className="mt-16 space-y-6 border-t border-white/[0.08] pt-14 md:mt-20 md:space-y-6 md:pt-16">
            {points.map((p) => (
              <li
                key={p}
                className="text-[14px] leading-[1.85] tracking-[0.06em] text-[var(--proof-fg)]"
              >
                ・{p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
