import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBrand } from "@/components/page-brand";

const roadmapStages = [
  {
    title: "Foundation First",
    timeframe: "Weeks 1–2",
    description:
      "We audit your digital footprint, map the funnel, and define what success must look like before we build anything new.",
    outcomes: [
      "Clarity on your audience, offers, and local search landscape",
      "Tracking, analytics, and CRM requirements locked in",
      "Prioritized launch plan with stakeholder approvals",
    ],
  },
  {
    title: "Build & Launch",
    timeframe: "Weeks 3–6",
    description:
      "We rebuild or refresh your site with conversion architecture, schema, and speed that reflect how your buyers make decisions.",
    outcomes: [
      "High-performing site design and copy aligned to your market’s demand",
      "Technical SEO foundations, security hardening, and accessibility checks",
      "Goal-tracking dashboards ready before launch day",
    ],
  },
  {
    title: "Fuel & Amplify",
    timeframe: "Weeks 6–10",
    description:
      "We spin up content, video, and paid media that all tell the same story so prospects stay connected from first touch to call booked.",
    outcomes: [
      "Video, blog, and social content calendar tied to your service priorities",
      "Paid media creative tailored to each channel’s strongest buyer signals",
      "Lead qualification matrix to capture the right conversations quickly",
    ],
  },
  {
    title: "Optimize & Automate",
    timeframe: "Weeks 10–14",
    description:
      "We automate lead handling and nurture flows so your team can respond faster while we test offers, forms, and follow-up journeys.",
    outcomes: [
      "Lifecycle automations for inquiries, appointments, and missed follow-ups",
      "Experiment backlog for landing pages, offers, and CTAs",
      "CRM hygiene routines so reporting stays clean and trustworthy",
    ],
  },
  {
    title: "Measure & Scale",
    timeframe: "Quarterly Sprints",
    description:
      "We unify campaign, revenue, and pipeline data so you can double down on what performs and sunset the rest with confidence.",
    outcomes: [
      "Unified ROI dashboards showing cost, velocity, and closed revenue",
      "Quarterly growth narrative outlining what to sustain, scale, or shift",
      "Budget recommendations anchored to real performance, not gut feel",
    ],
  },
];

const capabilityTracks = [
  {
    title: "Website Design + Local SEO",
    description:
      "Your site becomes the base camp for the journey. We design fast-loading, conversion-minded experiences optimized for local search signals, tracked, secured, and built to capture qualified leads.",
    href: "/services/website-launch-seo",
    label: "Get your website quote →",
  },
  {
    title: "Content & Video Marketing",
    description:
      "Silence is the real competitor. We capture your expertise and repurpose it into scroll-stopping videos, blogs, and social narratives that make your brand impossible to miss and impossible to forget.",
    href: "/services/content-video-marketing",
    label: "Start your content plan →",
  },
  {
    title: "Paid Ads + Lead Flow System",
    description:
      "We turn your strongest stories into precision campaigns across Google, Meta, and YouTube. Every lead is tagged, routed, and enriched automatically so you see ROI in real time, not weeks later.",
    href: "/services/paid-ads-and-lead-flow",
    label: "Request your ad strategy →",
  },
  {
    title: "Conversion Optimization + Automation",
    description:
      "Leads shouldn’t vanish in the void. We craft automations for abandoned inquiries, appointment reminders, and behavior-triggered nurture journeys, keeping pipelines full and prospects engaged.",
    href: "/contact-us",
    label: "Automate your follow-up →",
  },
  {
    title: "Audience Data Intelligence",
    description:
      "The story ends in clarity. We unify form fills, ad clicks, and revenue events into a live ROI dashboard so you know what’s working, what to scale, and what to sunset.",
    href: "/contact-us",
    label: "Get your data audit →",
  },
];

const eligibilitySignals = [
  "You serve a defined market and want the communities you rely on to recognize it.",
  "You already close deals and want the marketing engine to catch up to your delivery standards.",
  "You value strategic partners who document, report, and optimize with transparency.",
  "You’re ready to invest in assets that compound, not flash-in-the-pan tactics.",
];

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Discover the Adsit Digital growth system where website launch, content, paid media, automation, and audience data align to scale Virginia businesses.",
  openGraph: {
    title: "How Adsit Digital Works",
    description:
      "See the proven path we use to turn fragmented marketing into a predictable growth system for Virginia brands.",
    url: "https://adsitdigital.com/how-it-works",
    siteName: "Adsit Digital",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 675,
        alt: "Creative team collaborating over marketing strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Adsit Digital Works",
    description:
      "From launch to scale, walk through the system that aligns your marketing into one growth engine.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageBrand brand="dark-blue" />
      <div data-brand="dark-blue" className="page-surface pb-32 pt-16">
        <section className="container relative flex w-full flex-col gap-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-8">
            <div className="brand-badge">Proven Path</div>
            <h1 className="gradient-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              The Proven Path to Predictable Growth
            </h1>
            <p className="muted-copy text-pretty text-lg md:text-xl">
              You built a business people love, but disconnected marketing makes results feel random. Adsit
              Digital weaves growing brands into a single, working system so every effort tells the same
              story and compounds over time.
            </p>
            <p className="subtle-copy text-sm">
              We connect the dots between strategy, creative, media, and measurement. No more dart throws;
              just clear direction backed by data.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact-us"
                aria-label="Book a growth strategy session"
                className="brand-button"
              >
                Book a Strategy Call
              </a>
              <Link
                href="/blog"
                aria-label="Explore growth resources"
                className="brand-button"
                data-variant="ghost"
              >
                Explore Resources
              </Link>
            </div>
          </div>
          <div className="glass-panel shadow-brand-lg w-full max-w-md p-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[color:var(--border-glass)] bg-[color:var(--surface-overlay)]">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=720&q=80"
                alt="Marketing team planning a growth roadmap"
                fill
                sizes="(max-width: 768px) 60vw, 360px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
        <section className="container relative mt-24">
          <div className="glass-panel shadow-brand-xl overflow-hidden p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-4">
                <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
                  Follow the Roadmap, Not Random Tactics
                </h2>
                <p className="muted-copy text-lg">
                  Every stage compounds the last so curiosity turns into consultations and consultations
                  turn into revenue without guessing what comes next.
                </p>
              </div>
              <div className="glass-panel max-w-xs p-5 text-sm" data-tone="inset">
                <p className="font-semibold">Why we sequence it this way</p>
                <p className="subtle-copy mt-2">
                  Strong foundations make the rest efficient. We front-load clarity and infrastructure so the
                  marketing engine runs clean as we scale spend.
                </p>
              </div>
            </div>
            <div className="relative mt-12 flex flex-col gap-10">
              <span
                aria-hidden="true"
                className="timeline-spine absolute left-[27px] top-0 hidden h-full w-px md:block"
              />
              {roadmapStages.map((stage, index) => (
                <article
                  key={stage.title}
                  className="glass-panel relative px-6 py-6 md:flex md:items-start md:gap-8 md:px-10"
                  data-tone="subtle"
                >
                  <div className="relative mb-4 flex items-center gap-4 md:mb-0 md:flex-col md:items-start">
                    <span className="brand-chip text-base font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
                      {stage.timeframe}
                    </span>
                    {index !== roadmapStages.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="timeline-connector absolute left-6 top-12 hidden h-[calc(100%-1.5rem)] w-px md:block"
                      />
                    )}
                  </div>
                  <div className="space-y-4 text-sm md:text-base">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">{stage.title}</h3>
                      <p className="subtle-copy">{stage.description}</p>
                    </div>
                    <ul className="grid gap-2 rounded-2xl border border-[color:var(--border-glass)] bg-[color:var(--surface-overlay)] p-4 text-sm md:grid-cols-2">
                      {stage.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2">
                          <span className="timeline-bullet" />
                          <span className="subtle-copy">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="container relative mt-24">
          <div className="glass-panel shadow-brand-xl grid gap-8 p-10">
            <div className="space-y-4">
              <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
                The Operating System Behind the Roadmap
              </h2>
              <p className="muted-copy text-lg">
                Each phase taps into a specialist lane so delivery stays on tempo and you never guess who
                owns what.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {capabilityTracks.map((track) => (
                <div key={track.title} className="glass-panel space-y-4 p-6" data-tone="inset">
                  <h3 className="text-xl font-semibold">{track.title}</h3>
                  <p className="subtle-copy text-sm">{track.description}</p>
                  <a href={track.href} aria-label={track.label} className="brand-link text-xs font-semibold">
                    {track.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="container relative mt-24 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel space-y-6 p-10 shadow-brand-xl">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">Who We Partner With</h2>
            <p className="muted-copy">
              Our best work happens with teams who view marketing as an investment in long-term growth rather
              than a quick fix. If that’s you, we’ll mesh seamlessly.
            </p>
            <ul className="grid gap-4 text-sm">
              {eligibilitySignals.map((signal) => (
                <li key={signal} className="glass-panel p-5" data-tone="subtle">
                  {signal}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel space-y-6 p-8" data-tone="subtle">
            <h3 className="text-2xl font-semibold">Not chasing shiny objects</h3>
            <p className="subtle-copy">
              If you’re looking for hacks or overnight wins, we’re not the right fit. We design systems that
              compound, with clear strategy, transparent reporting, and craftsmanship that reflects your
              brand.
            </p>
            <p className="subtle-copy">
              The result: sustainable visibility, pipeline clarity, and growth you can stand behind.
            </p>
          </div>
        </section>
        <section className="container relative mt-24 flex justify-center">
          <div className="glass-panel shadow-brand-xl w-full max-w-4xl p-12 text-center" data-tone="accent">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">Your Next Step</h2>
            <p className="mt-4 text-lg">
              You’ve seen the system. You know the story. Now make your next chapter predictable with a
              roadmap that connects every touchpoint before you invest another dollar.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact-us"
                aria-label="Book your free strategy call"
                className="brand-button"
              >
                Book your free strategy call →
              </a>
              <span className="text-sm opacity-80">
                We’ll map your growth path, highlight the gaps, and show exactly how the system fits your
                team.
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

