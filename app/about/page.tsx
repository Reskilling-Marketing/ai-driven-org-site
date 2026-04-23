import type { Metadata } from "next";
import Link from "next/link";
import LuxFooter from "@/components/LuxFooter";
import LuxHeader from "@/components/LuxHeader";
import LuxStickyCTA from "@/components/LuxStickyCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "MENSA・京都大学MBA・フルコンタクト空手黒帯・元市議会議員・世界25カ国。異質な経験が、思考の特性になった。",
};

const facts = [
  { label: "MENSA", value: "上位2%の認知特性" },
  { label: "京都大学 MBA", value: "理論と実務の接続" },
  { label: "フルコンタクト空手", value: "黒帯 / 決断の胆力" },
  { label: "元 大阪市会議員", value: "現実の利害調整能力" },
  { label: "訪問国", value: "世界25カ国" },
];

const timeline = [
  {
    period: "政治 / 行政",
    note: "大阪市会議員として、複雑な利害関係の中で合意を形成した。現実は、きれいな理論通りには動かない。",
  },
  {
    period: "言語化 / 旅",
    note: "ライターとして、異なる文化・文脈を観察し、言語化した。25カ国の経験が、観察の精度を磨いた。",
  },
  {
    period: "AI / 経営設計",
    note: "自らAIで組織を設計し、複数事業を1人で運営した。実証したものだけを、他者に渡す。",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-col">
      <LuxHeader />
      <main className="flex-1 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">

        {/* Intro */}
        <section className="lux-hero-surface border-b border-[var(--lux-line)] pt-[3.75rem]">
          <div className="lux-container lux-y-loose">
            <div className="mx-auto max-w-5xl">
              <p className="lux-label">About</p>
              <h1 className="lux-h1 mt-12 max-w-[20rem] balance md:mt-14">
                異質な
                <br />
                経験が、
                <br />
                思考になる。
              </h1>
              <p className="mt-10 max-w-[28rem] text-[15px] leading-[2.1] tracking-[0.04em] text-[var(--lux-muted)] md:mt-12">
                コンサルタントでも、エージェントでも、ベンダーでもない。
                <br />
                自らAI組織を設計し、自ら回している実践者だ。
              </p>
            </div>
          </div>
        </section>

        {/* Facts */}
        <section className="border-b border-[var(--lux-line)] bg-[var(--lux-surface)]">
          <div className="lux-container lux-y">
            <div className="mx-auto max-w-5xl">
              <p className="lux-label">Credentials</p>
              <p className="mt-10 text-[15px] leading-[2] tracking-[0.04em] text-[var(--lux-muted)] md:mt-12">
                肩書は、思考の特性として読んでほしい。
              </p>
              <dl className="mt-14 grid grid-cols-1 gap-px border border-[var(--lux-line-strong)] bg-[var(--lux-line)] sm:grid-cols-2 md:grid-cols-3 md:mt-16">
                {facts.map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-[var(--lux-surface)] px-7 py-8 md:px-8 md:py-9"
                  >
                    <dt className="font-mono text-[9px] tracking-[0.26em] text-[var(--lux-gold)]">
                      {label}
                    </dt>
                    <dd className="mt-4 font-serif text-[clamp(0.95rem,1.8vw,1.15rem)] font-medium leading-[1.5] tracking-[-0.01em] text-[var(--lux-fg)]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-b border-[var(--lux-line)]">
          <div className="lux-container lux-y">
            <div className="mx-auto max-w-5xl">
              <p className="lux-label">Context</p>
              <h2 className="lux-h2 mt-12 max-w-[28rem] balance md:mt-14">
                なぜ、ここにいるのか。
              </h2>
              <div className="mt-14 border-t border-[var(--lux-line)] md:mt-16">
                {timeline.map((t, i) => (
                  <div
                    key={t.period}
                    className={`grid grid-cols-1 gap-6 py-10 md:grid-cols-[10rem_1fr] md:gap-12 md:py-12 ${
                      i > 0 ? "border-t border-[var(--lux-line)]" : ""
                    }`}
                  >
                    <p className="font-mono text-[10px] tracking-[0.18em] text-[var(--lux-gold)]">
                      {t.period}
                    </p>
                    <p className="text-[14px] leading-[2.05] tracking-[0.04em] text-[var(--lux-muted)]">
                      {t.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA — typography only */}
        <section className="bg-[var(--lux-bg)]">
          <div className="lux-container lux-y-loose">
            <div className="mx-auto max-w-2xl">
              <p className="lux-label">Dialogue</p>
              <h2 className="lux-h2 mt-12 max-w-[26rem] balance md:mt-14">
                話してみたいと
                <br />
                思ったなら。
              </h2>
              <p className="mt-8 max-w-[28rem] text-[15px] leading-[2.1] tracking-[0.04em] text-[var(--lux-muted)]">
                合う相手かどうかは、対話してみれば分かる。
                <br />
                30分、あなたの事業の話を聞かせてください。
              </p>

              <div className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-center">
                <Link
                  href="https://lin.ee/oocZ0Cw9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-solid inline-flex h-[3.25rem] min-w-[13rem] items-center justify-center rounded-sm px-8 shadow-[0_0_32px_rgba(181,143,96,0.12)]"
                >
                  対話を申し込む →
                </Link>
                <p className="font-mono text-[9px] tracking-[0.18em] text-[var(--lux-subtle)]">
                  無料 · 30分 · 先着3社 / 月
                </p>
              </div>

              <div className="mt-16 flex items-center gap-6">
                <span className="lux-gold-line" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <LuxStickyCTA />
      <LuxFooter />
    </div>
  );
}
