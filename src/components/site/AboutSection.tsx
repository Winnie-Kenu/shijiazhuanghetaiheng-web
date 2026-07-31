import { EditorialImage } from "./MasonryGallery";
import { Reveal, RevealText } from "./Reveal";
import { aboutImages } from "@/lib/hospital-images";

const STATS = [
  { value: "148", label: "Countries of origin for our patients" },
  { value: "40,000m²", label: "Campus with villa-style wards" },
  { value: "20+", label: "National-level TCM experts" },
  { value: "30 yrs", label: "Of systematic kidney research" },
];

export function AboutSection() {
  const [a, b, c, d, e] = aboutImages;

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-muted/50 py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1280px] items-start gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          <div className="flex flex-col gap-4 pt-10 sm:gap-5">
            {a && <EditorialImage image={a} ratio="3 / 4" width={720} />}
            {b && <EditorialImage image={b} ratio="1 / 1" width={620} />}
            {e && <EditorialImage image={e} ratio="4 / 5" width={620} />}
          </div>
          <div className="flex flex-col gap-4 sm:gap-5">
            {c && <EditorialImage image={c} ratio="4 / 5" width={720} />}
            {d && <EditorialImage image={d} ratio="5 / 7" width={720} />}
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <Reveal>
            <p className="eyebrow">About us</p>
          </Reveal>
          <h2
            id="about-heading"
            className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.06] text-balance-tight"
          >
            <RevealText text="A premier international TCM institution built around the kidney" />
          </h2>
          <Reveal index={1}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Shijiazhuang Hetaiheng Hospital spans 40,000 square meters with luxury villa-style
              wards. Our clinical excellence is driven by the Experts of the International
              Consultation Center, led by Professor Zhang Daning, Master of Chinese Medicine.
            </p>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Our distinguished team includes world-class experts such as Professors Yang Hongtao,
              Cheng Xiaohong, Liu Xusheng, Deng Yueyi and Wang Yi, alongside representatives of the
              World Federation of Acupuncture-Moxibustion Societies. Supported by over 20
              national-level experts, we combine modern research with traditional wisdom to deliver
              non-invasive, root-cause recovery in a serene, professional environment.
            </p>
          </Reveal>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} index={i}>
                <div>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-4xl text-primary">{stat.value}</dd>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
