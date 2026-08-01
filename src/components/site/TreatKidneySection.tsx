import { Reveal, RevealText } from "./Reveal";
import { treatmentImages, img } from "@/lib/hospital-images";

const MODALITIES = [
  {
    image: treatmentImages[0],
    title: "Detoxification Therapy",
    body: "It is also known as Toxin-Removing Treatment, which is a combination of Chinese therapies, which can help remove toxins from the body.",
  },
  {
    image: treatmentImages[1],
    title: "Micro-Chinese Medicine",
    body: "It can increase glomerular filtration rate (GFR), reduce blood creatinine and urea, protect intrinsic cells, and reduce proteinuria.",
  },
  {
    image: treatmentImages[2],
    title: "Medicated Bath",
    body: "It effectively regulates immune imbalance, alleviates the three high states of glomeruli, and reduces proteinuria, serum creatinine and urea.",
  },
  {
    image: treatmentImages[3],
    title: "Moxibustion Therapy",
    body: "It can help kidney failure patient reduce proteinuria, increase plasma albumin, and reduce creatinine.",
  },
  {
    image: treatmentImages[4],
    title: "Foot Bath",
    body: "It can help promote blood circulation, relieve edema, improve sleep quality, and reduce creatinine level.",
  },
  {
    image: treatmentImages[5],
    title: "Fumigation Therapy",
    body: "It protects inherent kidney cells, reduces proteinuria, lowers creatinine, and improves edema, nausea, and skin itching.",
  },
];


export function TreatKidneySection() {
  return (
    <section
      id="treatments"
      aria-labelledby="treatments-heading"
      className="bg-primary text-on-primary py-section-padding-y md:py-md-section-padding-y px-4 md:px-margin-x"
    >
      <div className="max-w-container-max mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <Reveal>
            <span className="font-label text-label-md text-secondary-fixed uppercase tracking-widest block mb-4">Treatments</span>
          </Reveal>
          <h2
            id="treatments-heading"
            className="font-display text-headline-lg md:text-md-headline-lg mb-6"
          >
            <RevealText text="Alternative Dialysis Treatment" />
          </h2>
          <Reveal index={1}>
            <div className="space-y-6">
              <p className="font-body text-body-lg text-on-primary/80">
                We have developed a series of specific treatments for kidney patients. For example, systematic Chinese medicine Toxin-Removing Treatment, an alternative to dialysis. This approach can treat the damaged kidneys from the root.
              </p>
              
              <div className="text-left bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 mt-8">
                <h3 className="font-display text-2xl font-bold text-white mb-4">Specialized Treatment Areas</h3>
                <ul className="space-y-4 font-body text-base md:text-lg text-on-primary/90">
                  <li className="leading-relaxed">
                    <strong className="text-white">1. Primary & secondary kidney diseases:</strong> Chronic glomerulonephritis, IgA nephropathy, nephrotic syndrome, diabetic nephropathy, hypertensive renal damage
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white">2. Dialysis & uremia management:</strong> Hemodialysis individualized plan adjustment, secondary hyperparathyroidism, dialysis-induced hypotension, cardiac damage caused by renal failure, calcium and phosphorus metabolic disorders, dialysis-related limb numbness, muscle cramps and intractable insomnia
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-20">
          {MODALITIES.map((item, i) => (
            <Reveal key={item.title} index={i % 3}>
              <article className="flex flex-col items-center text-center">
                {item.image && (
                  <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded">
                    <img
                      src={img(item.image.file, 800)}
                      alt={item.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h3 className="font-display text-headline-md md:text-headline-lg mb-4 text-white">{item.title}</h3>
                <p className="font-body text-body-md text-on-primary/80 max-w-xs">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
