import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Pill } from "@/components/Pill";
import { StatCard } from "@/components/StatCard";

import { routeByPath } from "@/lib/seo";

const _r = routeByPath["/with-rem"];
export const metadata = {
  title: _r.title,
  description: _r.description,
  alternates: { canonical: "/with-rem" },
};

const CONTACT_EMAIL = "hi@rem.money";
const CALENDLY_URL = "https://calendar.app.google/1oJJb3QyFQ61Pras7";

const pillars = [
  {
    n: "01",
    label: "Lifecycle data",
    title: "Fixed-income lifecycle, as data",
    body: "Thirteen of Acacia's twenty use cases were fixed income. We turn allocation, coupons, transfers, repo legs and redemption on the token ledger into lifecycle events your registry, servicing and accounting systems can rely on. The issuer and its agents still perform them; we make sure every system records them the same way.",
  },
  {
    n: "02",
    label: "Settlement",
    title: "Every money leg, reconciled",
    body: "Whether the cash leg is wCBDC, ESA-settled, a deposit token or a regulated stablecoin, each one leaves records in a different place. We track DvP and PvP legs across the token platform, the settlement asset and the bank side, and surface breaks with the evidence to resolve them.",
  },
  {
    n: "03",
    label: "Interoperability",
    title: "Ledger sync across rails",
    body: "Connectors and ledger synchronisation between permissioned networks, public chains and the systems around traditional FMIs (RITS, Austraclear, CHESS). Designed up front, so it isn't next year's integration problem.",
  },
  {
    n: "04",
    label: "Deployment",
    title: "Inside your boundary",
    body: "Participant data stays where it is allowed to live: our cloud, your VPC, on-premises, or embedded in your platform. We see only the participant view you authorise. Custody, keys and execution stay with you and your licensed providers.",
  },
];

const helpAreas = [
  {
    title: "If you built or ran an Acacia use case",
    bullets: [
      "Turn the pilot's ledger activity into lifecycle events and reports your clients' registry, custody and accounting systems can consume.",
      "Stop rebuilding the same integration backend for every participant that joins.",
      "Run reconciliation between the token ledger, the settlement asset and participants' books continuously, not at period end.",
    ],
  },
  {
    title: "If you're a tokenisation or DLT platform",
    bullets: [
      "Give every participant the same connectors, ledger sync and reconciliation, embedded in your product or deployed alongside it.",
      "Connect to RITS- and Austraclear-linked systems and core ledgers with a clear settlement and reconciliation path.",
      "Handle wCBDC, deposit-token and stablecoin legs in one model instead of one integration per money type.",
    ],
  },
  {
    title: "If you're a bank or FMI",
    bullets: [
      "Get tokenised-asset activity from the platforms you use into your books and records, reconciled against custody and cash.",
      "Keep participant data inside your security boundary, limited to the view you are authorised to see.",
      "Work through the platform or systems integrator you already use. We can deliver inside their engagement.",
    ],
  },
];

const proofPoints = [
  { value: "20", label: "Acacia use cases mapped", hint: "From the RBA × DFCRC Final Report", accent: "yellow" as const },
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
                fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.035em",
                maxWidth: 980,
              }}
            >
              We make tokenised markets work{" "}
              <span style={{ color: "var(--text-muted)" }}>with the systems participants already run.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 22, maxWidth: 780 }}>
              Acacia showed tokenised assets and digital money settling on real DLT platforms. The next step is
              getting each platform to agree with registries, custodians, settlement systems and every participant&apos;s
              own books. rem connects the ledger to those systems: lifecycle data, settlement integration and
              reconciliation.
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
              Four problems every platform hits after the pilot.
            </h2>
            <p className="lead" style={{ maxWidth: 760 }}>
              The pilots proved the rails work. Production means every participant&apos;s systems agree with them,
              every day.
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
                        color: "rgba(255,255,255,0.55)",
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
                            background: "rgba(255,255,255,0.35)",
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

      {/* Case studies */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <Reveal>
            <div className="eyebrow">Case study</div>
            <h2 style={{ margin: "10px 0 14px", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              What this looks like in practice.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <a
              href="https://rem.money/case-studies/tokenized-corporate-bond"
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-card"
              style={{
                display: "block",
                marginTop: 24,
                background: "var(--card-plus)",
                border: "1px solid rgba(252,191,72,0.22)",
                borderRadius: 20,
                padding: 32,
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 180ms ease, transform 180ms ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "1 1 360px", minWidth: 0 }}>
                  <span
                    style={{
                      fontSize: 10.5,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--yellow)",
                      fontWeight: 700,
                    }}
                  >
                    Tokenised corporate bond
                  </span>
                  <h3
                    style={{
                      margin: "10px 0 8px",
                      fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                    }}
                  >
                    A tokenised corporate bond, reconciled to the books.
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--text-muted)",
                      fontSize: 14,
                      lineHeight: 1.6,
                      maxWidth: 640,
                    }}
                  >
                    A fixed-coupon note on a private ledger. Allocation, coupons, transfers and redemption flow into the
                    register, paying-agent records and the issuer&apos;s ledger, reconciled continuously. Fixed income was
                    13 of Acacia&apos;s 20 use cases.
                  </p>
                </div>
                <span
                  aria-hidden
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--yellow)",
                    fontFamily: "var(--font-display)",
                    fontSize: 13,
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                  }}
                >
                  Read case study →
                </span>
              </div>
            </a>
          </Reveal>
          <style>{`
            .case-study-card:hover { border-color: rgba(252,191,72,0.55) !important; transform: translateY(-2px); }
          `}</style>
        </div>
      </section>

      {/* Why rem */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <Reveal>
            <div
              className="why-rem-card"
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
                  body="What we leave behind is built to be implemented: data models, connectors, reconciliation rules, reference code. Your team picks up where we stop, or we keep building. Nothing gets laminated."
                />
                <Reason
                  title="Vendor-neutral by construction."
                  body="We're not paid by a chain, a stablecoin issuer, or an FMI. What we recommend is what we'd build, not what we'd resell."
                />
                <Reason
                  title="Acacia-fluent, regulator-fluent."
                  body="We speak the vocabulary the report and the regulator use (ESAs, wCBDC, ASIC ERS, DFMI sandbox) so the design lands in the room without translation."
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
              className="strong-cta"
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
                  Bring the platform. Bring the systems that have to agree.
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
                  Thirty minutes to confirm there&apos;s a fit. Then one fixed-scope workflow, from the ledger to your
                  books, with production criteria agreed up front.
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

      <style>{`
        @media (max-width: 640px) {
          .why-rem-card { padding: 22px !important; border-radius: 16px !important; }
          .strong-cta { padding: 30px 20px !important; border-radius: 18px !important; }
        }
      `}</style>
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
