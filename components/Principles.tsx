const principles = [
  {
    lead: "ツールは売らない",
    rest: "変革を売る",
  },
  {
    lead: "個人に依存しない",
    rest: "構造で成果を出す",
  },
];

export default function Principles() {
  return (
    <section className="border-b border-[var(--site-line)] bg-[var(--site-surface)]">
      <div className="site-container site-y-loose">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--site-subtle)]">
            Principles
          </p>
          <h2 className="mt-8 font-serif text-[clamp(1.35rem,2.5vw,1.75rem)] font-medium tracking-[-0.02em] text-[var(--site-fg)] md:mt-10">
            原則
          </h2>
          <p className="mt-4 max-w-xl text-[12px] leading-[1.85] tracking-[0.05em] text-[var(--site-subtle)]">
            サービスと関係性の前提です。
          </p>
          <ul className="mt-12 md:mt-14">
            {principles.map((p, i) => (
              <li
                key={p.lead}
                className={
                  i > 0
                    ? "border-t border-[var(--site-line-strong)] pt-12 md:pt-16"
                    : ""
                }
              >
                <p className="font-serif text-[clamp(1.25rem,2.4vw,1.5rem)] font-medium leading-[1.45] tracking-[-0.02em] text-[var(--site-fg)]">
                  {p.lead}
                </p>
                <p className="mt-4 text-[15px] leading-[1.9] tracking-[0.04em] text-[var(--site-muted)]">
                  {p.rest}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
