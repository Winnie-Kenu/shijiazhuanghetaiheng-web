import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, RevealText } from "@/components/site/Reveal";
import { getDoctorBySlug, DOCTORS, type Doctor } from "@/lib/doctors-data";
import { img } from "@/lib/hospital-images";

import { getDoctorBySlug as getSanityDoctor, getDoctors as getSanityDoctors } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";

export const Route = createFileRoute("/doctors/$slug")({
  head: ({ params, loaderData }) => {
    // We can use the loaded doctor or fallback
    const doctor = loaderData?.doctor || getDoctorBySlug(params.slug);
    const title = doctor
      ? `${doctor.name} — ${doctor.title} | Hetaiheng Kidney Care`
      : "Doctor Not Found";
    const description = doctor
      ? `Learn about ${doctor.name}, ${doctor.title} at Shijiazhuang Hetaiheng Hospital — a leading international kidney care centre in China.`
      : "";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
      ],
      links: [
        {
          rel: "canonical",
          href: `/doctors/${doctor?.slug?.current || doctor?.slug || ""}`,
        },
      ],
    };
  },
  component: DoctorBioPage,
  loader: async ({ params }) => {
    try {
      const sanityDoctor = await getSanityDoctor(params.slug);
      const sanityDoctors = await getSanityDoctors();
      
      const doctor = sanityDoctor || getDoctorBySlug(params.slug);
      const allDoctors = (sanityDoctors && sanityDoctors.length > 0) ? sanityDoctors : DOCTORS;

      if (!doctor) {
        throw notFound();
      }
      return { doctor, allDoctors };
    } catch (error) {
      console.error("Failed to fetch doctor from Sanity", error);
      const doctor = getDoctorBySlug(params.slug);
      if (!doctor) {
        throw notFound();
      }
      return { doctor, allDoctors: DOCTORS };
    }
  },
});

function DoctorBioPage() {
  const { doctor, allDoctors } = Route.useLoaderData();

  /* Find adjacent doctors for prev / next navigation */
  const currentSlug = doctor.slug?.current || doctor.slug;
  const currentIdx = allDoctors.findIndex((d: any) => (d.slug?.current || d.slug) === currentSlug);
  const prev = currentIdx > 0 ? DOCTORS[currentIdx - 1] : null;
  const next = currentIdx < DOCTORS.length - 1 ? DOCTORS[currentIdx + 1] : null;

  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* ── Hero banner ───────────────────────────────────────── */}
        <section className="relative bg-surface pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-margin-x overflow-hidden">
          {/* Decorative gradient backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, color-mix(in oklab, var(--color-primary) 8%, transparent), transparent)",
            }}
          />

          <div className="relative max-w-container-max mx-auto grid md:grid-cols-[340px_1fr] gap-12 items-start">
            {/* Doctor image */}
            <Reveal>
              <div className="aspect-[3/4] max-w-xs mx-auto md:mx-0 overflow-hidden rounded-lg shadow-editorial">
                {doctor.image && (
                  <img
                    alt={doctor.image.alt || doctor.name}
                    className="w-full h-full object-cover"
                    src={doctor.image.asset ? urlFor(doctor.image).width(800).url() : img(doctor.image.file, 800)}
                  />
                )}
              </div>
            </Reveal>

            {/* Doctor info */}
            <div className="flex flex-col justify-center">
              <Reveal index={1}>
                <p className="eyebrow text-secondary mb-3">{doctor.title}</p>
              </Reveal>
              <Reveal index={2}>
                <h1 className="font-display text-headline-lg-mobile md:text-md-headline-lg text-on-surface mb-6">
                  <RevealText text={doctor.name} />
                </h1>
              </Reveal>
              <Reveal index={3}>
                <div className="font-body text-body-lg text-on-surface-variant max-w-xl leading-relaxed space-y-6">
                  {doctor.bio.map((section, idx) => (
                    <div key={idx}>
                      {section.heading && (
                        <h2 className="text-xl font-display text-on-surface mb-2 font-semibold">
                          {section.heading}
                        </h2>
                      )}
                      <div className="space-y-4">
                        {section.text.split("\n").map((para, pIdx) => (
                          para.trim() ? <p key={pIdx}>{para}</p> : null
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Prev / Next navigation ────────────────────────────── */}
        <section className="bg-surface-container-low py-12 px-4 md:px-margin-x">
          <div className="max-w-container-max mx-auto flex items-center justify-between">
            {prev ? (
              <Link
                to="/doctors/$slug"
                params={{ slug: prev.slug?.current || prev.slug }}
                className="group flex items-center gap-2 font-label text-label-md text-secondary hover:text-primary transition-colors"
              >
                <span
                  aria-hidden
                  className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1"
                >
                  arrow_back
                </span>
                {prev.name}
              </Link>
            ) : (
              <span />
            )}

            <Link
              to="/"
              hash="doctors"
              className="font-label text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              All Doctors
            </Link>

            {next ? (
              <Link
                to="/doctors/$slug"
                params={{ slug: next.slug?.current || next.slug }}
                className="group flex items-center gap-2 font-label text-label-md text-secondary hover:text-primary transition-colors"
              >
                {next.name}
                <span
                  aria-hidden
                  className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1"
                >
                  arrow_forward
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
