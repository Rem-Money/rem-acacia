import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Pill } from "@/components/Pill";
import { StatCard } from "@/components/StatCard";

export const metadata = {
  title: "Build with rem -  Project Acacia",
  description:
    "rem.money designs tokenised wholesale finance for issuers, banks and FMIs -  assets, digital money, interoperability and regulation, engineered as one system.",
};

const CONTACT_EMAIL = "hi@rem.money";
const CALENDLY_URL = "https://calendly.com/abhi-rem/30min";

const pillars = [
  {
    n: "01",
    label: "Asset tokenisation",
    title: "Issuance & full lifecycle",
    body: "We take an asset on-chain -  fixed income, securitised products, private markets, carbon -  and design issuance, registry, corporate actions and redemption so it stands up as a security, not a wrapper.",
  },
  {
    n: "02",
    label: "Digital money",
    title: "wCBDC, deposit tokens, stablecoins",
    body: "We pick the money-leg that actually settles -  central bank money (wCBDC, ESAs), tokenised commercial bank money (deposit tokens), regulated stablecoins -  and the right pattern for it: atomic DvP, PvP, or synchronisation across rails.",
  },
  {
    n: "03",
    label: "Interoperability",
    title: "Cross-chain & cross-rail design",
    body: "Bridges, HTLC coordination and ledger synchronisation across traditional FMIs (RITS, Austraclear, CHESS), public chains and permissioned networks. Designed up front, so it doesn't become next year's integration problem.",
  },
  {
    n: "04",
    label: "Regulation",
    title: "Sandbox-ready experiment design",
    body: "We frame DFMI sandbox and ASIC ERS submissions so settlement finality, prudential treatment, AML/CTF and consumer protection are answered in the design -  before the regulator's first round of questions, not after.",
  },
];

const helpAreas = [
  {
    title: "If you're an issuer",
    bullets: [
      "Tokenise corporate bonds, securitised products or private credit on a DLT that fits your distributors and investor base -  not the one with the loudest pitch.",
      "Pick the cash-leg your counterparties will actually accept: wCBDC, deposit tokens, or regulated stablecoin, with a settlement model that maps to how they clear today.",
      "Design the disclosure, registry and corporate-actions layer so the token holds up as a security under audit, not just under demo.",
    ],
  },
  {
    title: "If you're a bank or FMI",
    bullets: [
      "Build a deposit-token thesis with bank-on-bank interoperability designed in -  without locking into a single rail prematurely.",
      "Connect existing infrastructure (RITS, Austraclear, CHESS, core ledger) to tokenised asset platforms with a clear settlement and reconciliation path.",
      "Define your wCBDC distribution role for the next pilot round, with the technical and prudential implications mapped.",
    ],
  },
  {
    title: "If you're a platform or PSP",
    bullets: [
      "Plug tokenised assets and tokenised money into your existing wallet, custody or trading stack -  without rebuilding the product around them.",
      "Shape a sandbox submission end-to-end: technical design, legal mapping, regulator engagement.",
      "Bridge public-chain liquidity to Australian regulated rails with a model that holds for compliance and treasury.",
    ],
  },
];

const proofPoints = [
  { value: "20", label: "Acacia use cases mapped", hint: "Issuer, settlement, DLT pairings indexed" },
  { value: "4", label: "Forms of digital money", hint: "wCBDC, ESAs, deposit tokens, stablecoins" },
  { value: "11", label: "Post-Acacia initiatives tracked", hint: "Across regulator, industry, RBA", accent: "green" as const },
  { value: "1", label: "Conversation away", hint: "From a design sketch on the table", accent: "muted" as const },
];

export default function WithRem() {
  return (
    <>
      {/* Hero */}
      <section
        className="section noise-bg"
        style={{ paddingTop: 140, paddingBottom: 60, position: "relative", overflow: "hidden" }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.18 }} className="grid-lines" />
        <div className="container-rem" style={{ position: "relative" }}>
          <Reveal>
            <Pill>Work with rem</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h1
              style={{
                margin: "20px 0 0",
                fontSize: "clamp(2.4rem, 6vw, 4.4rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.035em",
                maxWidth: 980,
              }}
            >
              We engineer tokenised finance{" "}
              <span style={{ color: "var(--text-muted)" }}>for banks, issuers and FMIs.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 22, maxWidth: 780 }}>
              rem.money designs the four layers Acacia tests -  tokenised assets, programmable money, interoperability
              and regulation -  into systems that clear, settle and pass audit. whether you are at the pilot stage or past it, we're the team you bring in.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ marginTop: 30, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
              <a
                className="btn btn-ghost"
                href={`mailto:${CONTACT_EMAIL}?subject=Project%20Acacia%20%E2%80%94%20building%20with%20rem`}
              >
                Email {CONTACT_EMAIL}
              </a>
              <Link className="btn btn-ghost" href="/use-cases">
                Browse the 20 use cases
              </Link>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div
              style={{
                marginTop: 56,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
              }}
              className="hero-stats"
            >
              {proofPoints.map((p) => (
                <StatCard key={p.label} value={p.value} label={p.label} hint={p.hint} accent={p.accent} />
              ))}
            </div>
            <style>{`
              @media (max-width: 900px) { .hero-stats { grid-template-columns: repeat(2, 1fr) !important; } }
              @media (max-width: 480px) { .hero-stats { grid-template-columns: 1fr !important; } }
            `}</style>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="section">
        <div className="container-rem">
          <Reveal>
            <div className="eyebrow">Where we focus</div>
            <h2 style={{ margin: "10px 0 14px", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Four layers. One conversation.
            </h2>
            <p className="lead" style={{ maxWidth: 760 }}>
              Acacia names four levers: asset tokenisation, money tokenisation, interoperability, regulation. In
              practice they don't decouple -  and neither do we.
            </p>
          </Reveal>

          <div
            style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}
            className="grid-pillars"
          >
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 50}>
                <div className="card" style={{ height: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 12,
                        color: "var(--text-dim)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {p.n}
                    </span>
                    <span
                      style={{
                        fontSize: 10.5,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--yellow)",
                        fontWeight: 700,
                      }}
                    >
                      {p.label}
                    </span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: "1.2rem", letterSpacing: "-0.015em" }}>{p.title}</h3>
                  <p
                    style={{
                      marginTop: 10,
                      color: "var(--text-muted)",
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 720px) { .grid-pillars { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* How we can help */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <Reveal>
            <div className="eyebrow">How we can help</div>
            <h2 style={{ margin: "10px 0 14px", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Three starting points, depending on where you sit.
            </h2>
          </Reveal>

          <div
            style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
            className="grid-help"
          >
            {helpAreas.map((h, i) => (
              <Reveal key={h.title} delay={i * 50}>
                <div className="card" style={{ height: "100%" }}>
                  <h3 style={{ margin: 0, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>{h.title}</h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "16px 0 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    {h.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span
                          aria-hidden
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: 6,
                            background: "var(--yellow)",
                            marginTop: 8,
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ color: "rgba(255,255,255,0.82)", fontSize: 13.5, lineHeight: 1.55 }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 980px) { .grid-help { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* Why rem */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <Reveal>
            <div
              style={{
                background: "var(--card-plus)",
                border: "1px solid rgba(141,240,204,0.18)",
                borderRadius: 20,
                padding: 36,
              }}
            >
              <div className="eyebrow" style={{ color: "var(--green)" }}>Why rem</div>
              <div
                style={{
                  marginTop: 16,
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 24,
                }}
                className="grid-why"
              >
                <Reason
                  title="Engineers, not advisors."
                  body="What we leave behind is built to be implemented -  data models, settlement flows, reference code, sandbox submissions. Your team picks up where we stop, or we keep building. Nothing gets laminated."
                />
                <Reason
                  title="Vendor-neutral by construction."
                  body="We're not paid by a chain, a stablecoin issuer, or an FMI. What we recommend is what we'd build -  not what we'd resell."
                />
                <Reason
                  title="Acacia-fluent, regulator-fluent."
                  body="We speak the vocabulary the report and the regulator use -  ESAs, wCBDC, ASIC ERS, DFMI sandbox -  so the design lands in the room without translation."
                />
              </div>
              <style>{`
                @media (max-width: 880px) { .grid-why { grid-template-columns: 1fr !important; } }
              `}</style>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Strong CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <Reveal>
            <div
              style={{
                position: "relative",
                background:
                  "linear-gradient(135deg, rgba(252,191,72,0.10) 0%, rgba(141,240,204,0.06) 100%), var(--card-plus)",
                border: "1px solid rgba(252,191,72,0.28)",
                borderRadius: 24,
                padding: "48px 40px",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background:
                    "radial-gradient(700px 240px at 50% 0%, rgba(252,191,72,0.14), transparent 60%), radial-gradient(600px 220px at 50% 100%, rgba(141,240,204,0.10), transparent 60%)",
                }}
              />
              <div style={{ position: "relative" }}>
                <div
                  className="eyebrow"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--yellow)",
                  }}
                >
                  <Image src="/rem.png" alt="" width={14} height={14} style={{ borderRadius: 3, display: "block" }} />
                  Let's build
                </div>
                <h2
                  style={{
                    margin: "12px auto 14px",
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.08,
                    maxWidth: 820,
                  }}
                >
                  Bring the asset. Bring the question. We'll take it from sketch to ship.
                </h2>
                <p
                  style={{
                    color: "var(--text-muted)",
                    margin: "0 auto 28px",
                    maxWidth: 640,
                    fontSize: 15,
                    lineHeight: 1.65,
                  }}
                >
                  Thirty minutes to confirm there's a fit. One week to put a working design in front of your risk,
                  legal and tech teams.
                </p>
                <div style={{ display: "inline-flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                  <a
                    className="btn btn-primary"
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a call →
                  </a>
                  <a
                    className="btn btn-ghost"
                    href={`mailto:${CONTACT_EMAIL}?subject=Project%20Acacia%20%E2%80%94%20building%20with%20rem`}
                  >
                    Email {CONTACT_EMAIL}
                  </a>
                  <a className="btn btn-ghost" href="https://rem.money" target="_blank" rel="noopener noreferrer">
                    Visit rem.money
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Reason({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 style={{ margin: 0, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>{title}</h3>
      <p style={{ marginTop: 10, color: "var(--text-muted)", fontSize: 13.5, lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}
