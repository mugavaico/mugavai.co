import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/data";
import { absoluteUrl, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Mugavai | Enterprise Software & B2B SaaS Solutions",
    template: "%s | Mugavai",
  },

  description:
    "Mugavai is an enterprise software and B2B SaaS company building cloud applications, business automation, AI solutions, and digital transformation platforms.",

  keywords: [
    "Mugavai",
    "Mugavai Technologies",
    "Mugavai.co",
    "Mugavai software",
    "Mugavai SaaS",
    "Mugavai enterprise software",
    "enterprise software",
    "B2B SaaS",
    "business automation",
    "cloud applications",
    "workflow automation",
    "AI solutions",
    "digital transformation",
  ],

  authors: [
    {
      name: company.legalName,
      url: siteUrl,
    },
  ],

  creator: company.legalName,
  publisher: company.legalName,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Mugavai.co",
    title: "Mugavai.co | Enterprise Software & B2B SaaS Solutions",
    description:
      "Mugavai builds enterprise software, B2B SaaS platforms, cloud applications, business automation, and digital transformation solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mugavai - Enterprise Software & B2B SaaS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mugavai | Enterprise Software & B2B SaaS Solutions",
    description:
      "Enterprise software, B2B SaaS, cloud applications and digital transformation solutions by Mugavai.",
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
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/mugavai.png",
    apple: "/mugavai.png",
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
    logo: absoluteUrl("/mugavai.png"),
    foundingDate: company.founded,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "Ramanathapuram",
      addressRegion: "Tamil Nadu",
      postalCode: "623501",
      addressCountry: "IN",
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
