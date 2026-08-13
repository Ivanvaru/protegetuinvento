import { Section, SectionHeading } from "./Section";

const modules = [
  {
    n: "01",
    title: "Fundamentos de propiedad industrial",
    text: "Patente, modelo de utilidad, diseño, marca y secreto industrial: qué protege cada figura y cuándo tiene sentido cada una.",
  },
  {
    n: "02",
    title: "Búsqueda de anterioridades",
    text: "Cómo buscar en bases de datos públicas, leer documentos de patente y valorar si tu idea ya está descrita.",
  },
  {
    n: "03",
    title: "Requisitos de patentabilidad",
    text: "Novedad, actividad inventiva y aplicación industrial explicados con ejemplos y con las exclusiones más habituales.",
  },
  {
    n: "04",
    title: "Redacción y estrategia",
    text: "Estructura de una solicitud, papel de las reivindicaciones y cómo definir el alcance que quieres proteger.",
  },
  {
    n: "05",
    title: "Proceso de solicitud",
    text: "Vías nacional, europea y PCT: trámites, informes de búsqueda, examen y respuestas a objeciones.",
  },
  {
    n: "06",
    title: "Costes y plazos",
    text: "Tasas, honorarios, anualidades y traducciones: cómo planificar el coste real de proteger a lo largo del tiempo.",
  },
  {
    n: "07",
    title: "Explotación de la patente",
    text: "Licencias, cesión, valoración como activo, uso frente a inversores y qué hacer ante una posible infracción.",
  },
];

export function Curriculum() {
  return (
    <Section id="programa">
      <SectionHeading
        eyebrow="El programa"
        title="Lo que aprenderás"
        description="Siete módulos ordenados de forma lógica, con ejemplos y plantillas para aplicar cada paso a tu propio proyecto."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <article key={m.n} className="surface-card group p-7">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-electric text-3xl font-semibold">{m.n}</span>
              <span className="bg-gold/40 h-px w-10 transition-all group-hover:w-16" />
            </div>
            <h3 className="text-navy mt-5 text-lg font-semibold">{m.title}</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{m.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}