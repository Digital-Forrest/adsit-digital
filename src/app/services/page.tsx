import type { Metadata } from "next";
import Link from "next/link";
import { PageBrand } from "@/components/page-brand";

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  stats: string[];
};

const services: ServiceCard[] = [
  {
    title: "Website Design & SEO",
    description:
      "Launch a conversion-first site with clean architecture, fast load speeds, and optional AI-powered SEO foundations so you’re discoverable from day one.",
    href: "/services/website-launch-seo",
    stats: ["Up to 10 core pages", "Local SEO ready", "Performance tuned"],
  },
  {
    title: "Content & Video Marketing",
    description:
      "Transform your expertise into blogs, videos, reels, and automation-ready assets that build thought leadership and keep you top of mind.",
    href: "/services/content-video-marketing",
    stats: ["Editorial calendar", "Video production", "Repurposing workflows"],
  },
  {
    title: "Paid Ads + Lead Flow",
    description:
      "Deploy targeted Google, Meta, and YouTube campaigns that route every lead into your CRM so you can scale confidently.",
    href: "/services/paid-ads-and-lead-flow",
    stats: ["Campaign setup", "Landing optimization", "Automated routing"],
  },
  {
    title: "Conversion Optimisation + Automation",
    description:
      "Audit funnels, test messaging, and automate nurture journeys so prospects never fall through the cracks.",
    href: "/services/conversion-optimization-automation",
    stats: ["A/B experiments", "Lifecycle journeys", "Performance reporting"],
  },
  {
    title: "Audience Data Intelligence",
    description:
      "Unify tracking, tagging, and audience enrichment to power smarter targeting, retargeting, and ROI decisions.",
    href: "/services/audience-data-intelligence",
    stats: ["Event tracking", "Segmentation", "Cross-channel sync"],
  },
];

const faqItems = [
  {
    question: "Do you handle design, development, and analytics in-house?",
    answer:
      "Yes. Your strategist coordinates every deliverable, including design, copy, paid media, automation, and reporting, so nothing gets lost between vendors.",
  },
  {
    question: "How quickly can we launch a new website or campaign?",
    answer:
      "Most website launches go live in 4–6 weeks, including strategy, design, build, and QA. Paid campaigns typically activate within 3 weeks once assets and tracking are ready.",
  },
  {
    question: "Can we pick individual services or do you require bundles?",
    answer:
      "We tailor engagement to your priorities. Many clients start with Website Design & SEO or Paid Ads + Lead Flow, then layer content, automation, and data as the system scales.",
  },
  {
    question: "How do you report on performance?",
    answer:
      "Every engagement includes a live dashboard covering traffic, conversion, cost per lead, and ROI insights. We review results weekly and iterate based on what’s working.",
  },
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Adsit Digital services: website launch, SEO, content, paid ads, automation, and audience data for Virginia businesses.",
  openGraph: {
    title: "Adsit Digital Services",
    description:
      "See how our services connect creative, ads, and data into one growth system for Virginia businesses.",
    url: "https://adsitdigital.com/services",
    siteName: "Adsit Digital",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageBrand brand="yellow" />
      <div data-brand="yellow" className="page-surface pb-32 pt-16">
        <section className="container relative flex w-full flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-8">
            <div className="brand-badge">Services</div>
            <h1 className="gradient-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Systems Built to Scale Your Story
            </h1>
            <p className="muted-copy text-lg">
              Every engagement is designed to connect creative, paid media, automation, and reporting so your
              marketing works like a single system rather than scattered efforts.
            </p>
            <p className="subtle-copy text-sm">
              Start with the foundation you need most, then layer additional services as your momentum grows.
              Our team stays embedded with you each step of the journey.
            </p>
          </div>
          <div className="glass-panel grid w-full max-w-md gap-4 p-6">
            <div className="glass-panel space-y-2 p-4 text-sm" data-tone="inset">
              <p className="font-semibold">Where we operate</p>
              <p className="subtle-copy">Local markets · Regional teams · Remote partnerships without borders</p>
            </div>
            <div className="glass-panel space-y-2 p-4 text-sm" data-tone="inset">
              <p className="font-semibold">Ideal partners</p>
              <p className="subtle-copy">
                Established businesses seeking clarity, consistent lead flow, and measurable ROI.
              </p>
            </div>
          </div>
        </section>
        <section className="container relative mt-24">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="glass-panel flex flex-col gap-6 p-8" data-tone="subtle">
                <div>
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                  <p className="subtle-copy mt-3 text-sm">{service.description}</p>
                </div>
                <ul className="grid gap-2 text-xs">
                  {service.stats.map((stat) => (
                    <li key={stat} className="glass-panel px-3 py-2" data-tone="inset">
                      {stat}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="brand-link text-xs font-semibold"
                  aria-label={`Learn more about ${service.title}`}
                >
                  View Service →
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section id="content-video" className="container relative mt-24">
          <div className="glass-panel shadow-brand-xl p-10">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">FAQs</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {faqItems.map((faq) => (
                <div key={faq.question} className="glass-panel p-6 text-sm" data-tone="subtle">
                  <p className="font-semibold">{faq.question}</p>
                  <p className="subtle-copy mt-3">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="container relative mt-24 flex justify-center text-center">
          <div className="glass-panel shadow-brand-xl w-full max-w-4xl p-12" data-tone="accent">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
              Not sure where to begin?
            </h2>
            <p className="mt-4 text-lg">
              Book a strategy call and we’ll map the path that supports your next milestone, whether it’s
              launch, content, paid traffic, automation, or data clarity.
            </p>
            <Link
              href="/contact-us"
              aria-label="Schedule your strategy call"
              className="brand-button mt-8"
            >
              Schedule Your Strategy Call →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

