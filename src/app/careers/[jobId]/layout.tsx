import type { Metadata } from "next";
import { jobs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Job Application",
  robots: {
    index: false,
    follow: false,
  },
};

export function generateStaticParams() {
  return jobs.map((job) => ({ jobId: job.id }));
}

export default function JobLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}