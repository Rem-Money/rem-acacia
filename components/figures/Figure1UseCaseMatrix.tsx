"use client";

import { useState } from "react";
import { FigureFrame } from "./FigureFrame";
import { UseCaseDetailModal } from "../UseCaseDetailModal";
import { useCasesById } from "@/lib/data";
import type { UseCase } from "@/lib/usecases";
import { family, network, useCaseRichById, buildUseCaseModalData, type Net } from "@/lib/useCaseDetails";

/* ────────────────────────────────────────────────
   Matrix layout — exact placements from the report.
   Each cell is referenced by use case id; all
   content (lead, name, settlement tags, network,
   type, summary, etc.) is sourced from the shared
   useCaseDetails module so the detail modal stays
   in sync with the Use Cases page.
   ──────────────────────────────────────────────── */

const matrix: { row: string; cb: string[]; pv: string[] }[] = [
  {
    row: "Fixed income",
    cb: [
      "abe-corporate-bond",
      "canvas-govt-bond",
      "cba-intraday-repo",
      "fireblocks-corporate-bond",
      "westpac-term-deposit",
      "anz-corporate-bond",
    ],
    pv: [
      "imperium-term-deposit",
      "imperium-ncd",
      "imperium-annuities",
      "forte-govt-bond",
      "zerocap-govt-bond",
      "notcentralised-loans",
      "macropod-corporate-bond",
    ],
  },
  {
    row: "Other asset classes",
    cb: ["canvas-private-credit", "anz-trade-payable", "northern-trust-carbon"],
    pv: ["macropod-fund", "prospex-mining"],
  },
];

const infra: string[] = ["apx-interchange", "apx-npp"];

/* ────────────────────────────────────────────────
   Render
   ──────────────────────────────────────────────── */

export function Figure1UseCaseMatrix() {
  const [selected, setSelected] = useState<UseCase | null>(null);

  return (
    <FigureFrame label="Figure 01" title="Project Acacia use case landscape" source="DFCRC / RBA">
      <div className="fig1-scroll">
      <div
        className="fig1-matrix"
        style={{
          display: "grid",
          gridTemplateColumns: "150px 1fr 1fr",
          gap: 1,
          background: "var(--border)",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid var(--border)",
        }}
      >
        {/* Header row */}
        <div
          style={{
            background: "var(--card-bg)",
            padding: "14px 16px",
            fontSize: 10,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--text-dim)",
          }}
        >
          Asset class
        </div>
        <ColHeader tone="cb" title="Central bank money used in settlement" />
        <ColHeader tone="pv" title="Private money used in settlement" />

        {matrix.map((r) => (
          <RowFragment key={r.row} row={r} onOpen={setSelected} />
        ))}

        {/* Infrastructure row (spans both content cols) */}
        <div style={{ background: "var(--card-bg)", padding: "16px", display: "flex", alignItems: "center" }}>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 15,
                color: "rgba(255,255,255,0.92)",
                letterSpacing: "-0.015em",
                lineHeight: 1.2,
              }}
            >
              Infrastructure / services
            </div>
            <div style={{ marginTop: 4, fontSize: 11, color: "var(--text-dim)" }}>{infra.length} use cases</div>
          </div>
        </div>
        <div
          style={{
            gridColumn: "span 2",
            background: "var(--card-bg)",
            padding: "14px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
          }}
          className="infra-row"
        >
          {infra.map((id) => (
            <CaseChip key={id} id={id} columnTone="neutral" onOpen={setSelected} />
          ))}
        </div>
      </div>
      </div>

      {/* Mobile-only swipe hint */}
      <div className="fig1-swipe-hint" style={{ display: "none", marginTop: 8, fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.02em" }}>
        ← Swipe to explore the full matrix →
      </div>

      {/* Legend */}
      <Legend />

      {/* Footnote */}
      <div style={{ marginTop: 12, fontSize: 11, fontStyle: "italic", color: "var(--text-dim)", lineHeight: 1.5 }}>
        * Tags under each use case name show the settlement assets used. The coloured dot indicates the DLT network. Click any use case for details.
      </div>

      {selected && <UseCaseDetailModal data={buildUseCaseModalData(selected)} onClose={() => setSelected(null)} />}

      <style>{`
        @media (max-width: 760px) {
          .infra-row { grid-template-columns: 1fr !important; }
        }
        /* Desktop: render naturally, as before. Mobile/tablet: horizontal scroll only. */
        @media (max-width: 820px) {
          .fig1-scroll {
            position: relative;
            overflow-x: auto;
            overflow-y: visible;
            -webkit-overflow-scrolling: touch;
            scrollbar-color: rgba(255,255,255,0.12) transparent;
            scrollbar-width: thin;
          }
          .fig1-scroll .fig1-matrix {
            min-width: 760px;
          }
          .fig1-scroll::-webkit-scrollbar { height: 8px; }
          .fig1-scroll::-webkit-scrollbar-track { background: transparent; }
          .fig1-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.10); border-radius: 8px; }
          .fig1-scroll::-webkit-scrollbar-thumb:hover { background: rgba(252,191,72,0.35); }
          .fig1-swipe-hint { display: block !important; }
        }
      `}</style>
    </FigureFrame>
  );
}

/* ───── Column header ───── */
function ColHeader({ tone, title }: { tone: "cb" | "pv"; title: string }) {
  const isCb = tone === "cb";
  const accent = isCb ? "#fcbf48" : "#8DF0CC";
  const bg = isCb ? "rgba(252,191,72,0.06)" : "rgba(141,240,204,0.06)";

  return (
    <div style={{ background: bg, padding: "14px 16px", borderBottom: `1px solid ${accent}33` }}>
      <div
        style={{
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: accent,
          fontWeight: 700,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: 8, background: accent, boxShadow: `0 0 6px ${accent}66` }} />
        {isCb ? "Public" : "Private"}
      </div>
      <div
        style={{
          marginTop: 4,
          fontFamily: "var(--font-display)",
          fontSize: 14,
          color: "rgba(255,255,255,0.92)",
          letterSpacing: "-0.015em",
        }}
      >
        {title}
      </div>
    </div>
  );
}

/* ───── Row label + two cell groups ───── */
function RowFragment({ row, onOpen }: { row: { row: string; cb: string[]; pv: string[] }; onOpen: (u: UseCase) => void }) {
  const total = row.cb.length + row.pv.length;
  return (
    <>
      <div style={{ background: "var(--card-bg)", padding: "16px", display: "flex", alignItems: "center" }}>
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 15,
              color: "rgba(255,255,255,0.92)",
              letterSpacing: "-0.015em",
              lineHeight: 1.2,
            }}
          >
            {row.row}
          </div>
          <div style={{ marginTop: 4, fontSize: 11, color: "var(--text-dim)" }}>{total} use cases</div>
        </div>
      </div>
      <CellGroup ids={row.cb} columnTone="cb" onOpen={onOpen} />
      <CellGroup ids={row.pv} columnTone="pv" onOpen={onOpen} />
    </>
  );
}

function CellGroup({ ids, columnTone, onOpen }: { ids: string[]; columnTone: "cb" | "pv"; onOpen: (u: UseCase) => void }) {
  const bg = columnTone === "cb" ? "rgba(252,191,72,0.025)" : "rgba(141,240,204,0.025)";
  return (
    <div
      style={{
        background: bg,
        padding: "14px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 10,
      }}
    >
      {ids.map((id) => (
        <CaseChip key={id} id={id} columnTone={columnTone} onOpen={onOpen} />
      ))}
      {ids.length === 0 && <div style={{ color: "var(--text-dim)", fontSize: 12, fontStyle: "italic", padding: "8px 4px" }}>- </div>}
    </div>
  );
}

/* ───── A single use-case chip ───── */
function CaseChip({ id, columnTone, onOpen }: { id: string; columnTone: "cb" | "pv" | "neutral"; onOpen: (u: UseCase) => void }) {
  const uc = useCasesById[id];
  const rich = useCaseRichById[id];
  if (!uc || !rich) return null;
  const primary = family[rich.tags[0].f];
  const netColor = network[rich.net];

  return (
    <button
      type="button"
      onClick={() => onOpen(uc)}
      aria-label={`View details for ${rich.shortLead}: ${uc.name}`}
      className="case-chip"
      style={{
        position: "relative",
        background: "rgba(0,0,0,0.25)",
        border: `1px solid ${primary.ring}`,
        borderRadius: 10,
        padding: "10px 12px 10px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        minHeight: 110,
        overflow: "hidden",
        textAlign: "left",
        color: "inherit",
        font: "inherit",
        cursor: "pointer",
        width: "100%",
        // @ts-expect-error CSS custom property
        "--chip-ring": primary.ring,
        "--chip-glow": primary.color,
      }}
    >
      {/* Left accent stripe — settlement asset family colour */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          background: primary.color,
          boxShadow: `0 0 12px ${primary.color}55`,
        }}
      />

      {/* Header — lead + P/C */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
        <span
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 600,
            minWidth: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {rich.shortLead}
        </span>
        <TypeTag type={uc.type} />
      </div>

      {/* Name */}
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.95)", lineHeight: 1.3, fontWeight: 500 }}>
        {uc.name}
      </div>

      {/* Settlement asset tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: "auto" }}>
        {rich.tags.map((t, i) => {
          const fam = family[t.f];
          return (
            <span
              key={i}
              style={{
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "3px 7px",
                borderRadius: 4,
                background: fam.bg,
                color: fam.color,
                border: `1px solid ${fam.ring}`,
                lineHeight: 1.1,
              }}
            >
              {t.raw}
            </span>
          );
        })}
      </div>

      {/* DLT network footer */}
      <div
        style={{
          marginTop: 2,
          paddingTop: 6,
          borderTop: "1px dashed rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: 6,
            background: netColor,
            boxShadow: `0 0 5px ${netColor}`,
            flexShrink: 0,
          }}
        />
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: "0.01em", lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {rich.net}
        </span>
      </div>

      <style>{`
        .case-chip { transition: transform 180ms cubic-bezier(.2,.7,.2,1), border-color 180ms ease, box-shadow 180ms ease; }
        .case-chip:hover { transform: translateY(-2px); border-color: var(--chip-glow); box-shadow: 0 6px 20px -8px var(--chip-glow); }
        .case-chip:focus-visible { outline: 2px solid var(--chip-glow); outline-offset: 2px; }
      `}</style>
    </button>
  );
}

function TypeTag({ type }: { type: "Pilot" | "PoC" }) {
  const pilot = type === "Pilot";
  return (
    <span
      style={{
        background: pilot ? "rgba(252,191,72,0.18)" : "transparent",
        border: `1px solid ${pilot ? "rgba(252,191,72,0.45)" : "rgba(255,255,255,0.22)"}`,
        color: pilot ? "var(--yellow)" : "rgba(255,255,255,0.7)",
        borderRadius: 100,
        fontSize: 9,
        fontWeight: 700,
        padding: "2px 7px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      {pilot ? "Pilot" : "PoC"}
    </span>
  );
}

/* ───── Legend ───── */
function Legend() {
  return (
    <div
      style={{
        marginTop: 16,
        background: "rgba(0,0,0,0.25)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: 14,
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 18,
      }}
      className="fig1-legend"
    >
      <div>
        <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)", fontWeight: 700, marginBottom: 10 }}>
          Settlement asset family
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 8 }}>
          {Object.entries(family).map(([k, v]) => (
            <LegendItem key={k} color={v.color} ring={v.ring} bg={v.bg} label={v.name} />
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)", fontWeight: 700, marginBottom: 10 }}>
          DLT network
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "6px 12px" }}>
          {(Object.entries(network) as [Net, string][]).map(([k, color]) => (
            <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 11, color: "rgba(255,255,255,0.72)" }}>
              <span style={{ width: 8, height: 8, borderRadius: 8, background: color, boxShadow: `0 0 5px ${color}`, flexShrink: 0 }} />
              {k}
            </span>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 760px) { .fig1-legend { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

function LegendItem({ color, ring, bg, label }: { color: string; ring: string; bg: string; label: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11.5, color: "rgba(255,255,255,0.82)" }}>
      <span
        style={{
          width: 22,
          height: 14,
          borderRadius: 3,
          background: bg,
          border: `1px solid ${ring}`,
          position: "relative",
          flexShrink: 0,
        }}
      >
        <span
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 2,
            background: color,
            boxShadow: `0 0 6px ${color}99`,
          }}
        />
      </span>
      <span style={{ letterSpacing: "0.01em" }}>{label}</span>
    </span>
  );
}
