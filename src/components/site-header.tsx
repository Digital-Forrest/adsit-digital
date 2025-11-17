"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navigationLinks: Array<{ href: string; label: string; ariaLabel: string }> = [
  {
    href: "/how-it-works",
    label: "How It Works",
    ariaLabel: "Navigate to How It Works",
  },
  {
    href: "/services",
    label: "Services",
    ariaLabel: "Navigate to Services",
  },
  {
    href: "/about-us",
    label: "About Us",
    ariaLabel: "Navigate to About Us",
  },
  {
    href: "/contact-us",
    label: "Contact Us",
    ariaLabel: "Navigate to Contact Us",
  },
  {
    href: "/blog",
    label: "Resources",
    ariaLabel: "Navigate to Blog resources",
  },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="glass-header">
      <div className="container flex flex-col gap-3 py-[0.6rem] md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center justify-between md:w-auto">
          <Link
            href="/"
            aria-label="Go to Adsit Digital homepage"
            className="flex items-center gap-3"
          >
            <Image
              src="https://media.adsitdigital.com/logo336.png"
              alt="Adsit Digital logo"
              width={336}
              height={96}
              priority
              className="h-24 w-auto"
              sizes="(max-width: 768px) 60vw, 336px"
            />
          </Link>
          <div className="flex flex-col items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              className="glass-panel flex flex-col items-center justify-center gap-1.5 rounded-lg p-2.5 transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-primary)] focus-visible:ring-offset-2"
            >
              <span
                className={`h-0.5 w-6 rounded-full bg-current transition-all ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 rounded-full bg-current transition-all ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 rounded-full bg-current transition-all ${
                  isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
            <ThemeToggle />
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <nav
            aria-label="Primary navigation"
            className={`w-full flex-col gap-4 md:flex md:flex-row ${
              isMobileMenuOpen ? "flex" : "hidden md:flex"
            }`}
          >
            <ul className="flex flex-col gap-4 text-[1.14rem] md:flex-row md:items-center md:justify-end md:gap-6">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-label={item.ariaLabel}
                    onClick={closeMobileMenu}
                    className="nav-link block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-tertiary)] focus-visible:ring-offset-2 focus-visible:ring-offset-0"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

