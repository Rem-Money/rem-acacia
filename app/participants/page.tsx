import type { Metadata } from "next";
import { routeByPath } from "@/lib/seo";
import ParticipantsClient from "./ParticipantsClient";

const route = routeByPath["/participants"];

export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: "/participants" },
};

export default function ParticipantsPage() {
  return <ParticipantsClient />;
}
