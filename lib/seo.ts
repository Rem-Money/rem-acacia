export const SITE_URL = "https://acacia.rem.money";

export const SITE_NAME = "Project Acacia";

export const SITE_TAGLINE =
  "Independent reading of the RBA × DFCRC report";

export const SITE_DESCRIPTION =
  "An independent walkthrough of the RBA × DFCRC Project Acacia final report: tokenised wholesale asset markets, digital money, and the road ahead. By rem labs.";

export const PUBLISHER = {
  name: "rem labs",
  url: "https://rem.money",
};

type Route = {
  path: string;
  title: string;
  description: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
};

export const ROUTES: Route[] = [
  {
    path: "/",
    title: "Project Acacia — Independent reading of the RBA × DFCRC report",
    description: SITE_DESCRIPTION,
    priority: 1.0,
    changeFrequency: "weekly",
  },
  {
    path: "/introduction",
    title: "Global Context",
    description:
      "Where tokenisation stands worldwide: the global state of wholesale tokenisation experiments, RWA growth, and tokenised MMFs leading into Project Acacia.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/project",
    title: "Project Overview",
    description:
      "Design, governance, and the pilot wholesale CBDC. Twenty industry-led experiments run on real money and real assets across Phase 2 of Project Acacia.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/tokenisation",
    title: "Asset Tokenisation",
    description:
      "What worked and what blocked it: programmability, transferability, fractionalisation, and the asset classes that led adoption interest in Project Acacia.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/money",
    title: "Forms of Money",
    description:
      "wCBDC, ESA balances, stablecoins, and deposit tokens — the forms of digital money tested in Project Acacia and how they interoperate.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/regulation",
    title: "Legal & Regulatory",
    description:
      "Settlement finality, prudential treatment, the Digital Assets Framework Bill, MLETR, and a DFMI sandbox: the legal stack behind tokenised wholesale markets.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/road-ahead",
    title: "Road Ahead",
    description:
      "The eleven-initiative program spanning regulatory, market infrastructure, and policy research workstreams that follow Project Acacia Phase 2.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/use-cases",
    title: "Use Cases",
    description:
      "All twenty industry experiments from Project Acacia Phase 2 — fixed income, repo, FX, carbon, and private markets — filterable by type, asset class, and participant.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/participants",
    title: "Participants",
    description:
      "The issuers, banks, financial market infrastructures, custodians, technology providers, and regulators that participated in Project Acacia.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/with-rem",
    title: "Build with rem",
    description:
      "rem labs designs tokenised wholesale finance for issuers, banks and FMIs — assets, digital money, interoperability and regulation, engineered as one system.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
];

export const routeByPath = Object.fromEntries(
  ROUTES.map((r) => [r.path, r])
);
