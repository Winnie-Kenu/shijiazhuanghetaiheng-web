import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroDesktopImages, heroMobileImages, img } from "@/lib/hospital-images";
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
      <div className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <AnimatePresence mode="sync">
          {slide && (
            <motion.img
              key={slide.file}
              src={img(slide.file, 1920)}
              alt={slide.alt}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              initial={{ opacity: 0, scale: 1.12 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1.2 }, scale: { duration: 8, ease: "linear" } }}
              className="absolute inset-0 h-full w-full object-contain"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-deep/85 via-deep/60 to-deep/90" />

        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-end px-5 pb-14 pt-28 lg:px-8 lg:pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-[30px] max-w-4xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.02] text-deep-foreground text-balance-tight"
          >
            Advanced kidney care without dialysis
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-deep-foreground/80 sm:text-base"
          >
            Our systematic Chinese medicine Toxin-Removing Treatment has helped renal failure
            patients from 148 countries lower creatinine, promote GFR, and step away from dialysis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="rounded-none px-7">
              <a href="#contact">
                Book a free consultation
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="mt-12 flex flex-wrap gap-x-14 gap-y-6"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl text-deep-foreground">{stat.value}</dd>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-deep-foreground/70">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>


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
    </section>
  );
}
