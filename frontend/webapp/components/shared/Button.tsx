import Link from "next/link";

type Variant = "primary" | "secondary" | "text";
type Size = "sm" | "md" | "lg";

type ButtonAsLink = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = {
  href?: never;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

type Props = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold hover:bg-[var(--color-gold-light)] active:scale-[0.98] shadow-sm",
  secondary:
    "border border-[var(--color-gold)] text-[var(--color-gold)] bg-transparent hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] font-semibold",
  text: "text-[var(--color-gold)] underline-offset-4 hover:underline font-medium bg-transparent p-0",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm rounded",
  md: "px-7 py-3.5 text-base rounded",
  lg: "px-9 py-4 text-lg rounded",
};

const base =
  "inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)] disabled:opacity-50 disabled:cursor-not-allowed";

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: Props) {
  const classes = [
    base,
    variantStyles[variant],
    variant !== "text" ? sizeStyles[size] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href) {
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type, disabled, onClick } = rest as ButtonAsButton;
  return (
    <button
      type={type ?? "button"}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
