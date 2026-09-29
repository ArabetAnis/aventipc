import type { Metadata } from "next";
import type { Dictionary } from "@/i18n/types";
import type { Route } from "@/i18n/routes";
import { getCity } from "@/i18n/routes";
import { getProduct } from "@/data/products";
import { brandName } from "@/data/brands";
import { pageMetadata, ogImagePath } from "@/lib/seo";
import { HomeView } from "@/views/HomeView";
import { CatalogView } from "@/views/CatalogView";
import { ProductView } from "@/views/ProductView";
import { BrandView } from "@/views/BrandView";
import { StaticPageView } from "@/views/StaticPageView";
import { ThemeHubView } from "@/views/ThemeHubView";
import { CityView } from "@/views/CityView";
import { productsForTheme, cityContext } from "@/views/shared";

/** Title, description and social image for any route. */
export function metadataFor(route: Route, dict: Dictionary): Metadata {
  const { locale, key, path } = route;
  const base = { locale, key, path };
  switch (key.kind) {
    case "home":
      return pageMetadata({ ...base, title: dict.meta.homeTitle, absoluteTitle: true, description: dict.meta.homeDescription });
    case "catalog":
      return pageMetadata({ ...base, title: dict.ui.catalog.title, description: dict.ui.catalog.metaDescription });
    case "product": {
      const product = getProduct(key.slug)!;
      const t = dict.products[key.slug];
      return pageMetadata({
        ...base,
        title: t.title,
        description: t.shortDescription,
        image: { path: ogImagePath(locale, key.slug), alt: t.imageAlts[0] ?? product.name },
      });
    }
    case "brand": {
      const t = dict.brands[key.slug];
      return pageMetadata({ ...base, title: t.title, description: t.metaDescription, image: { path: ogImagePath(locale), alt: brandName(key.slug) } });
    }
    case "page": {
      const t = dict.pages[key.page];
      return pageMetadata({ ...base, title: t.metaTitle, description: t.metaDescription });
    }
    case "theme": {
      const t = dict.themes[key.theme];
      return pageMetadata({ ...base, title: t.hub.title, description: t.hub.metaDescription });
    }
    case "city": {
      const t = dict.themes[key.theme];
      const city = getCity(key.city)!;
      const c = cityContext(locale, dict, city, productsForTheme(key.theme));
      return pageMetadata({ ...base, title: t.city.title(c), description: t.city.metaDescription(c) });
    }
  }
}

export function RouteView({ route, dict }: { route: Route; dict: Dictionary }) {
  const { locale, key } = route;
  switch (key.kind) {
    case "home":
      return <HomeView locale={locale} dict={dict} />;
    case "catalog":
      return <CatalogView locale={locale} dict={dict} />;
    case "product":
      return <ProductView locale={locale} dict={dict} product={getProduct(key.slug)!} />;
    case "brand":
      return <BrandView locale={locale} dict={dict} slug={key.slug} />;
    case "page":
      return <StaticPageView locale={locale} dict={dict} page={key.page} />;
    case "theme":
      return <ThemeHubView locale={locale} dict={dict} theme={key.theme} />;
    case "city":
      return <CityView locale={locale} dict={dict} theme={key.theme} city={getCity(key.city)!} />;
  }
}
