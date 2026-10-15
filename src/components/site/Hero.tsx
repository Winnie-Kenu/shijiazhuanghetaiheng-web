import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

const STATS = [
  { value: "148", label: "Countries served" },
  { value: "40,000m²", label: "Hospital campus" },
  { value: "20+", label: "National-level experts" },
];

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function Hero({ title, subtitle, buttonText }: HeroProps) {
  const heroTitle = title || "Shijiazhuang Hetaiheng Hospital";
  const heroDescription =
    subtitle ||
    "Our Systematic Chinese Medicine Treatment has helped numerous renal failure patients from 148 countries to significantly lower their creatinine, promote GFR, and avoid dialysis.";
  const heroCTA = buttonText || "Book a free consultation";

  return (
    <section id="top" aria-label="Advanced kidney care without dialysis" className="relative isolate">
      <div className="relative min-h-[100svh] md:min-h-[820px] flex flex-col justify-center overflow-hidden bg-primary pt-24 pb-14 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
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
        <div className="absolute inset-0 bg-primary/65 z-0" />

        <div className="relative z-10 w-full max-w-container-max mx-auto px-4 md:px-margin-x my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Left Hand Side: Bold Heading, Paragraph directly under heading, Consultation Button */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold text-on-primary drop-shadow-2xl leading-[1.08] tracking-tight max-w-3xl"
              >
                {heroTitle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45 }}
                className="font-body text-body-lg sm:text-xl text-on-primary/95 mt-6 mb-8 max-w-2xl drop-shadow-md leading-relaxed"
              >
                {heroDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary font-bold px-6 md:px-8 py-6 rounded font-label text-label-md uppercase tracking-wider hover:bg-white/90 transition-colors active:bg-white/80 shadow-lg w-full sm:w-auto"
                >
                  <a href="#contact">
                    {heroCTA}
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Right Hand Side: Exact Element Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-lg shadow-2xl p-7 sm:p-9 md:p-10 lg:p-12 w-full max-w-[460px] text-left border border-white/40"
              >
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-primary leading-[1.18] tracking-tight mb-8">
                  Contact Our Expert<br />
                  Kidney Specialist
                </h2>

                <a
                  href="https://wa.me/8618187089802"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with our expert kidney specialist on WhatsApp"
                  className="inline-flex items-center gap-2.5 bg-[#16a34a] hover:bg-[#15803d] active:bg-[#166534] text-white font-label font-bold text-base sm:text-lg px-6 py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                  <span>+86 181 8708 9802</span>
                </a>
              </motion.div>
            </div>
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
