import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type Variant =
  | "overview"
  | "introduction"
  | "project"
  | "tokenisation"
  | "money"
  | "regulation"
  | "road-ahead"
  | "use-cases"
  | "participants";

const COPY: Record<Variant, { eyebrow: string; title: string; body: string }> = {
  overview: {
    eyebrow: "Build with rem",
    title: "The pilots are done. The build is just starting.",
    body: "rem is the strategic partner for issuers, banks and market infrastructure teams turning Acacia's lessons into production wholesale rails.",
  },
  introduction: {
    eyebrow: "Build with rem",
    title: "Tokenisation is moving from experiment to infrastructure. Move with it.",
    body: "If your team is thinking about RWA issuance, programmable money rails, or on-chain market connectivity -  let's talk about what a first step could look like.",
  },
  project: {
    eyebrow: "Build with rem",
    title: "From pilot to production.",
    body: "rem partners with teams trying to move beyond a one-off pilot -  mapping out what production-grade tokenised market infrastructure could look like for your asset and your stakeholders.",
  },
  tokenisation: {
    eyebrow: "Build with rem",
    title: "Tokenise an asset class -  with a partner who has read the room.",
    body: "Whether you're exploring fixed income, securitised products, private markets or carbon -  we'll help you think through the right DLT, the lifecycle, the disclosure, and what an honest MVP looks like.",
  },
  money: {
    eyebrow: "Build with rem",
    title: "Think through the money leg.",
    body: "wCBDC, ESAs, deposit tokens, regulated stablecoins -  the choice of settlement asset shapes everything else. rem can help you reason about which combination fits your use case and what synchronisation actually requires.",
  },
  regulation: {
    eyebrow: "Build with rem",
    title: "Plan for the sandbox.",
    body: "If you're thinking about a DFMI sandbox or ASIC ERS submission, rem can help you frame the experiment so the settlement-finality, prudential and AML/CTF questions are answered before the regulator has to ask.",
  },
  "road-ahead": {
    eyebrow: "Build with rem",
    title: "Join the program. Don't watch it.",
    body: "Eleven post-Acacia initiatives are in motion -  sandbox, deposit token interoperability, tokenised government bonds, cross-border. If any of them touch your roadmap, let's talk early.",
  },
  "use-cases": {
    eyebrow: "Build with rem",
    title: "See a use case that maps to your business? Let's talk.",
    body: "Corporate bonds, securitised products, private markets, carbon -  if a pattern from the cohort looks adjacent to what you're building, we'd like to hear about it and think it through with you.",
  },
  participants: {
    eyebrow: "Build with rem",
    title: "Want to be on the next cohort list?",
    body: "rem can help prospective participants frame a tokenisation thesis, think through DLT and settlement-asset choices, and prepare for the next round of industry experiments.",
  },
};

export function RemCTA({ variant }: { variant: Variant }) {
  const copy = COPY[variant];
  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: 24 }}>
      <div className="container-rem">
        <Reveal>
          <div
            className="rem-cta"
            style={{
              position: "relative",
              background:
                "linear-gradient(135deg, rgba(252,191,72,0.06) 0%, rgba(141,240,204,0.05) 100%), var(--card-plus)",
              border: "1px solid rgba(252,191,72,0.2)",
              borderRadius: 20,
              padding: 36,
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 28,
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.4,
                pointerEvents: "none",
                background:
                  "radial-gradient(600px 200px at 0% 0%, rgba(252,191,72,0.10), transparent 60%), radial-gradient(500px 180px at 100% 100%, rgba(141,240,204,0.08), transparent 60%)",
              }}
            />
            <div style={{ position: "relative", minWidth: 0 }}>
              <div
                className="eyebrow"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "var(--yellow)",
                }}
              >
                <Image
                  src="/rem.png"
                  alt=""
                  width={14}
                  height={14}
                  style={{ borderRadius: 3, display: "block" }}
                />
                {copy.eyebrow}
              </div>
              <h3
                style={{
                  margin: "10px 0 10px",
                  fontSize: "clamp(1.35rem, 2.4vw, 1.75rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  maxWidth: 720,
                }}
              >
                {copy.title}
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  margin: 0,
                  maxWidth: 680,
                  fontSize: 14.5,
                  lineHeight: 1.6,
                }}
              >
                {copy.body}
              </p>
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                alignItems: "flex-end",
              }}
              className="rem-cta-actions"
            >
              <Link className="btn btn-primary" href="/with-rem" style={{ whiteSpace: "nowrap" }}>
                Talk to rem →
              </Link>
              <span style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.02em" }}>
                A conversation, not a pitch.
              </span>
            </div>
          </div>
        </Reveal>

        <style>{`
          @media (max-width: 720px) {
            .rem-cta { grid-template-columns: 1fr !important; padding: 26px !important; gap: 20px !important; }
            .rem-cta-actions { align-items: flex-start !important; }
          }
          @media (max-width: 480px) {
            .rem-cta { padding: 20px !important; border-radius: 16px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
