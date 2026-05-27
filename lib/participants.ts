export type Participant = {
  id: string;
  name: string;
  role: string;
  category:
    | "Lead Participant"
    | "DLT Platform"
    | "Infrastructure"
    | "Distributor"
    | "Authority"
    | "Collaborator";
  tags: string[];
  summary: string;
};

export const participants: Participant[] = [
  {
    id: "abe",
    name: "Australian Bond Exchange",
    role: "Bond marketplace",
    category: "Lead Participant",
    tags: ["Corporate Bond", "Secondary Market", "wCBDC", "Redbelly"],
    summary:
      "Operated a tokenised corporate bond secondary-market pilot with wCBDC settlement on Redbelly. Also covered near-instant issuer–investor communications.",
  },
  {
    id: "anz",
    name: "ANZ",
    role: "Bank",
    category: "Lead Participant",
    tags: ["Bank", "Corporate Bond", "Trade Payable", "Private ZK L2", "wCBDC", "Distributor"],
    summary:
      "Major Australian bank that led two use cases on a private ZK L2 (Validium), and also acted as a wCBDC distributor across the pilot.",
  },
  {
    id: "apx",
    name: "AP+ (Australian Payments Plus)",
    role: "Payments utility",
    category: "Lead Participant",
    tags: ["Infrastructure", "NPP", "FSS", "Interchange", "Hedera", "HashSphere"],
    summary:
      "Designed and tested two industry-utility patterns: NPP/FSS integration with tokenised money, plus a multi-issuer interchange service on Hedera + HashSphere.",
  },
  {
    id: "canvas",
    name: "Canvas",
    role: "Tokenisation platform",
    category: "Lead Participant",
    tags: ["Government Bond", "Private Credit", "Repo", "wCBDC", "Canvas Connect"],
    summary:
      "Led two pilots on Canvas Connect (L2): tokenised Australian Government bonds with collateralised lending/repo and a tokenised private credit SPV.",
  },
  {
    id: "cba",
    name: "Commonwealth Bank (CBA)",
    role: "Bank",
    category: "Lead Participant",
    tags: ["Bank", "Repo", "Deposit Token", "Cross-Ledger", "Gravital", "Kinexys", "HQLAx"],
    summary:
      "Tested intraday repo on a deposit token with wCBDC interchange. Atomic DvP was orchestrated across Gravital, Kinexys and HQLAx ledgers.",
  },
  {
    id: "fireblocks",
    name: "Fireblocks",
    role: "Digital asset infrastructure",
    category: "Lead Participant",
    tags: ["Corporate Bond", "Stablecoin", "Interchange", "Redbelly", "Singleness"],
    summary:
      "Built 'singleness' smart contracts that atomically interchange between issuer-specific stablecoins and wCBDC inside a single bond-settlement transaction.",
  },
  {
    id: "forte",
    name: "Forte Tech Solutions",
    role: "Tokenisation tech",
    category: "Lead Participant",
    tags: ["Government Bond", "Public Ethereum", "AUDF", "Stablecoin"],
    summary:
      "Tokenised Australian Government bonds as digital twins on public Ethereum. Atomic settlement against the AUDF stablecoin, backed in an ESA account.",
  },
  {
    id: "imperium",
    name: "Imperium Markets",
    role: "Wholesale marketplace",
    category: "Lead Participant",
    tags: ["Term Deposit", "NCDs", "Annuities", "Hedera", "HashSphere", "Cuscal stablecoin"],
    summary:
      "Ran three pilots tokenising deposits, NCDs and annuities on Hedera + HashSphere. Settlement asset was a wCBDC-backed pilot stablecoin issued by Cuscal.",
  },
  {
    id: "macropod",
    name: "Macropod",
    role: "Tokenisation platform",
    category: "Lead Participant",
    tags: ["Managed Fund", "Corporate Bond", "AUDM", "Redbelly"],
    summary:
      "Issued tokenised managed-fund units and a corporate bond on Redbelly, with AUDM stablecoin settlement via the Tokeniser/Imperium platforms.",
  },
  {
    id: "northern-trust",
    name: "Northern Trust",
    role: "Custody bank",
    category: "Lead Participant",
    tags: ["Carbon Credits", "SWIFT", "RITS", "Matrix Zenith", "Hyperledger Besu"],
    summary:
      "Ran synchronised DvP of tokenised carbon credits on Matrix Zenith. SWIFT MT messaging coordinated the HVCS cash settlement across ESAs.",
  },
  {
    id: "notcentralised",
    name: "NotCentralised",
    role: "Structured finance tech",
    category: "Lead Participant",
    tags: ["Structured Finance", "Loans", "Composability", "Redbelly", "Payment Token"],
    summary:
      "Tokenised a structured-finance security backed by loans on Redbelly. Atomic repayment plus collateral release used a wCBDC-backed payment token.",
  },
  {
    id: "prospex",
    name: "ProspEx Group",
    role: "Asset originator",
    category: "Lead Participant",
    tags: ["Mining Royalty", "Fractionalisation", "Public Ethereum", "AUDF"],
    summary:
      "Fractionalised mining royalty interests on public Ethereum. Smart-contract escrow held funds until a minimum subscription threshold was hit.",
  },
  {
    id: "westpac",
    name: "Westpac",
    role: "Bank",
    category: "Lead Participant",
    tags: ["Bank", "Term Deposit", "NPP PayTo", "FSS"],
    summary:
      "Used the NPP PayTo Biller service and RITS Fast Settlement Service to deliver atomic-like settlement of tokenised term deposits on a chain-agnostic design.",
  },
  {
    id: "zerocap",
    name: "Zerocap",
    role: "Digital asset firm",
    category: "Lead Participant",
    tags: ["Government Bond", "XRP Ledger", "AMM", "CLOB", "RLUSD"],
    summary:
      "Ran a full AGB lifecycle on XRP Ledger that paired a central limit order book with an AMM. Settled in the RLUSD stablecoin.",
  },

  {
    id: "redbelly",
    name: "Redbelly Network",
    role: "Public-permissioned DLT",
    category: "DLT Platform",
    tags: ["Public-permissioned", "Smart Contracts"],
    summary:
      "Public-permissioned ledger used by five lead participants spanning bonds, funds and structured finance.",
  },
  {
    id: "canvas-connect",
    name: "Canvas Connect",
    role: "Tokenised finance L2",
    category: "DLT Platform",
    tags: ["Private", "Zero-knowledge", "Bonds", "Repo"],
    summary:
      "Purpose-built layer-2 for tokenised finance, used for Canvas's government bond and private credit pilots.",
  },
  {
    id: "hedera",
    name: "Hedera & HashSphere",
    role: "Public + private DLT",
    category: "DLT Platform",
    tags: ["Public", "Private", "Hashgraph"],
    summary:
      "Hedera's public network plus AP+'s private HashSphere instance underpinned the AP+ interchange and the Imperium Markets pilots.",
  },
  {
    id: "ethereum",
    name: "Ethereum (public)",
    role: "Public DLT",
    category: "DLT Platform",
    tags: ["Public", "EVM"],
    summary:
      "Public Ethereum hosted the Forte AGB and ProspEx mining royalty digital twins, settled with the AUDF stablecoin.",
  },
  {
    id: "xrpl",
    name: "XRP Ledger",
    role: "Public-permissioned DLT",
    category: "DLT Platform",
    tags: ["Public-permissioned", "AMM", "CLOB"],
    summary:
      "Used by Zerocap for its AGB lifecycle pilot with a CLOB plus AMM and RLUSD settlement.",
  },
  {
    id: "matrix-zenith",
    name: "Matrix Zenith (Hyperledger Besu)",
    role: "Private DLT",
    category: "DLT Platform",
    tags: ["Private", "EVM", "Besu"],
    summary:
      "Permissioned Besu-based network used by Northern Trust to record tokenised carbon credits and synchronise with SWIFT-coordinated cash legs.",
  },
  {
    id: "kinexys",
    name: "Kinexys (J.P. Morgan)",
    role: "Bank DLT platform",
    category: "DLT Platform",
    tags: ["Private", "Collateral"],
    summary:
      "JP Morgan's Kinexys Digital Asset platform; one of the ledgers in CBA's cross-chain intraday repo experiment.",
  },
  {
    id: "hqlax",
    name: "HQLAx",
    role: "Collateral platform",
    category: "DLT Platform",
    tags: ["Collateral", "Mobility"],
    summary:
      "Securities mobility platform integrated into CBA's intraday repo flow alongside Gravital and Kinexys.",
  },
  {
    id: "gravital",
    name: "Gravital",
    role: "Tokenisation platform",
    category: "DLT Platform",
    tags: ["Private", "Cross-Ledger"],
    summary:
      "Trade-execution and deposit-token ledger anchoring CBA's three-ledger orchestrated DvP design.",
  },

  {
    id: "rba",
    name: "Reserve Bank of Australia",
    role: "Central bank",
    category: "Authority",
    tags: ["wCBDC", "RITS", "FSS", "Policy"],
    summary:
      "Issued pilot wCBDC, operated RITS/FSS for off-chain settlement legs, and co-led Project Acacia with the DFCRC.",
  },
  {
    id: "dfcrc",
    name: "Digital Finance CRC",
    role: "Research consortium",
    category: "Authority",
    tags: ["Research", "Coordination"],
    summary:
      "Co-led Project Acacia, ran research workshops, and synthesised participant findings into the final report.",
  },
  {
    id: "austrac",
    name: "AUSTRAC",
    role: "AML/CTF regulator",
    category: "Authority",
    tags: ["AML/CTF", "Exemptions"],
    summary:
      "Granted targeted exemptions under the AML/CTF Act so participants could conduct pilot transactions with real value.",
  },
  {
    id: "swift",
    name: "SWIFT",
    role: "Messaging network",
    category: "Infrastructure",
    tags: ["Messaging", "Coordinator"],
    summary:
      "Settlement coordinator for the AP+ NPP and Northern Trust carbon credits use cases. Bridged on-chain and traditional rails.",
  },
  {
    id: "cuscal",
    name: "Cuscal",
    role: "Stablecoin issuer",
    category: "Infrastructure",
    tags: ["Stablecoin", "wCBDC-backed"],
    summary:
      "Issued a pilot stablecoin backed 1:1 by wCBDC. Settlement asset for Imperium Markets' three pilots.",
  },
  {
    id: "banking-circle",
    name: "Banking Circle Australia",
    role: "Distributor",
    category: "Distributor",
    tags: ["Distributor", "Non-bank"],
    summary:
      "One of three approved distributors of pilot wCBDC to non-ESA-holding participants, alongside ANZ and Cuscal.",
  },

  /* Partner agencies & support partners */
  {
    id: "apra",
    name: "Australian Prudential Regulation Authority",
    role: "Prudential regulator",
    category: "Authority",
    tags: ["Prudential", "Banks", "Super"],
    summary:
      "CFR partner agency. Engaged on prudential treatment of tokenised money, deposit tokens and digital assets held by banks and super funds.",
  },
  {
    id: "asic",
    name: "Australian Securities and Investments Commission",
    role: "Markets & conduct regulator",
    category: "Authority",
    tags: ["Markets", "Class Relief", "Info Sheet 225"],
    summary:
      "CFR partner agency. Granted class relief from licensing requirements for pilot participants and contributed to the Steering Committee.",
  },
  {
    id: "treasury",
    name: "Australian Treasury",
    role: "Policy",
    category: "Authority",
    tags: ["Policy", "Digital Assets Framework"],
    summary:
      "CFR partner agency on the Steering Committee. Leads policy work on the Digital Assets Framework and tokenised SVF regime.",
  },
  {
    id: "allens",
    name: "Allens",
    role: "Law firm",
    category: "Collaborator",
    tags: ["Legal", "Support Partner"],
    summary: "Acacia support partner providing legal expertise across the project.",
  },
  {
    id: "ey",
    name: "EY",
    role: "Advisory",
    category: "Collaborator",
    tags: ["Advisory", "Support Partner"],
    summary: "Acacia support partner providing advisory and analytical capability across the project.",
  },
  {
    id: "kaleido",
    name: "Kaleido",
    role: "DLT infrastructure",
    category: "Collaborator",
    tags: ["DLT Tooling", "Support Partner"],
    summary: "Acacia support partner providing DLT infrastructure and tooling.",
  },
  {
    id: "ashurst",
    name: "Ashurst Australia",
    role: "Law firm",
    category: "Collaborator",
    tags: ["Legal", "DTWG"],
    summary: "Legal support partner to the Deposit Token Working Group chaired by the DFCRC.",
  },
  {
    id: "nab",
    name: "National Australia Bank",
    role: "Bank",
    category: "Collaborator",
    tags: ["Bank", "DTWG", "Imperium"],
    summary:
      "Major Australian bank. Member of the Deposit Token Working Group and a participant in the Imperium Markets pilots.",
  },

  /* Use case collaborators (Appendix 2) */
  {
    id: "fieldrock",
    name: "Fieldrock Pty Ltd",
    role: "Bond markets",
    category: "Collaborator",
    tags: ["Bond Markets", "ABE pilot"],
    summary: "Collaborator on the Australian Bond Exchange tokenised corporate bond pilot.",
  },
  {
    id: "rand-low",
    name: "Dr. Rand Low",
    role: "Advisor",
    category: "Collaborator",
    tags: ["Individual", "Advisor"],
    summary: "Independent advisor and academic collaborator on the ABE corporate bond pilot.",
  },
  {
    id: "austraclear",
    name: "Austraclear",
    role: "Debt CSD",
    category: "Infrastructure",
    tags: ["CSD", "Wholesale", "RTGS"],
    summary:
      "ASX-operated central securities depository for Australian wholesale debt securities. Approved RTGS system under the PSNA.",
  },
  {
    id: "kwm",
    name: "King & Wood Mallesons",
    role: "Law firm",
    category: "Collaborator",
    tags: ["Legal", "ANZ bond"],
    summary: "Legal collaborator on the ANZ tokenised corporate bond proof of concept.",
  },
  {
    id: "global-packaging",
    name: "Global Packaging Company",
    role: "Corporate",
    category: "Collaborator",
    tags: ["Trade Finance", "ANZ trade payable"],
    summary: "Corporate counterparty for the ANZ tokenised trade payable proof of concept.",
  },
  {
    id: "netwealth",
    name: "Netwealth Group Limited",
    role: "Wealth platform",
    category: "Collaborator",
    tags: ["Wealth", "Trade Finance"],
    summary: "Wealth management platform collaborating on the ANZ trade payable proof of concept.",
  },
  {
    id: "messagexchange",
    name: "MessageXchange",
    role: "Messaging",
    category: "Collaborator",
    tags: ["e-Invoicing", "Messaging"],
    summary:
      "Australian messaging and e-invoicing service. Collaborator on the ANZ tokenised trade payable PoC.",
  },
  {
    id: "rmit",
    name: "RMIT University",
    role: "Research partner",
    category: "Collaborator",
    tags: ["Research", "Academic"],
    summary: "Academic research collaborator on the ANZ tokenised trade payable PoC.",
  },
  {
    id: "audd-digital",
    name: "AUDD Digital",
    role: "Stablecoin issuer",
    category: "Collaborator",
    tags: ["Stablecoin", "AUDD"],
    summary: "Issuer of the AUDD AUD-referenced stablecoin used in the AP+ token interchange pilot.",
  },
  {
    id: "zodia-custody",
    name: "Zodia Custody Australia",
    role: "Digital asset custodian",
    category: "Collaborator",
    tags: ["Custody", "Canvas pilots"],
    summary: "Institutional digital asset custodian. Collaborator on the Canvas pilots.",
  },
  {
    id: "sanlam",
    name: "Sanlam Private Wealth",
    role: "Wealth manager",
    category: "Collaborator",
    tags: ["Wealth", "Canvas pilots"],
    summary: "Wealth manager collaborating on the Canvas government bond and private credit pilots.",
  },
  {
    id: "alceon",
    name: "Alceon Group",
    role: "Private credit",
    category: "Collaborator",
    tags: ["Private Credit", "Canvas pilots"],
    summary:
      "Private credit asset manager whose real estate credit fund underpinned the Canvas private credit pilot.",
  },
  {
    id: "asx",
    name: "Australian Securities Exchange (ASX)",
    role: "Exchange & CSD operator",
    category: "Infrastructure",
    tags: ["Exchange", "CSD", "CBA repo"],
    summary:
      "Operator of CHESS, Austraclear and listed markets. Collaborator on the CBA intraday repo PoC for cross-platform interoperability.",
  },
  {
    id: "jpmorgan",
    name: "J.P. Morgan",
    role: "Bank",
    category: "Collaborator",
    tags: ["Bank", "Custody", "Kinexys"],
    summary:
      "Provider of the Kinexys Digital Asset platform used in the CBA intraday repo PoC, and custodian for the Zerocap government bond pilot.",
  },
  {
    id: "fasanara",
    name: "Fasanara Capital",
    role: "Asset manager",
    category: "Collaborator",
    tags: ["Credit", "Fireblocks bond"],
    summary: "Global asset manager collaborating on the Fireblocks tokenised corporate bond PoC.",
  },
  {
    id: "perpetual",
    name: "Perpetual",
    role: "Trustee & asset manager",
    category: "Collaborator",
    tags: ["Trustee", "Fireblocks bond", "NotCentralised loans"],
    summary:
      "Australian trustee and asset manager. Acted as Perpetual Trustee Company Limited / Perpetual Trustees Ltd across the Fireblocks corporate bond and NotCentralised loans pilots.",
  },
  {
    id: "coinspot",
    name: "CoinSpot",
    role: "Digital asset exchange",
    category: "Collaborator",
    tags: ["Exchange", "Forte bond"],
    summary: "Digital asset exchange collaborating on the Forte tokenised government bond pilot.",
  },
  {
    id: "australiansuper",
    name: "AustralianSuper",
    role: "Superannuation fund",
    category: "Collaborator",
    tags: ["Super", "Imperium pilots"],
    summary: "Australia's largest super fund. Collaborator on the Imperium Markets pilots.",
  },
  {
    id: "boq",
    name: "Bank of Queensland",
    role: "Bank",
    category: "Collaborator",
    tags: ["Bank", "Imperium pilots"],
    summary: "Regional Australian bank. Collaborator on the Imperium Markets pilots.",
  },
  {
    id: "challenger",
    name: "Challenger Limited",
    role: "Annuities & investment manager",
    category: "Collaborator",
    tags: ["Annuities", "Imperium pilots"],
    summary:
      "Investment manager and annuity provider. Collaborator on the Imperium Markets annuities and money-market pilots.",
  },
  {
    id: "colonial-first-state",
    name: "Colonial First State",
    role: "Wealth manager",
    category: "Collaborator",
    tags: ["Super", "Imperium pilots"],
    summary: "Wealth and super manager. Collaborator on the Imperium Markets pilots.",
  },
  {
    id: "csc",
    name: "Commonwealth Superannuation Corporation",
    role: "Superannuation fund",
    category: "Collaborator",
    tags: ["Super", "Carbon Credits"],
    summary:
      "Superannuation fund for Australian Government and Defence Force employees. Collaborator on the Northern Trust carbon credits PoC.",
  },
  {
    id: "bt-panorama",
    name: "BT Panorama",
    role: "Wealth platform",
    category: "Collaborator",
    tags: ["Wealth", "Westpac Group", "Carbon Credits"],
    summary:
      "Westpac-owned wealth management platform. Collaborator on the Northern Trust carbon credits PoC.",
  },
  {
    id: "amal",
    name: "AMAL Trustees Pty Ltd",
    role: "Trustee",
    category: "Collaborator",
    tags: ["Trustee", "Structured Finance"],
    summary: "Specialist trustee. Collaborator on the NotCentralised structured-finance pilot.",
  },
  {
    id: "beachhead",
    name: "Beachhead Venture Capital Pty Ltd",
    role: "Venture capital",
    category: "Collaborator",
    tags: ["VC", "Structured Finance"],
    summary: "Venture investor. Collaborator on the NotCentralised structured-finance pilot.",
  },
  {
    id: "wisr",
    name: "Wisr Pty Ltd",
    role: "Consumer lender",
    category: "Collaborator",
    tags: ["Lending", "Structured Finance"],
    summary:
      "Australian consumer lender whose loans formed the underlying pool for the NotCentralised structured-finance security.",
  },
  {
    id: "tokeniser",
    name: "Tokeniser Pty Ltd",
    role: "Registry & distribution",
    category: "Collaborator",
    tags: ["Registry", "Macropod"],
    summary:
      "Tokenisation registry and distribution platform handling Macropod managed-fund registration and distribution.",
  },
  {
    id: "taf-capital",
    name: "TAF Capital Pty Ltd",
    role: "Asset manager",
    category: "Collaborator",
    tags: ["Asset Manager", "Macropod"],
    summary: "Asset manager collaborating on the Macropod tokenised fund and corporate bond pilots.",
  },
  {
    id: "openmarkets",
    name: "Openmarkets Australia Limited",
    role: "Broker",
    category: "Collaborator",
    tags: ["Broker", "Macropod"],
    summary: "Wholesale broker collaborating on the Macropod tokenised pilots.",
  },
  {
    id: "barrenjoey",
    name: "Barrenjoey Markets Pty Ltd",
    role: "Investment bank",
    category: "Collaborator",
    tags: ["Investment Bank", "Macropod"],
    summary: "Australian investment bank collaborating on the Macropod tokenised pilots.",
  },
  {
    id: "jelly-c",
    name: "Jelly C Pty Ltd",
    role: "Corporate issuer",
    category: "Collaborator",
    tags: ["Issuer", "Macropod"],
    summary: "Corporate issuer collaborating on the Macropod tokenised pilots.",
  },
  {
    id: "chainlink",
    name: "Chainlink Labs",
    role: "Oracle network",
    category: "Collaborator",
    tags: ["Oracle", "Zerocap", "Westpac"],
    summary:
      "Provider of oracle and cross-chain infrastructure. Collaborator on the Zerocap government bond pilot and the Westpac PayTo PoC.",
  },
  {
    id: "quintessencelabs",
    name: "QuintessenceLabs",
    role: "Cybersecurity",
    category: "Collaborator",
    tags: ["Security", "Cryptography", "Westpac"],
    summary:
      "Australian cybersecurity firm providing quantum-resistant key infrastructure. Collaborator on the Westpac term deposit PoC.",
  },
  {
    id: "bano",
    name: "Bano Pty Ltd",
    role: "FX",
    category: "Collaborator",
    tags: ["FX", "Zerocap"],
    summary: "FX collaborator on the Zerocap tokenised government bond pilot.",
  },
  {
    id: "bgc-brokers",
    name: "BGC Brokers LP",
    role: "Broker",
    category: "Collaborator",
    tags: ["Broker", "Zerocap"],
    summary:
      "Inter-dealer broker that held custody of the underlying bond via JPMorgan in the Zerocap pilot.",
  },
  {
    id: "ripple",
    name: "Ripple Labs Inc.",
    role: "XRP Ledger steward",
    category: "Collaborator",
    tags: ["XRPL", "RLUSD", "Zerocap"],
    summary:
      "Steward of the XRP Ledger and issuer of RLUSD. Collaborator on the Zerocap government bond pilot.",
  },
  {
    id: "stormrake",
    name: "Stormrake Pty Ltd",
    role: "Brokerage",
    category: "Collaborator",
    tags: ["Brokerage", "Zerocap"],
    summary: "Australian brokerage collaborator on the Zerocap government bond pilot.",
  },
  {
    id: "vbs-exchange",
    name: "VBS Exchange Pty Ltd",
    role: "Exchange operator",
    category: "Collaborator",
    tags: ["Exchange", "Zerocap"],
    summary: "Exchange operator collaborator on the Zerocap government bond pilot.",
  },
  {
    id: "konashevych",
    name: "Dr. Oleksii Konashevych",
    role: "Advisor",
    category: "Collaborator",
    tags: ["Individual", "Advisor"],
    summary: "Individual researcher contributor listed among Industry Use Case Participants.",
  },
];

export const participantFilters = {
  category: [
    "Lead Participant",
    "DLT Platform",
    "Infrastructure",
    "Distributor",
    "Authority",
    "Collaborator",
  ] as const,
};
