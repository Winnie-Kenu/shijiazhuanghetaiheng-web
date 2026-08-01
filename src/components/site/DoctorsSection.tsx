import { Reveal, RevealText } from "./Reveal";
import { doctorsImages, img } from "@/lib/hospital-images";

const DOCTORS = [
  {
    name: "Dr. Zhang Daning",
    title: "Chief Nephrologist",
    image: doctorsImages[0],
  },
  {
    name: "Dr. Yang Hongtao",
    title: "Senior Consultant",
    image: doctorsImages[1],
  },
  {
    name: "Dr. Cheng Xiaohong",
    title: "Senior Consultant",
    image: doctorsImages[2],
  },
  {
    name: "Dr. Liu Xusheng",
    title: "Kidney Specialist",
    image: doctorsImages[3],
  },
  {
    name: "Dr. Deng Yueyi",
    title: "Kidney Specialist",
    image: doctorsImages[4],
  },
  {
    name: "Dr. Wang Yi",
    title: "TCM Expert",
    image: doctorsImages[5],
  },
  {
    name: "Dr. Zhang Youkang",
    title: "Medical Director",
    image: doctorsImages[6],
  },
  {
    name: "Dr. Zheng Falei",
    title: "Attending Physician",
    image: doctorsImages[7],
  },
];

export function DoctorsSection() {
  return (
    <section id="doctors" aria-labelledby="doctors-heading" className="bg-surface py-section-padding-y md:py-md-section-padding-y px-4 md:px-margin-x">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <h2 id="doctors-heading" className="font-display text-headline-lg md:text-md-headline-lg mb-4 text-on-surface">
              <RevealText text="Meet our experts" />
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              A team of distinguished kidney specialists dedicated to restoring your health with natural treatments
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {DOCTORS.map((doc, i) => (
            <Reveal key={doc.name} index={i % 4}>
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded bg-surface-dim mb-4">
                  {doc.image && (
                    <img
                      alt={doc.image.alt}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      src={img(doc.image.file, 600)}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
                <h3 className="font-display text-headline-sm text-on-surface mb-1">{doc.name}</h3>
                <p className="font-label text-label-md text-on-surface-variant uppercase tracking-wider">{doc.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
