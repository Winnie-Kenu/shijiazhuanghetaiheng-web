import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

import { EditorialImage } from "./MasonryGallery";
import { Reveal, RevealText } from "./Reveal";
import { testimonialsImages } from "@/lib/hospital-images";

const TESTIMONIALS = [
  {
    quote:
      "I walked in carrying the weight of a death sentence. The team here showed me it was just a diagnosis to be fought.",
    name: "L. Mei",
    detail: "Nephrology patient",
  },
  {
    quote:
      "My creatinine fell from 782 to 391 in six weeks. For the first time in three years I have skipped dialysis and felt stronger for it.",
    name: "A. Al-Harbi",
    detail: "Stage 5 CKD, Saudi Arabia",
  },
  {
    quote:
      "The doctors explained every therapy in plain language, in English, every single morning. That alone changed how I felt about treatment.",
    name: "J. Okonkwo",
    detail: "Stage 4 CKD, Nigeria",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const item = TESTIMONIALS[index];
  const [featured, secondary] = testimonialsImages;

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    const id = window.setInterval(() => go(1), 7000);
    return () => window.clearInterval(id);
  }, [go]);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-[1280px] px-5 py-24 lg:px-8 lg:py-36"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {featured && (
            <div className="col-span-2">
              <EditorialImage image={featured} ratio="16 / 11" width={1100} />
            </div>
          )}
          {secondary && <EditorialImage image={secondary} ratio="1 / 1" width={640} />}
          <div className="grid place-items-center rounded-none bg-primary p-6 text-primary-foreground">
            <div className="text-center">
              <p className="font-display text-4xl">4.9/5</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] opacity-80">
                International patient rating
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <Quote
            className="absolute -top-6 -left-2 size-20 text-primary/10 lg:-left-8 lg:size-28"
            aria-hidden
          />
          <Reveal>
            <p className="eyebrow">Testimonials</p>
          </Reveal>
          <h2
            id="testimonials-heading"
            className="relative mt-4 font-display text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.08] text-balance-tight"
          >
            <RevealText text="Stories from patients who chose another road" />
          </h2>

          <div className="glass-card relative mt-10 min-h-[320px] rounded-none p-8 shadow-editorial sm:p-10">
            <div className="flex gap-1" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-accent text-accent" aria-hidden />
              ))}
            </div>
            <AnimatePresence mode="wait">
              {item && (
                <motion.blockquote
                  key={item.name}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6"
                >
                  <p className="font-display text-2xl leading-snug sm:text-[1.75rem]">
                    “{item.quote}”
                  </p>
                  <footer className="mt-8 text-sm">
                    <span className="font-semibold text-foreground">{item.name}</span>
                    <span className="mt-1 block text-muted-foreground">{item.detail}</span>
                  </footer>
                </motion.blockquote>
              )}
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="grid size-11 place-items-center rounded-none border border-border bg-card transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowLeft className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="grid size-11 place-items-center rounded-none border border-border bg-card transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowRight className="size-4" aria-hidden />
              </button>
              <span className="ml-2 text-xs tracking-[0.2em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
