import type { Metadata } from "next";
import { routeByPath } from "@/lib/seo";
import UseCasesClient from "./UseCasesClient";

const route = routeByPath["/use-cases"];

export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: "/use-cases" },
};

export default function UseCasesPage() {
  return <UseCasesClient />;
}
