import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RevealText } from "./Reveal";
import { ctaImages, img } from "@/lib/hospital-images";

export function CtaBanner() {
  const image = ctaImages[0];

  return (
    <section aria-labelledby="cta-heading" className="relative isolate overflow-hidden">
      <div className="relative min-h-[520px] w-full">
        {image && (
          <motion.img
            src={img(image.file, 1920)}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-deep/92 via-deep/80 to-deep/50" />

        <div className="relative mx-auto flex min-h-[520px] max-w-[1280px] flex-col justify-center px-5 py-24 lg:px-8">
          <p className="eyebrow text-accent">Contact</p>
          <h2
            id="cta-heading"
            className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.03] text-deep-foreground text-balance-tight"
          >
            <RevealText text="Take the first real step" />
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-deep-foreground/80 lg:text-lg">
            A nurse picks up the phone and a clean bed waits. Do not let another day slip.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-none px-7">
              <a href="#contact">
                Book now
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-white/40 bg-transparent px-7 text-deep-foreground hover:bg-white/10 hover:text-deep-foreground"
            >
              <a href="https://wa.me/8618187089802" target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp +86 181 8708 9802
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
