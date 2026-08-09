import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Boxes,
  ShieldCheck,
} from "lucide-react";
import { products, company } from "@/lib/data";

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
      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />

        <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-300/20 blur-[140px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border  border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">
            Enterprise SaaS Products
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
            Products that work
            <br />
            <span className="bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              better together.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            Discover the complete {company.name} platform designed to simplify
            enterprise operations, automate workflows, and help teams move
            faster.
          </p>
        </div>

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
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl"
            >
              {/* Gradient */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{
                  background: `linear-gradient(to right, ${product.color}, transparent)`,
                }}
              />

              {/* Glow */}
              <div
                className="absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-50"
                style={{
                  background: product.color,
                }}
              />

              <div className="relative">
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                  style={{
                    backgroundColor: `${product.color}15`,
                    color: product.color,
                  }}
                >
                  {product.category}
                </span>

                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  {product.name}
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  {product.tagline}
                </p>

                {product.description && (
                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-500">
                    {product.description}
                  </p>
                )}

                <div className="mt-10 flex items-center justify-between">
                  <span
                    className="font-semibold"
                    style={{ color: product.color }}
                  >
                    Explore Product
                  </span>

                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45"
                    style={{
                      backgroundColor: `${product.color}20`,
                    }}
                  >
                    <ArrowUpRight
                      size={20}
                      style={{
                        color: product.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>
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