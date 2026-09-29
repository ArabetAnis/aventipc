import "../globals.css";
import { fontClasses } from "@/lib/fonts";
import { baseMetadata, baseViewport } from "@/lib/base-metadata";
import { GradientBackdrop } from "@/components/layout/GradientBackdrop";

export const metadata = baseMetadata;
export const viewport = baseViewport;

/** Root layout for "/" only: the language chooser (hreflang x-default). */
export default function RootChooserLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontClasses} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col">
        <GradientBackdrop />
        {children}
      </body>
    </html>
  );
}
