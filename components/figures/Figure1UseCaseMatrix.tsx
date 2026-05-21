import { FigureFrame } from "./FigureFrame";

type Cell = {
  lead: string;
  name: string;
  settlement: string; // italicised label, exactly as the report
  type: "Pilot" | "PoC";
};

// Exact layout from Figure 1 in the report.
const matrix: { row: string; cb: Cell[]; pv: Cell[] }[] = [
  {
    row: "Fixed income",
    cb: [
      { lead: "Australian Bond Exchange", name: "Corporate Bond", settlement: "wCBDC", type: "Pilot" },
      { lead: "Canvas", name: "Government Bond", settlement: "wCBDC", type: "Pilot" },
      { lead: "CBA", name: "Intraday Repo", settlement: "wCBDC, deposit token", type: "PoC" },
      { lead: "Fireblocks", name: "Corporate Bond with Interchange", settlement: "wCBDC, stablecoin", type: "PoC" },
      { lead: "Westpac", name: "Term Deposit", settlement: "NPP PayTo", type: "PoC" },
      { lead: "ANZ", name: "Corporate Bond", settlement: "wCBDC, stablecoin/deposit token", type: "PoC" },
    ],
    pv: [
      { lead: "Imperium", name: "Term Deposit", settlement: "wCBDC-backed stablecoin", type: "Pilot" },
      { lead: "Imperium", name: "Certificates of Deposit", settlement: "wCBDC-backed stablecoin", type: "Pilot" },
      { lead: "Imperium", name: "Annuities", settlement: "wCBDC-backed stablecoin", type: "Pilot" },
      { lead: "Forte", name: "Government Bond", settlement: "stablecoin", type: "Pilot" },
      { lead: "Zerocap", name: "Government Bond", settlement: "stablecoin", type: "Pilot" },
      { lead: "NotCentralised", name: "Collateralised Loans", settlement: "wCBDC-backed payment token", type: "Pilot" },
      { lead: "Macropod", name: "Corporate Bond", settlement: "stablecoin", type: "Pilot" },
    ],
  },
  {
    row: "Other asset classes",
    cb: [
      { lead: "Canvas", name: "Private Credit Fund", settlement: "wCBDC", type: "Pilot" },
      { lead: "ANZ", name: "Trade Payable", settlement: "wCBDC, stablecoin/deposit token", type: "PoC" },
      { lead: "Northern Trust", name: "Carbon Credits", settlement: "RITS", type: "PoC" },
    ],
    pv: [
      { lead: "Macropod", name: "Digital Asset Fund", settlement: "stablecoin", type: "Pilot" },
      { lead: "ProspEx", name: "Mining Royalty Interests", settlement: "stablecoin", type: "PoC" },
    ],
  },
];

// Infrastructure / services row sits below; both items are AP+ and span the body.
const infra: Cell[] = [
  { lead: "AP+", name: "Token Interchange Service", settlement: "wCBDC, stablecoins", type: "Pilot" },
  { lead: "AP+", name: "NPP-Token Integration", settlement: "stablecoins, NPP", type: "PoC" },
];

const dltNetworks: { name: string; tone: "pilot" | "poc" }[] = [
  { name: "Ethereum (public)", tone: "pilot" },
  { name: "Canvas Connect (private)", tone: "pilot" },
  { name: "Hedera (private)", tone: "pilot" },
  { name: "Hedera (public)", tone: "pilot" },
  { name: "Redbelly (public-permissioned)", tone: "poc" },
  { name: "XRP Ledger (public)", tone: "pilot" },
];

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
        <div style={{ background: "var(--card-bg)", padding: "14px 16px", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)" }}>
          Asset class
        </div>
        <ColHeader tone="yellow" title="Central bank money used in settlement" />
        <ColHeader tone="green" title="Private money used in settlement" />

        {/* Body rows */}
        {matrix.map((r) => (
          <RowFragment key={r.row} row={r} />
        ))}

        {/* Infrastructure / services row (spans body cols) */}
        <div style={{ background: "var(--card-bg)", padding: "16px", display: "flex", alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "rgba(255,255,255,0.92)", letterSpacing: "-0.015em", lineHeight: 1.2 }}>
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
            gridTemplateColumns: "repeat(2, 1fr) 1.1fr",
            gap: 8,
            alignItems: "stretch",
          }}
          className="infra-row"
        >
          {infra.map((c) => (
            <CaseChip key={`${c.lead}-${c.name}`} cell={c} tone="muted" />
          ))}
          {/* Key inset matching the source */}
          <KeyInset />
        </div>
      </div>

      {/* Footnote */}
      <div style={{ marginTop: 12, fontSize: 11, fontStyle: "italic", color: "var(--text-dim)", lineHeight: 1.5 }}>
        * Italicised text in brackets beneath each use case refers to the types of digital money / settlement infrastructure experimented with in
        each use case.
      </div>

      <style>{`
        @media (max-width: 760px) {
          .infra-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </FigureFrame>
  );
}

function ColHeader({ tone, title }: { tone: "yellow" | "green"; title: string }) {
  const accent = tone === "yellow" ? "var(--yellow)" : "var(--green)";
  return (
    <div style={{ background: "var(--card-bg-2)", padding: "14px 16px" }}>
      <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: accent, fontWeight: 700 }}>
        {tone === "yellow" ? "Public" : "Private"}
      </div>
      <div style={{ marginTop: 4, fontFamily: "var(--font-display)", fontSize: 14, color: "rgba(255,255,255,0.92)", letterSpacing: "-0.015em" }}>
        {title}
      </div>
    </div>
  );
}

function RowFragment({ row }: { row: { row: string; cb: Cell[]; pv: Cell[] } }) {
  const total = row.cb.length + row.pv.length;
  return (
    <>
      <div style={{ background: "var(--card-bg)", padding: "16px", display: "flex", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "rgba(255,255,255,0.92)", letterSpacing: "-0.015em", lineHeight: 1.2 }}>
            {row.row}
          </div>
          <div style={{ marginTop: 4, fontSize: 11, color: "var(--text-dim)" }}>{total} use cases</div>
        </div>
      </div>
      <CellGroup cells={row.cb} tone="yellow" />
      <CellGroup cells={row.pv} tone="green" />
    </>
  );
}

function CellGroup({ cells, tone }: { cells: Cell[]; tone: "yellow" | "green" }) {
  return (
    <div
      style={{
        background: "var(--card-bg)",
        padding: "14px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
        gap: 8,
      }}
    >
      {cells.map((c) => (
        <CaseChip key={`${c.lead}-${c.name}`} cell={c} tone={tone} />
      ))}
      {cells.length === 0 && <div style={{ color: "var(--text-dim)", fontSize: 12, fontStyle: "italic", padding: "8px 4px" }}>—</div>}
    </div>
  );
}

function CaseChip({ cell, tone }: { cell: Cell; tone: "yellow" | "green" | "muted" }) {
  const accent =
    tone === "yellow" ? "rgba(252,191,72,0.32)" : tone === "green" ? "rgba(141,240,204,0.3)" : "rgba(255,255,255,0.14)";
  const accentBg =
    tone === "yellow" ? "rgba(252,191,72,0.06)" : tone === "green" ? "rgba(141,240,204,0.05)" : "rgba(255,255,255,0.03)";

  return (
    <div
      style={{
        border: `1px solid ${accent}`,
        background: accentBg,
        borderRadius: 8,
        padding: "10px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        minHeight: 78,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.55)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {cell.lead}
        </span>
        <TypeTag type={cell.type} />
      </div>
      <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.92)", lineHeight: 1.3, fontWeight: 500 }}>{cell.name}</div>
      <div style={{ fontSize: 10.5, color: "var(--text-muted)", fontStyle: "italic", letterSpacing: "0.01em" }}>({cell.settlement})</div>
    </div>
  );
}

function TypeTag({ type }: { type: "Pilot" | "PoC" }) {
  const pilot = type === "Pilot";
  return (
    <span
      style={{
        background: pilot ? "rgba(252,191,72,0.16)" : "transparent",
        border: `1px solid ${pilot ? "rgba(252,191,72,0.4)" : "rgba(255,255,255,0.2)"}`,
        color: pilot ? "var(--yellow)" : "rgba(255,255,255,0.7)",
        borderRadius: 100,
        fontSize: 9,
        fontWeight: 700,
        padding: "2px 7px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {pilot ? "P" : "C"}
    </span>
  );
}

function KeyInset() {
  return (
    <div
      style={{
        border: "1px solid var(--border)",
        background: "var(--card-bg-2)",
        borderRadius: 8,
        padding: "10px 12px",
        fontSize: 10.5,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)" }}>Key</span>
        <div style={{ display: "flex", gap: 8 }}>
          <LegendChip label="Pilot" tone="yellow" />
          <LegendChip label="Proof of concept" tone="muted" />
        </div>
      </div>
      <div style={{ height: 1, background: "var(--border)" }} />
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)" }}>
        DLT network used
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 12px" }}>
        {dltNetworks.map((d) => (
          <span key={d.name} style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.78)" }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 8,
                background: d.tone === "pilot" ? "var(--yellow)" : "transparent",
                border: d.tone === "pilot" ? "1px solid var(--yellow)" : "1px solid rgba(255,255,255,0.4)",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 10.5, lineHeight: 1.2 }}>{d.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function LegendChip({ label, tone }: { label: string; tone: "yellow" | "muted" }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontSize: 10,
        color: "rgba(255,255,255,0.75)",
        letterSpacing: "0.02em",
      }}
    >
      <span
        style={{
          width: 10,
          height: 10,
          background: tone === "yellow" ? "var(--yellow)" : "transparent",
          border: tone === "yellow" ? "1px solid var(--yellow)" : "1px solid rgba(255,255,255,0.4)",
          borderRadius: 2,
        }}
      />
      {label}
    </span>
  );
}
