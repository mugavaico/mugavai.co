"use client";

import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  User,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { company } from "@/lib/data";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Contact",
//   description: `Get in touch with ${company.name}.`,
//   alternates: {
//     canonical: "/contact",
//   },
// };

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    description: "We'll respond within one business day.",
  },
  {
    icon: Phone,
    title: "Phone",
    value: company.phone,
    href: `tel:${company.phone}`,
    description: "Monday – Friday, 9:00 AM – 6:00 PM",
  },
  {
    icon: MapPin,
    title: "Office",
    value: company.address,
    href: "#",
    description: company.hq,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const EMAIL_REGEX =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const PHONE_REGEX =
    /^[+]?[0-9]{10,15}$/;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const validationErrors: Record<string, string> = {};

    if (!form.fullName.trim())
      validationErrors.fullName = "Full name is required.";

    else if (form.fullName.length < 3)
      validationErrors.fullName =
        "Minimum 3 characters required.";

    if (!form.email.trim())
      validationErrors.email = "Email is required.";

    else if (!EMAIL_REGEX.test(form.email))
      validationErrors.email =
        "Enter a valid email address.";

    if (!form.company.trim())
      validationErrors.company =
        "Company name is required.";

    if (!form.phone.trim())
      validationErrors.phone =
        "Phone number is required.";

    else if (!PHONE_REGEX.test(form.phone))
      validationErrors.phone =
        "Enter a valid phone number.";

    if (!form.subject.trim())
      validationErrors.subject =
        "Subject is required.";

    else if (form.subject.length < 5)
      validationErrors.subject =
        "Minimum 5 characters required.";

    if (!form.message.trim())
      validationErrors.message =
        "Message is required.";

    else if (form.message.length < 20)
      validationErrors.message =
        "Minimum 20 characters required.";

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      console.log(form);

      // Call API here

      setSuccess(true);

      setForm({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative overflow-hidden bg-white">

      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-pink-300/20 blur-[140px]" />
        <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-sky-300/20 blur-[140px]" />
      </div>

      {/* Hero */}

      <section className="px-6 pt-24 pb-14">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-600">
            Contact Us
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            We'd love to hear
            <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              from you.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question about our products or services?
            Send us a message and our team will get back to you as soon as possible.
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="px-6 pb-24">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">

          {/* Left */}

          <div className="space-y-5 lg:col-span-4">

            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center justify-start gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 aspect-square ">
                    <Icon className="h-6 w-6 text-pink-600" />
                  </div>


                  <div className=""> <p className="mt-2 text-sm text-gray-500">
                    {item.description}
                  </p>

                    <p className="mt-5 font-medium text-pink-600 break-words">
                      {item.value}
                    </p></div>
                </a>
              );
            })}

          </div>

          {/* Form */}

          <div className="lg:col-span-8 rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl md:p-10">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100">
                <Building2 className="h-6 w-6 text-pink-600" />
              </div>

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Send a Message
                </h2>

                <p className="mt-1 text-gray-600">
                  Fill in the form and we'll get back to you.
                </p>

              </div>

            </div>

            <form className="mt-10 space-y-6" onSubmit={handleSubmit} noValidate>

              {/* Row 1 */}

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>

                  <div className="flex items-center rounded-xl border border-gray-200 px-4 transition focus-within:border-pink-500">
                    <User className="mr-3 h-5 w-5 text-gray-400" />

                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      type="text"
                      placeholder="John Smith"
                      className="w-full py-3 outline-none"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Work Email
                  </label>

                  <div className="flex items-center rounded-xl border border-gray-200 px-4 transition focus-within:border-pink-500">
                    <Mail className="mr-3 h-5 w-5 text-gray-400" />

                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="john@company.com"
                      className="w-full py-3 outline-none"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

              </div>

              {/* Row 2 */}

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-pink-500"
                  />

                  {errors.company && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.company}
                    </p>
                  )}
                </div>
                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Phone
                  </label>

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-pink-500"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

              </div>

              {/* Subject */}

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-pink-500"
                />

                {errors.subject && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.subject}
                  </p>
                )}
              </div>


              <div>

                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <div className="flex rounded-xl border border-gray-200 px-4 py-3 transition focus-within:border-pink-500">

                  <MessageSquare className="mr-3 mt-1 h-5 w-5 text-gray-400" />

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or requirements..."
                    rows={6}
                    className="w-full resize-none outline-none"
                  />

                </div>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Privacy */}

              <div className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4">

                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-pink-600" />

                <p className="text-sm leading-6 text-gray-600">
                  Your information is encrypted and will only be used to
                  respond to your enquiry. We never share your data with third
                  parties.
                </p>

              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-pink-600 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}