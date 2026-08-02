import { Link } from "@tanstack/react-router";
import { Reveal, RevealText } from "./Reveal";
import { img } from "@/lib/hospital-images";
import { DOCTORS } from "@/lib/doctors-data";

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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          {DOCTORS.map((doc, i) => (
            <Reveal key={doc.name} index={i % 4}>
              <div className="group">
                <Link
                  to="/doctors/$slug"
                  params={{ slug: doc.slug }}
                  className="block"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded bg-surface-dim mb-4">
                    {doc.image && (
                      <img
                        alt={doc.image.alt}
                        className="w-full h-full object-cover transition-all duration-500"
                        src={img(doc.image.file, 600)}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-headline-sm text-on-surface mb-1">{doc.name}</h3>
                  <p className="font-label text-label-md text-on-surface-variant uppercase tracking-wider mb-3">{doc.title}</p>
                  <span className="inline-flex items-center gap-1 font-label text-label-md text-primary group-hover:text-primary-container transition-colors duration-300">
                    See bio
                    <span
                      aria-hidden
                      className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      arrow_forward
                    </span>
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
