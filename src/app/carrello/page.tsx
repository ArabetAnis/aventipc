import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = pageMetadata({ title: "Carrello", description: "Il tuo carrello AventiPC.", path: "/carrello", noindex: true });

export default function CartPage() {
  return (
    <Container className="pt-8 md:pt-12">
      <h1 className="text-title md:text-display">Carrello</h1>
      <div className="mt-8">
        <CartView />
      </div>
    </Container>
  );
}
