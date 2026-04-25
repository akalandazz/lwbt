import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Button from "@/components/shared/Button";

const credentials = [
  "J.D., Harvard Law School",
  "State Bar of Georgia — Admitted 2003",
  "20+ Years of Practice",
];

export default function AboutPreview() {
  return (
    <section
      className="py-24"
      style={{ background: "var(--color-navy)" }}
      aria-labelledby="about-preview-heading"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Quote + Bio */}
        <AnimatedSection className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="gold-rule" />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "var(--color-gold)" }}
            >
              About
            </span>
          </div>

          <blockquote
            className="font-display italic leading-snug"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              color: "var(--color-cream)",
              borderLeft: "3px solid var(--color-gold)",
              paddingLeft: "1.5rem",
            }}
          >
            "I don't just practice law — I fight for the outcome my clients
            deserve."
          </blockquote>

          <div className="flex flex-col gap-4">
            <p className="text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
              John Doe built his practice on a simple conviction: every client
              deserves the same tenacious advocacy he would want for his own
              family. Over two decades in Georgia courtrooms and boardrooms, that
              commitment has translated into hundreds of millions in recoveries
              and life-changing outcomes for individuals and businesses alike.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
              A Harvard Law graduate and Georgia native, John combines
              intellectual rigour with genuine empathy — understanding that
              behind every case is a person whose life depends on the outcome.
            </p>
          </div>

          {/* Credentials */}
          <ul className="flex flex-col gap-2">
            {credentials.map((c) => (
              <li key={c} className="flex items-center gap-3 text-sm">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "var(--color-gold)" }}
                  aria-hidden="true"
                />
                <span style={{ color: "rgba(245,240,232,0.75)" }}>{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-2">
            <Button href="/about" variant="secondary" size="md">
              Meet John Doe →
            </Button>
          </div>
        </AnimatedSection>

        {/* Right — Image with gold frame */}
        <AnimatedSection delay={0.15} className="hidden lg:flex justify-center">
          <div className="relative">
            {/* Gold offset border */}
            <div
              className="absolute -bottom-5 -left-5 w-full h-full rounded-lg"
              style={{ border: "2px solid var(--color-gold)", opacity: 0.35 }}
              aria-hidden="true"
            />
            <div
              className="relative w-80 aspect-[3/4] rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <Image
                src="/lawyer.jpg"
                alt="John Doe, Attorney at Law"
                fill
                sizes="320px"
                className="object-cover object-top"
              />
              <div
                className="absolute bottom-0 inset-x-0 p-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,27,42,0.98) 0%, transparent 80%)",
                }}
              >
                <p
                  className="font-display italic text-lg"
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
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
