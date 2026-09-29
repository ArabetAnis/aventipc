"use client";

import { useEffect } from "react";

/**
 * Remembers an explicit language choice (any link with data-lang-choice) in a first-party
 * cookie, so the home address sends returning visitors to the language they picked.
 * Functional preference only: no tracking.
 */
export function LanguagePreference() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[data-lang-choice]");
      const lang = link?.getAttribute("data-lang-choice");
      if (!lang) return;
      const secure = location.protocol === "https:" ? "; Secure" : "";
      document.cookie = `aventipc_lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
