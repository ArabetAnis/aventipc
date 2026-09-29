"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const text: Record<string, { title: string; body: string; retry: string }> = {
  it: { title: "Qualcosa è andato storto.", body: "La pagina non si è caricata correttamente. Riprova tra un momento.", retry: "Riprova" },
  fr: { title: "Une erreur s'est produite.", body: "La page ne s'est pas chargée correctement. Réessayez dans un instant.", retry: "Réessayer" },
  es: { title: "Algo ha fallado.", body: "La página no se ha cargado bien. Inténtalo de nuevo en un momento.", retry: "Reintentar" },
  de: { title: "Etwas ist schiefgelaufen.", body: "Die Seite wurde nicht richtig geladen. Versuchen Sie es gleich noch einmal.", retry: "Erneut versuchen" },
  nl: { title: "Er ging iets mis.", body: "De pagina is niet goed geladen. Probeer het zo meteen opnieuw.", retry: "Opnieuw proberen" },
};

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const params = useParams<{ lang?: string }>();
  const t = text[params?.lang ?? "it"] ?? text.it;
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <Container className="py-24 md:py-32">
      <h1 className="text-title md:text-display">{t.title}</h1>
      <p className="mt-4 max-w-[50ch] text-lead text-ink-soft">{t.body}</p>
      <Button onClick={reset} className="mt-8">
        {t.retry}
      </Button>
    </Container>
  );
}
