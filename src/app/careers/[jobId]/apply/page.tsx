"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Building2,
  Sparkles,
  CheckCircle,
  Upload,
  User,
  Mail,
  Phone,
  Link2,
  CheckCircle2,
} from "lucide-react";

import { getJobById } from "@/lib/data";

const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+971", flag: "🇦🇪" },
];

type FormState = {
  fullName: string;
  countryCode: string;
  phone: string;
  email: string;
  gender: string;
  currentLocation: string;
  linkedinId: string;
  github: string;
  resumeFileName: string;
  agreed: boolean;
};

const initialState: FormState = {
  fullName: "",
  countryCode: "+91",
  phone: "",
  email: "",
  gender: "",
  currentLocation: "",
  linkedinId: "",
  github: "",
  resumeFileName: "",
  agreed: false,
};

export default function JobApplyPage() {
  const params = useParams<{ jobId: string }>();
  const router = useRouter();

  const job = getJobById(params.jobId);

  const [form, setForm] = useState<FormState>(initialState);

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim())
      next.fullName = "Please enter your full name.";

    if (!form.phone.trim())
      next.phone = "Phone number is required.";

    if (!form.email.trim())
      next.email = "Email address is required.";

    if (!form.linkedinId.trim())
      next.linkedinId = "LinkedIn profile is required.";

    if (!form.resumeFileName)
      next.resumeFileName = "Upload your resume.";

    if (!form.agreed)
      next.agreed = "Please accept the terms.";

    setErrors(next);

    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validate()) return;

    console.log(form);

    setSubmitted(true);
  }

  const isValidToSubmit =
    form.fullName &&
    form.phone &&
    form.email &&
    form.linkedinId &&
    form.resumeFileName &&
    form.agreed;

  if (!job) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Job Not Found
          </h1>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-indigo-600 px-6 py-3"
          >
            Back to Careers
          </Link>
        </div>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-xl rounded-[32px] border-2 border-slate-200 p-10 text-center backdrop-blur-xl">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/20">
            <CheckCircle2 className="h-14 w-14 text-emerald-400" />
          </div>

          <h1 className="mt-8 text-4xl font-bold text-black">
            Application Submitted!
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Thank you for applying for the{" "}
            <span className="font-semibold text-black">
              {job.title}
            </span>{" "}
            position.
          </p>

          <p className="mt-3 leading-7 text-slate-500">
            We&apos;ve received your application successfully. Our recruitment team
            will review your profile and contact you if your qualifications match
            the role.
          </p>

          <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-50 p-5 text-left">
            <h3 className="font-semibold text-emerald-800">
              What happens next?
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>✓ Your application has been securely received.</li>
              <li>✓ Our hiring team will review your profile.</li>
              <li>✓ Shortlisted candidates will be contacted via email or phone.</li>
              <li>✓ The recruitment process usually takes 5–10 business days.</li>
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
               View More Jobs
            </Link>

            <Link
              href="/"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
            >
              Back to Home
            </Link>
            

          </div>

        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden ">
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />

        <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-300/20 blur-[140px]" />

      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">

        {/* Back Button */}

        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
        >
          <ArrowLeft size={18} />
          Back to Careers
        </Link>

        {/* Hero */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">

            {/* Left */}

            <div className="flex-1">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 text-indigo-700">
                <Sparkles size={18} />
                Now Hiring
              </div>

              <h1 className="text-5xl font-black tracking-tight text-slate-900">
                {job.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Join our talented engineering team and help build modern
                software products used by customers around the world.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <Badge
                  icon={<MapPin size={16} />}
                  label={job.location}
                />

                <Badge
                  icon={<Briefcase size={16} />}
                  label={job.type}
                />

                <Badge
                  icon={<Building2 size={16} />}
                  label={job.workMode}
                />

              </div>

            </div>

            {/* Right Card */}

            <div className="w-full max-w-sm rounded-3xl bg-linear-to-br from-indigo-200 via-sky-100 to-cyan-200 p-[1px] shadow-lg">

              <div className="rounded-3xl bg-white p-8">

                <h3 className="text-xl font-bold text-slate-900">
                  Why Join Us?
                </h3>

                <div className="mt-6 space-y-4">

                  {[
                    "Competitive Salary",
                    "Flexible Working Hours",
                    "Health Insurance",
                    "Learning Budget",
                    "Performance Bonus",
                    "Remote Friendly",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 transition hover:bg-indigo-50"
                    >
                      <CheckCircle
                        size={18}
                        className="text-emerald-500"
                      />

                      <span className="font-medium text-slate-700">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </motion.section>

        {/* ===== PART 2 STARTS HERE ===== */}
        {/* Application Section */}

        <div className="mt-12 grid gap-8 lg:grid-cols-[340px_1fr]">

          {/* Left Sidebar */}

          <aside className="sticky top-8 h-fit">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

              <h3 className="text-xl font-bold text-slate-900">
                Job Summary
              </h3>

              <div className="mt-6 space-y-5">

                <SidebarItem
                  title="Location"
                  value={job.location}
                  icon={<MapPin className="h-5 w-5 text-indigo-600" />}
                />

                <SidebarItem
                  title="Employment"
                  value={job.type}
                  icon={<Briefcase className="h-5 w-5 text-indigo-600" />}
                />

                <SidebarItem
                  title="Work Mode"
                  value={job.workMode}
                  icon={<Building2 className="h-5 w-5 text-indigo-600" />}
                />

              </div>

              <div className="my-8 h-px bg-slate-200" />

              <h4 className="font-semibold text-slate-900">
                Benefits
              </h4>

              <div className="mt-5 space-y-3">

                {[
                  "Medical Insurance",
                  "Flexible Hours",
                  "Learning Budget",
                  "Annual Bonus",
                  "Paid Leave",
                  "Remote Friendly",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 transition hover:bg-indigo-50"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500" />

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </aside>

          {/* Application Form */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl"
          >

            <h2 className="text-3xl font-bold text-slate-900">
              Apply for this Position
            </h2>

            <p className="mt-3 text-slate-600">
              Fill in your details below. We&apos;ll review your application
              and contact you if your profile matches our requirements.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-10 space-y-7"
            >

              {/* Name & Email */}

              <div className="grid gap-6 md:grid-cols-2">

                <InputField
                  icon={<User className="h-5 w-5 text-indigo-600" />}
                  label="Full Name"
                  required
                  error={errors.fullName}
                >
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    placeholder="John Doe"
                    className={inputClass(!!errors.fullName)}
                  />
                </InputField>

                <InputField
                  icon={<Mail className="h-5 w-5 text-indigo-600" />}
                  label="Email Address"
                  required
                  error={errors.email}
                >
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="john@example.com"
                    className={inputClass(!!errors.email)}
                  />
                </InputField>

              </div>

              {/* Phone */}

              <div className="grid gap-6 md:grid-cols-[130px_1fr]">

                <div>

                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Country
                  </label>

                  <select
                    value={form.countryCode}
                    onChange={(e) => update("countryCode", e.target.value)}
                    className={inputClass(false)}
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>

                </div>

                <InputField
                  icon={<Phone className="h-5 w-5 text-indigo-600" />}
                  label="Phone Number"
                  required
                  error={errors.phone}
                >
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="9876543210"
                    className={inputClass(!!errors.phone)}
                  />
                </InputField>

              </div>

              {/* LinkedIn & GitHub */}

              <div className="grid gap-6 md:grid-cols-2">

                <InputField
                  icon={<Link2 className="h-5 w-5 text-indigo-600" />}
                  label="LinkedIn Profile"
                  required
                  error={errors.linkedinId}
                >
                  <input
                    type="text"
                    value={form.linkedinId}
                    onChange={(e) => update("linkedinId", e.target.value)}
                    placeholder="linkedin.com/in/johndoe"
                    className={inputClass(!!errors.linkedinId)}
                  />
                </InputField>

                <InputField
                  icon={<Link2 className="h-5 w-5 text-indigo-600" />}
                  label="GitHub"
                >
                  <input
                    type="text"
                    value={form.github}
                    onChange={(e) => update("github", e.target.value)}
                    placeholder="github.com/johndoe"
                    className={inputClass(false)}
                  />
                </InputField>

              </div>

              {/* ===== PART 3 STARTS HERE ===== */}
              {/* Current Location & Gender */}

              <div className="grid gap-6 md:grid-cols-2">

                <InputField
                  icon={<MapPin className="h-5 w-5 text-indigo-600" />}
                  label="Current Location"
                >
                  <input
                    type="text"
                    value={form.currentLocation}
                    onChange={(e) =>
                      update("currentLocation", e.target.value)
                    }
                    placeholder="Chennai, India"
                    className={inputClass(false)}
                  />
                </InputField>

                <InputField label="Gender">
                  <select
                    value={form.gender}
                    onChange={(e) => update("gender", e.target.value)}
                    className={inputClass(false)}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">
                      Prefer not to say
                    </option>
                  </select>
                </InputField>

              </div>

              {/* Resume Upload */}

              <InputField
                icon={<Upload className="h-5 w-5 text-indigo-600" />}
                label="Resume"
                required
                error={errors.resumeFileName}
              >
                <label
                  className={`group flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed p-12 transition-all duration-300
                ${errors.resumeFileName
                      ? "border-red-400 bg-red-50"
                      : "border-slate-300 bg-slate-50 hover:border-indigo-500 hover:bg-indigo-50"
                    }`}
                >
                  <div className="mb-5 rounded-full bg-indigo-100 p-5 transition group-hover:scale-110">
                    <Upload className="h-8 w-8 text-indigo-600" />
                  </div>

                  <h4 className="text-lg font-semibold text-slate-800">
                    {form.resumeFileName
                      ? form.resumeFileName
                      : "Upload your Resume"}
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Drag & Drop or click to browse
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    PDF, DOC or DOCX (Max 5MB)
                  </p>

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) =>
                      update(
                        "resumeFileName",
                        e.target.files?.[0]?.name ?? ""
                      )
                    }
                  />
                </label>
              </InputField>

              {/* Agreement */}

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

                <label className="flex items-start gap-4">

                  <input
                    type="checkbox"
                    checked={form.agreed}
                    onChange={(e) =>
                      update("agreed", e.target.checked)
                    }
                    className="mt-1 h-5 w-5 rounded border-slate-300 text-indigo-600"
                  />

                  <span className="text-sm leading-7 text-slate-600">

                    I agree to the

                    <a
                      href="#"
                      className="mx-1 font-semibold text-indigo-600 hover:text-indigo-700 hover:underline"
                    >
                      Terms & Conditions
                    </a>

                    and

                    <a
                      href="#"
                      className="mx-1 font-semibold text-indigo-600 hover:text-indigo-700 hover:underline"
                    >
                      Privacy Policy
                    </a>

                  </span>

                </label>

                {errors.agreed && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.agreed}
                  </p>
                )}

              </div>

              {/* Buttons */}

              <div className="flex flex-col gap-4 pt-4 sm:flex-row">

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: .98 }}
                  type="submit"
                  disabled={!isValidToSubmit}
                  className="flex-1 rounded-2xl bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Apply Now →
                </motion.button>

                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
                >
                  Cancel
                </button>

              </div>

            </form>

          </motion.div>

        </div>

      </div>

    </main>
  );
}
function Badge({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function SidebarItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">

      <div className="rounded-xl bg-indigo-500/20 p-3 text-indigo-300">
        {icon}
      </div>

      <div>

        <p className="text-xs uppercase tracking-widest text-slate-400">
          {title}
        </p>

        <p className="mt-1 text-sm font-semibold text-white">
          {value}
        </p>

      </div>

    </div>
  );
}

function InputField({
  icon,
  label,
  required,
  error,
  children,
}: {
  icon?: React.ReactNode;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>

      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">

        {icon && (
          <span className="text-indigo-600">
            {icon}
          </span>
        )}

        {label}

        {required && (
          <span className="text-red-500">*</span>
        )}

      </label>

      {children}

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}

function inputClass(hasError: boolean) {
  return `
    w-full
    rounded-2xl
    border
    bg-white
    px-5
    py-4
    text-sm
    text-slate-900
    placeholder:text-slate-400
    transition-all
    outline-none
    focus:border-indigo-500
    focus:ring-4
    focus:ring-indigo-100
    ${hasError
      ? "border-red-400"
      : "border-slate-200"
    }
  `;
}