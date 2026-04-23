import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  const ctaLabel = "今の状況を整理する";

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="hero-surface border-b border-[var(--site-line)] pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="site-container">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--site-subtle)]">
              Invitation Only
            </p>
            <p className="mb-3 text-sm tracking-[0.04em] text-[var(--site-muted)]">
              年商1億〜10億の経営者・事業責任者向け
            </p>
            <h1 className="max-w-5xl font-sans text-4xl font-medium leading-tight tracking-[-0.02em] text-[var(--site-fg)] md:text-6xl">
              拡大の前に、
              <br />
              前提を切り替える。
            </h1>
            <p className="mt-9 max-w-2xl text-base text-[var(--site-muted)] md:text-lg">
              このページは、受注のために作っていません。
              <br />
              紹介された少数の判断者だけを想定しています。
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="cta-primary inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-medium"
              >
                {ctaLabel}
              </a>
              <p className="text-xs tracking-[0.06em] text-[var(--site-subtle)]">
                合わない場合、面談は実施しません。
              </p>
            </div>
          </div>
        </section>

        <section id="premise" className="section-surface site-y border-b border-[var(--site-line)]">
          <div className="site-container">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
              1. Premise Destruction
            </p>
            <h2 className="max-w-4xl text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              努力不足ではない。
              <br />
              設計不足です。
            </h2>
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-[var(--site-muted)]">
              事業が止まる理由は、人材の量ではありません。
              <br />
              判断構造の曖昧さです。
            </p>
          </div>
        </section>

        <section id="perspective" className="site-y border-b border-[var(--site-line)]">
          <div className="site-container">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
              2. Perspective
            </p>
            <h2 className="max-w-4xl text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              AIはコスト削減の道具ではない。
              <br />
              意思決定の解像度を上げるインフラです。
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                "施策数ではなく、判断精度を管理する。",
                "スピードより、意思決定の一貫性を優先する。",
                "運用改善ではなく、経営OSの再定義を行う。",
              ].map((line) => (
                <article key={line} className="section-card rounded-2xl p-6">
                  <p className="text-sm text-[var(--site-muted)]">{line}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="thought" className="section-surface site-y border-b border-[var(--site-line)]">
          <div className="site-container">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
              3. Thought
            </p>
            <h2 className="max-w-4xl text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              私たちは施策会社ではない。
              <br />
              意思決定設計の会社です。
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "売れる手段は、後でいい。",
                  text: "先に定義すべきは、何を捨てるかという基準です。",
                },
                {
                  title: "再現性は偶然で生まれない。",
                  text: "強い個人を増やすより、強い判断構造を作る。",
                },
                {
                  title: "拡大は、整合の結果。",
                  text: "思想・組織・実装が揃わない拡大は、いずれ崩れる。",
                },
                {
                  title: "AIに任せるのではない。",
                  text: "AIを使って、人間の判断責任を高める。",
                },
              ].map((item) => (
                <article key={item.title} className="section-card rounded-2xl p-6 md:p-7">
                  <h3 className="text-xl font-semibold text-[var(--site-fg)] md:text-2xl">{item.title}</h3>
                  <p className="mt-4 text-sm text-[var(--site-muted)]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="site-y border-b border-[var(--site-line)]">
          <div className="site-container">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
              4. Proof
            </p>
            <h2 className="max-w-4xl text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              数字は、設計思想の検証値。
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "B2B SaaS",
                  metric: "自然流入 4.8x",
                  detail: "コンテンツ量産を止め、判断基準主導の編集体制へ移行。",
                },
                {
                  name: "Education",
                  metric: "申込CVR 167%",
                  detail: "集客と追客を統合し、意思決定の遅延コストを削減。",
                },
                {
                  name: "D2C",
                  metric: "CPA -31%",
                  detail: "獲得施策ではなく、投資判断ルールの再設計で改善。",
                },
              ].map((item) => (
                <article key={item.name} className="section-card rounded-2xl p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--site-subtle)]">
                    {item.name}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-[var(--site-fg)]">{item.metric}</p>
                  <p className="mt-3 text-sm text-[var(--site-muted)]">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="relation" className="section-surface site-y border-b border-[var(--site-line)]">
          <div className="site-container">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
              5. Relationship
            </p>
            <h2 className="max-w-4xl text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              依頼関係ではなく、
              <br />
              思想の同盟関係を求めます。
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                "受注者として扱われる前提の案件は受けません。",
                "経営者が判断責任を持たない案件は進めません。",
                "短期成果のみを評価軸にする案件は対象外です。",
              ].map((item) => (
                <article key={item} className="section-card rounded-2xl p-6">
                  <p className="text-sm text-[var(--site-muted)]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="filter" className="site-y border-b border-[var(--site-line)]">
          <div className="site-container">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
              6. Filter
            </p>
            <h2 className="max-w-4xl text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              以下に当てはまる方は、ご遠慮ください。
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                "価格と納期だけで比較したい方",
                "成果だけを委託したい方",
                "意思決定に時間を使う意思がない方",
                "AIを便利機能としてしか扱わない方",
              ].map((item) => (
                <article key={item} className="section-card rounded-2xl p-6">
                  <p className="text-sm text-[var(--site-muted)]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-surface site-y-loose">
          <div className="site-container">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
              7. Conversation
            </p>
            <h2 className="max-w-4xl text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              面談は営業機会ではなく、
              <br />
              選別の場です。
            </h2>
            <p className="mt-6 max-w-2xl text-sm text-[var(--site-muted)] md:text-base">
              思想と責任範囲が一致した場合のみ、具体設計へ進みます。
              <br />
              一致しない場合は、その場で終了します。
            </p>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
