import { MasonryGallery } from "./MasonryGallery";
import { VideoGallery } from "./VideoGallery";
import { Reveal, RevealText } from "./Reveal";
import { galleryImages, treatmentImages } from "@/lib/hospital-images";

const GALLERY = [...galleryImages, ...treatmentImages.slice(15, 16)];

export function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-surface py-section-padding-y md:py-md-section-padding-y px-4 md:px-margin-x"
    >
      <div className="mx-auto max-w-container-max">
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-label text-label-md text-primary tracking-widest uppercase">Our work</p>
          </Reveal>
          <h2
            id="gallery-heading"
            className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.05] text-on-surface text-balance-tight"
          >
            <RevealText text="A clear mind, a steady hand, and the quiet machinery of recovery" />
          </h2>
        </div>

      <div className="mt-14">
        <VideoGallery />
      </div>

      <div className="mt-14">
        <MasonryGallery images={GALLERY} />
      </div>
      </div>
    </section>
  );
}
