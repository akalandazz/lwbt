import { Phone, Calendar, Clock } from "lucide-react";
import Button from "./Button";

export default function ConsultationWidget() {
  return (
    <aside
      className="rounded-lg p-6 flex flex-col gap-5 sticky top-24"
      style={{
        background: "var(--color-navy-light)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-1">
          Free Consultation
        </p>
        <h3
          className="font-display font-semibold text-[var(--color-cream)] leading-tight"
          style={{ fontSize: "1.4rem" }}
        >
          Talk to John Today
        </h3>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
        Every case starts with a confidential, no-obligation conversation. Tell
        us what you're facing and we'll give you an honest assessment.
      </p>

      <div className="flex flex-col gap-3">
        <a
          href="tel:+14045550190"
          className="flex items-center gap-3 text-sm font-medium"
          style={{ color: "var(--color-gold)" }}
        >
          <Phone size={16} aria-hidden="true" />
          (404) 555-0190
        </a>
        <a
          href="/consultation"
          className="flex items-center gap-3 text-sm font-medium"
          style={{ color: "var(--color-gold)" }}
        >
          <Calendar size={16} aria-hidden="true" />
          Schedule Online
        </a>
        <span
          className="flex items-center gap-3 text-sm"
          style={{ color: "rgba(245,240,232,0.6)" }}
        >
          <Clock size={16} aria-hidden="true" />
          Mon–Fri, 9am–6pm
        </span>
      </div>

      <Button href="/consultation" variant="primary" size="sm" className="w-full justify-center">
        Book Consultation
      </Button>

      <p className="text-xs text-center" style={{ color: "rgba(245,240,232,0.4)" }}>
        All communications are confidential.
      </p>
    </aside>
  );
}
