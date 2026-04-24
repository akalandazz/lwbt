"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  practiceArea: z.string().min(1, "Please select a practice area"),
  urgency: z.string().min(1, "Please select urgency level"),
  message: z.string().min(20, "Please describe your matter in at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const inputClass = `
  w-full px-4 py-3 rounded text-sm transition-colors
  bg-[var(--color-navy)] text-[var(--color-cream)]
  border border-[var(--color-border)]
  focus:outline-none focus:border-[var(--color-gold)]
  placeholder:text-[rgba(245,240,232,0.3)]
`.trim();

const labelClass = "block text-xs font-semibold tracking-wide uppercase mb-1.5 text-[rgba(245,240,232,0.7)]";

export default function CaseEvaluationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, type: "case-evaluation" }),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle size={40} style={{ color: "var(--color-gold)" }} />
        <p className="font-display text-xl font-semibold" style={{ color: "var(--color-cream)" }}>
          We'll be in touch shortly.
        </p>
        <p className="text-sm" style={{ color: "rgba(245,240,232,0.6)" }}>
          Expect a response within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="eval-name" className={labelClass}>Full Name *</label>
        <input id="eval-name" type="text" placeholder="Your name" className={inputClass} {...register("fullName")} />
        {errors.fullName && <p className="mt-1 text-xs" style={{ color: "#f87171" }}>{errors.fullName.message}</p>}
      </div>

      <div>
        <label htmlFor="eval-email" className={labelClass}>Email *</label>
        <input id="eval-email" type="email" placeholder="you@example.com" className={inputClass} {...register("email")} />
        {errors.email && <p className="mt-1 text-xs" style={{ color: "#f87171" }}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="eval-phone" className={labelClass}>Phone *</label>
        <input id="eval-phone" type="tel" placeholder="(404) 555-0000" className={inputClass} {...register("phone")} />
        {errors.phone && <p className="mt-1 text-xs" style={{ color: "#f87171" }}>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="eval-area" className={labelClass}>Practice Area *</label>
        <select id="eval-area" className={inputClass} style={{ background: "var(--color-navy)", color: "var(--color-cream)" }} {...register("practiceArea")}>
          <option value="">Select…</option>
          <option>Corporate Law</option>
          <option>Civil Litigation</option>
          <option>Family Law</option>
          <option>Real Estate Law</option>
          <option>Other</option>
        </select>
        {errors.practiceArea && <p className="mt-1 text-xs" style={{ color: "#f87171" }}>{errors.practiceArea.message}</p>}
      </div>

      <div>
        <label htmlFor="eval-urgency" className={labelClass}>Urgency *</label>
        <select id="eval-urgency" className={inputClass} style={{ background: "var(--color-navy)", color: "var(--color-cream)" }} {...register("urgency")}>
          <option value="">Select…</option>
          <option>Immediate (within 24–48 hours)</option>
          <option>This week</option>
          <option>Within 2 weeks</option>
          <option>Not urgent — planning ahead</option>
        </select>
        {errors.urgency && <p className="mt-1 text-xs" style={{ color: "#f87171" }}>{errors.urgency.message}</p>}
      </div>

      <div>
        <label htmlFor="eval-message" className={labelClass}>Brief Description *</label>
        <textarea id="eval-message" rows={4} placeholder="Briefly describe your situation…" className={inputClass} style={{ resize: "vertical" }} {...register("message")} />
        {errors.message && <p className="mt-1 text-xs" style={{ color: "#f87171" }}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded font-semibold text-sm transition-all hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "var(--color-gold)", color: "var(--color-navy)" }}
      >
        {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : "Get Free Case Evaluation"}
      </button>
    </form>
  );
}
