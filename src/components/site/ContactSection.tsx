import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Reveal, RevealText } from "./Reveal";
import { img, aboutImages } from "@/lib/hospital-images";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/mojgoqyj", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        toast.success(
          "Thank you! Your request has been sent successfully. A specialist will contact you shortly."
        );
      } else {
        const data = await response.json().catch(() => null);
        const errorMsg =
          data?.errors?.map((e: { message: string }) => e.message).join(", ") ||
          "Something went wrong. Please try again or contact us directly.";
        toast.error(errorMsg);
      }
    } catch {
      toast.error(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const bgImage = aboutImages[1] || aboutImages[0];

  return (
    <section id="contact" className="flex flex-col lg:flex-row min-h-[600px]">
      <div className="lg:w-1/2 bg-surface-container-low p-6 md:p-12 lg:p-24 flex flex-col justify-center">
        <Reveal>
          <h2 className="font-display text-headline-lg md:text-md-headline-lg mb-8 text-on-surface">
            <RevealText text="Book your consultation" />
          </h2>
        </Reveal>
        
        <Reveal index={1}>
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <input 
              required
              name="name"
              className="bg-surface border border-outline-variant rounded px-4 py-3 font-body text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors" 
              placeholder="Full Name" 
              type="text" 
            />
            <input 
              required
              name="email"
              className="bg-surface border border-outline-variant rounded px-4 py-3 font-body text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors" 
              placeholder="Email Address" 
              type="email" 
            />
            <input 
              required
              name="phone"
              className="bg-surface border border-outline-variant rounded px-4 py-3 font-body text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors" 
              placeholder="WhatsApp / Phone Number" 
              type="tel" 
            />
            <textarea 
              required
              name="message"
              className="bg-surface border border-outline-variant rounded px-4 py-3 font-body text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors min-h-[120px] resize-y" 
              placeholder="Briefly describe your condition..."
            />
            <button 
              disabled={isSubmitting}
              aria-label="Send message" 
              className="bg-primary text-on-primary px-8 py-4 rounded font-label text-label-md uppercase tracking-wider hover:bg-primary/90 transition-colors w-full mt-4 disabled:opacity-70" 
              type="submit"
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
            </button>
          </form>
        </Reveal>
      </div>

      <div className="lg:w-1/2 bg-primary p-6 md:p-12 lg:p-24 flex flex-col justify-center text-on-primary relative overflow-hidden">
        {bgImage && (
          <img 
            src={img(bgImage.file, 1200)} 
            alt="Hospital View" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="absolute inset-0 bg-primary/40 z-0"></div>
        
        <div className="relative z-10">
          <Reveal>
            <h2 className="font-display text-headline-lg md:text-md-headline-lg mb-8">
              <RevealText text="Contact Information" />
            </h2>
          </Reveal>
          
          <div className="flex flex-col gap-8 md:gap-10">
            <Reveal index={1}>
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="material-symbols-outlined text-4xl opacity-80">location_on</span>
                <div>
                  <h3 className="font-display text-headline-md mb-2">Address</h3>
                  <p className="font-body text-body-lg opacity-80 leading-relaxed">
                    No. 12 Feiyi Road<br />
                    Xinhua District, Shijiazhuang<br />
                    Hebei Province, China
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal index={2}>
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="material-symbols-outlined text-4xl opacity-80">mail</span>
                <div>
                  <h3 className="font-display text-headline-md mb-2">Email</h3>
                  <a href="mailto:info@shijiazhuanghetaihenghospital.com" className="font-body text-body-lg opacity-80 hover:text-secondary-fixed transition-colors">
                    info@shijiazhuanghetaihenghospital.com
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal index={3}>
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="material-symbols-outlined text-4xl opacity-80">phone_enabled</span>
                <div>
                  <h3 className="font-display text-headline-md mb-2">WhatsApp / Phone</h3>
                  <a href="tel:+8618187089802" className="font-body text-body-lg opacity-80 hover:text-secondary-fixed transition-colors block mb-1">
                    +86 181 8708 9802
                  </a>
                  <a href="tel:+8615530165253" className="font-body text-body-lg opacity-80 hover:text-secondary-fixed transition-colors block">
                    +86 155 3016 5253
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
