import type { Metadata } from "next";
import Script from "next/script";
import { CheckCircle, Phone, MessageSquare, Shield } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = buildMetadata({
  title: "Book a Free Consultation",
  description:
    "Schedule your free, confidential consultation with John Doe, Attorney at Law. No obligation. Available same day.",
});

const benefits = [
  { icon: Shield, text: "No Obligation" },
  { icon: MessageSquare, text: "Confidential" },
  { icon: CheckCircle, text: "Available Same Day" },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Time",
    description:
      "Select a date and time that works for you using our online scheduler — or call us directly to book over the phone.",
  },
  {
    number: "02",
    title: "Share Your Situation",
    description:
      "Briefly describe your legal matter so we can ensure John is the right fit and comes prepared to your consultation.",
  },
  {
    number: "03",
    title: "Get Honest Counsel",
    description:
      "Receive a candid assessment of your situation, your options, and what the path forward looks like — with no pressure and no obligation.",
  },
];

export default function ConsultationPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 diagonal-lines"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-3 justify-center">
              <span className="gold-rule" />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                Free Consultation
              </span>
              <span className="gold-rule" />
            </div>
            <h1
              className="font-display font-semibold leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "var(--color-cream)",
              }}
            >
              Schedule Your Free Consultation
            </h1>
            <p
              className="max-w-xl text-base leading-relaxed"
              style={{ color: "rgba(245,240,232,0.65)" }}
            >
              Every case begins with a conversation. Tell us what you're facing
              and receive an honest, confidential assessment from John Doe —
              with no obligation.
            </p>

            {/* Benefit pills */}
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              {benefits.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    color: "var(--color-gold)",
                  }}
                >
                  <Icon size={15} aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Calendly embed */}
      <section className="py-16 section-cream">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ border: "1px solid var(--color-border)" }}
            >
              {/* Calendly widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/johndoelaw/consultation"
                style={{
                  minWidth: "320px",
                  height: "700px",
                  background: "var(--color-navy)",
                }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </div>
          </AnimatedSection>

          {/* Phone alternative */}
          <AnimatedSection delay={0.1} className="mt-8">
            <div
              className="rounded-xl p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left"
              style={{
                background: "var(--color-navy)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(201,168,76,0.12)" }}
              >
                <Phone size={20} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-base" style={{ color: "var(--color-cream)" }}>
                  Prefer to schedule by phone?
                </p>
                <p className="text-sm mt-0.5" style={{ color: "rgba(245,240,232,0.55)" }}>
                  Call our office directly — Monday through Friday, 9am–6pm.
                </p>
              </div>
              <a
                href="tel:+14045550190"
                className="shrink-0 px-6 py-3 rounded font-semibold text-sm transition-colors hover:brightness-110"
                style={{
                  background: "var(--color-gold)",
                  color: "var(--color-navy)",
                }}
              >
                (404) 555-0190
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-24" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-14 text-center flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 justify-center">
              <span className="gold-rule" />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                What Happens Next
              </span>
              <span className="gold-rule" />
            </div>
            <h2
              className="font-display font-semibold"
              style={{ fontSize: "2rem", color: "var(--color-cream)" }}
            >
              What to Expect
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div
                  className="flex flex-col gap-4 p-8 rounded-lg h-full"
                  style={{
                    background: "var(--color-navy-light)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="font-display font-semibold text-4xl leading-none"
                    style={{ color: "rgba(201,168,76,0.25)" }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="font-semibold text-lg"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(245,240,232,0.6)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Confidentiality reassurance */}
          <AnimatedSection delay={0.2} className="mt-10 max-w-2xl mx-auto text-center">
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(245,240,232,0.45)" }}
            >
              All communications with our office are protected by
              attorney-client privilege and held in strict confidence. We will
              never share your information with third parties.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
