import type { MetadataRoute } from "next";

const SITE_URL = "https://example.com"; // ← 実際のドメインに変更してください

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
