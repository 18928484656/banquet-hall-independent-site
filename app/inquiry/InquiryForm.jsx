"use client";

import { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Mail, Loader2, MessageCircle, Send } from "lucide-react";
import { company } from "../data/company";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  requirement: "",
  message: "",
  website: ""
};

const requiredFields = {
  name: "Please enter your name.",
  email: "Please enter your business email.",
  phone: "Please enter your phone or WhatsApp number."
};

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

function validatePhone(phone) {
  return /^\+?[0-9\s().-]{7,24}$/.test(phone.trim());
}

function createMailtoHref(form) {
  const subject = encodeURIComponent(`Banquet Hall Project Inquiry - ${form.name || "New Lead"}`);
  const body = encodeURIComponent(
    [
      "Hello DINGSHENG team,",
      "",
      "I am interested in your banquet hall design and EPC solution. Please contact me.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone / WhatsApp: ${form.phone}`,
      `Company: ${form.company || "-"}`,
      `Country / Region: ${form.country || "-"}`,
      `Project Requirement: ${form.requirement || "-"}`,
      "",
      "Message:",
      form.message || "-",
      "",
      `Website Page: ${typeof window !== "undefined" ? window.location.href : company.website}`
    ].join("\n")
  );

  return `${company.mailto}?subject=${subject}&body=${body}`;
}

export default function InquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const isSubmitting = status.type === "submitting";

  const completedRequired = useMemo(
    () => ["name", "email", "phone"].filter((field) => form[field].trim()).length,
    [form]
  );

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus({ type: "idle", message: "" });
  }

  function validateForm() {
    const nextErrors = {};

    Object.entries(requiredFields).forEach(([field, message]) => {
      if (!form[field].trim()) {
        nextErrors[field] = message;
      }
    });

    if (form.email.trim() && !validateEmail(form.email)) {
      nextErrors.email = "Please enter a valid email, e.g. name@company.com.";
    }

    if (form.phone.trim() && !validatePhone(form.phone)) {
      nextErrors.phone = "Please include country code when possible, e.g. +60 12 345 6789.";
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please complete the required fields before submitting."
      });
      return;
    }

    setStatus({ type: "submitting", message: "Sending your inquiry..." });

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.code || result.message || "Request failed");
      }

      setForm(initialForm);
      setErrors({});
      setStatus({
        type: "success",
        message: "Submitted successfully. Our project consultant will contact you soon."
      });
      window.location.assign("/thank-you?source=standard-inquiry-form");
    } catch (error) {
      const needsManualContact =
        error.message === "EMAIL_NOT_CONFIGURED" || error.message === "EMAIL_SEND_FAILED";

      setStatus({
        type: "error",
        needsManualContact,
        message: needsManualContact
          ? "The website email channel is being configured. Please send this inquiry by email or WhatsApp now."
          : "Submission failed. Please email us directly or try again."
      });
    }
  }

  return (
    <form className="inquiry-form b2b-inquiry-form" onSubmit={handleSubmit} noValidate>
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

      <div className="form-progress form-wide" aria-live="polite">
        <span>{completedRequired}/3 required fields completed</span>
        <div>
          <i style={{ width: `${(completedRequired / 3) * 100}%` }} />
        </div>
      </div>

      <label>
        <span>
          Name <strong>*</strong>
        </span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={updateField}
          placeholder="Your full name"
          required
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <small className="field-error">{errors.name}</small>}
      </label>

      <label>
        <span>
          Email <strong>*</strong>
        </span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={updateField}
          placeholder="name@company.com"
          required
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <small className="field-error">{errors.email}</small>}
      </label>

      <label>
        <span>
          Phone / WhatsApp <strong>*</strong>
        </span>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={updateField}
          placeholder="+971 50 123 4567"
          required
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone && <small className="field-error">{errors.phone}</small>}
      </label>

      <label>
        <span>Company Name</span>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={updateField}
          placeholder="Your company or hotel group"
        />
      </label>

      <label>
        <span>Country / Region</span>
        <input
          type="text"
          name="country"
          value={form.country}
          onChange={updateField}
          placeholder="Malaysia, UAE, Saudi Arabia..."
        />
      </label>

      <label>
        <span>Product Requirement</span>
        <select name="requirement" value={form.requirement} onChange={updateField}>
          <option value="">Select your project need</option>
          <option>Luxury banquet hall design</option>
          <option>Wedding hall EPC turnkey project</option>
          <option>Hotel ballroom renovation</option>
          <option>Lighting, AV and LED screen integration</option>
          <option>Material procurement and construction support</option>
        </select>
      </label>

      <label className="form-wide">
        <span>Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          placeholder="Tell us your venue size, project stage, budget range, timeline and preferred style..."
        />
      </label>

      <div className="submit-row form-wide">
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="spin" size={18} /> : <Send size={18} />}
          {isSubmitting ? "Submitting..." : "Submit Project Inquiry"}
        </button>
        {status.message && (
          <div className={`form-status ${status.type}`} role="status">
            <span className="status-icon">
              {status.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            </span>
            <span>{status.message}</span>
            {status.needsManualContact && (
              <div className="form-fallback-actions">
                <a className="mini-contact-button" href={createMailtoHref(form)}>
                  <Mail size={16} />
                  Send Email
                </a>
                <a
                  className="mini-contact-button mini-contact-button-whatsapp"
                  href={company.whatsappLeadHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
