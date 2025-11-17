import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBrand } from "@/components/page-brand";

const frictionPoints = [
  {
    title: "Follow-up slips through",
    description:
      "Manual outreach and ad-hoc notes make it easy for qualified prospects to disappear between interest and intent.",
  },
  {
    title: "Human time runs out",
    description:
      "Every minute your team spends chasing leads is time they’re not closing deals or serving clients.",
  },
  {
    title: "Systems don’t talk",
    description:
      "Forms, ad platforms, and CRMs stay disconnected, so no one trusts the pipeline or knows the next best action.",
  },
];

const buildSteps = [
  {
    step: "Step 1",
    title: "Audit & Setup",
    description: "We map every touchpoint in your customer journey and surface the gaps costing revenue.",
  },
  {
    step: "Step 2",
    title: "Automation Build",
    description: "We design email, SMS, and CRM workflows that follow up instantly with no manual tasks required.",
  },
  {
    step: "Step 3",
    title: "Testing & Refinement",
    description: "We A/B test copy, offers, layouts, and timing to raise conversion rates across each stage.",
  },
  {
    step: "Step 4",
    title: "Retention Campaigns",
    description: "We add post-sale automations that keep clients engaged and returning without constant check-ins.",
  },
];

const proofPoints = [
  {
    heading: "Stop leaking paid leads",
    copy: "You already funded the click. Our automations make sure follow-up happens before competitors can react.",
  },
  {
    heading: "Stay top-of-mind automatically",
    copy: "Lifecycle messaging keeps your brand visible, timely, and professional around the clock.",
  },
  {
    heading: "Forecast with confidence",
    copy: "Every lead is tagged, nurtured, and tracked so revenue projections stop feeling like guesswork.",
  },
];

export const metadata: Metadata = {
  title: "Conversion Optimization + Automation",
  description:
    "Adsit Digital maps your funnel, automates lifecycle follow-up, and keeps every lead nurtured so revenue becomes predictable.",
  openGraph: {
    title: "Conversion Optimization + Automation",
    description:
      "Replace manual follow-up with lifecycle automations that capture, nurture, and retain the leads you paid to acquire.",
    url: "https://adsitdigital.com/services/conversion-optimization-automation",
    siteName: "Adsit Digital",
    images: [
      {
        url: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 675,
        alt: "Marketing automation dashboard visualizing customer lifecycle stages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversion Optimization + Automation",
    description:
      "Automate lifecycle messaging, tighten follow-up, and put revenue on rails with Adsit Digital’s conversion optimization systems.",
    images: [
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "/services/conversion-optimization-automation",
  },
};

export default function ConversionOptimizationAutomationPage() {
  return (
    <>
      <PageBrand brand="purple" />
      <div data-brand="purple" className="page-surface pb-32 pt-16">
        <section className="container relative flex w-full flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-3xl space-y-8">
            <div className="brand-badge">Conversion Optimisation &amp; Automation</div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
                Leads are landing. Let’s make sure they convert.
              </p>
              <h1 className="gradient-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Close the Gap Between Interest and Revenue
              </h1>
              <p className="muted-copy text-lg">
                Ads and content spark attention, but without the right experience and follow-up, prospects drop off.
                We design experiments, refine your user journeys, and automate communication so every lead gets the right
                nudge at the right time.
              </p>
            </div>
            <p className="subtle-copy text-sm">
              Whether it’s abandoned form fills, slow pipeline handoffs, or lagging appointment reminders, we fix the
              systems that quietly leak your growth.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact-us" aria-label="Automate your follow-up with Adsit Digital" className="brand-button">
                Automate Your Follow-Up →
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
            <div className="absolute -inset-6 bg-gradient-to-br from-emerald-400/25 via-sky-400/25 to-indigo-500/25 blur-3xl" />
            <div className="relative space-y-4 rounded-[32px] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-emerald-500/30 backdrop-blur-2xl">
              <div className="relative aspect-[5/6] overflow-hidden rounded-3xl border border-white/20 bg-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=960&q=80"
                  alt="Specialist reviewing automation workflows on a laptop"
                  fill
                  sizes="(max-width: 768px) 80vw, 420px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-slate-200 shadow-inner shadow-white/20">
                <p className="flex items-center gap-2 font-semibold text-white">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 text-xs text-slate-900">
                    ⚙️
                  </span>
                  Follow-up without babysitting
                </p>
                <p>
                  Automations handle status updates, scoring, and reminders so your team stays focused on the conversations
                  that close.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
          <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-slate-900/40 backdrop-blur-2xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Where leads disappear and how we fix it</h2>
            <p className="mt-4 text-sm text-slate-200">
              Your team already paid to earn attention. We make sure that interest matures into booked calls, signed
              proposals, and renewals instead of slipping through the cracks.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {frictionPoints.map((item) => (
                <div
                  key={item.title}
                  className="space-y-3 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 text-base font-semibold text-slate-900">
                    !
                  </span>
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-inner shadow-white/10">
              <p className="font-semibold text-white">You’ve already paid for attention. We make sure it pays you back.</p>
              <p className="mt-3">
                Instead of chasing down leads by hand, automation routes every signal into a workflow that nurtures,
                qualifies, and alerts the right people at the right time.
              </p>
            </div>
          </div>
        </section>
        <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
          <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-emerald-600/25 backdrop-blur-2xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">How we build lifecycle automation</h2>
            <p className="mt-4 text-sm text-slate-200">
              We combine data, messaging, and tooling to keep prospects engaged from first click through renewal without
              adding more to-do lists for your team.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {buildSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-400 text-sm font-semibold text-slate-900">
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
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">What changes once automation is live</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {proofPoints.map((point) => (
                <div
                  key={point.heading}
                  className="space-y-3 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl"
                >
                  <p className="text-lg font-semibold text-white">{point.heading}</p>
                  <p>{point.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative mx-auto mt-24 w-full max-w-5xl px-6">
          <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-emerald-600/25 backdrop-blur-2xl">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">Let automation work while you focus on growth.</h3>
                <p className="text-sm text-slate-200">
                  Stop leaking leads you have already invested to capture. We’ll orchestrate the lifecycle so every inquiry
                  feels seen, supported, and ready to move forward.
                </p>
                <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-100 shadow-inner shadow-white/10">
                  <p className="font-semibold text-white">Engagement</p>
                  <ul className="mt-3 space-y-2">
                    <li>
                      Setup: <span className="font-semibold text-white">$3,000–$6,000</span>
                    </li>
                    <li>
                      Ongoing Optimization: <span className="font-semibold text-white">$1,500–$3,000/month</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6 rounded-3xl border border-white/20 bg-gradient-to-br from-emerald-400/45 via-sky-500/35 to-indigo-500/30 p-8 text-center text-slate-900 shadow-2xl shadow-emerald-700/30 backdrop-blur-xl">
                <p className="text-xl font-semibold">
                  Every lead gets nurtured. Every opportunity gets tracked. Revenue becomes predictable without constant
                  babysitting.
                </p>
                <Link
                  href="/contact-us"
                  aria-label="Book your automation strategy session"
                  className="brand-button"
                >
                  Automate Your Follow-Up →
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="relative mx-auto mt-24 w-full max-w-4xl px-6 text-center">
          <div className="glass-panel shadow-brand-xl w-full max-w-4xl p-12" data-tone="accent">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
              Ignoring automation means paying for the same lead twice.
            </h2>
            <p className="mt-4 text-lg">
              Let’s make sure that never happens again. We’ll diagnose the gaps, build the workflows, and prove the lift
              so your pipeline stays warm and your team stays focused.
            </p>
            <Link href="/contact-us" aria-label="Start your conversion automation project" className="brand-button mt-8">
              Book Your Automation Plan →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
