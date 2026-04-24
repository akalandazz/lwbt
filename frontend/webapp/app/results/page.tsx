"use client";

import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Badge from "@/components/shared/Badge";
import DisclaimerFootnote from "@/components/shared/DisclaimerFootnote";
import CtaBanner from "@/components/home/CtaBanner";
import { caseResults } from "@/data/results";

type Filter = "All" | "Corporate" | "Litigation" | "Family" | "Real Estate";
const filters: Filter[] = ["All", "Corporate", "Litigation", "Family", "Real Estate"];

const stats = [
  { value: "$12.5M", label: "Largest Single Recovery" },
  { value: "98%", label: "Success Rate" },
  { value: "400+", label: "Clients Served" },
  { value: "20+", label: "Years of Practice" },
];

export default function ResultsPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? caseResults
      : caseResults.filter((r) => r.practiceArea === active);

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 diagonal-lines"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="gold-rule" />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                Track Record
              </span>
            </div>
            <h1
              className="font-display font-semibold leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "var(--color-cream)",
              }}
            >
              Case Results & Notable Outcomes
            </h1>
            <p
              className="max-w-2xl text-base leading-relaxed"
              style={{ color: "rgba(245,240,232,0.65)" }}
            >
              A selection of outcomes achieved for clients across Georgia. Every
              case is unique, and past results do not guarantee future outcomes.
            </p>
          </AnimatedSection>

          {/* Prominent disclaimer */}
          <AnimatedSection delay={0.1} className="mt-8">
            <div
              className="rounded-lg px-6 py-4"
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <p className="text-sm" style={{ color: "rgba(245,240,232,0.7)" }}>
                <strong style={{ color: "var(--color-gold)" }}>Important Disclaimer:</strong>{" "}
                The case results listed on this page are provided for informational
                purposes only. Prior results do not guarantee a similar outcome in
                your case. Results vary depending on the specific facts, legal
                circumstances, and applicable law.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--color-navy-light)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 text-center">
              <span
                className="font-display font-semibold"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--color-gold)" }}
              >
                {s.value}
              </span>
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "rgba(245,240,232,0.5)" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Results grid */}
      <section className="py-24 section-cream">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <div
            className="flex flex-wrap gap-2 mb-10"
            role="tablist"
            aria-label="Filter results by practice area"
          >
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background:
                    active === f ? "var(--color-gold)" : "var(--color-navy)",
                  color:
                    active === f ? "var(--color-navy)" : "rgba(245,240,232,0.6)",
                  border: "1px solid",
                  borderColor:
                    active === f ? "var(--color-gold)" : "var(--color-border)",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filtered.map((result, i) => (
              <AnimatedSection key={result.id} delay={i * 0.06}>
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

          {/* Full disclaimer */}
          <div
            className="rounded-lg p-8"
            style={{
              background: "var(--color-navy)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h2
              className="font-display font-semibold text-xl mb-4"
              style={{ color: "var(--color-cream)" }}
            >
              Important Disclaimer
            </h2>
            <div className="space-y-3">
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>
                The case results displayed on this page represent a selection of
                matters handled by John Doe Law. All client identifying information
                has been anonymized or removed to protect client confidentiality.
                Case descriptions are summaries only and do not represent the full
                complexity of the matter.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>
                <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                  Past results do not guarantee future outcomes.
                </strong>{" "}
                The outcome of any legal matter depends upon the specific facts
                and circumstances of that matter, applicable law, the jurisdiction,
                and many other factors. You should not assume that the results
                achieved in any particular case will be achieved in your case.
              </p>
              <DisclaimerFootnote />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
