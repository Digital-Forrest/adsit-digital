import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/contexts/theme-context";
import { ThemeScript } from "@/components/theme-script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adsitdigital.com"),
  title: {
    default: "Adsit Digital | Marketing Agency",
    template: "%s | Adsit Digital",
  },
  description:
    "Adsit Digital is a full-service marketing agency helping ambitious brands grow through data-driven strategy, creative storytelling, and performance media.",
  icons: {
    icon: [
      {
        url: "https://media.adsitdigital.com/logo336.png",
        sizes: "any",
        type: "image/png",
      },
      {
        url: "https://media.adsitdigital.com/logo336.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://media.adsitdigital.com/logo336.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://media.adsitdigital.com/logo336.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "https://media.adsitdigital.com/logo336.png",
  },
  openGraph: {
    title: "Adsit Digital | Marketing Agency",
    description:
      "Partner with Adsit Digital for a data-driven marketing strategy, creative content, and measurable growth for your brand.",
    url: "https://adsitdigital.com",
    siteName: "Adsit Digital",
    type: "website",
    images: [
      {
        url: "https://media.adsitdigital.com/logo336.png",
        width: 336,
        height: 336,
        alt: "Adsit Digital logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adsit Digital | Marketing Agency",
    description:
      "Adsit Digital blends strategy, creative, and performance media to scale modern brands.",
    images: ["https://media.adsitdigital.com/logo336.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body
        data-brand="light-blue"
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <ThemeScript />
        <ThemeProvider>
          <SiteHeader />
          {/* Main content area stays flexible to push the footer to the bottom on taller viewports */}
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
