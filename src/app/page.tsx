import { PageBrand } from "@/components/page-brand";

const differentiators = [
  {
    heading: "Cross-channel orchestration",
    copy: "Synchronise paid, owned, and earned media so every touchpoint compounds results.",
  },
  {
    heading: "Insights that move fast",
    copy: "Dashboards surface live performance data, letting your team pivot in real time.",
  },
  {
    heading: "Creative that converts",
    copy: "Human-first storytelling backed by testing frameworks keeps campaigns fresh.",
  },
];

export default function Home() {
  return (
    <>
      <PageBrand brand="light-blue" />
      <div data-brand="light-blue" className="page-surface pb-32 pt-16">
        <section className="container relative flex w-full flex-col gap-16 md:flex-row md:items-center md:justify-between">
          <div className="w-full max-w-3xl space-y-8 md:max-w-none md:pr-10">
            <div className="brand-badge">Full-Service Marketing Agency</div>
            <h1 className="gradient-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Growth-driven campaigns for ambitious brands
            </h1>
            <p className="muted-copy text-pretty text-lg md:text-xl">
              Combine strategy, creative, and performance media to deliver measurable marketing outcomes.
              Discover how our team can turn your vision into sustained revenue growth.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact-us"
                aria-label="Connect with Adsit Digital"
                className="brand-button"
              >
                Schedule a Strategy Call
              </a>
              <a
                href="/how-it-works"
                aria-label="Learn how Adsit Digital works"
                className="brand-button"
                data-variant="ghost"
              >
                Explore Our Process
              </a>
            </div>
            <dl className="hero-dl sm:grid-cols-3">
              <div>
                <dt>Average ROAS</dt>
                <dd>5.2x</dd>
              </div>
              <div>
                <dt>Creative experiments</dt>
                <dd>+130/mo</dd>
              </div>
              <div>
                <dt>Client retention</dt>
                <dd>94%</dd>
              </div>
            </dl>
          </div>
        </section>
        <section className="container relative mt-24 flex w-full flex-col gap-12">
          <div className="glass-panel shadow-brand-xl grid gap-8 p-10" data-tone="subtle">
            <div className="space-y-4">
              <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
                Your Growth Journey Starts Here
              </h2>
              <p className="muted-copy text-lg">
                You didn’t launch your business to patchwork marketing channels together. When content,
                ads, analytics, and site updates live in separate silos, momentum slips away. At Adsit
                Digital, every service becomes a chapter of your growth narrative.
              </p>
            </div>
            <ul className="grid gap-4 text-sm sm:grid-cols-2">
              {[
                "Launch a website engineered to convert",
                "Fuel your presence with traffic and content",
                "Capture leads with clear, simple flows",
                "Optimize every conversion touchpoint",
                "Understand your audience with actionable data",
              ].map((item) => (
                <li key={item} className="glass-panel flex items-center gap-3 p-4" data-tone="inset">
                  <span className="brand-chip">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="subtle-copy text-sm">
              Aligning these stages creates a marketing engine that compounds growth instead of adding
              busywork to your calendar.
            </p>
          </div>
          <div className="glass-panel shadow-brand-lg w-full max-w-5xl space-y-8 p-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
                Why growth leaders choose Adsit Digital
              </p>
              <p className="subtle-copy text-sm">
                Each engagement pairs senior strategists with performance specialists to align funnel KPIs
                with creative experimentation.
              </p>
            </div>
            <ul className="grid gap-6 text-sm md:grid-cols-3">
              {differentiators.map((item) => (
                <li key={item.heading} className="glass-panel space-y-1 p-4" data-tone="inset">
                  <p className="font-semibold">{item.heading}</p>
                  <p className="subtle-copy">{item.copy}</p>
                </li>
              ))}
            </ul>
            <div className="glass-panel mt-6 p-4 text-sm" data-tone="inset">
              Looking for specific channel support? Our specialists cover lifecycle marketing, paid search &
              social, CRO, and content automation.
            </div>
          </div>
        </section>
        <section className="container relative mt-20 grid gap-8 lg:grid-cols-5">
          <div className="glass-panel shadow-brand-lg col-span-2 space-y-6 p-8">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
              What We Offer, Aligned to Your Ambition
            </h2>
            <p className="muted-copy">
              Think of us as system builders. We design the infrastructure, content, and automation that
              keep qualified prospects moving toward a confident “yes.”
            </p>
          </div>
          <div className="col-span-3 space-y-6">
            {[
              {
                title: "Website & Launch",
                body:
                  "Your site becomes command central: fast-loading, responsive, lead-ready, and prepped for scale. We layer in local SEO so the right customers find you first.",
              },
              {
                title: "Content & Video Marketing",
                body:
                  "If the site is the hub, content is the fuel. We capture your voice and repurpose it into blogs, videos, reels, and drip distribution so you stay visible and credible.",
              },
              {
                title: "Paid Ads & Lead Flow",
                body:
                  "Need velocity? We orchestrate targeted Google, Meta, and YouTube campaigns, then route every lead into your CRM so no opportunity falls through the cracks.",
              },
              {
                title: "Conversion Optimization & Lifecycle Automation",
                body:
                  "Traffic without conversion is wasted spend. We audit funnels, test new experiences, and automate nurture flows with appointment reminders, abandoned forms, and event-triggered email and SMS.",
              },
              {
                title: "Audience Data",
                body:
                  "Insight beats intuition. We implement clean data pipelines to reveal who’s visiting, how they behave, and which messages close the loop, fueling smarter campaigns and retargeting.",
              },
            ].map((service) => (
              <div key={service.title} className="glass-panel space-y-2 p-6" data-tone="inset">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="subtle-copy text-sm">{service.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="container relative mt-24">
          <div className="glass-panel shadow-brand-xl p-10">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
              How the Layers Fit Together
            </h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  step: "Build",
                  description: "Establish your website foundation so every campaign has a reliable home base.",
                },
                {
                  step: "Appear",
                  description: "Launch content and local SEO to bring consistent traffic in-market.",
                },
                {
                  step: "Amplify",
                  description: "Accelerate qualified leads with targeted paid media campaigns.",
                },
                {
                  step: "Convert",
                  description: "Optimize funnels and automate follow-ups to turn interest into revenue.",
                },
                {
                  step: "Understand & Scale",
                  description: "Translate audience data into smarter spend and repeatable growth loops.",
                },
              ].map((layer, index) => (
                <li key={layer.step} className="glass-panel flex gap-4 p-5 text-sm" data-tone="inset">
                  <span className="brand-chip">{index + 1}</span>
                  <div>
                    <p className="font-semibold">{layer.step}</p>
                    <p className="subtle-copy">{layer.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="subtle-copy mt-6 text-sm">
              When each layer supports the next, you’re not checking boxes; you’re operating a growth engine.
            </p>
          </div>
        </section>
        <section className="container relative mt-24 grid gap-8 md:grid-cols-2">
          <div className="glass-panel shadow-brand-xl p-8">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
              Why Choose Adsit Digital?
            </h2>
            <p className="muted-copy mt-4">
              We embed with growth teams wherever they operate, aligning marketing roadmaps with measurable
              revenue goals.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Market focus: deep understanding of local competition and search intent.",
              "System-builder mindset: we construct processes that run campaigns, not just one-off tactics.",
              "Automation-first: leads, follow-ups, and segmentation work on autopilot so you can lead.",
              "Transparency & metrics: live dashboards clarify leads, conversions, costs, and next steps.",
              "Competitive edge: from launch to content to paid to data, you receive the full growth stack.",
            ].map((reason) => (
              <li key={reason} className="glass-panel p-5 text-sm" data-tone="subtle">
                {reason}
              </li>
            ))}
          </ul>
        </section>
        <section className="container relative mt-24 flex justify-center">
          <div className="glass-panel shadow-brand-xl w-full max-w-4xl p-10 text-center" data-tone="accent">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">Ready to Begin?</h2>
            <p className="mt-4 text-lg">
              Let’s map your growth path together. We’ll unpack where you are, where you’re heading, and how
              to turn campaigns into a repeatable engine.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact-us"
                aria-label="Schedule your strategy call"
                className="brand-button"
              >
                Schedule Your Strategy Call
              </a>
              <span className="text-sm opacity-80">
                No pressure, just clarity on the next right move.
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
