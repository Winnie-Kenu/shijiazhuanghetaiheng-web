import { EditorialImage } from "./MasonryGallery";
import { Reveal, RevealText } from "./Reveal";
import { cooperationImages } from "@/lib/hospital-images";

const RATIOS = ["4 / 5", "16 / 11", "1 / 1", "3 / 4", "5 / 7", "4 / 3"];

function labelFor(file: string): string {
  const base = file.replace(/_[a-z0-9]+\.jpg$/i, "").replace(/-?HDC-?/i, "");
  return base
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function CooperationSection() {
  return (
    <section id="cooperation" aria-labelledby="cooperation-heading" className="bg-surface-container-low py-section-padding-y md:py-md-section-padding-y px-4 md:px-margin-x">
      <div className="mx-auto max-w-container-max">
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-label text-label-md text-primary tracking-widest uppercase">Hospital development cooperation</p>
          </Reveal>
          <h2
            id="cooperation-heading"
            className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.05] text-on-surface text-balance-tight"
          >
            <RevealText text="The alliances that sharpen our edge against kidney disease" />
          </h2>
          <Reveal index={1}>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-on-surface-variant lg:text-lg">
              Embassies, ministries of health and university hospitals across the Middle East,
              Africa and Asia work with us to bring non-invasive renal care to their citizens.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 sm:gap-5">
          {cooperationImages.map((image, i) => (
            <li key={image.file} className="mb-4 break-inside-avoid sm:mb-5">
              <EditorialImage
                image={image}
                ratio={RATIOS[i % RATIOS.length] ?? "4 / 5"}
                width={720}
                overlay={
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end p-4">
                    <span className="glass-card translate-y-2 rounded-none px-3 py-1.5 font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {labelFor(image.file)}
                    </span>
                  </div>
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
