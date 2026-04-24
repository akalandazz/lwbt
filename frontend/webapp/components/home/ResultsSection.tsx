"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import DisclaimerFootnote from "@/components/shared/DisclaimerFootnote";
import Button from "@/components/shared/Button";
import { caseResults } from "@/data/results";

const stats = [
  { value: "$12.5M", label: "Largest Single Recovery" },
  { value: "98%", label: "Success Rate" },
  { value: "400+", label: "Clients Served" },
];

function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-2 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <span
        className="font-display font-semibold leading-none"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          color: "var(--color-gold)",
        }}
      >
        {value}
      </span>
      <span
        className="text-xs font-semibold tracking-[0.2em] uppercase text-center"
        style={{ color: "rgba(245,240,232,0.6)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function ResultsSection() {
  const featured = caseResults.slice(0, 3);

  return (
    <section
      className="py-24 section-cream"
      aria-labelledby="results-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-12">
          <SectionHeader
            eyebrow="Track Record"
            title="Proven Results"
            subtitle="A consistent record of exceptional outcomes for clients facing their most consequential legal challenges."
          />
        </AnimatedSection>

        {/* Stat counters */}
        <AnimatedSection delay={0.1}>
          <div
            className="grid grid-cols-3 gap-6 py-12 mb-14 rounded-lg"
            style={{
              background: "var(--color-navy)",
              border: "1px solid var(--color-border)",
            }}
          >
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </AnimatedSection>

        {/* Case cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featured.map((result, i) => (
            <AnimatedSection key={result.id} delay={i * 0.1}>
              <div
                className="flex flex-col gap-4 p-6 rounded-lg h-full"
                style={{
                  background: "var(--color-navy)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <Badge label={result.practiceArea} />
                <h3
                  className="font-display font-semibold text-xl leading-tight"
                  style={{ color: "var(--color-cream)" }}
                >
                  {result.outcome}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "rgba(245,240,232,0.6)" }}
                >
                  {result.description}
                </p>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "rgba(245,240,232,0.35)" }}
                >
                  {result.year}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button href="/results" variant="secondary" size="md">
            View All Case Results
          </Button>
          <DisclaimerFootnote />
        </div>
      </div>
    </section>
  );
}
