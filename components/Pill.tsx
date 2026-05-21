export function Pill({ children, tone = "yellow" }: { children: React.ReactNode; tone?: "yellow" | "green" | "muted" }) {
  return <span className={`pill ${tone === "green" ? "pill-green" : tone === "muted" ? "pill-muted" : ""}`}>{children}</span>;
}
