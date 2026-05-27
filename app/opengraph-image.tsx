import { ImageResponse } from "next/og";

export const alt = "Project Acacia — Independent reading of the RBA × DFCRC report";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(at 20% 10%, #1a1a1a 0%, #0a0a0a 60%, #000 100%)",
          color: "#f5f1e8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#d4af37",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#d4af37",
            }}
          />
          RBA × DFCRC · Final Report · May 2026
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              maxWidth: 1000,
            }}
          >
            Project Acacia
          </div>
          <div
            style={{
              fontSize: 38,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#e8e3d6",
              maxWidth: 980,
            }}
          >
            An independent reading of the RBA × DFCRC report on tokenised wholesale markets.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#a89f8c",
          }}
        >
          <div>acacia.rem.money</div>
          <div>by rem labs</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
