import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Pill } from "@/components/Pill";
import { RemCTA } from "@/components/RemCTA";

export const metadata = { title: "Road Ahead" };

type Stream = {
  name: string;
  tone: "yellow" | "green" | "muted";
  lead: string;
  initiatives: { n: number; title: string; body: string }[];
};

const streams: Stream[] = [
  {
    name: "Regulatory workstream",
    tone: "yellow",
    lead: "Intensify engagement between regulators and industry; resolve legal/regulatory barriers to responsible innovation.",
    initiatives: [
      {
        n: 1,
        title: "Inter-agency Regulator Working Group",
        body: "Ongoing forum across RBA, APRA, ASIC and Treasury to identify, analyse and resolve regulatory challenges relating to tokenisation.",
      },
      {
        n: 2,
        title: "Exploration of a DFMI sandbox",
        body: "RBA + ASIC + DFCRC will explore a stage-gated, longer-term sandbox specifically for tokenised finance and digital FMIs — distinct from ASIC's general ERS.",
      },
      {
        n: 3,
        title: "Tokenised government bond initiative",
        body: "Explore digitally native tokenised government bonds with central borrowing authorities. Could catalyse broader collateral mobility and repo innovation.",
      },
      {
        n: 4,
        title: "C-suite roundtable",
        body: "Executive-level forum on the future of tokenised finance — aligning on priorities and international context.",
      },
    ],
  },
  {
    name: "Industry workstream",
    tone: "green",
    lead: "Help industry overcome coordination challenges that have stymied wholesale-market dynamism.",
    initiatives: [
      {
        n: 5,
        title: "Joint Regulator-Industry Tokenisation Advisory Group",
        body: "The Acacia IAG reconstituted and expanded — a dedicated advisory forum and coordination body for industry priorities on tokenisation. EOIs to be invited.",
      },
      {
        n: 6,
        title: "Extension of the DTWG",
        body: "Continue exploring interoperable deposit tokens, with renewed call for participation to include banks not in Acacia. DFCRC continues to chair.",
      },
      {
        n: 7,
        title: "Other industry working groups (as required)",
        body: "Support deep-dive working groups on specific issues — particularly where coordination across the industry is essential (e.g. interoperability mechanisms).",
      },
    ],
  },
  {
    name: "RBA workstream",
    tone: "muted",
    lead: "Continue analysis of how new forms of money and settlement infrastructure could deliver efficiency and resilience benefits.",
    initiatives: [
      {
        n: 8,
        title: "Industry consultation on tokenised money + RITS",
        body: "Explore RITS capabilities — synchronised settlement, token interchange, new uses of ESAs. Feeds into broader RITS modernisation work.",
      },
      {
        n: 9,
        title: "Review of ESA policy",
        body: "Assess whether the RBA's current ESA policy and account structures remain fit for purpose after the payment service provider licensing reforms pass.",
      },
      {
        n: 10,
        title: "Further applied research on wCBDC",
        body: "Continue applied research, including potential provision of pilot wCBDC into the DFMI sandbox for appropriate use cases.",
      },
      {
        n: 11,
        title: "Cross-border payments exploration",
        body: "Work with international and domestic partners on how tokenised money and new RTGS uses could improve the speed and safety of cross-border payments.",
      },
    ],
  },
];

const totals = [
  { v: "11", l: "Initiatives" },
  { v: "3", l: "Workstreams" },
  { v: "5+", l: "Agencies + RBA" },
];

export default function RoadAhead() {
  return (
    <>
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="container-rem">
          <Reveal>
            <Pill>Chapter 7 · The road ahead</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ margin: "20px 0 0", fontSize: "clamp(2rem, 5vw, 3.4rem)", maxWidth: 980, letterSpacing: "-0.03em" }}>
              A multi-stream, multi-agency program of work.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 18, maxWidth: 800 }}>
              Eleven initiatives across three workstreams, with a shared objective: minimise unnecessary barriers and help industry safely move from
              ideation to commercialisation. Below is the full set, as outlined in Chapter 7.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="totals-strip" style={{ marginTop: 40, display: "inline-flex", flexWrap: "wrap", gap: 32, padding: "20px 28px", border: "1px solid var(--border)", borderRadius: 14, background: "var(--card-bg)" }}>
              {totals.map((t) => (
                <div key={t.l}>
                  <div className="stat-value" style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)" }}>{t.v}</div>
                  <div className="stat-label" style={{ marginTop: 6 }}>{t.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {streams.map((s, si) => (
        <section key={s.name} className="section" style={{ paddingTop: 0 }}>
          <div className="container-rem">
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                <Pill tone={s.tone}>{`Workstream ${String(si + 1).padStart(2, "0")}`}</Pill>
                <span style={{ color: "var(--text-dim)", fontSize: 13 }}>{`Initiatives ${s.initiatives[0].n}–${s.initiatives[s.initiatives.length - 1].n}`}</span>
              </div>
              <h2 style={{ margin: "0 0 8px", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>{s.name}</h2>
              <p className="lead" style={{ maxWidth: 800 }}>{s.lead}</p>
            </Reveal>
            <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: s.initiatives.length > 3 ? "repeat(2, 1fr)" : "repeat(3, 1fr)", gap: 16 }} className="grid-ini">
              {s.initiatives.map((it, i) => (
                <Reveal key={it.n} delay={i * 50}>
                  <div className="card" style={{ height: "100%", background: s.tone === "green" ? "var(--card-plus)" : "var(--card-bg)", borderColor: s.tone === "green" ? "rgba(141,240,204,0.18)" : "var(--border)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 8, display: "grid", placeItems: "center", background: s.tone === "green" ? "rgba(141,240,204,0.14)" : "rgba(252,191,72,0.12)", color: s.tone === "green" ? "var(--green)" : "var(--yellow)", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                        {String(it.n).padStart(2, "0")}
                      </div>
                      <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{it.title}</h3>
                    </div>
                    <p style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 0 }}>{it.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <style>{`@media (max-width: 880px) { .grid-ini { grid-template-columns: 1fr !important; } }`}</style>
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <Reveal>
            <div className="card feedback-card" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center", padding: 32 }}>
              <div>
                <div className="eyebrow">Feedback channel</div>
                <h3 style={{ margin: "10px 0 6px", fontSize: "clamp(1.2rem, 3.4vw, 1.5rem)" }}>Comments + feedback go to the RBA directly.</h3>
                <p style={{ color: "var(--text-muted)", margin: 0 }}>
                  Planning and preliminary engagement has already commenced on many initiatives. All comments can be directed to the project team.
                </p>
              </div>
              <a className="btn btn-primary" style={{ wordBreak: "break-all", textAlign: "center" }} href="mailto:ProjectAcacia@rba.gov.au">ProjectAcacia@rba.gov.au</a>
            </div>
          </Reveal>
        </div>
      </section>

      <RemCTA variant="road-ahead" />

      <style>{`
        @media (max-width: 640px) {
          .totals-strip { padding: 16px 18px !important; gap: 20px !important; }
          .feedback-card { grid-template-columns: 1fr !important; padding: 22px !important; }
        }
      `}</style>
    </>
  );
}
