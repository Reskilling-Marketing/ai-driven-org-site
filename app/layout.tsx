import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

const sansJP = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const serifJP = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Initial AI | 意思決定の構造を設計する",
    template: "%s | 思考パートナー",
  },
  description:
    "施策ではなく、構造を。意思決定の質を上げる知的伴走として、超富裕層経営者・オーナーと少数の長期的パートナーシップを結ぶ。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "Initial AI",
    description: "問いの精度が、事業の精度になる。",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Initial AI",
    description: "問いの精度が、事業の精度になる。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${sansJP.variable} ${serifJP.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans text-[var(--lux-fg)] bg-[var(--lux-bg)]">
        {/* Skip to main content — keyboard accessibility */}
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[200] -translate-y-20 rounded-sm bg-[var(--lux-fg)] px-4 py-2 font-mono text-[10px] tracking-[0.14em] text-[var(--lux-bg)] opacity-0 transition-transform focus:translate-y-0 focus:opacity-100"
        >
          コンテンツへスキップ
        </a>
        {children}
      </body>
    </html>
  );
}
