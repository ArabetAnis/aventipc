import Link from "next/link";
import { ExternalLink, MessageCircle } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";

/**
 * Vinted button when the item has a listing, otherwise a contact button.
 * eBay/Subito can be added back as extra marketplaces later.
 */
export function BuyButton({ vinted, labels, contactHref }: { vinted?: string; labels: { buy: string; ask: string }; contactHref: string }) {
  if (vinted) {
    return (
      <a href={vinted} target="_blank" rel="noopener" className={buttonClasses("primary", "lg", "w-full")}>
        {labels.buy}
        <ExternalLink aria-hidden="true" className="size-4" />
      </a>
    );
  }
  return (
    <Link href={contactHref} className={buttonClasses("secondary", "lg", "w-full")}>
      <MessageCircle aria-hidden="true" className="size-4" />
      {labels.ask}
    </Link>
  );
}
