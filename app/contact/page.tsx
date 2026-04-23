import type { Metadata } from "next";
import LuxContactForm from "@/components/LuxContactForm";
import LuxFooter from "@/components/LuxFooter";
import LuxHeader from "@/components/LuxHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "まず、話しませんか。施策の話は後でいい。30分、あなたの事業の本質を聞かせてください。",
};

const expectations = [
  { index: "01", title: "あなたの現状をヒアリング", note: "事業・組織・意思決定の現状を整理する" },
  { index: "02", title: "構造の問題を特定", note: "施策より先に、何が詰まっているかを見る" },
  { index: "03", title: "優先順位と方向性を整理", note: "何から手をつけるべきかを、具体的に示す" },
  { index: "04", title: "合うかどうかを互いに確認", note: "長期伴走に進むかを、自然に判断する場" },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-full flex-col">
      <LuxHeader />
      <main className="flex-1">

        {/* Intro */}
        <section className="lux-hero-surface border-b border-[var(--lux-line)] pt-[3.75rem]">
          <div className="lux-container lux-y-loose">
            <div className="mx-auto max-w-5xl">
              <p className="lux-label">Contact</p>
              <h1 className="lux-h1 mt-12 max-w-[24rem] balance md:mt-14">
                まず、
                <br />
                話しませんか。
              </h1>
              <p className="mt-10 max-w-[28rem] text-[15px] leading-[2.1] tracking-[0.04em] text-[var(--lux-muted)] md:mt-12">
                提案も、売り込みも、しない。
                <br />
                あなたの現状を聞いて、構造の輪郭を整理する——それだけです。
              </p>
            </div>
          </div>
        </section>

        {/* What happens in the dialogue */}
        <section className="border-b border-[var(--lux-line)] bg-[var(--lux-surface)]">
          <div className="lux-container lux-y">
            <div className="mx-auto max-w-5xl">
              <p className="lux-label">30分でやること</p>
              <div className="mt-12 space-y-0 border-t border-[var(--lux-line)] md:mt-14">
                {expectations.map((e, i) => (
                  <div
                    key={e.index}
                    className={`grid grid-cols-1 gap-4 py-9 md:grid-cols-[4rem_1fr_auto] md:items-baseline md:gap-10 md:py-10 ${
                      i > 0 ? "border-t border-[var(--lux-line)]" : ""
                    }`}
                  >
                    <span className="font-mono text-[9px] tracking-[0.28em] text-[var(--lux-gold)]">
                      {e.index}
                    </span>
                    <div>
                      <p className="font-serif text-[clamp(1rem,1.8vw,1.2rem)] font-medium leading-[1.45] tracking-[-0.01em] text-[var(--lux-fg)]">
                        {e.title}
                      </p>
                      <p className="mt-2 text-[13px] leading-[1.85] tracking-[0.04em] text-[var(--lux-muted)]">
                        {e.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="bg-[var(--lux-bg)]">
          <div className="lux-container lux-y-loose">
            <div className="mx-auto max-w-xl">
              <p className="lux-label text-center">申込</p>
              <h2 className="lux-h2 mt-10 text-center balance">
                対話を申し込む
              </h2>
              <p className="mx-auto mt-6 max-w-sm text-center text-[14px] leading-[1.9] tracking-[0.04em] text-[var(--lux-muted)]">
                フォームから送信いただければ、1営業日以内に日程を調整します。
              </p>

              <div className="mt-14 border border-[var(--lux-line-strong)] bg-[var(--lux-surface)] p-8 md:p-10">
                <p className="lux-label mb-8">申込フォーム</p>
                <LuxContactForm />
              </div>

              <div className="mt-10 flex items-center gap-6">
                <span className="lux-gold-line" />
                <p className="font-mono text-[9px] tracking-[0.18em] text-[var(--lux-subtle)]">
                  無料 · 30分 · 先着3社 / 月 · 営業なし
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <LuxFooter />
    </div>
  );
}
