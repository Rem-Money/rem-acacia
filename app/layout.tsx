import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { LinkedInInsightTag } from 'nextjs-linkedin-insight-tag'

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

const SITE_URL = "https://acacia.rem.money";
const OG_TITLE = "Project Acacia — Independent reading of the RBA × DFCRC report";
const OG_DESCRIPTION =
  "An independent walkthrough of the RBA × DFCRC Project Acacia final report: tokenised wholesale asset markets, digital money, and the road ahead. By rem labs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: OG_TITLE,
    template: "%s — Project Acacia",
  },
  description: OG_DESCRIPTION,
  applicationName: "Project Acacia",
  authors: [{ name: "rem labs", url: "https://rem.money" }],
  openGraph: {
    type: "website",
    siteName: "Project Acacia",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Project Acacia — Independent reading of the RBA × DFCRC report",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/opengraph-image"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
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
