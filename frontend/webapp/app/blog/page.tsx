import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Badge from "@/components/shared/Badge";
import CtaBanner from "@/components/home/CtaBanner";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = buildMetadata({
  title: "Legal Insights Blog",
  description:
    "Practical legal guidance from John Doe Law — covering Georgia law, your rights, and the issues that affect your life and business.",
});

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

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
                Insights
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
              Legal Insights
            </h1>
            <p
              className="max-w-xl text-base leading-relaxed mt-2"
              style={{ color: "rgba(245,240,232,0.65)" }}
            >
              Practical guidance on Georgia law, your rights, and the legal
              issues that affect your life and business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 section-cream">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
          {/* Featured post */}
          <AnimatedSection>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "var(--color-navy)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Image placeholder */}
              <div
                className="relative aspect-video lg:aspect-auto min-h-64 diagonal-lines"
                style={{ background: "linear-gradient(135deg, var(--color-navy-light) 0%, #060e17 100%)" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-display italic text-4xl opacity-20"
                    style={{ color: "var(--color-gold)" }}
                  >
                    Featured
                  </span>
                </div>
                <div
                  className="absolute top-4 left-4"
                >
                  <Badge label="Featured" />
                </div>
              </div>
              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col gap-4 justify-center">
                <Badge label={featured.category} />
                <h2
                  className="font-display font-semibold leading-tight transition-colors group-hover:text-[var(--color-gold-light)]"
                  style={{ fontSize: "1.75rem", color: "var(--color-cream)" }}
                >
                  {featured.title}
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.65)" }}
                >
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3 text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
                    <span>{featured.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} aria-hidden="true" />
                      {featured.readTime}
                    </span>
                  </div>
                  <span
                    className="text-sm font-semibold flex items-center gap-1 transition-colors group-hover:text-[var(--color-gold-light)]"
                    style={{ color: "var(--color-gold)" }}
                  >
                    Read More <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Post grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.07}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-4 p-6 rounded-xl h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: "var(--color-navy)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <Badge label={post.category} />
                  <h3
                    className="font-display font-semibold text-xl leading-tight flex-1 transition-colors group-hover:text-[var(--color-gold-light)]"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-2"
                    style={{ color: "rgba(245,240,232,0.55)" }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    className="flex items-center gap-3 text-xs pt-2"
                    style={{
                      color: "rgba(245,240,232,0.35)",
                      borderTop: "1px solid var(--color-border)",
                    }}
                  >
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
