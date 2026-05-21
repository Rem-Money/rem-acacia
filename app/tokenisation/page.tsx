import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCard } from "@/components/StatCard";
import { Figure } from "@/components/Figure";
import { Callout } from "@/components/Callout";
import { Pill } from "@/components/Pill";

export const metadata = { title: "Asset Tokenisation — Acacia" };

const capabilities = [
  {
    n: "01",
    title: "Programmability & composability",
    points: [
      "Lower-cost issuance via automated legal, compliance and ops tasks.",
      "End-to-end straight-through settlement; shorter, more predictable cycles.",
      "Automated lifecycle — coupon calc, bondholder voting, distribution.",
      "Embedded KYC/AML and sanctions checks in token logic.",
    ],
  },
  {
    n: "02",
    title: "Transferability & fractionalisation",
    points: [
      "Streamlined transfers — fewer legal/operational frictions.",
      "Smaller minimum investment sizes broaden the investor base.",
      "Illiquid assets (real estate, private credit, royalties) gain access.",
    ],
  },
  {
    n: "03",
    title: "Transparency & immutability",
    points: [
      "Single shared source of truth across asset and payment ledgers.",
      "Verifiable, timely info for investors and counterparties.",
      "Immutable transaction histories enable independent audit & monitoring.",
    ],
  },
  {
    n: "04",
    title: "Decentralised ecosystems",
    points: [
      "Reduced operational risk from a single dominant operator.",
      "Shared responsibility for ledger integrity.",
      "Trade-offs in accountability and crisis response.",
    ],
  },
  {
    n: "05",
    title: "Direct control of tokenised assets",
    points: [
      "Cryptographic signatures authorise every transaction.",
      "Owners and custodians manage assets directly.",
      "Bespoke delegation models without ledger operator intermediation.",
    ],
  },
];

const barriers = [
  {
    title: "Legal & regulatory uncertainty",
    body: "Tokenisation, smart contracts and atomic settlement raise issues current frameworks didn't anticipate — particularly in post-trade.",
  },
  {
    title: "Coordination across competing stakeholders",
    body: "Network effects and incumbent inertia have slowed wholesale-market innovation. Enduring multi-party forums are essential.",
  },
  {
    title: "Interoperability across rails",
    body: "Tokenised, traditional, and DLT platforms must talk to each other. Common standards and synchronisation operators are the path forward.",
  },
];

export default function Tokenisation() {
  return (
    <>
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="container-rem">
          <Reveal>
            <Pill>Chapter 4 · Asset tokenisation in Australia</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ margin: "20px 0 0", fontSize: "clamp(2rem, 5vw, 3.4rem)", maxWidth: 980, letterSpacing: "-0.03em" }}>
              Early stage. Real interest. Real blockers.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 18, maxWidth: 760 }}>
              Participants were prepared to expend serious resources on time-bound experiments. The asset class breakdown mirrored the
              international picture — fixed income led, with significant interest in managed funds, repos, structured products, carbon credits,
              mining royalties and trade receivables.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Token structures */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <SectionHeading eyebrow="Token structures" title="Digital twin vs. digital native." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-2">
            <Reveal>
              <div className="card" style={{ padding: 28 }}>
                <Pill tone="muted">Most use cases</Pill>
                <h3 style={{ marginTop: 14, fontSize: "1.4rem" }}>Digital twin</h3>
                <p style={{ color: "var(--text-muted)", marginTop: 8 }}>
                  DLT token represents information about (or an indirect claim on) an underlying asset held in a traditional register.
                  Builds on existing legal constructs and custody arrangements, but typically requires ongoing synchronisation between systems.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ padding: 28, background: "var(--card-plus)", borderColor: "rgba(141,240,204,0.18)" }}>
                <Pill tone="green">Preferred target state</Pill>
                <h3 style={{ marginTop: 14, fontSize: "1.4rem" }}>Digital native</h3>
                <p style={{ color: "var(--text-muted)", marginTop: 8 }}>
                  DLT token is the primary record of ownership. Removes reconciliation entirely. Used in Fireblocks and Macropod's Digital
                  Asset Fund. Requires legal recognition of ledger-based ownership and settlement finality.
                </p>
              </div>
            </Reveal>
          </div>
          <style>{`@media (max-width: 760px) { .grid-2 { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Graph 3 */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 36, alignItems: "center" }}>
          <Reveal>
            <Figure
              src="/figures/graph-3-use-cases-by-asset-class.png"
              alt="Graph 3 — Use cases by asset class"
              caption="Graph 3 — Use cases by asset class. Fixed income dominated, consistent with international experience."
              source="RBA"
            />
          </Reveal>
          <Reveal delay={80}>
            <div>
              <div className="eyebrow">By the numbers</div>
              <h2 style={{ margin: "10px 0 12px", fontSize: "1.8rem" }}>13 of 20 use cases were fixed income.</h2>
              <p style={{ color: "var(--text-muted)" }}>
                Project Acacia explored a wide spread: managed investment schemes, interbank repos, structured products, carbon credits,
                mining royalties and receivables. But the centre of gravity stayed in fixed income — where the manual, multi-party,
                phone-and-email-bound wholesale processes have the most to gain.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Five capabilities */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <SectionHeading
            eyebrow="Five capability categories"
            title="Where the tokenisation prize lives."
            description="Acacia participants demonstrated benefits across five capability buckets. Some can be achieved with traditional tech in more advanced ways — but tokenisation makes them simpler, faster, more scalable."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="grid-caps">
            {capabilities.map((c, i) => (
              <Reveal key={c.n} delay={i * 50}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, display: "grid", placeItems: "center", background: "rgba(252,191,72,0.12)", color: "var(--yellow)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13 }}>{c.n}</div>
                    <h3 style={{ margin: 0, fontSize: "1.15rem" }}>{c.title}</h3>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {c.points.map((p) => (
                      <li key={p} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "rgba(255,255,255,0.78)", lineHeight: 1.55 }}>
                        <span style={{ width: 4, height: 4, borderRadius: 4, background: "var(--yellow)", marginTop: 8, flexShrink: 0 }} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`@media (max-width: 880px) { .grid-caps { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Box B */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <Reveal>
            <Callout label="Box B" title="DFCRC estimates: A$24B/year of economic upside" tone="green">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 6 }} className="grid-econ">
                <Mini label="Better markets" v="A$10B" hint="Liquidity, price discovery, lower intermediation costs" />
                <Mini label="Better payments" v="A$8B" hint="Atomic settlement, reduced reconciliation, lower failures" />
                <Mini label="Better assets" v="A$6B" hint="Improved functionality of real-world assets in tokenised form" />
              </div>
              <p style={{ marginTop: 18, color: "var(--text-muted)" }}>
                On the current trajectory (~4% of RWAs tokenised by 2030), DFCRC expects only ~A$1B per annum would be realised. Fixed-income
                markets alone are estimated to generate ~A$2B p.a. in gains.
              </p>
              <style>{`@media (max-width: 720px) { .grid-econ { grid-template-columns: 1fr !important; } }`}</style>
            </Callout>
          </Reveal>
        </div>
      </section>

      {/* Barriers */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <SectionHeading eyebrow="Adoption barriers" title="Why it hasn't happened yet — and what unblocks it." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="grid-barriers">
            {barriers.map((b, i) => (
              <Reveal key={b.title} delay={i * 50}>
                <div className="card" style={{ height: "100%" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--yellow)" }}>0{i + 1}</span>
                  <h3 style={{ margin: "8px 0 8px", fontSize: "1.1rem" }}>{b.title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 14 }}>{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`@media (max-width: 880px) { .grid-barriers { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>
    </>
  );
}

function Mini({ label, v, hint }: { label: string; v: string; hint: string }) {
  return (
    <div style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(141,240,204,0.14)", borderRadius: 12, padding: 16 }}>
      <div style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>{label}</div>
      <div className="stat-value" style={{ fontSize: "2.1rem", color: "var(--green)", marginTop: 6 }}>{v}</div>
      <div style={{ marginTop: 8, fontSize: 12.5, color: "var(--text-muted)" }}>{hint}</div>
    </div>
  );
}
