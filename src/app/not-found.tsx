import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pagina non trovata",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-24 md:py-32">
      <p className="text-brand-gradient font-display text-display font-semibold">404</p>
      <h1 className="mt-3 text-title md:text-display">Questa pagina non esiste.</h1>
      <p className="mt-4 max-w-[50ch] text-lead text-ink-soft">
        Il link potrebbe essere cambiato o il prodotto non è più in catalogo. Riparti dal catalogo o dalla home.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/prodotti">Vai al catalogo</ButtonLink>
        <ButtonLink href="/" variant="secondary">
          Torna alla home
        </ButtonLink>
      </div>
    </Container>
  );
}
