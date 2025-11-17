import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBrand } from "@/components/page-brand";
import { QuoteButton } from "@/components/quote-button";

const painPoints = [
  {
    title: "Invisible in search",
    description:
      "Slow load times, outdated structure, and thin content push you below competitors in local search results.",
  },
  {
    title: "Unclear next steps",
    description:
      "Visitors land on your site and bounce because they can’t see what to do next or why your business is the obvious choice.",
  },
  {
    title: "No tracking clarity",
    description:
      "Without clean analytics, leads slip through the cracks and you’re left guessing which efforts actually work.",
  },
];

const processSteps = [
  {
    step: "Step 1",
    title: "Discovery & Strategy",
    description:
      "We uncover what makes your business valuable, map your competitors, and define the message your customers need first.",
  },
  {
    step: "Step 2",
    title: "Design & Build",
    description:
      "We create a clean, mobile-first experience that tells your story visually and guides visitors toward a confident yes.",
  },
  {
    step: "Step 3",
    title: "SEO Setup & Tracking",
    description:
      "We implement local keyword targeting, optimize on-page elements, and track every click, call, and form submission.",
  },
  {
    step: "Step 4",
    title: "Launch & Optimise",
    description:
      "We go live quickly, monitor behavior, and refine based on real data so your site keeps improving after launch day.",
  },
];

const outcomes = [
  "Visitors instantly understand what you do and why it matters.",
  "Inbound calls and form submissions come from search, not just referrals.",
  "Live dashboards prove ROI so you can invest with confidence.",
  "Your brand presence finally matches the calibre of your service.",
];

export const metadata: Metadata = {
  title: "Website Design & SEO",
  description:
    "Stop guessing. Adsit Digital designs high-performing websites with AI-powered SEO so Virginia businesses convert more leads and earn predictable growth.",
  openGraph: {
    title: "Website Design & SEO",
    description:
      "Build a conversion-ready website with AI SEO foundations so your marketing engine drives predictable growth.",
    url: "https://adsitdigital.com/services/website-launch-seo",
    siteName: "Adsit Digital",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 675,
        alt: "Design mockups displayed on laptop and tablet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & SEO",
    description:
      "High-performing websites built for conversion and search visibility from day one.",
    images: [
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "/services/website-launch-seo",
  },
};

export default function WebsiteLaunchSEOPage() {
  return (
    <>
      <PageBrand brand="light-blue" />
      <div data-brand="light-blue" className="page-surface pb-32 pt-16">
        <section className="container relative flex w-full flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full max-w-3xl space-y-8">
          <div className="brand-badge">Website Design & SEO</div>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
              Stop Guessing. Start Growing.
            </p>
            <h1 className="gradient-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Build a Website That Earns Its Keep
            </h1>
            <p className="muted-copy text-lg">
              Every business owner wants predictable growth, yet most sites are built to look pretty, not to
              sell. When your website fails to convert, you’re left wondering where the leads went. You
              deserve a digital HQ that does more than exist; it should pull its weight.
            </p>
          </div>
          <p className="subtle-copy text-sm">
            We craft performance-first sites backed by AI SEO so qualified prospects can find you, trust you,
            and take action. You bring the vision and we bring the system that makes it real.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <QuoteButton aria-label="Get your website quote">
              Get Your Website Quote →
            </QuoteButton>
            <Link
              href="/services"
              aria-label="Return to services overview"
              className="brand-button"
              data-variant="ghost"
            >
              View All Services
            </Link>
          </div>
        </div>
        <div className="relative w-full max-w-lg">
          <div className="glass-panel relative space-y-4 p-6 shadow-brand-xl">
            <div className="relative aspect-[5/6] overflow-hidden rounded-3xl border border-[color:var(--border-glass)] bg-[color:var(--surface-overlay)]">
              <Image
                src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=960&q=80"
                alt="Website design concepts on multiple screens"
                fill
                sizes="(max-width: 768px) 80vw, 420px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
        <section className="container relative mt-24">
          <div className="glass-panel grid gap-8 p-10 shadow-brand-xl md:grid-cols-2">
          {painPoints.map((item) => (
            <div
              key={item.title}
                className="glass-panel space-y-3 p-6"
                data-tone="subtle"
            >
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <span className="brand-chip text-sm text-[color:var(--brand-contrast-soft)]">
                  ✦
                </span>
                  <p>{item.title}</p>
              </div>
                <p className="subtle-copy text-sm">{item.description}</p>
            </div>
          ))}
            <div className="glass-panel md:col-span-2 p-6 text-sm" data-tone="subtle">
              <p className="font-semibold">You’re losing leads you never even knew you had.</p>
              <p className="subtle-copy mt-3">
                People are searching for exactly what you offer. If they can’t find you or don’t know what to
                do once they land on your site, they move on to a competitor who simply shows up better. We’ve
                seen it happen too often. That cycle stops here.
              </p>
            </div>
          </div>
        </section>
        <section className="container relative mt-24">
          <div className="glass-panel shadow-brand-xl p-10">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
              The Partner Who Builds for Performance
            </h2>
            <p className="muted-copy mt-4 text-sm">
              We design, develop, track, and optimize every element with revenue in mind. A website that only
              looks good on launch day is just another expense, while ours works like an asset.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {processSteps.map((step) => (
                <div key={step.title} className="glass-panel flex gap-4 p-6" data-tone="subtle">
                  <span className="brand-chip text-sm text-[color:var(--brand-contrast-soft)]">
                    {step.step}
                  </span>
                  <div>
                    <p className="text-base font-semibold">{step.title}</p>
                    <p className="subtle-copy mt-2">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="container relative mt-24 flex justify-center">
          <div className="glass-panel w-full max-w-5xl p-10 shadow-brand-xl">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  Ready to have a site that works while you sleep?
                </h3>
                <p className="subtle-copy text-sm">
                  We move fast, communicate clearly, and tie every milestone to outcomes you care about.
                  Choose the plan that matches your stage, and we’ll handle the rest.
                </p>
                <div className="glass-panel p-6 text-sm" data-tone="inset">
                  <p className="font-semibold">Investment</p>
                  <ul className="mt-3 space-y-2">
                    <li>
                      Website Design:{" "}
                      <span className="font-semibold text-[color:var(--brand-contrast-soft)]">
                        $3,500–$7,500 (one-time)
                      </span>
                    </li>
                    <li>
                      AI SEO:{" "}
                      <span className="font-semibold text-[color:var(--brand-contrast-soft)]">
                        $1,500–$3,000/month
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="glass-panel space-y-6 p-8 text-center" data-tone="accent">
                <p className="text-xl font-semibold">
                  Let’s turn your site into the sales engine it was meant to be.
                </p>
                <QuoteButton aria-label="Get your website quote">
                  Get Your Website Quote Today →
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>
        <section className="container relative mt-24">
          <div className="glass-panel grid gap-8 p-10 shadow-brand-xl md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">What happens when it’s done right</h3>
              <p className="subtle-copy text-sm">
                A high-performing site doesn’t just look better; it changes how your business grows.
              </p>
              <ul className="space-y-3 text-sm">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="glass-panel flex items-start gap-3 p-4" data-tone="inset">
                    <span className="brand-chip h-6 w-6 text-xs text-[color:var(--brand-contrast-soft)]">✓</span>
                    <span className="subtle-copy">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel space-y-4 p-6 text-sm" data-tone="subtle">
              <p className="font-semibold">Don’t let another year pass with a site that just “exists.”</p>
              <p className="subtle-copy">
                A weak website doesn’t just slow traffic; it slows growth. Every day it sits idle is another
                day competitors capture the leads meant for you. Let’s fix that for good and give your team a
                platform that works around the clock.
              </p>
            </div>
          </div>
        </section>
        <section className="container relative mt-24 flex justify-center text-center">
          <div className="glass-panel shadow-brand-xl w-full max-w-4xl p-12" data-tone="accent">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
              Ready to build the site your business deserves?
            </h2>
            <p className="mt-4 text-lg">
              Book a strategy call and we’ll map your growth plan, highlight gaps, and show exactly how this
              system connects every piece before you spend another dollar on random marketing.
            </p>
            <Link href="/contact-us" aria-label="Book your strategy call" className="brand-button mt-8">
              Book Your Strategy Call →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

