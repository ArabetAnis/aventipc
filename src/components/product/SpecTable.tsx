import type { ProductSpec } from "@/types/catalog";

export function SpecTable({ specs, caption }: { specs: ProductSpec[]; caption: string }) {
  return (
    <table className="w-full border-collapse text-sm">
      <caption className="sr-only">{caption}</caption>
      <tbody>
        {specs.map((spec) => (
          <tr key={spec.label} className="border-b border-line last:border-0">
            <th scope="row" className="w-2/5 py-3.5 pr-4 text-left align-top font-semibold text-ink md:w-1/3">
              {spec.label}
            </th>
            <td className="py-3.5 align-top text-ink-soft">{spec.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
