import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Pill } from "@/components/Pill";
import { StatCard } from "@/components/StatCard";

export const metadata = {
  title: "Build with rem — Project Acacia",
  description:
    "rem.money builds tokenised wholesale finance infrastructure — issuance, settlement, custody and digital money rails for issuers, banks and FMIs.",
};

const CONTACT_EMAIL = "hello@rem.money";

const pillars = [
  {
    n: "01",
    label: "Asset tokenisation",
    title: "Issuance & lifecycle",
    body: "Fixed income, securitised products, private markets, carbon — tokenised on the DLT platforms used in Acacia (Redbelly, Canvas, Hedera, Ethereum L2s, Corda). Issuance, registry, corporate actions, redemption.",
  },
  {
    n: "02",
    label: "Digital money",
    title: "wCBDC, deposit tokens, stablecoins",
    body: "Money-leg orchestration across central bank money (wCBDC, ESAs), tokenised commercial bank money (deposit tokens) and regulated stablecoins. Atomic DvP, PvP and synchronisation patterns.",
  },
  {
    n: "03",
    label: "Interoperability",
    title: "Cross-chain & cross-rail",
    body: "Bridges, synchronisation oracles, and HTLC-style coordination between traditional FMIs (RITS, Austraclear, CHESS), public chains and private permissioned networks.",
  },
  {
    n: "04",
    label: "Regulation",
    title: "Sandbox-ready experiments",
    body: "We help structure experiments for the DFMI sandbox and ASIC ERS — settlement finality, prudential treatment, AML/CTF and consumer protection lenses baked in from day one.",
  },
];

const helpAreas = [
  {
    title: "If you're an issuer",
    bullets: [
      "Tokenise corporate bonds, securitised products or private credit on a DLT that matches your distributor & investor base.",
      "Architect the cash-leg — wCBDC, deposit tokens, or regulated stablecoin — for atomic settlement.",
      "Build the disclosure, registry and corporate-actions layer so the token is a real security, not a wrapper.",
    ],
  },
  {
    title: "If you're a bank or FMI",
    bullets: [
      "Issue and distribute a deposit token with bank-on-bank interoperability — without locking yourself into one rail.",
      "Connect existing infrastructure (RITS, Austraclear, CHESS, core ledger) to tokenised asset platforms.",
      "Stand up a wCBDC distribution capability for the next pilot round.",
    ],
  },
  {
    title: "If you're a platform or PSP",
    bullets: [
      "Plug tokenised assets and tokenised money into your existing wallet, custody or trading product.",
      "Get a sandbox submission across the line — technical design, legal mapping, regulator engagement.",
      "Operate the bridge between public-chain liquidity and Australian regulated rails.",
    ],
  },
];

const proofPoints = [
  { value: "20", label: "Acacia use cases mapped", hint: "Issuer, settlement, DLT pairings indexed" },
  { value: "5+", label: "DLT platforms integrated", hint: "Redbelly, Canvas, Hedera, EVM L2s, Corda" },
  { value: "4", label: "Settlement asset types", hint: "wCBDC, ESAs, deposit tokens, stablecoins", accent: "green" as const },
  { value: "11", label: "Post-Acacia initiatives tracked", hint: "Across regulator, industry, RBA" , accent: "muted" as const },
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
              Tokenised wholesale finance,{" "}
              <span style={{ color: "var(--text-muted)" }}>built end-to-end.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 22, maxWidth: 780 }}>
              rem.money builds the infrastructure that turns Acacia-class experiments into live wholesale rails —
              tokenised assets, programmable money, regulatory navigation, and the integration layer that wires it
              all to the institutions you already work with.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ marginTop: 30, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}?subject=Project%20Acacia%20%E2%80%94%20building%20with%20rem`}>
                Start a conversation →
              </a>
              <a
                className="btn btn-ghost"
                href="https://cal.com/rem-money/intro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 30-minute call
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
            <div className="eyebrow">What we build</div>
            <h2 style={{ margin: "10px 0 14px", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Four layers. One delivery team.
            </h2>
            <p className="lead" style={{ maxWidth: 760 }}>
              The Acacia report identifies asset tokenisation, money tokenisation, interoperability and regulation
              as the four levers. rem.money builds across all four — so the integration risk lives in one place
              instead of fanning out across vendors.
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
              Three starting points, mapped to the Acacia cohort.
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
                  title="We read the report — we built the site."
                  body="This entire interpretation of Project Acacia was crafted by rem. The same team will architect your build."
                />
                <Reason
                  title="DLT-agnostic, asset-agnostic."
                  body="We've shipped across Redbelly, Canvas, Hedera, EVM L2s and Corda. We choose the rail that fits the asset — not the other way round."
                />
                <Reason
                  title="Money + assets in one team."
                  body="Most vendors do one. We orchestrate the cash-leg and the asset-leg together, so atomic settlement isn't a slide — it's the default."
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
                  Bring us the asset, the institution, or the question. We'll bring the build.
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
                  A 30-minute conversation is usually enough to know whether there's a fit. If there is, we'll come
                  back with a design sketch and a sequenced delivery plan within a week.
                </p>
                <div style={{ display: "inline-flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                  <a
                    className="btn btn-primary"
                    href={`mailto:${CONTACT_EMAIL}?subject=Project%20Acacia%20%E2%80%94%20building%20with%20rem`}
                  >
                    Email {CONTACT_EMAIL} →
                  </a>
                  <a
                    className="btn btn-ghost"
                    href="https://cal.com/rem-money/intro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a 30-minute call
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
