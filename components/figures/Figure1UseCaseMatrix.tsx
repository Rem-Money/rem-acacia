import { FigureFrame } from "./FigureFrame";
import { useCases, type UseCase } from "@/lib/usecases";

// Bucket use cases into the matrix used by the report:
// rows: Fixed income / Other / Infrastructure-services
// cols: Central bank money / Private money
function isCentralBank(u: UseCase) {
  const s = u.settlement.join(" ").toLowerCase();
  return s.includes("wcbdc") || s.includes("rits") || s.includes("npp");
}

function rowsCols() {
  const rows: { key: string; label: string }[] = [
    { key: "fi", label: "Fixed income" },
    { key: "other", label: "Other asset classes" },
    { key: "infra", label: "Infrastructure / services" },
  ];
  const cols: { key: string; label: string }[] = [
    { key: "cb", label: "Central bank money" },
    { key: "pv", label: "Private money" },
  ];
  const map: Record<string, Record<string, UseCase[]>> = {};
  rows.forEach((r) => { map[r.key] = { cb: [], pv: [] }; });

  useCases.forEach((u) => {
    const r = u.assetClass === "Fixed income" ? "fi" : u.assetClass === "Infrastructure" ? "infra" : "other";
    // Use cases that explicitly use wCBDC OR central-bank settlement infrastructure
    const settles = isCentralBank(u);
    // Some hybrid ones get classified by primary settlement asset (first in list)
    const primary = u.settlement[0].toLowerCase();
    const col = settles && (primary.includes("wcbdc") || primary.includes("rits") || primary.includes("deposit token") || primary.includes("cba deposit"))
      ? "cb"
      : "pv";
    // The deposit-token CBA case is closer to central bank style (interbank wCBDC interchange) — keep in cb
    map[r][col].push(u);
  });

  return { rows, cols, map };
}

export function Figure1UseCaseMatrix() {
  const { rows, cols, map } = rowsCols();

  return (
    <FigureFrame label="Figure 01" title="Project Acacia use case landscape" source="DFCRC / RBA">
      <div style={{ display: "grid", gridTemplateColumns: "150px 1fr 1fr", gap: 1, background: "var(--border)", borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)" }}>
        {/* Header */}
        <div style={{ background: "var(--card-bg)", padding: "14px 16px", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)" }}>Asset class</div>
        {cols.map((c) => (
          <div key={c.key} style={{ background: "var(--card-bg-2)", padding: "14px 16px" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: c.key === "cb" ? "var(--yellow)" : "var(--green)" }}>
              {c.key === "cb" ? "Public" : "Private"}
            </div>
            <div style={{ marginTop: 4, fontFamily: "var(--font-display)", fontSize: 14, color: "rgba(255,255,255,0.92)" }}>{c.label}</div>
          </div>
        ))}

        {/* Body */}
        {rows.map((r) => (
          <RowFragment key={r.key} row={r} cols={cols} map={map[r.key]} />
        ))}
      </div>

      {/* Legend */}
      <div style={{ marginTop: 16, display: "flex", gap: 20, flexWrap: "wrap", fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.04em" }}>
        <Tag bg="rgba(252,191,72,0.16)" border="rgba(252,191,72,0.35)" color="var(--yellow)" small>P</Tag>
        <span style={{ marginLeft: -12 }}>Pilot</span>
        <Tag bg="transparent" border="rgba(255,255,255,0.18)" color="rgba(255,255,255,0.7)" small>C</Tag>
        <span style={{ marginLeft: -12 }}>Proof of concept</span>
        <span style={{ color: "var(--text-dim)", marginLeft: "auto" }}>Italicised: settlement asset</span>
      </div>
    </FigureFrame>
  );
}

function RowFragment({ row, cols, map }: { row: { key: string; label: string }; cols: { key: string; label: string }[]; map: Record<string, UseCase[]> }) {
  return (
    <>
      <div style={{ background: "var(--card-bg)", padding: "16px", display: "flex", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "rgba(255,255,255,0.92)", letterSpacing: "-0.015em" }}>{row.label}</div>
          <div style={{ marginTop: 4, fontSize: 11, color: "var(--text-dim)" }}>
            {(map.cb.length + map.pv.length)} use case{(map.cb.length + map.pv.length) === 1 ? "" : "s"}
          </div>
        </div>
      </div>
      {cols.map((c) => (
        <div key={c.key} style={{ background: "var(--card-bg)", padding: "14px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 8 }}>
          {map[c.key].map((u) => (
            <CaseChip key={u.id} u={u} tone={c.key === "cb" ? "yellow" : "green"} />
          ))}
          {map[c.key].length === 0 && (
            <div style={{ color: "var(--text-dim)", fontSize: 12, fontStyle: "italic", padding: "8px 4px" }}>—</div>
          )}
        </div>
      ))}
    </>
  );
}

function CaseChip({ u, tone }: { u: UseCase; tone: "yellow" | "green" }) {
  const accent = tone === "yellow" ? "rgba(252,191,72,0.32)" : "rgba(141,240,204,0.3)";
  const accentBg = tone === "yellow" ? "rgba(252,191,72,0.06)" : "rgba(141,240,204,0.05)";
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
        minHeight: 64,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.55)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{u.lead}</span>
        <Tag bg={u.type === "Pilot" ? "rgba(252,191,72,0.16)" : "transparent"} border={u.type === "Pilot" ? "rgba(252,191,72,0.35)" : "rgba(255,255,255,0.16)"} color={u.type === "Pilot" ? "var(--yellow)" : "rgba(255,255,255,0.7)"} small>
          {u.type === "Pilot" ? "P" : "C"}
        </Tag>
      </div>
      <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.9)", lineHeight: 1.3 }}>{u.name}</div>
      <div style={{ fontSize: 10.5, color: "var(--text-muted)", fontStyle: "italic", letterSpacing: "0.01em" }}>
        {u.settlement.join(", ")}
      </div>
    </div>
  );
}

function Tag({ children, bg, border, color, small }: { children: React.ReactNode; bg: string; border: string; color: string; small?: boolean }) {
  return (
    <span
      style={{
        background: bg,
        border: `1px solid ${border}`,
        color,
        borderRadius: 100,
        fontSize: small ? 9 : 10,
        fontWeight: 700,
        padding: small ? "2px 6px" : "3px 9px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: small ? 18 : undefined,
      }}
    >
      {children}
    </span>
  );
}
