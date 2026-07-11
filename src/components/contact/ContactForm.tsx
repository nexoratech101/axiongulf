"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const enquiryTypes = [
  "General Enquiry",
  "3D Printing",
  "Robotics & Automation",
  "Drone Solutions",
  "IoT Solutions",
  "Technical Support",
  "Partnership",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const enquiryType = String(form.get("enquiryType") ?? "General Enquiry");
    const subject = `[axiongulf.com] New Enquiry — ${enquiryType}`;
    const body = [
      `Name: ${form.get("name")}`,
      `Company: ${form.get("company") || "—"}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone") || "—"}`,
      `Enquiry Type: ${enquiryType}`,
      "",
      String(form.get("message")),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-charcoal">
          Full Name <span className="text-tech-blue">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-lg border border-charcoal/15 px-4 py-3 text-sm text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-tech-blue"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-charcoal">
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-2 w-full rounded-lg border border-charcoal/15 px-4 py-3 text-sm text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-tech-blue"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal">
            Email Address <span className="text-tech-blue">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-charcoal/15 px-4 py-3 text-sm text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-tech-blue"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-lg border border-charcoal/15 px-4 py-3 text-sm text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-tech-blue"
          />
        </div>
      </div>

      <div>
        <label htmlFor="enquiryType" className="block text-sm font-semibold text-charcoal">
          Enquiry Type <span className="text-tech-blue">*</span>
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          required
          defaultValue="General Enquiry"
          className="mt-2 w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-tech-blue"
        >
          {enquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal">
          Message <span className="text-tech-blue">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-lg border border-charcoal/15 px-4 py-3 text-sm text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-tech-blue"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-tech-blue px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-tech-blue/90"
      >
        Send Enquiry
      </button>

      {status === "sent" && (
        <p role="status" className="text-sm text-charcoal/60">
          Your email client should now be open with your enquiry pre-filled —
          just hit send. If nothing opened, email us directly at{" "}
          <a href={`mailto:${site.email}`} className="text-tech-blue underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
