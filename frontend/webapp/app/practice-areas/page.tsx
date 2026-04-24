import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Scale, Users, Home, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import CtaBanner from "@/components/home/CtaBanner";
import { practiceAreas } from "@/data/practice-areas";

export const metadata: Metadata = buildMetadata({
  title: "Practice Areas",
  description:
    "John Doe Law provides expert legal representation in corporate law, civil litigation, family law, and real estate across Georgia.",
});

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Building2,
  Scale,
  Users,
  Home,
};

export default function PracticeAreasPage() {
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
                Legal Services
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
              Areas of Practice
            </h1>
            <p
              className="max-w-2xl text-base leading-relaxed mt-2"
              style={{ color: "rgba(245,240,232,0.65)" }}
            >
              From boardrooms to courtrooms, John Doe Law delivers comprehensive
              legal counsel across the full spectrum of matters affecting
              individuals and businesses in Georgia.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Practice area cards */}
      <section className="py-24 section-cream">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
          {practiceAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <AnimatedSection key={area.slug} delay={i * 0.1}>
                <div
                  className="rounded-lg overflow-hidden grid lg:grid-cols-[1fr_320px]"
                  style={{
                    background: "var(--color-navy)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {/* Left */}
                  <div className="p-8 lg:p-10 flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: "rgba(201,168,76,0.12)" }}
                      >
                        {Icon && (
                          <Icon size={22} style={{ color: "var(--color-gold)" }} />
                        )}
                      </div>
                      <h2
                        className="font-display font-semibold"
                        style={{ fontSize: "1.75rem", color: "var(--color-cream)" }}
                      >
                        {area.name}
                      </h2>
                    </div>
                    <p
                      className="text-base leading-relaxed italic"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {area.tagline}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(245,240,232,0.7)" }}
                    >
                      {area.fullDescription[0]}
                    </p>
                    <Link
                      href={`/practice-areas/${area.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[var(--color-gold-light)] mt-2"
                      style={{ color: "var(--color-gold)" }}
                    >
                      Explore {area.name}
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Right — case types */}
                  <div
                    className="p-8 lg:p-10 flex flex-col gap-4"
                    style={{ borderLeft: "1px solid var(--color-border)" }}
                  >
                    <p
                      className="text-xs font-semibold tracking-[0.2em] uppercase"
                      style={{ color: "var(--color-gold)" }}
                    >
                      We Handle
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {area.caseTypes.slice(0, 7).map((type) => (
                        <li key={type} className="flex items-start gap-2.5 text-sm">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                            style={{ background: "var(--color-gold)" }}
                            aria-hidden="true"
                          />
                          <span style={{ color: "rgba(245,240,232,0.7)" }}>{type}</span>
                        </li>
                      ))}
                      {area.caseTypes.length > 7 && (
                        <li className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
                          +{area.caseTypes.length - 7} more…
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
