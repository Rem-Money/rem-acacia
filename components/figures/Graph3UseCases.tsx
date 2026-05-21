import { FigureFrame } from "./FigureFrame";
import { useCases } from "@/lib/usecases";

// Group use cases by sub-class
function buckets() {
  const m = new Map<string, number>();
  for (const u of useCases) {
    m.set(u.assetSubClass, (m.get(u.assetSubClass) ?? 0) + 1);
  }
  return Array.from(m, ([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
}

export function Graph3UseCases() {
  const data = buckets();
  const total = data.reduce((s, d) => s + d.count, 0);
  const max = Math.max(...data.map((d) => d.count));

  // Map sub-class → broad asset class color
  const classOf = (sub: string) => {
    const u = useCases.find((x) => x.assetSubClass === sub);
    return u?.assetClass ?? "Other";
  };
  const colorOf = (sub: string) => {
    const c = classOf(sub);
    if (c === "Fixed income") return "var(--yellow)";
    if (c === "Infrastructure") return "rgba(255,255,255,0.55)";
    return "var(--green)";
  };

  return (
    <FigureFrame label="Graph 03" title="Use cases by asset sub-class" source={`${total} use cases · DFCRC / RBA`}>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {data.map((d) => (
          <div key={d.name} style={{ display: "grid", gridTemplateColumns: "180px 1fr 36px", gap: 14, alignItems: "center" }}>
            <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.78)", letterSpacing: "-0.005em" }}>{d.name}</span>
            <div style={{ position: "relative", height: 28, background: "rgba(255,255,255,0.025)", border: "1px solid var(--border)", borderRadius: 4, overflow: "hidden" }}>
              <div
                style={{
                  width: `${(d.count / max) * 100}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${colorOf(d.name)} 0%, transparent 180%)`,
                  opacity: 0.7,
                  borderRight: `1px solid ${colorOf(d.name)}`,
                }}
              />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", paddingLeft: 12, fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {classOf(d.name)}
              </div>
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: colorOf(d.name), textAlign: "right" }}>{d.count}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--border)", display: "flex", gap: 24, flexWrap: "wrap", fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        <Legend swatch="var(--yellow)" label="Fixed income" />
        <Legend swatch="var(--green)" label="Other asset classes" />
        <Legend swatch="rgba(255,255,255,0.55)" label="Infrastructure" />
      </div>
    </FigureFrame>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <span style={{ width: 10, height: 10, background: swatch, borderRadius: 2, display: "inline-block" }} />
      {label}
    </span>
  );
}
