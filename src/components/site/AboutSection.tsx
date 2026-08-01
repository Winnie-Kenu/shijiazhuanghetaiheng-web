import { Reveal, RevealText } from "./Reveal";
import { aboutImages } from "@/lib/hospital-images";
import { Button } from "@/components/ui/button";
import { MasonryGallery } from "./MasonryGallery";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-primary-container text-on-primary-container py-section-padding-y md:py-md-section-padding-y px-4 md:px-margin-x">
      <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 overflow-hidden">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <Reveal>
            <span aria-hidden="true" className="material-symbols-outlined text-4xl mb-4 md:mb-6 text-primary">
              menu_book
            </span>
          </Reveal>
          <h2
            id="about-heading"
            className="font-display text-headline-lg md:text-md-headline-lg mb-6 text-white"
          >
            <RevealText text="About Us" />
          </h2>
          <Reveal index={1}>
            <p className="font-body text-body-lg text-white/90 mb-6 leading-relaxed">
              Shijiazhuang Hetaiheng Hospital is a premier international TCM institution specializing in advanced kidney care, spanning 40,000 square meters with luxury villa-style wards.
            </p>
          </Reveal>
          <Reveal index={2}>
            <p className="font-body text-body-lg text-white/90 mb-6 leading-relaxed">
              Our clinical excellence is driven by the Experts of the International Consultation Center, led by Professor Zhang Daning, Master of Chinese Medicine. Our distinguished team includes world-class experts such as Professor Yang Hongtao, Cheng Xiaohong, Liu Xusheng, Professor Deng Yueyi, Professor Wang Yi, and representatives from the World Federation of Acupuncture-Moxibustion Societies.
            </p>
          </Reveal>
          <Reveal index={3}>
            <p className="font-body text-body-lg text-white/90 mb-10 leading-relaxed">
              Supported by over 20 national-level experts like Professors Zhang Youkang, Zheng Falei, Liu Guangzhen, and Sun Wei, we combine modern research with traditional wisdom to provide non-invasive, root-cause recovery for chronic diseases in a serene, professional environment.
            </p>
          </Reveal>
          <Reveal index={4}>
            <div>
              <Button asChild size="lg" className="border border-white/30 text-white px-8 py-6 rounded font-label text-label-md hover:bg-white/10 active:bg-white/20 transition-colors uppercase tracking-wider w-full sm:w-auto bg-transparent shadow-none">
                <a href="#contact">Book</a>
              </Button>
            </div>
          </Reveal>
        </div>
        <div className="lg:w-1/2">
          <MasonryGallery images={aboutImages} columnsClass="columns-2 sm:columns-2" />
        </div>
      </div>
    </section>
  );
}
