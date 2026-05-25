"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

export type UseCaseModalTag = { label: string; color: string; bg: string; ring: string };

export type UseCaseModalData = {
  lead: string;
  name: string;
  type: "Pilot" | "PoC";
  tags: UseCaseModalTag[];
  network: { name: string; color: string };
  accent: { color: string; ring: string };
  summary?: string;
  mechanism?: string;
  findings?: string;
  participants?: string[];
  meta?: Array<{ label: string; value: ReactNode }>;
};

export function UseCaseDetailModal({ data, onClose }: { data: UseCaseModalData; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!mounted) return null;

  const { lead, name, type, tags, network, summary, mechanism, findings, participants, meta } = data;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${lead}: ${name}`}
      onClick={onClose}
      className="uc-modal-backdrop"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(4,8,12,0.72)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        zIndex: 1000,
        animation: "uc-fade 180ms ease-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="uc-modal-panel"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 640,
          maxHeight: "calc(100dvh - 24px)",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          background: "var(--card-bg)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14,
          boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--border)",
            color: "rgba(255,255,255,0.7)",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            lineHeight: 1,
            transition: "background 150ms ease, color 150ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            e.currentTarget.style.color = "rgba(255,255,255,0.7)";
          }}
        >
          ✕
        </button>

        <div className="uc-modal-head" style={{ padding: "28px 28px 18px" }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span>{lead}</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <TypeTag type={type} />
          </div>
          <h3
            style={{
              margin: "10px 0 0",
              fontFamily: "var(--font-display)",
              fontSize: 24,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "rgba(255,255,255,0.96)",
            }}
          >
            {name}
          </h3>

          {tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
              {tags.map((t, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    padding: "4px 9px",
                    borderRadius: 5,
                    background: t.bg,
                    color: t.color,
                    border: `1px solid ${t.ring}`,
                    lineHeight: 1.1,
                  }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="uc-modal-divider" style={{ height: 1, background: "var(--border)", margin: "0 28px" }} />

        <div className="uc-modal-body" style={{ padding: "20px 28px 8px" }}>
          {summary ? (
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.82)" }}>{summary}</p>
          ) : (
            <p style={{ margin: 0, fontSize: 13, fontStyle: "italic", color: "var(--text-dim)" }}>
              Write-up not yet available for this use case.
            </p>
          )}

          {(mechanism || findings || participants?.length || meta?.length) && (
            <dl style={{ margin: "18px 0 0", display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
              {meta?.map((m) => (
                <DetailRow key={m.label} label={m.label} value={m.value} />
              ))}
              {mechanism && <DetailRow label="Mechanism" value={mechanism} />}
              {findings && <DetailRow label="Outcome" value={findings} />}
              {participants && participants.length > 0 && (
                <DetailRow
                  label="Participants"
                  value={
                    <span style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {participants.map((p) => (
                        <span
                          key={p}
                          style={{
                            fontSize: 11,
                            padding: "3px 8px",
                            borderRadius: 100,
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid var(--border)",
                            color: "rgba(255,255,255,0.78)",
                          }}
                        >
                          {p}
                        </span>
                      ))}
                    </span>
                  }
                />
              )}
            </dl>
          )}
        </div>

        <div
          className="uc-modal-network"
          style={{
            margin: "20px 28px 24px",
            padding: "12px 14px",
            background: "rgba(0,0,0,0.25)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 8,
              background: network.color,
              boxShadow: `0 0 6px ${network.color}`,
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)", fontWeight: 700 }}>
            DLT network
          </span>
          <span style={{ marginLeft: "auto", fontSize: 12, color: "rgba(255,255,255,0.85)" }}>{network.name}</span>
        </div>
      </div>

      <style>{`
        @keyframes uc-fade { from { opacity: 0; } to { opacity: 1; } }
        .uc-modal-panel { animation: uc-pop 220ms cubic-bezier(.2,.7,.2,1); }
        @keyframes uc-pop {
          from { opacity: 0; transform: translateY(8px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .uc-modal-panel::-webkit-scrollbar { width: 8px; }
        .uc-modal-panel::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 8px; }
        @media (max-width: 520px) {
          .uc-modal-head { padding: 22px 18px 14px !important; }
          .uc-modal-divider { margin: 0 18px !important; }
          .uc-modal-body { padding: 16px 18px 6px !important; }
          .uc-modal-network { margin: 16px 18px 18px !important; }
          .uc-modal-detail-row { grid-template-columns: 1fr !important; gap: 4px !important; }
        }
      `}</style>
    </div>,
    document.body,
  );
}

function TypeTag({ type }: { type: "Pilot" | "PoC" }) {
  const pilot = type === "Pilot";
  return (
    <span
      style={{
        background: pilot ? "rgba(252,191,72,0.18)" : "transparent",
        border: `1px solid ${pilot ? "rgba(252,191,72,0.45)" : "rgba(255,255,255,0.22)"}`,
        color: pilot ? "var(--yellow)" : "rgba(255,255,255,0.7)",
        borderRadius: 100,
        fontSize: 9,
        fontWeight: 700,
        padding: "2px 7px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      {pilot ? "Pilot" : "PoC"}
    </span>
  );
}

function DetailRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="uc-modal-detail-row" style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 14, alignItems: "start" }}>
      <dt
        style={{
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--text-dim)",
          fontWeight: 700,
          paddingTop: 2,
        }}
      >
        {label}
      </dt>
      <dd style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: "rgba(255,255,255,0.82)" }}>{value}</dd>
    </div>
  );
}
