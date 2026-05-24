import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Pill } from "@/components/Pill";
import { ChapterTOC } from "@/components/ChapterTOC";
import { FeaturePanel } from "@/components/FeaturePanel";

export const metadata = { title: "Legal & Regulatory" };

const legalAreas = [
  {
    title: "Legal structure of money",
    points: [
      "ESAs — contractual claims, free of counterparty risk.",
      "wCBDC — pilot under deed poll; production form still TBD.",
      "Stablecoins — contractual redemption claims; new tokenised SVF regime incoming.",
      "Deposit tokens — could mirror deposits; FCS coverage requires explicit declaration.",
    ],
  },
  {
    title: "Legal structure of assets",
    points: [
      "Digital twin dominant; digital native needs clarity on registers + finality.",
      "Digital Assets Framework Bill passed Apr 2026, commences Apr 2027 — introduces TCPs.",
      "MLETR implementation by AGD in progress — would enable digitised trade records as bearer instruments.",
      "Industry-standard contracts (à la ISDA Master, GMRA) could underpin cross-jurisdiction adoption.",
    ],
  },
  {
    title: "Settlement finality",
    points: [
      "Technical finality — depends on consensus mechanism (deterministic vs probabilistic).",
      "Legal finality — needs operating rules establishing record authority.",
      "PSNA 'approved RTGS systems' protect against the zero-hour rule — currently RITS, Austraclear, CHESS RTGS.",
      "DLT platforms would need PSNA approval for similar protection.",
    ],
  },
  {
    title: "Market-infrastructure regulation",
    points: [
      "DLT tightly integrates trading + settlement — current licensing regimes split them.",
      "Public-DLT 'no clear operator' raises perimeter questions.",
      "Some use cases interposed regulated entities (Fireblocks → ABE) to preserve operator clarity.",
      "Regulators open to engagement; additional ASIC guidance may follow.",
    ],
  },
  {
    title: "Financial products & services",
    points: [
      "ASIC Info Sheet 225 (Oct 2025) clarified digital-asset financial-product treatment.",
      "Incoming reforms add a 'look through' exemption for digital twins under TCPs.",
      "Specific characterisation (security / derivative / MIS / non-cash payment) still matters.",
    ],
  },
  {
    title: "Prudential treatment",
    points: [
      "Banks: awaiting clarity on Basel crypto-asset standard timing — affects capital + liquidity charges.",
      "Stress-testing for DLT-specific risks (network congestion, market fragmentation).",
      "Superannuation funds: valuation basis + operational risk questions for APRA.",
    ],
  },
];

const intlModels = [
  {
    name: "Project Guardian",
    place: "MAS, Singapore",
    body: "Multi-asset public-private initiative launched Jun 2022. Industry-published Guardian Fixed Income Framework + Guardian Funds Framework. Cross-border policymaker coordination.",
  },
  {
    name: "HKMA Supervisory Incubator for DLT",
    place: "Hong Kong",
    body: "Launched Jan 2025. A 'one-stop' supervisory platform letting banks iteratively validate risk controls in live trials. Supports Project Ensemble (tokenised deposits → wCBDC).",
  },
  {
    name: "Digital Securities Sandbox",
    place: "BoE / FCA, UK",
    body: "4-gate 'glidepath' — testing → live with limits → scaling → full authorisation outside the DSS. 16 applicants through Gate 1 by report date. Will host the DIGIT (Digital Gilt) pilot.",
  },
];

const tocSections = [
  { id: "areas", label: "Six focus areas" },
  { id: "sandbox", label: "Sandbox runway" },
  { id: "international", label: "International examples" },
  { id: "common", label: "Common features" },
];

export default function Regulation() {
  return (
    <>
      <ChapterTOC sections={tocSections} />

      <section className="section" style={{ paddingTop: 140 }}>
        <div className="container-rem">
          <Reveal>
            <Pill>Chapter 6 · Legal & regulatory considerations</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ margin: "20px 0 0", fontSize: "clamp(2rem, 5vw, 3.4rem)", maxWidth: 980, letterSpacing: "-0.03em" }}>
              Clarity is the prerequisite. Sandbox runway is the catalyst.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 18, maxWidth: 800 }}>
              Tokenisation raises issues current frameworks didn't anticipate — especially in post-trade. Acacia identified specific legal
              and regulatory areas needing attention, and surfaced clear feedback that time-bound regulatory relief isn't enough on its own.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Six legal/regulatory areas */}
      <section className="section" id="areas" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <SectionHeading eyebrow="Six focus areas" title="Where the work is." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="grid-areas">
            {legalAreas.map((a, i) => (
              <Reveal key={a.title} delay={i * 40}>
                <div className="card" style={{ height: "100%" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "var(--text-dim)", fontWeight: 700, fontSize: 22 }}>0{i + 1}</span>
                  <h3 style={{ margin: "8px 0 12px", fontSize: "1.15rem" }}>{a.title}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {a.points.map((p) => (
                      <li key={p} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "rgba(255,255,255,0.78)", lineHeight: 1.55 }}>
                        <span style={{ width: 4, height: 4, borderRadius: 4, background: "rgba(255,255,255,0.35)", marginTop: 8, flexShrink: 0 }} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`@media (max-width: 880px) { .grid-areas { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Sandbox theme — featured panel */}
      <section className="section" id="sandbox" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <Reveal>
            <FeaturePanel
              tone="cool"
              label="Industry feedback"
              title="Time-bound relief isn't enough."
            >
              <p style={{ marginTop: 0 }}>
                ASIC's project-level class relief and AUSTRAC's targeted exemptions were instrumental in enabling participation. But larger
                institutions reported that the project's timeframes weren't sufficient for internal risk + compliance reviews — some shifted from
                real-money pilots to PoCs mid-flight.
              </p>
              <p style={{ marginTop: 12 }}>
                The clear preference: longer-term <b>regulatory and innovation sandboxes</b> that can host commercialisation pathways, not just
                experiments. International models offer templates.
              </p>
            </FeaturePanel>
          </Reveal>
        </div>
      </section>

      {/* International examples */}
      <section className="section" id="international" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <SectionHeading
            eyebrow="Box H · International examples"
            title="What's working overseas."
            description="Different jurisdictions have used different regulatory levers, but a few features recur: longer timeframes, broad engagement, convening of market participants, and availability of safe assets (tokenised gov bonds, central bank money) for experimentation."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="grid-intl">
            {intlModels.map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <Pill tone="muted">{m.place}</Pill>
                  <h3 style={{ margin: "12px 0 10px", fontSize: "1.15rem" }}>{m.name}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 13.5, lineHeight: 1.55 }}>{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`@media (max-width: 880px) { .grid-intl { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Common features */}
      <section className="section" id="common" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <SectionHeading eyebrow="Common features" title="What good 'commercialisation pathway' regimes share." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="grid-2">
            <Reveal>
              <Feat title="Longer timeframes for experimentation" body="Initiatives spanning several years — or open-ended — give larger incumbents the 'runway' their internal compliance processes need." />
            </Reveal>
            <Reveal delay={50}>
              <Feat title="Regular, broad engagement" body="Ongoing two-way learning between regulated entities and supervisors. Acacia's IAG was praised as a model for this." />
            </Reveal>
            <Reveal delay={100}>
              <Feat title="Convening of market participants" body="Multi-party coordination on lifecycle issues — issuance, servicing, trading, settlement — where interdependencies are strong." />
            </Reveal>
            <Reveal delay={150}>
              <Feat title="Availability of safe assets" body="Tokenised government bonds and central bank money provide credible anchors for experimentation in systemic markets." />
            </Reveal>
          </div>
        </div>
      </section>


      <style>{`
        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function Feat({ title, body }: { title: string; body: string }) {
  return (
    <div className="card" style={{ height: "100%" }}>
      <h3 style={{ marginTop: 0, fontSize: "1.1rem" }}>{title}</h3>
      <p style={{ color: "var(--text-muted)", fontSize: 14 }}>{body}</p>
    </div>
  );
}
