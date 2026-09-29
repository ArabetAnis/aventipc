import { Outfit, Manrope } from "next/font/google";

export const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin", "latin-ext"], display: "swap" });
export const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin", "latin-ext"], display: "swap" });

export const fontClasses = `${outfit.variable} ${manrope.variable}`;
