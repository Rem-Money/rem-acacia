import type { UseCase } from "./usecases";
import type { UseCaseModalData } from "@/components/UseCaseDetailModal";

/* ────────────────────────────────────────────────
   Settlement-asset family taxonomy. Each family
   carries a colour token used for chip tags in
   both the use case matrix and the detail modal.
   ──────────────────────────────────────────────── */

export type Family = "wcbdc" | "rails" | "deposit" | "hybrid" | "stable";

export const family: Record<Family, { name: string; color: string; bg: string; ring: string }> = {
  wcbdc: {
    name: "wCBDC",
    color: "#fcbf48",
    bg: "rgba(252,191,72,0.10)",
    ring: "rgba(252,191,72,0.45)",
  },
  rails: {
    name: "NPP / RITS",
    color: "#fd9a73",
    bg: "rgba(253,154,115,0.10)",
    ring: "rgba(253,154,115,0.45)",
  },
  deposit: {
    name: "Deposit token",
    color: "#7dd3fc",
    bg: "rgba(125,211,252,0.10)",
    ring: "rgba(125,211,252,0.45)",
  },
  hybrid: {
    name: "wCBDC-backed token",
    color: "#8DF0CC",
    bg: "rgba(141,240,204,0.10)",
    ring: "rgba(141,240,204,0.45)",
  },
  stable: {
    name: "Stablecoin",
    color: "#c7e36a",
    bg: "rgba(199,227,106,0.10)",
    ring: "rgba(199,227,106,0.45)",
  },
};

export type Net =
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

export const network: Record<Net, string> = {
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

export type SettlementTag = { f: Family; raw: string };

/* ────────────────────────────────────────────────
   Per-use-case rich content. Keyed by UseCase.id.
   This is the single source of truth surfaced in
   the detail modal on both the Project page (via
   Figure 1) and the Use Cases listing page.
   Sourced from the Project Acacia final report.
   ──────────────────────────────────────────────── */

export type UseCaseRich = {
  shortLead: string;
  tags: SettlementTag[];
  net: Net;
  summary: string;
  mechanism?: string;
  findings?: string;
  participants?: string[];
};

export const useCaseRichById: Record<string, UseCaseRich> = {
  "abe-corporate-bond": {
    shortLead: "Australian Bond Exchange",
    tags: [{ f: "wcbdc", raw: "wCBDC" }],
    net: "Redbelly",
    summary:
      "Secondary-market transactions in tokenised corporate bonds tested on Redbelly Network, with wCBDC settlement issued on the same network. The pilot connected issuers and investors directly for early redemptions and covenant voting, using digital-twin tokenisation with on-chain settlement.",
    participants: ["Australian Bond Exchange", "Fieldrock Pty Ltd", "Fireblocks", "Dr. Rand Low"],
    mechanism: "Digital-twin tokenisation on Redbelly with same-ledger wCBDC settlement.",
    findings: "Tested processing-time efficiency gains and direct issuer/investor interaction for corporate-action events.",
  },
  "canvas-govt-bond": {
    shortLead: "Canvas",
    tags: [{ f: "wcbdc", raw: "wCBDC" }],
    net: "Canvas Connect",
    summary:
      "Canvas tokenised digital twins of Australian Government bonds on Canvas Connect (a private EVM-compatible L2) with wCBDC settlement on the same ledger. Two tokenisation structures were tested (TCP-aligned beneficial ownership and SPV debt claims) alongside collateralised lending, repos, secondary trading and coupon payments.",
    participants: [
      "Canvas",
      "Banking Circle Australia",
      "Zodia Custody Australia",
      "Fireblocks",
      "Sanlam Private Wealth",
      "Alceon Group",
    ],
    mechanism: "Permissioned EVM L2 with underlying bonds held in registered custody (Austraclear off-chain).",
    findings: "Ran diversified settlement and collateral workflows across multiple tokenisation structures.",
  },
  "cba-intraday-repo": {
    shortLead: "CBA",
    tags: [
      { f: "wcbdc", raw: "wCBDC" },
      { f: "deposit", raw: "Deposit token" },
    ],
    net: "Gravital · Kinexys · HQLAx",
    summary:
      "Multi-platform PoC for intraday repurchase agreements in Commonwealth and semi-government securities, with CBA deposit tokens used for settlement on Kinexys and wCBDC interchange across ledgers. Smart contracts orchestrated DvP across Gravital, HQLAx and Kinexys.",
    participants: [
      "Commonwealth Bank of Australia",
      "Gravital",
      "HQLAx",
      "Kinexys (J.P. Morgan)",
      "Australian Securities Exchange (ASX)",
      "J.P. Morgan",
    ],
    mechanism: "Cross-ledger DvP via smart contracts spanning a digital registry, a repo execution venue and a CSD.",
    findings: "Tested interoperability requirements among the three platforms for intraday liquidity workflows.",
  },
  "fireblocks-corporate-bond": {
    shortLead: "Fireblocks",
    tags: [
      { f: "wcbdc", raw: "wCBDC" },
      { f: "stable", raw: "Stablecoin" },
    ],
    net: "Redbelly",
    summary:
      "PoC demonstrating tokenised corporate bond issuance, trading and settlement on Redbelly using wCBDC and multiple stablecoins. Interchange was achieved via smart contracts converting between stablecoins and wCBDC, with a settlement contract calling 'singleness' contracts deployed by each stablecoin issuer.",
    participants: [
      "Fireblocks",
      "Australian Bond Exchange",
      "Fasanara Capital",
      "Macropod",
      "Northern Trust",
      "Perpetual Trustee Company Limited",
    ],
    mechanism: "Settlement contract orchestrating issuer-specific singleness contracts; wCBDC as interchange asset.",
    findings: "Showed wCBDC could act as interchange settlement, ultimately delivering the seller's preferred stablecoin.",
  },
  "westpac-term-deposit": {
    shortLead: "Westpac",
    tags: [{ f: "rails", raw: "NPP PayTo" }],
    net: "Network-agnostic",
    summary:
      "Network-agnostic PoC for how the NPP PayTo Biller service could facilitate near-real-time atomic settlement of tokenised term deposits. Connects domestic real-time payment infrastructure with emerging tokenised asset platforms.",
    participants: ["Westpac", "Imperium Markets", "Chainlink Labs", "QuintessenceLabs"],
    mechanism: "PayTo Biller synchronised against RITS Fast Settlement Service.",
    findings: "Splits DvP into a tangible first step using existing RITS rails, a practical path for industry adoption.",
  },
  "anz-corporate-bond": {
    shortLead: "ANZ",
    tags: [
      { f: "wcbdc", raw: "wCBDC" },
      { f: "stable", raw: "Stablecoin" },
      { f: "deposit", raw: "Deposit token" },
    ],
    net: "Private ZK L2",
    summary:
      "Private ZK L2 PoC simulating a tokenised corporate bond lifecycle including issuance, coupons and redemption. AUD-referenced payment tokens (stablecoins or deposit tokens) were used for bookbuilds, with wCBDC providing settlement and interchange between the buyer's and seller's preferred tokens.",
    participants: ["ANZ", "Austraclear", "King & Wood Mallesons"],
    mechanism: "Multi-token settlement coordination on a private ZK L2; coupon payments in the private payment token.",
    findings: "Showed how programmable interchange lets counterparties hold different forms of money pre- and post-settlement.",
  },
  "imperium-term-deposit": {
    shortLead: "Imperium",
    tags: [{ f: "hybrid", raw: "wCBDC-backed stablecoin" }],
    net: "Hedera",
    summary:
      "Pilot of tokenised short-term wholesale term deposits on Hedera and HashSphere, settled using a Cuscal-issued stablecoin backed by wCBDC on private networks. Asset tokens were digital twins recorded and custodied on-chain.",
    participants: [
      "Imperium Markets",
      "AP+",
      "Cuscal Limited",
      "AustralianSuper",
      "Bank of Queensland",
      "Challenger Limited",
      "Colonial First State",
      "National Australia Bank",
      "Westpac",
    ],
    mechanism: "Settlement coordinator handled smart-contract-based escrow and atomic DvP swaps.",
    findings: "Atomic settlement of wholesale money-market instruments using wCBDC-backed private money.",
  },
  "imperium-ncd": {
    shortLead: "Imperium",
    tags: [{ f: "hybrid", raw: "wCBDC-backed stablecoin" }],
    net: "Hedera",
    summary:
      "Negotiable certificates of deposit (NCDs) issued as digital twins on Hedera and HashSphere, using an AP+-developed settlement coordinator for atomic DvP via smart-contract escrow. Settlement used a wCBDC-backed Cuscal stablecoin on the same DLTs.",
    participants: [
      "Imperium Markets",
      "AP+",
      "Cuscal Limited",
      "AustralianSuper",
      "Bank of Queensland",
      "Challenger Limited",
      "Colonial First State",
      "National Australia Bank",
      "Westpac",
    ],
    mechanism: "Settlement-coordinator escrow with atomic swap on Hedera / HashSphere.",
    findings: "Tested scalable on-chain money-market infrastructure for NCDs.",
  },
  "imperium-annuities": {
    shortLead: "Imperium",
    tags: [{ f: "hybrid", raw: "wCBDC-backed stablecoin" }],
    net: "Hedera",
    summary:
      "Annuities tokenised and traded on Hedera/HashSphere using the same settlement architecture: wCBDC-backed Cuscal stablecoin with settlement-coordinator escrow and atomic swaps. Covers pension and insurance product tokenisation as digital twins.",
    participants: [
      "Imperium Markets",
      "AP+",
      "Cuscal Limited",
      "AustralianSuper",
      "Bank of Queensland",
      "Challenger Limited",
      "Colonial First State",
      "National Australia Bank",
      "Westpac",
    ],
    mechanism: "Atomic DvP via settlement coordinator on Hedera / HashSphere.",
    findings: "Enabled direct on-chain custody and secondary trading of insurance-style products.",
  },
  "forte-govt-bond": {
    shortLead: "Forte",
    tags: [{ f: "stable", raw: "Stablecoin" }],
    net: "Ethereum",
    summary:
      "Pilot of Australian Government bonds as digital twins on public Ethereum, with settlement via the AUDF stablecoin through a purpose-built DvP mechanism. Coupon payments to tokenised bond holders were facilitated in AUDF, with reserves held by an ESA holder (Cuscal) in segregated accounts.",
    participants: ["Forte Tech Solutions", "Cuscal Limited", "CoinSpot"],
    mechanism: "Public-chain DvP with central-bank-money-backed stablecoin reserves.",
    findings: "Government-bond settlement on a public network with regulated stablecoin backing.",
  },
  "zerocap-govt-bond": {
    shortLead: "Zerocap",
    tags: [{ f: "stable", raw: "Stablecoin" }],
    net: "XRP Ledger",
    summary:
      "Pilot of tokenised Australian Government bonds as digital twins on the public-permissioned XRP Ledger, with settlement via RLUSD. The end-to-end lifecycle covered primary issuance, secondary trading (CLOB and AMM) and redemption.",
    participants: [
      "Zerocap",
      "Bano Pty Ltd",
      "BGC Brokers LP",
      "Chainlink Labs",
      "Fireblocks",
      "Ripple Labs",
      "J.P. Morgan",
      "Stormrake Pty Ltd",
      "VBS Exchange Pty Ltd",
    ],
    mechanism: "Off-chain custody via JPMorgan / BGC; on-ledger trading on XRPL with RLUSD settlement.",
    findings: "Tested both order-book and AMM market structures for tokenised sovereign debt.",
  },
  "notcentralised-loans": {
    shortLead: "NotCentralised",
    tags: [{ f: "hybrid", raw: "wCBDC-backed payment token" }],
    net: "Redbelly",
    summary:
      "Pilot of tokenised structured-finance securities backed by loans on Redbelly, with settlement via a private payment token backed by wCBDC. Asset issuance, management and associated payment flows occurred on-chain.",
    participants: [
      "NotCentralised",
      "AMAL Trustees Pty Ltd",
      "Perpetual Trustees Ltd",
      "Beachhead Venture Capital Pty Ltd",
      "Australian Bond Exchange",
      "Wisr Pty Ltd",
    ],
    mechanism: "On-chain composability between bond exchange and private money token settlement.",
    findings: "Tested structured-finance automation and programmable loan-lifecycle workflows.",
  },
  "macropod-corporate-bond": {
    shortLead: "Macropod",
    tags: [{ f: "stable", raw: "Stablecoin" }],
    net: "Redbelly",
    summary:
      "Pilot of tokenised corporate bonds on Redbelly covering issuance, secondary trading, coupon payments and maturity via the Imperium Marketplace. Settlement used Macropod's AUD-denominated AUDM stablecoin.",
    participants: [
      "Macropod",
      "Tokeniser Pty Ltd",
      "TAF Capital Pty Ltd",
      "Openmarkets Australia Limited",
      "Imperium Markets",
      "Barrenjoey Markets Pty Ltd",
      "Jelly C Pty Ltd",
    ],
    mechanism: "Permissioned settlement on Redbelly with AUDM stablecoin.",
    findings: "Tested digital-native corporate debt markets running alongside Macropod's managed-fund pilot.",
  },
  "canvas-private-credit": {
    shortLead: "Canvas",
    tags: [{ f: "wcbdc", raw: "wCBDC" }],
    net: "Canvas Connect",
    summary:
      "Pilot of tokenised shares in an SPV investing in real-estate credit funds on Canvas Connect. Covers primary issuance, secondary trading, distributions and collateralised lending. wCBDC issued on the same permissioned EVM L2 handled settlement.",
    participants: [
      "Canvas",
      "Banking Circle Australia",
      "Zodia Custody Australia",
      "Fireblocks",
      "Sanlam Private Wealth",
      "Alceon Group",
    ],
    mechanism: "Same-ledger wCBDC settlement on a permissioned EVM L2.",
    findings: "Pushes tokenisation testing beyond government bonds into alternative asset classes and fund distribution.",
  },
  "anz-trade-payable": {
    shortLead: "ANZ",
    tags: [
      { f: "wcbdc", raw: "wCBDC" },
      { f: "stable", raw: "Stablecoin" },
      { f: "deposit", raw: "Deposit token" },
    ],
    net: "Private ZK L2",
    summary:
      "Private ZK L2 PoC targeting trade-finance inefficiencies by tokenising trade invoices as payment obligations and assignments in digital form. The tokenised invoice was exchanged for an AUD-referenced payment token on ANZ's network, with wCBDC providing settlement and interchange between buyer and seller tokens.",
    participants: [
      "ANZ",
      "Global Packaging Company",
      "Netwealth Group Limited",
      "MessageXchange",
      "RMIT University",
    ],
    mechanism: "Token exchange on private ZK L2 with wCBDC interchange.",
    findings: "Supports fractionalised trade finance and direct invoice assignment.",
  },
  "northern-trust-carbon": {
    shortLead: "Northern Trust",
    tags: [{ f: "rails", raw: "RITS" }],
    net: "Hyperledger Besu",
    summary:
      "Simulated synchronised DvP of tokenised carbon credits on permissioned Matrix Zenith (Hyperledger Besu), using traditional payment rails (RITS via SWIFT) rather than tokenised money.",
    participants: [
      "Northern Trust",
      "Commonwealth Superannuation Corporation",
      "Swift",
      "Westpac",
      "BT Panorama",
    ],
    mechanism: "SWIFT as synchronisation coordinator using existing messaging standards; ESA-based settlement via RITS.",
    findings: "Settled digital environmental assets with off-chain payment clearance.",
  },
  "macropod-fund": {
    shortLead: "Macropod",
    tags: [{ f: "stable", raw: "Stablecoin" }],
    net: "Redbelly",
    summary:
      "Pilot of tokenised units in a wholesale managed investment scheme on Redbelly, with AUDM stablecoin settlement. Issuance, trading and redemption ran through the Tokeniser platform.",
    participants: [
      "Macropod",
      "Tokeniser Pty Ltd",
      "TAF Capital Pty Ltd",
      "Openmarkets Australia Limited",
      "Imperium Markets",
      "Barrenjoey Markets Pty Ltd",
      "Jelly C Pty Ltd",
    ],
    mechanism: "Permissioned settlement on Redbelly with AUDM stablecoin via Tokeniser.",
    findings: "Tested digital-native fund distribution and fractionalised manager structures, paired with the corporate-bond pilot.",
  },
  "prospex-mining": {
    shortLead: "ProspEx",
    tags: [{ f: "stable", raw: "Stablecoin" }],
    net: "Ethereum",
    summary:
      "PoC tokenising mining royalties as digital fractionalised interests on public Ethereum, settled via the AUDF stablecoin. A minimum-subscription smart-contract escrow conditionally settled once thresholds were met.",
    participants: ["ProspEx Group", "Forte Securities Australia Pty Ltd (AUDF issuer)"],
    mechanism: "Conditional settlement smart contract with subscription-threshold escrow on Ethereum.",
    findings: "Showed programmable settlement and fractionalisation that allow smaller minimum investments in alternative assets.",
  },
  "apx-interchange": {
    shortLead: "AP+",
    tags: [
      { f: "wcbdc", raw: "wCBDC" },
      { f: "stable", raw: "Stablecoins" },
    ],
    net: "Hedera",
    summary:
      "Pilot of a token interchange service on public-permissioned Hedera and private-permissioned HashSphere, handling exchanges between stablecoins and deposit tokens via smart-contract rules. A digital twin of wCBDC (a 'white coin') acted as the interchange asset on public networks while the underlying wCBDC stayed on private networks.",
    participants: ["AP+", "AUDD Digital", "Cuscal Limited", "Forte AUD", "Macropod"],
    mechanism: "'White coin' wCBDC twin on public networks bridged to private-network wCBDC.",
    findings: "Tested multilateral interoperability between private-money issuers.",
  },
  "apx-npp": {
    shortLead: "AP+",
    tags: [
      { f: "stable", raw: "Stablecoins" },
      { f: "rails", raw: "NPP" },
    ],
    net: "N/A",
    summary:
      "Research and PoC for an industry utility and scheme rules supporting value transfers between traditional commercial bank accounts and private money tokens via the NPP and the RITS Fast Settlement Service.",
    participants: ["AP+", "Cuscal Limited", "Swift"],
    mechanism: "Settlement coordination across NPP-connected bank accounts and tokenised payment networks.",
    findings: "Examined funding and redeeming stablecoins / deposit tokens from NPP-connected accounts, bridging legacy and tokenised payment infrastructure.",
  },
};

/* ────────────────────────────────────────────────
   Modal payload builder. Combines a UseCase
   (canonical type/name) with its rich content.
   ──────────────────────────────────────────────── */

export function buildUseCaseModalData(uc: UseCase): UseCaseModalData {
  const rich = useCaseRichById[uc.id];
  if (!rich) {
    return {
      lead: uc.leadId,
      name: uc.name,
      type: uc.type,
      tags: [],
      network: { name: uc.network, color: "rgba(255,255,255,0.4)" },
      accent: { color: "#fcbf48", ring: "rgba(252,191,72,0.45)" },
      summary: uc.summary,
    };
  }
  const primary = family[rich.tags[0].f];
  return {
    lead: rich.shortLead,
    name: uc.name,
    type: uc.type,
    tags: rich.tags.map((t) => {
      const fam = family[t.f];
      return { label: t.raw, color: fam.color, bg: fam.bg, ring: fam.ring };
    }),
    network: { name: rich.net, color: network[rich.net] },
    accent: { color: primary.color, ring: primary.ring },
    summary: rich.summary,
    mechanism: rich.mechanism,
    findings: rich.findings,
    participants: rich.participants,
  };
}
