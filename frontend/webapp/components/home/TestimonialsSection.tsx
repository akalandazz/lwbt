"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/testimonials";

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill="var(--color-gold)"
          style={{ color: "var(--color-gold)" }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section
      className="py-24"
      style={{ background: "var(--color-cream)" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-14">
          <SectionHeader eyebrow="Client Stories" title="What Clients Say" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto">
            {/* Main testimonial */}
            <div
              className="relative rounded-2xl p-10 md:p-14"
              style={{
                background: "var(--color-navy)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Large quote mark */}
              <span
                className="font-display absolute top-6 left-8 leading-none select-none pointer-events-none"
                style={{ fontSize: "6rem", color: "rgba(201,168,76,0.12)", lineHeight: 1 }}
                aria-hidden="true"
              >
                "
              </span>

              <div className="relative flex flex-col gap-6">
                <Stars />
                <blockquote
                  className="font-display italic text-xl md:text-2xl leading-relaxed"
                  style={{ color: "var(--color-cream)" }}
                >
                  "{current.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--color-cream)" }}
                    >
                      {current.initials}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-gold)" }}>
                      {current.caseType} · {current.location}
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                      style={{ border: "1px solid var(--color-border)", color: "var(--color-cream)" }}
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next testimonial"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                      style={{ border: "1px solid var(--color-border)", color: "var(--color-cream)" }}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className="w-2 h-2 rounded-full transition-all duration-200"
                  style={{
                    background: i === active ? "var(--color-gold)" : "rgba(13,27,42,0.2)",
                    transform: i === active ? "scale(1.3)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
