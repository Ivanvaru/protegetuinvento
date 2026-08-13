import { useState } from "react";
import {
  BookOpen,
  Check,
  ClipboardList,
  Compass,
  FileSearch,
  FileText,
  Layers,
  ListChecks,
  Minus,
  PenLine,
  Ruler,
  ScrollText,
  Scale,
  Search,
  ShieldQuestion,
  Users,
} from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Section";
import { CheckoutButton } from "./CheckoutButton";
import { CoverPlaceholder } from "./Placeholder";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { OEPM_URL, PRICE, brand } from "@/config/site";

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section id="inicio" className="bg-navy-deep relative overflow-hidden px-5 py-16 sm:px-8 md:py-24">
      <span aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-[0.18]" />
      <span
        aria-hidden="true"
        className="border-gold/20 absolute -top-24 -right-24 size-72 rounded-full border md:size-96"
      />
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-start gap-6">
          <span className="border-gold/40 text-gold-light inline-flex rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.16em] uppercase">
            Formación práctica · Nivel principiante
          </span>
          <h1 className="font-display text-primary-foreground text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] font-semibold">
            Comprende las patentes antes de tomar decisiones importantes
          </h1>
          <p className="text-primary-foreground/80 max-w-xl text-base leading-relaxed md:text-lg">
            Una formación completa y fácil de entender para aprender cómo funcionan las patentes y
            los modelos de utilidad en España, preparar mejor el proceso y saber cuándo acudir a un
            profesional.
          </p>
          <ul className="grid gap-2.5">
            {[
              "Empieza desde cero.",
              "Avanza con ejemplos y ejercicios.",
              "Utiliza información basada principalmente en fuentes oficiales.",
              "Descarga los cuatro recursos y trabaja a tu ritmo.",
            ].map((item) => (
              <li key={item} className="text-primary-foreground/90 flex items-start gap-3 text-base">
                <Check aria-hidden="true" className="text-gold mt-1 size-4 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="border-primary-foreground/15 mt-2 flex flex-wrap items-baseline gap-3 border-t pt-6">
            <span className="font-display text-primary-foreground text-4xl font-semibold">
              {PRICE}
            </span>
            <span className="text-primary-foreground/70 text-base">Pago único · Descarga digital</span>
          </div>

          <CheckoutButton location="hero" className="w-full sm:w-auto">
            Acceder al paquete completo por 9,99 €
          </CheckoutButton>
          <p className="text-primary-foreground/65 text-sm">
            Pago y descarga segura gestionados mediante Payhip.
          </p>
          <p className="text-primary-foreground/60 max-w-md text-sm">
            Hemos fijado un precio de acceso reducido para facilitar que esta información llegue a
            más personas.
          </p>
        </div>

        {/* ⚠️ SUSTITUIR: composición con las cuatro portadas reales */}
        <div className="grid w-full grid-cols-2 gap-4">
          {[
            "Portada del curso",
            "Portada del cuaderno",
            "Portada de la guía de instrucciones",
            "Portada de la guía de profesionales",
          ].map((label, i) => (
            <CoverPlaceholder
              key={label}
              label={label}
              className={i % 2 === 1 ? "sm:translate-y-6" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FRANJA DE CONFIANZA ---------------- */
const trustItems = [
  { icon: Layers, label: "4 recursos coordinados" },
  { icon: FileText, label: "Más de 200 páginas" },
  { icon: ClipboardList, label: "Ejercicios prácticos" },
  { icon: Check, label: "Acceso inmediato" },
];

export function TrustStrip() {
  return (
    <div className="bg-mist border-y border-border px-5 py-6 sm:px-8">
      <ul className="mx-auto grid w-full max-w-[1200px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map(({ icon: Icon, label }) => (
          <li key={label} className="text-navy flex items-center gap-3 text-base font-medium">
            <Icon aria-hidden="true" className="text-tech size-5 shrink-0" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- PROBLEMA ---------------- */
const problems = [
  {
    icon: Search,
    title: "Demasiada información dispersa",
    text: "Los conceptos, trámites y requisitos aparecen repartidos entre numerosas fuentes.",
  },
  {
    icon: ScrollText,
    title: "Un lenguaje poco accesible",
    text: "Palabras como reivindicación, novedad o actividad inventiva pueden resultar difíciles al principio.",
  },
  {
    icon: ShieldQuestion,
    title: "Dudas sobre cuándo pedir ayuda",
    text: "No siempre es sencillo saber qué puedes preparar y qué conviene revisar con un especialista.",
  },
];

export function Problem() {
  return (
    <Section id="contenido" labelledBy="problema-titulo">
      <Reveal>
        <SectionHeading
          id="problema-titulo"
          eyebrow="El punto de partida"
          title="Entender una patente no debería ser imposible"
          description="La información existe, pero suele estar repartida entre normas, trámites, bases de datos y términos técnicos. Esta formación reúne el proceso en un itinerario comprensible para que puedas avanzar con mayor criterio, detectar errores y aprovechar mejor la ayuda profesional cuando la necesites."
        />
      </Reveal>
      <Reveal className="mt-12 grid gap-5 md:grid-cols-3">
        {problems.map(({ icon: Icon, title, text }) => (
          <article key={title} className="surface-card p-6">
            <Icon aria-hidden="true" className="text-tech size-6" />
            <h3 className="text-navy mt-4 text-lg font-semibold">{title}</h3>
            <p className="text-muted-foreground mt-2 text-base leading-relaxed">{text}</p>
          </article>
        ))}
      </Reveal>
      <p className="text-navy mt-10 text-center text-base font-medium md:text-lg">
        Esta formación no promete atajos: te ayuda a comprender el camino.
      </p>
    </Section>
  );
}

/* ---------------- CUATRO RECURSOS ---------------- */
const resources = [
  {
    n: "01",
    title: "Curso completo",
    tag: "Aprender",
    icon: BookOpen,
    cover: "Portada del curso",
    description:
      "Explica desde cero los conceptos esenciales, las modalidades de protección y las principales etapas del procedimiento español.",
    items: [
      "Patente y modelo de utilidad.",
      "Novedad y actividad inventiva.",
      "Búsqueda del estado de la técnica.",
      "Redacción y estructura de la solicitud.",
      "Presentación ante la OEPM.",
      "Tramitación, concesión y mantenimiento.",
      "Infracción y defensa.",
      "Casos y talleres aplicados.",
    ],
  },
  {
    n: "02",
    title: "Cuaderno práctico",
    tag: "Aplicar",
    icon: PenLine,
    cover: "Portada del cuaderno",
    description:
      "Convierte lo aprendido en trabajo concreto mediante tablas, plantillas, listas de comprobación y espacios preparados para completar los ejercicios.",
    items: [
      "Definición de la invención.",
      "Comparación de antecedentes.",
      "Registro de búsquedas.",
      "Preparación de dibujos.",
      "Revisión de documentación.",
      "Calendario y costes.",
      "Selección de profesionales.",
    ],
  },
  {
    n: "03",
    title: "Guía de instrucciones",
    tag: "Avanzar paso a paso",
    icon: ListChecks,
    cover: "Portada de la guía de instrucciones",
    description:
      "Explica detalladamente cómo completar cada ejercicio del cuaderno, con ejemplos, anotaciones y recomendaciones.",
    items: [
      "Objetivo de cada ejercicio.",
      "Instrucciones detalladas.",
      "Ejemplos orientativos.",
      "Errores frecuentes.",
      "Criterios para revisar el resultado.",
    ],
  },
  {
    n: "04",
    title: "Guía de profesionales independientes",
    tag: "Pedir ayuda con criterio",
    icon: Users,
    cover: "Portada de la guía de profesionales",
    description:
      "Ayuda a identificar qué especialista puede intervenir en cada tarea y a comparar propuestas antes de contratar apoyo puntual.",
    items: [
      "Tipos de profesionales.",
      "Tareas que pueden realizar.",
      "Preguntas para entrevistarlos.",
      "Comparación de presupuestos.",
      "Señales de alerta.",
      "Plataformas y canales de búsqueda.",
    ],
  },
];

export function Resources() {
  return (
    <Section id="recursos" className="bg-mist/60" labelledBy="recursos-titulo">
      <Reveal>
        <SectionHeading
          id="recursos-titulo"
          eyebrow="Qué incluye"
          title="Cuatro recursos que trabajan juntos"
          description="No recibirás únicamente un manual. El paquete combina explicación, práctica, acompañamiento y orientación para contratar ayuda puntual."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {resources.map((r, i) => (
          <Reveal key={r.n}>
            <article
              className={
                "surface-card flex h-full flex-col gap-5 p-6 sm:p-8 " +
                (i % 3 === 0 ? "border-t-tech border-t-2" : "border-t-gold border-t-2")
              }
            >
              <div className="flex items-start gap-4">
                {/* ⚠️ SUSTITUIR: miniatura de la portada real */}
                <CoverPlaceholder label={r.cover} className="w-24 shrink-0 text-[0.7rem]" />
                <div className="min-w-0">
                  <span className="text-gold font-display text-2xl font-semibold">{r.n}</span>
                  <h3 className="text-navy mt-1 text-lg font-semibold">{r.title}</h3>
                  <span className="bg-navy text-primary-foreground mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold tracking-[0.1em] uppercase">
                    <r.icon aria-hidden="true" className="size-3.5" />
                    {r.tag}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">{r.description}</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {r.items.map((it) => (
                  <li key={it} className="text-navy/85 flex items-start gap-2 text-base">
                    <Minus aria-hidden="true" className="text-gold mt-2 size-3 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
              <p className="text-tech mt-auto text-sm font-semibold tracking-[0.08em] uppercase">
                Incluido en el paquete
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- ITINERARIO ---------------- */
const stages = [
  { t: "Comprender", d: "Aprende los conceptos y el procedimiento.", icon: BookOpen },
  { t: "Investigar", d: "Busca antecedentes y analiza soluciones parecidas.", icon: FileSearch },
  { t: "Organizar", d: "Prepara información, dibujos y documentación.", icon: Ruler },
  { t: "Decidir", d: "Valora la modalidad y los siguientes pasos.", icon: Compass },
  { t: "Pedir ayuda", d: "Contrata apoyo puntual cuando aporte verdadero valor.", icon: Users },
];

export function Roadmap() {
  return (
    <Section labelledBy="itinerario-titulo">
      <Reveal>
        <SectionHeading
          id="itinerario-titulo"
          eyebrow="Itinerario"
          title="Un camino claro desde la idea hasta la decisión"
        />
      </Reveal>
      <Reveal className="relative mt-14">
        <span
          aria-hidden="true"
          className="via-gold absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent to-transparent lg:block"
        />
        <ol className="grid gap-6 lg:grid-cols-5">
          {stages.map((s, i) => (
            <li key={s.t} className="flex gap-4 lg:flex-col lg:gap-4">
              <span className="bg-navy text-gold border-gold/40 flex size-12 shrink-0 items-center justify-center rounded-full border">
                <s.icon aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-tech text-xs font-semibold tracking-[0.16em] uppercase">
                  Etapa {i + 1}
                </p>
                <h3 className="text-navy mt-1 text-lg font-semibold">{s.t}</h3>
                <p className="text-muted-foreground mt-1 text-base">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

/* ---------------- APRENDIZAJES ---------------- */
const outcomes = [
  "Distinguir una patente de un modelo de utilidad.",
  "Entender qué significan novedad y actividad inventiva.",
  "Realizar una búsqueda inicial de antecedentes.",
  "Leer los elementos principales de una patente.",
  "Organizar la descripción y los dibujos de una invención.",
  "Comprender la función de las reivindicaciones.",
  "Reconocer las etapas básicas de la tramitación.",
  "Identificar errores y señales de alerta.",
  "Preparar preguntas útiles para un profesional.",
  "Comparar propuestas de especialistas con mayor criterio.",
];

export function Outcomes() {
  return (
    <Section className="bg-mist/60" labelledBy="aprendizajes-titulo">
      <Reveal>
        <SectionHeading
          id="aprendizajes-titulo"
          eyebrow="Resultados"
          title="¿Qué podrás hacer después de completar la formación?"
        />
      </Reveal>
      <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((o) => (
          <div key={o} className="bg-card flex items-start gap-3 rounded-xl border border-border p-5">
            <Check aria-hidden="true" className="text-tech mt-1 size-4 shrink-0" />
            <p className="text-navy/90 text-base">{o}</p>
          </div>
        ))}
      </Reveal>
      <p className="text-muted-foreground mx-auto mt-10 max-w-2xl text-center text-base">
        El objetivo no es convertirte en agente de la propiedad industrial, sino ayudarte a
        comprender el proceso y participar en él de manera informada.
      </p>
    </Section>
  );
}

/* ---------------- PARA QUIÉN ES ---------------- */
const forYou = [
  "Empiezas desde cero.",
  "Tienes una idea o solución técnica.",
  "Quieres entender el proceso antes de gastar dinero.",
  "Necesitas organizar información y documentación.",
  "Quieres aprovechar mejor una consulta profesional.",
  "Prefieres aprender mediante ejemplos y ejercicios.",
];

const notForYou = [
  "Buscas asesoramiento jurídico personalizado.",
  "Necesitas representación profesional ante la OEPM.",
  "Esperas una garantía de concesión.",
  "Necesitas que alguien redacte tu solicitud por ti.",
  "Buscas una titulación oficial.",
  "Quieres una respuesta definitiva sobre la patentabilidad de una invención concreta.",
];

export function ForWhom() {
  return (
    <Section labelledBy="para-quien-titulo">
      <Reveal>
        <SectionHeading
          id="para-quien-titulo"
          eyebrow="Para quién es"
          title="Comprueba si esta formación encaja contigo"
        />
      </Reveal>
      <Reveal className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="surface-card border-tech/40 p-6 sm:p-8">
          <h3 className="text-navy text-lg font-semibold">Esta formación es para ti si…</h3>
          <ul className="mt-5 grid gap-3">
            {forYou.map((t) => (
              <li key={t} className="text-navy/90 flex items-start gap-3 text-base">
                <Check aria-hidden="true" className="text-tech mt-1 size-4 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </article>
        <article className="bg-mist rounded-xl border border-border p-6 sm:p-8">
          <h3 className="text-navy text-lg font-semibold">No es para ti si…</h3>
          <ul className="mt-5 grid gap-3">
            {notForYou.map((t) => (
              <li key={t} className="text-navy/85 flex items-start gap-3 text-base">
                <Minus aria-hidden="true" className="text-gold mt-2 size-3 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-5 text-sm">
            Preferimos decirlo con claridad: así sabrás desde el principio qué esperar.
          </p>
        </article>
      </Reveal>
    </Section>
  );
}

/* ---------------- MUESTRA INTERIOR ---------------- */
const samples = [
  "Diagrama del curso",
  "Tabla comparativa",
  "Página de vocabulario",
  "Ejercicio del cuaderno",
  "Explicación de la guía",
  "Tabla para comparar profesionales",
];

export function Samples() {
  return (
    <Section className="bg-mist/60" labelledBy="muestra-titulo">
      <Reveal>
        <SectionHeading
          id="muestra-titulo"
          eyebrow="Muestra interior"
          title="Una formación diseñada para aprender haciendo"
          description="Las páginas interiores reales se añadirán aquí. Por ahora se muestran marcadores claramente identificados."
        />
      </Reveal>
      <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {samples.map((s) => (
          <Dialog key={s}>
            <DialogTrigger className="focus-visible:ring-tech cursor-pointer rounded-xl text-left transition-transform hover:-translate-y-0.5">
              <CoverPlaceholder label={s} ratio="aspect-[4/3]" />
              <span className="text-tech mt-2 block text-sm font-medium">Ampliar muestra</span>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{s}</DialogTitle>
                <DialogDescription>
                  Vista ampliada pendiente: la captura real del documento se incorporará aquí.
                </DialogDescription>
              </DialogHeader>
              <CoverPlaceholder label={s} ratio="aspect-[4/3]" />
            </DialogContent>
          </Dialog>
        ))}
      </Reveal>
    </Section>
  );
}

/* ---------------- PRECIO ---------------- */
const priceIncludes = [
  "Curso completo.",
  "Cuaderno práctico.",
  "Guía de instrucciones.",
  "Guía para contratar profesionales.",
  "Descarga inmediata.",
  "Uso personal.",
  "Acceso a la versión adquirida.",
];

export function PriceBlock() {
  return (
    <section
      id="precio"
      aria-labelledby="precio-titulo"
      className="bg-navy-deep relative overflow-hidden px-5 py-16 sm:px-8 md:py-24"
    >
      <span aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto w-full max-w-[720px]">
        <div className="bg-card border-gold/40 rounded-2xl border p-7 shadow-[var(--shadow-lift)] sm:p-10">
          <span className="text-tech text-xs font-semibold tracking-[0.18em] uppercase">
            Acceso completo
          </span>
          <h2 id="precio-titulo" className="font-display text-navy mt-3 text-3xl font-semibold">
            Los cuatro recursos por {PRICE}
          </h2>
          <span className="gold-rule mt-4 block" aria-hidden="true" />
          <p className="text-muted-foreground mt-4 text-base">
            Un único pago para descargar el paquete y trabajar con él a tu ritmo.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {priceIncludes.map((t) => (
              <li key={t} className="text-navy/90 flex items-start gap-3 text-base">
                <Check aria-hidden="true" className="text-tech mt-1 size-4 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <p className="font-display text-navy mt-8 text-4xl font-semibold">{PRICE}</p>
          <CheckoutButton location="precio" className="mt-5 w-full">
            Acceder al paquete completo
          </CheckoutButton>
          <p className="text-muted-foreground mt-4 text-sm">
            Serás dirigido al pago seguro de Payhip. Después de completar la compra, recibirás el
            acceso a la descarga.
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            Hemos fijado un precio de acceso reducido para facilitar que esta información llegue a
            más personas.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PREGUNTAS FRECUENTES ---------------- */
const faqs = [
  {
    q: "¿Necesito conocimientos previos?",
    a: "No. La formación está planteada para personas que empiezan desde cero. Los términos técnicos importantes se conservan, pero se explican con un lenguaje sencillo.",
  },
  {
    q: "¿Qué recibiré después del pago?",
    a: "Recibirás acceso para descargar el paquete digital formado por el curso, el cuaderno práctico, la guía de instrucciones y la guía para contratar profesionales.",
  },
  {
    q: "¿Los documentos se envían en papel?",
    a: "No. Es un producto exclusivamente digital. Podrás consultar los archivos en pantalla e imprimirlos para uso personal.",
  },
  {
    q: "¿Es una formación oficial de la OEPM?",
    a: "No. Es una formación privada e independiente basada principalmente en información pública y fuentes oficiales. No está organizada, certificada ni avalada por la OEPM.",
  },
  {
    q: "¿Sustituye a un agente de la propiedad industrial?",
    a: "No. Su finalidad es formativa. Te ayudará a comprender el proceso, preparar información y detectar cuándo conviene acudir a un profesional.",
  },
  {
    q: "¿La formación garantiza que se conceda una patente?",
    a: "No. La concesión depende de las características de cada invención, de los antecedentes existentes, del contenido de la solicitud y de la evaluación realizada por los organismos competentes.",
  },
  {
    q: "¿Puedo compartir los archivos?",
    a: "La compra permite el uso personal del material. No está permitida su reventa, publicación, reproducción masiva ni distribución a terceros.",
  },
  {
    q: "¿Cómo se realiza el pago y la descarga?",
    a: "El pago y la entrega digital se gestionan mediante Payhip. Después del pago recibirás las instrucciones para descargar los archivos.",
  },
  {
    q: "¿Puedo solicitar asesoramiento sobre mi invención?",
    a: "La compra no incluye asesoramiento técnico o jurídico personalizado. La formación contiene orientaciones para localizar y comparar profesionales cuando necesites ayuda.",
  },
  {
    q: "¿Los contenidos pueden actualizarse?",
    a: "Los procedimientos, tasas, formularios y criterios pueden cambiar. Cada documento debe mostrar su fecha o versión, y el usuario debe comprobar la información vigente en las fuentes oficiales antes de actuar.",
  },
];

export function Faq() {
  return (
    <Section id="preguntas" labelledBy="faq-titulo">
      <Reveal>
        <SectionHeading id="faq-titulo" eyebrow="Preguntas" title="Preguntas frecuentes" />
      </Reveal>
      <div className="mx-auto mt-10 max-w-3xl">
        <Accordion type="single" collapsible className="grid gap-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border px-5"
            >
              <AccordionTrigger className="text-navy text-left text-base font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

/* ---------------- ÚLTIMA LLAMADA ---------------- */
export function FinalCta() {
  return (
    <Section className="bg-mist/60" labelledBy="cta-final-titulo">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
        <h2 id="cta-final-titulo" className="font-display text-navy text-3xl font-semibold">
          Empieza comprendiendo antes de decidir
        </h2>
        <span className="gold-rule" aria-hidden="true" />
        <p className="text-muted-foreground text-base md:text-lg">
          Accede a los cuatro recursos, avanza a tu ritmo y utiliza la información para preparar
          mejor tus próximos pasos.
        </p>
        <CheckoutButton location="cta_final" className="w-full sm:w-auto">
          Acceder por 9,99 €
        </CheckoutButton>
        <p className="text-muted-foreground text-sm">
          Pago único · Producto digital · Uso personal
        </p>
      </div>
    </Section>
  );
}

/* ---------------- AVISO DE INDEPENDENCIA ---------------- */
export function Independence() {
  return (
    <Section labelledBy="aclaracion-titulo">
      <div className="border-gold/50 bg-card mx-auto max-w-4xl rounded-2xl border-l-4 p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <div className="flex items-center gap-3">
          <Scale aria-hidden="true" className="text-tech size-5" />
          <h2 id="aclaracion-titulo" className="font-display text-navy text-xl font-semibold">
            Una aclaración importante
          </h2>
        </div>
        <p className="text-muted-foreground mt-4 text-base leading-relaxed">
          Esta formación tiene una finalidad exclusivamente educativa e informativa. Es una
          iniciativa privada e independiente basada principalmente en fuentes públicas de la{" "}
          <a
            href={OEPM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tech font-medium underline underline-offset-4"
          >
            Oficina Española de Patentes y Marcas
          </a>{" "}
          y de otros organismos oficiales. No está organizada, certificada, patrocinada ni avalada
          por la OEPM. No constituye asesoramiento jurídico, técnico ni profesional, ni sustituye el
          análisis particular de una invención por una persona cualificada.
        </p>
        <p className="text-muted-foreground mt-4 text-base leading-relaxed">
          La normativa, las tasas, los formularios y los procedimientos pueden cambiar. Antes de
          presentar documentación o tomar decisiones, consulta siempre la información oficial
          vigente.
        </p>
      </div>
    </Section>
  );
}

/* ---------------- MODAL LEGAL PENDIENTE ---------------- */
function LegalModal({ label }: { label: string }) {
  return (
    <Dialog>
      <DialogTrigger className="text-primary-foreground/75 hover:text-gold-light cursor-pointer rounded text-base transition-colors">
        {label}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
          <DialogDescription>Pendiente de completar antes de publicar.</DialogDescription>
        </DialogHeader>
        <p className="text-muted-foreground text-base leading-relaxed">
          Este apartado se publicará con el texto legal definitivo. No se incluye información
          fiscal, domicilios, identificación del responsable ni condiciones jurídicas hasta que sean
          facilitadas.
        </p>
      </DialogContent>
    </Dialog>
  );
}

/* ---------------- PIE ---------------- */
export function Footer() {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <footer className="bg-navy-deep px-5 py-14 sm:px-8">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="font-display text-primary-foreground text-base font-semibold tracking-[0.12em]">
            {brand.name}
          </p>
          <p className="text-primary-foreground/70 mt-3 max-w-md text-base">
            Formación práctica e independiente sobre patentes y modelos de utilidad en España.
          </p>
          {/* ⚠️ SUSTITUIR por el correo real de contacto */}
          <p className="text-primary-foreground/70 mt-4 text-base">{brand.email}</p>
        </div>

        <nav aria-label="Enlaces del pie">
          <ul className="grid gap-2.5">
            <li>
              <LegalModal label="Aviso legal" />
            </li>
            <li>
              <LegalModal label="Privacidad" />
            </li>
            <li>
              <LegalModal label="Condiciones de compra" />
            </li>
            <li>
              <LegalModal label="Contacto" />
            </li>
            <li>
              <a
                href={OEPM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/75 hover:text-gold-light rounded text-base transition-colors"
              >
                OEPM
              </a>
            </li>
            <li>
              <a
                href="#precio"
                className="text-primary-foreground/75 hover:text-gold-light rounded text-base transition-colors"
              >
                Comprar
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-primary-foreground/15 mx-auto mt-10 w-full max-w-[1200px] border-t pt-6">
        <p className="text-primary-foreground/60 text-sm">
          © {year} {brand.legalName}. Todos los derechos reservados.
        </p>
        <p className="text-primary-foreground/60 mt-2 text-sm">
          Pago y entrega digital gestionados mediante Payhip.
        </p>
        <p className="text-gold-light/90 mt-2 text-sm">
          Textos legales y datos de contacto pendientes de completar antes de la publicación
          definitiva.
        </p>
      </div>
    </footer>
  );
}