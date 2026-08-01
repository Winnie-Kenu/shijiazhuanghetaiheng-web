import { Reveal, RevealText } from "./Reveal";
import { testimonialsImages, img } from "@/lib/hospital-images";

const TESTIMONIALS = [
  {
    quote: "The doctors here were so thorough in explaining my treatment plan. For the first time in years, I feel hopeful about my kidney health. The natural therapies made a noticeable difference within weeks.",
    name: "Sarah T.",
    detail: "Australia",
    image: testimonialsImages[0],
  },
  {
    quote: "After being told dialysis was my only option, finding this hospital changed my life. The combination of modern diagnostics and traditional treatments helped lower my creatinine levels significantly.",
    name: "James M.",
    detail: "United Kingdom",
    image: testimonialsImages[1],
  },
  {
    quote: "The facilities are exceptional, but it's the personalized care that truly stands out. Every doctor and nurse treated me like family. My kidney function has stabilized thanks to their systematic approach.",
    name: "Ahmad K.",
    detail: "Saudi Arabia",
    image: testimonialsImages[2],
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-surface py-section-padding-y md:py-md-section-padding-y px-4 md:px-margin-x">
      <div className="max-w-container-max mx-auto">
        <Reveal>
          <h2 id="testimonials-heading" className="font-display text-headline-lg md:text-md-headline-lg mb-12 md:mb-16 text-center text-on-surface">
            <RevealText text="Patient success stories" />
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.name} index={1 + i}>
              <div className="bg-surface-container-low p-6 md:p-8 rounded border border-surface-variant/50 relative">
                <span aria-hidden="true" className="material-symbols-outlined absolute top-6 right-6 text-primary/10 text-6xl">format_quote</span>
                <p className="font-body text-body-md text-on-surface-variant mb-6 relative z-10 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-dim overflow-hidden flex-shrink-0">
                    {testimonial.image && (
                      <img 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover" 
                        src={img(testimonial.image.file, 100)} 
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-display text-headline-sm text-on-surface text-base">{testimonial.name}</p>
                    <p className="font-label text-label-md text-on-surface-variant">{testimonial.detail}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
