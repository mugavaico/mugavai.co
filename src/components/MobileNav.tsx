"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type Navigation = typeof import("@/lib/navigation").navigation;

type MobileNavProps = {
  navigation: Navigation;
};

export function MobileNav({ navigation }: MobileNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const directLinks = navigation.filter(
    (item): item is Extract<Navigation[number], { href: string }> => "href" in item,
  );

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <button
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsMenuOpen((open) => !open)}
        className="ml-auto rounded-full p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`${isMenuOpen ? "block" : "hidden"} absolute inset-x-0 top-20 border-t border-gray-200 bg-white px-6 py-4 lg:hidden`}
      >
        <div className="border-b border-gray-100 pb-2">
          <p className="px-2 py-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Company
          </p>
          {navigation[0].children.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-lg px-2 py-2 text-base font-semibold text-gray-700 hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {directLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="block border-b border-gray-100 px-2 py-3 text-base font-semibold text-gray-700 hover:bg-gray-100"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/careers"
          onClick={closeMenu}
          className="mt-4 block rounded-full bg-linear-to-r from-pink-600 to-purple-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg"
        >
          Join Us
        </Link>
      </nav>
    </>
  );
}