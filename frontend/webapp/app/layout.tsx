import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getLawFirmSchema } from "@/lib/schema";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | John Doe Law",
    default: "John Doe Law — Atlanta Attorney at Law",
  },
  description:
    "John Doe, Attorney at Law — 20+ years of relentless advocacy in corporate law, civil litigation, family law, and real estate across Georgia. Free consultation.",
  keywords: [
    "Atlanta attorney",
    "Georgia lawyer",
    "corporate law",
    "civil litigation",
    "family law attorney",
    "real estate attorney",
    "John Doe Law",
  ],
  authors: [{ name: "John Doe, Attorney at Law" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "John Doe Law",
    title: "John Doe Law — Atlanta Attorney at Law",
    description:
      "20+ years of relentless advocacy protecting individuals and businesses across Georgia.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = getLawFirmSchema();

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />

        {/* Sticky mobile CTA */}
        <a
          href="tel:+14045550190"
          aria-label="Call John Doe Law now"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl md:hidden"
          style={{ background: "var(--color-gold)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            style={{ color: "var(--color-navy)" }}
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        <Script id="law-firm-schema" type="application/ld+json">
          {JSON.stringify(schema)}
        </Script>
      </body>
    </html>
  );
}
