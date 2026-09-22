import Link from "next/link";

interface SectionHeadingProps {
  title: string;
  /** Optional one-line supporting sentence. */
  text?: string;
  /** Optional link shown on the right (e.g. "Vedi tutti"). */
  link?: { label: string; href: string };
  as?: "h1" | "h2";
  id?: string;
}

export function SectionHeading({ title, text, link, as: Tag = "h2", id }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
      <div className="max-w-[60ch]">
        <Tag id={id} className="text-heading md:text-title">
          {title}
        </Tag>
        {text ? <p className="mt-2 text-ink-soft">{text}</p> : null}
      </div>
      {link ? (
        <Link href={link.href} className="text-sm font-semibold text-aventi-blue hover:underline">
          {link.label}
        </Link>
      ) : null}
    </div>
  );
}
