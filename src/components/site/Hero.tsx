import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroDesktopImages, coverImg } from "@/lib/hospital-images";
import { cn } from "@/lib/utils";


const SLIDE_MS = 6500;
const SLIDES = heroDesktopImages.slice(0, 5);

const STATS = [
  { value: "148", label: "Countries served" },
  { value: "40,000m²", label: "Hospital campus" },
  { value: "20+", label: "National-level experts" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), [SLIDES.length]);

  useEffect(() => {
    const id = window.setInterval(next, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [next]);

  const slide = SLIDES[index % SLIDES.length];

  return (
    <section id="top" aria-label="Advanced kidney care without dialysis" className="relative isolate">
      <div className="relative min-h-[100svh] md:min-h-[800px] flex flex-col justify-between overflow-hidden bg-primary">
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
              className="absolute inset-0 h-full w-full object-cover z-0"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-primary/40 z-0" />

        <div className="relative z-10 w-full max-w-container-max mx-auto px-4 md:px-margin-x pt-32 md:pt-48">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-display-lg md:text-md-display-lg max-w-2xl text-on-primary drop-shadow-lg leading-tight"
          >
            Advanced kidney care <span className="block">without dialysis</span>
          </motion.h1>
        </div>

        <div className="relative z-10 w-full max-w-container-max mx-auto px-4 md:px-margin-x pb-16 md:pb-24 flex md:justify-end mt-auto">
          <div className="max-w-xl text-left md:text-right mt-12 md:mt-0">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="font-body text-body-lg text-on-primary/90 mb-8 md:mb-10 drop-shadow-md"
            >
              Our Systematic Chinese Medicine Treatment has helped numerous renal failure patients
              from 148 countries to significantly lower their creatinine, promote GFR, and avoid
              dialysis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="flex md:justify-end gap-4"
            >
              <Button asChild size="lg" className="bg-white text-primary font-bold px-6 md:px-8 py-6 rounded font-label text-label-md uppercase tracking-wider hover:bg-white/90 transition-colors active:bg-white/80 shadow-lg w-full md:w-auto">
                <a href="#contact">
                  Book a free consultation
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
        
        <div
          className="absolute bottom-8 left-4 md:left-margin-x flex items-center gap-3 z-20"
          role="tablist"
          aria-label="Hero slides"
        >
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
                  className="block h-full bg-secondary-fixed"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-on-background py-8 border-b border-surface-variant/20 relative z-20">
        <div className="mx-auto flex max-w-container-max flex-wrap items-center justify-center gap-x-12 gap-y-8 px-5 lg:justify-between lg:px-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-display text-4xl text-surface md:text-5xl">{stat.value}</p>
              <p className="mt-1 font-label text-sm uppercase tracking-widest text-surface/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
