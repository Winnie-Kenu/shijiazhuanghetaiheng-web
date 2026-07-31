import { ArrowUpRight } from "lucide-react";

import { MasonryGallery } from "./MasonryGallery";
import { Reveal, RevealText } from "./Reveal";
import { cn } from "@/lib/utils";
import type { HospitalImage } from "@/lib/hospital-images";

export type EditorialBlock = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  points: { heading: string; body: string }[];
  images: HospitalImage[];
  reverse?: boolean;
  tone?: "default" | "tinted";
};

export function EditorialTreatmentSection({ block }: { block: EditorialBlock }) {
  const { id, eyebrow, title, intro, points, images, reverse, tone = "default" } = block;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("py-24 lg:py-36", tone === "tinted" && "bg-muted/50")}
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div
          className={cn(
            "grid items-start gap-12 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          <MasonryGallery
            images={images}
            columnsClass="columns-1 md:columns-2"
            width={1100}
            className="lg:sticky lg:top-28"
          />

          <div className="lg:pt-6">
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
            </Reveal>
            <h2
              id={`${id}-heading`}
              className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.06] text-balance-tight"
            >
              <RevealText text={title} />
            </h2>
            <Reveal index={1}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                {intro}
              </p>
            </Reveal>

            <dl className="mt-10 divide-y divide-border border-y border-border">
              {points.map((point, i) => (
                <Reveal key={point.heading} index={i + 2}>
                  <div className="py-7">
                    <dt className="font-display text-xl leading-snug text-foreground">
                      {point.heading}
                    </dt>
                    <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {point.body}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>

            <Reveal index={points.length + 2}>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
              >
                Request a free condition analysis
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
