import type { MetadataRoute } from "next";
import { products } from "@/lib/data";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/internship`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/careers`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${siteUrl}/products/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
