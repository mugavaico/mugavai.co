import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { company } from "@/lib/data";
import { RibbonDivider } from "./Ribbon";

export function Footer() {
  return (
    <footer className="bg-white">
      <RibbonDivider />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link href="/">
              <Image
                src="/mugavai.png"
                alt="Mugavai"
                width={170}
                height={45}
                className="h- w-auto"
              />
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              {company.shortDescription}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="rounded-full border border-gray-200 p-2 transition hover:bg-pink-50 hover:text-pink-600"
              >
                <Mail size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-gray-200 p-2 transition hover:bg-pink-50 hover:text-pink-600"
              >
                <Mail size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-gray-200 p-2 transition hover:bg-pink-50 hover:text-pink-600"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-pink-600">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-pink-600">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-pink-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/internship" className="hover:text-pink-600">
                  Internship
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-pink-600">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-pink-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Resources
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/privacy" className="hover:text-pink-600">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-pink-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-600">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-pink-600" />
                <span>{company.email}</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-pink-600" />
                <span>{company.phone}</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-pink-600" />
                <span>{company.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>

          <p>
            Designed and developed by{" "}
            <span className="font-semibold text-gray-900">
              Mugavai Technologies
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}