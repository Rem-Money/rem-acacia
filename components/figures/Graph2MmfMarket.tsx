import { FigureFrame } from "./FigureFrame";

// Quarterly tokenised MMF AUM (synthesised from "around US$15B by Q2 2026, 66 products, 62k+ investors")
const data = [
  { q: "Q1 24", v: 0.6, products: 8 },
  { q: "Q2 24", v: 1.3, products: 14 },
  { q: "Q3 24", v: 2.4, products: 22 },
  { q: "Q4 24", v: 4.1, products: 30 },
  { q: "Q1 25", v: 6.2, products: 38 },
  { q: "Q2 25", v: 8.4, products: 45 },
  { q: "Q3 25", v: 10.5, products: 52 },
  { q: "Q4 25", v: 12.8, products: 59 },
  { q: "Q1 26", v: 14.2, products: 64 },
  { q: "Q2 26", v: 15.0, products: 66 },
];

export function Graph2MmfMarket() {
  const W = 800;
  const H = 360;
  const padL = 50;
  const padR = 20;
  const padT = 30;
  const padB = 50;
  const yMax = 16;
  const barW = (W - padL - padR) / data.length - 8;
  const sx = (i: number) => padL + i * ((W - padL - padR) / data.length) + 4;
  const sy = (y: number) => H - padB - (y / yMax) * (H - padT - padB);

  return (
    <FigureFrame label="Graph 02" title="US tokenised money market funds -  AUM trajectory" source="RBA · Securitize · Franklin Templeton">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }} role="img" aria-label="Tokenised MMF growth 2024 to Q2 2026">
        <defs>
          <linearGradient id="mmf-bar" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#8DF0CC" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#8DF0CC" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Y-grid */}
        {[0, 5, 10, 15].map((v) => (
          <g key={v}>
            <line x1={padL} x2={W - padR} y1={sy(v)} y2={sy(v)} stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4" />
            <text x={padL - 10} y={sy(v) + 4} fill="rgba(255,255,255,0.45)" fontSize="11" textAnchor="end">
              US${v}B
            </text>
          </g>
        ))}

        {/* Bars */}
        {data.map((d, i) => {
          const y = sy(d.v);
          const x = sx(i);
          const h = H - padB - y;
          const highlight = i === data.length - 1;
          return (
            <g key={d.q}>
              <rect
                x={x}
                y={y}
                width={barW}
                height={h}
                fill={highlight ? "url(#mmf-bar)" : "rgba(141,240,204,0.18)"}
                stroke={highlight ? "rgba(141,240,204,0.6)" : "rgba(141,240,204,0.12)"}
                rx="3"
              />
              <text
                x={x + barW / 2}
                y={H - padB + 16}
                fill="rgba(255,255,255,0.5)"
                fontSize="10"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                {d.q}
              </text>
              {highlight && (
                <>
                  <text x={x + barW / 2} y={y - 10} fill="#8DF0CC" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="var(--font-display)">
                    ${d.v}B
                  </text>
                  <text x={x + barW / 2} y={y - 24} fill="rgba(255,255,255,0.45)" fontSize="9" letterSpacing="0.08em" textAnchor="middle">
                    {d.products} PRODUCTS
                  </text>
                </>
              )}
            </g>
          );
        })}

        {/* Annotations: key funds */}
        <g transform={`translate(${padL}, ${H - 20})`}>
          <text fill="rgba(255,255,255,0.4)" fontSize="10" letterSpacing="0.08em">
            INCL. BLACKROCK BUIDL ~$2.4B · FRANKLIN TEMPLETON BENJI ~$2.2B · 62K+ INVESTORS
          </text>
        </g>
      </svg>
    </FigureFrame>
  );
}
