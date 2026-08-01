import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Treatments", href: "#treatments" },
  { label: "Doctors", href: "#doctors" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="main-nav"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 w-full",
        scrolled ? "bg-primary shadow-lg" : "bg-primary"
      )}
    >
      <div className="flex justify-between items-center h-20 px-4 md:px-margin-x max-w-container-max mx-auto">
        <a href="#top" className="flex items-center truncate pr-4">
          <img 
            src="https://res.cloudinary.com/idmvpeay/image/upload/v1785612572/kidney-logo_ic2e60.jpg" 
            alt="Shijiazhuang Hetaiheng Hospital Logo" 
            className="h-12 w-auto object-contain"
          />
        </a>
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-label text-label-md uppercase tracking-wider text-on-primary/80 hover:text-on-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="tel:+8618187089802" className="bg-white text-primary font-bold px-6 py-2.5 rounded-sm font-label text-label-lg uppercase tracking-wider hover:bg-white/90 transition-colors">
            CALL
          </a>
        </div>
        <button
          className="md:hidden text-on-primary p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-primary shadow-lg border-t border-on-primary/10">
          <nav className="flex flex-col py-4 px-4">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-label text-label-lg uppercase tracking-wider text-on-primary py-3 border-b border-on-primary/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+8618187089802"
              className="mt-6 text-center bg-white text-primary font-bold px-6 py-3 rounded-sm font-label text-label-lg uppercase tracking-wider hover:bg-white/90 transition-colors"
            >
              CALL
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
