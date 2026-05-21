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
    title: "Twenty experiments. One question — who builds the next twenty?",
    body: "rem partners with issuers, banks and infrastructure providers to turn tokenised finance pilots into live wholesale rails.",
  },
  introduction: {
    eyebrow: "Build with rem",
    title: "Tokenisation is moving from experiment to infrastructure. Move with it.",
    body: "rem helps institutions step into the global tokenisation curve — RWA issuance, programmable money rails, on-chain market connectivity.",
  },
  project: {
    eyebrow: "Build with rem",
    title: "From pilot to production wholesale rails.",
    body: "rem builds the integration layer between traditional FMIs, DLT platforms and digital money — so the next Acacia-class pilot can graduate into a live market.",
  },
  tokenisation: {
    eyebrow: "Build with rem",
    title: "Tokenise an asset class — without the bespoke build-out.",
    body: "rem ships the issuance, custody and lifecycle plumbing for tokenised fixed income, securitised products and private markets, across DLT platforms used by Acacia participants.",
  },
  money: {
    eyebrow: "Build with rem",
    title: "Wire up the money leg.",
    body: "rem connects wCBDC, ESAs, deposit tokens and stablecoins to the DLT platforms where tokenised assets live — synchronisation, bridges, on/off-chain orchestration.",
  },
  regulation: {
    eyebrow: "Build with rem",
    title: "Navigate the sandbox.",
    body: "rem partners with issuers and infrastructure providers preparing submissions to the DFMI sandbox and ASIC ERS — designing experiments that satisfy settlement finality, prudential and AML/CTF lenses.",
  },
  "road-ahead": {
    eyebrow: "Build with rem",
    title: "Join the program. Don't watch it.",
    body: "Across all eleven post-Acacia initiatives — sandbox, deposit token interoperability, tokenised government bonds, cross-border — rem is building the connective tissue. Get in early.",
  },
  "use-cases": {
    eyebrow: "Build with rem",
    title: "See a use case that maps to your business? Let's build it.",
    body: "From tokenised corporate bonds to carbon credits to private markets — rem has built integrations across Redbelly, Canvas, Hedera, Ethereum L2s and more. Bring the asset; we'll bring the rails.",
  },
  participants: {
    eyebrow: "Build with rem",
    title: "Want to be on the next cohort list?",
    body: "rem helps prospective participants architect their tokenisation thesis, choose DLT platforms, line up settlement assets, and prepare for the next round of industry experiments.",
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
                Tokenised finance, built end-to-end.
              </span>
            </div>
          </div>
        </Reveal>

        <style>{`
          @media (max-width: 720px) {
            .rem-cta { grid-template-columns: 1fr !important; padding: 26px !important; }
            .rem-cta-actions { align-items: flex-start !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
