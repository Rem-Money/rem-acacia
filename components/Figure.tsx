import Image from "next/image";

export function Figure({
  src,
  alt,
  caption,
  source,
  width = 1600,
  height = 1000,
  background = "#f5f3ee",
}: {
  src: string;
  alt: string;
  caption?: string;
  source?: string;
  width?: number;
  height?: number;
  background?: string;
}) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          background,
          borderRadius: 14,
          border: "1px solid var(--border)",
          padding: 12,
          overflow: "hidden",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }}
        />
      </div>
      {(caption || source) && (
        <figcaption style={{ marginTop: 12, fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>
          {caption && <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>{caption}</span>}
          {caption && source && " · "}
          {source && <span>Source: {source}</span>}
        </figcaption>
      )}
    </figure>
  );
}
