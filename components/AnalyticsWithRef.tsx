"use client";

import { Analytics } from "@vercel/analytics/next";

export function AnalyticsWithRef() {
  return (
    <Analytics
      beforeSend={(event) => {
        try {
          const url = new URL(event.url);
          const ref = url.searchParams.get("ref");
          // Strip all query params except `ref` so page views aggregate cleanly
          // but `?ref=linkedin` (etc.) still shows up as its own row in Pages.
          const cleaned = new URL(url.origin + url.pathname);
          if (ref) cleaned.searchParams.set("ref", ref);
          return { ...event, url: cleaned.toString() };
        } catch {
          return event;
        }
      }}
    />
  );
}
