"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
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
        <h3 className="mt-4 text-lg font-semibold text-ink">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-ink/60">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <Button type="button" variant="outline-dark" className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-primary focus:outline-none"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-primary focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-primary focus:outline-none"
            placeholder="+92 XXX XXXXXXX"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
            Service Required
          </label>
          <select
            id="service"
            name="service"
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
            <option value="other">Something else</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-primary focus:outline-none"
          placeholder="Tell us a bit about what you need help with"
        />
      </div>
      <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
}
