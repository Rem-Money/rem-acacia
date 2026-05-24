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
  { href: "/participants", label: "Participants" },
  { href: "/with-rem", label: "Work with rem" },
];

const REPORT_URL =
  "https://www.rba.gov.au/payments-and-infrastructure/central-bank-digital-currency/pdf/project-acacia-final-report.pdf";

export function Footer() {
  const pathname = usePathname();
  const idx = pages.findIndex((p) => p.href === pathname);
  const prev = idx > 0 ? pages[idx - 1] : null;
  const next = idx >= 0 && idx < pages.length - 1 ? pages[idx + 1] : null;

  return (
    <footer className="site-footer" style={{ borderTop: "1px solid var(--border)", marginTop: 80, padding: "48px 24px 32px" }}>
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
        className="container-rem footer-trust"
        style={{
          marginTop: 40,
          paddingTop: 28,
          borderTop: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: 28,
          color: "var(--text-dim)",
          fontSize: 12.5,
          lineHeight: 1.65,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              color: "rgba(255,255,255,0.88)",
              fontWeight: 600,
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.01em",
            }}
          >
            <Image
              src="/rem.png"
              alt=""
              width={18}
              height={18}
              style={{ borderRadius: 4, display: "block" }}
            />
            rem labs
          </div>
          <p style={{ margin: "8px 0 0", maxWidth: 360, color: "var(--text-dim)" }}>
            Research and development for stablecoin and tokenisation infrastructure.
          </p>
        </div>

        <div>
          <div
            style={{
              fontSize: 10.5,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-dim)",
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            Contact
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
            <li>
              <a
                href="mailto:hello@rem.money"
                style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}
              >
                hello@rem.money
              </a>
            </li>
            <li>
              <a
                href="https://rem.money"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}
              >
                rem.money ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div
            style={{
              fontSize: 10.5,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-dim)",
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            Legal
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
            <li>
              <a
                href="https://rem.money/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="https://rem.money/terms"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href={REPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}
              >
                Source report ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="container-rem footer-meta"
        style={{
          marginTop: 28,
          paddingTop: 18,
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          color: "var(--text-dim)",
          fontSize: 11.5,
          lineHeight: 1.55,
        }}
      >
        <p style={{ margin: 0, maxWidth: 640 }}>
          Independent interpretation of the{" "}
          <a
            href={REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.7)", textDecoration: "underline", textUnderlineOffset: 2 }}
          >
            Project Acacia final report
          </a>{" "}
          by the RBA &amp; Digital Finance CRC (2026). Not affiliated with the RBA or DFCRC.
        </p>

        <span style={{ whiteSpace: "nowrap" }}>© {new Date().getFullYear()} rem labs</span>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .footer-trust { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .site-footer { margin-top: 48px !important; padding: 32px 18px 24px !important; }
          .footer-nav { grid-template-columns: 1fr !important; }
          .footer-trust { grid-template-columns: 1fr !important; gap: 22px !important; }
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
