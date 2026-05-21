"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Pill } from "@/components/Pill";
import { companies, companyFilters } from "@/lib/companies";
import { useCases } from "@/lib/usecases";

type Category = "All" | (typeof companyFilters.category)[number];

export default function CompaniesPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [tag, setTag] = useState<string>("All");

  const allTags = useMemo(() => {
    const s = new Set<string>();
    companies.forEach((c) => c.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, []);

  const useCaseById = useMemo(() => Object.fromEntries(useCases.map((u) => [u.id, u])), []);

  const filtered = useMemo(() => {
    return companies.filter((c) => {
      if (category !== "All" && c.category !== category) return false;
      if (tag !== "All" && !c.tags.includes(tag)) return false;
      if (q) {
        const hay = `${c.name} ${c.role} ${c.summary} ${c.tags.join(" ")}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [q, category, tag]);

  return (
    <>
      <section className="section" style={{ paddingTop: 140, paddingBottom: 40 }}>
        <div className="container-rem">
          <Reveal>
            <Pill>Appendix 2 · Companies Involved</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ margin: "20px 0 0", fontSize: "clamp(2rem, 5vw, 3.4rem)", maxWidth: 980, letterSpacing: "-0.03em" }}>
              Everyone who shipped a piece of Acacia.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 18, maxWidth: 800 }}>
              Lead participants, DLT platforms, distributors and authorities. Filter by role or project tag, or jump from a company straight
              into the use cases it ran.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingInline: 24, marginBottom: 40 }}>
        <div className="container-rem">
          <Reveal>
            <div
              className="card filter-row"
              style={{ padding: 18, display: "grid", gridTemplateColumns: "1fr auto auto", gap: 12, alignItems: "center" }}
            >
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search company, role, tag…"
                style={{
                  background: "var(--card-bg-2)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "10px 14px",
                  color: "#fff",
                  fontSize: 14,
                  width: "100%",
                  outline: "none",
                }}
              />
              <FilterSelect
                label="Category"
                value={category}
                onChange={(v) => setCategory(v as Category)}
                options={["All", ...companyFilters.category]}
              />
              <FilterSelect label="Tag" value={tag} onChange={(v) => setTag(v)} options={["All", ...allTags]} />
            </div>
          </Reveal>

          <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ color: "var(--text-muted)", fontSize: 13 }}>
              Showing <span style={{ color: "var(--yellow)", fontWeight: 600 }}>{filtered.length}</span> of {companies.length} companies
            </div>
            <button
              className="btn btn-ghost"
              onClick={() => {
                setQ("");
                setCategory("All");
                setTag("All");
              }}
              style={{ fontSize: 12 }}
            >
              Reset filters
            </button>
          </div>
        </div>
      </section>

      <section style={{ paddingInline: 24, paddingBottom: 80 }}>
        <div className="container-rem">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="grid-co">
            {filtered.map((c, i) => (
              <Reveal key={c.id} delay={(i % 6) * 30}>
                <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: 11,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "var(--text-dim)",
                          fontWeight: 700,
                        }}
                      >
                        {c.role}
                      </div>
                      <h3 style={{ margin: "6px 0 0", fontSize: "1.15rem", letterSpacing: "-0.02em" }}>{c.name}</h3>
                    </div>
                    <Pill tone={c.category === "Lead Participant" ? "yellow" : "muted"}>{c.category}</Pill>
                  </div>

                  <p style={{ color: "var(--text-muted)", fontSize: 13.5, lineHeight: 1.55, flex: 1, margin: 0 }}>{c.summary}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {c.tags.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTag(t)}
                        style={{
                          fontSize: 11,
                          letterSpacing: "0.02em",
                          padding: "3px 8px",
                          borderRadius: 999,
                          background: tag === t ? "rgba(252,191,72,0.14)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${tag === t ? "rgba(252,191,72,0.45)" : "var(--border)"}`,
                          color: tag === t ? "var(--yellow)" : "rgba(255,255,255,0.78)",
                          cursor: "pointer",
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  {c.useCaseIds.length > 0 && (
                    <div style={{ borderTop: "1px solid var(--border)", paddingTop: 12, marginTop: "auto" }}>
                      <div
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--text-dim)",
                          marginBottom: 6,
                        }}
                      >
                        Use cases ({c.useCaseIds.length})
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                        {c.useCaseIds.map((id) => {
                          const u = useCaseById[id];
                          if (!u) return null;
                          return (
                            <li key={id}>
                              <Link
                                href={`/use-cases#${id}`}
                                style={{
                                  fontSize: 12.5,
                                  color: "rgba(255,255,255,0.86)",
                                  textDecoration: "none",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: 6,
                                }}
                              >
                                <span style={{ color: "var(--yellow)" }}>›</span>
                                {u.name}
                                <span style={{ color: "var(--text-dim)" }}>· {u.type}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 1024px) { .grid-co { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 640px) {
              .grid-co { grid-template-columns: 1fr !important; }
              .filter-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)" }}>{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          background: "var(--card-bg-2)",
          color: "#fff",
          border: "1px solid var(--border)",
          borderRadius: 8,
          padding: "8px 12px",
          fontSize: 13,
          minWidth: 130,
        }}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
