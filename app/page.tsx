import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TrackedLinkButton from "@/components/TrackedLinkButton";

type HomeProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

type ThoughtItem = { title: string; text: string };
type ProofItem = { name: string; metric: string; detail: string };

type PageContent = {
  heroBadge: string;
  heroTitle: [string, string];
  heroLead: [string, string];
  heroNote: string;
  section1Title: [string, string];
  section1Text: [string, string];
  section2Title: [string, string];
  section2Lines: string[];
  section3Title: [string, string];
  section3Items: ThoughtItem[];
  section4Title: string;
  section4Items: ProofItem[];
  section5Title: [string, string];
  section5Lines: string[];
  section6Title: string;
  section6Lines: string[];
  section7Title: [string, string];
  section7Text: [string, string];
};

const CONTENT: Record<"a" | "b", PageContent> = {
  a: {
    heroBadge: "Invitation Only",
    heroTitle: ["売上より先に、", "思考の構造を変える。"],
    heroLead: ["ここは、集客のためのページではありません。", "紹介で届いた方のためだけに、思想を置いています。"],
    heroNote: "面談は営業ではなく、適合性の確認です。",
    section1Title: ["「人を増やせば伸びる」は、", "すでに過去の前提です。"],
    section1Text: ["採用難、情報過多、判断遅延。", "問題は市場ではなく、意思決定の設計にあります。"],
    section2Title: ["AIは効率化ツールではない。", "経営の視点そのものを変える装置です。"],
    section2Lines: [
      "人の能力ではなく、判断の流れを見る。",
      "施策ではなく、判断基準を先に定義する。",
      "改善ではなく、経営のOSを更新する。",
    ],
    section3Title: ["私たちが設計するのは、", "成果ではなく、成果が生まれる構造です。"],
    section3Items: [
      { title: "速さではなく、密度。", text: "早く打つことより、正しく決め続けることを優先する。" },
      {
        title: "再現性は、設計から生まれる。",
        text: "優秀な一人に依存しない。誰が実行しても思想が残る構造を作る。",
      },
      { title: "拡大より前に、定義。", text: "何を捨て、何に集中するか。曖昧なまま実行しない。" },
      { title: "AIは代行者ではない。", text: "意思決定の質を引き上げるために、AIを構造に埋め込む。" },
    ],
    section4Title: "実績は、思想の副産物。",
    section4Items: [
      { name: "B2B SaaS", metric: "自然流入 4.8x", detail: "属人的な記事制作から、判断基準に基づく編集構造へ。" },
      { name: "Education", metric: "申込CVR 167%", detail: "広告と追客の分断を解消し、意思決定の往復を一本化。" },
      { name: "D2C", metric: "CPA -31%", detail: "獲得とLTV評価を同一思想で再設計し、投資効率を改善。" },
    ],
    section5Title: ["依頼主と支援会社ではなく、", "意思決定を共に背負う関係へ。"],
    section5Lines: [
      "短期施策の発注先を探している方には向きません。",
      "経営者自身が判断に関与することを前提にします。",
      "成果だけでなく、判断の質を評価できる方と組みます。",
    ],
    section6Title: "すべての相談を受けません。",
    section6Lines: [
      "価格比較が主目的の方",
      "丸投げで成果だけを求める方",
      "AIを効率化ツールとしてしか見ていない方",
      "意思決定を変える意思がない方",
    ],
    section7Title: ["面談は提案ではなく、", "相互選定です。"],
    section7Text: [
      "思想と課題の解像度が一致する場合のみ、初回面談へ進みます。",
      "合わない場合は、理由を明確にお伝えして終了します。",
    ],
  },
  b: {
    heroBadge: "Private Entry",
    heroTitle: ["拡大の前に、", "前提を切り替える。"],
    heroLead: ["このページは、受注のために作っていません。", "紹介された少数の判断者だけを想定しています。"],
    heroNote: "合わない場合、面談は実施しません。",
    section1Title: ["努力不足ではない。", "設計不足です。"],
    section1Text: ["事業が止まる理由は、人材の量ではありません。", "判断構造の曖昧さです。"],
    section2Title: ["AIはコスト削減の道具ではない。", "意思決定の解像度を上げるインフラです。"],
    section2Lines: [
      "施策数ではなく、判断精度を管理する。",
      "スピードより、意思決定の一貫性を優先する。",
      "運用改善ではなく、経営OSの再定義を行う。",
    ],
    section3Title: ["私たちは施策会社ではない。", "意思決定設計の会社です。"],
    section3Items: [
      { title: "売れる手段は、後でいい。", text: "先に定義すべきは、何を捨てるかという基準です。" },
      { title: "再現性は偶然で生まれない。", text: "強い個人を増やすより、強い判断構造を作る。" },
      { title: "拡大は、整合の結果。", text: "思想・組織・実装が揃わない拡大は、いずれ崩れる。" },
      { title: "AIに任せるのではない。", text: "AIを使って、人間の判断責任を高める。" },
    ],
    section4Title: "数字は、設計思想の検証値。",
    section4Items: [
      { name: "B2B SaaS", metric: "自然流入 4.8x", detail: "コンテンツ量産を止め、判断基準主導の編集体制へ移行。" },
      { name: "Education", metric: "申込CVR 167%", detail: "集客と追客を統合し、意思決定の遅延コストを削減。" },
      { name: "D2C", metric: "CPA -31%", detail: "獲得施策ではなく、投資判断ルールの再設計で改善。" },
    ],
    section5Title: ["依頼関係ではなく、", "思想の同盟関係を求めます。"],
    section5Lines: [
      "受注者として扱われる前提の案件は受けません。",
      "経営者が判断責任を持たない案件は進めません。",
      "短期成果のみを評価軸にする案件は対象外です。",
    ],
    section6Title: "以下に当てはまる方は、ご遠慮ください。",
    section6Lines: [
      "価格と納期だけで比較したい方",
      "成果だけを委託したい方",
      "意思決定に時間を使う意思がない方",
      "AIを便利機能としてしか扱わない方",
    ],
    section7Title: ["面談は営業機会ではなく、", "選別の場です。"],
    section7Text: [
      "思想と責任範囲が一致した場合のみ、具体設計へ進みます。",
      "一致しない場合は、その場で終了します。",
    ],
  },
};

export default async function Home({ searchParams }: HomeProps) {
  const params = searchParams ? await searchParams : {};
  const vParam = params?.v;
  const variantRaw = Array.isArray(vParam) ? vParam[0] : vParam;
  const ctaVariant = variantRaw === "b" ? "b" : "a";
  const content = CONTENT[ctaVariant];
  const ctaLabel = ctaVariant === "b" ? "面談の可否を確認する" : "思想の適合性を確認する";

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section className="hero-surface border-b border-[var(--site-line)] pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="site-container">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--site-subtle)]">
              {content.heroBadge}
            </p>
            <h1 className="max-w-5xl font-sans text-4xl font-medium leading-[1.12] tracking-[-0.02em] text-[var(--site-fg)] md:text-6xl md:leading-[1.08]">
              {content.heroTitle[0]}
              <br />
              {content.heroTitle[1]}
            </h1>
            <p className="mt-9 max-w-2xl text-[15px] leading-8 text-[var(--site-muted)] md:text-lg">
              {content.heroLead[0]}
              <br />
              {content.heroLead[1]}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3.5">
              <TrackedLinkButton
                href="#contact"
                label={ctaLabel}
                variant={ctaVariant}
                eventName="hero_cta_click"
                className="cta-primary inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-medium"
              />
              <a
                href="#proof"
                className="cta-secondary inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-medium"
              >
                実績を見る
              </a>
              <p className="text-xs tracking-[0.06em] text-[var(--site-subtle)]">
                {content.heroNote}
              </p>
            </div>
          </div>
        </section>

        <section id="premise" className="section-surface site-y border-b border-[var(--site-line)]">
          <div className="site-container">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
              1. Premise Destruction
            </p>
            <h2 className="max-w-4xl font-sans text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              {content.section1Title[0]}
              <br />
              {content.section1Title[1]}
            </h2>
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-[var(--site-muted)]">
              {content.section1Text[0]}
              <br />
              {content.section1Text[1]}
            </p>
          </div>
        </section>

        <section id="perspective" className="site-y border-b border-[var(--site-line)] bg-[var(--site-bg)]">
          <div className="site-container">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--site-subtle)]">
              2. Perspective
            </p>
            <h2 className="max-w-4xl font-sans text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              {content.section2Title[0]}
              <br />
              {content.section2Title[1]}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {content.section2Lines.map((line) => (
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
            <h2 className="max-w-4xl font-sans text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              {content.section3Title[0]}
              <br />
              {content.section3Title[1]}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {content.section3Items.map((item) => (
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
            <h2 className="max-w-4xl font-sans text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              {content.section4Title}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {content.section4Items.map((item) => (
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
            <h2 className="max-w-4xl font-sans text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              {content.section5Title[0]}
              <br />
              {content.section5Title[1]}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {content.section5Lines.map((item) => (
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
            <h2 className="max-w-4xl font-sans text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              {content.section6Title}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {content.section6Lines.map((item) => (
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
            <h2 className="max-w-4xl font-sans text-3xl font-medium leading-snug tracking-[-0.02em] md:text-5xl">
              {content.section7Title[0]}
              <br />
              {content.section7Title[1]}
            </h2>
            <p className="mt-6 max-w-2xl text-sm text-[var(--site-muted)] md:text-base">
              {content.section7Text[0]}
              <br />
              {content.section7Text[1]}
            </p>

            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
