import Image from "next/image";
import { home } from "@/content/home";
import { lifestyleImages } from "@/data/lifestyle";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

/**
 * The memorable element of the site: a real photo of an item for sale,
 * framed on the wordmark gradient blurred into a soft halo.
 */
export function Hero() {
  const { hero } = home;
  const image = lifestyleImages.hero;
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-10 pb-6 md:pt-16 md:pb-10 lg:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
        <div>
          <h1 id="hero-title" className="max-w-[16ch] text-display md:text-hero">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-[46ch] text-lead text-ink-soft">{hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="animate-hero-in relative mx-auto w-full max-w-[460px] py-6 md:py-10">
          <div aria-hidden="true" className="brand-halo absolute inset-x-[-18%] inset-y-[-2%] -z-10 rounded-[50%]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-tile border border-white/70 shadow-[0_30px_60px_-30px_rgba(21,18,29,0.45)]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
