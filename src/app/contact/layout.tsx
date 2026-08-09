import type { Metadata } from "next";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${company.name} about enterprise software, automation, and digital transformation solutions.`,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
