import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TreatKidneySection } from "@/components/site/TreatKidneySection";
import {
  EditorialTreatmentSection,
  type EditorialBlock,
} from "@/components/site/EditorialTreatmentSection";
import { GallerySection } from "@/components/site/GallerySection";
import { AboutSection } from "@/components/site/AboutSection";
import { DoctorsSection } from "@/components/site/DoctorsSection";
import { CooperationSection } from "@/components/site/CooperationSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { FaqSection, FAQS } from "@/components/site/FaqSection";
import { CtaBanner } from "@/components/site/CtaBanner";
import { ContactSection } from "@/components/site/ContactSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { treatmentImages, generalImages } from "@/lib/hospital-images";

const TITLE = "International Kidney Hospital in China | Hetaiheng Kidney Care";
const DESCRIPTION =
  "Advanced kidney care without dialysis. Systematic Chinese medicine Toxin-Removing Treatment lowers creatinine and promotes GFR for patients from 148 countries.";

const BLOCKS: EditorialBlock[] = [
  {
    id: "creatinine",
    eyebrow: "Treatments",
    title: "Treatments for high creatinine",
    intro:
      "There is no specific Western medicine to lower high creatinine other than waiting for dialysis or a transplant. As a hospital specialising in kidney disease, we have developed a series of therapies that work on the damaged nephrons themselves.",
    points: [
      {
        heading: "How to reduce high creatinine",
        body: "Our systematic Chinese medicine Toxin-Removing Treatment, an alternative to dialysis, treats damaged kidneys from the root to restore their natural detoxification ability and promote GFR.",
      },
      {
        heading: "How many days until you see an effect?",
        body: "Usually after a few days of treatment the urine starts to change — becoming smelly, light yellow or cloudy with discharged floccules. These are early signs the kidneys are repairing, and creatinine falls accordingly.",
      },
    ],
    images: treatmentImages.slice(0, 5),
    tone: "tinted",
  },
  {
    id: "dialysis",
    eyebrow: "Treatments",
    title: "Treatment to get rid of dialysis",
    intro:
      "Stopping dialysis is possible depending on your kidney condition. If you still produce urine and your kidney size is over 6cm, our systematic Toxin-Removing Treatment can help restore natural detoxification and eliminate symptoms such as chronic weakness.",
    points: [
      {
        heading: "How do we help stop dialysis?",
        body: "Chinese medicine here is not simply oral herbs, acupuncture or cupping, but a combination of therapies only available in China — including our patented intermediate frequency therapeutic apparatus that delivers active ingredients directly to the damaged kidney area.",
      },
      {
        heading: "How many days until you see a result?",
        body: "Significant improvements often appear within days, with changes in urine colour and consistency signalling repair. As function returns, creatinine declines naturally, allowing a reduction or even cessation of dialysis.",
      },
    ],
    images: treatmentImages.slice(5, 10),
    reverse: true,
  },
  {
    id: "ckd",
    eyebrow: "Treatments",
    title: "Kidney disease at stage 4 and stage 5",
    intro:
      "Systematic Chinese medicine Toxin-Removing Treatment is a strong choice at advanced stages because it treats the damaged kidneys from the root, restoring their own ability to remove creatinine and other toxins while promoting GFR.",
    points: [
      {
        heading: "How to treat stage 4 CKD",
        body: "A combined protocol of detoxification, micro-Chinese medicine and external therapies stabilises remaining function, lowers proteinuria and slows progression toward dialysis.",
      },
      {
        heading: "How to treat stage 5 CKD",
        body: "Even at stage 5, our patented apparatus delivers active ingredients directly to damaged tissue, supporting residual function and, for many patients, reducing dialysis frequency.",
      },
    ],
    images: [...treatmentImages.slice(10, 14), ...generalImages.slice(0, 1)],
    tone: "tinted",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      {
        property: "og:image",
        content: "https://res.cloudinary.com/idmvpeay/image/upload/f_auto,q_auto,w_1200/MAINHERO-IMAGE_tpleae.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://res.cloudinary.com/idmvpeay/image/upload/f_auto,q_auto,w_1200/MAINHERO-IMAGE_tpleae.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hospital",
          name: "Shijiazhuang Hetaiheng Kidney Disease Hospital",
          description: DESCRIPTION,
          medicalSpecialty: "Nephrologic",
          telephone: "+8618187089802",
          email: "info@shijiazhuanghetaihenghospital.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Shijiazhuang",
            addressRegion: "Hebei",
            addressCountry: "CN",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <TreatKidneySection />
        {BLOCKS.map((block) => (
          <EditorialTreatmentSection key={block.id} block={block} />
        ))}
        <GallerySection />
        <AboutSection />
        <DoctorsSection />
        <CooperationSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
