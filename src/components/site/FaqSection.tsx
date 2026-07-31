import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, RevealText } from "./Reveal";

export const FAQS = [
  {
    q: "What is kidney failure?",
    a: "Kidney failure means your kidneys have lost the ability to filter waste from your blood effectively. It is a serious condition, but it is not the end of the road. With modern treatment you can manage the disease and live a full life.",
  },
  {
    q: "Is dialysis painful?",
    a: "The needle insertion for hemodialysis involves a quick pinch, but the treatment itself is painless. Some patients feel dizzy, sleepy or sick during the session. We use advanced monitors and expert hygiene to make the process as smooth as possible.",
  },
  {
    q: "Can diet reverse damage?",
    a: "Diet alone cannot reverse moderate kidney failure, but it is a powerful tool to slow progression and reduce complications. A precise renal diet minimises potassium, phosphorus and sodium. Our dietitians build a plan that fights alongside your medicine.",
  },
  {
    q: "How much does treatment cost?",
    a: "Costs vary depending on your specific treatment plan and duration of stay. We work with major insurance carriers and provide a detailed cost-of-care breakdown before you commit to anything.",
  },
  {
    q: "When can I book?",
    a: "You can book right now through this website or by calling our front desk. We prioritise urgent cases and aim to see new international patients within 48 hours.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-muted/50 py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow">FAQs</p>
          </Reveal>
          <h2
            id="faq-heading"
            className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.06] text-balance-tight"
          >
            <RevealText text="Straight answers to the questions that keep you up at night" />
          </h2>
          <Reveal index={1}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Still unsure? Speak directly with a specialist who can give you clear answers about
              your own lab results.
            </p>
          </Reveal>
        </div>

        <Reveal index={1}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="py-7 text-left font-display text-xl leading-snug hover:no-underline sm:text-2xl">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-8 text-base leading-relaxed text-muted-foreground">
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
