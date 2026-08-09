import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Check,
  Activity,
  ShieldCheck,
  Sparkles,
  Zap,
  Database,
  BarChart3,
} from "lucide-react";

import { company, products } from "@/lib/data";

type Params = {
  slug: string;
};

export function generateStaticParams(): Params[] {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) return {};

  return {
    title: `${product.name} — ${product.category}`,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | ${company.name}`,
      description: product.description,
      url: `https://www.mugavai.co/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) notFound();

  const otherProducts = products.filter(
    (p) => p.slug !== product.slug
  );

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    description: product.description,
    operatingSystem: "Web",
    brand: {
      "@type": "Organization",
      name: company.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />

      {/* HERO */}

      <section className="relative overflow-hidden bg-white">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />

          <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[140px]" />

          <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-300/20 blur-[140px]" />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* LEFT */}

            <div>

              <span
                className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  color: product.color,
                  background: `${product.color}15`,
                }}
              >
                {product.category}
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
                {product.name}
              </h1>

              <p className="mt-8 text-2xl font-medium text-gray-700">
                {product.tagline}
              </p>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                {product.description}
              </p>

              <div className="mt-12 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="rounded-full px-8 py-4 bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 text-white font-semibold shadow-xl transition hover:scale-105"
                >
                  Request Demo
                </Link>

                <Link
                  href="/products"
                  className="rounded-full border border-gray-300 px-7 py-3.5 font-semibold transition hover:border-purple-500 hover:text-purple-600"
                >
                  Compare Products
                </Link>

              </div>

              <div className="mt-14 flex flex-wrap gap-8">

                <div>
                  <p className="text-4xl font-bold">99.99%</p>
                  <p className="text-gray-500">
                    Uptime
                  </p>
                </div>

                <div>
                  <p className="text-4xl font-bold">
                    24/7
                  </p>
                  <p className="text-gray-500">
                    Monitoring
                  </p>
                </div>

                <div>
                  <p className="text-4xl font-bold">
                    Enterprise
                  </p>
                  <p className="text-gray-500">
                    Ready
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="rounded-[36px] border border-white/60 bg-white/80 p-8 shadow-[0_40px_80px_rgba(0,0,0,.12)] backdrop-blur">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-lg font-bold">
                      Live Dashboard
                    </p>

                    <p className="text-gray-500">
                      Real-time monitoring
                    </p>

                  </div>

                  <Activity
                    size={32}
                    style={{
                      color: product.color,
                    }}
                  />

                </div>

                <div className="mt-10 space-y-6">

                  <div className="rounded-2xl bg-gray-100 p-5">

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="font-semibold">
                          System Health
                        </p>

                        <p className="text-sm text-gray-500">
                          All services healthy
                        </p>

                      </div>

                      <span className="rounded-full bg-green-100 px-3 py-1 text-green-600">
                        Healthy
                      </span>

                    </div>

                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-2xl bg-gray-100 p-6">

                      <Database
                        className="mb-3"
                        style={{
                          color: product.color,
                        }}
                      />

                      <p className="text-3xl font-bold">
                        12.5M
                      </p>

                      <p className="text-sm text-gray-500">
                        Transactions
                      </p>

                    </div>

                    <div className="rounded-2xl bg-gray-100 p-6">

                      <BarChart3
                        className="mb-3"
                        style={{
                          color: product.color,
                        }}
                      />

                      <p className="text-3xl font-bold">
                        +48%
                      </p>

                      <p className="text-sm text-gray-500">
                        Performance
                      </p>

                    </div>

                  </div>

                  <div className="rounded-2xl bg-gray-100 p-6">

                    <div className="flex items-center gap-3">

                      <ShieldCheck
                        style={{
                          color: product.color,
                        }}
                      />

                      <div>

                        <p className="font-semibold">
                          Security
                        </p>

                        <p className="text-sm text-gray-500">
                          Enterprise Grade Protection
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="bg-gray-50 py-20">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">

          {[
            {
              icon: Activity,
              title: product.stat.value,
              text: product.stat.label,
            },
            {
              icon: Zap,
              title: "Real Time",
              text: "Analytics",
            },
            {
              icon: ShieldCheck,
              title: "99.99%",
              text: "Availability",
            },
            {
              icon: Sparkles,
              title: "AI Powered",
              text: "Automation",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <item.icon
                className="mb-5"
                style={{
                  color: product.color,
                }}
              />

              <h3 className="text-3xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-500">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>
      {/* =========================
    FEATURES
========================= */}

      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0">
          <div
            className="absolute left-0 top-20 h-72 w-72 rounded-full blur-[120px] opacity-10"
            style={{ background: product.color }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                color: product.color,
                backgroundColor: `${product.color}15`,
              }}
            >
              FEATURES
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Everything you need in one platform
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Powerful capabilities designed for modern enterprises.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, index) => {
              const icons = [
                Activity,
                Database,
                ShieldCheck,
                BarChart3,
                Zap,
                Sparkles,
              ];

              const Icon = icons[index % icons.length];

              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-transparent hover:shadow-2xl"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{
                      background: `linear-gradient(to right, ${product.color}, transparent)`,
                    }}
                  />

                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${product.color}15`,
                    }}
                  >
                    <Icon
                      size={28}
                      style={{
                        color: product.color,
                      }}
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {feature.body}
                  </p>

                  <div className="mt-8 flex items-center gap-2 font-semibold">
                    <span style={{ color: product.color }}>
                      Learn More
                    </span>

                    <ArrowUpRight
                      size={18}
                      style={{ color: product.color }}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <div
                    className="absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                    style={{
                      background: product.color,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ======================================================
    WHY CHOOSE THIS PRODUCT
====================================================== */}

      <section className="bg-linear-to-b from-gray-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <span
                className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  color: product.color,
                  backgroundColor: `${product.color}15`,
                }}
              >
                WHY {product.name.toUpperCase()}
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                Built for modern enterprise teams.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                {product.name} helps organizations automate workflows,
                improve visibility, reduce manual effort, and scale with
                confidence. Designed with security, performance and
                simplicity at its core.
              </p>

              <div className="mt-10 space-y-6">

                {[
                  "Enterprise-grade security",
                  "Real-time analytics & monitoring",
                  "Easy integration with existing systems",
                  "Cloud-native architecture",
                  "High availability & scalability",
                  "Fast implementation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${product.color}15`,
                      }}
                    >
                      <Check
                        size={18}
                        style={{
                          color: product.color,
                        }}
                      />
                    </div>

                    <div>

                      <h4 className="font-semibold text-gray-900">
                        {item}
                      </h4>

                      <p className="mt-1 text-gray-500">
                        Built to deliver reliable business outcomes at scale.
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div className="grid gap-6 sm:grid-cols-2">

              {[
                {
                  icon: Activity,
                  title: "Real-Time Monitoring",
                  value: "24/7",
                },
                {
                  icon: Database,
                  title: "Processed Records",
                  value: "12.5M+",
                },
                {
                  icon: ShieldCheck,
                  title: "Availability",
                  value: "99.99%",
                },
                {
                  icon: Zap,
                  title: "Automation",
                  value: "AI Powered",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${product.color}15`,
                    }}
                  >
                    <card.icon
                      size={28}
                      style={{
                        color: product.color,
                      }}
                    />
                  </div>

                  <h3 className="mt-8 text-4xl font-bold">
                    {card.value}
                  </h3>

                  <p className="mt-3 text-gray-500">
                    {card.title}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
    PRODUCT CAPABILITIES
====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span
              className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                color: product.color,
                backgroundColor: `${product.color}15`,
              }}
            >
              CAPABILITIES
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Everything your business needs.
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Flexible, scalable and built for enterprise environments.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: Activity,
                title: "Live Monitoring",
                desc: "Track business activities in real time with intelligent dashboards.",
              },
              {
                icon: Database,
                title: "Centralized Data",
                desc: "Keep all operational data synchronized and accessible.",
              },
              {
                icon: ShieldCheck,
                title: "Enterprise Security",
                desc: "Role-based access, encryption and compliance-ready architecture.",
              },
              {
                icon: BarChart3,
                title: "Analytics",
                desc: "Gain valuable insights through reports and visual dashboards.",
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                desc: "Reduce repetitive work using configurable automation.",
              },
              {
                icon: Sparkles,
                title: "AI Insights",
                desc: "Identify trends and anomalies using intelligent recommendations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: `${product.color}15`,
                  }}
                >
                  <item.icon
                    size={28}
                    style={{
                      color: product.color,
                    }}
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
      {/* ======================================================
    ENTERPRISE BENEFITS
====================================================== */}

      <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
        <div
          className="absolute -left-32 top-10 h-96 w-96 rounded-full blur-[140px] opacity-20"
          style={{ background: product.color }}
        />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">
            <span
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                color: "#fff",
                background: `${product.color}55`,
              }}
            >
              ENTERPRISE READY
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Built for organizations that never stop growing.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Whether you're managing thousands of employees,
              millions of transactions or multiple business units,
              {` ${product.name}`} scales effortlessly.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "99.99%",
                subtitle: "Availability",
              },
              {
                title: "24/7",
                subtitle: "Monitoring",
              },
              {
                title: "Enterprise",
                subtitle: "Security",
              },
              {
                title: "Cloud",
                subtitle: "Native",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:bg-white/10"
              >
                <h3 className="text-5xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-300">
                  {item.subtitle}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
    INTEGRATIONS
====================================================== */}

      <section className="py-24 bg-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                color: product.color,
                backgroundColor: `${product.color}15`,
              }}
            >
              INTEGRATIONS
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Connect with your favorite tools
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Easily integrate with your existing ecosystem.
            </p>

          </div>

          <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">

            {[
              "Microsoft",
              "Azure",
              "AWS",
              "Salesforce",
              "SAP",
              "Slack",
              "Teams",
              "Oracle",
              "HubSpot",
              "Power BI",
              "REST API",
              "SQL",
            ].map((item) => (

              <div
                key={item}
                className="flex h-28 items-center justify-center rounded-3xl border border-gray-200 bg-white text-lg font-semibold shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================================
    TESTIMONIALS
====================================================== */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                color: product.color,
                backgroundColor: `${product.color}15`,
              }}
            >
              TESTIMONIALS
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Trusted by enterprise teams
            </h2>

          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {[
              {
                company: "Enterprise Corp",
                quote:
                  "This product transformed the way we manage operations.",
                person: "John Smith",
                role: "CTO",
              },
              {
                company: "Global Industries",
                quote:
                  "Implementation was fast and our productivity increased immediately.",
                person: "Sarah Johnson",
                role: "IT Director",
              },
              {
                company: "Future Systems",
                quote:
                  "Reliable, scalable and backed by an excellent support team.",
                person: "Michael Lee",
                role: "Engineering Manager",
              },
            ].map((item) => (

              <div
                key={item.company}
                className="rounded-3xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="mb-6 flex text-yellow-400">

                  ★★★★★

                </div>

                <p className="text-lg leading-8 text-gray-700">
                  "{item.quote}"
                </p>

                <div className="mt-10">

                  <h4 className="font-bold">
                    {item.person}
                  </h4>

                  <p className="text-gray-500">
                    {item.role}
                  </p>

                  <p
                    className="mt-4 font-semibold"
                    style={{
                      color: product.color,
                    }}
                  >
                    {item.company}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ======================================================
    FAQ
====================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">

          <div className="text-center">
            <span
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                color: product.color,
                backgroundColor: `${product.color}15`,
              }}
            >
              FAQ
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Everything you need to know about {product.name}.
            </p>
          </div>

          <div className="mt-16 space-y-6">

            {[
              {
                q: "Is this product suitable for enterprises?",
                a: "Yes. It is designed to scale from small teams to large enterprises with high availability and security.",
              },
              {
                q: "Can it integrate with existing systems?",
                a: "Absolutely. REST APIs and standard integrations make deployment simple.",
              },
              {
                q: "Is onboarding difficult?",
                a: "No. Most organizations can get started quickly with guided implementation.",
              },
              {
                q: "Does it support cloud deployment?",
                a: "Yes. It supports modern cloud-native deployment models.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-gray-900">
                  {faq.q}
                </summary>

                <p className="mt-4 leading-7 text-gray-600">
                  {faq.a}
                </p>
              </details>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
    MORE PRODUCTS
====================================================== */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Explore More Products
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Discover the complete {company.name} ecosystem.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {otherProducts.map((p) => (

              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-transparent hover:shadow-2xl"
              >

                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{
                    background: `linear-gradient(to right, ${p.color}, transparent)`,
                  }}
                />

                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    color: p.color,
                    backgroundColor: `${p.color}15`,
                  }}
                >
                  {p.category}
                </span>

                <h3 className="mt-6 text-2xl font-bold">
                  {p.name}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {p.tagline}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold">
                  <span style={{ color: p.color }}>
                    Learn More
                  </span>

                  <ArrowUpRight
                    size={18}
                    style={{
                      color: p.color,
                    }}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================================
    FINAL CTA
====================================================== */}

      <section className="relative overflow-hidden py-28">

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${product.color}, #111827)`,
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center text-white">

          <h2 className="text-5xl font-bold leading-tight md:text-6xl">
            Ready to transform your business?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/85">
            Discover how {product.name} can streamline your operations,
            improve productivity, and help your organization scale with confidence.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition hover:scale-105"
            >
              Request a Demo
            </Link>

            <Link
              href="/products"
              className="rounded-full border border-white/40 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
            >
              View All Products
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}