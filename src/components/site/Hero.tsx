import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STATS = [
  { value: "148", label: "Countries served" },
  { value: "40,000m²", label: "Hospital campus" },
  { value: "20+", label: "National-level experts" },
];

export function Hero() {
  return (
    <section id="top" aria-label="Advanced kidney care without dialysis" className="relative isolate">
      <div className="relative min-h-[100svh] md:min-h-[800px] flex flex-col justify-between overflow-hidden bg-primary">
        <picture>
          <source media="(max-aspect-ratio: 9/16)" srcSet="https://res.cloudinary.com/idmvpeay/image/upload/v1785415894/mobile-herocaro-NEW_z6z1fh.jpg" />
          <source media="(max-width: 768px)" srcSet="https://res.cloudinary.com/idmvpeay/image/upload/v1785415894/mobile-herocaro-NEW_z6z1fh.jpg" />
          <motion.img
            src="https://res.cloudinary.com/idmvpeay/image/upload/v1785409636/MAINHERO-IMAGE_tpleae.jpg"
            alt="Shijiazhuang Hetaiheng Hospital - Premium Traditional Chinese Medicine Kidney Care Center providing advanced treatments without dialysis"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ opacity: { duration: 1.2 }, scale: { duration: 8, ease: "linear" } }}
            className="absolute inset-0 h-full w-full object-cover z-0"
          />
        </picture>
        <div className="absolute inset-0 bg-primary/40 z-0" />

        <div className="relative z-10 w-full max-w-container-max mx-auto px-4 md:px-margin-x pt-32 md:pt-48">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-[84px] max-w-5xl font-extrabold text-on-primary drop-shadow-2xl leading-tight tracking-tight"
          >
            Shijiazhuang Hetaiheng Hospital
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
