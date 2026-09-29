"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

/* Demo form: no backend is connected yet. */
const input =
  "h-11 w-full rounded-card border border-line bg-white px-4 text-ink focus:border-lilac focus:outline-none focus-visible:ring-2 focus-visible:ring-aventi-blue/40";

export interface ContactFormLabels {
  name: string;
  email: string;
  message: string;
  submit: string;
  sent: string;
}

export function ContactForm({ labels }: { labels: ContactFormLabels }) {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  if (sent) {
    return (
      <p role="status" className="rounded-tile border border-line bg-white p-6 font-semibold">
        {labels.sent}
      </p>
    );
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-nome" className="mb-1.5 block text-sm font-semibold">
            {labels.name}
          </label>
          <input id="c-nome" name="name" required autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-1.5 block text-sm font-semibold">
            {labels.email}
          </label>
          <input id="c-email" name="email" type="email" required autoComplete="email" className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="c-msg" className="mb-1.5 block text-sm font-semibold">
          {labels.message}
        </label>
        <textarea id="c-msg" name="message" required rows={5} className={`${input} h-auto py-2.5`} />
      </div>
      <Button type="submit">{labels.submit}</Button>
    </form>
  );
}
