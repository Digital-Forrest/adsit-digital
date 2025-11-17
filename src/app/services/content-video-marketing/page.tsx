import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBrand } from "@/components/page-brand";

const painPoints = [
  {
    title: "Inconsistent presence",
    description:
      "Weeks pass without new posts. Visitors wonder if you’re still active, and prospects choose the competitor they see every day.",
  },
  {
    title: "No proof of expertise",
    description:
      "Your best stories live in your head. Without video and content, potential clients can’t feel the experience everyone raves about.",
  },
  {
    title: "Stalled referrals",
    description:
      "Word-of-mouth dries up when there’s nothing online to reinforce it. Silence causes momentum to stall, even for great teams.",
  },
];

const storytellingSteps = [
  {
    icon: "🧭",
    title: "Strategy & Calendar",
    description:
      "We define your audience, map your buyer journey, and plan topics that attract, educate, and convert, right down to scripts and shot lists.",
  },
  {
    icon: "🎥",
    title: "Shoot & Create",
    description:
      "Each session produces 15–20 short reels, 2–3 long-form videos, and an updated photo library that our team films, directs, and edits.",
  },
  {
    icon: "🚀",
    title: "Publish & Repurpose",
    description:
      "We format assets for SEO, social, email, and ads, then deploy them through your automation stack so your presence stays consistent everywhere.",
  },
  {
    icon: "📊",
    title: "Review & Refine",
    description:
      "We monitor reach, clicks, and conversions to double down on what works, informing the next shoot and the next round of stories.",
  },
];

const outcomes = [
  {
    title: "Your calendar fills faster",
    description:
      "Prospects see your expertise before they ever speak with you, shortening sales cycles and increasing qualified bookings.",
  },
  {
    title: "Your brand becomes recognisable",
    description:
      "Consistent storytelling builds familiarity. People remember the business that shows up with clarity and confidence.",
  },
  {
    title: "You justify premium pricing",
    description:
      "When your content mirrors the quality of your delivery, clients stop asking why you cost more; they already know.",
  },
];

const testimonials = [
  {
    quote:
      "Within eight weeks our videos became the top traffic source. Consultations doubled without increasing ad spend.",
    name: "Dana Cooper",
    role: "Managing Partner · Cooper & Ellis Law",
  },
  {
    quote:
      "We finally sound like the team clients meet in person. The calendar stays booked two months out.",
    name: "Victor Ramirez",
    role: "Founder · Nova Home Renovations",
  },
  {
    quote:
      "The Adsit crew helped me create two weeks of content in a single day and made me look and feel confident on camera.",
    name: "Dr. Hannah Price",
    role: "Director · Renew Wellness Clinic",
  },
];

const faqs = [
  {
    question: "How involved does my team need to be?",
    answer:
      "We handle strategy, scripting, filming, and editing. You simply show up on shoot day ready to talk about what you already know. Approvals happen through a simple portal.",
  },
  {
    question: "Can you work with our existing marketing staff?",
    answer:
      "Absolutely. We partner with in-house teams and agencies to supply the content engine and hand off assets in the formats they need.",
  },
  {
    question: "Do you only work with nearby clients?",
    answer:
      "We partner with growth-minded teams wherever they’re located and routinely travel for dedicated shoot days.",
  },
  {
    question: "What if the videos don’t perform?",
    answer:
      "We monitor analytics, adjust scripts and hooks, and reshoot when needed. If we don’t see meaningful engagement lift within 90 days, we keep producing at no additional cost until we do.",
  },
];

export const metadata: Metadata = {
  title: "Content & Video Marketing",
  description:
    "Show, don’t tell. Adsit Digital turns your expertise into consistent video and content that builds authority, fuels SEO, and drives inbound demand.",
  openGraph: {
    title: "Content & Video Marketing",
    description:
      "Make your brand impossible to ignore with strategic storytelling, professional video, and automated distribution built by Adsit Digital.",
    url: "https://adsitdigital.com/services/content-video-marketing",
    siteName: "Adsit Digital",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 675,
        alt: "Creative team filming marketing content",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content & Video Marketing",
    description:
      "Transform your expertise into content that converts. Strategy, production, distribution, and optimization handled for you.",
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "/services/content-video-marketing",
  },
};

export default function ContentVideoMarketingPage() {
  return (
    <>
      <PageBrand brand="orange" />
      <div data-brand="orange" className="page-surface pb-32 pt-16">
        <section className="container relative flex w-full flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-3xl space-y-8">
            <div className="brand-badge">Content &amp; Video Marketing</div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
                You’re doing great work, but no one knows it.
              </p>
              <h1 className="gradient-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Turn Quiet Expertise into Loud Demand
              </h1>
              <p className="muted-copy text-lg">
                You’ve built something worth talking about. Your best stories live in conversations, not on
                camera. We change that by planning, producing, and distributing content that shows what you do
                best.
              </p>
            </div>
            <p className="subtle-copy text-sm">
              When your message isn’t clear or consistent, buyers assume someone else does it better. We
              capture your expertise and deliver it as scroll-stopping videos, articles, and social media that
              work across every platform without you writing a single script.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact-us" aria-label="Start your content plan" className="brand-button">
                Start Your Content Plan →
              </Link>
              <Link
                href="/services"
                aria-label="Back to services overview"
                className="brand-button"
                data-variant="ghost"
              >
                View All Services
              </Link>
            </div>
          </div>
        <div className="relative w-full max-w-lg">
          <div className="absolute -inset-6 bg-gradient-to-br from-emerald-400/25 via-sky-400/30 to-indigo-500/25 blur-3xl" />
          <div className="relative space-y-4 rounded-[32px] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-emerald-500/30 backdrop-blur-2xl">
            <div className="relative aspect-[5/6] overflow-hidden rounded-3xl border border-white/20 bg-white/5">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=960&q=80"
                alt="Content marketing team producing videos"
                fill
                sizes="(max-width: 768px) 80vw, 420px"
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-slate-200 shadow-inner shadow-white/20">
              <p className="flex items-center gap-2 font-semibold text-white">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 text-xs text-slate-900">
                  🎬
                </span>
                Show, don’t tell
              </p>
              <p>
                We handle scripts, direction, filming, and post-production so your team stays focused on
                delivering remarkable client work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-slate-900/40 backdrop-blur-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Silence is costing you clients</h2>
          <p className="mt-4 text-sm text-slate-200">
            Every day your feed goes quiet, you hand attention to the competitor who simply talks more.
            Prospects assume the most visible business is the most qualified, even when that isn’t true.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {painPoints.map((item) => (
              <div
                key={item.title}
                className="space-y-3 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 text-base font-semibold text-slate-900">
                  !
                </span>
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-inner shadow-white/10">
            <p className="font-semibold text-white">If you’re not telling your story consistently, someone else is.</p>
            <p className="mt-3">
              We fix the gap by turning raw expertise into a steady drumbeat of content tuned to the way
              modern buyers research and decide.
            </p>
          </div>
        </div>
      </section>
      <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-indigo-600/25 backdrop-blur-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">The Adsit Digital content engine</h2>
          <p className="mt-4 text-sm text-slate-200">
            We apply a direct-response mindset to storytelling. Every shoot is mapped to outcomes, every
            asset has a job, and every metric gets tracked.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {storytellingSteps.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-purple-500 text-sm font-semibold text-slate-900">
                  {String(index + 1).padStart(2, "0")}
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
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Proof from teams we partner with</h2>
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
            *Results shown are representative, not guaranteed. Your outcomes depend on your offer, market, and follow-through.
          </p>
        </div>
      </section>
      <section className="relative mx-auto mt-24 w-full max-w-5xl px-6">
        <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-emerald-600/25 backdrop-blur-2xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Ready for content that sells while you work?</h3>
              <p className="text-sm text-slate-200">
                Partner with us monthly or book an intensive shoot. Either way, you leave with a bank of
                story-driven assets and a system to publish them.
              </p>
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-100 shadow-inner shadow-white/10">
                <p className="font-semibold text-white">Investment</p>
                <ul className="mt-3 space-y-2">
                  <li>
                    Monthly Retainer: <span className="font-semibold text-white">$2,500–$8,000</span>
                  </li>
                  <li>
                    One-Time Video Shoot: <span className="font-semibold text-white">$3,500–$10,000</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/20 bg-gradient-to-br from-emerald-400/40 via-sky-400/35 to-indigo-600/35 p-8 text-center text-slate-900 shadow-2xl shadow-emerald-700/30 backdrop-blur-xl">
              <p className="text-xl font-semibold">
                Your next 90 days of content can be captured in one shoot. We’ll plan it, produce it, and put it to work.
              </p>
              <Link
                href="/contact-us"
                aria-label="Start your content plan"
                className="brand-button"
              >
                Start Your Content Plan →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="grid gap-8 rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-slate-900/40 backdrop-blur-2xl md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Our promise & availability</h2>
            <p className="text-sm text-slate-200">
              We stand behind the stories we produce. If engagement doesn’t move within 90 days, we create
              an additional round of assets at no charge until it does.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-lg shadow-white/10 backdrop-blur-xl">
            <p className="font-semibold text-white">Risk reversal</p>
            <p>
              Every engagement includes a performance review with action steps and fresh creative if we
              haven’t hit meaningful lift yet. No excuses, just more work on our end.
            </p>
            <p className="font-semibold text-white">Scarcity</p>
            <p>
              To keep production quality high, we only accept four new content retainer clients per quarter.
              Secure your slot before the calendar closes.
            </p>
          </div>
        </div>
      </section>
      <section className="relative mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl shadow-slate-900/40 backdrop-blur-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">When your content works, everything gets easier</h2>
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
          <div className="mt-6 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200 shadow-inner shadow-white/10">
            <p className="font-semibold text-white">Don’t let your brand stay invisible.</p>
            <p className="mt-3">
              The companies winning online aren’t necessarily better; they’re louder, clearer, and more
              consistent. Let’s change that with a storytelling engine fuelled by your expertise.
            </p>
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
              Ready to be the brand everyone remembers?
            </h2>
            <p className="mt-4 text-lg">
              Book a strategy call and we’ll map your content plan, outline shoot days, and show how to keep
              your story visible, persuasive, and unmistakably yours.
            </p>
            <Link
              href="/contact-us"
              aria-label="Book your content strategy call"
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

