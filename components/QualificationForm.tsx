const fields = [
  {
    label: "現在の課題",
    name: "issue",
    placeholder: "例: 代表がマーケ・営業・分析を兼務し、意思決定が遅れている",
  },
  {
    label: "AI導入状況",
    name: "aiStatus",
    placeholder: "例: ChatGPTは使用中。業務フローへの実装は未着手",
  },
  {
    label: "なぜ当社か",
    name: "reason",
    placeholder: "例: 選別型で実装まで伴走する点に魅力を感じた",
  },
] as const;

export default function QualificationForm() {
  return (
    <section id="form" className="bg-[var(--site-surface)]">
      <div className="site-container site-y-loose">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--site-subtle)]">Form</p>
          <h2 className="mt-8 font-serif text-[clamp(1.5rem,3.4vw,2.2rem)] font-semibold tracking-[-0.03em]">
            選考フォーム
          </h2>
          <p className="mt-6 text-[14px] leading-[1.9] text-[var(--site-muted)]">
            すべて必須です。内容を拝見し、48時間以内に面談可否を返信します。
          </p>

          <form className="mt-10 section-card rounded-lg p-6 md:p-8">
            <div className="space-y-6">
              {fields.map((field) => (
                <label key={field.name} className="block">
                  <span className="mb-2 block text-[12px] tracking-[0.06em] text-[var(--site-muted)]">
                    {field.label}
                  </span>
                  <textarea
                    name={field.name}
                    required
                    rows={3}
                    placeholder={field.placeholder}
                    className="w-full rounded-md border border-[var(--site-line-strong)] bg-[var(--site-bg)] p-3 text-[14px] text-[var(--site-fg)] outline-none focus:border-[var(--site-accent)]"
                  />
                </label>
              ))}

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[12px] tracking-[0.06em] text-[var(--site-muted)]">
                    意思決定者か
                  </span>
                  <select
                    name="decisionMaker"
                    required
                    className="w-full rounded-md border border-[var(--site-line-strong)] bg-[var(--site-bg)] p-3 text-[14px] text-[var(--site-fg)] outline-none focus:border-[var(--site-accent)]"
                  >
                    <option value="">選択してください</option>
                    <option>はい（最終決裁者）</option>
                    <option>いいえ（決裁者同席が可能）</option>
                    <option>いいえ（同席不可）</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-[12px] tracking-[0.06em] text-[var(--site-muted)]">
                    予算感
                  </span>
                  <select
                    name="budget"
                    required
                    className="w-full rounded-md border border-[var(--site-line-strong)] bg-[var(--site-bg)] p-3 text-[14px] text-[var(--site-fg)] outline-none focus:border-[var(--site-accent)]"
                  >
                    <option value="">選択してください</option>
                    <option>月30万〜50万円</option>
                    <option>月50万〜100万円</option>
                    <option>月100万円以上</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-[12px] tracking-[0.06em] text-[var(--site-muted)]">
                  構造改革への本気度
                </span>
                <select
                  name="commitment"
                  required
                  className="w-full rounded-md border border-[var(--site-line-strong)] bg-[var(--site-bg)] p-3 text-[14px] text-[var(--site-fg)] outline-none focus:border-[var(--site-accent)]"
                >
                  <option value="">選択してください</option>
                  <option>今期中に実装したい</option>
                  <option>3か月以内に実装したい</option>
                  <option>情報収集段階</option>
                </select>
              </label>
            </div>

            <div className="mt-8">
              <a
                href="https://lin.ee/oocZ0Cw9"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary inline-flex min-h-[3.8rem] w-full items-center justify-center rounded-md px-8 text-[13px] font-semibold tracking-[0.08em]"
              >
                面談選考に進む（LINE）
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
