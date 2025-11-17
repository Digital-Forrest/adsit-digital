import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBrand } from "@/components/page-brand";

const painPoints = [
  {
    title: "Traffic with no trail",
    description:
      "Ad clicks land on your site, but there’s no tracking, no nurture, and no clue what happened next.",
  },
  {
    title: "Budgets without feedback",
    description:
      "You keep funding campaigns based on surface metrics such as impressions, reach, and CPM while sales stay flat.",
  },
  {
    title: "Reports that read like algebra",
    description:
      "Dashboards feel overwhelming. You can’t see a straight line between the dollars you spend and the revenue you make.",
  },
];

const processSteps = [
  {
    step: "Step 1",
    title: "Audit & Strategy",
    description:
      "We dig into your audience, offers, and historic performance to decide where paid media can create the biggest lift.",
  },
  {
    step: "Step 2",
    title: "Campaign Build",
    description:
      "We launch Meta, Google, and YouTube campaigns aligned with your buyers’ intent and match every ad to a clear next step.",
  },
  {
    step: "Step 3",
    title: "Tracking & Routing",
    description:
      "Every form, call, and chat is tagged with UTMs and synced into your CRM so leads hit your pipeline within seconds.",
  },
  {
    step: "Step 4",
    title: "Reporting & Refinement",
    description:
      "We monitor cost per qualified lead, sales velocity, and close rates, fine-tuning audiences, creative, and budget allocation.",
  },
];

const outcomes = [
  {
    title: "You stop chasing clicks",
    description:
      "Campaigns are judged on booked calls and closed revenue, not vanity metrics.",
  },
  {
    title: "Dashboards show the truth",
    description:
      "See ad spend → leads → sales at a glance so you can scale with confidence.",
  },
  {
    title: "You control the pipeline",
    description:
      "Consistent lead flow means predictable months. No more feast-or-famine ad budgets.",
  },
];

const testimonials = [
  {
    quote:
      "We went from guessing to knowing. In three months we trimmed wasted spend by 28% and doubled qualified consults.",
    name: "Melissa Turner",
    role: "COO · Meridian Physical Therapy",
  },
  {
    quote:
      "Every lead now drops straight into HubSpot with source data. The team responds faster and we close more without increasing budget.",
    name: "Eric Johnson",
    role: "VP Growth · Potomac Tech Systems",
  },
  {
    quote:
      "Adsit Digital built campaigns around our existing content. Pipeline value jumped 1.6x because we finally knew what to scale.",
    name: "Lauren Patel",
    role: "Founder · Capital City Events",
  },
];

const faqs = [
  {
    question: "Do you replace our internal marketing team?",
    answer:
      "We can run point on strategy and execution or plug into your existing team. Either way, we own the media plan, creative briefs, routing, and reporting.",
  },
  {
    question: "How long until we see results?",
    answer:
      "Most clients see cleaner data and higher-quality leads within the first 30 days. Significant ROI improvements typically arrive in 60–90 days once optimization kicks in.",
  },
  {
    question: "Which CRMs do you integrate with?",
    answer:
      "We regularly connect to HubSpot, GoHighLevel, Salesforce, Intercom, and Close. If you have a custom solution, we’ll map the workflow before launch.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. Engagements are month-to-month after the first 90 days. If we are not earning our keep, you should be free to pivot.",
  },
];

export const metadata: Metadata = {
  title: "Paid Ads + Lead Flow System",
  description:
    "Spend smarter. Adsit Digital turns your best content into tracked, routed ad campaigns that deliver qualified leads and prove ROI.",
  openGraph: {
    title: "Paid Ads + Lead Flow System",
    description:
      "Launch Meta, Google, and YouTube campaigns with full tracking, CRM routing, and ROI dashboards for Arlington and Alexandria brands.",
    url: "https://adsitdigital.com/services/paid-ads-and-lead-flow",
    siteName: "Adsit Digital",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 675,
        alt: "Marketing team reviewing ad performance dashboards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Ads + Lead Flow System",
    description:
      "Stop funding campaigns you can’t track. We build paid media that routes leads into your CRM and proves revenue impact.",
    images: [
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "/services/paid-ads-and-lead-flow",
  },
};

export default function PaidAdsAndLeadFlowPage() {
  return (
    <>
      <PageBrand brand="dark-blue" />
      <div data-brand="dark-blue" className="page-surface pb-32 pt-16">
        <section className="container relative flex w-full flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-3xl space-y-8">
            <div className="brand-badge">Paid Ads + Lead Flow System</div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
                You’re doing the work. Let’s make sure people see it.
              </p>
              <h1 className="gradient-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Spend Smarter. Capture Every Lead.
              </h1>
              <p className="muted-copy text-lg">
                Awareness alone doesn’t pay the bills. Traffic without direction is noise, and ads without
                tracking are donations. We turn your best content into campaigns that capture intent, route
                leads instantly, and show exactly what’s driving revenue.
              </p>
            </div>
            <p className="subtle-copy text-sm">
              If you’re tired of guessing which campaigns work, we’ll give you a feedback loop that ties every
              dollar to the conversations that matter.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact-us" aria-label="Request your ad strategy" className="brand-button">
                Request Your Ad Strategy →
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
          <div className="relative space-y-4 rounded-[32px] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-indigo-500/30 backdrop-blur-2xl">
            <div className="relative aspect-[5/6] overflow-hidden rounded-3xl border border-white/20 bg-white/5">
              <Image
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=960&q=80"
                alt="Advertising professionals reviewing campaign metrics"
                fill
                sizes="(max-width: 768px) 80vw, 420px"
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-slate-200 shadow-inner shadow-white/20">
              <p className="flex items-center gap-2 font-semibold text-white">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 text-xs text-slate-900">
                  📈
                </span>
                Built around ROI, not impressions
              </p>
              <p>
                We treat paid media like a profit center: smart targeting, rapid routing, and reports that
                make decisions obvious.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-slate-900/40 backdrop-blur-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">The cost of untracked ads</h2>
          <p className="mt-4 text-sm text-slate-200">
            Most campaigns fail because they lack a feedback loop. They chase impressions instead of
            intention, leaving you to guess which efforts actually moved the needle.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {painPoints.map((item) => (
              <div
                key={item.title}
                className="space-y-3 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-base font-semibold text-slate-900">
                  !
                </span>
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-inner shadow-white/10">
            <p className="font-semibold text-white">Every dollar without attribution is a dollar lost.</p>
            <p className="mt-3">
              We build the loop that shows where leads come from, how they’re nurtured, and which campaigns
              deserve more budget.
            </p>
          </div>
        </div>
      </section>
      <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-indigo-600/25 backdrop-blur-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">How we turn ads into revenue</h2>
          <p className="mt-4 text-sm text-slate-200">
            We combine direct-response strategy with modern data tooling so you can see the whole journey.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {processSteps.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 text-sm font-semibold text-slate-900">
                  {item.step}
                </span>
                <div>
                  <p className="text-base font-semibold text-white">{item.title}</p>
                  <p className="mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative mx-auto mt-24 w-full max-w-5xl px-6">
        <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-slate-900/35 backdrop-blur-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Proof it works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="space-y-4 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-100 shadow-lg shadow-white/10 backdrop-blur-xl"
              >
                <blockquote className="text-sm italic text-slate-200">“{item.quote}”</blockquote>
                <figcaption className="text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
                  <span className="block font-semibold">{item.name}</span>
                  {item.role}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
            *Results shown are illustrative. Actual performance depends on market, offer strength, and sales process.
          </p>
        </div>
      </section>
      <section className="relative mx-auto mt-24 w-full max-w-5xl px-6">
        <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-emerald-600/25 backdrop-blur-2xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">It’s time your ads worked as hard as you do.</h3>
              <p className="text-sm text-slate-200">
                Let’s turn your best content into consistent, trackable growth. We’ll handle the media plan
                while your team handles the conversations.
              </p>
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-100 shadow-inner shadow-white/10">
                <p className="font-semibold text-white">Investment</p>
                <ul className="mt-3 space-y-2">
                  <li>
                    Monthly Retainer: <span className="font-semibold text-white">$3,000–$7,500</span>
                  </li>
                  <li>
                    Setup Fee: <span className="font-semibold text-white">$1,000–$2,000</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/20 bg-gradient-to-br from-indigo-500/40 via-sky-500/35 to-emerald-400/35 p-8 text-center text-slate-900 shadow-2xl shadow-indigo-700/30 backdrop-blur-xl">
              <p className="text-xl font-semibold">
                Request a strategy session and we’ll map the campaigns, routing, and reporting before you
                spend another dollar.
              </p>
              <Link
                href="/contact-us"
                aria-label="Request your ad strategy"
                className="brand-button"
              >
                Request Your Ad Strategy →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="grid gap-8 rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-slate-900/40 backdrop-blur-2xl md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Our guarantee & availability</h2>
            <p className="text-sm text-slate-200">
              We stand behind every campaign. If we don’t hit agreed-upon lead quality benchmarks within 90
              days, we keep optimizing at no extra cost until we do.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl">
            <p className="font-semibold text-white">Risk reversal</p>
            <p>
              You get weekly reporting, transparent budgets, and direct access to the strategists running
              your account. No black box dashboards.
            </p>
            <p className="font-semibold text-white">Scarcity</p>
            <p>
              To maintain response times, we onboard only three new paid media clients per quarter. Secure
              your spot before the calendar fills.
            </p>
          </div>
        </div>
      </section>
      <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-slate-900/40 backdrop-blur-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">When your ads work, growth gets simple</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="space-y-3 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl"
              >
                <p className="text-lg font-semibold text-white">{outcome.title}</p>
                <p>{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-indigo-600/25 backdrop-blur-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="space-y-3 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl"
              >
                <p className="font-semibold text-white">{faq.question}</p>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        <section className="container relative mt-24 flex justify-center text-center">
          <div className="glass-panel shadow-brand-xl w-full max-w-4xl p-12" data-tone="accent">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
              Ready to stop guessing and start scaling?
            </h2>
            <p className="mt-4 text-lg">
              Book a strategy call. We’ll audit your current campaigns, identify waste, and outline the system
              that turns ad spend into revenue you can trust.
            </p>
            <Link
              href="/contact-us"
              aria-label="Book your paid ads strategy call"
              className="brand-button mt-8"
            >
              Book Your Strategy Call →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

