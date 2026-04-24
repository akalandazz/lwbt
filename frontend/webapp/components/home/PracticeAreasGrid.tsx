import Link from "next/link";
import { Building2, Scale, Users, Home } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { practiceAreas } from "@/data/practice-areas";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Building2,
  Scale,
  Users,
  Home,
};

export default function PracticeAreasGrid() {
  return (
    <section
      className="py-24 section-cream"
      aria-labelledby="practice-areas-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-14">
          <SectionHeader
            eyebrow="Expertise"
            title="Areas of Practice"
            subtitle="Comprehensive legal representation across the matters that affect your life and livelihood most."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {practiceAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <AnimatedSection key={area.slug} delay={i * 0.1}>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="group flex flex-col gap-5 p-8 rounded-lg h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    background: "var(--color-navy)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors group-hover:bg-[var(--color-gold)]"
                    style={{
                      background: "rgba(201,168,76,0.12)",
                    }}
                  >
                    {Icon && (
                      <Icon
                        size={22}
                        className="transition-colors group-hover:text-[var(--color-navy)]"
                        style={{ color: "var(--color-gold)" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2 flex-1">
                    <h3
                      className="font-display font-semibold text-2xl leading-tight"
                      style={{ color: "var(--color-cream)" }}
                    >
                      {area.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(245,240,232,0.65)" }}
                    >
                      {area.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <span
                    className="text-sm font-semibold tracking-wide transition-colors group-hover:text-[var(--color-gold-light)] flex items-center gap-1"
                    style={{ color: "var(--color-gold)" }}
                  >
                    Learn More
                    <span
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
