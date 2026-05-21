export type Participant = {
  id: string;
  name: string;
  role: string;
  category: "Lead Participant" | "DLT Platform" | "Infrastructure" | "Distributor" | "Authority";
  tags: string[];
  useCaseIds: string[];
  summary: string;
};

export const participants: Participant[] = [
  {
    id: "abe",
    name: "Australian Bond Exchange",
    role: "Bond marketplace",
    category: "Lead Participant",
    tags: ["Corporate Bond", "Secondary Market", "wCBDC", "Redbelly"],
    useCaseIds: ["abe-corporate-bond"],
    summary:
      "Operated a tokenised corporate bond secondary-market pilot with wCBDC settlement on Redbelly, including near-instant issuer–investor communications.",
  },
  {
    id: "anz",
    name: "ANZ",
    role: "Bank",
    category: "Lead Participant",
    tags: ["Bank", "Corporate Bond", "Trade Payable", "Private ZK L2", "wCBDC", "Distributor"],
    useCaseIds: ["anz-corporate-bond", "anz-trade-payable"],
    summary:
      "Major Australian bank that led two use cases on a private ZK L2 (Validium), and also acted as a wCBDC distributor across the pilot.",
  },
  {
    id: "apx",
    name: "AP+ (Australian Payments Plus)",
    role: "Payments utility",
    category: "Lead Participant",
    tags: ["Infrastructure", "NPP", "FSS", "Interchange", "Hedera", "HashSphere"],
    useCaseIds: ["apx-npp", "apx-interchange"],
    summary:
      "Designed and tested industry-utility patterns: NPP/FSS integration with tokenised money, and a multi-issuer interchange service on Hedera + HashSphere.",
  },
  {
    id: "canvas",
    name: "Canvas",
    role: "Tokenisation platform",
    category: "Lead Participant",
    tags: ["Government Bond", "Private Credit", "Repo", "wCBDC", "Canvas Connect"],
    useCaseIds: ["canvas-govt-bond", "canvas-private-credit"],
    summary:
      "Led two pilots on Canvas Connect (L2): tokenised Australian Government bonds with collateralised lending/repo and a tokenised private credit SPV.",
  },
  {
    id: "cba",
    name: "Commonwealth Bank (CBA)",
    role: "Bank",
    category: "Lead Participant",
    tags: ["Bank", "Repo", "Deposit Token", "Cross-Ledger", "Gravital", "Kinexys", "HQLAx"],
    useCaseIds: ["cba-intraday-repo"],
    summary:
      "Tested intraday repo on a deposit token with wCBDC interchange, orchestrating atomic DvP across Gravital, Kinexys and HQLAx ledgers.",
  },
  {
    id: "fireblocks",
    name: "Fireblocks",
    role: "Digital asset infrastructure",
    category: "Lead Participant",
    tags: ["Corporate Bond", "Stablecoin", "Interchange", "Redbelly", "Singleness"],
    useCaseIds: ["fireblocks-corporate-bond"],
    summary:
      "Demonstrated 'singleness' smart contracts that atomically interchange between issuer-specific stablecoins and wCBDC inside a single bond-settlement transaction.",
  },
  {
    id: "forte",
    name: "Forte Tech Solutions",
    role: "Tokenisation tech",
    category: "Lead Participant",
    tags: ["Government Bond", "Public Ethereum", "AUDF", "Stablecoin"],
    useCaseIds: ["forte-govt-bond"],
    summary:
      "Tokenised Australian Government bonds as digital twins on public Ethereum, settled atomically against the AUDF stablecoin backed in an ESA account.",
  },
  {
    id: "imperium",
    name: "Imperium Markets",
    role: "Wholesale marketplace",
    category: "Lead Participant",
    tags: ["Term Deposit", "NCDs", "Annuities", "Hedera", "HashSphere", "Cuscal stablecoin"],
    useCaseIds: ["imperium-term-deposit", "imperium-ncd", "imperium-annuities"],
    summary:
      "Ran three pilots tokenising deposits, NCDs and annuities on Hedera + HashSphere, settling in a wCBDC-backed pilot stablecoin issued by Cuscal.",
  },
  {
    id: "macropod",
    name: "Macropod",
    role: "Tokenisation platform",
    category: "Lead Participant",
    tags: ["Managed Fund", "Corporate Bond", "AUDM", "Redbelly"],
    useCaseIds: ["macropod-fund", "macropod-corporate-bond"],
    summary:
      "Issued tokenised managed-fund units and a corporate bond on Redbelly, with AUDM stablecoin settlement via the Tokeniser/Imperium platforms.",
  },
  {
    id: "northern-trust",
    name: "Northern Trust",
    role: "Custody bank",
    category: "Lead Participant",
    tags: ["Carbon Credits", "SWIFT", "RITS", "Matrix Zenith", "Hyperledger Besu"],
    useCaseIds: ["northern-trust-carbon"],
    summary:
      "Demonstrated synchronised DvP of tokenised carbon credits on Matrix Zenith, with SWIFT MT messaging coordinating HVCS cash settlement across ESAs.",
  },
  {
    id: "notcentralised",
    name: "NotCentralised",
    role: "Structured finance tech",
    category: "Lead Participant",
    tags: ["Structured Finance", "Loans", "Composability", "Redbelly", "Payment Token"],
    useCaseIds: ["notcentralised-loans"],
    summary:
      "Tokenised a structured-finance security backed by loans on Redbelly, demonstrating atomic repayment + collateral release with a wCBDC-backed payment token.",
  },
  {
    id: "prospex",
    name: "ProspEx Group",
    role: "Asset originator",
    category: "Lead Participant",
    tags: ["Mining Royalty", "Fractionalisation", "Public Ethereum", "AUDF"],
    useCaseIds: ["prospex-mining"],
    summary:
      "Fractionalised mining royalty interests on public Ethereum with smart-contract escrow and conditional settlement above a subscription threshold.",
  },
  {
    id: "westpac",
    name: "Westpac",
    role: "Bank",
    category: "Lead Participant",
    tags: ["Bank", "Term Deposit", "NPP PayTo", "FSS"],
    useCaseIds: ["westpac-term-deposit"],
    summary:
      "Used the NPP PayTo Biller service and RITS Fast Settlement Service to deliver atomic-like settlement of tokenised term deposits on a chain-agnostic design.",
  },
  {
    id: "zerocap",
    name: "Zerocap",
    role: "Digital asset firm",
    category: "Lead Participant",
    tags: ["Government Bond", "XRP Ledger", "AMM", "CLOB", "RLUSD"],
    useCaseIds: ["zerocap-govt-bond"],
    summary:
      "Ran a full AGB lifecycle on XRP Ledger combining a central limit order book with an AMM, settling in the RLUSD stablecoin.",
  },

  {
    id: "redbelly",
    name: "Redbelly Network",
    role: "Public-permissioned DLT",
    category: "DLT Platform",
    tags: ["Public-permissioned", "Smart Contracts"],
    useCaseIds: ["abe-corporate-bond", "fireblocks-corporate-bond", "macropod-fund", "macropod-corporate-bond", "notcentralised-loans"],
    summary:
      "Public-permissioned ledger used by five lead participants spanning bonds, funds and structured finance.",
  },
  {
    id: "canvas-connect",
    name: "Canvas Connect",
    role: "Tokenised finance L2",
    category: "DLT Platform",
    tags: ["Private", "Zero-knowledge", "Bonds", "Repo"],
    useCaseIds: ["canvas-govt-bond", "canvas-private-credit"],
    summary:
      "Purpose-built layer-2 for tokenised finance, used for Canvas's government bond and private credit pilots.",
  },
  {
    id: "hedera",
    name: "Hedera & HashSphere",
    role: "Public + private DLT",
    category: "DLT Platform",
    tags: ["Public", "Private", "Hashgraph"],
    useCaseIds: ["apx-interchange", "imperium-term-deposit", "imperium-ncd", "imperium-annuities"],
    summary:
      "Hedera's public network plus AP+'s private HashSphere instance underpinned the AP+ interchange and the Imperium Markets pilots.",
  },
  {
    id: "ethereum",
    name: "Ethereum (public)",
    role: "Public DLT",
    category: "DLT Platform",
    tags: ["Public", "EVM"],
    useCaseIds: ["forte-govt-bond", "prospex-mining"],
    summary:
      "Public Ethereum hosted the Forte AGB and ProspEx mining royalty digital twins, settled with the AUDF stablecoin.",
  },
  {
    id: "xrpl",
    name: "XRP Ledger",
    role: "Public-permissioned DLT",
    category: "DLT Platform",
    tags: ["Public-permissioned", "AMM", "CLOB"],
    useCaseIds: ["zerocap-govt-bond"],
    summary:
      "Used by Zerocap for its AGB lifecycle pilot with a CLOB plus AMM and RLUSD settlement.",
  },
  {
    id: "matrix-zenith",
    name: "Matrix Zenith (Hyperledger Besu)",
    role: "Private DLT",
    category: "DLT Platform",
    tags: ["Private", "EVM", "Besu"],
    useCaseIds: ["northern-trust-carbon"],
    summary:
      "Permissioned Besu-based network used by Northern Trust to record tokenised carbon credits and synchronise with SWIFT-coordinated cash legs.",
  },
  {
    id: "kinexys",
    name: "Kinexys (J.P. Morgan)",
    role: "Bank DLT platform",
    category: "DLT Platform",
    tags: ["Private", "Collateral"],
    useCaseIds: ["cba-intraday-repo"],
    summary:
      "JP Morgan's Kinexys Digital Asset platform; one of the ledgers in CBA's cross-chain intraday repo experiment.",
  },
  {
    id: "hqlax",
    name: "HQLAx",
    role: "Collateral platform",
    category: "DLT Platform",
    tags: ["Collateral", "Mobility"],
    useCaseIds: ["cba-intraday-repo"],
    summary:
      "Securities mobility platform integrated into CBA's intraday repo flow alongside Gravital and Kinexys.",
  },
  {
    id: "gravital",
    name: "Gravital",
    role: "Tokenisation platform",
    category: "DLT Platform",
    tags: ["Private", "Cross-Ledger"],
    useCaseIds: ["cba-intraday-repo"],
    summary:
      "Trade-execution and deposit-token ledger anchoring CBA's three-ledger orchestrated DvP design.",
  },

  {
    id: "rba",
    name: "Reserve Bank of Australia",
    role: "Central bank",
    category: "Authority",
    tags: ["wCBDC", "RITS", "FSS", "Policy"],
    useCaseIds: [],
    summary:
      "Issued pilot wCBDC, operated RITS/FSS for off-chain settlement legs, and co-led Project Acacia with the DFCRC.",
  },
  {
    id: "dfcrc",
    name: "Digital Finance CRC",
    role: "Research consortium",
    category: "Authority",
    tags: ["Research", "Coordination"],
    useCaseIds: [],
    summary:
      "Co-led Project Acacia, ran research workshops, and synthesised participant findings into the final report.",
  },
  {
    id: "austrac",
    name: "AUSTRAC",
    role: "AML/CTF regulator",
    category: "Authority",
    tags: ["AML/CTF", "Exemptions"],
    useCaseIds: [],
    summary:
      "Granted targeted exemptions under the AML/CTF Act so participants could conduct pilot transactions with real value.",
  },
  {
    id: "swift",
    name: "SWIFT",
    role: "Messaging network",
    category: "Infrastructure",
    tags: ["Messaging", "Coordinator"],
    useCaseIds: ["apx-npp", "northern-trust-carbon"],
    summary:
      "Acted as settlement coordinator in the AP+ NPP and Northern Trust carbon credits use cases, bridging on-chain and traditional rails.",
  },
  {
    id: "cuscal",
    name: "Cuscal",
    role: "Stablecoin issuer",
    category: "Infrastructure",
    tags: ["Stablecoin", "wCBDC-backed"],
    useCaseIds: ["imperium-term-deposit", "imperium-ncd", "imperium-annuities"],
    summary:
      "Issued a pilot stablecoin backed 1:1 by wCBDC, providing the settlement asset for Imperium Markets' three pilots.",
  },
  {
    id: "banking-circle",
    name: "Banking Circle Australia",
    role: "Distributor",
    category: "Distributor",
    tags: ["Distributor", "Non-bank"],
    useCaseIds: [],
    summary:
      "One of three approved distributors of pilot wCBDC to non-ESA-holding participants, alongside ANZ and Cuscal.",
  },
];

export const participantFilters = {
  category: ["Lead Participant", "DLT Platform", "Infrastructure", "Distributor", "Authority"] as const,
};
