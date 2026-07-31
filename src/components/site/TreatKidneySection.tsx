import { MasonryGallery } from "./MasonryGallery";
import { Reveal, RevealText } from "./Reveal";
import { treatmentImages, img } from "@/lib/hospital-images";

const MODALITIES = [
  {
    image: treatmentImages[0],
    title: "Detoxification Therapy",
    body: "Also known as Toxin-Removing Treatment: a combination of Chinese therapies that clears accumulated toxins from the body.",
  },
  {
    image: treatmentImages[1],
    title: "Micro-Chinese Medicine",
    body: "Increases glomerular filtration rate, reduces blood creatinine and urea, protects intrinsic cells and lowers proteinuria.",
  },
  {
    image: treatmentImages[2],
    title: "Medicated Bath",
    body: "Regulates immune imbalance, alleviates the three high states of glomeruli and reduces proteinuria, creatinine and urea.",
  },
  {
    image: treatmentImages[3],
    title: "Moxibustion Therapy",
    body: "Helps kidney failure patients reduce proteinuria, increase plasma albumin and bring creatinine levels down.",
  },
  {
    image: treatmentImages[4],
    title: "Foot Bath",
    body: "Promotes blood circulation, relieves edema, improves sleep quality and reduces creatinine levels.",
  },
  {
    image: treatmentImages[5],
    title: "Fumigation Therapy",
    body: "Protects inherent kidney cells, lowers creatinine and improves edema, nausea and persistent skin itching.",
  },
];


export function TreatKidneySection() {
  return (
    <section
      id="treatments"
      aria-labelledby="treatments-heading"
      className="mx-auto max-w-[1280px] px-5 py-24 lg:px-8 lg:py-36"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <div>
          <Reveal>
            <p className="eyebrow">Treatments</p>
          </Reveal>
          <h2
            id="treatments-heading"
            className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.05] text-balance-tight"
          >
            <RevealText text="How we treat kidney disease at the root" />
          </h2>
        </div>
        <Reveal index={1}>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            We have developed a series of specific treatments for kidney patients — including the
            systematic Chinese medicine Toxin-Removing Treatment, an alternative to dialysis that
            repairs damaged kidneys from the root rather than replacing their function.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {MODALITIES.map((item, i) => (
          <Reveal key={item.title} index={i % 3}>
            <article className="group flex h-full flex-col rounded-none border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-editorial">
              {item.image && (
                <img
                  src={img(item.image.file, 1200)}
                  alt={item.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full object-contain"
                />
              )}
              <div className="p-8">
                <h3 className="font-display text-2xl leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </article>

          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <MasonryGallery images={treatmentImages.slice(0, 8)} />
      </div>
    </section>
  );
}
