import Image from "next/image";
import Link from "next/link";
import { Building2, GraduationCap, Briefcase, ChevronDown } from "lucide-react";

const nav = [
  {
    label: "Company",
    children: [
      {
        href: "/about",
        label: "About Us",
        description: "Learn about Mugavai and our mission.",
        icon: Building2,
      },
      {
        href: "/internship",
        label: "Internship",
        description: "Kick-start your career with our internship program.",
        icon: GraduationCap,
      },
      {
        href: "http://localhost:3000",
        label: "Careers",
        description: "Explore opportunities to join our growing team.",
        icon: Briefcase,
      },
    ],
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-xl supports-[backdrop-filter]:bg-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6">

        {/* Logo */}
        <Link href="/"
          aria-label="Mugavai home"
          className="flex items-center gap-3">
          <Image
            src="/mugavai.png"
            alt="Mugavai"
            width={150}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="ml-auto hidden items-center gap-2 lg:flex">
          {nav.map((item) => {
            if ("children" in item) {
              return (
                <div
                  key={item.label}
                  className="group relative"
                >
                  <button className="flex items-center gap-1 rounded-full px-4 py-2 text-lg font-semibold text-gray-700 transition hover:bg-gray-100">
                    {item.label}

                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown */}
                  <div className="invisible absolute left-0 top-full mt-3 w-96 rounded-3xl border border-gray-200 bg-white p-3 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                    {item.children?.map((child) => {
                      const Icon = child.icon;

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-start gap-4 rounded-2xl p-4 transition hover:bg-purple-50"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 aspect-square ">
                            <Icon className="h-6 w-6 text-pink-600" />
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {child.label}
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-gray-500">
                              {child.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/careers"
            className="ml-4 rounded-full bg-linear-to-r from-pink-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Join Us
          </Link>
        </nav>
      </div>
    </header>
  );
}