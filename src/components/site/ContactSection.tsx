import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Reveal, RevealText } from "./Reveal";

const DETAILS = [
  { icon: Mail, label: "info@shijiazhuanghetaihenghospital.com", href: "mailto:info@shijiazhuanghetaihenghospital.com" },
  { icon: Phone, label: "+86 181 8708 9802", href: "tel:+8618187089802" },
  { icon: Phone, label: "+86 155 3016 5253", href: "tel:+8615530165253" },
  { icon: MapPin, label: "Shijiazhuang, Hebei, China", href: undefined },
];

export function ContactSection() {
  const [accepted, setAccepted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accepted) {
      toast.error("Please accept the terms and conditions.");
      return;
    }
    event.currentTarget.reset();
    setAccepted(false);
    toast.success("Thank you — a specialist will contact you within 24 hours.");
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-[1280px] px-5 py-24 lg:px-8 lg:py-36"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Reach us</p>
          </Reveal>
          <h2
            id="contact-heading"
            className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.06] text-balance-tight"
          >
            <RevealText text="A nurse answers the phone. No machines. No waiting." />
          </h2>

          <ul className="mt-12 space-y-6">
            {DETAILS.map((detail) => (
              <li key={detail.label} className="flex min-w-0 items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-none bg-primary/8 text-primary">
                  <detail.icon className="size-5" aria-hidden />
                </span>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="min-w-0 truncate text-sm font-medium text-foreground hover:text-primary"
                  >
                    {detail.label}
                  </a>
                ) : (
                  <span className="min-w-0 truncate text-sm font-medium text-foreground">
                    {detail.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <Reveal index={1}>
          <form
            onSubmit={onSubmit}
            className="rounded-none border border-border bg-card p-8 shadow-editorial sm:p-10"
          >
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required autoComplete="name" placeholder="Your full name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us your creatinine level, GFR and current treatment."
                />
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  className="mt-0.5 rounded-none"
                  checked={accepted}
                  onCheckedChange={(v) => setAccepted(v === true)}
                />
                <Label htmlFor="terms" className="text-sm font-normal leading-relaxed text-muted-foreground">
                  I accept the terms and conditions and consent to being contacted about my
                  condition.
                </Label>
              </div>
              <Button type="submit" size="lg" className="rounded-none">
                Send message
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
