import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { StatCard } from "@/components/StatCard";
import { Pill } from "@/components/Pill";

const findings = [
  {
    title: "Two-tier monetary system reaffirmed",
    body: "Central bank money remains the 'anchor and enabler' — tokenised forms of private money (stablecoins, deposit tokens) can complement it without displacing it.",
  },
  {
    title: "Atomic settlement unlocks real efficiency",
    body: "Co-locating tokenised assets and money enables instantaneous, all-or-nothing DvP — cutting counterparty risk and freeing collateral.",
  },
  {
    title: "Fixed income leads adoption interest",
    body: "13 of 20 use cases were in fixed income, mirroring international experience. Largest gains expected from post-trade automation and settlement compression.",
  },
  {
    title: "Interoperability is the bottleneck",
    body: "Walled gardens won't deliver the prize. Synchronisation, bridges, and multilateral interchange utilities are needed across new and traditional rails.",
  },
  {
    title: "Sandbox + longer runway over short pilots",
    body: "Larger institutions ran out of time for internal risk reviews. A DFMI sandbox with stage-gates is the preferred next step.",
  },
  {
    title: "Coordination, not just code",
    body: "Network effects and incumbent inertia have stymied wholesale-market dynamism. Persistent industry-regulator forums are essential.",
  },
];

const sections = [
  { href: "/introduction", label: "Global Context", hint: "Where tokenisation stands worldwide" },
  { href: "/project", label: "Project Overview", hint: "Design, governance, and the pilot wCBDC" },
  { href: "/tokenisation", label: "Asset Tokenisation", hint: "What worked, what blocked it" },
  { href: "/money", label: "Forms of Money", hint: "wCBDC, ESAs, stablecoins, deposit tokens" },
  { href: "/regulation", label: "Legal & Regulatory", hint: "Settlement finality, prudential, sandboxes" },
  { href: "/road-ahead", label: "Road Ahead", hint: "The 11-initiative program" },
  { href: "/use-cases", label: "Use Cases", hint: "All 20 industry experiments" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section noise-bg" style={{ paddingTop: 140, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.18 }} className="grid-lines" />
        <div className="container-rem" style={{ position: "relative" }}>
          <Reveal>
            <Pill>RBA × DFCRC · Final Report · May 2026</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h1
              style={{
                margin: "20px 0 0",
                fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                maxWidth: 1000,
              }}
            >
              Project Acacia.{" "}
              <span style={{ color: "var(--text-muted)" }}>
                The role of digital money in wholesale tokenised asset markets.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 22, maxWidth: 760 }}>
              Twenty industry-led experiments. A pilot wholesale CBDC issued onto third-party DLT platforms. A working
              group on deposit tokens. A coordinated read on what's blocking — and what could unlock — Australia's
              wholesale market dynamism.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ marginTop: 30, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href="https://www.rba.gov.au/payments-and-infrastructure/central-bank-digital-currency/pdf/project-acacia-final-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the original report →
              </a>
              <Link className="btn btn-ghost" href="/use-cases">
                Explore all 20 use cases
              </Link>
            </div>
          </Reveal>

          {/* Hero stats */}
          <Reveal delay={260}>
            <div
              style={{
                marginTop: 60,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
              }}
              className="hero-stats"
            >
              <StatCard value="20" label="Use cases delivered" hint="12 pilots + 8 proofs of concept" />
              <StatCard value="A$4.4M" label="Pilot wCBDC issued" hint="Up to A$250k per individual transaction" />
              <StatCard value="A$24B" label="Est. annual gains" hint="DFCRC potential if fully realised" accent="green" />
              <StatCard value="11" label="Post-Acacia initiatives" hint="Across regulator, industry, RBA" accent="muted" />
            </div>
            <style>{`
              @media (max-width: 900px) { .hero-stats { grid-template-columns: repeat(2, 1fr) !important; } }
              @media (max-width: 480px) { .hero-stats { grid-template-columns: 1fr !important; } }
            `}</style>
          </Reveal>
        </div>
      </section>

      {/* Section index */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container-rem">
          <Reveal>
            <div className="eyebrow">The dashboard</div>
            <h2 style={{ margin: "10px 0 14px", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>Seven sections, one report.</h2>
            <p className="lead" style={{ maxWidth: 720 }}>
              Each section maps to a chapter of the original report. Skim the headlines, dig into the figures, then jump
              into the 20 industry experiments.
            </p>
          </Reveal>

          <div
            style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
            className="grid-sections"
          >
            {sections.map((s, i) => (
              <Reveal key={s.href} delay={i * 40}>
                <Link href={s.href} className="card" style={{ display: "block", height: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 14,
                    }}
                  >
                    <span style={{ fontSize: 12, color: "var(--text-dim)", fontFamily: "var(--font-display)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ color: "var(--yellow)" }}>↗</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "-0.02em" }}>
                    {s.label}
                  </div>
                  <div style={{ marginTop: 8, color: "var(--text-muted)", fontSize: 14 }}>{s.hint}</div>
                </Link>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 880px) { .grid-sections { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 560px) { .grid-sections { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* Key findings */}
      <section className="section">
        <div className="container-rem">
          <Reveal>
            <div className="eyebrow">Executive summary</div>
            <h2 style={{ margin: "10px 0 14px", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>Six findings that frame the rest.</h2>
          </Reveal>
          <div
            style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
            className="grid-findings"
          >
            {findings.map((f, i) => (
              <Reveal key={f.title} delay={i * 50}>
                <div className="card" style={{ height: "100%" }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: "rgba(252,191,72,0.12)",
                      color: "var(--yellow)",
                      display: "grid",
                      placeItems: "center",
                      fontFamily: "var(--font-display)",
                      fontSize: 13,
                      fontWeight: 700,
                      marginBottom: 14,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 style={{ fontSize: "1.05rem", margin: 0 }}>{f.title}</h3>
                  <p style={{ marginTop: 10, color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6 }}>{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 880px) { .grid-findings { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 560px) { .grid-findings { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <Reveal>
            <div
              style={{
                background: "var(--card-plus)",
                border: "1px solid rgba(141,240,204,0.18)",
                borderRadius: 20,
                padding: 36,
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 24,
                alignItems: "center",
              }}
            >
              <div>
                <div className="eyebrow" style={{ color: "var(--green)" }}>Post-Acacia</div>
                <h3 style={{ margin: "10px 0 8px", fontSize: "1.6rem" }}>
                  A new multi-stream, multi-agency program of work.
                </h3>
                <p style={{ color: "var(--text-muted)", margin: 0, maxWidth: 680 }}>
                  Eleven initiatives across regulator, industry and RBA workstreams — from a DFMI sandbox to deposit
                  token interoperability to cross-border payment exploration.
                </p>
              </div>
              <Link className="btn btn-primary" href="/road-ahead">
                View the program →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
