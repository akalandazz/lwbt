import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import ShareButtons from "@/components/shared/ShareButtons";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function parseContent(raw: string) {
  return raw
    .trim()
    .split("\n")
    .map((line, i) => {
      if (line.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="font-display font-semibold mt-10 mb-4"
            style={{ fontSize: "1.5rem", color: "var(--color-navy)" }}
          >
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={i} className="font-semibold mt-4 mb-1" style={{ color: "#111827" }}>
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="ml-5 mb-1 text-base leading-relaxed" style={{ color: "#374151" }}>
            {line.replace("- ", "")}
          </li>
        );
      }
      if (line.trim() === "") return null;
      return (
        <p key={i} className="text-base leading-[1.85] mb-4" style={{ color: "#374151" }}>
          {line}
        </p>
      );
    })
    .filter(Boolean);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2)
    .concat(
      blogPosts
        .filter((p) => p.slug !== slug && p.category !== post.category)
        .slice(0, Math.max(0, 2 - blogPosts.filter((p) => p.slug !== slug && p.category === post.category).length))
    )
    .slice(0, 2);

  const prev = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const next = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 diagonal-lines"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="flex flex-col gap-4">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--color-gold-light)] w-fit"
              style={{ color: "var(--color-gold)" }}
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Back to Blog
            </Link>
            <Badge label={post.category} />
            <h1
              className="font-display font-semibold leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                color: "var(--color-cream)",
              }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm" style={{ color: "rgba(245,240,232,0.5)" }}>
              <span>John Doe, Attorney at Law</span>
              <span aria-hidden="true">·</span>
              <span>{post.date}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock size={13} aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article */}
      <section className="section-cream">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          {/* Article body */}
          <AnimatedSection>
            <article className="prose-law">
              {parseContent(post.content)}
            </article>

            {/* Share */}
            <div
              className="mt-12 pt-8"
              style={{ borderTop: "1px solid rgba(13,27,42,0.15)" }}
            >
              <ShareButtons slug={post.slug} title={post.title} />
            </div>

            {/* Article CTA */}
            <div
              className="mt-10 rounded-xl p-8 flex flex-col gap-4"
              style={{
                background: "var(--color-navy)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                className="font-display italic text-xl font-semibold"
                style={{ color: "var(--color-cream)" }}
              >
                Have a legal question?
              </p>
              <p className="text-sm" style={{ color: "rgba(245,240,232,0.65)" }}>
                Speak with John Doe today — free, confidential, no obligation.
              </p>
              <Button href="/consultation" variant="primary" size="md" className="w-fit">
                Book Free Consultation
              </Button>
            </div>

            {/* Prev/Next */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {prev && (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="flex flex-col gap-1 p-5 rounded-lg transition-colors hover:border-[var(--color-gold)]"
                  style={{
                    background: "var(--color-navy)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <span className="flex items-center gap-1 text-xs" style={{ color: "var(--color-gold)" }}>
                    <ArrowLeft size={12} /> Previous
                  </span>
                  <span className="text-sm font-semibold line-clamp-2" style={{ color: "var(--color-cream)" }}>
                    {prev.title}
                  </span>
                </Link>
              )}
              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="flex flex-col gap-1 p-5 rounded-lg text-right transition-colors hover:border-[var(--color-gold)] ml-auto w-full"
                  style={{
                    background: "var(--color-navy)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <span className="flex items-center gap-1 justify-end text-xs" style={{ color: "var(--color-gold)" }}>
                    Next <ArrowRight size={12} />
                  </span>
                  <span className="text-sm font-semibold line-clamp-2" style={{ color: "var(--color-cream)" }}>
                    {next.title}
                  </span>
                </Link>
              )}
            </div>
          </AnimatedSection>

          {/* Sidebar TOC */}
          <div className="hidden lg:block sticky top-24">
            <div
              className="rounded-lg p-6 flex flex-col gap-4"
              style={{
                background: "var(--color-navy)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                In This Article
              </p>
              <nav aria-label="Table of contents">
                <ul className="flex flex-col gap-2">
                  {post.content
                    .split("\n")
                    .filter((l) => l.startsWith("## "))
                    .map((heading) => {
                      const text = heading.replace("## ", "");
                      const anchor = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                      return (
                        <li key={text}>
                          <a
                            href={`#${anchor}`}
                            className="text-xs leading-relaxed block transition-colors hover:text-[var(--color-gold)]"
                            style={{ color: "rgba(245,240,232,0.55)" }}
                          >
                            {text}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </nav>
            </div>

            {/* Author card */}
            <div
              className="mt-4 rounded-lg p-6 flex flex-col gap-3"
              style={{
                background: "var(--color-navy)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg"
                style={{ background: "rgba(201,168,76,0.15)", color: "var(--color-gold)" }}
              >
                JD
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--color-cream)" }}>
                  John Doe
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-gold)" }}>
                  Attorney at Law
                </p>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
                20+ years of Georgia legal practice across corporate, litigation, family, and real estate law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16" style={{ background: "var(--color-navy)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="font-display font-semibold text-2xl mb-8"
              style={{ color: "var(--color-cream)" }}
            >
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col gap-3 p-6 rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: "var(--color-navy-light)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <Badge label={p.category} />
                  <h3
                    className="font-display font-semibold text-lg leading-tight transition-colors group-hover:text-[var(--color-gold-light)]"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm" style={{ color: "rgba(245,240,232,0.5)" }}>
                    {p.date} · {p.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
