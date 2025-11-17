import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBrand } from "@/components/page-brand";

const dataGaps = [
  {
    title: "Disconnected tools",
    description:
      "CRMs, ad platforms, and analytics each give partial answers, leaving you to reconcile competing versions of the truth.",
  },
  {
    title: "Leads without lineage",
    description:
      "You know forms are submitted and calls are booked, but you can’t trace the journey from first touch to revenue.",
  },
  {
    title: "Decisions built on guesses",
    description:
      "Without a clear feedback loop, budgets and campaigns hinge on instinct instead of evidence.",
  },
];

const planSteps = [
  {
    step: "Step 1",
    title: "Tracking Setup",
    description:
      "Implement event, form, and call tracking with Ichnaea, our in-house tracking system, and pair it with server-side scripts that capture every signal.",
  },
  {
    step: "Step 2",
    title: "Audience Segmentation",
    description:
      "Tag contacts by interest, behavior, and intent so nurture and retargeting stay precise.",
  },
  {
    step: "Step 3",
    title: "Enrichment & Sync",
    description:
      "Clean and sync enriched profiles back to Meta, Google, LinkedIn, and your CRM without manual exports.",
  },
  {
    step: "Step 4",
    title: "Insights Reporting",
    description:
      "Deliver dashboards that show spend → lead → revenue, so every channel earns accountability.",
  },
];

const clarityWins = [
  {
    heading: "Know what works",
    copy: "You stop hoping and start knowing. Campaigns earn budget because you can prove the ROI.",
  },
  {
    heading: "Move fast with facts",
    copy: "Decisions pull from a single source of truth, so your team acts with confidence instead of assumption.",
  },
  {
    heading: "Protect every dollar",
    copy: "Every campaign has accountability. Every dollar has a destination you can audit in seconds.",
  },
];

export const metadata: Metadata = {
  title: "Audience Data Intelligence",
  description:
    "Adsit Digital connects tracking, enrichment, and reporting so you finally see spend → lead → revenue in a single dashboard.",
  openGraph: {
    title: "Audience Data Intelligence",
    description:
      "Capture every lead source, clean the signal, and visualize marketing performance from first touch to revenue.",
    url: "https://adsitdigital.com/services/audience-data-intelligence",
    siteName: "Adsit Digital",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 675,
        alt: "Data analyst reviewing marketing performance dashboards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audience Data Intelligence",
    description:
      "Build a single source of truth for your marketing data and make confident decisions with Adsit Digital.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "/services/audience-data-intelligence",
  },
};

export default function AudienceDataIntelligencePage() {
  return (
    <>
      <PageBrand brand="black" />
      <div data-brand="black" className="page-surface pb-32 pt-16">
        <section className="container relative flex w-full flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-3xl space-y-8">
            <div className="brand-badge">Audience Data Intelligence</div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
                Guessing is expensive. Data is the shortcut.
              </p>
              <h1 className="gradient-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Build the Audience Engine that Powers Every Channel
              </h1>
              <p className="muted-copy text-lg">
                Clean, connected data is the edge. We unify analytics, pixel events, CRM entries, and call recordings so
                you understand who’s converting, what they need, and how to reach more of them. No more manual exports.
                No more guessing which campaigns deserve another dollar.
              </p>
            </div>
            <p className="subtle-copy text-sm">
              We orchestrate the tools—GA4, Meta, Google Ads, HubSpot, HighLevel, CallRail—so you finally see the truth
              behind every lead, and the real ROI behind every channel.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact-us" aria-label="Get your data audit" className="brand-button">
                Get Your Data Audit →
              </Link>
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
            <div className="absolute -inset-6 bg-gradient-to-br from-sky-400/25 via-indigo-500/25 to-emerald-400/20 blur-3xl" />
            <div className="relative space-y-4 rounded-[32px] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-sky-500/30 backdrop-blur-2xl">
              <div className="relative aspect-[5/6] overflow-hidden rounded-3xl border border-white/20 bg-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=960&q=80"
                  alt="Analyst working through marketing performance dashboards"
                  fill
                  sizes="(max-width: 768px) 80vw, 420px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-slate-200 shadow-inner shadow-white/20">
                <p className="flex items-center gap-2 font-semibold text-white">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 text-xs text-slate-900">
                    📊
                  </span>
                  All metrics, one dashboard
                </p>
                <p>
                  We connect platforms so spend, source, and revenue always align, eliminating tedious spreadsheets and conflicting reports.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
          <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-slate-900/40 backdrop-blur-2xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Why clarity keeps slipping away</h2>
            <p className="mt-4 text-sm text-slate-200">
              The data exists. The issue is orchestration. We unify the systems so every interaction is tracked, tagged, and
              attributed back to the campaign that sparked it.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {dataGaps.map((gap) => (
                <div
                  key={gap.title}
                  className="space-y-3 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-base font-semibold text-slate-900">
                    !
                  </span>
                  <p className="text-lg font-semibold text-white">{gap.title}</p>
                  <p>{gap.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-inner shadow-white/10">
              <p className="font-semibold text-white">We build the single source of truth your marketing deserves.</p>
              <p className="mt-3">
                With Ichnaea tracking and server-side scripts, nothing slips through. Every click, form, and call syncs with
                your CRM and dashboards automatically.
              </p>
            </div>
          </div>
        </section>
        <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
          <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-sky-600/25 backdrop-blur-2xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">The plan to unify your data</h2>
            <p className="mt-4 text-sm text-slate-200">
              From first touch to renewal, we orchestrate the technical plumbing that gives you full visibility and smarter
              targeting.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {planSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 text-sm font-semibold text-slate-900">
                    {step.step}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-white">{step.title}</p>
                    <p className="mt-2">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative mx-auto mt-24 w-full max-w-5xl px-6">
          <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-slate-900/35 backdrop-blur-2xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">What clarity delivers</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {clarityWins.map((win) => (
                <div
                  key={win.heading}
                  className="space-y-3 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl"
                >
                  <p className="text-lg font-semibold text-white">{win.heading}</p>
                  <p>{win.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative mx-auto mt-24 w-full max-w-5xl px-6">
          <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-emerald-600/25 backdrop-blur-2xl">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">See exactly where your revenue comes from.</h3>
                <p className="text-sm text-slate-200">
                  No more guessing. No more “maybe.” We audit your stack, connect the dots, and keep your dashboards fresh so
                  decisions stay grounded in reality.
                </p>
                <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-100 shadow-inner shadow-white/10">
                  <p className="font-semibold text-white">Engagement</p>
                  <ul className="mt-3 space-y-2">
                    <li>
                      Setup: <span className="font-semibold text-white">$2,500–$5,000</span>
                    </li>
                    <li>
                      Ongoing Optimization: <span className="font-semibold text-white">$1,500–$3,000/month</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6 rounded-3xl border border-white/20 bg-gradient-to-br from-sky-400/45 via-indigo-500/35 to-emerald-400/35 p-8 text-center text-slate-900 shadow-2xl shadow-sky-700/30 backdrop-blur-xl">
                <p className="text-xl font-semibold">
                  The businesses thriving in their markets all share one advantage: clarity. Let’s get you there.
                </p>
                <Link
                  href="/contact-us"
                  aria-label="Schedule your audience data intelligence consultation"
                  className="brand-button"
                >
                  Get Your Data Audit →
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="relative mx-auto mt-24 w-full max-w-4xl px-6 text-center">
          <div className="glass-panel shadow-brand-xl w-full max-w-4xl p-12" data-tone="accent">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
              Blind marketing isn’t brave; it’s expensive.
            </h2>
            <p className="mt-4 text-lg">
              We’ll build the clarity so you can scale with certainty. Every data point ties back to revenue, and every
              decision starts with proof.
            </p>
            <Link href="/contact-us" aria-label="Start your audience data intelligence project" className="brand-button mt-8">
              Get Your Data Audit →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
