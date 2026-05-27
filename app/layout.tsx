import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { LinkedInInsightTag } from 'nextjs-linkedin-insight-tag';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, PUBLISHER } from "@/lib/seo";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const OG_TITLE = `${SITE_NAME} — Independent reading of the RBA × DFCRC report`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: OG_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: PUBLISHER.name, url: PUBLISHER.url }],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: OG_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    // opengraph-image.tsx file convention auto-injects the image
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: SITE_DESCRIPTION,
    // opengraph-image.tsx is also used for twitter by default
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${PUBLISHER.url}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${PUBLISHER.url}/#organization`,
      name: PUBLISHER.name,
      url: PUBLISHER.url,
      sameAs: ["https://rem.money"],
    },
    {
      "@type": "Report",
      "@id": `${SITE_URL}/#report`,
      name: "Project Acacia Phase 2 — Independent Reading",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      author: { "@id": `${PUBLISHER.url}/#organization` },
      about: {
        "@type": "Thing",
        name: "Project Acacia",
        description:
          "RBA × DFCRC initiative exploring tokenised wholesale asset markets and forms of digital money in Australia.",
      },
      datePublished: "2026-05-27",
      inLanguage: "en-AU",
      isBasedOn: {
        "@type": "Report",
        name: "Project Acacia Phase 2 Final Report",
        author: [
          { "@type": "Organization", name: "Reserve Bank of Australia" },
          { "@type": "Organization", name: "Digital Finance Cooperative Research Centre" },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>
          {children}
          <Analytics />
          <LinkedInInsightTag />
        </main>
        <Footer />
      </body>
    </html>
  );
}
