import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const COLUMNS = [
  {
    title: "Treatments",
    links: [
      "Detoxification Therapy",
      "Micro-Chinese Medicine",
      "Medicated Bath",
      "Moxibustion Therapy",
      "Fumigation Therapy",
    ],
  },
  {
    title: "Quick links",
    links: ["Treatments", "Doctors", "About us", "Cooperation", "Contact"],
  },
  {
    title: "Conditions",
    links: [
      "High creatinine",
      "Stage 4 CKD",
      "Stage 5 CKD",
      "Dialysis withdrawal",
      "Proteinuria",
    ],
  },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

export function SiteFooter() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="mx-auto max-w-container-max px-5 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          <div>
            <h2 className="font-display text-2xl leading-snug text-inverse-primary">
              Shijiazhuang Hetaiheng Hospital
            </h2>
            <address className="mt-8 space-y-1 font-body text-sm not-italic opacity-70">
              <p>Shijiazhuang, Hebei, China</p>
              <p>
                WhatsApp:{" "}
                <a href="tel:+8618187089802" className="hover:text-inverse-primary transition-colors">
                  +86 181 8708 9802
                </a>
              </p>
              <p>
                Call:{" "}
                <a href="tel:+8615530165253" className="hover:text-inverse-primary transition-colors">
                  +86 155 3016 5253
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:shijiazhuanghetaiheng@gmail.com" className="hover:text-inverse-primary transition-colors">
                  shijiazhuanghetaiheng@gmail.com
                </a>
              </p>
            </address>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3 className="font-label text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#treatments"
                        className="font-body text-sm opacity-80 transition-colors hover:text-inverse-primary hover:opacity-100"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-inverse-on-surface/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs opacity-60">
            © {new Date().getFullYear()} Shijiazhuang Hetaiheng Hospital. All rights
            reserved.
          </p>
          <ul className="flex gap-6 font-body text-xs opacity-60">
            <li>
              <a 
                href="/Cooperation-Agreement.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-inverse-primary transition-colors"
              >
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
