type Props = {
  label: string;
  variant?: "gold" | "navy" | "cream";
  className?: string;
};

const variantMap = {
  gold: "bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/30",
  navy: "bg-[var(--color-navy-light)] text-[var(--color-cream)] border border-[var(--color-border)]",
  cream: "bg-[var(--color-cream)] text-[var(--color-navy)] border border-[var(--color-navy)]/10",
};

export default function Badge({ label, variant = "gold", className = "" }: Props) {
  return (
    <span
      className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${variantMap[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
