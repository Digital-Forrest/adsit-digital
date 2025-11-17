import type { Metadata } from "next";
import Image from "next/image";
import { PageBrand } from "@/components/page-brand";
import { ContactUsForm } from "@/components/contact-us-form";

export const metadata: Metadata = {
  title: "Contact Adsit Digital",
  description:
    "Schedule a strategy call with Adsit Digital to map your growth plan and connect every part of your marketing system.",
  openGraph: {
    title: "Contact Adsit Digital",
    description:
      "Ready to build a connected marketing engine? Talk with Adsit Digital about your goals and next steps.",
    url: "https://adsitdigital.com/contact-us",
    siteName: "Adsit Digital",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 675,
        alt: "Modern office meeting room prepared for a strategy session",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Adsit Digital",
    description:
      "Let’s build your growth plan and schedule a strategy call with Adsit Digital.",
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageBrand brand="orange" />
      <div data-brand="orange" className="page-surface pb-32 pt-16">
        <section className="container relative flex w-full flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-8">
            <div className="brand-badge">Start the Conversation</div>
            <h1 className="gradient-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Let’s Build Your Growth Plan
            </h1>
            <p className="muted-copy mt-8 text-lg">
              It begins with a short strategy call. We’ll learn where you are today, highlight immediate
              opportunities, and map how a connected marketing system can create measurable momentum.
            </p>
            <p className="subtle-copy text-sm">
              We partner with established businesses ready to align their website, content, ads, and data so
              every effort points toward revenue instead of guesswork.
            </p>
          </div>
          <div className="glass-panel shadow-brand-lg w-full max-w-md space-y-6 p-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[color:var(--border-glass)] bg-[color:var(--surface-overlay)]">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=720&q=80"
                alt="Conference room ready for a marketing strategy meeting"
                fill
                sizes="(max-width: 768px) 60vw, 360px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
        <section className="container relative mt-24">
          <div className="glass-panel shadow-brand-xl p-10">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
              Tell us a little about your business and your goals.
            </h2>
            <p className="subtle-copy mt-4 text-sm">
              We’ll review your current setup, identify quick wins, and follow up with clear next steps.
            </p>
            <div className="mt-10">
              <ContactUsForm />
            </div>
          </div>
        </section>
        <section className="container relative mt-20 flex justify-center text-center">
          <div className="glass-panel shadow-brand-xl w-full max-w-4xl p-12" data-tone="accent">
            <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
              Prefer to jump straight in?
            </h2>
            <p className="mt-4 text-lg">
              Skip the form and grab time directly with our team. We’ll review your goals live and map the
              roadmap together.
            </p>
            <a
              href="https://calendly.com/adsitdigital/strategy-call"
              aria-label="Schedule your strategy call"
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button mt-8"
            >
              Schedule Your Strategy Call →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

