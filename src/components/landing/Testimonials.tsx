import { Quote } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { testimonials } from "@/config/site";

/* IMPORTANTE: testimonios de ejemplo. Sustitúyelos por opiniones reales
   con permiso de sus autores antes de publicar (src/config/site.ts). */
export function Testimonials() {
  return (
    <Section id="testimonios">
      <SectionHeading
        eyebrow="Testimonios de ejemplo"
        title="Cómo se verán las opiniones reales"
        description="Los textos siguientes son plantillas de demostración, no opiniones reales de alumnos. Se sustituirán por testimonios verificados con su autorización."
      />
      <div className="mt-8 flex justify-center">
        <span className="border-gold/40 bg-gold-soft/60 text-navy rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
          Contenido placeholder · pendiente de sustituir
        </span>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.quote} className="surface-card flex flex-col p-7">
            <Quote className="text-gold size-6" />
            <blockquote className="text-navy/85 mt-4 flex-1 text-sm leading-relaxed italic">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="text-navy text-sm font-semibold">{t.author}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}