import type { Metadata } from "next";
import Link from "next/link";
import LuxFooter from "@/components/LuxFooter";
import LuxHeader from "@/components/LuxHeader";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col">
      <LuxHeader />
      <main className="flex flex-1 items-center">
        <div className="lux-container py-32 md:py-40">
          <div className="mx-auto max-w-2xl">
            <p className="lux-label">404</p>
            <h1 className="lux-h2 mt-10 max-w-[22rem] balance md:mt-12">
              ページが見つかりません。
            </h1>
            <p className="mt-6 text-[14px] leading-[2.05] tracking-[0.04em] text-[var(--lux-muted)]">
              URLが変更されているか、削除された可能性があります。
            </p>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href="/"
                className="cta-solid inline-flex h-[3.25rem] min-w-[12rem] items-center justify-center rounded-sm px-8"
              >
                トップへ戻る
              </Link>
              <Link
                href="https://lin.ee/oocZ0Cw9"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.18em] text-[var(--lux-muted)] transition-colors hover:text-[var(--lux-fg)]"
              >
                対話する ↗
              </Link>
            </div>
          </div>
        </div>
      </main>
      <LuxFooter />
    </div>
  );
}
