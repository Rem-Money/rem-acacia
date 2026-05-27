import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standard crawlers
        userAgent: "*",
        allow: "/",
        disallow: "/from/",
      },
      {
        // AI/LLM crawlers — explicitly welcome them
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Googlebot",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended",
          "cohere-ai",
          "YouBot",
          "CCBot",
          "Bytespider",
        ],
        allow: "/",
        disallow: "/from/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
