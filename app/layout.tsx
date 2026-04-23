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
  title: "Thought Driven Studio | 思想ドリブンLP",
  description:
    "売るためではなく、選ぶためのページ。紹介で届いた人物に向け、思想と適合性を示す。",
  openGraph: {
    title: "Thought Driven Studio | 思想ドリブンLP",
    description:
      "富裕層・投資家・事業オーナー向け。売らず、説明しすぎず、思想で選別するページ。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thought Driven Studio | 思想ドリブンLP",
    description:
      "思想が合う相手とだけ意思決定を設計する、選別型の対話ページ。",
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
      <body className="min-h-full font-sans text-[var(--site-fg)]">
        {children}
      </body>
    </html>
  );
}
