import Link from "next/link";

const credentials = [
  { label: "MENSA", sub: "構造化の速度" },
  { label: "京都大学 MBA", sub: "理論と実務の接続" },
  { label: "フルコンタクト空手 黒帯", sub: "決断の胆力" },
  { label: "元 大阪市会議員", sub: "現実の利害調整能力" },
  { label: "世界 25 カ国", sub: "観察と言語化" },
];

export default function LuxHero() {
  return (
    <section className="lux-hero-surface relative flex min-h-[100svh] flex-col border-b border-[var(--lux-line)] pt-[3.75rem]">
      <div className="lux-container flex flex-1 flex-col justify-center py-20 md:py-28">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-[1fr_auto] md:gap-20 lg:gap-28">

          {/* Left: main copy */}
          <div>
            <p className="lux-label">Initial AI</p>

            <h1 className="lux-h1 mt-10 balance md:mt-12">
              問いの精度が、
              <br />
              事業の精度になる。
            </h1>

            <p className="mt-10 max-w-[28rem] text-[15px] leading-[2.1] tracking-[0.05em] text-[var(--lux-muted)] md:mt-12">
              施策より先に、構造がある。
              <br />
              意思決定の解像度を上げる、知的伴走として。
            </p>

            <div className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-center md:mt-16">
              <Link
                href="https://lin.ee/oocZ0Cw9"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-solid inline-flex h-[3.25rem] min-w-[13rem] items-center justify-center rounded-sm px-8 shadow-[0_0_32px_rgba(181,143,96,0.12)]"
              >
                対話を始める →
              </Link>
              <Link
                href="/about"
                className="font-mono text-[10px] tracking-[0.18em] text-[var(--lux-muted)] transition-colors hover:text-[var(--lux-fg)]"
              >
                人物について ↗
              </Link>
            </div>

            <div className="mt-14 flex items-center gap-6 md:mt-16">
              <span className="lux-gold-line" />
              <p className="font-mono text-[9px] tracking-[0.22em] text-[var(--lux-subtle)]">
                初回対話 · 完全無料 · 営業なし · 先着制
              </p>
            </div>
          </div>

          {/* Right: credentials panel — CSS only, no image */}
          <div
            className="hidden self-center md:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(237,232,223,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,232,223,0.04) 1px, transparent 1px)",
              backgroundSize: "3rem 3rem",
            }}
          >
            <div className="relative w-[18rem] border border-[var(--lux-line-gold)] bg-[var(--lux-surface)] px-8 py-9 lg:w-[20rem]">
              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-6 w-px bg-[var(--lux-gold)]" />
              <div className="absolute left-0 top-0 h-px w-6 bg-[var(--lux-gold)]" />
              <div className="absolute bottom-0 right-0 h-6 w-px bg-[var(--lux-gold)]" />
              <div className="absolute bottom-0 right-0 h-px w-6 bg-[var(--lux-gold)]" />

              <p className="lux-label mb-8 text-[var(--lux-gold)]">Characteristics</p>

              <ul className="space-y-6">
                {credentials.map((c) => (
                  <li key={c.label}>
                    <p className="font-mono text-[10px] tracking-[0.14em] text-[var(--lux-fg)]">
                      {c.label}
                    </p>
                    <p className="mt-1 font-mono text-[9px] tracking-[0.12em] text-[var(--lux-subtle)]">
                      → {c.sub}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="lux-container pb-8 md:pb-10">
        <p className="font-mono text-[9px] tracking-[0.24em] text-[var(--lux-subtle)]">
          01 / Hero
        </p>
      </div>
    </section>
  );
}
