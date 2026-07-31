import { MasonryGallery } from "./MasonryGallery";
import { Reveal, RevealText } from "./Reveal";
import { galleryImages } from "@/lib/hospital-images";

export function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="mx-auto max-w-[1280px] px-5 py-24 lg:px-8 lg:py-36"
    >
      <div className="max-w-3xl">
        <Reveal>
          <p className="eyebrow">Our work</p>
        </Reveal>
        <h2
          id="gallery-heading"
          className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.05] text-balance-tight"
        >
          <RevealText text="A clear mind, a steady hand, and the quiet machinery of recovery" />
        </h2>
      </div>

      <div className="mt-14">
        <MasonryGallery images={galleryImages} />
      </div>
    </section>
  );
}
