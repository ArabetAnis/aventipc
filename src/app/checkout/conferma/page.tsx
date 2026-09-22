import type { Metadata } from "next";
import { Suspense } from "react";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { OrderConfirmation } from "@/components/checkout/OrderConfirmation";

export const metadata: Metadata = pageMetadata({ title: "Ordine confermato", description: "Grazie per il tuo ordine.", path: "/checkout/conferma", noindex: true });

export default function ConfirmationPage() {
  return (
    <Container className="pt-8 md:pt-12">
      <Suspense fallback={<div aria-busy="true" className="h-64 rounded-tile bg-paper-tint" />}>
        <OrderConfirmation />
      </Suspense>
    </Container>
  );
}
