import LuxContactForm from "@/components/LuxContactForm";

const guarantees = [
  "初回対話は完全無料",
  "営業・売り込みは一切なし",
  "対話後の導入義務なし",
  "月次受入数：限定3社",
];

export default function LuxDialogue() {
  return (
    <section id="dialogue" className="border-b border-[var(--lux-line)]">
      <div className="lux-container lux-y-loose">
        <div className="mx-auto max-w-5xl">
          <p className="lux-label">Dialogue</p>
          <h2 className="lux-h2 mt-12 max-w-[28rem] balance md:mt-14">
            まず、話しませんか。
          </h2>
          <p className="mt-6 max-w-[30rem] text-[15px] leading-[2.1] tracking-[0.04em] text-[var(--lux-muted)]">
            施策の話は、後でいい。
            <br />
            まず、あなたの事業の本質を聞かせてください。
          </p>

          <div className="mt-16 grid grid-cols-1 gap-16 md:mt-20 md:grid-cols-2 md:gap-20">
            {/* Left: guarantees + context */}
            <div className="flex flex-col justify-between">
              <ul className="space-y-5">
                {guarantees.map((g) => (
                  <li key={g} className="flex items-baseline gap-4">
                    <span className="block h-px w-3 shrink-0 translate-y-[-0.1em] bg-[var(--lux-gold)]" />
                    <span className="text-[14px] leading-[1.85] tracking-[0.04em] text-[var(--lux-muted)]">
                      {g}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-14 border-t border-[var(--lux-line)] pt-10">
                <p className="text-[13px] leading-[2.05] tracking-[0.04em] text-[var(--lux-muted)]">
                  合う相手かどうかは、対話してみれば分かる。
                  まず話すことを、難しく考えなくていい。
                </p>
                <div className="mt-8 flex items-center gap-5">
                  <span className="lux-gold-line" />
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[var(--lux-subtle)]">
                    30分 / オンライン / 先着制
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div
              id="form"
              className="scroll-mt-28 border border-[var(--lux-line-strong)] bg-[var(--lux-surface)] p-8 md:p-10"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(237,232,223,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,232,223,0.03) 1px, transparent 1px)",
                backgroundSize: "3rem 3rem",
              }}
            >
              <p className="lux-label mb-8">申込フォーム</p>
              <LuxContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
