import { Reveal, RevealText } from "./Reveal";
import { Button } from "@/components/ui/button";
import { ctaImages, img } from "@/lib/hospital-images";

export function CtaBanner() {
  const bgImage = ctaImages[0];

  return (
    <section className="relative overflow-hidden bg-primary text-on-primary py-24 md:py-32 px-4 md:px-margin-x text-center">
      {bgImage && (
        <img
          src={img(bgImage.file, 1600)}
          alt={bgImage.alt}
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-display text-headline-sm md:text-headline-lg mb-8">
            <RevealText text="Start your journey to better kidney health today." />
          </h2>
        </Reveal>
        <Reveal index={1}>
          <Button asChild size="lg" className="bg-tertiary text-on-tertiary px-8 py-6 rounded-sm font-label text-label-lg uppercase tracking-wider hover:bg-tertiary-dim transition-colors hover:text-on-tertiary">
            <a href="#contact">Contact us now</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
