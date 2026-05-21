export type UseCase = {
  id: string;
  lead: string;
  name: string;
  type: "Pilot" | "PoC";
  assetClass: "Fixed income" | "Other" | "Infrastructure";
  assetSubClass: string;
  settlement: string[];
  network: string;
  summary: string;
};

export const useCases: UseCase[] = [
  {
    id: "abe-corporate-bond",
    lead: "Australian Bond Exchange",
    name: "Corporate Bond",
    type: "Pilot",
    assetClass: "Fixed income",
    assetSubClass: "Corporate bond",
    settlement: ["wCBDC"],
    network: "Redbelly",
    summary:
      "Secondary market pilot of a tokenised corporate bond digital twin, with wCBDC issued onto the same network. Also tested near-instant issuer–investor comms for early redemptions and covenant voting.",
  },
  {
    id: "anz-corporate-bond",
    lead: "ANZ",
    name: "Corporate Bond",
    type: "PoC",
    assetClass: "Fixed income",
    assetSubClass: "Corporate bond",
    settlement: ["wCBDC", "Private payment token"],
    network: "Private ZK L2 (Validium)",
    summary:
      "Full lifecycle PoC including bookbuild with a private AUD payment token, settlement and redemption in wCBDC, coupon payments via the private token, and wCBDC-facilitated interchange.",
  },
  {
    id: "anz-trade-payable",
    lead: "ANZ",
    name: "Trade Payable",
    type: "PoC",
    assetClass: "Other",
    assetSubClass: "Trade payable",
    settlement: ["wCBDC", "Payment token"],
    network: "Private ZK L2 (Validium)",
    summary:
      "Tokenised trade invoice (representing a payment obligation + assignment) exchanged for an AUD-referenced payment token, with wCBDC settlement and interchange between buyer/seller preferred tokens.",
  },
  {
    id: "apx-npp",
    lead: "AP+",
    name: "NPP-Token Integration",
    type: "PoC",
    assetClass: "Infrastructure",
    assetSubClass: "Infrastructure",
    settlement: ["NPP / Fast Settlement Service"],
    network: "N/A (research)",
    summary:
      "Industry-utility design using NPP + RITS Fast Settlement Service to fund/redeem stablecoins or deposit tokens from connected bank accounts. SWIFT acted as settlement coordinator.",
  },
  {
    id: "apx-interchange",
    lead: "AP+",
    name: "Token Interchange",
    type: "Pilot",
    assetClass: "Infrastructure",
    assetSubClass: "Infrastructure",
    settlement: ["wCBDC", "Stablecoins"],
    network: "Hedera public + HashSphere",
    summary:
      "Interchange service on a public network using a 'white coin' digital twin of wCBDC. wCBDC stayed on a private network while the white coin facilitated multi-issuer interchange on-chain.",
  },
  {
    id: "canvas-govt-bond",
    lead: "Canvas",
    name: "Government Bond",
    type: "Pilot",
    assetClass: "Fixed income",
    assetSubClass: "Government bond",
    settlement: ["wCBDC"],
    network: "Canvas Connect L2",
    summary:
      "Tokenised digital twins of Australian Government bonds: collateralised lending, repos, secondary trading, coupon payments — settled in wCBDC on the same blockchain.",
  },
  {
    id: "canvas-private-credit",
    lead: "Canvas",
    name: "Private Credit Fund",
    type: "Pilot",
    assetClass: "Other",
    assetSubClass: "Private credit",
    settlement: ["wCBDC"],
    network: "Canvas Connect L2",
    summary:
      "Tokenised shares in a special purpose vehicle holding a real estate credit fund — covered primary issuance, secondary trading, distributions and collateralised lending.",
  },
  {
    id: "cba-intraday-repo",
    lead: "CBA",
    name: "Intraday Repo",
    type: "PoC",
    assetClass: "Fixed income",
    assetSubClass: "Repo",
    settlement: ["CBA deposit token", "wCBDC interchange"],
    network: "Gravital + Kinexys + HQLAx",
    summary:
      "Intraday repo trades collateralised by Commonwealth/semi-government securities. Trade execution and settlement on CBA deposit tokens; interchange via wCBDC with smart-contract orchestrated DvP across ledgers.",
  },
  {
    id: "fireblocks-corporate-bond",
    lead: "Fireblocks",
    name: "Corporate Bond with Interchange",
    type: "PoC",
    assetClass: "Fixed income",
    assetSubClass: "Corporate bond",
    settlement: ["wCBDC", "Multiple stablecoins"],
    network: "Redbelly",
    summary:
      "Tokenised corporate bond using 'singleness' smart contracts per stablecoin issuer to convert between stablecoin and wCBDC. Interchange composed into a single atomic settlement transaction.",
  },
  {
    id: "forte-govt-bond",
    lead: "Forte Tech Solutions",
    name: "Government Bond",
    type: "Pilot",
    assetClass: "Fixed income",
    assetSubClass: "Government bond",
    settlement: ["AUDF stablecoin"],
    network: "Ethereum (public)",
    summary:
      "AUS Government bonds tokenised as digital twins on public Ethereum. Atomic DvP via the AUDF stablecoin; AUDF reserves held in a segregated ESA-holder account.",
  },
  {
    id: "imperium-term-deposit",
    lead: "Imperium Markets",
    name: "Term Deposit",
    type: "Pilot",
    assetClass: "Fixed income",
    assetSubClass: "Term deposit",
    settlement: ["wCBDC-backed stablecoin"],
    network: "Hedera + HashSphere",
    summary:
      "Tokenised term deposits traded on the Imperium marketplace, settled in a Cuscal-issued stablecoin backed 1:1 by wCBDC on a private network.",
  },
  {
    id: "imperium-ncd",
    lead: "Imperium Markets",
    name: "Certificates of Deposit",
    type: "Pilot",
    assetClass: "Fixed income",
    assetSubClass: "NCDs",
    settlement: ["wCBDC-backed stablecoin"],
    network: "Hedera + HashSphere",
    summary:
      "Tokenised negotiable certificates of deposit with on-chain custody and settlement using the Cuscal wCBDC-backed pilot stablecoin via an AP+ settlement coordinator.",
  },
  {
    id: "imperium-annuities",
    lead: "Imperium Markets",
    name: "Annuities",
    type: "Pilot",
    assetClass: "Fixed income",
    assetSubClass: "Annuities",
    settlement: ["wCBDC-backed stablecoin"],
    network: "Hedera + HashSphere",
    summary:
      "Tokenised annuity issuance and trading on a public-permissioned ledger with smart-contract escrow + DvP swap and wCBDC-backed stablecoin settlement.",
  },
  {
    id: "macropod-fund",
    lead: "Macropod",
    name: "Digital Asset Fund",
    type: "Pilot",
    assetClass: "Other",
    assetSubClass: "Managed fund",
    settlement: ["AUDM stablecoin"],
    network: "Redbelly",
    summary:
      "Issuance, trading and redemption of tokenised units in a wholesale managed investment scheme. Registration handled through the Tokeniser platform.",
  },
  {
    id: "macropod-corporate-bond",
    lead: "Macropod",
    name: "Corporate Bond",
    type: "Pilot",
    assetClass: "Fixed income",
    assetSubClass: "Corporate bond",
    settlement: ["AUDM stablecoin"],
    network: "Redbelly",
    summary:
      "Tokenised corporate bond covering issuance, secondary trading, coupons and maturity. Transactions on the Imperium Marketplace, settled in AUDM.",
  },
  {
    id: "northern-trust-carbon",
    lead: "Northern Trust",
    name: "Carbon Credits",
    type: "PoC",
    assetClass: "Other",
    assetSubClass: "Carbon credits",
    settlement: ["RITS via SWIFT synchronisation"],
    network: "Matrix Zenith (Hyperledger Besu)",
    summary:
      "Synchronised DvP of tokenised carbon credits using SWIFT MT messaging as a settlement coordinator and HVCS cash settlement across ESAs.",
  },
  {
    id: "notcentralised-loans",
    lead: "NotCentralised",
    name: "Collateralised Loans",
    type: "Pilot",
    assetClass: "Other",
    assetSubClass: "Structured finance",
    settlement: ["wCBDC-backed payment token"],
    network: "Redbelly",
    summary:
      "Tokenised structured finance security backed by loans, with payment flows settled via a private payment token fully backed by wCBDC. Demonstrated atomic loan repayment + collateral release.",
  },
  {
    id: "prospex-mining",
    lead: "ProspEx Group",
    name: "Mining Royalty Interests",
    type: "PoC",
    assetClass: "Other",
    assetSubClass: "Mining royalty",
    settlement: ["AUDF stablecoin"],
    network: "Ethereum (public)",
    summary:
      "Tokenised fractionalised mining royalty with smart-contract escrow + conditional settlement on hitting a minimum subscription threshold.",
  },
  {
    id: "westpac-term-deposit",
    lead: "Westpac",
    name: "Term Deposit",
    type: "PoC",
    assetClass: "Fixed income",
    assetSubClass: "Term deposit",
    settlement: ["NPP PayTo via RITS FSS"],
    network: "Blockchain-agnostic",
    summary:
      "Used the NPP PayTo Biller service to facilitate atomic-like settlement of tokenised term deposits — a tangible first step splitting end-to-end DvP for industry adoption.",
  },
  {
    id: "zerocap-govt-bond",
    lead: "Zerocap",
    name: "Government Bond",
    type: "Pilot",
    assetClass: "Fixed income",
    assetSubClass: "Government bond",
    settlement: ["RLUSD stablecoin"],
    network: "XRP Ledger",
    summary:
      "Full lifecycle of an AGB tokenised digital twin on a public-permissioned network, using a CLOB plus an AMM and RLUSD settlement.",
  },
];

export const filters = {
  type: ["Pilot", "PoC"] as const,
  assetClass: ["Fixed income", "Other", "Infrastructure"] as const,
};
