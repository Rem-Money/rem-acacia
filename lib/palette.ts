export type Swatch = { color: string; bg: string; ring: string };

const sw = (color: string, alpha = 0.12, ringAlpha = 0.45): Swatch => {
  const m = color.match(/^#([0-9a-f]{6})$/i);
  if (!m) return { color, bg: `rgba(255,255,255,${alpha})`, ring: `rgba(255,255,255,${ringAlpha})` };
  const r = parseInt(m[1].slice(0, 2), 16);
  const g = parseInt(m[1].slice(2, 4), 16);
  const b = parseInt(m[1].slice(4, 6), 16);
  return {
    color,
    bg: `rgba(${r},${g},${b},${alpha})`,
    ring: `rgba(${r},${g},${b},${ringAlpha})`,
  };
};

/* Settlement-asset families — match Figure 1 taxonomy */
export const FAMILY = {
  wcbdc: sw("#fcbf48"),
  rails: sw("#fd9a73"),
  deposit: sw("#7dd3fc"),
  hybrid: sw("#8DF0CC"),
  stable: sw("#c7e36a"),
} as const;

/* Network swatches */
export const NETWORK: Record<string, Swatch> = {
  redbelly: sw("#e7674a"),
  "canvas connect": sw("#fcbf48"),
  hedera: sw("#4cc9c3"),
  hashsphere: sw("#4cc9c3"),
  ethereum: sw("#8B7EE8"),
  "public ethereum": sw("#8B7EE8"),
  evm: sw("#8B7EE8"),
  "xrp ledger": sw("#a8b3c0"),
  xrpl: sw("#a8b3c0"),
  "private zk l2": sw("#7c92ff"),
  validium: sw("#7c92ff"),
  "zero-knowledge": sw("#7c92ff"),
  gravital: sw("#9a87ff"),
  kinexys: sw("#9a87ff"),
  hqlax: sw("#9a87ff"),
  "hyperledger besu": sw("#6296c4"),
  besu: sw("#6296c4"),
  "matrix zenith": sw("#6296c4"),
};

/* Company categories */
export const CATEGORY: Record<string, Swatch> = {
  "Lead Participant": sw("#fcbf48"),
  "DLT Platform": sw("#7c92ff"),
  Infrastructure: sw("#fd9a73"),
  Distributor: sw("#8DF0CC"),
  Authority: sw("#e7a8ff"),
};

/* Use-case asset classes */
export const ASSET_CLASS: Record<string, Swatch> = {
  "Fixed income": sw("#fcbf48"),
  Other: sw("#c7e36a"),
  Infrastructure: sw("#fd9a73"),
};

/* Use-case type */
export const TYPE: Record<string, Swatch> = {
  Pilot: sw("#fcbf48"),
  PoC: sw("#7dd3fc"),
};

const NEUTRAL: Swatch = {
  color: "rgba(255,255,255,0.72)",
  bg: "rgba(255,255,255,0.04)",
  ring: "rgba(255,255,255,0.14)",
};

/**
 * Resolve a tag string to a swatch by semantic guesswork — money/asset/network
 * families share the same hues so the colour stays meaningful across pages.
 */
export function tagSwatch(raw: string): Swatch {
  const t = raw.toLowerCase().trim();

  // Settlement assets / money families
  if (t === "wcbdc") return FAMILY.wcbdc;
  if (t.includes("wcbdc-backed")) return FAMILY.hybrid;
  if (t === "deposit token" || t.includes("deposit token")) return FAMILY.deposit;
  if (t === "stablecoin" || t === "stablecoins" || t === "audf" || t === "audm" || t === "rlusd" || t.includes("cuscal stablecoin")) return FAMILY.stable;
  if (t === "payment token" || t === "private payment token") return FAMILY.hybrid;
  if (t === "singleness") return FAMILY.stable;

  // Rails
  if (t === "npp" || t === "rits" || t === "fss" || t === "npp payto" || t.includes("payto")) return FAMILY.rails;
  if (t === "messaging" || t === "coordinator") return FAMILY.rails;

  // Networks (exact-ish)
  if (NETWORK[t]) return NETWORK[t];
  for (const key of Object.keys(NETWORK)) {
    if (t.includes(key)) return NETWORK[key];
  }

  // Concept tags
  if (t === "interchange" || t === "cross-ledger" || t === "composability" || t === "mobility")
    return sw("#e7a8ff");
  if (t === "amm" || t === "clob" || t === "secondary market" || t === "fractionalisation")
    return sw("#ffc878");
  if (t === "smart contracts" || t === "policy" || t === "research" || t === "coordination" || t === "exemptions" || t === "aml/ctf")
    return sw("#a8b3c0");
  if (t === "bank" || t === "distributor" || t === "non-bank")
    return sw("#a8b3c0");
  if (t === "public" || t === "public-permissioned" || t === "private")
    return sw("#7c92ff");

  // Asset-class hints
  if (t.includes("bond")) return FAMILY.wcbdc;
  if (t.includes("repo") || t.includes("collateral")) return FAMILY.rails;
  if (t.includes("term deposit") || t.includes("ncd") || t.includes("certificate") || t.includes("annuit"))
    return FAMILY.deposit;
  if (t.includes("fund") || t.includes("credit") || t.includes("managed"))
    return FAMILY.stable;
  if (t.includes("carbon") || t.includes("mining") || t.includes("royalty") || t.includes("trade payable") || t.includes("structured") || t.includes("loans"))
    return FAMILY.hybrid;
  if (t.includes("infrastructure")) return sw("#fd9a73");

  return NEUTRAL;
}

export const NEUTRAL_SWATCH = NEUTRAL;
