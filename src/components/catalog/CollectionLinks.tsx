import Link from "next/link";

interface CollectionLinksProps {
  title: string;
  items: { name: string; tagline: string; href: string }[];
}

export function CollectionLinks({ title, items }: CollectionLinksProps) {
  return (
    <section aria-labelledby="altre">
      <h2 id="altre" className="text-heading">
        {title}
      </h2>
      <ul className="mt-5 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4">
              <span className="font-display text-lg font-semibold text-ink group-hover:text-aventi-blue">{item.name}</span>
              <span className="text-sm text-ink-soft">{item.tagline}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
