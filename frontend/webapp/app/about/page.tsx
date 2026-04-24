import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";
import CtaBanner from "@/components/home/CtaBanner";
import { Scale, Heart, Shield, GraduationCap, Award, BookOpen } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About John Doe",
  description:
    "Meet John Doe — Harvard-trained Georgia attorney with 20+ years of trial experience in corporate law, civil litigation, family law, and real estate.",
});

const timeline = [
  { year: "2003", event: "Admitted to Georgia State Bar" },
  { year: "2003", event: "J.D., Harvard Law School — Graduated with Honors" },
  { year: "2000", event: "B.A. Political Science, University of Georgia — Magna Cum Laude" },
  { year: "2005", event: "Admitted — U.S. District Court, Northern District of Georgia" },
  { year: "2007", event: "Admitted — U.S. District Court, Middle District of Georgia" },
  { year: "2010", event: "Founded John Doe Law" },
];

const principles = [
  {
    icon: Scale,
    title: "Relentless Advocacy",
    description:
      "Every client deserves a lawyer who fights as hard for them as they would for their own family. I bring that same intensity to every case I handle, regardless of its size.",
  },
  {
    icon: Heart,
    title: "Genuine Empathy",
    description:
      "Behind every legal matter is a person whose life is affected by the outcome. I take the time to understand what you are truly facing before advising you on how to proceed.",
  },
  {
    icon: Shield,
    title: "Uncompromising Integrity",
    description:
      "I give every client an honest assessment — even when that means delivering difficult news. You deserve candid counsel, not false promises.",
  },
];

const awards = [
  "Super Lawyers — Rising Star 2008–2012",
  "Super Lawyers — Georgia 2013–2024",
  "Martindale-Hubbell AV Preeminent Rated",
  "AVVO 10.0 Superb Rating",
  "Best Lawyers in America — Commercial Litigation 2020–2024",
  "Georgia Trend Magazine — Legal Elite 2016–2024",
  "Atlanta Business Chronicle — Who's Who in Law",
  "BBB A+ Accredited",
];

const publications = [
  {
    title: "Enforcing Non-Competes Under Georgia's Restrictive Covenant Act",
    publication: "Georgia Bar Journal",
    date: "March 2023",
  },
  {
    title: "Navigating Complex Commercial Lease Disputes",
    publication: "Atlanta Business Chronicle",
    date: "September 2022",
  },
  {
    title: "Strategic Use of Temporary Orders in Georgia Divorce Proceedings",
    publication: "Family Law Quarterly",
    date: "June 2021",
  },
  {
    title: "Due Diligence Best Practices in Georgia Business Acquisitions",
    publication: "Georgia State Bar — CLE Materials",
    date: "November 2020",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: "var(--color-navy)" }}
      >
        <div
          className="absolute inset-0 diagonal-lines opacity-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 justify-center">
              <span className="gold-rule" />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                Georgia State Bar No. 123456
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
              John Doe
            </h1>
            <p
              className="font-display italic text-2xl"
              style={{ color: "var(--color-gold)" }}
            >
              Attorney at Law
            </p>
            <p
              className="max-w-xl text-base leading-relaxed mt-2"
              style={{ color: "rgba(245,240,232,0.65)" }}
            >
              20+ years of relentless advocacy for individuals and businesses
              across Georgia.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 section-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_360px] gap-16 items-start">
          <AnimatedSection className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="gold-rule" />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                Biography
              </span>
            </div>
            {[
              "John Doe was raised in Atlanta, where he developed an early appreciation for the law's power to protect individuals and resolve disputes fairly. After earning his B.A. with highest honors from the University of Georgia, he attended Harvard Law School, where he graduated with distinction and served as an editor of the Harvard Law Review.",
              "Returning to Georgia, John began his career at one of Atlanta's most prominent litigation firms, where he quickly distinguished himself as a tenacious trial attorney willing to take difficult cases to verdict. In 2010, he founded John Doe Law with a singular mission: to provide the same caliber of legal representation available to Fortune 500 companies to individuals and growing businesses who deserve nothing less.",
              "Over two decades, John has built a practice recognized across Georgia for its depth, integrity, and results. He has tried cases in every major Georgia venue — from the most complex commercial disputes in the Northern District of Georgia federal court to high-stakes family law trials in DeKalb and Fulton counties.",
              "John is a frequent speaker at Georgia Bar CLE programs and has published widely on commercial litigation, restrictive covenants, and Georgia family law. He mentors young attorneys through the Atlanta Bar Association and serves on the board of a local nonprofit focused on access to justice.",
            ].map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: "#374151" }}>
                {para}
              </p>
            ))}
            <div className="mt-4">
              <Button href="/consultation" variant="primary" size="md">
                Schedule a Consultation
              </Button>
            </div>
          </AnimatedSection>

          {/* Headshot placeholder + credentials */}
          <AnimatedSection delay={0.15} className="flex flex-col gap-8">
            <div className="relative">
              <div
                className="absolute -top-3 -right-3 w-full h-full rounded-lg"
                style={{ border: "2px solid var(--color-gold)", opacity: 0.4 }}
                aria-hidden="true"
              />
              <div
                className="relative rounded-lg overflow-hidden aspect-[3/4]"
                style={{
                  background: "linear-gradient(160deg, var(--color-navy-light) 0%, #06101a 100%)",
                }}
              >
                <div className="absolute inset-0 diagonal-lines opacity-20" aria-hidden="true" />
                <div
                  className="absolute bottom-0 inset-x-0 p-6"
                  style={{
                    background: "linear-gradient(to top, rgba(13,27,42,0.98) 0%, transparent 70%)",
                  }}
                >
                  <p className="font-display italic text-lg" style={{ color: "var(--color-cream)" }}>
                    John Doe
                  </p>
                  <p className="text-xs tracking-widest uppercase mt-0.5" style={{ color: "var(--color-gold)" }}>
                    Attorney at Law
                  </p>
                </div>
              </div>
            </div>

            {/* Quick credentials */}
            <div
              className="rounded-lg p-6 flex flex-col gap-3"
              style={{ background: "var(--color-navy)", border: "1px solid var(--color-border)" }}
            >
              {[
                { icon: GraduationCap, text: "J.D., Harvard Law School, 2003" },
                { icon: GraduationCap, text: "B.A., University of Georgia, 2000" },
                { icon: Scale, text: "Georgia State Bar — Admitted 2003" },
                { icon: Scale, text: "U.S. District Court — N.D. & M.D. Georgia" },
                { icon: Award, text: "AV Preeminent Rated — Martindale-Hubbell" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm">
                  <Icon size={15} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                  <span style={{ color: "rgba(245,240,232,0.75)" }}>{text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <SectionHeader
              eyebrow="Philosophy"
              title="How I Practice Law"
              light
            />
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map(({ icon: Icon, title, description }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div
                  className="flex flex-col gap-4 p-8 rounded-lg h-full"
                  style={{
                    background: "var(--color-navy-light)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(201,168,76,0.12)" }}
                  >
                    <Icon size={22} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                  </div>
                  <h3
                    className="font-display font-semibold text-xl"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.65)" }}>
                    {description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Bar Admissions Timeline */}
      <section className="py-24 section-cream">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <SectionHeader eyebrow="Credentials" title="Education & Bar Admissions" />
          </AnimatedSection>
          <div className="relative flex flex-col gap-0">
            {/* Connecting line */}
            <div
              className="absolute left-[5.5rem] top-4 bottom-4 w-px"
              style={{ background: "var(--color-gold)", opacity: 0.3 }}
              aria-hidden="true"
            />
            {timeline.map(({ year, event }, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-6 pb-8">
                  <span
                    className="text-sm font-semibold tabular-nums shrink-0 w-16 text-right pt-0.5"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {year}
                  </span>
                  {/* Dot */}
                  <div
                    className="w-3 h-3 rounded-full shrink-0 mt-1.5 relative z-10"
                    style={{ background: "var(--color-gold)", border: "2px solid var(--color-cream)" }}
                    aria-hidden="true"
                  />
                  <p className="text-base leading-snug" style={{ color: "#374151" }}>
                    {event}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <SectionHeader eyebrow="Recognition" title="Awards & Honors" light />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((award, i) => (
              <AnimatedSection key={award} delay={i * 0.06}>
                <div
                  className="flex items-start gap-3 p-5 rounded-lg"
                  style={{
                    background: "var(--color-navy-light)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <Award
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-gold)" }}
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-snug" style={{ color: "rgba(245,240,232,0.75)" }}>
                    {award}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 section-cream">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <SectionHeader eyebrow="Thought Leadership" title="Media & Publications" />
          </AnimatedSection>
          <div className="flex flex-col gap-5">
            {publications.map((pub, i) => (
              <AnimatedSection key={pub.title} delay={i * 0.08}>
                <div
                  className="flex items-start gap-5 p-6 rounded-lg"
                  style={{
                    background: "var(--color-navy)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <BookOpen
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-gold)" }}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="font-semibold text-base"
                      style={{ color: "var(--color-cream)" }}
                    >
                      {pub.title}
                    </p>
                    <p className="text-sm mt-1" style={{ color: "var(--color-gold)" }}>
                      {pub.publication}
                      <span
                        className="ml-3"
                        style={{ color: "rgba(245,240,232,0.4)" }}
                      >
                        {pub.date}
                      </span>
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Outside the Courtroom */}
      <section className="py-24" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 justify-center">
              <span className="gold-rule" />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                The Person
              </span>
              <span className="gold-rule" />
            </div>
            <h2
              className="font-display font-semibold"
              style={{ fontSize: "2rem", color: "var(--color-cream)" }}
            >
              Outside the Courtroom
            </h2>
            <p
              className="text-base leading-relaxed max-w-2xl"
              style={{ color: "rgba(245,240,232,0.7)" }}
            >
              John is a lifelong Atlanta Braves fan and an avid trail runner who
              has completed the Peachtree Road Race every year since 2006. He and
              his wife, Sarah — a pediatric cardiologist — have two children and
              are active members of their Decatur community. John serves on the
              board of the Atlanta Volunteer Lawyers Foundation, which provides
              free civil legal services to low-income Georgians. He believes
              strongly that access to justice should not be determined by the
              size of your bank account.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
