"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const pages: { href: string; label: string }[] = [
  { href: "/", label: "Overview" },
  { href: "/introduction", label: "Global Context" },
  { href: "/project", label: "Project Overview" },
  { href: "/tokenisation", label: "Asset Tokenisation" },
  { href: "/money", label: "Forms of Money" },
  { href: "/regulation", label: "Legal & Regulatory" },
  { href: "/road-ahead", label: "Road Ahead" },
  { href: "/use-cases", label: "Use Cases" },
];

const REPORT_URL =
  "https://www.rba.gov.au/payments-and-infrastructure/central-bank-digital-currency/pdf/project-acacia-final-report.pdf";

export function Footer() {
  const pathname = usePathname();
  const idx = pages.findIndex((p) => p.href === pathname);
  const prev = idx > 0 ? pages[idx - 1] : null;
  const next = idx >= 0 && idx < pages.length - 1 ? pages[idx + 1] : null;

  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: 80, padding: "48px 24px 32px" }}>
      <div
        className="container-rem footer-nav"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}
      >
        <PageLink dir="prev" page={prev} />
        <PageLink dir="next" page={next} />
      </div>

      <div
        className="container-rem footer-meta"
        style={{
          marginTop: 40,
          paddingTop: 24,
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
          color: "var(--text-dim)",
          fontSize: 12,
          lineHeight: 1.6,
        }}
      >
        <p style={{ margin: 0, maxWidth: 560 }}>
          Interpreting the{" "}
          <a
            href={REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline", textUnderlineOffset: 2 }}
          >
            Project Acacia final report
          </a>{" "}
          by the Reserve Bank of Australia &amp; Digital Finance CRC, 2026.
        </p>

        <a
          href="https://rem.money"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "var(--text-dim)",
            textDecoration: "none",
          }}
        >
          <span>Crafted by</span>
          <Image
            src="/rem.png"
            alt="rem.money"
            width={20}
            height={20}
            style={{ borderRadius: 4, display: "block" }}
          />
          <span style={{ color: "rgba(255,255,255,0.78)", fontWeight: 600 }}>rem.money</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-nav { grid-template-columns: 1fr !important; }
          .footer-meta { justify-content: flex-start !important; }
        }
      `}</style>
    </footer>
  );
}

function PageLink({ dir, page }: { dir: "prev" | "next"; page: { href: string; label: string } | null }) {
  const isNext = dir === "next";
  const align = isNext ? "flex-end" : "flex-start";
  const textAlign = isNext ? "right" : "left";

  if (!page) {
    return <div style={{ visibility: "hidden" }} aria-hidden />;
  }

  return (
    <Link
      href={page.href}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align,
        gap: 6,
        padding: "18px 20px",
        border: "1px solid var(--border)",
        borderRadius: 12,
        textDecoration: "none",
        background: "rgba(255,255,255,0.015)",
        transition: "background var(--duration-fast), border-color var(--duration-fast), transform var(--duration-fast)",
      }}
      className="footer-pagelink"
    >
      <span
        style={{
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--text-dim)",
          textAlign: textAlign as "left" | "right",
          width: "100%",
        }}
      >
        {isNext ? "Next →" : "← Previous"}
      </span>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 18,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          color: "rgba(255,255,255,0.92)",
          textAlign: textAlign as "left" | "right",
          width: "100%",
        }}
      >
        {page.label}
      </span>
      <style>{`
        .footer-pagelink:hover {
          background: rgba(252,191,72,0.06) !important;
          border-color: rgba(252,191,72,0.35) !important;
        }
      `}</style>
    </Link>
  );
}
