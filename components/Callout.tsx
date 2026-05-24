export function Callout({
  label = "Box",
  title,
  children,
  tone = "yellow",
}: {
  label?: string;
  title: string;
  children: React.ReactNode;
  tone?: "yellow" | "green" | "muted";
}) {
  const bg = tone === "green" ? "var(--card-plus)" : tone === "muted" ? "var(--card-bg-2)" : "rgb(25,24,12)";
  const borderColor =
    tone === "green" ? "rgba(141,240,204,0.2)" : tone === "muted" ? "var(--border)" : "rgba(252,191,72,0.18)";
  const accent = tone === "green" ? "var(--green)" : "var(--yellow)";

  return (
    <aside
      className="callout-card"
      style={{
        background: bg,
        border: `1px solid ${borderColor}`,
        borderRadius: 16,
        padding: 24,
      }}
    >
      <div style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: accent, fontWeight: 700, marginBottom: 6 }}>
        {label}
      </div>
      <h3 style={{ margin: 0, fontSize: "clamp(1.05rem, 3vw, 1.25rem)", color: "#fff" }}>{title}</h3>
      <div style={{ marginTop: 14, color: "rgba(255,255,255,0.78)", lineHeight: 1.65, fontSize: 14 }}>{children}</div>
      <style>{`@media (max-width: 480px) { .callout-card { padding: 18px !important; border-radius: 14px !important; } }`}</style>
    </aside>
  );
}
