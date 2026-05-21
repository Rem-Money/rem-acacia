"use client";

import { useEffect, useState } from "react";
import { FigureFrame } from "./FigureFrame";

/* ────────────────────────────────────────────────
   Colour taxonomy — each settlement-asset family gets a token.
   These are deliberately distinct so the matrix reads at a glance.
   ──────────────────────────────────────────────── */

type Family = "wcbdc" | "rails" | "deposit" | "hybrid" | "stable";

const family: Record<Family, { name: string; color: string; bg: string; ring: string }> = {
  wcbdc: {
    name: "wCBDC",
    color: "#fcbf48", // brand yellow — public, on-chain
    bg: "rgba(252,191,72,0.10)",
    ring: "rgba(252,191,72,0.45)",
  },
  rails: {
    name: "NPP / RITS",
    color: "#fd9a73", // coral — public, off-chain rails
    bg: "rgba(253,154,115,0.10)",
    ring: "rgba(253,154,115,0.45)",
  },
  deposit: {
    name: "Deposit token",
    color: "#7dd3fc", // sky — private bank balance sheet
    bg: "rgba(125,211,252,0.10)",
    ring: "rgba(125,211,252,0.45)",
  },
  hybrid: {
    name: "wCBDC-backed token",
    color: "#8DF0CC", // mint — hybrid
    bg: "rgba(141,240,204,0.10)",
    ring: "rgba(141,240,204,0.45)",
  },
  stable: {
    name: "Stablecoin",
    color: "#c7e36a", // lime — private money
    bg: "rgba(199,227,106,0.10)",
    ring: "rgba(199,227,106,0.45)",
  },
};

/* DLT networks — small coloured dots */
type Net =
  | "Redbelly"
  | "Canvas Connect"
  | "Hedera"
  | "Ethereum"
  | "XRP Ledger"
  | "Private ZK L2"
  | "Gravital · Kinexys · HQLAx"
  | "Hyperledger Besu"
  | "Network-agnostic"
  | "N/A";

const network: Record<Net, string> = {
  Redbelly: "#e7674a",
  "Canvas Connect": "#fcbf48",
  Hedera: "#4cc9c3",
  Ethereum: "#8B7EE8",
  "XRP Ledger": "#a8b3c0",
  "Private ZK L2": "#7c92ff",
  "Gravital · Kinexys · HQLAx": "#9a87ff",
  "Hyperledger Besu": "#6296c4",
  "Network-agnostic": "rgba(255,255,255,0.4)",
  "N/A": "rgba(255,255,255,0.3)",
};

type Tag = { f: Family; raw: string };

type Cell = {
  lead: string;
  name: string;
  tags: Tag[]; // settlement assets, in display order — first is the primary
  net: Net;
  type: "Pilot" | "PoC";
};

/* ────────────────────────────────────────────────
   The matrix layout — exact placements from the report.
   ──────────────────────────────────────────────── */

const matrix: { row: string; cb: Cell[]; pv: Cell[] }[] = [
  {
    row: "Fixed income",
    cb: [
      { lead: "Australian Bond Exchange", name: "Corporate Bond", tags: [{ f: "wcbdc", raw: "wCBDC" }], net: "Redbelly", type: "Pilot" },
      { lead: "Canvas", name: "Government Bond", tags: [{ f: "wcbdc", raw: "wCBDC" }], net: "Canvas Connect", type: "Pilot" },
      {
        lead: "CBA",
        name: "Intraday Repo",
        tags: [
          { f: "wcbdc", raw: "wCBDC" },
          { f: "deposit", raw: "Deposit token" },
        ],
        net: "Gravital · Kinexys · HQLAx",
        type: "PoC",
      },
      {
        lead: "Fireblocks",
        name: "Corporate Bond with Interchange",
        tags: [
          { f: "wcbdc", raw: "wCBDC" },
          { f: "stable", raw: "Stablecoin" },
        ],
        net: "Redbelly",
        type: "PoC",
      },
      { lead: "Westpac", name: "Term Deposit", tags: [{ f: "rails", raw: "NPP PayTo" }], net: "Network-agnostic", type: "PoC" },
      {
        lead: "ANZ",
        name: "Corporate Bond",
        tags: [
          { f: "wcbdc", raw: "wCBDC" },
          { f: "stable", raw: "Stablecoin" },
          { f: "deposit", raw: "Deposit token" },
        ],
        net: "Private ZK L2",
        type: "PoC",
      },
    ],
    pv: [
      { lead: "Imperium", name: "Term Deposit", tags: [{ f: "hybrid", raw: "wCBDC-backed stablecoin" }], net: "Hedera", type: "Pilot" },
      { lead: "Imperium", name: "Certificates of Deposit", tags: [{ f: "hybrid", raw: "wCBDC-backed stablecoin" }], net: "Hedera", type: "Pilot" },
      { lead: "Imperium", name: "Annuities", tags: [{ f: "hybrid", raw: "wCBDC-backed stablecoin" }], net: "Hedera", type: "Pilot" },
      { lead: "Forte", name: "Government Bond", tags: [{ f: "stable", raw: "Stablecoin" }], net: "Ethereum", type: "Pilot" },
      { lead: "Zerocap", name: "Government Bond", tags: [{ f: "stable", raw: "Stablecoin" }], net: "XRP Ledger", type: "Pilot" },
      {
        lead: "NotCentralised",
        name: "Collateralised Loans",
        tags: [{ f: "hybrid", raw: "wCBDC-backed payment token" }],
        net: "Redbelly",
        type: "Pilot",
      },
      { lead: "Macropod", name: "Corporate Bond", tags: [{ f: "stable", raw: "Stablecoin" }], net: "Redbelly", type: "Pilot" },
    ],
  },
  {
    row: "Other asset classes",
    cb: [
      { lead: "Canvas", name: "Private Credit Fund", tags: [{ f: "wcbdc", raw: "wCBDC" }], net: "Canvas Connect", type: "Pilot" },
      {
        lead: "ANZ",
        name: "Trade Payable",
        tags: [
          { f: "wcbdc", raw: "wCBDC" },
          { f: "stable", raw: "Stablecoin" },
          { f: "deposit", raw: "Deposit token" },
        ],
        net: "Private ZK L2",
        type: "PoC",
      },
      { lead: "Northern Trust", name: "Carbon Credits", tags: [{ f: "rails", raw: "RITS" }], net: "Hyperledger Besu", type: "PoC" },
    ],
    pv: [
      { lead: "Macropod", name: "Digital Asset Fund", tags: [{ f: "stable", raw: "Stablecoin" }], net: "Redbelly", type: "Pilot" },
      { lead: "ProspEx", name: "Mining Royalty Interests", tags: [{ f: "stable", raw: "Stablecoin" }], net: "Ethereum", type: "PoC" },
    ],
  },
];

const infra: Cell[] = [
  {
    lead: "AP+",
    name: "Token Interchange Service",
    tags: [
      { f: "wcbdc", raw: "wCBDC" },
      { f: "stable", raw: "Stablecoins" },
    ],
    net: "Hedera",
    type: "Pilot",
  },
  {
    lead: "AP+",
    name: "NPP-Token Integration",
    tags: [
      { f: "stable", raw: "Stablecoins" },
      { f: "rails", raw: "NPP" },
    ],
    net: "N/A",
    type: "PoC",
  },
];

/* ────────────────────────────────────────────────
   Render
   ──────────────────────────────────────────────── */

export function Figure1UseCaseMatrix() {
  return (
    <FigureFrame label="Figure 01" title="Project Acacia use case landscape" source="DFCRC / RBA">
      <div
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
          <RowFragment key={r.row} row={r} />
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
          {infra.map((c) => (
            <CaseChip key={`${c.lead}-${c.name}`} cell={c} columnTone="neutral" />
          ))}
        </div>
      </div>

      {/* Legend */}
      <Legend />

      {/* Footnote */}
      <div style={{ marginTop: 12, fontSize: 11, fontStyle: "italic", color: "var(--text-dim)", lineHeight: 1.5 }}>
        * Tags under each use case name show the settlement assets used. The coloured dot indicates the DLT network.
      </div>

      <style>{`
        @media (max-width: 760px) {
          .infra-row { grid-template-columns: 1fr !important; }
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
function RowFragment({ row }: { row: { row: string; cb: Cell[]; pv: Cell[] } }) {
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
      <CellGroup cells={row.cb} columnTone="cb" />
      <CellGroup cells={row.pv} columnTone="pv" />
    </>
  );
}

function CellGroup({ cells, columnTone }: { cells: Cell[]; columnTone: "cb" | "pv" }) {
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
      {cells.map((c) => (
        <CaseChip key={`${c.lead}-${c.name}`} cell={c} columnTone={columnTone} />
      ))}
      {cells.length === 0 && <div style={{ color: "var(--text-dim)", fontSize: 12, fontStyle: "italic", padding: "8px 4px" }}>—</div>}
    </div>
  );
}

/* ───── A single use-case chip ───── */
function CaseChip({ cell, columnTone }: { cell: Cell; columnTone: "cb" | "pv" | "neutral" }) {
  const primary = family[cell.tags[0].f];
  const netColor = network[cell.net];

  return (
    <div
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
          {cell.lead}
        </span>
        <TypeTag type={cell.type} />
      </div>

      {/* Name */}
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.95)", lineHeight: 1.3, fontWeight: 500 }}>
        {cell.name}
      </div>

      {/* Settlement asset tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: "auto" }}>
        {cell.tags.map((t, i) => {
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
          {cell.net}
        </span>
      </div>
    </div>
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
