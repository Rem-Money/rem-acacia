"use client";

import { useState } from "react";
import { FigureFrame } from "./FigureFrame";
import { UseCaseDetailModal, type UseCaseModalData } from "../UseCaseDetailModal";

/* ────────────────────────────────────────────────
   Colour taxonomy -  each settlement-asset family gets a token.
   These are deliberately distinct so the matrix reads at a glance.
   ──────────────────────────────────────────────── */

type Family = "wcbdc" | "rails" | "deposit" | "hybrid" | "stable";

const family: Record<Family, { name: string; color: string; bg: string; ring: string }> = {
  wcbdc: {
    name: "wCBDC",
    color: "#fcbf48", // brand yellow -  public, on-chain
    bg: "rgba(252,191,72,0.10)",
    ring: "rgba(252,191,72,0.45)",
  },
  rails: {
    name: "NPP / RITS",
    color: "#fd9a73", // coral -  public, off-chain rails
    bg: "rgba(253,154,115,0.10)",
    ring: "rgba(253,154,115,0.45)",
  },
  deposit: {
    name: "Deposit token",
    color: "#7dd3fc", // sky -  private bank balance sheet
    bg: "rgba(125,211,252,0.10)",
    ring: "rgba(125,211,252,0.45)",
  },
  hybrid: {
    name: "wCBDC-backed token",
    color: "#8DF0CC", // mint -  hybrid
    bg: "rgba(141,240,204,0.10)",
    ring: "rgba(141,240,204,0.45)",
  },
  stable: {
    name: "Stablecoin",
    color: "#c7e36a", // lime -  private money
    bg: "rgba(199,227,106,0.10)",
    ring: "rgba(199,227,106,0.45)",
  },
};

/* DLT networks -  small coloured dots */
type Net =
  | "Redbelly"
  | "Canvas Connect"
  | "Hedera"
  | "Ethereum"
  | "XRP Ledger"
  | "Private ZK L2"
  | "Gravital · Kinexys · HQLAx"
  | "Hyperledger Besu"
  | "Network-agnostic"
  | "N/A";

const network: Record<Net, string> = {
  Redbelly: "#e7674a",
  "Canvas Connect": "#fcbf48",
  Hedera: "#4cc9c3",
  Ethereum: "#8B7EE8",
  "XRP Ledger": "#a8b3c0",
  "Private ZK L2": "#7c92ff",
  "Gravital · Kinexys · HQLAx": "#9a87ff",
  "Hyperledger Besu": "#6296c4",
  "Network-agnostic": "rgba(255,255,255,0.4)",
  "N/A": "rgba(255,255,255,0.3)",
};

type Tag = { f: Family; raw: string };

type Cell = {
  lead: string;
  name: string;
  tags: Tag[]; // settlement assets, in display order -  first is the primary
  net: Net;
  type: "Pilot" | "PoC";
};

/* ────────────────────────────────────────────────
   Per-use-case detail -  surfaced in the modal.
   Sourced from the Project Acacia final report.
   ──────────────────────────────────────────────── */

type Detail = {
  summary: string;
  participants?: string[];
  mechanism?: string;
  findings?: string;
};

const detailKey = (lead: string, name: string) => `${lead}__${name}`;

const details: Record<string, Detail> = {
  [detailKey("Australian Bond Exchange", "Corporate Bond")]: {
    summary:
      "Secondary-market transactions in tokenised corporate bonds tested on Redbelly Network, with wCBDC settlement issued on the same network. The pilot connected issuers and investors directly for early redemptions and covenant voting, demonstrating digital-twin tokenisation with on-chain settlement.",
    participants: ["Australian Bond Exchange", "Fieldrock", "Fireblocks", "Rand Low"],
    mechanism: "Digital-twin tokenisation on Redbelly with same-ledger wCBDC settlement.",
    findings: "Explored efficiency gains in processing times and direct issuer–investor interaction for corporate-action events.",
  },
  [detailKey("Canvas", "Government Bond")]: {
    summary:
      "Canvas tokenised digital twins of Australian Government bonds on Canvas Connect (a private EVM-compatible L2) with wCBDC settlement on the same ledger. Two tokenisation structures were tested -  TCP-aligned beneficial ownership and SPV debt claims -  alongside collateralised lending, repos, secondary trading and coupon payments.",
    participants: ["Canvas"],
    mechanism: "Permissioned EVM L2 with underlying bonds held in registered custody (Austraclear off-chain).",
    findings: "Demonstrated diversified settlement and collateral workflows across multiple tokenisation structures.",
  },
  [detailKey("CBA", "Intraday Repo")]: {
    summary:
      "Multi-platform PoC for intraday repurchase agreements in Commonwealth and semi-government securities, with CBA deposit tokens used for settlement on Kinexys and wCBDC interchange across ledgers. Smart contracts orchestrated DvP across Gravital, HQLAx and Kinexys.",
    participants: ["CBA", "Gravital", "HQLAx", "Kinexys"],
    mechanism: "Cross-ledger DvP via smart contracts spanning a digital registry, a repo execution venue and a CSD.",
    findings: "Tested interoperability requirements among the three platforms for intraday liquidity workflows.",
  },
  [detailKey("Fireblocks", "Corporate Bond with Interchange")]: {
    summary:
      "PoC demonstrating tokenised corporate bond issuance, trading and settlement on Redbelly using wCBDC and multiple stablecoins. Interchange was achieved via smart contracts converting between stablecoins and wCBDC, with a settlement contract calling 'singleness' contracts deployed by each stablecoin issuer.",
    participants: ["Fireblocks"],
    mechanism: "Settlement contract orchestrating issuer-specific singleness contracts; wCBDC as interchange asset.",
    findings: "Showed wCBDC could serve as interchange settlement, ultimately delivering the seller's preferred stablecoin.",
  },
  [detailKey("Westpac", "Term Deposit")]: {
    summary:
      "Network-agnostic PoC exploring how the NPP PayTo Biller service could facilitate near-real-time atomic settlement of tokenised term deposits. Connects domestic real-time payment infrastructure with emerging tokenised asset platforms.",
    participants: ["Westpac"],
    mechanism: "PayTo Biller synchronised against RITS Fast Settlement Service.",
    findings: "Split DvP into a tangible first step using existing RITS rails -  a practical path for industry adoption.",
  },
  [detailKey("ANZ", "Corporate Bond")]: {
    summary:
      "Private ZK L2 PoC simulating a tokenised corporate bond lifecycle including issuance, coupons and redemption. AUD-referenced payment tokens (stablecoins or deposit tokens) were used for bookbuilds, with wCBDC providing settlement and interchange between the buyer's and seller's preferred tokens.",
    participants: ["ANZ"],
    mechanism: "Multi-token settlement coordination on a private ZK L2; coupon payments in the private payment token.",
    findings: "Showed how programmable interchange can let counterparties hold different forms of money pre- and post-settlement.",
  },
  [detailKey("Imperium", "Term Deposit")]: {
    summary:
      "Pilot of tokenised short-term wholesale term deposits on Hedera and HashSphere, settled using a Cuscal-issued stablecoin backed by wCBDC on private networks. Asset tokens were digital twins recorded and custodied on-chain.",
    participants: ["Imperium Markets", "Cuscal", "AustralianSuper", "major banks", "insurance providers"],
    mechanism: "Settlement coordinator handled smart-contract-based escrow and atomic DvP swaps.",
    findings: "Demonstrated atomic settlement of wholesale money-market instruments using wCBDC-backed private money.",
  },
  [detailKey("Imperium", "Certificates of Deposit")]: {
    summary:
      "Negotiable certificates of deposit (NCDs) issued as digital twins on Hedera and HashSphere, using an AP+-developed settlement coordinator for atomic DvP via smart-contract escrow. Settlement used a wCBDC-backed Cuscal stablecoin on the same DLTs.",
    participants: ["Imperium Markets", "AP+", "Cuscal"],
    mechanism: "Settlement-coordinator escrow with atomic swap on Hedera / HashSphere.",
    findings: "Demonstrated scalable on-chain money-market infrastructure for NCDs.",
  },
  [detailKey("Imperium", "Annuities")]: {
    summary:
      "Annuities tokenised and traded on Hedera/HashSphere using the same settlement architecture -  wCBDC-backed Cuscal stablecoin with settlement-coordinator escrow and atomic swaps. Explored pension and insurance product tokenisation as digital twins.",
    participants: ["Imperium Markets", "Cuscal", "superannuation, banking and insurance participants"],
    mechanism: "Atomic DvP via settlement coordinator on Hedera / HashSphere.",
    findings: "Enabled direct on-chain custody and secondary trading of insurance-style products.",
  },
  [detailKey("Forte", "Government Bond")]: {
    summary:
      "Pilot of Australian Government bonds as digital twins on public Ethereum, with settlement via the AUDF stablecoin through a purpose-built DvP mechanism. Coupon payments to tokenised bond holders were facilitated in AUDF, with reserves held by an ESA holder (Cuscal) in segregated accounts.",
    participants: ["Forte", "Cuscal"],
    mechanism: "Public-chain DvP with central-bank-money-backed stablecoin reserves.",
    findings: "Demonstrated government-bond settlement on a public network with regulated stablecoin backing.",
  },
  [detailKey("Zerocap", "Government Bond")]: {
    summary:
      "Pilot of tokenised Australian Government bonds as digital twins on the public-permissioned XRP Ledger, with settlement via RLUSD. The end-to-end lifecycle covered primary issuance, secondary trading (CLOB and AMM) and redemption.",
    participants: ["Zerocap", "JPMorgan", "BGC Brokers", "Chainlink Labs", "Fireblocks"],
    mechanism: "Off-chain custody via JPMorgan / BGC; on-ledger trading on XRPL with RLUSD settlement.",
    findings: "Tested both order-book and AMM market structures for tokenised sovereign debt.",
  },
  [detailKey("NotCentralised", "Collateralised Loans")]: {
    summary:
      "Pilot of tokenised structured-finance securities backed by loans on Redbelly, with settlement via a private payment token backed by wCBDC. Asset issuance, management and associated payment flows occurred on-chain.",
    participants: ["NotCentralised"],
    mechanism: "On-chain composability between bond exchange and private money token settlement.",
    findings: "Tested structured-finance automation and programmable loan-lifecycle workflows.",
  },
  [detailKey("Macropod", "Corporate Bond")]: {
    summary:
      "Pilot of tokenised corporate bonds on Redbelly -  issuance, secondary trading, coupon payments and maturity -  via the Imperium Marketplace. Settlement used Macropod's AUD-denominated AUDM stablecoin.",
    participants: ["Macropod", "Imperium Markets"],
    mechanism: "Permissioned settlement on Redbelly with AUDM stablecoin.",
    findings: "Validated digital-native corporate debt markets running alongside Macropod's managed-fund pilot.",
  },
  [detailKey("Canvas", "Private Credit Fund")]: {
    summary:
      "Pilot of tokenised shares in an SPV investing in real-estate credit funds on Canvas Connect, exploring primary issuance, secondary trading, distributions and collateralised lending. wCBDC issued on the same permissioned EVM L2 facilitated settlement.",
    participants: ["Canvas"],
    mechanism: "Same-ledger wCBDC settlement on a permissioned EVM L2.",
    findings: "Extended tokenisation testing beyond government bonds into alternative asset classes and fund distribution.",
  },
  [detailKey("ANZ", "Trade Payable")]: {
    summary:
      "Private ZK L2 PoC addressing trade-finance inefficiencies by tokenising trade invoices as payment obligations and assignments in digital form. The tokenised invoice was exchanged for an AUD-referenced payment token on ANZ's network, with wCBDC providing settlement and interchange between buyer and seller tokens.",
    participants: ["ANZ"],
    mechanism: "Token exchange on private ZK L2 with wCBDC interchange.",
    findings: "Enabled fractionalised trade finance and direct invoice assignment.",
  },
  [detailKey("Northern Trust", "Carbon Credits")]: {
    summary:
      "Simulated synchronised DvP of tokenised carbon credits on permissioned Matrix Zenith (Hyperledger Besu), using traditional payment rails (RITS via SWIFT) rather than tokenised money.",
    participants: ["Northern Trust", "SWIFT"],
    mechanism: "SWIFT as synchronisation coordinator using existing messaging standards; ESA-based settlement via RITS.",
    findings: "Demonstrated settlement of digital environmental assets with off-chain payment clearance.",
  },
  [detailKey("Macropod", "Digital Asset Fund")]: {
    summary:
      "Pilot of tokenised units in a wholesale managed investment scheme on Redbelly, with AUDM stablecoin settlement. Issuance, trading and redemption ran through the Tokeniser platform.",
    participants: ["Macropod"],
    mechanism: "Permissioned settlement on Redbelly with AUDM stablecoin via Tokeniser.",
    findings: "Validated digital-native fund distribution and fractionalised manager structures -  paired with the corporate-bond pilot.",
  },
  [detailKey("ProspEx", "Mining Royalty Interests")]: {
    summary:
      "PoC tokenising mining royalties as digital fractionalised interests on public Ethereum, settled via the AUDF stablecoin. A minimum-subscription smart-contract escrow conditionally settled once thresholds were met.",
    participants: ["ProspEx"],
    mechanism: "Conditional settlement smart contract with subscription-threshold escrow on Ethereum.",
    findings: "Showed programmable settlement and fractionalisation enabling smaller minimum investments in alternative assets.",
  },
  [detailKey("AP+", "Token Interchange Service")]: {
    summary:
      "Pilot of a token interchange service on public-permissioned Hedera and private-permissioned HashSphere, facilitating exchanges between stablecoins and deposit tokens using smart-contract rules. A digital twin of wCBDC (a 'white coin') served as the interchange asset on public networks while the underlying wCBDC remained on private networks.",
    participants: ["AP+"],
    mechanism: "'White coin' wCBDC twin on public networks bridged to private-network wCBDC.",
    findings: "Demonstrated multilateral interoperability between private-money issuers.",
  },
  [detailKey("AP+", "NPP-Token Integration")]: {
    summary:
      "Research and PoC for an industry utility and scheme rules supporting value transfers between traditional commercial bank accounts and private money tokens via the NPP and the RITS Fast Settlement Service.",
    participants: ["AP+"],
    mechanism: "Settlement coordination across NPP-connected bank accounts and tokenised payment networks.",
    findings: "Examined funding and redeeming stablecoins / deposit tokens from NPP-connected accounts -  bridging legacy and tokenised payment infrastructure.",
  },
};

/* ────────────────────────────────────────────────
   The matrix layout -  exact placements from the report.
   ──────────────────────────────────────────────── */

const matrix: { row: string; cb: Cell[]; pv: Cell[] }[] = [
  {
    row: "Fixed income",
    cb: [
      { lead: "Australian Bond Exchange", name: "Corporate Bond", tags: [{ f: "wcbdc", raw: "wCBDC" }], net: "Redbelly", type: "Pilot" },
      { lead: "Canvas", name: "Government Bond", tags: [{ f: "wcbdc", raw: "wCBDC" }], net: "Canvas Connect", type: "Pilot" },
      {
        lead: "CBA",
        name: "Intraday Repo",
        tags: [
          { f: "wcbdc", raw: "wCBDC" },
          { f: "deposit", raw: "Deposit token" },
        ],
        net: "Gravital · Kinexys · HQLAx",
        type: "PoC",
      },
      {
        lead: "Fireblocks",
        name: "Corporate Bond with Interchange",
        tags: [
          { f: "wcbdc", raw: "wCBDC" },
          { f: "stable", raw: "Stablecoin" },
        ],
        net: "Redbelly",
        type: "PoC",
      },
      { lead: "Westpac", name: "Term Deposit", tags: [{ f: "rails", raw: "NPP PayTo" }], net: "Network-agnostic", type: "PoC" },
      {
        lead: "ANZ",
        name: "Corporate Bond",
        tags: [
          { f: "wcbdc", raw: "wCBDC" },
          { f: "stable", raw: "Stablecoin" },
          { f: "deposit", raw: "Deposit token" },
        ],
        net: "Private ZK L2",
        type: "PoC",
      },
    ],
    pv: [
      { lead: "Imperium", name: "Term Deposit", tags: [{ f: "hybrid", raw: "wCBDC-backed stablecoin" }], net: "Hedera", type: "Pilot" },
      { lead: "Imperium", name: "Certificates of Deposit", tags: [{ f: "hybrid", raw: "wCBDC-backed stablecoin" }], net: "Hedera", type: "Pilot" },
      { lead: "Imperium", name: "Annuities", tags: [{ f: "hybrid", raw: "wCBDC-backed stablecoin" }], net: "Hedera", type: "Pilot" },
      { lead: "Forte", name: "Government Bond", tags: [{ f: "stable", raw: "Stablecoin" }], net: "Ethereum", type: "Pilot" },
      { lead: "Zerocap", name: "Government Bond", tags: [{ f: "stable", raw: "Stablecoin" }], net: "XRP Ledger", type: "Pilot" },
      {
        lead: "NotCentralised",
        name: "Collateralised Loans",
        tags: [{ f: "hybrid", raw: "wCBDC-backed payment token" }],
        net: "Redbelly",
        type: "Pilot",
      },
      { lead: "Macropod", name: "Corporate Bond", tags: [{ f: "stable", raw: "Stablecoin" }], net: "Redbelly", type: "Pilot" },
    ],
  },
  {
    row: "Other asset classes",
    cb: [
      { lead: "Canvas", name: "Private Credit Fund", tags: [{ f: "wcbdc", raw: "wCBDC" }], net: "Canvas Connect", type: "Pilot" },
      {
        lead: "ANZ",
        name: "Trade Payable",
        tags: [
          { f: "wcbdc", raw: "wCBDC" },
          { f: "stable", raw: "Stablecoin" },
          { f: "deposit", raw: "Deposit token" },
        ],
        net: "Private ZK L2",
        type: "PoC",
      },
      { lead: "Northern Trust", name: "Carbon Credits", tags: [{ f: "rails", raw: "RITS" }], net: "Hyperledger Besu", type: "PoC" },
    ],
    pv: [
      { lead: "Macropod", name: "Digital Asset Fund", tags: [{ f: "stable", raw: "Stablecoin" }], net: "Redbelly", type: "Pilot" },
      { lead: "ProspEx", name: "Mining Royalty Interests", tags: [{ f: "stable", raw: "Stablecoin" }], net: "Ethereum", type: "PoC" },
    ],
  },
];

const infra: Cell[] = [
  {
    lead: "AP+",
    name: "Token Interchange Service",
    tags: [
      { f: "wcbdc", raw: "wCBDC" },
      { f: "stable", raw: "Stablecoins" },
    ],
    net: "Hedera",
    type: "Pilot",
  },
  {
    lead: "AP+",
    name: "NPP-Token Integration",
    tags: [
      { f: "stable", raw: "Stablecoins" },
      { f: "rails", raw: "NPP" },
    ],
    net: "N/A",
    type: "PoC",
  },
];

/* ────────────────────────────────────────────────
   Render
   ──────────────────────────────────────────────── */

export function Figure1UseCaseMatrix() {
  const [selected, setSelected] = useState<Cell | null>(null);

  return (
    <FigureFrame label="Figure 01" title="Project Acacia use case landscape" source="DFCRC / RBA">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "150px 1fr 1fr",
          gap: 1,
          background: "var(--border)",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid var(--border)",
        }}
      >
        {/* Header row */}
        <div
          style={{
            background: "var(--card-bg)",
            padding: "14px 16px",
            fontSize: 10,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--text-dim)",
          }}
        >
          Asset class
        </div>
        <ColHeader tone="cb" title="Central bank money used in settlement" />
        <ColHeader tone="pv" title="Private money used in settlement" />

        {matrix.map((r) => (
          <RowFragment key={r.row} row={r} onOpen={setSelected} />
        ))}

        {/* Infrastructure row (spans both content cols) */}
        <div style={{ background: "var(--card-bg)", padding: "16px", display: "flex", alignItems: "center" }}>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 15,
                color: "rgba(255,255,255,0.92)",
                letterSpacing: "-0.015em",
                lineHeight: 1.2,
              }}
            >
              Infrastructure / services
            </div>
            <div style={{ marginTop: 4, fontSize: 11, color: "var(--text-dim)" }}>{infra.length} use cases</div>
          </div>
        </div>
        <div
          style={{
            gridColumn: "span 2",
            background: "var(--card-bg)",
            padding: "14px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
          }}
          className="infra-row"
        >
          {infra.map((c) => (
            <CaseChip key={`${c.lead}-${c.name}`} cell={c} columnTone="neutral" onOpen={setSelected} />
          ))}
        </div>
      </div>

      {/* Legend */}
      <Legend />

      {/* Footnote */}
      <div style={{ marginTop: 12, fontSize: 11, fontStyle: "italic", color: "var(--text-dim)", lineHeight: 1.5 }}>
        * Tags under each use case name show the settlement assets used. The coloured dot indicates the DLT network. Click any use case for details.
      </div>

      {selected && <UseCaseDetailModal data={cellToModalData(selected)} onClose={() => setSelected(null)} />}

      <style>{`
        @media (max-width: 760px) {
          .infra-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </FigureFrame>
  );
}

/* ───── Column header ───── */
function ColHeader({ tone, title }: { tone: "cb" | "pv"; title: string }) {
  const isCb = tone === "cb";
  const accent = isCb ? "#fcbf48" : "#8DF0CC";
  const bg = isCb ? "rgba(252,191,72,0.06)" : "rgba(141,240,204,0.06)";

  return (
    <div style={{ background: bg, padding: "14px 16px", borderBottom: `1px solid ${accent}33` }}>
      <div
        style={{
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: accent,
          fontWeight: 700,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: 8, background: accent, boxShadow: `0 0 6px ${accent}66` }} />
        {isCb ? "Public" : "Private"}
      </div>
      <div
        style={{
          marginTop: 4,
          fontFamily: "var(--font-display)",
          fontSize: 14,
          color: "rgba(255,255,255,0.92)",
          letterSpacing: "-0.015em",
        }}
      >
        {title}
      </div>
    </div>
  );
}

/* ───── Row label + two cell groups ───── */
function RowFragment({ row, onOpen }: { row: { row: string; cb: Cell[]; pv: Cell[] }; onOpen: (c: Cell) => void }) {
  const total = row.cb.length + row.pv.length;
  return (
    <>
      <div style={{ background: "var(--card-bg)", padding: "16px", display: "flex", alignItems: "center" }}>
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 15,
              color: "rgba(255,255,255,0.92)",
              letterSpacing: "-0.015em",
              lineHeight: 1.2,
            }}
          >
            {row.row}
          </div>
          <div style={{ marginTop: 4, fontSize: 11, color: "var(--text-dim)" }}>{total} use cases</div>
        </div>
      </div>
      <CellGroup cells={row.cb} columnTone="cb" onOpen={onOpen} />
      <CellGroup cells={row.pv} columnTone="pv" onOpen={onOpen} />
    </>
  );
}

function CellGroup({ cells, columnTone, onOpen }: { cells: Cell[]; columnTone: "cb" | "pv"; onOpen: (c: Cell) => void }) {
  const bg = columnTone === "cb" ? "rgba(252,191,72,0.025)" : "rgba(141,240,204,0.025)";
  return (
    <div
      style={{
        background: bg,
        padding: "14px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 10,
      }}
    >
      {cells.map((c) => (
        <CaseChip key={`${c.lead}-${c.name}`} cell={c} columnTone={columnTone} onOpen={onOpen} />
      ))}
      {cells.length === 0 && <div style={{ color: "var(--text-dim)", fontSize: 12, fontStyle: "italic", padding: "8px 4px" }}>- </div>}
    </div>
  );
}

/* ───── A single use-case chip ───── */
function CaseChip({ cell, columnTone, onOpen }: { cell: Cell; columnTone: "cb" | "pv" | "neutral"; onOpen: (c: Cell) => void }) {
  const primary = family[cell.tags[0].f];
  const netColor = network[cell.net];

  return (
    <button
      type="button"
      onClick={() => onOpen(cell)}
      aria-label={`View details for ${cell.lead}: ${cell.name}`}
      className="case-chip"
      style={{
        position: "relative",
        background: "rgba(0,0,0,0.25)",
        border: `1px solid ${primary.ring}`,
        borderRadius: 10,
        padding: "10px 12px 10px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        minHeight: 110,
        overflow: "hidden",
        textAlign: "left",
        color: "inherit",
        font: "inherit",
        cursor: "pointer",
        width: "100%",
        // @ts-expect-error CSS custom property
        "--chip-ring": primary.ring,
        "--chip-glow": primary.color,
      }}
    >
      {/* Left accent stripe -  settlement asset family colour */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          background: primary.color,
          boxShadow: `0 0 12px ${primary.color}55`,
        }}
      />

      {/* Header -  lead + P/C */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
        <span
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 600,
            minWidth: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {cell.lead}
        </span>
        <TypeTag type={cell.type} />
      </div>

      {/* Name */}
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.95)", lineHeight: 1.3, fontWeight: 500 }}>
        {cell.name}
      </div>

      {/* Settlement asset tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: "auto" }}>
        {cell.tags.map((t, i) => {
          const fam = family[t.f];
          return (
            <span
              key={i}
              style={{
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "3px 7px",
                borderRadius: 4,
                background: fam.bg,
                color: fam.color,
                border: `1px solid ${fam.ring}`,
                lineHeight: 1.1,
              }}
            >
              {t.raw}
            </span>
          );
        })}
      </div>

      {/* DLT network footer */}
      <div
        style={{
          marginTop: 2,
          paddingTop: 6,
          borderTop: "1px dashed rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: 6,
            background: netColor,
            boxShadow: `0 0 5px ${netColor}`,
            flexShrink: 0,
          }}
        />
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: "0.01em", lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {cell.net}
        </span>
      </div>

      <style>{`
        .case-chip { transition: transform 180ms cubic-bezier(.2,.7,.2,1), border-color 180ms ease, box-shadow 180ms ease; }
        .case-chip:hover { transform: translateY(-2px); border-color: var(--chip-glow); box-shadow: 0 6px 20px -8px var(--chip-glow); }
        .case-chip:focus-visible { outline: 2px solid var(--chip-glow); outline-offset: 2px; }
      `}</style>
    </button>
  );
}

function TypeTag({ type }: { type: "Pilot" | "PoC" }) {
  const pilot = type === "Pilot";
  return (
    <span
      style={{
        background: pilot ? "rgba(252,191,72,0.18)" : "transparent",
        border: `1px solid ${pilot ? "rgba(252,191,72,0.45)" : "rgba(255,255,255,0.22)"}`,
        color: pilot ? "var(--yellow)" : "rgba(255,255,255,0.7)",
        borderRadius: 100,
        fontSize: 9,
        fontWeight: 700,
        padding: "2px 7px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      {pilot ? "Pilot" : "PoC"}
    </span>
  );
}

/* ───── Legend ───── */
function Legend() {
  return (
    <div
      style={{
        marginTop: 16,
        background: "rgba(0,0,0,0.25)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: 14,
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 18,
      }}
      className="fig1-legend"
    >
      <div>
        <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)", fontWeight: 700, marginBottom: 10 }}>
          Settlement asset family
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 8 }}>
          {Object.entries(family).map(([k, v]) => (
            <LegendItem key={k} color={v.color} ring={v.ring} bg={v.bg} label={v.name} />
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)", fontWeight: 700, marginBottom: 10 }}>
          DLT network
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "6px 12px" }}>
          {(Object.entries(network) as [Net, string][]).map(([k, color]) => (
            <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 11, color: "rgba(255,255,255,0.72)" }}>
              <span style={{ width: 8, height: 8, borderRadius: 8, background: color, boxShadow: `0 0 5px ${color}`, flexShrink: 0 }} />
              {k}
            </span>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 760px) { .fig1-legend { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

function LegendItem({ color, ring, bg, label }: { color: string; ring: string; bg: string; label: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11.5, color: "rgba(255,255,255,0.82)" }}>
      <span
        style={{
          width: 22,
          height: 14,
          borderRadius: 3,
          background: bg,
          border: `1px solid ${ring}`,
          position: "relative",
          flexShrink: 0,
        }}
      >
        <span
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 2,
            background: color,
            boxShadow: `0 0 6px ${color}99`,
          }}
        />
      </span>
      <span style={{ letterSpacing: "0.01em" }}>{label}</span>
    </span>
  );
}

function cellToModalData(cell: Cell): UseCaseModalData {
  const primary = family[cell.tags[0].f];
  const netColor = network[cell.net];
  const detail = details[detailKey(cell.lead, cell.name)];
  return {
    lead: cell.lead,
    name: cell.name,
    type: cell.type,
    tags: cell.tags.map((t) => {
      const fam = family[t.f];
      return { label: t.raw, color: fam.color, bg: fam.bg, ring: fam.ring };
    }),
    network: { name: cell.net, color: netColor },
    accent: { color: primary.color, ring: primary.ring },
    summary: detail?.summary,
    mechanism: detail?.mechanism,
    findings: detail?.findings,
    participants: detail?.participants,
  };
}

