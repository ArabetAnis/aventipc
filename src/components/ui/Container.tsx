import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

/** Page-width wrapper: 1280px max, 24px gutters on mobile, 32px from md. */
export function Container<T extends ElementType = "div">({ as, className = "", ...props }: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return <Tag className={`mx-auto w-full max-w-page px-6 md:px-8 ${className}`} {...props} />;
}
