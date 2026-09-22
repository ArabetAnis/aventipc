"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button, ButtonLink } from "@/components/ui/Button";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="py-24 md:py-32">
      <h1 className="text-title md:text-display">Qualcosa è andato storto.</h1>
      <p className="mt-4 max-w-[50ch] text-lead text-ink-soft">
        La pagina non si è caricata correttamente. Riprova; se il problema continua, scrivici e ti aiutiamo noi.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={reset}>Riprova</Button>
        <ButtonLink href="/contatti" variant="secondary">
          Contattaci
        </ButtonLink>
      </div>
    </Container>
  );
}
