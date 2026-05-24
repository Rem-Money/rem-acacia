import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Callout } from "@/components/Callout";
import { Pill } from "@/components/Pill";
import { RemCTA } from "@/components/RemCTA";
import { ChapterTOC } from "@/components/ChapterTOC";
import { FeaturePanel } from "@/components/FeaturePanel";
import { Term } from "@/components/Term";
import { Figure23DvpAtomic } from "@/components/figures/Figure23DvpAtomic";
import { Figure4Interchange } from "@/components/figures/Figure4Interchange";

export const metadata = { title: "Forms of Money" };

const otherForms = [
  {
    name: "ESA balances",
    sub: "Existing central bank money",
    bullets: [
      "Liabilities of the RBA — free of counterparty risk.",
      "Today's foundation for interbank settlement.",
      "Eligibility restricted to ADIs + select financial institutions.",
    ],
    tone: "yellow" as const,
  },
  {
    name: "Deposit tokens",
    sub: "Tokenised commercial bank money",
    bullets: [
      "Claim on issuing bank — leverages existing prudential oversight.",
      "DTWG examined two transferability models (Box D).",
      "Tested by CBA (repo) and ANZ (corporate bond + trade payable).",
    ],
    tone: "green" as const,
  },
  {
    name: "Stablecoins",
    sub: "Private tokenised money",
    bullets: [
      "Used: AUDM, AUDF, AUDD, RLUSD + project-issued.",
      "Issuer credit risk; lack of remuneration; new tokenised SVF regime incoming.",
      "Preferred by some when backed (partly/wholly) by central bank money.",
    ],
    tone: "green" as const,
  },
];

const wcbdcBullets = [
  "Pilot issued under a deed poll - real legal claim on the RBA.",
  "Enabled true atomic settlement and composable smart-contract flows.",
  "Production form still TBD - could be a digital twin of ESAs, or distinct.",
];

const dtwgModels = [
  {
    title: "Model 1 · Burn-and-reissue",
    summary: "Closer to today's payments. A deposit token isn't transferable to a non-customer — instead, an interbank payment is triggered and the original token is destroyed, with a new token issued by the payee's bank.",
    feasibility: "Near-term feasible · sits well within existing legal frameworks",
  },
  {
    title: "Model 2 · Assignable",
    summary: "Novel. Tokens are transferable/assignable across customers of participating banks. The payee receives the bank's token directly and interacts with it in their own bank's wallet.",
    feasibility: "Stretch · creates a bearer-instrument-like exposure with legal/regulatory friction",
  },
];

const synchroModels = [
  { title: "Lock asset → pay → transfer", note: "Westpac & Northern Trust used this. It's how Austraclear/CHESS work today." },
  { title: "Lock funds → transfer asset → settle", note: "PEXA's property settlement model today. Not explored in Acacia." },
  { title: "Lock multiple assets/funds across platforms", note: "BoE's renewed RTGS direction. Not tested in Acacia." },
];

const tocSections = [
  { id: "forms", label: "Four instruments" },
  { id: "atomic", label: "Atomic settlement" },
  { id: "dtwg", label: "Deposit-token models" },
  { id: "interchange", label: "Interchange" },
  { id: "wcbdc-dlt", label: "wCBDC on third-party DLT" },
];

export default function Money() {
  return (
    <>
      <ChapterTOC sections={tocSections} />

      <section className="section" style={{ paddingTop: 140 }}>
        <div className="container-rem">
          <Reveal>
            <Pill>Chapter 5 · Forms of money</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ margin: "20px 0 0", fontSize: "clamp(2rem, 5vw, 3.4rem)", maxWidth: 980, letterSpacing: "-0.03em" }}>
              Four forms of money. One two-tier monetary system.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 18, maxWidth: 800 }}>
              The project tested{" "}
              <Term term="ESA" definition="Exchange Settlement Account — an account at the RBA holding central bank money used for interbank settlement.">
                ESA
              </Term>{" "}
              balances, a pilot{" "}
              <Term term="wCBDC" definition="Wholesale Central Bank Digital Currency — a tokenised liability of the central bank, used between financial institutions rather than by the public.">
                wCBDC
              </Term>
              , stablecoins, and deposit tokens. Each plays a different role in supporting
              atomic settlement, composability, and the singleness of money in a tokenised ecosystem.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Four forms of money — asymmetric: featured wCBDC + 3 others */}
      <section className="section" id="forms" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <SectionHeading eyebrow="The four instruments" title="A field guide." />

          <Reveal>
            <FeaturePanel
              tone="warm"
              label="Headline · Wholesale CBDC"
              title="Tokenised central bank money — the new keystone."
              aside={
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {wcbdcBullets.map((b) => (
                    <li key={b} style={{ display: "flex", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.88)", lineHeight: 1.55 }}>
                      <span aria-hidden style={{ width: 5, height: 5, borderRadius: 5, background: "var(--yellow)", marginTop: 8, flexShrink: 0 }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              }
            >
              The pilot{" "}
              <Term term="wCBDC" definition="Wholesale Central Bank Digital Currency — a tokenised liability of the central bank, used between financial institutions rather than by the public.">
                wCBDC
              </Term>{" "}
              carried a real legal claim on the RBA and behaved as a programmable settlement asset across three third-party DLT
              platforms. It is the single instrument whose production form remains genuinely undecided — and the choice will shape how all the
              other forms compose around it.
            </FeaturePanel>
          </Reveal>

          <div
            style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
            className="grid-money-others"
          >
            {otherForms.map((f, i) => (
              <Reveal key={f.name} delay={i * 50}>
                <div
                  className="card"
                  style={{
                    height: "100%",
                    background: f.tone === "green" ? "var(--card-plus)" : "var(--card-bg)",
                    borderColor: f.tone === "green" ? "rgba(141,240,204,0.18)" : "var(--border)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                    <h3 style={{ margin: 0, fontSize: "1.15rem" }}>{f.name}</h3>
                    <Pill tone={f.tone === "green" ? "green" : "yellow"}>{f.tone === "yellow" ? "Public" : "Private"}</Pill>
                  </div>
                  <div style={{ marginTop: 4, color: "var(--text-muted)", fontSize: 13 }}>{f.sub}</div>
                  <ul style={{ marginTop: 16, listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {f.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "rgba(255,255,255,0.82)" }}>
                        <span style={{ width: 4, height: 4, borderRadius: 4, background: f.tone === "green" ? "var(--green)" : "rgba(255,255,255,0.4)", marginTop: 8 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 980px) { .grid-money-others { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 620px) { .grid-money-others { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* Atomic settlement / composability */}
      <section className="section" id="atomic" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <SectionHeading
            eyebrow="Box C · Composability"
            title="Atomic settlement vs. traditional DvP."
            description="In traditional markets, Delivery-versus-Payment is a chain of linked-but-separate steps across custodians, FMIs, and the RTGS. On a single tokenised platform, the whole chain can become a single all-or-nothing smart-contract operation — and interchange between different money tokens can happen inside the same atomic transaction."
          />
          <Reveal>
            <Figure23DvpAtomic />
          </Reveal>

          <div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }} className="grid-atomic">
            <Reveal>
              <div className="card" style={{ height: "100%" }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Worked example · NotCentralised</div>
                <h3 style={{ fontSize: "1.2rem", marginTop: 0 }}>Collateralised loan, atomic.</h3>
                <p style={{ color: "var(--text-muted)", fontSize: 14.5, lineHeight: 1.65 }}>
                  Loan, collateral and payment token composed into a single atomic transaction. Collateral released instantly on repayment —
                  no multi-system orchestration, no delays. The collateral never sits in a half-settled state where it could be re-pledged or
                  contested. This is what programmable money looks like when the legal and technical layers actually agree.
                </p>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div className="card" style={{ height: "100%" }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Worked example · Canvas</div>
                <h3 style={{ fontSize: "1.1rem", marginTop: 0 }}>Bond coupon, single transaction.</h3>
                <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
                  With the bond and money token on the same ledger, coupon calculation, distribution and settlement execute as one atomic
                  transaction governed by the bond token.
                </p>
              </div>
            </Reveal>
          </div>
          <style>{`@media (max-width: 880px) { .grid-atomic { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* DTWG models */}
      <section className="section" id="dtwg" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <SectionHeading
            eyebrow="Box D · Deposit Token Working Group"
            title="Two deposit-token transferability models."
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-2">
            {dtwgModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 60}>
                <div className="card" style={{ height: "100%" }}>
                  <Pill tone={i === 0 ? "green" : "muted"}>{i === 0 ? "Near-term" : "Stretch"}</Pill>
                  <h3 style={{ margin: "12px 0 8px", fontSize: "1.15rem" }}>{m.title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 14 }}>{m.summary}</p>
                  <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, background: "var(--card-bg-2)", fontSize: 12.5, color: "var(--text-muted)" }}>
                    {m.feasibility}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="card" style={{ marginTop: 20 }}>
              <div className="eyebrow">Policy clarifications likely needed</div>
              <ul style={{ marginTop: 14, listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }} className="grid-2">
                {[
                  "Confirm deposit token issuance falls within 'banking business' (Banking Act 1959).",
                  "Declare deposit tokens 'covered financial products' to extend Financial Claims Scheme coverage.",
                  "Exempt deposit-token platforms from 'financial product' classification.",
                  "Prescribe deposit tokens as not being 'virtual assets' under the AML/CTF Act.",
                ].map((s) => (
                  <li key={s} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "rgba(255,255,255,0.82)" }}>
                    <span style={{ width: 6, height: 6, borderRadius: 6, background: "var(--green)", marginTop: 8, flexShrink: 0 }} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interchange / Figure 4 */}
      <section className="section" id="interchange" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <SectionHeading
            eyebrow="Figure 4"
            title="Interchange between forms of private money."
            description="Use cases mostly aligned with Model E from the consultation paper — wCBDC plays the ESA-like role between issuers of different private monies. The Australian Payments Plus variant kept wCBDC on a private chain and used a 'white coin' digital twin on the public chain, with a synchroniser keeping them aligned."
          />
          <Reveal>
            <Figure4Interchange />
          </Reveal>

          <div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 16 }} className="grid-interchange">
            <Reveal>
              <div className="card" style={{ height: "100%" }}>
                <h3 style={{ marginTop: 0, fontSize: "1.1rem" }}>Bilateral interchange</h3>
                <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
                  Token issuers establish one-to-one arrangements. Easy for defined pairs, expensive to scale across many.
                </p>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div className="card" style={{ height: "100%", background: "var(--card-plus)", borderColor: "rgba(141,240,204,0.22)" }}>
                <div className="eyebrow eyebrow-green" style={{ marginBottom: 8 }}>Preferred model</div>
                <h3 style={{ marginTop: 0, fontSize: "1.2rem" }}>Multilateral interchange</h3>
                <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.65 }}>
                  Shared infrastructure + rules. Higher upfront cost, lower industry total cost. AP+ Token Interchange demonstrated a single
                  industry-wide utility — a public good rather than N² bilateral plumbing.
                </p>
              </div>
            </Reveal>
          </div>
          <style>{`@media (max-width: 880px) { .grid-interchange { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Box F + ESAs */}
      <section className="section" id="wcbdc-dlt" style={{ paddingTop: 0 }}>
        <div className="container-rem grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} >
          <Reveal>
            <Callout label="Box F" title="Issuing wCBDC onto third-party DLT">
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                <li><b>Transaction finality & ledger integrity</b> — private-permissioned easiest; public-permissioned feasible if deterministic; public-permissionless generally not viable for central banks.</li>
                <li><b>Governance & compliance</b> — central bank must exclusively control mint/burn and have visibility into validators.</li>
                <li><b>Integration</b> — EVM compatibility enabled the same wCBDC code to be reused across all platforms in the pilot.</li>
              </ul>
            </Callout>
          </Reveal>
          <Reveal delay={80}>
            <Callout label="Box G" title="Synchronisation mechanisms" tone="green">
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {synchroModels.map((m) => (
                  <li key={m.title}>
                    <b>{m.title}</b>
                    <div style={{ color: "var(--text-muted)", fontSize: 13.5, marginTop: 2 }}>{m.note}</div>
                  </li>
                ))}
              </ul>
            </Callout>
          </Reveal>
        </div>
      </section>

      <RemCTA variant="money" />

      <style>{`
        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
