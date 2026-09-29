import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./types";
import it from "./locales/it";
import fr from "./locales/fr";
import es from "./locales/es";
import de from "./locales/de";
import nl from "./locales/nl";

const dictionaries: Record<Locale, Dictionary> = { it, fr, es, de, nl };

/** Server-only: dictionaries contain template functions and are never sent to the browser whole. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
