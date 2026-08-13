import { BookOpenCheck, Compass, PiggyBank, Users } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const benefits = [
  {
    icon: Compass,
    title: "Entender el proceso de principio a fin",
    text: "Desde la idea inicial hasta la concesión: qué organismos intervienen, qué se presenta en cada fase y qué depende de ti.",
  },
  {
    icon: PiggyBank,
    title: "Evitar errores caros",
    text: "Divulgación prematura, solicitudes mal orientadas o plazos perdidos: los fallos más frecuentes y cómo anticiparlos.",
  },
  {
    icon: BookOpenCheck,
    title: "Preparar una estrategia de protección",
    text: "Decidir qué proteger, cuándo, en qué territorios y con qué figura, alineado con tu plan de negocio y presupuesto.",
  },
  {
    icon: Users,
    title: "Hablar con profesionales con criterio",
    text: "Llegar a la reunión con un agente o abogado entendiendo el vocabulario y sabiendo qué preguntar y qué decidir.",
  },
];

export function Benefits() {
  return (
    <Section id="beneficios" className="bg-card border-y border-border">
      <SectionHeading
        eyebrow="Por qué esta formación"
        title="Criterio propio antes de invertir en protección"
        description="No sustituimos al asesoramiento profesional: te damos el conocimiento para tomar decisiones informadas y aprovechar mejor cada euro y cada plazo."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {benefits.map((b) => (
          <article key={b.title} className="surface-card flex gap-5 p-7">
            <span className="bg-electric-soft flex size-11 shrink-0 items-center justify-center rounded-xl">
              <b.icon className="text-electric size-5" />
            </span>
            <div>
              <h3 className="text-navy text-lg font-semibold">{b.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{b.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}