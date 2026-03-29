const notes = [
  "無料",
  "30分",
  "オンライン",
  "営業なし",
  "導入しない判断でもOK",
];

export default function FinalCTA() {
  return (
    <section id="contact" className="border-t border-[var(--site-line)] bg-[var(--site-bg)]">
      <div className="site-container py-[clamp(7.5rem,23vh,15rem)] md:py-[clamp(10rem,30vh,19rem)]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-[clamp(1rem,1.9vw,1.2rem)] font-medium leading-[1.8] tracking-[-0.01em] text-[var(--site-muted)]">
            このままでは、競争力は上がらない。
          </p>
          <p className="mx-auto mt-10 max-w-xl font-serif text-[clamp(1.125rem,2.2vw,1.4rem)] font-medium leading-[1.65] tracking-[-0.015em] text-[var(--site-fg)] md:mt-12">
            このまま、AIを“使うだけ”で終わるか。
          </p>
          <div className="mt-14 md:mt-16">
            <a
              href="mailto:hello@example.com?subject=%E7%84%A1%E6%96%99%E7%9B%B8%E8%AB%87"
              className="inline-flex min-h-[4rem] w-full max-w-lg items-center justify-center bg-[var(--site-fg)] px-10 text-[13px] font-medium tracking-[0.08em] text-[var(--site-bg)] transition-opacity hover:opacity-[0.88] sm:px-14"
            >
              今の状況を整理する
            </a>
          </div>
          <ul className="mx-auto mt-12 flex max-w-sm flex-col gap-3 text-left md:mt-14">
            {notes.map((n) => (
              <li
                key={n}
                className="text-[12px] leading-[1.85] tracking-[0.06em] text-[var(--site-subtle)]"
              >
                ※ {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
