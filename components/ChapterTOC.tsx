"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

export function ChapterTOC({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside
      className="chapter-toc"
      aria-label="On this page"
      style={{
        position: "fixed",
        left: 24,
        top: "50%",
        transform: "translateY(-50%)",
        width: 196,
        maxHeight: "70vh",
        overflowY: "auto",
        padding: "14px 4px",
        zIndex: 30,
        background: "transparent",
      }}
    >
      <div
        style={{
          fontSize: 10,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--text-dim)",
          fontWeight: 700,
          marginBottom: 14,
          paddingLeft: 16,
        }}
      >
        On this page
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 2 }}>
        {sections.map((s) => {
          const isActive = s.id === active;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 12.5,
                  padding: "6px 12px 6px 16px",
                  color: isActive ? "#fff" : "var(--text-muted)",
                  fontWeight: isActive ? 600 : 400,
                  lineHeight: 1.45,
                  transition: "color var(--duration-fast) var(--ease-out-quart)",
                  borderRadius: 6,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    flexShrink: 0,
                    width: 5,
                    height: 5,
                    borderRadius: 5,
                    background: isActive ? "var(--yellow)" : "rgba(255,255,255,0.18)",
                    transition: "background var(--duration-fast) var(--ease-out-quart)",
                  }}
                />
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
      <style>{`
        @media (max-width: 1280px) {
          .chapter-toc { display: none !important; }
        }
        section[id] { scroll-margin-top: 96px; }
      `}</style>
    </aside>
  );
}
