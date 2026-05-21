import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: 80, padding: "60px 24px 40px" }}>
      <div className="container-rem" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.025em" }}>
            Project Acacia<span style={{ color: "var(--yellow)" }}>.</span>
          </div>
          <p style={{ marginTop: 12, color: "var(--text-muted)", maxWidth: 380, fontSize: 14 }}>
            An interactive dashboard interpreting the Reserve Bank of Australia &amp; Digital Finance CRC's final report on
            wholesale tokenised asset markets. May 2026.
          </p>
        </div>
        <FootCol title="Sections" links={[
          ["/", "Overview"],
          ["/introduction", "Global Context"],
          ["/project", "Project Overview"],
          ["/tokenisation", "Asset Tokenisation"],
        ]} />
        <FootCol title="Deeper" links={[
          ["/money", "Forms of Money"],
          ["/regulation", "Legal & Regulatory"],
          ["/road-ahead", "Road Ahead"],
          ["/use-cases", "Use Cases"],
        ]} />
        <FootCol title="Source" links={[
          ["mailto:ProjectAcacia@rba.gov.au", "Contact RBA"],
          ["https://www.rba.gov.au", "rba.gov.au"],
          ["https://dfcrc.com.au", "dfcrc.com.au"],
        ]} />
      </div>
      <div className="container-rem" style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", color: "var(--text-dim)", fontSize: 12 }}>
        <span>© Reserve Bank of Australia 2026 — dashboard for educational interpretation.</span>
        <span>ISBN 978-1-7645772-2-9 (Online)</span>
      </div>
      <style>{`
        @media (max-width: 700px) { footer > div:first-of-type { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 400px) { footer > div:first-of-type { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

function FootCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 14 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map(([href, label]) => (
          <li key={href}>
            <Link href={href} style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
