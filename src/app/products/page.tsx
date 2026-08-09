import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Boxes, ShieldCheck } from "lucide-react";
import { products, company } from "@/lib/data";
import { PageBackdrop } from "@/components/PageBackdrop";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Products",
  description: `Browse the full ${company.name} suite: ${products
    .map((p) => p.name)
    .join(", ")}.`,
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <section className="relative overflow-hidden bg-white">
      <PageBackdrop />

      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Enterprise SaaS Products"
          title="Products that work"
          accent="better together."
          description={`Discover the complete ${company.name} platform designed to simplify enterprise operations, automate workflows, and help teams move faster.`}
          className="pt-4"
        />

        {/* Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border bg-white/80 p-8 shadow-sm backdrop-blur">
            <Boxes className="mb-4 h-8 w-8 text-pink-600" />
            <h3 className="text-3xl font-bold">{products.length}+</h3>
            <p className="mt-2 text-gray-600">
              Enterprise-grade Products
            </p>
          </div>

          <div className="rounded-3xl border bg-white/80 p-8 shadow-sm backdrop-blur">
            <ShieldCheck className="mb-4 h-8 w-8 text-green-600" />
            <h3 className="text-3xl font-bold">99.9%</h3>
            <p className="mt-2 text-gray-600">
              Reliable & Secure Infrastructure
            </p>
          </div>

          <div className="rounded-3xl border bg-white/80 p-8 shadow-sm backdrop-blur">
            <Sparkles className="mb-4 h-8 w-8 text-yellow-500" />
            <h3 className="text-3xl font-bold">One Platform</h3>
            <p className="mt-2 text-gray-600">
              Connected Experiences
            </p>
          </div>
        </div>

        {/* Products */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* CTA */}

        <div className="mt-32 rounded-[40px] bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 px-10 py-20 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold">
            Ready to build with {company.name}?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Combine our products into a single integrated platform or deploy
            them individually to solve your most important business challenges.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-gray-900 transition hover:scale-105"
          >
            Talk to our team
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}