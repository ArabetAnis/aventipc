"use client";

import type { ComponentPropsWithoutRef } from "react";

type Option = { readonly value: string; readonly label: string };

/** Submits its form on change; the visible "Applica" button covers the no-JS case. */
export function SortSelect({ options, className = "", ...props }: ComponentPropsWithoutRef<"select"> & { options: readonly Option[] }) {
  return (
    <select
      {...props}
      onChange={(e) => e.currentTarget.form?.requestSubmit()}
      className={`h-9 rounded-full border border-line bg-white pr-8 pl-3 text-sm font-semibold text-ink focus:border-lilac focus:outline-none ${className}`}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
