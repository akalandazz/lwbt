import Button from "@/components/shared/Button";
import { ArrowRight, Award, Star, Clock, Briefcase } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "350+", label: "Cases Won" },
  { icon: Award, value: "$50M+", label: "Recovered" },
  { icon: Clock, value: "20+", label: "Years Experience" },
  { icon: Star, value: "5-Star", label: "Rated" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden diagonal-lines"
      style={{ background: "var(--color-navy)" }}
      aria-label="Hero"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-[55%_45%] gap-12 items-center w-full">
        {/* Left — Text */}
        <div className="flex flex-col gap-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="gold-rule" />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "var(--color-gold)" }}
            >
              Atlanta, Georgia
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-semibold leading-[1.05]"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              color: "var(--color-cream)",
            }}
          >
            Relentless
            <br />
            Advocacy.
            <br />
            <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>
              Exceptional
            </em>
            <br />
            Results.
          </h1>

          {/* Subheadline */}
          <p
            className="max-w-lg text-lg leading-relaxed"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >
            20+ years of courtroom experience protecting the rights and
            interests of individuals and businesses across Georgia. When the
            stakes are highest, you want John Doe in your corner.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button href="/consultation" variant="primary" size="lg">
              Request Free Consultation
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="/results" variant="secondary" size="lg">
              View Case Results
            </Button>
          </div>

          {/* Stats bar */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 mt-2"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <Icon size={16} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                <span
                  className="font-display font-semibold text-2xl"
                  style={{ color: "var(--color-cream)" }}
                >
                  {value}
                </span>
                <span
                  className="text-xs tracking-wide uppercase"
                  style={{ color: "rgba(245,240,232,0.5)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image placeholder */}
        <div className="hidden lg:flex justify-end">
          <div className="relative">
            {/* Gold offset frame */}
            <div
              className="absolute -top-4 -right-4 w-full h-full rounded-lg"
              style={{ border: "2px solid var(--color-gold)", opacity: 0.4 }}
              aria-hidden="true"
            />
            {/* Image */}
            <div
              className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-navy-light) 0%, #0a1520 100%)",
              }}
            >
              <div
                className="absolute inset-0 flex flex-col items-center justify-end p-8"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,27,42,0.95) 0%, transparent 60%)",
                }}
              >
                <p
                  className="font-display text-xl font-medium text-center italic"
                  style={{ color: "var(--color-cream)" }}
                >
                  John Doe
                </p>
                <p
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "var(--color-gold)" }}
                >
                  Attorney at Law
                </p>
              </div>
              {/* Decorative lines */}
              <div className="absolute inset-0 diagonal-lines opacity-40" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <div
          className="w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-gold), transparent)",
          }}
        />
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "rgba(245,240,232,0.35)" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
