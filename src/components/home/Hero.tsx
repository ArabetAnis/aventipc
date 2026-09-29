import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

interface HeroProps {
  title: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  image: { src: string; alt: string; width: number; height: number };
}

/**
 * The memorable element of the site: a product cutout floating on the
 * wordmark gradient, blurred into a soft halo that fades into the page.
 */
export function Hero({ title, subtitle, primary, secondary, image }: HeroProps) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-10 pb-6 md:pt-16 md:pb-10 lg:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
        <div>
          <h1 id="hero-title" className="max-w-[16ch] text-display md:text-hero">
            {title}
          </h1>
          <p className="mt-5 max-w-[46ch] text-lead text-ink-soft">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={primary.href} size="lg">
              {primary.label}
            </ButtonLink>
            <ButtonLink href={secondary.href} variant="secondary" size="lg">
              {secondary.label}
            </ButtonLink>
          </div>
        </div>

        <div className="animate-hero-in relative mx-auto w-full max-w-[620px] py-8 md:py-12">
          <div aria-hidden="true" className="brand-halo absolute inset-x-[-8%] inset-y-[-2%] -z-10 rounded-[50%]" />
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 620px, 90vw"
            className="relative h-auto w-full drop-shadow-[0_30px_50px_rgba(21,18,29,0.25)]"
          />
        </div>
      </Container>
    </section>
  );
}
