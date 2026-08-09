import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Calendar,
  Globe,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { RibbonDivider } from "@/components/Ribbon";
import { CtaButtons } from "@/components/CtaButtons";
import { FeatureCard } from "@/components/FeatureCard";
import { PageBackdrop } from "@/components/PageBackdrop";
import { StatCard } from "@/components/StatCard";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.name}, our mission, story and enterprise software products.`,
  alternates: {
    canonical: "/about",
  },
};

const stats = [
  {
    icon: Calendar,
    label: "Founded",
    value: company.founded,
  },
  {
    icon: Globe,
    label: "Headquarters",
    value: company.hq,
  },
  {
    icon: Building2,
    label: "Development Center",
    value: company.devCenter,
  },
  {
    icon: Sparkles,
    label: "Customers",
    value: company.customers,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}

      <section className="relative overflow-hidden bg-white px-6 pt-24 pb-24">

        <PageBackdrop />

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div className="relative">

              <span className="inline-flex items-center rounded-full border  border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">
                About Mugavai
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
                Building software that powers
                <span className="block bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  modern businesses.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                {company.name} develops enterprise software that helps
                organizations automate operations, improve productivity,
                simplify collaboration and scale confidently in the digital era.
              </p>

              <CtaButtons
                className="mt-10"
                items={[
                  { href: "/products", label: "Explore Products" },
                  { href: "/contact", label: "Contact Us", variant: "secondary" },
                ]}
              />

            </div>

            {/* Right */}

            <div className="relative">

              <div className="rounded-[36px] border border-orange-100 bg-white p-10 shadow-2xl">

                <div className="grid grid-cols-2 gap-6">

                  {stats.map((item) => (
                    <StatCard key={item.label} {...item} />
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <RibbonDivider />

      {/* Story */}

      <section className="px-6 py-12">

        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

          {/* Image */}

          <div className="relative">

            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-purple-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-gray-200 bg-linear-to-r from-pink-600 to-purple-600 p-12 text-white shadow-2xl">

              <p className="text-sm uppercase tracking-[0.25em] text-orange-100">
                Our Journey
              </p>

              <h2 className="mt-6 text-4xl font-bold">
                From an idea to an enterprise software company.
              </h2>

              <p className="mt-6 text-lg leading-8 text-orange-100">
                We believe software should solve real business problems—not
                create new ones.
              </p>

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-600">
              Our Story
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Why we started Mugavai
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Mugavai was founded with a simple vision—to build enterprise
              software that is powerful, reliable and easy to use.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Instead of creating isolated applications, we design integrated
              solutions that work together seamlessly, helping organizations
              automate workflows, improve visibility and accelerate growth.
            </p>

            <div className="mt-10 space-y-8">
              {/* Timeline */}

              {[
                {
                  year: company.founded,
                  title: "Founded",
                  description:
                    "Started with a vision to simplify enterprise software.",
                },
                {
                  year: "Today",
                  title: "Growing Platform",
                  description:
                    "Developing modern cloud solutions for businesses worldwide.",
                },
                {
                  year: "Future",
                  title: "Global Expansion",
                  description:
                    "Building AI-powered enterprise products for the next generation.",
                },
              ].map((item) => (
                <div key={item.year} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 font-semibold text-pink-600 shadow-lg">
                      ✓
                    </div>

                    {item.year !== "Future" && (
                      <div className="mt-2 h-16 w-px bg-purple-200" />
                    )}
                  </div>

                  <div className="pb-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
                      {item.year}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Values */}

      <section className=" px-6 py-12">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-600">
              Our Values
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Principles that guide everything we build.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Every product we create is driven by simplicity, reliability,
              innovation and customer success.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                body:
                  "Modern cloud-native solutions designed for today's enterprises.",
              },
              {
                icon: HeartHandshake,
                title: "Customer First",
                body:
                  "Customer success drives every decision we make.",
              },
              {
                icon: ShieldCheck,
                title: "Reliability",
                body:
                  "Enterprise-grade security, scalability and dependable performance.",
              },
            ].map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.body}
              />
            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="px-6 py-12">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-20 lg:grid-cols-2">

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-600">
                Why Mugavai
              </span>

              <h2 className="mt-5 text-4xl font-bold text-gray-900">
                Built for businesses that expect more.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We create enterprise software focused on long-term value,
                performance and user experience.
              </p>

            </div>

            <div className="grid gap-6 sm:grid-cols-2">

              {[
                "Cloud Native",
                "Enterprise Security",
                "API First",
                "AI Ready",
                "Scalable Architecture",
                "Dedicated Support",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 font-semibold text-pink-600 shadow-lg">
                    ✓
                  </div>

                  <span className="font-semibold text-gray-900">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>
      {/* Leadership */}

      <section className=" px-6 py-12">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-600">
              Leadership
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Driven by passionate builders.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Behind every Mugavai product is a team of engineers, designers,
              product thinkers and customer champions committed to building
              software that businesses love to use.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {[
              {
                name: "Founder & CEO",
                role: "Vision, Strategy & Product",
              },
              {
                name: "Engineering Team",
                role: "Building secure and scalable platforms",
              },
              {
                name: "Customer Success",
                role: "Helping customers grow with confidence",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-slate-300 bg-purple-50 text-3xl font-bold text-slate-400">
                  {member.name.charAt(0)}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="relative overflow-hidden px-6 py-12">

        <div className="relative mx-auto max-w-5xl text-center text-black">

          <span className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]">
            Let&apos;s Build Together
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
            Ready to transform your business?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-500">
            Whether you&apos;re looking for enterprise software, cloud solutions,
            digital transformation or custom platforms, we&apos;d love to hear from
            you.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/careers"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              Join Our Team
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
            >
              Contact Us
            </Link>


          </div>

        </div>
      </section>

    </>
  );
}