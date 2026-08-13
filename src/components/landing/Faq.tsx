import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "./Section";
import { offer } from "@/config/site";

const faqs = [
  {
    q: "¿Necesito conocimientos previos?",
    a: "No. Empezamos desde los fundamentos y explicamos la terminología a medida que aparece. Si ya trabajas en I+D o has iniciado alguna solicitud, podrás avanzar más rápido por los primeros módulos.",
  },
  {
    q: "¿Cómo accedo al contenido?",
    a: "Tras la compra recibirás acceso a la plataforma con tu email. El contenido es online, disponible desde ordenador, tablet o móvil, y puedes verlo cuando quieras.",
  },
  {
    q: "¿Cuánto dura la formación?",
    a: "Los siete módulos suman varias horas de vídeo más ejercicios y plantillas. La mayoría de alumnos lo completa en dos o tres semanas dedicando un par de horas por semana, pero el ritmo lo decides tú.",
  },
  {
    q: "¿El contenido sirve fuera de España?",
    a: "Los conceptos de patentabilidad, búsqueda de anterioridades y estrategia son comunes a la mayoría de sistemas. Los trámites y tasas concretos se explican con foco en las vías nacional española, europea (EPO) e internacional (PCT); en otros países los procedimientos pueden variar.",
  },
  {
    q: "¿Esto es asesoramiento jurídico?",
    a: "No. Es formación educativa. No analizamos casos particulares ni sustituimos el trabajo de un agente de la propiedad industrial o un abogado especializado; precisamente te preparamos para trabajar mejor con ellos.",
  },
  {
    q: "¿Qué cubre la garantía?",
    a: `Ofrecemos una garantía provisional de ${offer.guaranteeDays} días desde la compra. Si el contenido no se ajusta a lo descrito, escríbenos dentro de ese plazo y gestionamos la devolución del importe.`,
  },
];

export function Faq() {
  return (
    <Section id="faq" className="bg-card border-y border-border">
      <SectionHeading eyebrow="Dudas" title="Preguntas frecuentes" />
      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-navy text-left text-base font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}