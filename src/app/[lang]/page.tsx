import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { resolve } from "@/i18n/routes";
import { PageShell } from "@/components/layout/PageShell";
import { metadataFor, RouteView } from "@/views/route-view";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const route = resolve(lang, [])!;
  return metadataFor(route, getDictionary(lang));
}

export default async function LocaleHome({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const route = resolve(lang, []);
  if (!route) notFound();
  const dict = getDictionary(lang);
  return (
    <PageShell locale={lang} dict={dict} routeKey={route.key}>
      <RouteView route={route} dict={dict} />
    </PageShell>
  );
}
