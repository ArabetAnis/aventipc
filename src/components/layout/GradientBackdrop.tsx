/** Fixed, non-interactive layer that paints the soft brand washes behind every page. */
export function GradientBackdrop() {
  return <div aria-hidden="true" className="backdrop-washes pointer-events-none fixed inset-0 -z-10" />;
}
