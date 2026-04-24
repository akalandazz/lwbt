import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Building2, Scale, Users, Home } from "lucide-react";
import { practiceAreas } from "@/data/practice-areas";
import { caseResults } from "@/data/results";
import { getLegalServiceSchema } from "@/lib/schema";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import ConsultationWidget from "@/components/shared/ConsultationWidget";
import DisclaimerFootnote from "@/components/shared/DisclaimerFootnote";
import CtaBanner from "@/components/home/CtaBanner";

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Building2,
  Scale,
  Users,
  Home,
};

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return practiceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.name,
    description: area.metaDescription,
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const Icon = iconMap[area.icon];
  const areaLabel = area.name.split(" ")[0] as "Corporate" | "Litigation" | "Family" | "Real";
  const practiceLabel =
    area.slug === "civil-litigation"
      ? "Litigation"
      : area.slug === "real-estate"
      ? "Real Estate"
      : area.slug === "corporate-law"
      ? "Corporate"
      : "Family";

  const relatedResults = caseResults
    .filter((r) => r.practiceArea === practiceLabel)
    .slice(0, 2);

  const schema = getLegalServiceSchema(
    area.name,
    area.metaDescription,
    `https://www.johndoelaw.com/practice-areas/${area.slug}`
  );

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 diagonal-lines"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="gold-rule" />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                Practice Area
              </span>
            </div>
            <div className="flex items-center gap-5">
              {Icon && (
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201,168,76,0.12)" }}
                >
                  <Icon size={30} style={{ color: "var(--color-gold)" }} />
                </div>
              )}
              <h1
                className="font-display font-semibold leading-tight"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  color: "var(--color-cream)",
                }}
              >
                {area.name}
              </h1>
            </div>
            <p
              className="max-w-2xl text-lg italic font-display"
              style={{ color: "var(--color-gold)" }}
            >
              {area.tagline}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-24 section-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_320px] gap-12 items-start">
          {/* Main */}
          <div className="flex flex-col gap-14">
            {/* Overview */}
            <AnimatedSection className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="gold-rule" />
                <span
                  className="text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ color: "var(--color-gold)" }}
                >
                  Overview
                </span>
              </div>
              {area.fullDescription.map((para, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: "#374151" }}>
                  {para}
                </p>
              ))}
            </AnimatedSection>

            {/* What We Handle */}
            <AnimatedSection>
              <h2
                className="font-display font-semibold text-2xl mb-6"
                style={{ color: "var(--color-navy)" }}
              >
                What We Handle
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {area.caseTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-start gap-3 p-4 rounded-lg"
                    style={{
                      background: "var(--color-navy)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                      style={{ background: "var(--color-gold)" }}
                      aria-hidden="true"
                    />
                    <span className="text-sm" style={{ color: "rgba(245,240,232,0.8)" }}>
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Our Approach */}
            <AnimatedSection>
              <h2
                className="font-display font-semibold text-2xl mb-6"
                style={{ color: "var(--color-navy)" }}
              >
                Our Approach
              </h2>
              <div className="flex flex-col gap-0">
                {area.approach.map((step, i) => (
                  <div
                    key={step.step}
                    className="flex gap-6 pb-8 relative"
                  >
                    {/* Connector */}
                    {i < area.approach.length - 1 && (
                      <div
                        className="absolute left-[1.4rem] top-10 bottom-0 w-px"
                        style={{ background: "var(--color-border)" }}
                        aria-hidden="true"
                      />
                    )}
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-semibold text-sm relative z-10"
                      style={{
                        background: "var(--color-navy)",
                        border: "2px solid var(--color-gold)",
                        color: "var(--color-gold)",
                      }}
                    >
                      {step.step}
                    </div>
                    <div className="pt-1.5">
                      <p
                        className="font-semibold text-base mb-1.5"
                        style={{ color: "var(--color-navy)" }}
                      >
                        {step.title}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Relevant Results */}
            {relatedResults.length > 0 && (
              <AnimatedSection>
                <h2
                  className="font-display font-semibold text-2xl mb-6"
                  style={{ color: "var(--color-navy)" }}
                >
                  Relevant Results
                </h2>
                <div className="grid sm:grid-cols-2 gap-5 mb-4">
                  {relatedResults.map((result) => (
                    <div
                      key={result.id}
                      className="flex flex-col gap-3 p-6 rounded-lg"
                      style={{
                        background: "var(--color-navy)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <Badge label={result.practiceArea} />
                      <h3
                        className="font-display font-semibold text-lg leading-tight"
                        style={{ color: "var(--color-cream)" }}
                      >
                        {result.outcome}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>
                        {result.description}
                      </p>
                      <p className="text-xs font-semibold" style={{ color: "rgba(245,240,232,0.35)" }}>
                        {result.year}
                      </p>
                    </div>
                  ))}
                </div>
                <DisclaimerFootnote />
              </AnimatedSection>
            )}

            {/* FAQ */}
            <AnimatedSection>
              <h2
                className="font-display font-semibold text-2xl mb-6"
                style={{ color: "var(--color-navy)" }}
              >
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-3">
                {area.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-lg overflow-hidden"
                    style={{
                      background: "var(--color-navy)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <summary
                      className="flex items-center justify-between cursor-pointer px-6 py-4 list-none"
                      style={{ color: "var(--color-cream)" }}
                    >
                      <span className="font-semibold text-sm pr-4">{faq.question}</span>
                      <span
                        className="text-lg shrink-0 transition-transform group-open:rotate-45"
                        style={{ color: "var(--color-gold)" }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <div
                      className="px-6 pb-5 pt-1 text-sm leading-relaxed"
                      style={{ color: "rgba(245,240,232,0.65)", borderTop: "1px solid var(--color-border)" }}
                    >
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24">
            <ConsultationWidget />
          </div>
        </div>
      </section>

      <CtaBanner />

      <Script id={`schema-${area.slug}`} type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
