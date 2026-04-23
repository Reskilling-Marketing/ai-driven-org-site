"use client";

import { FormEvent, useMemo, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type FormDataShape = {
  company: string;
  name: string;
  email: string;
  challenge: string;
  objective: string;
};

const initialData: FormDataShape = {
  company: "",
  name: "",
  email: "",
  challenge: "",
  objective: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormDataShape>(initialData);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const isSubmitting = status === "submitting";

  const canSubmit = useMemo(() => {
    return (
      formData.company.trim().length > 1 &&
      formData.name.trim().length > 1 &&
      formData.email.trim().length > 5 &&
      formData.challenge.trim().length >= 20 &&
      formData.objective.trim().length >= 20
    );
  }, [formData]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit) {
      setStatus("error");
      setMessage("必須項目をご確認ください。課題と相談内容は20文字以上で入力してください。");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.message ?? "送信に失敗しました。入力内容をご確認ください。");
        return;
      }

      setStatus("success");
      setMessage(payload.message ?? "送信を受け付けました。内容確認後、2営業日以内にご連絡します。");
      setFormData(initialData);
    } catch {
      setStatus("error");
      setMessage("通信エラーが発生しました。時間を置いて再送してください。");
    }
  };

  return (
    <form onSubmit={onSubmit} className="section-card mt-10 grid gap-5 rounded-3xl p-6 md:grid-cols-2 md:p-8">
      <label className="flex flex-col gap-2 text-sm">
        会社名
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))}
          className="rounded-xl border border-[var(--site-line)] bg-[var(--site-surface)] px-3 py-2.5 text-sm outline-none ring-[var(--site-accent)]/35 transition focus:ring-2"
          placeholder="株式会社Example"
          required
          autoComplete="organization"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm">
        お名前
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
          className="rounded-xl border border-[var(--site-line)] bg-[var(--site-surface)] px-3 py-2.5 text-sm outline-none ring-[var(--site-accent)]/35 transition focus:ring-2"
          placeholder="山田 太郎"
          required
          autoComplete="name"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm md:col-span-2">
        メールアドレス
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
          className="rounded-xl border border-[var(--site-line)] bg-[var(--site-surface)] px-3 py-2.5 text-sm outline-none ring-[var(--site-accent)]/35 transition focus:ring-2"
          placeholder="example@company.jp"
          required
          autoComplete="email"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm md:col-span-2">
        なぜ今、意思決定構造を変える必要があるか（必須）
        <textarea
          name="challenge"
          rows={4}
          value={formData.challenge}
          onChange={(event) => setFormData((prev) => ({ ...prev, challenge: event.target.value }))}
          className="rounded-xl border border-[var(--site-line)] bg-[var(--site-surface)] px-3 py-2.5 text-sm outline-none ring-[var(--site-accent)]/35 transition focus:ring-2"
          placeholder="現状の判断がどこで詰まり、何を変えたいかを簡潔に記載してください"
          required
        />
      </label>
      <label className="flex flex-col gap-2 text-sm md:col-span-2">
        面談で確認したい論点（選考項目）
        <textarea
          name="objective"
          rows={4}
          value={formData.objective}
          onChange={(event) => setFormData((prev) => ({ ...prev, objective: event.target.value }))}
          className="rounded-xl border border-[var(--site-line)] bg-[var(--site-surface)] px-3 py-2.5 text-sm outline-none ring-[var(--site-accent)]/35 transition focus:ring-2"
          placeholder="何を相談したいかではなく、どの前提を疑っているかを記載してください"
          required
        />
      </label>
      <div className="flex items-center justify-between gap-4 md:col-span-2">
        <div>
          <p className="text-xs text-[var(--site-subtle)]">全件の面談実施は行いません。内容を確認し、2営業日以内に可否をご連絡します。</p>
          {message ? (
            <p
              className={`mt-2 text-xs ${
                status === "success" ? "text-emerald-600" : "text-rose-600"
              }`}
              aria-live="polite"
            >
              {message}
            </p>
          ) : null}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="cta-primary inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "送信中..." : "適合性を確認する"}
        </button>
      </div>
    </form>
  );
}
