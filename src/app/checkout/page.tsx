import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";

export const metadata: Metadata = pageMetadata({ title: "Checkout", description: "Completa il tuo ordine AventiPC.", path: "/checkout", noindex: true });

export default function CheckoutPage() {
  return (
    <Container className="pt-8 md:pt-12">
      <h1 className="text-title md:text-display">Checkout</h1>
      <p className="mt-2 text-ink-soft">Spedizione gratuita in 24–48 ore. Nessun account richiesto.</p>
      <div className="mt-8">
        <CheckoutForm />
      </div>
    </Container>
  );
}
