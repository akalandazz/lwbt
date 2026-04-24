"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import Button from "@/components/shared/Button";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  practiceArea: z.string().min(1, "Please select a practice area"),
  message: z.string().min(20, "Please describe your matter in at least 20 characters"),
  howHeard: z.string().optional(),
  preferredContact: z.enum(["Email", "Phone"]),
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

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { preferredContact: "Email" },
  });

  async function onSubmit(data: FormData) {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please try calling us directly at (404) 555-0190.");
    }
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center gap-5 py-16 text-center rounded-lg px-8"
        style={{ background: "var(--color-navy-light)", border: "1px solid var(--color-border)" }}
      >
        <CheckCircle size={48} style={{ color: "var(--color-gold)" }} />
        <h3
          className="font-display font-semibold text-2xl"
          style={{ color: "var(--color-cream)" }}
        >
          Message Received
        </h3>
        <p style={{ color: "rgba(245,240,232,0.7)" }} className="max-w-sm text-sm leading-relaxed">
          Thank you for reaching out. A member of our team will review your message and respond
          within one business day. For urgent matters, please call (404) 555-0190.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      aria-label="Contact form"
      noValidate
    >
      {/* Confidentiality notice */}
      <p
        className="text-xs leading-relaxed px-4 py-3 rounded"
        style={{
          background: "rgba(201,168,76,0.08)",
          border: "1px solid rgba(201,168,76,0.2)",
          color: "rgba(245,240,232,0.7)",
        }}
      >
        All communications are protected by attorney-client privilege. We never share your
        information.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span aria-hidden="true" style={{ color: "var(--color-gold)" }}>*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            className={inputClass}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" role="alert" className="mt-1 text-xs" style={{ color: "#f87171" }}>
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span aria-hidden="true" style={{ color: "var(--color-gold)" }}>*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            className={inputClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-xs" style={{ color: "#f87171" }}>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-[rgba(245,240,232,0.4)] normal-case tracking-normal font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(404) 555-0000"
            className={inputClass}
            {...register("phone")}
          />
        </div>

        <div>
          <label htmlFor="practiceArea" className={labelClass}>
            Practice Area <span aria-hidden="true" style={{ color: "var(--color-gold)" }}>*</span>
          </label>
          <select
            id="practiceArea"
            className={inputClass}
            aria-invalid={!!errors.practiceArea}
            aria-describedby={errors.practiceArea ? "practiceArea-error" : undefined}
            {...register("practiceArea")}
            style={{
              background: "var(--color-navy)",
              color: "var(--color-cream)",
            }}
          >
            <option value="">Select an area…</option>
            <option value="Corporate Law">Corporate Law</option>
            <option value="Civil Litigation">Civil Litigation</option>
            <option value="Family Law">Family Law</option>
            <option value="Real Estate Law">Real Estate Law</option>
            <option value="Other">Other / Not Sure</option>
          </select>
          {errors.practiceArea && (
            <p id="practiceArea-error" role="alert" className="mt-1 text-xs" style={{ color: "#f87171" }}>
              {errors.practiceArea.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Brief Description <span aria-hidden="true" style={{ color: "var(--color-gold)" }}>*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Please briefly describe your legal matter…"
          className={inputClass}
          style={{ resize: "vertical" }}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs" style={{ color: "#f87171" }}>
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="howHeard" className={labelClass}>
            How Did You Find Us?
          </label>
          <select
            id="howHeard"
            className={inputClass}
            {...register("howHeard")}
            style={{ background: "var(--color-navy)", color: "var(--color-cream)" }}
          >
            <option value="">Select…</option>
            <option value="Google Search">Google Search</option>
            <option value="Referral">Referral from Friend/Family</option>
            <option value="Attorney Referral">Attorney Referral</option>
            <option value="AVVO">AVVO</option>
            <option value="Martindale-Hubbell">Martindale-Hubbell</option>
            <option value="Social Media">Social Media</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <fieldset>
            <legend className={labelClass}>Preferred Contact</legend>
            <div className="flex gap-6 mt-2">
              {(["Email", "Phone"] as const).map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value={opt}
                    {...register("preferredContact")}
                    className="accent-[var(--color-gold)]"
                  />
                  <span className="text-sm" style={{ color: "rgba(245,240,232,0.75)" }}>
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      {serverError && (
        <p role="alert" className="text-sm" style={{ color: "#f87171" }}>
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-2 w-full py-4 rounded font-semibold text-base transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:brightness-110 active:scale-[0.99]"
        style={{
          background: "var(--color-gold)",
          color: "var(--color-navy)",
        }}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
