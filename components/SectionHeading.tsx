export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <header style={{ textAlign: align, maxWidth: align === "center" ? 720 : undefined, marginInline: align === "center" ? "auto" : undefined, marginBottom: 36 }}>
      {eyebrow && <div className="eyebrow" style={{ marginBottom: 12 }}>{eyebrow}</div>}
      <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", margin: 0 }}>{title}</h2>
      {description && <p className="lead" style={{ marginTop: 14, maxWidth: 720, marginInline: align === "center" ? "auto" : undefined }}>{description}</p>}
    </header>
  );
}
