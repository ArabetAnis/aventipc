import { Search } from "lucide-react";

interface SearchFormProps {
  defaultValue?: string;
  className?: string;
  /** Larger variant for the catalogue page. */
  size?: "sm" | "lg";
}

/** Plain GET form: works without JavaScript and gives search results a crawlable URL. */
export function SearchForm({ defaultValue = "", className = "", size = "sm" }: SearchFormProps) {
  const height = size === "lg" ? "h-12 text-base" : "h-10 text-sm";
  return (
    <form action="/prodotti" method="get" role="search" className={`relative ${className}`}>
      <label htmlFor={`cerca-${size}`} className="sr-only">
        Cerca un prodotto
      </label>
      <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-ink-muted" />
      <input
        id={`cerca-${size}`}
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="Cerca MacBook, RTX 5080, ThinkPad…"
        autoComplete="off"
        className={`${height} w-full rounded-full border border-line bg-white pr-4 pl-10 text-ink placeholder:text-ink-muted focus:border-lilac focus:outline-none focus-visible:ring-2 focus-visible:ring-aventi-blue/40`}
      />
    </form>
  );
}
