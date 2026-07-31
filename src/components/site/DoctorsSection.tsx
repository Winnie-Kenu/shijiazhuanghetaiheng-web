import { EditorialImage } from "./MasonryGallery";
import { Reveal, RevealText } from "./Reveal";
import { doctorsImages } from "@/lib/hospital-images";

const DOCTORS = [
  { name: "Prof. Zhang Daning", role: "Master of Chinese Medicine", ratio: "3 / 4" },
  { name: "Prof. Yang Hongtao", role: "Chief Nephrologist", ratio: "4 / 5" },
  { name: "Prof. Cheng Xiaohong", role: "Integrative Nephrology", ratio: "1 / 1" },
  { name: "Prof. Liu Xusheng", role: "Renal Research Lead", ratio: "5 / 7" },
  { name: "Prof. Deng Yueyi", role: "Chronic Kidney Disease", ratio: "4 / 5" },
  { name: "Prof. Wang Yi", role: "Acupuncture & Moxibustion", ratio: "3 / 4" },
  { name: "Prof. Zhang Youkang", role: "Dialysis Withdrawal Program", ratio: "16 / 11" },
  { name: "Prof. Zheng Falei", role: "Toxin-Removing Treatment", ratio: "1 / 1" },
  { name: "Prof. Liu Guangzhen", role: "International Consultation", ratio: "4 / 5" },
  { name: "Prof. Sun Wei", role: "Renal Pathology", ratio: "3 / 4" },
];

export function DoctorsSection() {
  return (
    <section
      id="doctors"
      aria-labelledby="doctors-heading"
      className="mx-auto max-w-[1280px] px-5 py-24 lg:px-8 lg:py-36"
    >
      <div className="max-w-3xl">
        <Reveal>
          <p className="eyebrow">Team</p>
        </Reveal>
        <h2
          id="doctors-heading"
          className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.05] text-balance-tight"
        >
          <RevealText text="Specialists who have dedicated their lives to the kidney" />
        </h2>
      </div>

      <ul className="mt-14 columns-2 gap-4 md:columns-3 xl:columns-4 sm:gap-5">
        {DOCTORS.map((doctor, i) => {
          const image = doctorsImages[i % doctorsImages.length];
          if (!image) return null;
          return (
            <li key={doctor.name} className="mb-4 break-inside-avoid sm:mb-5">
              <article className="group">
                <EditorialImage
                  image={{ ...image, alt: `${doctor.name}, ${doctor.role}. ${image.alt}` }}
                  ratio={doctor.ratio}
                  width={720}
                  overlay={
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-xs uppercase tracking-[0.2em] text-deep-foreground/80">
                        {doctor.role}
                      </p>
                    </div>
                  }
                />
                <h3 className="mt-4 font-display text-lg leading-tight">{doctor.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {doctor.role}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
