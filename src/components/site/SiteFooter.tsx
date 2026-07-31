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
    links: ["High creatinine", "Stage 4 CKD", "Stage 5 CKD", "Dialysis withdrawal"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          <div>
            <h2 className="font-display text-2xl leading-snug">
              Shijiazhuang Hetaiheng Kidney Disease Hospital
            </h2>
            <address className="mt-8 space-y-1 text-sm not-italic text-deep-foreground/70">
              <p>Shijiazhuang, Hebei, China</p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/8618187089802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  +86 181 8708 9802
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/8615530165253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  +86 155 3016 5253
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:shijiazhuanghetaiheng@gmail.com" className="hover:text-accent">
                  shijiazhuanghetaiheng@gmail.com
                </a>
              </p>
            </address>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-deep-foreground/60">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#treatments"
                        className="text-sm text-deep-foreground/80 transition-colors hover:text-accent"
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

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-deep-foreground/60">
            © {new Date().getFullYear()} Shijiazhuang Hetaiheng Kidney Disease Hospital. All rights
            reserved.
          </p>
          <ul className="flex gap-6 text-xs text-deep-foreground/60">
            <li>
              <a href="#top" className="hover:text-accent">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
