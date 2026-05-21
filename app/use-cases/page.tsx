"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Pill } from "@/components/Pill";
import { useCases, filters, type UseCase } from "@/lib/usecases";
import { ASSET_CLASS, TYPE, tagSwatch, type Swatch } from "@/lib/palette";
import { UseCaseDetailModal, type UseCaseModalData } from "@/components/UseCaseDetailModal";

type Type = "All" | (typeof filters.type)[number];
type AssetClass = "All" | (typeof filters.assetClass)[number];

export default function UseCases() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<Type>("All");
  const [klass, setKlass] = useState<AssetClass>("All");
  const [selected, setSelected] = useState<UseCase | null>(null);

  const filtered = useMemo(() => {
    return useCases.filter((u) => {
      if (type !== "All" && u.type !== type) return false;
      if (klass !== "All" && u.assetClass !== klass) return false;
      if (q) {
        const hay = `${u.lead} ${u.name} ${u.network} ${u.settlement.join(" ")} ${u.summary}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [q, type, klass]);

  return (
    <>
      <section className="section" style={{ paddingTop: 140, paddingBottom: 40 }}>
        <div className="container-rem">
          <Reveal>
            <Pill>Appendix 1 · Use Cases</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ margin: "20px 0 0", fontSize: "clamp(2rem, 5vw, 3.4rem)", maxWidth: 980, letterSpacing: "-0.03em" }}>
              All 20 industry experiments.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 18, maxWidth: 800 }}>
              Filter by type, asset class, or search by participant, network or settlement asset. Every card links back to the original
              report's description.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingInline: 24, marginBottom: 28 }}>
        <div className="container-rem">
          <Reveal>
            <div className="card filter-row" style={{ padding: 18, display: "grid", gridTemplateColumns: "1fr auto auto", gap: 12, alignItems: "center" }}>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search participant, network, settlement asset…"
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
              <FilterSelect label="Type" value={type} onChange={(v) => setType(v as Type)} options={["All", ...filters.type]} />
              <FilterSelect
                label="Asset class"
                value={klass}
                onChange={(v) => setKlass(v as AssetClass)}
                options={["All", ...filters.assetClass]}
              />
            </div>
          </Reveal>

          {/* Colour-coded quick filters */}
          <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
            <FilterGroup label="Type">
              <QuickChip label="All" count={useCases.length} active={type === "All"} onClick={() => setType("All")} />
              {filters.type.map((t) => {
                const count = useCases.filter((u) => u.type === t).length;
                return (
                  <QuickChip
                    key={t}
                    label={t}
                    count={count}
                    swatch={TYPE[t]}
                    active={type === t}
                    onClick={() => setType(t as Type)}
                  />
                );
              })}
            </FilterGroup>
            <FilterGroup label="Asset class">
              <QuickChip label="All" count={useCases.length} active={klass === "All"} onClick={() => setKlass("All")} />
              {filters.assetClass.map((a) => {
                const count = useCases.filter((u) => u.assetClass === a).length;
                return (
                  <QuickChip
                    key={a}
                    label={a}
                    count={count}
                    swatch={ASSET_CLASS[a]}
                    active={klass === a}
                    onClick={() => setKlass(a as AssetClass)}
                  />
                );
              })}
            </FilterGroup>
          </div>

          <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ color: "var(--text-muted)", fontSize: 13 }}>
              Showing <span style={{ color: "var(--yellow)", fontWeight: 600 }}>{filtered.length}</span> of {useCases.length} use cases
            </div>
            <button
              className="btn btn-ghost"
              onClick={() => { setQ(""); setType("All"); setKlass("All"); }}
              style={{ fontSize: 12 }}
            >
              Reset filters
            </button>
          </div>
        </div>
      </section>

      <section style={{ paddingInline: 24, paddingBottom: 80 }}>
        <div className="container-rem">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="grid-uc">
            {filtered.map((u, i) => {
              const classSw = ASSET_CLASS[u.assetClass];
              const typeSw = TYPE[u.type];
              const netSw = tagSwatch(u.network);
              return (
                <Reveal key={u.id} delay={(i % 6) * 30}>
                  <article
                    id={u.id}
                    className="card uc-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelected(u)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelected(u);
                      }
                    }}
                    aria-label={`View details for ${u.lead}: ${u.name}`}
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                      scrollMarginTop: 120,
                      position: "relative",
                      borderColor: classSw.ring,
                      overflow: "hidden",
                      cursor: "pointer",
                      // @ts-expect-error CSS custom property
                      "--card-accent": classSw.color,
                    }}
                  >
                    {/* Left accent stripe — asset class colour */}
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 3,
                        background: classSw.color,
                        boxShadow: `0 0 14px ${classSw.color}55`,
                      }}
                    />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: 11,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: classSw.color,
                            fontWeight: 700,
                            opacity: 0.92,
                          }}
                        >
                          {u.lead}
                        </div>
                        <h3 style={{ margin: "6px 0 0", fontSize: "1.15rem", letterSpacing: "-0.02em" }}>{u.name}</h3>
                      </div>
                      <TypeBadge type={u.type} />
                    </div>

                    <p style={{ color: "var(--text-muted)", fontSize: 13.5, lineHeight: 1.55, flex: 1, margin: 0 }}>
                      {u.summary}
                    </p>

                    {/* Settlement chips */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {u.settlement.map((s) => {
                        const sw = tagSwatch(s);
                        return (
                          <span
                            key={s}
                            style={{
                              fontSize: 10.5,
                              fontWeight: 700,
                              letterSpacing: "0.03em",
                              textTransform: "uppercase",
                              padding: "3px 8px",
                              borderRadius: 4,
                              background: sw.bg,
                              color: sw.color,
                              border: `1px solid ${sw.ring}`,
                              lineHeight: 1.15,
                            }}
                          >
                            {s}
                          </span>
                        );
                      })}
                    </div>

                    <dl
                      style={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr",
                        gap: "6px 12px",
                        margin: 0,
                        fontSize: 12,
                        paddingTop: 10,
                        borderTop: `1px dashed ${classSw.ring}`,
                      }}
                    >
                      <dt style={{ color: classSw.color, letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 700, opacity: 0.85 }}>
                        Class
                      </dt>
                      <dd style={{ margin: 0, color: "rgba(255,255,255,0.88)" }}>{u.assetSubClass}</dd>
                      <dt style={{ color: classSw.color, letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 700, opacity: 0.85 }}>
                        DLT
                      </dt>
                      <dd
                        style={{
                          margin: 0,
                          color: netSw.color,
                          fontWeight: 600,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <span
                          aria-hidden
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: 999,
                            background: netSw.color,
                            boxShadow: `0 0 5px ${netSw.color}`,
                            flexShrink: 0,
                          }}
                        />
                        {u.network}
                      </dd>
                    </dl>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <style>{`
            .uc-card { transition: transform 180ms cubic-bezier(.2,.7,.2,1), border-color 180ms ease, box-shadow 180ms ease; }
            .uc-card:hover { transform: translateY(-3px); border-color: var(--card-accent); box-shadow: 0 10px 30px -12px var(--card-accent); }
            .uc-card:focus-visible { outline: 2px solid var(--card-accent); outline-offset: 3px; }
            @media (max-width: 1024px) { .grid-uc { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 640px) {
              .grid-uc { grid-template-columns: 1fr !important; }
              .filter-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {selected && (
        <UseCaseDetailModal data={useCaseToModalData(selected)} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

function useCaseToModalData(u: UseCase): UseCaseModalData {
  const classSw = ASSET_CLASS[u.assetClass];
  const netSw = tagSwatch(u.network);
  return {
    lead: u.lead,
    name: u.name,
    type: u.type,
    tags: u.settlement.map((s) => {
      const sw = tagSwatch(s);
      return { label: s, color: sw.color, bg: sw.bg, ring: sw.ring };
    }),
    network: { name: u.network, color: netSw.color },
    accent: { color: classSw.color, ring: classSw.ring },
    summary: u.summary,
    meta: [
      { label: "Asset class", value: `${u.assetClass} · ${u.assetSubClass}` },
    ],
  };
}

function TypeBadge({ type }: { type: "Pilot" | "PoC" }) {
  const s = TYPE[type];
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
        letterSpacing: "0.08em",
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
      {type}
    </span>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
      <span style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)", fontWeight: 700 }}>
        {label}
      </span>
      {children}
    </div>
  );
}

function QuickChip({
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
        padding: "5px 11px",
        borderRadius: 999,
        fontSize: 11.5,
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
            width: 6,
            height: 6,
            borderRadius: 999,
            background: active ? "#0b0b0b" : color,
            boxShadow: active ? "none" : `0 0 5px ${color}99`,
          }}
        />
      )}
      <span>{label}</span>
      <span style={{ fontSize: 10, fontWeight: 700, opacity: active ? 0.7 : 0.6, letterSpacing: "0.04em" }}>{count}</span>
    </button>
  );
}

function FilterSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
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
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
