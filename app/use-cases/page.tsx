"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Pill } from "@/components/Pill";
import { useCases, filters } from "@/lib/usecases";

type Type = "All" | (typeof filters.type)[number];
type AssetClass = "All" | (typeof filters.assetClass)[number];

export default function UseCases() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<Type>("All");
  const [klass, setKlass] = useState<AssetClass>("All");

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

      <section style={{ paddingInline: 24, marginBottom: 40 }}>
        <div className="container-rem">
          <Reveal>
            <div className="card" style={{ padding: 18, display: "grid", gridTemplateColumns: "1fr auto auto", gap: 12, alignItems: "center" }}>
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

          <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
            {filtered.map((u, i) => (
              <Reveal key={u.id} delay={(i % 6) * 30}>
                <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-dim)", fontWeight: 700 }}>
                        {u.lead}
                      </div>
                      <h3 style={{ margin: "6px 0 0", fontSize: "1.15rem", letterSpacing: "-0.02em" }}>{u.name}</h3>
                    </div>
                    <Pill tone={u.type === "Pilot" ? "yellow" : "muted"}>{u.type}</Pill>
                  </div>

                  <p style={{ color: "var(--text-muted)", fontSize: 13.5, lineHeight: 1.55, flex: 1, margin: 0 }}>
                    {u.summary}
                  </p>

                  <dl style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "6px 12px", margin: 0, fontSize: 12 }}>
                    <dt style={{ color: "var(--text-dim)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Class</dt>
                    <dd style={{ margin: 0, color: "rgba(255,255,255,0.85)" }}>{u.assetSubClass}</dd>
                    <dt style={{ color: "var(--text-dim)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Settle</dt>
                    <dd style={{ margin: 0, color: "rgba(255,255,255,0.85)" }}>{u.settlement.join(" · ")}</dd>
                    <dt style={{ color: "var(--text-dim)", letterSpacing: "0.05em", textTransform: "uppercase" }}>DLT</dt>
                    <dd style={{ margin: 0, color: "rgba(255,255,255,0.85)" }}>{u.network}</dd>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 1024px) { .grid-uc { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 640px) { .grid-uc { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>
    </>
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
