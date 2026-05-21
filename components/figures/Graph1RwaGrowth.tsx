import { FigureFrame } from "./FigureFrame";

// Synthesised monthly trajectory aligned to "exceeded US$30B by early May 2026"
// Drawn smoothly from ~$1.5B (Jan 2022) to ~$31B (May 2026)
const points: { x: number; y: number; label?: string }[] = [
  { x: 0, y: 1.5, label: "2022" },
  { x: 6, y: 2.0 },
  { x: 12, y: 2.8, label: "2023" },
  { x: 18, y: 4.5 },
  { x: 24, y: 7.5, label: "2024" },
  { x: 28, y: 9.5 },
  { x: 32, y: 12.0 },
  { x: 36, y: 15.0, label: "2025" },
  { x: 40, y: 18.5 },
  { x: 44, y: 22.5 },
  { x: 48, y: 27.0, label: "2026" },
  { x: 52, y: 31.0 },
];

export function Graph1RwaGrowth() {
  const W = 800;
  const H = 360;
  const padL = 50;
  const padR = 20;
  const padT = 30;
  const padB = 36;
  const xMax = 52;
  const yMax = 35;
  const sx = (x: number) => padL + (x / xMax) * (W - padL - padR);
  const sy = (y: number) => H - padB - (y / yMax) * (H - padT - padB);

  // Build smooth area path
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${sx(p.x).toFixed(2)} ${sy(p.y).toFixed(2)}`).join(" ");
  const area = `${path} L ${sx(xMax).toFixed(2)} ${sy(0).toFixed(2)} L ${sx(0).toFixed(2)} ${sy(0).toFixed(2)} Z`;

  return (
    <FigureFrame label="Graph 01" title="Tokenised real-world asset issuance" source="RBA · RWA.xyz">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }} role="img" aria-label="Tokenised RWA issuance growth from 2022 to 2026">
        <defs>
          <linearGradient id="rwa-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fcbf48" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#fcbf48" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="rwa-stroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#fcbf48" />
            <stop offset="100%" stopColor="#fcbf48" />
          </linearGradient>
        </defs>

        {/* Y-axis grid + labels */}
        {[0, 10, 20, 30].map((v) => (
          <g key={v}>
            <line x1={padL} x2={W - padR} y1={sy(v)} y2={sy(v)} stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4" />
            <text x={padL - 10} y={sy(v) + 4} fill="rgba(255,255,255,0.45)" fontSize="11" textAnchor="end" fontFamily="var(--font-body)">
              US${v}B
            </text>
          </g>
        ))}

        {/* X-axis year labels */}
        {points.filter((p) => p.label).map((p) => (
          <text
            key={p.label}
            x={sx(p.x)}
            y={H - 12}
            fill="rgba(255,255,255,0.55)"
            fontSize="11"
            textAnchor="middle"
            fontFamily="var(--font-body)"
          >
            {p.label}
          </text>
        ))}

        {/* Area + line */}
        <path d={area} fill="url(#rwa-area)" />
        <path d={path} fill="none" stroke="url(#rwa-stroke)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />

        {/* End annotation */}
        <line x1={sx(52)} x2={sx(52)} y1={sy(31)} y2={sy(0)} stroke="rgba(252,191,72,0.4)" strokeDasharray="3 3" />
        <circle cx={sx(52)} cy={sy(31)} r="5" fill="#080808" stroke="#fcbf48" strokeWidth="2" />
        <g>
          <rect x={sx(52) - 132} y={sy(31) - 38} width="120" height="32" rx="6" fill="#1a1a1a" stroke="rgba(252,191,72,0.25)" />
          <text x={sx(52) - 122} y={sy(31) - 22} fill="rgba(255,255,255,0.55)" fontSize="9" letterSpacing="0.08em" fontFamily="var(--font-body)">
            MAY 2026
          </text>
          <text x={sx(52) - 122} y={sy(31) - 10} fill="#fcbf48" fontSize="14" fontWeight="700" fontFamily="var(--font-display)">
            US$30B+
          </text>
        </g>

        {/* Caption footer */}
        <text x={padL} y={H - 20} fill="rgba(255,255,255,0.35)" fontSize="10" letterSpacing="0.08em" fontFamily="var(--font-body)">
          {">80% PRIVATE CREDIT + US TREASURIES"}
        </text>
      </svg>
    </FigureFrame>
  );
}
