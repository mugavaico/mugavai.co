import type { Metadata } from "next";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description: `Explore careers at ${company.name} and join a team building modern enterprise software.`,
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
