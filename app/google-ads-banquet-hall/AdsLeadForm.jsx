"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
  website: ""
};

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

function validPhone(value) {
  return /^\+?[0-9\s().-]{7,24}$/.test(value.trim());
}

export default function AdsLeadForm({ compact = false, source = "google_ads_landing" }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const isSubmitting = status.type === "submitting";

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus({ type: "idle", message: "" });
  }

  function validate() {
    const next = {};

    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    if (form.email.trim() && !validEmail(form.email)) next.email = "Enter a valid email.";
    if (!form.phone.trim()) next.phone = "Phone is required.";
    if (form.phone.trim() && !validPhone(form.phone)) next.phone = "Include country code if possible.";

    return next;
  }

  async function submit(event) {
    event.preventDefault();

    const next = validate();
    setErrors(next);

    if (Object.keys(next).length > 0) {
      setStatus({ type: "error", message: "Please complete the required fields." });
      return;
    }

    setStatus({ type: "submitting", message: "Sending..." });

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          requirement: "Google Ads landing page quote request",
          message: [form.message, `Lead Source: ${source}`].filter(Boolean).join("\n\n")
        })
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "Submit failed");

      setForm(initialForm);
      setErrors({});
      setStatus({ type: "success", message: "Inquiry sent. We will contact you soon." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Submission failed. Please contact us by WhatsApp."
      });
    }
  }

  return (
    <form className={`ads-lead-form ${compact ? "ads-lead-form-compact" : ""}`} onSubmit={submit} noValidate>
      <input
        className="spam-field"
        type="text"
        name="website"
        value={form.website}
        onChange={updateField}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      <label>
        <span>Name *</span>
        <input
          name="name"
          value={form.name}
          onChange={updateField}
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
          required
        />
        {errors.name && <small>{errors.name}</small>}
      </label>

      <label>
        <span>Email *</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={updateField}
          placeholder="name@company.com"
          aria-invalid={Boolean(errors.email)}
          required
        />
        {errors.email && <small>{errors.email}</small>}
      </label>

      <label>
        <span>Phone *</span>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={updateField}
          placeholder="+60 12 345 6789"
          aria-invalid={Boolean(errors.phone)}
          required
        />
        {errors.phone && <small>{errors.phone}</small>}
      </label>

      {!compact && (
        <label className="ads-form-wide">
          <span>Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={updateField}
            placeholder="Venue size, country, project timeline..."
          />
        </label>
      )}

      <button className="ads-submit ads-form-wide" type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="spin" size={18} /> : <Send size={18} />}
        {compact ? "Get Quote" : "Send Inquiry Now"}
      </button>

      {status.message && (
        <p className={`ads-form-status ${status.type}`} role="status">
          {status.type === "success" ? <CheckCircle2 size={17} /> : <TriangleAlert size={17} />}
          {status.message}
        </p>
      )}
    </form>
  );
}
