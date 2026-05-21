"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Pill } from "@/components/Pill";
import { participants, participantFilters } from "@/lib/participants";
import { useCases } from "@/lib/usecases";
import { CATEGORY, TYPE, tagSwatch, type Swatch } from "@/lib/palette";

type Category = "All" | (typeof participantFilters.category)[number];

export default function ParticipantsPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [tag, setTag] = useState<string>("All");

  const allTags = useMemo(() => {
    const s = new Set<string>();
    participants.forEach((c) => c.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, []);

  const useCaseById = useMemo(() => Object.fromEntries(useCases.map((u) => [u.id, u])), []);

  const filtered = useMemo(() => {
    return participants.filter((c) => {
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
            <Pill>Appendix 2 · Participants</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ margin: "20px 0 0", fontSize: "clamp(2rem, 5vw, 3.4rem)", maxWidth: 980, letterSpacing: "-0.03em" }}>
              Everyone who shipped a piece of Acacia.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 18, maxWidth: 800 }}>
              Companies, platforms and authorities behind Acacia — lead participants, DLT networks, distributors and regulators. Filter by
              role or project tag, or jump from a participant straight into the use cases they ran.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingInline: 24, marginBottom: 28 }}>
        <div className="container-rem">
          <Reveal>
            <div
              className="card filter-row"
              style={{ padding: 18, display: "grid", gridTemplateColumns: "1fr auto auto", gap: 12, alignItems: "center" }}
            >
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search participant, role, tag…"
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
                options={["All", ...participantFilters.category]}
              />
              <FilterSelect label="Tag" value={tag} onChange={(v) => setTag(v)} options={["All", ...allTags]} />
            </div>
          </Reveal>

          {/* Coloured category quick-filter row */}
          <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            <CategoryChip
              label="All"
              count={participants.length}
              active={category === "All"}
              onClick={() => setCategory("All")}
            />
            {participantFilters.category.map((cat) => {
              const count = participants.filter((p) => p.category === cat).length;
              return (
                <CategoryChip
                  key={cat}
                  label={cat}
                  count={count}
                  swatch={CATEGORY[cat]}
                  active={category === cat}
                  onClick={() => setCategory(cat as Category)}
                />
              );
            })}
          </div>

          <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ color: "var(--text-muted)", fontSize: 13 }}>
              Showing <span style={{ color: "var(--yellow)", fontWeight: 600 }}>{filtered.length}</span> of {participants.length} participants
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
            {filtered.map((c, i) => {
              const catSw = CATEGORY[c.category];
              return (
                <Reveal key={c.id} delay={(i % 6) * 30}>
                  <article
                    className="card"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                      position: "relative",
                      borderColor: catSw.ring,
                      overflow: "hidden",
                    }}
                  >
                    {/* Top accent stripe — category colour */}
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: `linear-gradient(90deg, ${catSw.color}, ${catSw.color}55)`,
                        boxShadow: `0 0 14px ${catSw.color}55`,
                      }}
                    />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: 11,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: catSw.color,
                            fontWeight: 700,
                            opacity: 0.92,
                          }}
                        >
                          {c.role}
                        </div>
                        <h3 style={{ margin: "6px 0 0", fontSize: "1.15rem", letterSpacing: "-0.02em" }}>{c.name}</h3>
                      </div>
                      <CategoryBadge category={c.category} />
                    </div>

                    <p style={{ color: "var(--text-muted)", fontSize: 13.5, lineHeight: 1.55, flex: 1, margin: 0 }}>{c.summary}</p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {c.tags.map((t) => {
                        const s = tagSwatch(t);
                        const active = tag === t;
                        return (
                          <button
                            key={t}
                            onClick={() => setTag(active ? "All" : t)}
                            style={{
                              fontSize: 11,
                              letterSpacing: "0.02em",
                              padding: "3px 8px",
                              borderRadius: 999,
                              background: active ? s.color : s.bg,
                              border: `1px solid ${active ? s.color : s.ring}`,
                              color: active ? "#0b0b0b" : s.color,
                              fontWeight: active ? 700 : 600,
                              cursor: "pointer",
                              transition: "background 120ms ease, color 120ms ease",
                            }}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>

                    {c.useCaseIds.length > 0 && (
                      <div style={{ borderTop: `1px dashed ${catSw.ring}`, paddingTop: 12, marginTop: "auto" }}>
                        <div
                          style={{
                            fontSize: 10,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: catSw.color,
                            opacity: 0.85,
                            fontWeight: 700,
                            marginBottom: 6,
                          }}
                        >
                          Use cases ({c.useCaseIds.length})
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                          {c.useCaseIds.map((id) => {
                            const u = useCaseById[id];
                            if (!u) return null;
                            const tSw = TYPE[u.type];
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
                                  <span style={{ color: catSw.color }}>›</span>
                                  {u.name}
                                  <span style={{ color: tSw.color, opacity: 0.9 }}>· {u.type}</span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
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

function CategoryBadge({ category }: { category: string }) {
  const s = CATEGORY[category] ?? { color: "#fff", bg: "rgba(255,255,255,0.06)", ring: "rgba(255,255,255,0.18)" };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "3px 10px",
        borderRadius: 100,
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        background: s.bg,
        border: `1px solid ${s.ring}`,
        color: s.color,
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      <span
        aria-hidden
        style={{
          width: 6,
          height: 6,
          borderRadius: 999,
          background: s.color,
          boxShadow: `0 0 6px ${s.color}99`,
        }}
      />
      {category}
    </span>
  );
}

function CategoryChip({
  label,
  count,
  swatch,
  active,
  onClick,
}: {
  label: string;
  count: number;
  swatch?: Swatch;
  active: boolean;
  onClick: () => void;
}) {
  const color = swatch?.color ?? "rgba(255,255,255,0.85)";
  const bg = swatch?.bg ?? "rgba(255,255,255,0.04)";
  const ring = swatch?.ring ?? "rgba(255,255,255,0.18)";
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 12px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.02em",
        background: active ? color : bg,
        color: active ? "#0b0b0b" : color,
        border: `1px solid ${active ? color : ring}`,
        cursor: "pointer",
        transition: "all 140ms ease",
      }}
    >
      {swatch && (
        <span
          aria-hidden
          style={{
            width: 7,
            height: 7,
            borderRadius: 999,
            background: active ? "#0b0b0b" : color,
            boxShadow: active ? "none" : `0 0 6px ${color}99`,
          }}
        />
      )}
      <span>{label}</span>
      <span
        style={{
          fontSize: 10.5,
          fontWeight: 700,
          opacity: active ? 0.7 : 0.6,
          letterSpacing: "0.04em",
        }}
      >
        {count}
      </span>
    </button>
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
