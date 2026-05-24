export function StatCard({
  value,
  label,
  hint,
  accent = "muted",
}: {
  value: string;
  label: string;
  hint?: string;
  accent?: "yellow" | "green" | "muted";
}) {
  const color = accent === "green" ? "var(--green)" : accent === "yellow" ? "var(--yellow)" : "#fff";
  return (
    <div className="card" style={{ padding: 20, borderRadius: 14 }}>
      <div className="stat-value" style={{ color }}>{value}</div>
      <div className="stat-label" style={{ marginTop: 10 }}>{label}</div>
      {hint && (
        <div style={{ marginTop: 8, fontSize: 13, color: "var(--text-muted)", lineHeight: 1.45 }}>{hint}</div>
      )}
    </div>
  );
}
