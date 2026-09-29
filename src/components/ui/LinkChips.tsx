import Link from "next/link";

/** Wrapped list of pill links. Used for internal links between keyword and city pages. */
export function LinkChips({ items }: { items: { label: string; href: string; current?: boolean }[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={`inline-flex min-h-10 items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              item.current ? "border-ink bg-ink text-white" : "border-line bg-white text-ink-soft hover:border-lilac hover:text-ink"
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
