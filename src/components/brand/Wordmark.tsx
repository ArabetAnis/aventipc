import type { ReactElement } from "react";

/**
 * AventiPC wordmark, traced from public/brand/logo-original.png.
 *
 * Monoline geometric letters drawn as stroked paths (round caps and joins)
 * painted with the brand gradient. The viewBox is 1080x200; the stroke
 * width is 23.5 units. Size it from the parent with a height (e.g. `h-8`)
 * and `w-auto`; the width follows the intrinsic aspect ratio.
 *
 * Server component: no hooks, so gradient ids are suffixed with the variant.
 * Rendering the same variant twice on one page repeats an identical
 * <linearGradient> definition, which resolves to the same paint.
 */

export type WordmarkVariant = "light" | "dark";

export interface WordmarkProps {
  /**
   * "dark" keeps the original logo colours, for dark surfaces such as the
   * footer. "light" deepens the right-hand stops so "PC" stays legible on
   * white. Defaults to "light".
   */
  variant?: WordmarkVariant;
  className?: string;
  /** Accessible name of the image. */
  title?: string;
}

const VIEW_BOX = "0 0 1080 200";
const STROKE_WIDTH = 23.5;
/** The gradient spans the ink, from the left foot of the Λ to the right edge of the C. */
const GRADIENT_X1 = 8;
const GRADIENT_X2 = 1073;

const STOPS: Record<
  WordmarkVariant,
  ReadonlyArray<readonly [offset: string, color: string]>
> = {
  dark: [
    ["0%", "#3D7BF0"],
    ["22%", "#7C7DE8"],
    ["45%", "#B48CE1"],
    ["66%", "#D8A6DC"],
    ["84%", "#EBC7D9"],
    ["100%", "#F4E4DF"],
  ],
  light: [
    ["0%", "#3D7BF0"],
    ["22%", "#6F7BE9"],
    ["45%", "#9F86E0"],
    ["66%", "#BF8BD6"],
    ["84%", "#D18DBF"],
    ["100%", "#DC94A8"],
  ],
};

/** Λ v e n t i P C, in reading order. */
const LETTER_PATHS: readonly string[] = [
  "M19.9 178.75 L83.96 23.4 Q86.15 18.08 88.32 23.4 L151.8 178.75",
  "M174.62 76.25 L221.76 176.74 Q223.64 180.76 225.52 176.74 L272.4 76.25",
  "M360 127.25 H413.25 A53.25 53.25 0 1 0 393.87 168.34",
  "M463.5 178.75 V120 A48 48 0 0 1 559.5 120 V178.75",
  "M629.5 34.5 V143.25 A35.25 35.25 0 0 0 664.75 178.5 M629.5 78 H660",
  "M722 75.25 V178.75",
  "M795 178.75 V20.5 H841 A48 48 0 0 1 841 116.5 H795",
  "M1061.75 34.76 A81.5 81.5 0 1 0 1061.75 164.24",
];

/** The dot of the i is a filled disc: its diameter is larger than the stroke. */
const DOT = { cx: 722, cy: 27.5, r: 15.3 };

export function Wordmark({
  variant = "light",
  className,
  title = "AventiPC",
}: WordmarkProps): ReactElement {
  const gradientId = `aventipc-wordmark-${variant}`;
  const paint = `url(#${gradientId})`;

  return (
    <svg
      viewBox={VIEW_BOX}
      role="img"
      aria-label={title}
      focusable="false"
      className={className}
    >
      <title>{title}</title>
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1={GRADIENT_X1}
          y1={0}
          x2={GRADIENT_X2}
          y2={0}
        >
          {STOPS[variant].map(([offset, color]) => (
            <stop key={offset} offset={offset} stopColor={color} />
          ))}
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke={paint}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {LETTER_PATHS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <circle cx={DOT.cx} cy={DOT.cy} r={DOT.r} fill={paint} />
    </svg>
  );
}

export default Wordmark;
