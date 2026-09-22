import { Plus } from "lucide-react";
import type { FaqItem } from "@/types/catalog";

/** Native disclosure list: works without JavaScript and is fully crawlable. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-sans text-base font-semibold text-ink hover:text-aventi-blue">
            {item.question}
            <Plus
              aria-hidden="true"
              className="size-5 shrink-0 text-ink-muted transition-transform duration-200 group-open:rotate-45"
            />
          </summary>
          <p className="max-w-[70ch] pb-6 leading-relaxed text-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
