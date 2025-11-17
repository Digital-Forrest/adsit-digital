import type { Metadata } from "next";
import Image from "next/image";
import { PageBrand } from "@/components/page-brand";

const beliefStatements = [
  "Clarity beats complexity; marketing should never feel like a guessing game.",
  "Creative must move revenue, not just rack up likes.",
  "Local businesses deserve clean, contextual data that actually guides decisions.",
];

const clientSegments = [
  "Law firms building trust and authority.",
  "Medical practices elevating patient journeys.",
  "Contractors scaling word-of-mouth into predictable demand.",
  "Tech startups communicating vision with clarity.",
  "Hospitality brands crafting memorable customer experiences.",
];

export const metadata: Metadata = {
  title: "About Adsit Digital",
  description:
    "Discover the story behind Adsit Digital and how we help Virginia businesses connect creative, ads, and data into one growth system.",
  openGraph: {
    title: "About Adsit Digital",
    description:
      "Meet the team aligning creative, ads, and data so Virginia businesses can market with clarity and confidence.",
    url: "https://adsitdigital.com/about-us",
    siteName: "Adsit Digital",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 675,
        alt: "Marketing strategist reviewing analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Adsit Digital",
    description:
      "We connect creative, ads, and data so Virginia businesses can scale with confidence.",
    images: [
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageBrand brand="purple" />
      <div data-brand="purple" className="page-surface pb-32 pt-16">
        <section className="container relative flex w-full flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-8">
            <div className="brand-badge">About Adsit Digital</div>
            <h1 className="gradient-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              We Don’t Guess. We Measure.
            </h1>
            <p className="muted-copy text-lg">
              Adsit Digital exists so growth-minded business owners see the same clarity the big brands pay
              for. We bring creative, media, and analytics under one glass-roof operation,
              keeping every move intentional.
            </p>
            <p className="subtle-copy text-sm">
              From the first strategy conversation to the dashboards you check each morning, we align every
              deliverable around your goals, KPIs, and customer experience.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact-us"
                aria-label="Schedule an intro call"
                className="brand-button"
              >
                Book Your Intro Call
              </a>
              <a
                href="/how-it-works"
                aria-label="Learn how our system works"
                className="brand-button"
                data-variant="ghost"
              >
                See How It Works
              </a>
            </div>
          </div>
          <div className="glass-panel shadow-brand-lg w-full max-w-md space-y-6 p-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[color:var(--border-glass)] bg-[color:var(--surface-overlay)]">
              <Image
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=720&q=80"
                alt="Forrest Adsit collaborating with clients"
                fill
                sizes="(max-width: 768px) 60vw, 360px"
                className="object-cover"
                priority
              />
            </div>
            <div className="glass-panel space-y-2 p-4 text-sm" data-tone="inset">
              <p>
                “Our promise is simple: measure everything, simplify the noise, and build systems that let
                owners lead with confidence.”
              </p>
              <p className="subtle-copy text-xs">— Forrest & Chandler Adsit</p>
            </div>
          </div>
        </section>
        <section className="container relative mt-24">
          <div className="glass-panel shadow-brand-xl grid gap-10 p-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">What We Believe</h2>
              <p className="muted-copy text-lg">
                These principles keep our work focused on outcomes that matter, not vanity metrics.
              </p>
              <ul className="space-y-4 text-sm">
                {beliefStatements.map((statement) => (
                  <li key={statement} className="glass-panel p-5" data-tone="inset">
                    {statement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel space-y-4 p-6 text-sm" data-tone="subtle">
              <p className="font-semibold">Built for decision-makers</p>
              <p className="subtle-copy">
                We translate performance into language founders, COOs, and marketing leaders can act on.
                Because when you know what works, you double down faster.
              </p>
            </div>
          </div>
        </section>
        <section className="container relative mt-24">
          <div className="glass-panel shadow-brand-xl grid gap-8 p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
                The Companies We Serve
              </h2>
              <p className="muted-copy text-lg">
                We partner with established teams who want their marketing to reflect the caliber of their
                service wherever they operate.
              </p>
            </div>
            <ul className="grid gap-4 text-sm sm:grid-cols-2">
              {clientSegments.map((segment) => (
                <li key={segment} className="glass-panel p-5" data-tone="inset">
                  {segment}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="container relative mt-24">
          <div className="glass-panel shadow-brand-xl p-10">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">Why We’re Different</h2>
            <div className="mt-6 space-y-6">
              <p className="muted-copy text-lg font-semibold">
                We’re Brothers Who Know the Struggle of Marketing That Doesn’t Work.
              </p>
              <div className="space-y-4 text-sm">
                <p className="muted-copy leading-relaxed">
                  I&apos;m Forrest Adsit, founder of Adsit Digital. Years ago, I was pouring time and money into
                  content and ads that looked good but didn&apos;t deliver. I know the frustration of seeing
                  &quot;engagement&quot; without actual growth and the sinking feeling of not knowing what&apos;s working.
                </p>
                <p className="muted-copy leading-relaxed">
                  That’s why I built Adsit Digital: to give business owners a system they can trust.
                </p>
                <p className="muted-copy leading-relaxed">
                  I’m joined by my younger brother, Chandler Adsit, a content creator and videographer with an
                  eye for brand storytelling. After his time at a different agency, Chandler launched his own
                  high-end creative work, specializing in YouTube content, short-form video, and photography.
                  He brings a sharp understanding of brand image and design, for multiple industries, from
                  luxury lifestyle to outdoor recreation.
                </p>
                <p className="muted-copy leading-relaxed">
                  Together, we combine strategy and creativity into one clear path: marketing that scales.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <p className="muted-copy text-lg font-semibold">Our Approach: Strategy + Storytelling.</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="glass-panel space-y-2 p-6" data-tone="inset">
                    <p className="font-semibold">Strategy (Forrest)</p>
                    <p className="subtle-copy">
                      Clear ROI, predictable funnels, and omnichannel ads that work.
                    </p>
                  </div>
                  <div className="glass-panel space-y-2 p-6" data-tone="inset">
                    <p className="font-semibold">Storytelling (Chandler)</p>
                    <p className="subtle-copy">
                      High-end media that captures attention, reflects brand identity, and connects
                      emotionally.
                    </p>
                  </div>
                </div>
                <p className="muted-copy mt-4">
                  With both perspectives, you don&apos;t just get &quot;more content&quot;, you get a growth engine that
                  ties directly to leads, sales, and brand authority.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container relative mt-24 flex justify-center">
          <div className="glass-panel shadow-brand-xl w-full max-w-4xl p-12 text-center" data-tone="accent">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
              Ready to talk about your goals?
            </h2>
            <p className="mt-4 text-lg">
              Schedule a short intro call to see how our team can connect the moving parts, keep your data
              clean, and turn scattered marketing into a growth system.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact-us"
                aria-label="Book your intro call"
                className="brand-button"
              >
                Book Your Intro Call →
              </a>
              <span className="text-sm opacity-80">
                No pressure, just a candid look at where you are and how we can help.
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

