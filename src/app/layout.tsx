import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/data";
import "./globals.css";

const siteUrl = "https://www.mugavai.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Enterprise Software & B2B SaaS Suite`,
    template: `%s | ${company.name}`,
  },
  description: company.shortDescription,
  keywords: [
    "Mugavai",
    "Mugavai.co",
    "enterprise software",
    "B2B SaaS",
    "integration monitoring",
    "knowledge management software",
    "cloud monitoring",
    "customer success platform",
  ],
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | Enterprise Software & B2B SaaS Suite`,
    description: company.shortDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${company.name} — Enterprise Software & B2B SaaS Suite`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Enterprise Software & B2B SaaS Suite`,
    description: company.shortDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.name,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    foundingDate: company.founded,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "London",
      addressCountry: "GB",
    },
    sameAs: [company.social.linkedin, company.social.twitter],
  };

  return (
    <html lang="en">
      <body className="antialiased" cz-shortcut-listen="true">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
