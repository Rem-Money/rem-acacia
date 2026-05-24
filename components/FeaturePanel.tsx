import React from "react";

type Tone = "warm" | "cool";

export function FeaturePanel({
  label,
  title,
  children,
  tone = "warm",
  aside,
}: {
  label?: string;
  title: string;
  children?: React.ReactNode;
  tone?: Tone;
  aside?: React.ReactNode;
}) {
  const surface = tone === "warm" ? "var(--bg-plus)" : "var(--card-plus)";
  const borderColor =
    tone === "warm" ? "rgba(252,191,72,0.32)" : "rgba(141,240,204,0.22)";
  const accent = tone === "warm" ? "var(--yellow)" : "var(--green)";

  return (
    <section
      className="feature-panel"
      style={{
        background: surface,
        border: `1px solid ${borderColor}`,
        borderRadius: 24,
        padding: "clamp(28px, 4vw, 44px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            tone === "warm"
              ? "radial-gradient(800px 280px at 100% 0%, rgba(252,191,72,0.10), transparent 60%)"
              : "radial-gradient(800px 280px at 100% 0%, rgba(141,240,204,0.08), transparent 60%)",
        }}
      />
      <div
        className="feature-panel-grid"
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: aside ? "1.5fr 1fr" : "1fr",
          gap: "clamp(20px, 3vw, 40px)",
          alignItems: "start",
        }}
      >
        <div>
          {label && (
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: accent,
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              {label}
            </div>
          )}
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              color: "#fff",
              maxWidth: 760,
            }}
          >
            {title}
          </h2>
          {children && (
            <div
              style={{
                marginTop: 18,
                color: "rgba(255,255,255,0.82)",
                fontSize: 15,
                lineHeight: 1.65,
                maxWidth: 760,
              }}
            >
              {children}
            </div>
          )}
        </div>
        {aside && <div style={{ minWidth: 0 }}>{aside}</div>}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .feature-panel-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
