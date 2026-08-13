import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "./Section";
import { offer } from "@/config/site";

/* Precio, incluidos y garantía son provisionales: edítalos en src/config/site.ts */
export function Pricing() {
  return (
    <Section id="precio" className="bg-navy-deep">
      <SectionHeading
        eyebrow="La oferta"
        title="Acceso completo a la formación"
        description="Un único pago, acceso inmediato y sin suscripciones. Aprende a tu ritmo y vuelve al material cuando lo necesites."
        inverted
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="bg-card rounded-2xl p-8 md:p-10">
          <h3 className="text-navy text-lg font-semibold">Qué incluye</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {offer.includes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="bg-gold/25 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                  <Check className="text-navy size-3" />
                </span>
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-gold/25 bg-primary-foreground/6 flex flex-col rounded-2xl border p-8 backdrop-blur-sm">
          <p className="text-primary-foreground/70 text-sm">Precio provisional</p>
          <p className="font-display text-primary-foreground mt-2 text-5xl font-semibold">
            {offer.price}
          </p>
          <p className="text-primary-foreground/60 mt-2 text-sm">{offer.priceNote}</p>

          <Button variant="gold" size="xl" className="mt-8 w-full" asChild>
            <a href="#precio">
              Quiero empezar
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <p className="text-primary-foreground/50 mt-3 text-center text-xs">
            El pago aún no está activo en esta versión de la web.
          </p>

          <div className="border-primary-foreground/10 mt-8 flex items-start gap-3 border-t pt-6">
            <ShieldCheck className="text-gold mt-0.5 size-5 shrink-0" />
            <p className="text-primary-foreground/75 text-sm leading-relaxed">
              <span className="text-primary-foreground font-semibold">
                Garantía de {offer.guaranteeDays} días
              </span>{" "}
              (provisional): si el contenido no encaja con lo que esperabas, escríbenos dentro de
              ese plazo y te devolvemos el importe.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}