import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type SocialLink = {
  href: string;
  label: string;
  ariaLabel: string;
  icon: ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    href: "https://www.instagram.com/adsitdigital/",
    label: "Instagram",
    ariaLabel: "Visit Adsit Digital on Instagram",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        className="h-5 w-5"
      >
        <path
          fill="currentColor"
          d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 12 10.5ZM17.25 6a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75Z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/61580521344926",
    label: "Facebook",
    ariaLabel: "Visit Adsit Digital on Facebook",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        className="h-5 w-5"
      >
        <path
          fill="currentColor"
          d="M13.5 21v-7.5H16l.5-3h-3v-1.5c0-.84.28-1.5 1.5-1.5H16V4.5c-.26 0-.87-.1-1.78-.1-2.02 0-3.22 1.23-3.22 3.45V10.5H9.5v3H11.5V21Z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/adsit-marketing",
    label: "LinkedIn",
    ariaLabel: "Visit Adsit Digital on LinkedIn",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        className="h-5 w-5"
      >
        <path
          fill="currentColor"
          d="M5.25 9h3.5V21h-3.5Zm.5-4.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM10.5 9h3.35v1.65h.05A3.67 3.67 0 0 1 17.3 9c3 0 3.7 2 3.7 4.6V21H17.5v-6c0-1.44-.03-3.3-2-3.3s-2.3 1.57-2.3 3.2V21h-3.5Z"
        />
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="footer-surface mt-6">
      <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          aria-label="Return to Adsit Digital homepage"
          className="flex items-center gap-3"
        >
          <Image
            src="https://media.adsitdigital.com/logo336.png"
            alt="Adsit Digital logo"
            width={336}
            height={96}
            className="h-24 w-auto"
            sizes="(max-width: 768px) 40vw, 336px"
          />
        </Link>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
          <div className="flex items-center gap-6">
            {/* Inline SVG icons keep bundle small while satisfying the icon requirement */}
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.ariaLabel}
                className="social-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-tertiary)] focus-visible:ring-offset-2 focus-visible:ring-offset-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </a>
            ))}
          </div>
          <nav aria-label="Legal navigation">
            <ul className="flex flex-col gap-4 text-sm md:flex-row md:gap-6">
              <li>
                <a
                  href="https://example.com"
                  aria-label="Read the privacy policy"
                  className="footer-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-tertiary)] focus-visible:ring-offset-2 focus-visible:ring-offset-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://example.com"
                  aria-label="Read the terms and conditions"
                  className="footer-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-tertiary)] focus-visible:ring-offset-2 focus-visible:ring-offset-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

