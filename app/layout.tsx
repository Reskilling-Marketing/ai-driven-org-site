import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
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
  weight: ["500", "600"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIドリブン組織構築支援 | AI経営OS・組織設計",
  description:
    "オーナー・社長・経営幹部向け。設計50万〜100万、顧問月10万〜。AIで経営を再設計し、少人数で成果を出す構造を。",
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
      <body className="min-h-full font-sans text-[var(--site-fg)]">
        {children}
      </body>
    </html>
  );
}
