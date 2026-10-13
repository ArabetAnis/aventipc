import { Montserrat, Manrope } from "next/font/google";

/** Montserrat for headings (matches the logo's geometric lettering), Manrope for body text. */
export const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin", "latin-ext"], weight: ["600", "700"], display: "swap" });
export const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin", "latin-ext"], display: "swap" });

export const fontClasses = `${montserrat.variable} ${manrope.variable}`;
