import { FigureFrame } from "./FigureFrame";

export function Figure4Interchange() {
  return (
    <FigureFrame label="Figure 04" title="Interchange between forms of private money using wCBDC" source="DFCRC / RBA">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="ic-grid">
        <Variant
          tone="yellow"
          label="A · Model E"
          title="Single chain"
          subtitle="wCBDC and private money tokens issued on the same chain. Smart contract uses wCBDC to extinguish interbank obligations atomically."
          edges={[
            { from: "Buyer", to: "Buyer Bank", label: "Stablecoin A" },
            { from: "Buyer Bank", to: "Seller Bank", label: "wCBDC settlement" },
            { from: "Seller Bank", to: "Seller", label: "Stablecoin B" },
          ]}
        />
        <Variant
          tone="green"
          label="B · AP+ Token Interchange"
          title="Two-chain with synchroniser"
          subtitle="wCBDC stays on a private chain. A 'white coin' digital twin facilitates interchange on the public chain; a synchroniser keeps the two in lockstep."
          edges={[
            { from: "Buyer", to: "Buyer Bank", label: "Stablecoin A" },
            { from: "Buyer Bank", to: "Seller Bank", label: "White coin (public chain)" },
            { from: "Synchroniser", to: "RBA · wCBDC", label: "Mirror update (private chain)", muted: true },
            { from: "Seller Bank", to: "Seller", label: "Stablecoin B" },
          ]}
        />
      </div>
      <style>{`@media (max-width: 760px) { .ic-grid { grid-template-columns: 1fr !important; } }`}</style>
    </FigureFrame>
  );
}

function Variant({
  tone,
  label,
  title,
  subtitle,
  edges,
}: {
  tone: "yellow" | "green";
  label: string;
  title: string;
  subtitle: string;
  edges: { from: string; to: string; label: string; muted?: boolean }[];
}) {
  const accent = tone === "yellow" ? "var(--yellow)" : "var(--green)";
  const accentBg = tone === "yellow" ? "rgba(252,191,72,0.05)" : "rgba(141,240,204,0.05)";
  const accentBorder = tone === "yellow" ? "rgba(252,191,72,0.18)" : "rgba(141,240,204,0.18)";

  return (
    <div style={{ background: accentBg, border: `1px solid ${accentBorder}`, borderRadius: 12, padding: 18 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: accent, fontWeight: 700 }}>{label}</span>
        <span style={{ height: 1, flex: 1, background: accentBorder }} />
      </div>
      <h4 style={{ margin: "4px 0 6px", fontFamily: "var(--font-display)", fontSize: "1.05rem", letterSpacing: "-0.02em" }}>{title}</h4>
      <p style={{ margin: "0 0 16px", color: "var(--text-muted)", fontSize: 12.5, lineHeight: 1.5 }}>{subtitle}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {edges.map((e, i) => (
          <Flow key={i} accent={accent} accentBorder={accentBorder} {...e} />
        ))}
      </div>
    </div>
  );
}

function Flow({
  from,
  to,
  label,
  accent,
  accentBorder,
  muted,
}: {
  from: string;
  to: string;
  label: string;
  accent: string;
  accentBorder: string;
  muted?: boolean;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 10, alignItems: "center" }}>
      <Node label={from} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, minWidth: 100 }}>
        <span style={{ fontSize: 10.5, color: muted ? "var(--text-dim)" : accent, fontWeight: 600, letterSpacing: "0.02em", lineHeight: 1.2, textAlign: "center" }}>
          {label}
        </span>
        <svg width="90" height="10" viewBox="0 0 90 10" style={{ display: "block" }}>
          <line
            x1="0"
            y1="5"
            x2="80"
            y2="5"
            stroke={muted ? "rgba(255,255,255,0.25)" : accent}
            strokeWidth="1.2"
            strokeDasharray={muted ? "3 3" : undefined}
          />
          <polygon points="80,1 88,5 80,9" fill={muted ? "rgba(255,255,255,0.35)" : accent} />
        </svg>
      </div>
      <Node label={to} alignRight />
    </div>
  );
}

function Node({ label, alignRight }: { label: string; alignRight?: boolean }) {
  return (
    <div
      style={{
        background: "var(--card-bg-2)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        padding: "10px 12px",
        fontSize: 12,
        color: "rgba(255,255,255,0.88)",
        textAlign: alignRight ? "right" : "left",
        lineHeight: 1.3,
      }}
    >
      {label}
    </div>
  );
}
