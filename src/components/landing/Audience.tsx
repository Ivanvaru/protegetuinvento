import { Check, X } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const forYou = [
  "Emprendedores con un producto técnico que quieren proteger antes de salir al mercado.",
  "Inventores independientes que no saben por dónde empezar ni a quién acudir.",
  "Equipos de I+D e innovación que necesitan un lenguaje común con el área legal.",
  "Perfiles técnicos que quieren entender qué se puede patentar de su trabajo.",
  "Consultores y gestores que asesoran a startups y pymes industriales.",
];

const notForYou = [
  "Buscas una respuesta jurídica concreta sobre tu caso: eso requiere asesoramiento profesional individual.",
  "Esperas que te tramitemos la solicitud por ti; aquí aprendes a decidir y a preparar, no delegamos el trámite.",
  "Quieres un atajo para patentar cualquier idea sin cumplir los requisitos legales.",
  "No estás dispuesto a dedicar unas horas a estudiar el proceso con calma.",
];

export function Audience() {
  return (
    <Section id="para-quien" className="bg-card border-y border-border">
      <SectionHeading
        eyebrow="Encaje"
        title="Para quién es y para quién no"
        description="Preferimos ser claros antes de la compra: esta formación funciona muy bien para algunos perfiles y no es la mejor opción para otros."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="border-electric/25 bg-electric-soft/40 rounded-2xl border p-8">
          <h3 className="text-navy text-xl font-semibold">Es para ti si…</h3>
          <ul className="mt-6 space-y-4">
            {forYou.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="bg-electric mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                  <Check className="text-primary-foreground size-3" />
                </span>
                <span className="text-navy/85 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-muted/40 p-8">
          <h3 className="text-navy text-xl font-semibold">No es para ti si…</h3>
          <ul className="mt-6 space-y-4">
            {notForYou.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="bg-muted-foreground/15 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                  <X className="text-muted-foreground size-3" />
                </span>
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}