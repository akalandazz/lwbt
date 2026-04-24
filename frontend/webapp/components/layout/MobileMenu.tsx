"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";
import Button from "@/components/shared/Button";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Corporate Law", href: "/practice-areas/corporate-law", sub: true },
  { label: "Civil Litigation", href: "/practice-areas/civil-litigation", sub: true },
  { label: "Family Law", href: "/practice-areas/family-law", sub: true },
  { label: "Real Estate Law", href: "/practice-areas/real-estate", sub: true },
  { label: "Results", href: "/results" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(13,27,42,0.6)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "var(--color-navy-light)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid var(--color-border)" }}
        >
          <Link href="/" onClick={onClose} className="flex flex-col leading-none">
            <span
              className="font-display font-medium tracking-wide"
              style={{ fontSize: "1.25rem", color: "var(--color-cream)" }}
            >
              JOHN DOE
            </span>
            <span
              className="font-sans tracking-[0.2em] text-[10px] uppercase"
              style={{ color: "var(--color-gold)" }}
            >
              Attorney at Law
            </span>
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded transition-colors hover:bg-white/10"
            style={{ color: "var(--color-cream)" }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded transition-colors hover:bg-white/5 ${
                    link.sub ? "pl-8" : ""
                  }`}
                  style={{
                    color: link.sub ? "rgba(245,240,232,0.65)" : "var(--color-cream)",
                    fontSize: link.sub ? "0.9rem" : "1rem",
                  }}
                >
                  {link.label}
                  <ChevronRight size={14} aria-hidden="true" style={{ color: "var(--color-gold)" }} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div
          className="px-6 py-6 flex flex-col gap-3"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <Button href="/consultation" variant="primary" size="md" className="w-full justify-center">
            Book Free Consultation
          </Button>
          <a
            href="tel:+14045550190"
            className="text-center text-sm font-medium"
            style={{ color: "var(--color-gold)" }}
          >
            (404) 555-0190
          </a>
        </div>
      </div>
    </>
  );
}
