import Image from "next/image";

export type WordmarkVariant = "light" | "dark";

interface WordmarkProps {
  /** "light" = navy/steel logo for light surfaces (header). "dark" = original white/steel logo for dark surfaces (footer). */
  variant?: WordmarkVariant;
  className?: string;
  /** Load eagerly (header logo is above the fold). */
  priority?: boolean;
}

/** FindBetter logo (bow-and-arrow "B" mark + FIND BETTER), from the official artwork. Height comes from className. */
export function Wordmark({ variant = "light", className = "", priority = false }: WordmarkProps) {
  return (
    <Image
      src={variant === "dark" ? "/brand/logo-on-dark.webp" : "/brand/logo-on-light.webp"}
      alt="FindBetter"
      width={1200}
      height={540}
      priority={priority}
      sizes="(min-width: 1024px) 160px, 120px"
      className={className}
    />
  );
}
