import { Truck, ShieldCheck, Lock, Headset } from "lucide-react";
import { home } from "@/content/home";

const icons = {
  truck: Truck,
  shield: ShieldCheck,
  lock: Lock,
  headset: Headset,
} as const;

/** Four plain promises in a row, separated by thin rules. No cards. */
export function Reassurance() {
  return (
    <ul className="grid gap-8 border-y border-line py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line">
      {home.reassurance.map((item) => {
        const Icon = icons[item.icon as keyof typeof icons] ?? ShieldCheck;
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
