import { Camera, CircleCheck, ShoppingBag, Headset } from "lucide-react";
import type { ReassuranceIcon } from "@/i18n/types";

const icons: Record<ReassuranceIcon, typeof Camera> = {
  camera: Camera,
  check: CircleCheck,
  bag: ShoppingBag,
  headset: Headset,
};

/** Four plain promises in a row, separated by thin rules. No cards. */
export function Reassurance({ items }: { items: { icon: ReassuranceIcon; title: string; text: string }[] }) {
  return (
    <ul className="grid gap-8 border-y border-line py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line">
      {items.map((item) => {
        const Icon = icons[item.icon];
        return (
          <li key={item.title} className="flex gap-4 lg:px-8 lg:first:pl-0 lg:last:pr-0">
            <Icon aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-aventi-blue" strokeWidth={1.75} />
            <div>
              <h3 className="font-sans text-base font-bold">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
