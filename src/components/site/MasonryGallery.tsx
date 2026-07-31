import { motion } from "motion/react";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { img, type HospitalImage } from "@/lib/hospital-images";

export function EditorialImage({
  image,
  priority = false,
  width = 800,
  className,
  overlay,
}: {
  image: HospitalImage;
  ratio?: string;
  priority?: boolean;
  width?: number;
  className?: string;
  overlay?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative rounded-none bg-muted ring-1 ring-border/70",
        "shadow-editorial transition-shadow duration-500 hover:ring-accent/50",
        className,
      )}
    >
      <img
        src={img(image.file, width)}
        alt={image.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block h-auto w-full object-contain"
      />
      {overlay}
    </motion.div>
  );
}

export function MasonryGallery({
  images,
  columnsClass = "columns-1 sm:columns-2 xl:columns-3",
  width = 1200,
  className,
}: {
  images: HospitalImage[];
  columnsClass?: string;
  width?: number;
  className?: string;
}) {
  return (
    <div className={cn(columnsClass, "gap-4 [column-fill:_balance] sm:gap-5", className)}>
      {images.map((image) => (
        <div key={image.file} className="mb-4 break-inside-avoid sm:mb-5">
          <EditorialImage image={image} width={width} />
        </div>
      ))}
    </div>
  );
}
