const badges = [
  { name: "Super Lawyers", years: "2018–2024" },
  { name: "Martindale-Hubbell", subtitle: "AV Preeminent Rated" },
  { name: "Georgia State Bar", subtitle: "Member Since 2003" },
  { name: "AVVO", subtitle: "10.0 Superb Rating" },
  { name: "BBB", subtitle: "A+ Accredited" },
  { name: "Best Lawyers", subtitle: "America's Best 2023–24" },
];

function BadgeItem({ name, subtitle, years }: { name: string; subtitle?: string; years?: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center px-8 py-4 shrink-0 gap-1"
      style={{ borderRight: "1px solid var(--color-border)" }}
    >
      <span
        className="font-display font-semibold whitespace-nowrap"
        style={{ fontSize: "1rem", color: "var(--color-cream)" }}
      >
        {name}
      </span>
      {(subtitle || years) && (
        <span
          className="text-[11px] tracking-wider whitespace-nowrap"
          style={{ color: "var(--color-gold)" }}
        >
          {subtitle ?? years}
        </span>
      )}
    </div>
  );
}

export default function TrustBar() {
  return (
    <section
      aria-label="Awards and recognition"
      style={{
        background: "var(--color-navy-light)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* Desktop: static */}
      <div className="hidden md:flex items-center justify-center max-w-7xl mx-auto px-6 py-5 gap-0 overflow-x-auto">
        {badges.map((b) => (
          <BadgeItem key={b.name} {...b} />
        ))}
      </div>

      {/* Mobile: marquee */}
      <div className="md:hidden overflow-hidden py-5">
        <div className="flex animate-marquee" aria-hidden="true">
          {[...badges, ...badges].map((b, i) => (
            <BadgeItem key={`${b.name}-${i}`} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
