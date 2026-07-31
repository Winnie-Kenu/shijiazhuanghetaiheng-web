import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroDesktopImages, heroMobileImages, coverImg } from "@/lib/hospital-images";
import { useIsMobile } from "@/hooks/use-mobile";

const SLIDE_MS = 6500;

const DESKTOP_SLIDES = heroDesktopImages.slice(0, 5);
const MOBILE_SLIDES = heroMobileImages.slice(0, 5);

const STATS = [
  { value: "148", label: "Countries served" },
  { value: "40,000m²", label: "Hospital campus" },
  { value: "20+", label: "National-level experts" },
];

export function Hero() {
  const isMobile = useIsMobile();
  const SLIDES = isMobile ? MOBILE_SLIDES : DESKTOP_SLIDES;
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), [SLIDES.length]);

  useEffect(() => {
    const id = window.setInterval(next, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [next]);

  const slide = SLIDES[index % SLIDES.length];

  return (
    <section id="top" aria-label="Advanced kidney care without dialysis" className="relative isolate">
      <div className="relative h-[85svh] min-h-[640px] w-full overflow-hidden">
        <AnimatePresence mode="sync">
          {slide && (
            <motion.img
              key={slide.file}
              src={coverImg(slide.file, 1920, 1080)}
              alt={slide.alt}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1.2 }, scale: { duration: 8, ease: "linear" } }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-deep/95 via-deep/70 to-deep/90" />

        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-between px-5 pb-14 pt-32 lg:px-8 lg:pb-20 lg:pt-40">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl font-display text-[clamp(2.4rem,6vw,5rem)] leading-[1.05] text-deep-foreground text-balance-tight"
          >
            Advanced kidney care
            <br />
            without dialysis
          </motion.h1>

          <div className="ml-auto w-full max-w-md lg:max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="text-sm leading-relaxed text-deep-foreground/90 sm:text-base"
            >
              Our Systematic Chinese Medicine Treatment has helped numerous renal failure patients
              from 148 countries to significantly lower their creatinine, promote GFR, and avoid
              dialysis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg" className="rounded-none px-7">
                <a href="#contact">
                  Book a free consultation
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="mt-8 flex items-center gap-3" role="tablist" aria-label="Hero slides">
            {SLIDES.map((s, i) => (
              <button
                key={s.file}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className="h-[3px] w-14 overflow-hidden rounded-none bg-white/25"
              >
                {i === index && (
                  <motion.span
                    key={`${s.file}-progress`}
                    className="block h-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-8 px-5 py-10 lg:flex-row lg:px-8 lg:py-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground lg:text-left"
          >
            Trusted by leading medical associations in China
          </motion.p>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-x-12 gap-y-6 lg:justify-end"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl text-foreground sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
