import { FigureFrame } from "./FigureFrame";

export function Figure23DvpAtomic() {
  return (
    <FigureFrame label="Figures 02 & 03" title="Traditional DvP vs. composed atomic settlement" source="RBA">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="dvp-grid">
        <Lane
          variant="traditional"
          title="DvP settlement via an FMI"
          subtitle="Six sequential steps across custodians, FMI and RTGS -  each a potential failure point."
          steps={[
            { actor: "Seller / Custodian", action: "Submit settlement instruction" },
            { actor: "Buyer / Custodian", action: "Submit settlement instruction" },
            { actor: "FMI", action: "Validate & match instructions" },
            { actor: "FMI", action: "Check funds + lock securities & cash" },
            { actor: "RTGS", action: "Settle interbank cash (central bank)" },
            { actor: "FMI", action: "Transfer securities + release cash" },
          ]}
        />
        <Lane
          variant="atomic"
          title="Composed atomic settlement"
          subtitle="One smart contract, all-or-nothing. Asset + payment + interchange execute as a single indivisible event."
          steps={[
            { actor: "Settlement smart contract", action: "Lock asset + money tokens" },
            { actor: "Interchange contract", action: "Atomically swap private money tokens via wCBDC" },
            { actor: "Settlement smart contract", action: "Transfer asset to buyer, money to seller" },
          ]}
        />
      </div>

      <style>{`@media (max-width: 760px) { .dvp-grid { grid-template-columns: 1fr !important; } }`}</style>
    </FigureFrame>
  );
}

function Lane({
  variant,
  title,
  subtitle,
  steps,
}: {
  variant: "traditional" | "atomic";
  title: string;
  subtitle: string;
  steps: { actor: string; action: string }[];
}) {
  const accent = variant === "atomic" ? "var(--green)" : "var(--yellow)";
  const accentBg = variant === "atomic" ? "rgba(141,240,204,0.06)" : "rgba(252,191,72,0.05)";
  const accentBorder = variant === "atomic" ? "rgba(141,240,204,0.18)" : "rgba(252,191,72,0.18)";

  return (
    <div
      style={{
        background: accentBg,
        border: `1px solid ${accentBorder}`,
        borderRadius: 12,
        padding: 18,
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: accent, fontWeight: 700 }}>
          {variant === "atomic" ? "Atomic" : "Traditional"}
        </span>
        <span style={{ height: 1, flex: 1, background: accentBorder }} />
      </div>
      <h4 style={{ margin: "4px 0 6px", fontFamily: "var(--font-display)", fontSize: "1.05rem", letterSpacing: "-0.02em" }}>{title}</h4>
      <p style={{ margin: "0 0 16px", color: "var(--text-muted)", fontSize: 12.5, lineHeight: 1.5 }}>{subtitle}</p>

      <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, position: "relative" }}>
        {/* Connector line */}
        <span
          aria-hidden
          style={{
            position: "absolute",
            left: 12,
            top: 14,
            bottom: 14,
            width: 1,
            background: variant === "atomic" ? `linear-gradient(to bottom, ${accent}, ${accent})` : "rgba(255,255,255,0.12)",
            opacity: variant === "atomic" ? 0.4 : 1,
          }}
        />
        {steps.map((s, i) => (
          <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", position: "relative" }}>
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: 100,
                background: variant === "atomic" ? "rgba(141,240,204,0.18)" : "rgba(255,255,255,0.06)",
                color: accent,
                fontFamily: "var(--font-display)",
                fontSize: 11,
                fontWeight: 700,
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
                border: `1px solid ${accentBorder}`,
              }}
            >
              {i + 1}
            </span>
            <div style={{ minWidth: 0, paddingTop: 2 }}>
              <div style={{ fontSize: 10.5, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-dim)" }}>{s.actor}</div>
              <div style={{ marginTop: 3, fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.4 }}>{s.action}</div>
            </div>
          </li>
        ))}
      </ol>

      <div
        style={{
          marginTop: 18,
          padding: "10px 12px",
          background: "rgba(0,0,0,0.25)",
          border: `1px solid ${accentBorder}`,
          borderRadius: 8,
          fontSize: 11.5,
          color: "var(--text-muted)",
          letterSpacing: "0.02em",
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <span><b style={{ color: accent }}>Settlement time</b> {variant === "atomic" ? "instant · 24/7" : "T+0 to T+2"}</span>
        <span><b style={{ color: accent }}>Failure modes</b> {variant === "atomic" ? "all-or-nothing" : "partial possible"}</span>
        <span><b style={{ color: accent }}>Reconciliation</b> {variant === "atomic" ? "eliminated" : "required"}</span>
      </div>
    </div>
  );
}
