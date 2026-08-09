import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/data";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl"
    >
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(to right, ${product.color}, transparent)` }}
      />
      <div
        className="absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-50"
        style={{ background: product.color }}
      />

      <div className="relative">
        <span
          className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
          style={{ backgroundColor: `${product.color}15`, color: product.color }}
        >
          {product.category}
        </span>
        <h2 className="mt-6 text-3xl font-bold text-gray-900">{product.name}</h2>
        <p className="mt-5 leading-7 text-gray-600">{product.tagline}</p>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-500">{product.description}</p>

        <div className="mt-10 flex items-center justify-between">
          <span className="font-semibold" style={{ color: product.color }}>
            Explore Product
          </span>
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45"
            style={{ backgroundColor: `${product.color}20` }}
          >
            <ArrowUpRight size={20} style={{ color: product.color }} />
          </div>
        </div>
      </div>
    </Link>
  );
}