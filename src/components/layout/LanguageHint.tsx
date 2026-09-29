"use client";

import { useEffect } from "react";

/**
 * Highlights the card matching the browser language. No automatic redirect:
 * search engines and users always see every option (Google's recommendation).
 */
export function LanguageHint() {
  useEffect(() => {
    const supported = ["it", "fr", "es", "de", "nl"];
    const preferred = (navigator.languages ?? [navigator.language]).map((l) => l.slice(0, 2).toLowerCase()).find((l) => supported.includes(l));
    if (!preferred) return;
    document.querySelector(`[data-locale="${preferred}"]`)?.setAttribute("data-suggested", "true");
  }, []);
  return null;
}
