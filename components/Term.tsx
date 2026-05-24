"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  term?: string;
  definition: string;
  children?: React.ReactNode;
};

export function Term({ term, definition, children }: Props) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const [mounted, setMounted] = useState(false);
  const tipId = useId();

  useEffect(() => setMounted(true), []);

  useLayoutEffect(() => {
    if (!open || !triggerRef.current) return;
    const place = () => {
      const r = triggerRef.current!.getBoundingClientRect();
      setCoords({
        top: r.bottom + 8,
        left: r.left + r.width / 2,
      });
    };
    place();
    window.addEventListener("scroll", place, { passive: true });
    window.addEventListener("resize", place);
    return () => {
      window.removeEventListener("scroll", place);
      window.removeEventListener("resize", place);
    };
  }, [open]);

  useEffect(() => {
    if (!pinned) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPinned(false);
        setOpen(false);
      }
    };
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        tipRef.current?.contains(target)
      ) {
        return;
      }
      setPinned(false);
      setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [pinned]);

  const label = children ?? term;
  const accessibleTerm = term ?? (typeof children === "string" ? children : undefined);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-describedby={open ? tipId : undefined}
        aria-expanded={open}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => {
          if (!pinned) setOpen(false);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          if (!pinned) setOpen(false);
        }}
        onClick={(e) => {
          e.preventDefault();
          setPinned((p) => {
            const next = !p;
            setOpen(next);
            return next;
          });
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setPinned((p) => {
              const next = !p;
              setOpen(next);
              return next;
            });
          }
        }}
        style={{
          display: "inline",
          padding: 0,
          margin: 0,
          background: "transparent",
          border: "none",
          color: "inherit",
          font: "inherit",
          cursor: "help",
          textDecoration: "underline dotted",
          textUnderlineOffset: "3px",
          textDecorationColor: "rgba(255,255,255,0.32)",
          textDecorationThickness: "1px",
        }}
      >
        {label}
      </button>
      {mounted && open && coords &&
        createPortal(
          <div
            ref={tipRef}
            id={tipId}
            role="tooltip"
            style={{
              position: "fixed",
              top: coords.top,
              left: coords.left,
              transform: "translateX(-50%)",
              maxWidth: 280,
              minWidth: 180,
              padding: "10px 12px",
              background: "rgba(17,17,17,0.98)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 8,
              boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              zIndex: 200,
              animation: "fade-in 140ms var(--ease-out-quart)",
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => {
              if (!pinned) setOpen(false);
            }}
          >
            {accessibleTerm && (
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                {accessibleTerm}
              </div>
            )}
            <div
              style={{
                fontSize: 12.5,
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.88)",
              }}
            >
              {definition}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
