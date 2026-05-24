export function FigureFrame({
  label,
  title,
  source,
  children,
  height = "auto",
}: {
  label: string;
  title: string;
  source?: string;
  children: React.ReactNode;
  height?: number | string;
}) {
  return (
    <figure style={{ margin: 0 }} className="figure-frame">
      <div
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: 24,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 18, position: "relative" }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--yellow)" }}>{label}</div>
            <div style={{ marginTop: 6, fontFamily: "var(--font-display)", fontSize: "1.15rem", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.92)" }}>{title}</div>
          </div>
          {source && (
            <div style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{source}</div>
          )}
        </div>
        <div style={{ position: "relative", height }}>{children}</div>
      </div>
    </figure>
  );
}
