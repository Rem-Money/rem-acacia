import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCard } from "@/components/StatCard";
import { Figure } from "@/components/Figure";
import { Callout } from "@/components/Callout";
import { Pill } from "@/components/Pill";

export const metadata = { title: "Project Overview — Acacia" };

export default function ProjectOverview() {
  return (
    <>
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="container-rem">
          <Reveal>
            <Pill>Chapter 3 · Project Overview</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ margin: "20px 0 0", fontSize: "clamp(2rem, 5vw, 3.4rem)", maxWidth: 980, letterSpacing: "-0.03em" }}>
              Twenty industry-led experiments, run on real money and real assets.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 18, maxWidth: 760 }}>
              Phase 2 of Project Acacia ran from August 2025 to February 2026. Twelve pilots used real money. Eight ran as proofs of concept.
              All were selected for research alignment, potential economic impact, and the participant's capacity to deliver in scope.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Funnel + stats */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 36 }} >
          <Reveal>
            <div className="card" style={{ padding: 28 }}>
              <div className="eyebrow">Selection funnel</div>
              <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 12 }}>
                <FunnelRow value="~50" label="Expressions of interest" width="100%" />
                <FunnelRow value="40" label="RFI shortlist" width="80%" />
                <FunnelRow value="24" label="Conditionally selected" width="48%" />
                <FunnelRow value="20" label="Completed experiments" width="40%" highlight />
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <StatCard value="12" label="Pilots" hint="Real money + real assets" />
              <StatCard value="8" label="Proofs of concept" hint="Simulated transactions" accent="muted" />
              <StatCard value="8" label="Used pilot wCBDC" hint="Across 3 third-party DLT platforms" accent="green" />
              <StatCard value="A$4.4M" label="wCBDC issued" hint="Up to A$250k per transaction" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Use case landscape figure */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <SectionHeading
            eyebrow="Figure 1"
            title="The use case landscape."
            description="Use cases were arranged by asset class (fixed income / other) and by whether settlement used central-bank or private money. The infrastructure row sits below — AP+ explored token interchange and NPP integration."
          />
          <Reveal>
            <Figure
              src="/figures/figure-1-use-case-landscape.png"
              alt="Figure 1 — Project Acacia use case landscape"
              caption="Figure 1 — Project Acacia use case landscape, classifying all 20 use cases by asset class, settlement asset and DLT network."
              source="DFCRC / RBA"
            />
          </Reveal>
        </div>
      </section>

      {/* Pilot wCBDC details */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
          <Reveal>
            <div>
              <div className="eyebrow">Pilot wCBDC</div>
              <h2 style={{ margin: "10px 0 12px", fontSize: "1.8rem" }}>Real legal claim, third-party platforms, controlled issuance.</h2>
              <p style={{ color: "var(--text-muted)" }}>
                Distinct from the 2022–2023 CBDC Pilot, Acacia issued pilot wCBDC onto external DLT platforms. The implementation used ERC‑20 on
                EVM-compatible chains with embedded controls — mint/burn, pause transfers, allow/block addresses.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0 }}>
              <Spec k="Legal form" v="Real claim on the RBA, issued under a deed poll" />
              <Spec k="Denomination" v="Australian dollars · non-interest-bearing" />
              <Spec k="Eligibility" v="Australian residents/corporations qualifying as wholesale investors" />
              <Spec k="Platforms" v="AP+ HashSphere · Canvas Connect · Redbelly Network" />
              <Spec k="Distributors" v="ANZ · Banking Circle Australia · Cuscal" />
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <Reveal>
            <Callout label="Box D · Setup" title="Deposit Token Working Group (DTWG)">
              <p>
                In parallel with the experiments, a working group chaired by the DFCRC explored the legal and regulatory shape of bank deposit
                tokens. Banks: <b>ANZ, CBA, NAB, Westpac</b>. Observers: <b>RBA, ASIC, APRA, AUSTRAC, Treasury</b>. Legal support from Ashurst.
              </p>
              <p style={{ marginTop: 10 }}>
                Two transferability models were tested — a near-term <b>burn-and-reissue</b> approach and a more novel <b>assignable</b> model.
                See the Money chapter for the deeper breakdown.
              </p>
            </Callout>
          </Reveal>
          <Reveal delay={80}>
            <Callout label="Governance" title="Steering committee + regulatory relief" tone="muted">
              <p>
                The Steering Committee comprised senior representatives of the RBA, DFCRC, ASIC, APRA and Treasury. ASIC granted project-level
                class relief from licensing requirements; AUSTRAC granted exemptions from certain AML/CTF obligations for specific participants.
              </p>
              <p style={{ marginTop: 10 }}>
                An Industry Advisory Group (IAG) chaired by Tony Richards (DFCRC) brought together technology, operations, strategy and
                regulation experts from across the financial system.
              </p>
            </Callout>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FunnelRow({ value, label, width, highlight }: { value: string; label: string; width: string; highlight?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ width: 60, textAlign: "right", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: highlight ? "var(--yellow)" : "rgba(255,255,255,0.85)" }}>{value}</div>
      <div style={{ flex: 1, height: 30, background: "var(--card-bg-2)", borderRadius: 6, position: "relative", overflow: "hidden", border: "1px solid var(--border)" }}>
        <div style={{ position: "absolute", inset: 0, width, background: highlight ? "rgba(252,191,72,0.25)" : "rgba(255,255,255,0.06)", borderRight: highlight ? "1px solid var(--yellow)" : "1px solid rgba(255,255,255,0.12)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", paddingInline: 12, fontSize: 12.5, color: "rgba(255,255,255,0.85)" }}>{label}</div>
      </div>
    </div>
  );
}

function Spec({ k, v }: { k: string; v: string }) {
  return (
    <li className="card" style={{ padding: 14, borderRadius: 10, display: "grid", gridTemplateColumns: "150px 1fr", gap: 12 }}>
      <span style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-dim)" }}>{k}</span>
      <span style={{ fontSize: 14, color: "rgba(255,255,255,0.88)" }}>{v}</span>
    </li>
  );
}
