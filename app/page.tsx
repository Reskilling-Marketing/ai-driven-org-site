import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TrackedLinkButton from "@/components/TrackedLinkButton";

type HomeProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = searchParams ? await searchParams : {};
  const vParam = params?.v;
  const variantRaw = Array.isArray(vParam) ? vParam[0] : vParam;
  const ctaVariant = variantRaw === "b" ? "b" : "a";
  const ctaLabel = ctaVariant === "b" ? "面談の可否を確認する" : "思想の適合性を確認する";

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section className="hero-surface border-b border-[var(--site-line)] pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="site-container">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--site-subtle)]">
              Invitation Only
            </p>
            <h1 className="max-w-5xl font-serif text-4xl leading-tight text-[var(--site-fg)] md:text-6xl md:leading-tight">
              売上より先に、
              <br />
              思考の構造を変える。
            </h1>
            <p className="mt-9 max-w-2xl text-base text-[var(--site-muted)] md:text-lg">
              ここは、集客のためのページではありません。
              <br />
              紹介で届いた方のためだけに、思想を置いています。
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <TrackedLinkButton
                href="#contact"
                label={ctaLabel}
                variant={ctaVariant}
                eventName="hero_cta_click"
                className="cta-primary inline-flex h-11 items-center justify-center rounded-md px-7 text-[11px] font-semibold uppercase tracking-[0.14em]"
              />
              <p className="text-xs tracking-[0.06em] text-[var(--site-subtle)]">
                面談は営業ではなく、適合性の確認です。
              </p>
            </div>
          </div>
        </section>

        <section id="premise" className="section-surface site-y border-b border-[var(--site-line)]">
          <div className="site-container">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
              1. Premise Destruction
            </p>
            <h2 className="max-w-4xl font-serif text-3xl leading-snug md:text-5xl">
              「人を増やせば伸びる」は、
              <br />
              すでに過去の前提です。
            </h2>
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-[var(--site-muted)]">
              採用難、情報過多、判断遅延。
              <br />
              問題は市場ではなく、意思決定の設計にあります。
            </p>
          </div>
        </section>

        <section id="perspective" className="site-y border-b border-[var(--site-line)] bg-[var(--site-bg)]">
          <div className="site-container">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
              2. Perspective
            </p>
            <h2 className="max-w-4xl font-serif text-3xl leading-snug md:text-5xl">
              AIは効率化ツールではない。
              <br />
              経営の視点そのものを変える装置です。
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                "人の能力ではなく、判断の流れを見る。",
                "施策ではなく、判断基準を先に定義する。",
                "改善ではなく、経営のOSを更新する。",
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
            <h2 className="max-w-4xl font-serif text-3xl leading-snug md:text-5xl">
              私たちが設計するのは、
              <br />
              成果ではなく、成果が生まれる構造です。
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "速さではなく、密度。",
                  text: "早く打つことより、正しく決め続けることを優先する。",
                },
                {
                  title: "再現性は、設計から生まれる。",
                  text: "優秀な一人に依存しない。誰が実行しても思想が残る構造を作る。",
                },
                {
                  title: "拡大より前に、定義。",
                  text: "何を捨て、何に集中するか。曖昧なまま実行しない。",
                },
                {
                  title: "AIは代行者ではない。",
                  text: "意思決定の質を引き上げるために、AIを構造に埋め込む。",
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

        <section id="proof" className="site-y border-b border-[var(--site-line)] bg-[var(--site-bg)]">
          <div className="site-container">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
              4. Proof
            </p>
            <h2 className="max-w-4xl font-serif text-3xl leading-snug md:text-5xl">
              実績は、思想の副産物。
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "B2B SaaS",
                  metric: "自然流入 4.8x",
                  detail: "属人的な記事制作から、判断基準に基づく編集構造へ。",
                },
                {
                  name: "Education",
                  metric: "申込CVR 167%",
                  detail: "広告と追客の分断を解消し、意思決定の往復を一本化。",
                },
                {
                  name: "D2C",
                  metric: "CPA -31%",
                  detail: "獲得とLTV評価を同一思想で再設計し、投資効率を改善。",
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
            <h2 className="max-w-4xl font-serif text-3xl leading-snug md:text-5xl">
              依頼主と支援会社ではなく、
              <br />
              意思決定を共に背負う関係へ。
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                "短期施策の発注先を探している方には向きません。",
                "経営者自身が判断に関与することを前提にします。",
                "成果だけでなく、判断の質を評価できる方と組みます。",
              ].map((item) => (
                <article key={item} className="section-card rounded-2xl p-6">
                  <p className="text-sm text-[var(--site-muted)]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="filter" className="site-y border-b border-[var(--site-line)] bg-[var(--site-bg)]">
          <div className="site-container">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
              6. Filter
            </p>
            <h2 className="max-w-4xl font-serif text-3xl leading-snug md:text-5xl">
              すべての相談を受けません。
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                "価格比較が主目的の方",
                "丸投げで成果だけを求める方",
                "AIを効率化ツールとしてしか見ていない方",
                "意思決定を変える意思がない方",
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
            <h2 className="max-w-4xl font-serif text-3xl leading-snug md:text-5xl">
              面談は提案ではなく、
              <br />
              相互選定です。
            </h2>
            <p className="mt-6 max-w-2xl text-sm text-[var(--site-muted)] md:text-base">
              思想と課題の解像度が一致する場合のみ、初回面談へ進みます。
              <br />
              合わない場合は、理由を明確にお伝えして終了します。
            </p>

            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
