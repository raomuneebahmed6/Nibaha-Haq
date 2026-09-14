"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";

const budgetRanges = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
    event.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-teal" aria-hidden="true" />
        <h3 className="mt-4 text-lg font-semibold text-ink">Quote request received</h3>
        <p className="mt-2 max-w-sm text-sm text-ink/60">
          Thanks for the details. Our team will review your request and get back to you with a tailored proposal.
        </p>
        <Button type="button" variant="outline-dark" className="mt-6" onClick={() => setStatus("idle")}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="mb-1.5 block text-sm font-medium text-ink">
            Name <span className="text-primary">*</span>
          </label>
          <input
            id="q-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-primary focus:outline-none"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
            Business / Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-primary focus:outline-none"
            placeholder="Your company name"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-email" className="mb-1.5 block text-sm font-medium text-ink">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="q-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-primary focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="q-phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone
          </label>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-primary focus:outline-none"
            placeholder="+92 XXX XXXXXXX"
          />
        </div>
      </div>
      <div>
        <label htmlFor="website" className="mb-1.5 block text-sm font-medium text-ink">
          Website (if you have one)
        </label>
        <input
          id="website"
          name="website"
          type="url"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-primary focus:outline-none"
          placeholder="https://yourwebsite.com"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-service" className="mb-1.5 block text-sm font-medium text-ink">
            Required Service <span className="text-primary">*</span>
          </label>
          <select
            id="q-service"
            name="service"
            required
            defaultValue=""
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink focus:border-primary focus:outline-none"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-ink">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink focus:border-primary focus:outline-none"
          >
            <option value="" disabled>
              Select a budget range
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-ink">
          Project Details <span className="text-primary">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-primary focus:outline-none"
          placeholder="Tell us about your project, goals and timeline"
        />
      </div>
      <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          <>
            Request My Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
}
