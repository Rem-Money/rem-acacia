import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCard } from "@/components/StatCard";
import { Callout } from "@/components/Callout";
import { Pill } from "@/components/Pill";
import { Graph1RwaGrowth } from "@/components/figures/Graph1RwaGrowth";
import { Graph2MmfMarket } from "@/components/figures/Graph2MmfMarket";

export const metadata = { title: "Global Context — Project Acacia" };

export default function Introduction() {
  return (
    <>
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="container-rem">
          <Reveal>
            <Pill>Chapter 2 · Introduction</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{ margin: "20px 0 0", fontSize: "clamp(2rem, 5vw, 3.4rem)", maxWidth: 900, letterSpacing: "-0.03em" }}>
              Tokenisation is moving from experiment to infrastructure.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 18, maxWidth: 760 }}>
              Stablecoin issuance has crossed the third of a trillion mark. Tokenised real-world assets are climbing. Central banks and
              exchanges are running serious pilots. Australia's wholesale markets sit in a system that hasn't been recomposed in a generation —
              and Project Acacia asked what role digital money should play in rewriting it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Global stats */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <SectionHeading eyebrow="Global momentum" title="The numbers behind the moment." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="gstats">
            <StatCard value="US$320B+" label="Stablecoin issuance" hint="May 2026, primarily USD non-bank issuers" />
            <StatCard value="US$30B+" label="Tokenised RWAs" hint=">80% in private credit + US Treasuries" />
            <StatCard value="US$30T" label="Potential by mid-2030s" hint="Some analyst forecasts of tokenised RWAs" accent="green" />
            <StatCard value="US$368B/d" label="Broadridge DLR repo volume" hint="April 2026 average daily volume" accent="muted" />
          </div>
          <style>{`
            @media (max-width: 900px) { .gstats { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 480px) { .gstats { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* Graph 1 */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 36, alignItems: "center" }}>
          <Reveal>
            <Graph1RwaGrowth />
          </Reveal>
          <Reveal delay={80}>
            <div>
              <div className="eyebrow">Where the activity is</div>
              <h2 style={{ margin: "10px 0 16px", fontSize: "1.8rem" }}>Fixed income is the centre of gravity.</h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: 14, paddingLeft: 0, listStyle: "none" }}>
                <Bullet>
                  <b>Public-sector issuances</b> — Hong Kong digital green bonds, EIB €100M, Slovenia €30M, World Bank/SNB CHF200M.
                </Bullet>
                <Bullet>
                  <b>Private-sector</b> — Siemens €300M; KfW across Clearstream D7 and SIX; JPM tokenised commercial paper on Solana settling in USDC.
                </Bullet>
                <Bullet>
                  <b>Tokenised MMFs</b> — ~US$15B across 66 products, 62k+ investors. BlackRock BUIDL ~$2.4B; Franklin Templeton BENJI ~$2.2B.
                </Bullet>
                <Bullet>
                  <b>Collateral mobility</b> — Broadridge DLR averaged US$368B/day in repo volume in April 2026.
                </Bullet>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Graph 2 */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <Reveal>
            <Graph2MmfMarket />
          </Reveal>
        </div>
      </section>

      {/* Box A */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <Reveal>
            <Callout label="Box A" title="International tokenisation initiatives — focus on fixed income">
              <p style={{ marginTop: 0 }}>
                Fixed income — particularly government bonds — is regarded as the major asset class likely to benefit from tokenisation.
                Bonds are an estimated US$110T market; government bonds are also collateral, benchmark, and safe-asset bedrock. Tokenised MMFs
                have emerged as another prominent application, alongside collateral-mobility platforms like JPM's Tokenised Collateral Network
                and Broadridge's DLR.
              </p>
            </Callout>
          </Reveal>
        </div>
      </section>

      {/* Australian context */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-rem">
          <SectionHeading eyebrow="Australia" title="A short — and still nascent — local history." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="grid-context">
            <Mini year="2018" name="CBA Bond-i" desc="World's first bond issued + managed throughout its lifecycle on DLT, with the World Bank." />
            <Mini year="2022" name="ANZ stablecoin" desc="First A$DC stablecoin payment — early commercial-bank exploration of tokenised money." />
            <Mini year="2022–23" name="CBDC Pilot" desc="RBA + DFCRC's first wholesale CBDC pilot, exploring early use cases on a central platform." />
            <Mini year="2024–26" name="Project Acacia" desc="Twenty industry-led use cases. The pilot wCBDC issued onto third-party DLT platforms for the first time." />
          </div>
          <style>{`
            @media (max-width: 880px) { .grid-context { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 480px) { .grid-context { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>
    </>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <span style={{ width: 6, height: 6, borderRadius: 6, background: "var(--yellow)", marginTop: 9, flexShrink: 0 }} />
      <span style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.6, fontSize: 15 }}>{children}</span>
    </li>
  );
}

function Mini({ year, name, desc }: { year: string; name: string; desc: string }) {
  return (
    <div className="card" style={{ padding: 18 }}>
      <div style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--yellow)", fontWeight: 700 }}>{year}</div>
      <div style={{ marginTop: 6, fontFamily: "var(--font-display)", fontSize: 18, letterSpacing: "-0.02em" }}>{name}</div>
      <div style={{ marginTop: 8, color: "var(--text-muted)", fontSize: 13, lineHeight: 1.55 }}>{desc}</div>
    </div>
  );
}
