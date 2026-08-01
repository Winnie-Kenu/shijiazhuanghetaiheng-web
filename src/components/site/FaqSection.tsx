import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, RevealText } from "./Reveal";

export const FAQS = [
  {
    q: "Do you accept foreign patients?",
    a: "Yes, we treat patients from 148 countries. We provide full support including visa assistance, airport pickup, and dedicated English translators.",
  },
  {
    q: "How does Toxin-Removing Treatment work?",
    a: "It combines multiple Chinese therapies (like Micro-Chinese Medicine Osmotherapy and Medicated Bath) to draw out toxins, improve blood circulation in the kidneys, and repair damaged intrinsic cells.",
  },
  {
    q: "Can I stop dialysis?",
    a: "It depends on your current kidney function, urine output, and kidney size. Many patients have successfully reduced or completely stopped dialysis after our systematic treatment.",
  },
  {
    q: "How much does treatment cost?",
    a: "Costs vary depending on your specific treatment plan and duration of stay. We provide a detailed cost-of-care breakdown after our experts analyze your medical reports.",
  },
  {
    q: "How do I get a consultation?",
    a: "You can contact us via WhatsApp, email, or our online form. Send us your latest medical reports, and our experts will provide a free analysis and treatment plan.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-surface-container-highest py-section-padding-y md:py-md-section-padding-y px-4 md:px-margin-x">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 id="faq-heading" className="font-display text-headline-lg md:text-md-headline-lg mb-8 md:mb-12 text-center text-on-surface">
            <RevealText text="Frequently Asked Questions" />
          </h2>
        </Reveal>
        
        <Reveal index={1}>
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="bg-surface px-6 rounded border border-surface-variant/40 group hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="py-6 text-left hover:no-underline font-display text-headline-sm text-on-surface">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-body-md text-on-surface-variant font-body">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
