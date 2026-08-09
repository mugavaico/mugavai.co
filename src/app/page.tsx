import Link from "next/link";
import { ArrowUpRight, Factory, GraduationCap, Headset, HeartPulse, Hotel, Landmark, Layers3, ShieldCheck, ShoppingBag, Workflow } from "lucide-react";
import { RibbonDivider } from "@/components/Ribbon";
import { company, products } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden px-6 pt-28 pb-28">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />

          <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[140px]" />

          <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-300/20 blur-[140px]" />

        </div>

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50  px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">
                Enterprise SaaS Platform
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-7xl">

                Build.

                <span className="block bg-linear-to-r from-pink-600 to-purple-600  bg-clip-text text-transparent">
                  Scale.
                </span>

                Automate.

              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                Mugavai helps organizations automate business processes,
                improve productivity and build enterprise-grade digital
                solutions from a single platform.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
                >
                  Explore Products
                </Link>

                <Link
                  href="/contact"
                  className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
                >
                  Book Demo
                </Link>

              </div>

              {/* Statistics */}

              <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">

                {[
                  ["500+", "Customers"],
                  ["10+", "Products"],
                  ["99.9%", "Uptime"],
                  ["24/7", "Support"],
                ].map(([value, label]) => (

                  <div key={label}>

                    <div className="text-3xl font-bold text-purple-600">
                      {value}
                    </div>

                    <div className="mt-2 text-sm text-gray-500">
                      {label}
                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* Right */}

            <div className="relative">

              <div className="rounded-[36px] border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur">

                <div className="rounded-3xl bg-linear-to-r from-pink-600 to-purple-600 p-8 text-white">

                  <h3 className="text-3xl font-bold">
                    Mugavai Platform
                  </h3>

                  <p className="mt-4 text-purple-100">
                    One platform for enterprise automation,
                    cloud applications and digital transformation.
                  </p>

                </div>

                <div className="mt-8 space-y-5">

                  {[
                    "Cloud Native",
                    "Enterprise Security",
                    "API First",
                    "AI Ready",
                    "Scalable Architecture",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 font-semibold text-pink-600 shadow-lg">
                        ✓
                      </div>

                      <span className="font-semibold text-gray-800">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <RibbonDivider />
      {/* ================= TRUSTED BY ================= */}

      <section className="px-6 py-12">

        <div className="mx-auto max-w-7xl">

          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
            Trusted by growing businesses
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 opacity-70 md:grid-cols-3 lg:grid-cols-6">

            {[
              "Microsoft",
              "Google",
              "AWS",
              "Oracle",
              "SAP",
              "Azure",
            ].map((brand) => (
              <div
                key={brand}
                className="flex h-16 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 text-lg font-bold text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
              >
                {brand}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY MUGAVAI ================= */}

      <section className="px-6 py-12">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50  px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">
              Why Mugavai
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Enterprise software built for
              <span className="block bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                speed, security & scale.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              We combine modern cloud technologies with enterprise-grade reliability
              to help businesses automate operations and accelerate digital
              transformation.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                icon: Workflow,
                title: "Business Automation",
                text: "Automate repetitive workflows, streamline operations, and improve productivity across your organization.",
              },
              {
                icon: ShieldCheck,
                title: "Enterprise Security",
                text: "Protect your business with secure, scalable, and compliance-ready solutions designed for enterprise environments.",
              },
              {
                icon: Layers3,
                title: "Integrated Platform",
                text: "Connect applications, teams, and data through a unified platform that simplifies business management.",
              },
              {
                icon: Headset,
                title: "Dedicated Support",
                text: "Our experts work alongside your team to ensure successful implementation, adoption, and long-term success.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-pink-600" />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {item.text}
                  </p>

                </div>

              )
            })}

          </div>

        </div>

      </section>

      {/* ================= PREMIUM STATS ================= */}

      <section className="px-6 py-12">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                value: "500+",
                label: "Enterprise Customers",
              },
              {
                value: "10+",
                label: "Business Products",
              },
              {
                value: "99.9%",
                label: "Platform Availability",
              },
              {
                value: "24/7",
                label: "Technical Support",
              },
            ].map((item) => (

              <div
                key={item.label}
                className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
                  {item.value}
                </div>

                <div className="mt-4 text-gray-600">
                  {item.label}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ================= PRODUCT SHOWCASE ================= */}

      <section className="relative overflow-hidden px-6 py-12">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-200/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-pink-200/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="text-center">

            <span className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50  px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">
              Our Products
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Everything your business needs.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              From enterprise applications to cloud-native platforms, Mugavai
              delivers scalable software that grows with your organization.
            </p>

          </div>

          {/* Featured Product */}

          <div className="mt-20 overflow-hidden rounded-[36px] bg-linear-to-r from-pink-600 via-purple-600 to-blue-600  p-px shadow-2xl">

            <div className="grid items-center gap-12 rounded-[35px] bg-white p-10 lg:grid-cols-2">

              <div>

                <span className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50  px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">
                  Featured Platform
                </span>

                <h3 className="mt-8 text-4xl font-bold text-gray-900">
                  Mugavai Enterprise Suite
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  One integrated platform for automation, collaboration,
                  analytics, security and digital transformation.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/products"
                    className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
                  >
                    Explore Suite
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
                  >
                    Request Demo
                  </Link>

                </div>

              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                {[
                  "Cloud Platform",
                  "AI Automation",
                  "Business Analytics",
                  "Enterprise Security",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-purple-100 bg-purple-50 p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 font-semibold text-pink-600 shadow-lg">
                      ✓
                    </div>

                    <h4 className="mt-5 text-lg font-semibold text-gray-900">
                      {item}
                    </h4>
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ================= INDUSTRIES ================= */}

      <section className="px-6 py-12">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50  px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">
              Industries
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Built for every industry.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Whether you're a startup, enterprise or government organization,
              Mugavai provides secure and scalable business software.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: HeartPulse,
                title: "Healthcare",
                description:
                  "Hospital management, patient workflows, and digital healthcare solutions.",
              },
              {
                icon: Landmark,
                title: "Banking & Finance",
                description:
                  "Secure financial platforms with enterprise-grade compliance and risk management.",
              },
              {
                icon: Factory,
                title: "Manufacturing",
                description:
                  "Production planning, ERP integration, and factory automation solutions.",
              },
              {
                icon: Hotel,
                title: "Hospitality",
                description:
                  "Hotel booking, guest experience, and hospitality management platforms.",
              },
              {
                icon: GraduationCap,
                title: "Education",
                description:
                  "Learning management, student portals, and campus administration systems.",
              },
              {
                icon: ShoppingBag,
                title: "Retail",
                description:
                  "Inventory management, POS, eCommerce, and omnichannel retail solutions.",
              },
            ].map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-pink-600" />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-gray-900">
                    {industry.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {industry.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= BUSINESS SOLUTIONS ================= */}

      <section className="px-6 py-12">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            <div>

              <span className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50  px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">
                Solutions
              </span>

              <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Everything connected in one platform.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Replace disconnected applications with one secure ecosystem that
                helps your organization move faster and make better decisions.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Enterprise Resource Planning",
                  "Cloud Applications",
                  "Workflow Automation",
                  "Business Intelligence",
                  "Artificial Intelligence",
                  "Digital Transformation",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 font-semibold text-pink-600 shadow-lg">
                      ✓
                    </div>

                    <span className="font-semibold text-gray-900">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <div className="rounded-[36px] bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 p-px shadow-2xl">

                <div className="rounded-[35px] bg-white p-10">

                  <div className="grid gap-6 sm:grid-cols-2">

                    {[
                      ["99.9%", "Availability"],
                      ["24/7", "Support"],
                      ["500+", "Customers"],
                      ["10+", "Products"],
                    ].map(([value, label]) => (

                      <div
                        key={label}
                        className="rounded-2xl bg-purple-50 p-8 text-center"
                      >

                        <div className="text-4xl font-bold text-purple-600">
                          {value}
                        </div>

                        <div className="mt-2 text-gray-600">
                          {label}
                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}
