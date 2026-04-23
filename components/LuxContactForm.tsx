"use client";

import { FormEvent, useState } from "react";

const CONTACT_LINE_URL = "https://lin.ee/oocZ0Cw9";

const fields = [
  { id: "name", name: "name", label: "お名前", type: "text", autoComplete: "name", placeholder: "山田 太郎" },
  { id: "company", name: "company", label: "会社名 / 肩書", type: "text", autoComplete: "organization", placeholder: "株式会社〇〇 / 代表取締役" },
  { id: "email", name: "email", label: "メールアドレス", type: "email", autoComplete: "email", placeholder: "name@company.co.jp" },
] as const;

export default function LuxContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    if (!name || !company || !email) return;

    window.location.href = CONTACT_LINE_URL;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="py-10 text-center">
        <span className="lux-gold-line mx-auto" />
        <p className="mt-6 font-serif text-[1.1rem] font-medium leading-[1.5] tracking-[-0.01em] text-[var(--lux-fg)]">
          LINE公式アカウントへ移動します
        </p>
        <p className="mt-4 text-[13px] leading-[1.9] tracking-[0.04em] text-[var(--lux-muted)]">
          移動できない場合は{" "}
          <a
            href={CONTACT_LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--lux-gold)] underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            こちら
          </a>{" "}
          からご連絡ください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      {fields.map(({ id, name, label, type, autoComplete, placeholder }) => (
        <div key={id}>
          <label
            htmlFor={id}
            className="mb-2.5 block font-mono text-[9px] uppercase tracking-[0.28em] text-[var(--lux-muted)]"
          >
            {label}
          </label>
          <input
            id={id}
            name={name}
            type={type}
            required
            autoComplete={autoComplete}
            placeholder={placeholder}
            className="lux-input"
            inputMode={type === "email" ? "email" : undefined}
          />
        </div>
      ))}

      <div className="pt-2">
        <button
          type="submit"
          className="cta-solid flex h-[3.25rem] w-full items-center justify-center rounded-sm shadow-[0_0_40px_rgba(181,143,96,0.08)]"
        >
          対話を申し込む →
        </button>
      </div>

      <p className="text-center font-mono text-[9px] leading-[1.9] tracking-[0.14em] text-[var(--lux-subtle)]">
        3項目のみ · 返信は1営業日以内 · 即導入の義務なし
      </p>
    </form>
  );
}
