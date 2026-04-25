import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const practiceLinks = [
  { label: "Corporate Law", href: "/practice-areas/corporate-law" },
  { label: "Civil Litigation", href: "/practice-areas/civil-litigation" },
  { label: "Family Law", href: "/practice-areas/family-law" },
  { label: "Real Estate Law", href: "/practice-areas/real-estate" },
];

const quickLinks = [
  { label: "About John Doe", href: "/about" },
  { label: "Case Results", href: "/results" },
  { label: "Contact", href: "/contact" },
  { label: "Book Consultation", href: "/consultation" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080F18",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-5">
            <div>
              <Link href="/" className="flex flex-col leading-none">
                <span
                  className="font-display font-medium tracking-wide"
                  style={{ fontSize: "1.4rem", color: "var(--color-cream)" }}
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
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Relentless advocacy for individuals and businesses across Georgia
              for over 20 years.
            </p>
            <div className="flex items-center gap-4">
              {[
                {
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: "https://facebook.com",
                  label: "Facebook",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  href: "https://x.com",
                  label: "X (Twitter)",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-colors hover:text-[var(--color-gold)]"
                  style={{ color: "rgba(245,240,232,0.4)" }}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Practice Areas */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: "var(--color-gold)" }}
            >
              Practice Areas
            </h3>
            <ul className="flex flex-col gap-3">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--color-gold)]"
                    style={{ color: "rgba(245,240,232,0.6)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: "var(--color-gold)" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--color-gold)]"
                    style={{ color: "rgba(245,240,232,0.6)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact + Hours */}
          <div className="flex flex-col gap-5">
            <div>
              <h3
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
                style={{ color: "var(--color-gold)" }}
              >
                Contact
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-gold)" }}
                    aria-hidden="true"
                  />
                  <span className="text-sm" style={{ color: "rgba(245,240,232,0.6)" }}>
                    191 Peachtree Street NE, Suite 3200
                    <br />
                    Atlanta, GA 30303
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                  <a
                    href="tel:+14045550190"
                    className="text-sm transition-colors hover:text-[var(--color-gold)]"
                    style={{ color: "rgba(245,240,232,0.6)" }}
                  >
                    (404) 555-0190
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={15} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                  <a
                    href="mailto:john@johndoelaw.com"
                    className="text-sm transition-colors hover:text-[var(--color-gold)]"
                    style={{ color: "rgba(245,240,232,0.6)" }}
                  >
                    john@johndoelaw.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock size={13} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "var(--color-gold)" }}
                >
                  Office Hours
                </span>
              </div>
              <p className="text-sm" style={{ color: "rgba(245,240,232,0.6)" }}>
                Monday – Friday: 9:00 AM – 6:00 PM
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(245,240,232,0.4)" }}>
                Emergency line available 24/7 for existing clients
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="mt-12 pt-8 rounded-lg px-6 py-5"
          style={{
            borderTop: "1px solid var(--color-border)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.35)" }}>
            <strong style={{ color: "rgba(245,240,232,0.5)" }}>Legal Disclaimer:</strong> The
            information on this website is for general informational purposes only and does not
            constitute legal advice. No attorney-client relationship is formed by visiting this
            site, reading its content, or submitting a contact form. Past results do not
            guarantee future outcomes. Results may vary depending on the specific facts and
            legal circumstances of your case.{" "}
            <em>Attorney Advertising — John Doe, Attorney at Law, State Bar of Georgia.</em>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>
            © {new Date().getFullYear()} John Doe Law. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms", "Disclaimer"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs transition-colors hover:text-[var(--color-gold)]"
                style={{ color: "rgba(245,240,232,0.35)" }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
