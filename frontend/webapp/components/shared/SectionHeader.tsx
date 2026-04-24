type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: Props) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = light ? "text-[var(--color-cream)]" : "text-[var(--color-navy)]";
  const subtitleColor = light ? "text-[var(--color-cream)]/70" : "text-[var(--color-gray-muted)]";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <div className={`flex flex-col gap-2 ${align === "center" ? "items-center" : "items-start"}`}>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-gold)]">
            {eyebrow}
          </span>
          <span className="gold-rule" />
        </div>
      )}
      <h2
        className={`font-display font-semibold leading-tight ${titleColor}`}
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-base leading-relaxed mt-1 ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
