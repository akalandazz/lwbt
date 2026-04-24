"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import Button from "@/components/shared/Button";
import MobileMenu from "./MobileMenu";

const practiceAreas = [
  {
    href: "/practice-areas/corporate-law",
    name: "Corporate Law",
    desc: "Business formation, M&A, contracts",
  },
  {
    href: "/practice-areas/civil-litigation",
    name: "Civil Litigation",
    desc: "Commercial disputes, appeals",
  },
  {
    href: "/practice-areas/family-law",
    name: "Family Law",
    desc: "Divorce, custody, support",
  },
  {
    href: "/practice-areas/real-estate",
    name: "Real Estate Law",
    desc: "Transactions, disputes, leases",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/results" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-30 transition-all duration-300 ${
          scrolled ? "py-3 shadow-2xl" : "py-5"
        }`}
        style={{
          background: scrolled
            ? "var(--color-navy)"
            : "transparent",
          borderBottom: scrolled
            ? "1px solid var(--color-border)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none shrink-0">
            <span
              className="font-display font-medium tracking-wide"
              style={{ fontSize: "1.35rem", color: "var(--color-cream)" }}
            >
              JOHN DOE
            </span>
            <span
              className="font-sans tracking-[0.22em] text-[9px] uppercase"
              style={{ color: "var(--color-gold)" }}
            >
              Attorney at Law
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-[var(--color-gold)]"
              style={{ color: "rgba(245,240,232,0.85)" }}
            >
              Home
            </Link>

            {/* Practice Areas dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--color-gold)]"
                style={{ color: "rgba(245,240,232,0.85)" }}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Practice Areas
                <ChevronDown
                  size={14}
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-lg shadow-2xl transition-all duration-200 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
                style={{
                  background: "var(--color-navy-light)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="p-2">
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="flex flex-col px-4 py-3 rounded-md transition-colors hover:bg-white/5"
                    >
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "var(--color-cream)" }}
                      >
                        {area.name}
                      </span>
                      <span className="text-xs mt-0.5" style={{ color: "rgba(245,240,232,0.5)" }}>
                        {area.desc}
                      </span>
                    </Link>
                  ))}
                  <div style={{ borderTop: "1px solid var(--color-border)" }} className="mt-1 pt-1">
                    <Link
                      href="/practice-areas"
                      className="flex items-center px-4 py-2.5 text-xs font-semibold tracking-widest uppercase transition-colors hover:text-[var(--color-gold-light)]"
                      style={{ color: "var(--color-gold)" }}
                    >
                      All Practice Areas →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-[var(--color-gold)]"
                style={{ color: "rgba(245,240,232,0.85)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+14045550190"
              className="text-sm font-medium transition-colors hover:text-[var(--color-gold-light)]"
              style={{ color: "var(--color-gold)" }}
            >
              (404) 555-0190
            </a>
            <Button href="/consultation" variant="primary" size="sm">
              Book Consultation
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="lg:hidden p-2 rounded transition-colors hover:bg-white/10"
            style={{ color: "var(--color-cream)" }}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
