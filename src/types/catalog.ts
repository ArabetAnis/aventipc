/** Shared catalogue types for FindBetter. Keep this file free of runtime code. */

export type BrandSlug = "dell" | "lenovo";

export type Condition = "used" | "refurbished" | "new";

export type Availability = "in_stock" | "preorder" | "out_of_stock";

export interface FaqItem {
  question: string;
  answer: string;
}
