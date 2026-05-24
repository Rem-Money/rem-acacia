"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const chapters = [
  { href: "/introduction", label: "Context" },
  { href: "/project", label: "Project" },
  { href: "/tokenisation", label: "Tokenisation" },
  { href: "/money", label: "Money" },
  { href: "/regulation", label: "Regulation" },
  { href: "/road-ahead", label: "Road Ahead" },
];

function mobileLinkStyle(active: boolean) {
  return {
    display: "block" as const,
    padding: "10px 12px",
    fontSize: 14,
    color: active ? "#fff" : "rgba(255,255,255,0.85)",
    background: active ? "rgba(252,191,72,0.08)" : "transparent",
    borderRadius: 8,
  };
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const chaptersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setChaptersOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!chaptersOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (chaptersRef.current && !chaptersRef.current.contains(e.target as Node)) {
        setChaptersOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setChaptersOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [chaptersOpen]);

  const chapterActive = chapters.some(
    (c) => pathname === c.href || pathname.startsWith(c.href + "/")
  );
  const overviewActive = pathname === "/";
  const participantsActive = pathname.startsWith("/participants");
  const useCasesActive = pathname.startsWith("/use-cases");
  const withRemActive = pathname === "/with-rem";

  const navLinkStyle = (active: boolean) => ({
    fontSize: 13,
    fontWeight: 500,
    padding: "8px 12px",
    color: active ? "#fff" : "rgba(255,255,255,0.65)",
    background: active ? "rgba(252,191,72,0.10)" : "transparent",
    borderRadius: 8,
    transition: "color var(--duration-fast), background var(--duration-fast)",
    whiteSpace: "nowrap" as const,
  });

  return (
    <nav
      style={{
        position: "fixed",
        top: 12,
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: 1200,
        width: "calc(100% - 32px)",
        zIndex: 50,
        background: scrolled ? "rgba(11,11,11,0.78)" : "rgba(11,11,11,0.55)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid var(--border)",
        borderRadius: 13,
        padding: "8px 12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background var(--duration-normal) var(--ease-out-quart)",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 6px", flexShrink: 0 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, letterSpacing: "-0.02em", display: "inline-flex", alignItems: "center", gap: 8 }}>
          Acacia<span style={{ color: "var(--yellow)" }}>.</span>
        </span>
        <span
          aria-hidden
          className="nav-attribution"
          style={{
            width: 1,
            height: 14,
            background: "var(--border)",
            display: "inline-block",
          }}
        />
        <span
          className="nav-attribution"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            fontSize: 11,
            color: "var(--text-dim)",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ opacity: 0.85 }}>explored by</span>
          <Image
            src="/rem.png"
            alt="rem.money"
            width={16}
            height={16}
            style={{ borderRadius: 3, display: "block" }}
          />
          <span style={{ color: "rgba(255,255,255,0.78)", fontWeight: 600 }}>rem</span>
        </span>
      </Link>

      <div className="nav-links" style={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Link href="/" style={navLinkStyle(overviewActive)}>
          Overview
        </Link>

        <div ref={chaptersRef} style={{ position: "relative" }}>
          <button
            type="button"
            onClick={() => setChaptersOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={chaptersOpen}
            style={{
              ...navLinkStyle(chapterActive || chaptersOpen),
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Chapters
            <svg
              width="9"
              height="9"
              viewBox="0 0 10 10"
              aria-hidden
              style={{
                transition: "transform var(--duration-fast) var(--ease-out-quart)",
                transform: chaptersOpen ? "rotate(180deg)" : "rotate(0deg)",
                opacity: 0.7,
              }}
            >
              <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {chaptersOpen && (
            <div
              role="menu"
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: 0,
                minWidth: 220,
                background: "rgba(17,17,17,0.97)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 6,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
                animation: "fade-in 180ms var(--ease-out-quart)",
              }}
            >
              {chapters.map((c, idx) => {
                const active = pathname === c.href || pathname.startsWith(c.href + "/");
                return (
                  <Link
                    key={c.href}
                    href={c.href}
                    role="menuitem"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 10px",
                      fontSize: 13,
                      color: active ? "#fff" : "rgba(255,255,255,0.78)",
                      background: active ? "rgba(252,191,72,0.08)" : "transparent",
                      borderRadius: 7,
                    }}
                  >
                    <span
                      style={{
                        fontVariantNumeric: "tabular-nums",
                        fontSize: 11,
                        color: "var(--text-dim)",
                        width: 16,
                        textAlign: "right",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {c.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <Link href="/participants" style={navLinkStyle(participantsActive)}>
          Participants
        </Link>

        <Link href="/use-cases" style={navLinkStyle(useCasesActive)}>
          Use Cases
        </Link>

        <Link
          href="/with-rem"
          style={{
            fontSize: 13,
            fontWeight: 600,
            padding: "7px 12px",
            marginLeft: 6,
            color: withRemActive ? "#0b0b0b" : "var(--yellow)",
            background: withRemActive ? "var(--yellow)" : "rgba(252,191,72,0.10)",
            border: "1px solid rgba(252,191,72,0.32)",
            borderRadius: 8,
            transition: "color var(--duration-fast), background var(--duration-fast)",
            whiteSpace: "nowrap",
          }}
        >
          Work with rem →
        </Link>
      </div>

      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="nav-hamburger"
        style={{
          display: "none",
          width: 36,
          height: 36,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "transparent",
          border: "1px solid var(--border)",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <span
          aria-hidden
          style={{
            position: "relative",
            width: 16,
            height: 12,
            display: "block",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: open ? 5 : 0,
              height: 1.5,
              background: "#fff",
              borderRadius: 1,
              transition: "top 180ms var(--ease-out-quart), transform 180ms var(--ease-out-quart)",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              transformOrigin: "center",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 5,
              height: 1.5,
              background: "#fff",
              borderRadius: 1,
              transition: "opacity 120ms",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: open ? 5 : 10,
              height: 1.5,
              background: "#fff",
              borderRadius: 1,
              transition: "top 180ms var(--ease-out-quart), transform 180ms var(--ease-out-quart)",
              transform: open ? "rotate(-45deg)" : "rotate(0deg)",
              transformOrigin: "center",
            }}
          />
        </span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            right: 0,
            background: "rgba(17,17,17,0.96)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: 8,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            maxHeight: "calc(100vh - 96px)",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <Link href="/" style={mobileLinkStyle(overviewActive)}>
            Overview
          </Link>

          <div
            style={{
              padding: "10px 12px 4px",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-dim)",
              fontWeight: 600,
            }}
          >
            Chapters
          </div>
          {chapters.map((c, idx) => {
            const active = pathname === c.href || pathname.startsWith(c.href + "/");
            return (
              <Link
                key={c.href}
                href={c.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  fontSize: 14,
                  color: active ? "#fff" : "rgba(255,255,255,0.82)",
                  background: active ? "rgba(252,191,72,0.08)" : "transparent",
                  borderRadius: 8,
                }}
              >
                <span
                  style={{
                    fontVariantNumeric: "tabular-nums",
                    fontSize: 11,
                    color: "var(--text-dim)",
                    width: 18,
                    textAlign: "right",
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {c.label}
              </Link>
            );
          })}

          <div style={{ height: 1, background: "var(--border)", margin: "6px 8px" }} />

          <Link href="/participants" style={mobileLinkStyle(participantsActive)}>
            Participants
          </Link>

          <Link href="/use-cases" style={mobileLinkStyle(useCasesActive)}>
            Use Cases
          </Link>

          <Link
            href="/with-rem"
            style={{
              display: "block",
              padding: "10px 12px",
              fontSize: 14,
              fontWeight: 600,
              color: withRemActive ? "#0b0b0b" : "var(--yellow)",
              background: withRemActive ? "var(--yellow)" : "rgba(252,191,72,0.10)",
              border: "1px solid rgba(252,191,72,0.28)",
              borderRadius: 8,
              marginTop: 6,
            }}
          >
            Work with rem →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: inline-flex !important; }
        }
        @media (max-width: 640px) {
          .nav-attribution { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
