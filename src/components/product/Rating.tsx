import { Star } from "lucide-react";

export function Rating({ value, count }: { value: number; count: number }) {
  const rounded = Math.round(value * 2) / 2;
  return (
    <p className="flex items-center gap-2 text-sm text-ink-soft">
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`size-4 ${i <= rounded ? "fill-aventi-blue text-aventi-blue" : "text-line-strong"}`}
            strokeWidth={1.5}
          />
        ))}
      </span>
      <span>
        <span className="font-semibold text-ink tabular">{value.toFixed(1)}</span> su 5 · {count} recensioni
      </span>
    </p>
  );
}
