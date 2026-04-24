import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact John Doe Law in Atlanta, GA. Free confidential consultation for corporate law, civil litigation, family law, and real estate matters.",
});

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    lines: ["191 Peachtree Street NE, Suite 3200", "Atlanta, GA 30303"],
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["(404) 555-0190"],
    href: "tel:+14045550190",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["john@johndoelaw.com"],
    href: "mailto:john@johndoelaw.com",
  },
  {
    icon: Clock,
    label: "Office Hours",
    lines: ["Monday – Friday: 9:00 AM – 6:00 PM"],
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 diagonal-lines"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 justify-center">
              <span className="gold-rule" />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                Reach Us
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
              Contact Our Office
            </h1>
            <p
              className="max-w-xl text-base leading-relaxed mt-2"
              style={{ color: "rgba(245,240,232,0.65)" }}
            >
              Reach out to start your free, confidential consultation. We
              respond to all inquiries within one business day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 section-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[360px_1fr] gap-14">
          {/* Left — contact info */}
          <AnimatedSection className="flex flex-col gap-8">
            <div>
              <h2
                className="font-display font-semibold text-2xl mb-6"
                style={{ color: "var(--color-navy)" }}
              >
                Office Information
              </h2>
              <div className="flex flex-col gap-5">
                {contactInfo.map(({ icon: Icon, label, lines, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "var(--color-navy)", border: "1px solid var(--color-border)" }}
                    >
                      <Icon size={16} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "var(--color-gray-muted)" }}>
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm leading-relaxed transition-colors hover:text-[var(--color-gold)]"
                          style={{ color: "#374151" }}
                        >
                          {lines.map((l, i) => (
                            <span key={i} className="block">{l}</span>
                          ))}
                        </a>
                      ) : (
                        <div className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                          {lines.map((l, i) => (
                            <span key={i} className="block">{l}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency note */}
            <div
              className="flex items-start gap-3 rounded-lg p-4"
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <AlertCircle
                size={16}
                className="mt-0.5 shrink-0"
                style={{ color: "var(--color-gold)" }}
                aria-hidden="true"
              />
              <p className="text-xs leading-relaxed" style={{ color: "#374151" }}>
                <strong>Emergency line:</strong> Existing clients facing urgent
                legal matters may reach our on-call attorney after hours at (404) 555-0191.
              </p>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
              <iframe
                title="John Doe Law Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.0166441989827!2d-84.39010522424264!3d33.754974273386396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f503821b6f4c4f%3A0x42d7f8d62c8f2e7d!2s191%20Peachtree%20St%20NE%2C%20Atlanta%2C%20GA%2030303!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection delay={0.1}>
            <div
              className="rounded-xl p-8 lg:p-10"
              style={{
                background: "var(--color-navy)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h2
                className="font-display font-semibold text-2xl mb-2"
                style={{ color: "var(--color-cream)" }}
              >
                Send Us a Message
              </h2>
              <p className="text-sm mb-8" style={{ color: "rgba(245,240,232,0.5)" }}>
                Free consultation. Confidential. No obligation.
              </p>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
