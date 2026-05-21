"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Overview" },
  { href: "/introduction", label: "Context" },
  { href: "/project", label: "Project" },
  { href: "/tokenisation", label: "Tokenisation" },
  { href: "/money", label: "Money" },
  { href: "/regulation", label: "Regulation" },
  { href: "/road-ahead", label: "Road Ahead" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/companies", label: "Companies" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 12,
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: 1080,
        width: "calc(100% - 24px)",
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
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 6px" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, letterSpacing: "-0.02em", display: "inline-flex", alignItems: "center", gap: 8 }}>
          Acacia<span style={{ color: "var(--yellow)" }}>.</span>
        </span>
        <span
          aria-hidden
          style={{
            width: 1,
            height: 14,
            background: "var(--border)",
            display: "inline-block",
          }}
        />
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            fontSize: 11,
            color: "var(--text-dim)",
            letterSpacing: "0.02em",
          }}
        >
          <span style={{ opacity: 0.85 }}>by</span>
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
        {links.map((l) => {
          const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
          return (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: 13,
                fontWeight: 500,
                padding: "8px 12px",
                color: active ? "#fff" : "rgba(255,255,255,0.65)",
                background: active ? "rgba(252,191,72,0.10)" : "transparent",
                borderRadius: 8,
                transition: "color var(--duration-fast), background var(--duration-fast)",
              }}
            >
              {l.label}
            </Link>
          );
        })}
      </div>

      <button
        aria-label="Menu"
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
        }}
      >
        <span
          style={{
            display: "block",
            width: 14,
            height: 1.5,
            background: "#fff",
            position: "relative",
            transition: "transform 200ms",
            transform: open ? "rotate(45deg) translateY(0)" : "translateY(-3px)",
            boxShadow: open ? "none" : "0 6px 0 0 #fff",
          }}
        />
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
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                display: "block",
                padding: "10px 12px",
                fontSize: 14,
                color: "rgba(255,255,255,0.85)",
                borderRadius: 8,
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: inline-flex !important; }
        }
      `}</style>
    </nav>
  );
}

