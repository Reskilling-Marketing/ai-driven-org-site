const layers = [
  {
    index: "01",
    label: "Diagnosis",
    title: "構造の可視化",
    body: "現状の業務・組織・意思決定フローを整理し、どこに構造上の問題があるかを特定する。",
  },
  {
    index: "02",
    label: "Architecture",
    title: "成長構造の設計",
    body: "AI / Ads / SEO / CRM / LINE / Automation ——これらを個別施策としてではなく、一つの成長構造として設計する。",
  },
  {
    index: "03",
    label: "Enablement",
    title: "内製化と定着",
    body: "外部依存を減らし、組織が自走できる状態にする。知識を移転し、意思決定の速度を上げる。",
  },
];

const capabilities = [
  "AI / Automation",
  "Paid Ads",
  "SEO / Content",
  "CRM / LINE",
  "Data Analysis",
  "Enablement",
];

export default function LuxArchitecture() {
  return (
    <section className="border-b border-[var(--lux-line)]">
      <div className="lux-container lux-y">
        <div className="mx-auto max-w-5xl">
          <p className="lux-label">Methodology</p>
          <h2 className="lux-h2 mt-12 max-w-[28rem] balance md:mt-14">
            思想が、設計図になる。
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-[2.05] tracking-[0.04em] text-[var(--lux-muted)]">
            施策の数を増やすことが目的ではない。
            各施策が連動し、成果が構造的に生まれる状態を設計する。
          </p>

          <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-16">
            {/* Left: methodology steps */}
            <div>
              {layers.map((l, i) => (
                <div
                  key={l.index}
                  className={`py-10 md:py-12 ${i > 0 ? "border-t border-[var(--lux-line)]" : ""}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[9px] tracking-[0.28em] text-[var(--lux-gold)]">
                      {l.index}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.2em] text-[var(--lux-muted)]">
                      {l.label}
                    </span>
                  </div>
                  <p className="mt-4 font-serif text-[clamp(1.1rem,2vw,1.35rem)] font-medium leading-[1.4] tracking-[-0.015em] text-[var(--lux-fg)]">
                    {l.title}
                  </p>
                  <p className="mt-4 text-[14px] leading-[2] tracking-[0.04em] text-[var(--lux-muted)]">
                    {l.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: capability map — pure CSS, no image */}
            <div className="self-start md:sticky md:top-24">
              {/* Grid background via CSS */}
              <div
                className="relative overflow-hidden border border-[var(--lux-line-gold)] bg-[var(--lux-surface)] p-8 md:p-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(237,232,223,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,232,223,0.04) 1px, transparent 1px)",
                  backgroundSize: "3rem 3rem",
                }}
              >
                {/* Gold accent corner */}
                <div className="absolute left-0 top-0 h-8 w-px bg-[var(--lux-gold)]" />
                <div className="absolute left-0 top-0 h-px w-8 bg-[var(--lux-gold)]" />

                <p className="lux-label mb-8">Integrated Structure</p>

                <div className="grid grid-cols-2 gap-3">
                  {capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="border border-[var(--lux-line-strong)] bg-[var(--lux-bg)]/70 px-4 py-3 transition-colors hover:border-[var(--lux-line-gold)]"
                    >
                      <p className="font-mono text-[10px] leading-tight tracking-[0.12em] text-[var(--lux-muted)]">
                        {cap}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-[12px] leading-[1.9] tracking-[0.04em] text-[var(--lux-muted)]">
                  これらは独立した施策ではなく、一つの構造の各層として機能する。
                </p>

                {/* Bottom right corner accent */}
                <div className="absolute bottom-0 right-0 h-8 w-px bg-[var(--lux-gold)]" />
                <div className="absolute bottom-0 right-0 h-px w-8 bg-[var(--lux-gold)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
