import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { allRoutes, resolve } from "@/i18n/routes";
import { PageShell } from "@/components/layout/PageShell";
import { metadataFor, RouteView } from "@/views/route-view";

export const dynamicParams = false;

/** Every non-home page in every language, from the route table. */
export function generateStaticParams() {
  return allRoutes()
    .filter((r) => r.key.kind !== "home")
    .map((r) => ({ lang: r.locale, path: r.path.split("/").filter(Boolean).slice(1) }));
}

async function routeFrom(params: PageProps<"/[lang]/[...path]">["params"]) {
  const { lang, path } = await params;
  if (!isLocale(lang)) return null;
  return resolve(lang, path.map((p) => decodeURIComponent(p)));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[...path]">): Promise<Metadata> {
  const route = await routeFrom(params);
  return route ? metadataFor(route, getDictionary(route.locale)) : {};
}

export default async function LocalizedPage({ params }: PageProps<"/[lang]/[...path]">) {
  const route = await routeFrom(params);
  if (!route) notFound();
  const dict = getDictionary(route.locale);
  return (
    <PageShell locale={route.locale} dict={dict} routeKey={route.key}>
      <RouteView route={route} dict={dict} />
    </PageShell>
  );
}
