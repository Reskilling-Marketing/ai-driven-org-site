const items = [
  "人は増やせないが、売上は上げないといけない",
  "AIを導入したが、何も変わっていない",
  "業務が属人化している",
];

export default function Target() {
  return (
    <section className="border-b border-[var(--site-line)] bg-[var(--site-surface)]">
      <div className="site-container site-y">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--site-subtle)]">
            Target
          </p>
          <h2 className="mt-8 font-serif text-[clamp(1.45rem,2.7vw,2rem)] font-semibold leading-[1.35] tracking-[-0.025em] text-[var(--site-fg)] md:mt-10">
            もし、こうなっているなら。
          </h2>
          <ul className="mt-12 space-y-6 border-t border-[var(--site-line-strong)] pt-12 md:mt-14 md:space-y-7 md:pt-14">
            {items.map((t) => (
              <li
                key={t}
                className="pl-1 text-[15px] leading-[1.95] tracking-[0.03em] text-[var(--site-muted)]"
              >
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-12 border-t border-[var(--site-line-strong)] pt-10 text-[15px] leading-[1.95] tracking-[0.03em] text-[var(--site-fg)] md:mt-14 md:pt-12">
            それは、構造の問題です。
          </p>
        </div>
      </div>
    </section>
  );
}
