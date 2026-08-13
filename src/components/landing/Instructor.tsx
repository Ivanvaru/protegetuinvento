import { BadgeCheck } from "lucide-react";
import { Section } from "./Section";
import { instructor } from "@/config/site";

/**
 * Contenido provisional. Edita `instructor` en src/config/site.ts
 * con datos reales y verificables antes de publicar.
 */
export function Instructor() {
  return (
    <Section id="instructor">
      <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="bg-navy-gradient relative overflow-hidden rounded-2xl p-8">
          <div className="bg-primary-foreground/8 border-gold/30 flex size-16 items-center justify-center rounded-2xl border">
            <span className="font-display text-gold text-2xl">PA</span>
          </div>
          <p className="text-primary-foreground mt-6 text-xl font-semibold">{instructor.name}</p>
          <p className="text-primary-foreground/65 mt-1 text-sm">{instructor.role}</p>
          <ul className="border-primary-foreground/10 mt-6 space-y-3 border-t pt-6">
            {instructor.facts.map((fact) => (
              <li key={fact} className="text-primary-foreground/75 flex items-start gap-2.5 text-sm">
                <BadgeCheck className="text-gold mt-0.5 size-4 shrink-0" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-electric text-xs font-semibold tracking-[0.18em] uppercase">
            Quién enseña
          </span>
          <h2 className="text-navy mt-4 text-3xl font-semibold md:text-4xl">
            Una formación construida desde la práctica
          </h2>
          <span className="gold-rule mt-4 block" aria-hidden="true" />
          <div className="mt-6 space-y-4">
            {instructor.bio.map((p) => (
              <p key={p} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-6 rounded-xl border border-dashed border-border bg-muted/40 p-4 text-xs text-muted-foreground">
            Nota para la edición: este bloque contiene texto provisional. Sustitúyelo por la
            biografía real del instructor; no incluimos titulaciones ni cifras sin verificar.
          </p>
        </div>
      </div>
    </Section>
  );
}