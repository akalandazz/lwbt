import { Phone, Calendar } from "lucide-react";
import Button from "@/components/shared/Button";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--color-navy-light)" }}
      aria-labelledby="cta-heading"
    >
      {/* Gold top gradient line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
        <AnimatedSection className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 justify-center">
            <span className="gold-rule" />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "var(--color-gold)" }}
            >
              Get Started
            </span>
            <span className="gold-rule" />
          </div>

          <h2
            id="cta-heading"
            className="font-display font-semibold leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--color-cream)",
            }}
          >
            Ready to Discuss Your Case?
          </h2>

          <p
            className="max-w-md text-base leading-relaxed"
            style={{ color: "rgba(245,240,232,0.65)" }}
          >
            We offer a free, confidential consultation with no obligation.
            Tell us what you're facing — we'll give you an honest assessment
            of your options.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Button href="tel:+14045550190" variant="primary" size="lg">
              <Phone size={18} aria-hidden="true" />
              Call (404) 555-0190
            </Button>
            <Button href="/consultation" variant="secondary" size="lg">
              <Calendar size={18} aria-hidden="true" />
              Schedule Online
            </Button>
          </div>

          <p className="text-xs mt-2" style={{ color: "rgba(245,240,232,0.35)" }}>
            All communications are protected by attorney-client privilege.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
