"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Briefcase,
  ArrowRight,
  Users,
  Globe,
  Building2,
  Code2,
  BookOpen,
  Wallet,
  HeartPulse,
  TrendingUp,
} from "lucide-react";

import { jobs } from "@/lib/data";

export default function CareersPage() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const locations = useMemo(
    () => [...new Set(jobs.map((j) => j.location))],
    []
  );

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchKeyword = job.title
        .toLowerCase()
        .includes(keyword.toLowerCase());

      const matchLocation = location
        ? job.location === location
        : true;

      return matchKeyword && matchLocation;
    });
  }, [keyword, location]);

  return (
    <main className="relative overflow-hidden ">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />

        <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-300/20 blur-[140px]" />

      </div>

      {/* HERO */}

      <section className="relative mx-auto max-w-7xl px-6 pt-24 pb-24">

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center rounded-full border  border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">

            Careers at Mugavai.co

          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">

            Build software that

            <span className="block bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">

              powers modern businesses.

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">

            Join a passionate team building enterprise SaaS products
            that thousands of users rely on every day.

          </p>

        </div>

      </section>

      {/* STATS */}

      <section className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-4">

          {[
            {
              icon: Users,
              title: "120+",
              text: "Team Members",
            },
            {
              icon: Briefcase,
              title: `${filteredJobs.length}`,
              text: "Open Positions",
            },
            {
              icon: Globe,
              title: "Remote",
              text: "Friendly",
            },
            {
              icon: Building2,
              title: "Enterprise",
              text: "Projects",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <item.icon
                className="mb-5 text-pink-600"
                size={32}
              />

              <h3 className="text-4xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-500">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* SEARCH */}

      <section className="mx-auto mt-24 max-w-7xl px-6">

        <div className="rounded-[36px] border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,.08)] backdrop-blur">

          <div className="grid gap-5 lg:grid-cols-4">

            <div className="relative lg:col-span-2">

              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                value={keyword}
                onChange={(e) =>
                  setKeyword(e.target.value)
                }
                placeholder="Search jobs..."
                className="w-full rounded-2xl border border-gray-200 py-4 pl-14 pr-5 outline-none focus:border-pink-500"
              />

            </div>

            <select
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
              className="rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-pink-500"
            >

              <option value="">
                All Locations
              </option>

              {locations.map((loc) => (

                <option
                  key={loc}
                  value={loc}
                >
                  {loc}
                </option>

              ))}

            </select>

            <button className="rounded-2xl bg-linear-to-r from-pink-600 to-purple-600 text-white font-semibold transition hover:scale-[1.02]">

              Search Jobs

            </button>

          </div>

        </div>

      </section>
      {/* ============================
          OPEN POSITIONS
      ============================ */}

      <section className="mx-auto mt-24 max-w-7xl px-6">

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">

          <div>

            <span className="inline-flex items-center rounded-full border  border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">
              OPEN POSITIONS
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Join our growing team
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              Find a role that matches your passion and help build products
              used by businesses around the world.
            </p>

          </div>

          <div className="rounded-2xl bg-gray-100 px-5 py-3 text-sm font-medium text-gray-600">
            {filteredJobs.length} Open Position
            {filteredJobs.length !== 1 && "s"}
          </div>

        </div>

        {/* JOB LIST */}

        <div className="mt-14 space-y-8">

          {filteredJobs.length > 0 ? (

            filteredJobs.map((job) => (

              <div
                key={job.id}
                className="group relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl"
              >

                {/* Top Gradient */}

                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-pink-600 via-purple-600 to-blue-600" />

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                  {/* Left */}

                  <div className="flex-1">

                    <div className="flex flex-wrap gap-3">

                      <span className="rounded-full bg-pink-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-pink-700">
                        Full Time
                      </span>

                      <span className="rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                        Engineering
                      </span>

                    </div>

                    <h3 className="mt-6 text-3xl font-bold text-gray-900 transition group-hover:text-pink-600">
                      {job.title}
                    </h3>

                    <div className="mt-5 flex flex-wrap items-center gap-6">

                      <div className="flex items-center gap-2 text-gray-500">

                        <MapPin
                          size={18}
                          className="text-pink-600"
                        />

                        {job.location}

                      </div>

                      <div className="flex items-center gap-2 text-gray-500">

                        <Briefcase
                          size={18}
                          className="text-pink-600"
                        />

                        Professional Experience

                      </div>

                    </div>

                    <p className="mt-6 max-w-3xl leading-8 text-gray-600">
                      Join our talented engineering team to build
                      enterprise-grade SaaS products that help
                      organizations automate, innovate and scale.
                    </p>

                  </div>

                  {/* Right */}

                  <div className="flex flex-col items-start gap-5 lg:items-end">

                    <div className="rounded-full bg-gray-100 px-5 py-3 ">

                      <span className="font-semibold text-gray-700 ">
                        Immediate Hiring
                      </span>

                    </div>

                    <Link
                      href={`/careers/${job.id}/apply`}
                      className="inline-flex items-center gap-3 rounded-full  bg-black px-6 py-3 font-medium text-white  hover:bg-gray-800  transition-all duration-300 hover:scale-105"
                    >
                      Apply Now

                      <ArrowRight
                        size={20}
                        className="transition group-hover:translate-x-1"
                      />

                    </Link>

                  </div>

                </div>

              </div>

            ))

          ) : (

            <div className="rounded-[32px] border border-dashed border-gray-300 bg-gray-50 py-20 text-center">

              <Briefcase
                size={60}
                className="mx-auto text-gray-300"
              />

              <h3 className="mt-6 text-3xl font-bold text-gray-800">
                No jobs found
              </h3>

              <p className="mt-4 text-gray-500">
                Try another keyword or location.
              </p>

            </div>

          )}

        </div>

      </section>
      {/* ==============================
          WHY JOIN MUGAVAI
      =============================== */}

      <section className="relative mt-12 py-12">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center rounded-full border  border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">
              WHY MUGAVAI?
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              A workplace where your career thrives.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We believe great products are built by great people. At Mugavai,
              you&apos;ll work on meaningful projects with modern technologies while
              continuously growing your career.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: Code2,
                title: "Modern Tech Stack",
                desc: "Build enterprise SaaS products using the latest technologies including .NET, React, Next.js, AI and Cloud.",
              },
              {
                icon: Globe,
                title: "Flexible Work",
                desc: "Work from the office or remotely depending on your team and project requirements.",
              },
              {
                icon: BookOpen,
                title: "Continuous Learning",
                desc: "Certification support, workshops, technical sessions and mentorship from experienced engineers.",
              },
              {
                icon: Wallet,
                title: "Competitive Salary",
                desc: "Performance-driven compensation with annual appraisals and recognition programs.",
              },
              {
                icon: HeartPulse,
                title: "Health Benefits",
                desc: "Comprehensive medical insurance and wellness initiatives for employees.",
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                desc: "Clear career paths with opportunities to move into technical or leadership roles.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 aspect-square ">
                    <Icon className="h-6 w-6 text-pink-600" />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ==============================
          OUR HIRING PROCESS
      =============================== */}

      <section className="py-12">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="inline-flex items-center rounded-full border  border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">
              HIRING PROCESS
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              What to expect
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              A simple and transparent recruitment process.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                step: "01",
                title: "Apply",
                desc: "Submit your application online.",
              },
              {
                step: "02",
                title: "Interview",
                desc: "Meet our technical and hiring teams.",
              },
              {
                step: "03",
                title: "Assessment",
                desc: "Complete a practical technical challenge.",
              },
              {
                step: "04",
                title: "Offer",
                desc: "Receive your offer and join the team.",
              },
            ].map((item) => (

              <div
                key={item.step}
                className="relative rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <span className="text-6xl font-extrabold text-pink-100">
                  {item.step}
                </span>

                <h3 className="mt-6 text-2xl font-bold">
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

    </main>
  );
}