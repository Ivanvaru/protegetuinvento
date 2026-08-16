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
import { CoverPlaceholder, CoverImage } from "./Placeholder";
import { COVERS, getCover } from "@/config/covers";
import { SAMPLES } from "@/config/samples";
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
import { OEPM_URL, PRICE, brand, isCheckoutReady, legal } from "@/config/site";

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-navy-deep relative overflow-hidden px-5 py-16 sm:px-8 md:py-24"
    >
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
              <li
                key={item}
                className="text-primary-foreground/90 flex items-start gap-3 text-base"
              >
                <Check aria-hidden="true" className="text-gold mt-1 size-4 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="border-primary-foreground/15 mt-2 flex flex-wrap items-baseline gap-3 border-t pt-6">
            <span className="font-display text-primary-foreground text-4xl font-semibold">
              {PRICE}
            </span>
            <span className="text-primary-foreground/70 text-base">
              Pago único · Descarga digital
            </span>
          </div>

          <CheckoutButton location="hero" className="w-full sm:w-auto">
            Acceder al paquete completo por 9,99 €
          </CheckoutButton>
          <p className="text-primary-foreground/65 text-sm">
            {isCheckoutReady
              ? "Pago y descarga segura gestionados mediante Payhip."
              : "El pago y la entrega digital se gestionarán mediante Payhip. La compra se activará antes del lanzamiento."}
          </p>
          <p className="text-primary-foreground/60 max-w-md text-sm">
            Hemos fijado un precio de acceso reducido para facilitar que esta información llegue a
            más personas.
          </p>
        </div>

        {/* Composición editorial con las cuatro portadas */}
        <div className="grid w-full grid-cols-2 gap-4">
          {COVERS.map((c, i) => (
            <CoverImage
              key={c.key}
              src={c.src}
              alt={c.alt}
              priority={i === 0}
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
  { icon: Check, label: "Descarga digital" },
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
                {(() => {
                  const c = getCover(r.cover);
                  return c ? (
                    <CoverImage src={c.src} alt={c.alt} fit="cover" className="w-24 shrink-0" />
                  ) : (
                    <CoverPlaceholder label={r.cover} className="w-24 shrink-0 text-[0.7rem]" />
                  );
                })()}
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
          <div
            key={o}
            className="bg-card flex items-start gap-3 rounded-xl border border-border p-5"
          >
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
export function Samples() {
  return (
    <Section className="bg-mist/60" labelledBy="muestra-titulo">
      <Reveal>
        <SectionHeading
          id="muestra-titulo"
          eyebrow="Muestra interior"
          title="Una formación diseñada para aprender haciendo"
          description="Representaciones visuales de los diagramas, tablas, explicaciones y ejercicios que encontrarás en los cuatro recursos."
        />
      </Reveal>
      <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SAMPLES.map((s) => (
          <Dialog key={s.title}>
            <DialogTrigger className="focus-visible:ring-tech cursor-pointer rounded-xl text-left transition-transform hover:-translate-y-0.5">
              <CoverImage src={s.src} alt={s.alt} ratio="aspect-[4/3]" fit="cover" />
              <span className="text-navy mt-2 block text-sm font-semibold">{s.title}</span>
              <span className="text-tech mt-2 block text-sm font-medium">Ampliar muestra</span>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{s.title}</DialogTitle>
                <DialogDescription>Vista ampliada de la muestra interior.</DialogDescription>
              </DialogHeader>
              <CoverImage src={s.src} alt={s.alt} ratio="aspect-[4/3]" fit="contain" />
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
  "Entrega digital mediante Payhip.",
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
            {isCheckoutReady
              ? "Serás dirigido al pago seguro de Payhip. Después de completar la compra, recibirás el acceso a la descarga."
              : "La compra todavía no está activa. El pago y la entrega digital se gestionarán mediante Payhip y se activarán antes del lanzamiento."}
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

/* ---------------- INFORMACIÓN LEGAL ---------------- */
type LegalKey = "aviso" | "privacidad" | "condiciones" | "desistimiento" | "contacto";

const legalDocuments: Record<
  LegalKey,
  { label: string; intro: string; sections: Array<{ heading: string; paragraphs: string[] }> }
> = {
  aviso: {
    label: "Aviso legal",
    intro:
      "Este apartado identifica a la persona responsable del sitio y establece sus condiciones generales de utilización.",
    sections: [
      {
        heading: "Titular del sitio",
        paragraphs: [
          `Titular: ${legal.sellerName}. NIF: ${legal.nif}. Domicilio: ${legal.address}, ${legal.country}. Correo electrónico: ${legal.email}.`,
          `${brand.name} es la marca utilizada para presentar esta formación. No constituye una sociedad distinta de la persona titular indicada.`,
        ],
      },
      {
        heading: "Finalidad y carácter independiente",
        paragraphs: [
          "El sitio ofrece información y una formación digital sobre patentes y modelos de utilidad. Su finalidad es exclusivamente educativa e informativa.",
          "La iniciativa es privada e independiente. No está organizada, certificada, patrocinada ni avalada por la Oficina Española de Patentes y Marcas (OEPM), y no presta asesoramiento jurídico, técnico o profesional personalizado.",
        ],
      },
      {
        heading: "Propiedad intelectual",
        paragraphs: [
          "Los textos, documentos, ilustraciones, tablas, diagramas, diseño y demás contenidos propios están protegidos por la normativa de propiedad intelectual. La compra concede únicamente una licencia de uso personal y no exclusiva.",
          "No está permitida la reventa, distribución, publicación, cesión a terceros, modificación para su comercialización ni reproducción masiva de los materiales sin autorización escrita.",
        ],
      },
      {
        heading: "Responsabilidad y enlaces externos",
        paragraphs: [
          "Se procura que la información sea clara y esté basada principalmente en fuentes oficiales, pero las normas, tasas, formularios, criterios y procedimientos pueden cambiar. Antes de presentar una solicitud o tomar una decisión, debe comprobarse la información oficial vigente.",
          "Los enlaces a la OEPM, Payhip u otros sitios externos se facilitan como referencia. Cada tercero es responsable de sus contenidos, disponibilidad y políticas.",
        ],
      },
      {
        heading: "Legislación aplicable",
        paragraphs: [
          "Este sitio se rige por la legislación española, sin perjuicio de los derechos imperativos que correspondan a consumidores y usuarios por razón de su residencia.",
          `Última actualización: ${legal.lastUpdated}.`,
        ],
      },
    ],
  },
  privacidad: {
    label: "Política de privacidad",
    intro:
      "Esta política explica qué datos pueden tratarse al utilizar el sitio, contactar con el vendedor o adquirir el producto.",
    sections: [
      {
        heading: "Responsable del tratamiento",
        paragraphs: [
          `Responsable: ${legal.sellerName}. NIF: ${legal.nif}. Dirección: ${legal.address}, ${legal.country}. Contacto: ${legal.email}.`,
        ],
      },
      {
        heading: "Datos y finalidades",
        paragraphs: [
          "Si contactas por correo electrónico, se tratarán los datos que facilites para responder a tu consulta y conservar el historial estrictamente necesario.",
          "Cuando compras, Payhip y el proveedor de pago seleccionado procesan los datos necesarios para gestionar el cobro, los impuestos, el recibo y la descarga. El vendedor recibe la información básica del pedido necesaria para atenderlo, pero no accede a tus credenciales ni a los datos completos del medio de pago.",
        ],
      },
      {
        heading: "Base jurídica y conservación",
        paragraphs: [
          "Las bases jurídicas pueden ser la aplicación de medidas precontractuales, la ejecución de la compra, el cumplimiento de obligaciones legales y, cuando corresponda, tu consentimiento.",
          "Los datos se conservarán durante el tiempo necesario para responder, gestionar la compra y cumplir las obligaciones fiscales, contables, de consumo o de defensa ante posibles reclamaciones. Después se suprimirán o bloquearán conforme a la normativa.",
        ],
      },
      {
        heading: "Destinatarios y servicios externos",
        paragraphs: [
          "Los datos podrán ser tratados por proveedores necesarios para el funcionamiento del servicio, especialmente Payhip, PayPal y los servicios técnicos de alojamiento. Cada proveedor aplica sus propias condiciones y política de privacidad.",
          "Algunos proveedores pueden prestar servicios desde fuera del Espacio Económico Europeo. En esos casos deberán utilizar los mecanismos de garantía exigidos por la normativa aplicable.",
        ],
      },
      {
        heading: "Derechos",
        paragraphs: [
          `Puedes solicitar acceso, rectificación, supresión, oposición, limitación o portabilidad escribiendo a ${legal.email} e indicando el derecho que deseas ejercer. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos.`,
          "No envíes información confidencial sobre una invención mediante el formulario o correo de contacto. La compra no crea una relación de confidencialidad ni un encargo profesional.",
        ],
      },
      {
        heading: "Cambios",
        paragraphs: [
          `Esta política puede actualizarse para reflejar cambios legales o técnicos. Última actualización: ${legal.lastUpdated}.`,
        ],
      },
    ],
  },
  condiciones: {
    label: "Condiciones de compra y descarga",
    intro:
      "Estas condiciones regulan la adquisición del paquete digital Tu Ruta Inventiva a través de Payhip.",
    sections: [
      {
        heading: "Vendedor y producto",
        paragraphs: [
          `El vendedor es ${legal.sellerName}, con NIF ${legal.nif}, domicilio en ${legal.address}, ${legal.country}, y correo ${legal.email}.`,
          "El producto es una formación digital compuesta por cuatro recursos principales y materiales complementarios. No incluye documentos impresos, representación ante la OEPM, redacción de solicitudes ni asesoramiento individual.",
        ],
      },
      {
        heading: "Precio y contratación",
        paragraphs: [
          `El precio mostrado es ${PRICE}, con los impuestos aplicables incluidos cuando así se indique en el checkout. Antes de confirmar el pago, Payhip muestra el importe total.`,
          "El pago, la confirmación del pedido, el recibo y la entrega digital se gestionan mediante Payhip y el proveedor de pago disponible. La compra queda formalizada cuando el pago es confirmado.",
        ],
      },
      {
        heading: "Entrega y requisitos técnicos",
        paragraphs: [
          "Tras la compra, Payhip muestra una página de descarga y envía al correo utilizado en el checkout un recibo con un enlace personal. El comprador debe introducir correctamente su dirección de correo y conservar el recibo.",
          "El comprador necesita conexión a internet, espacio de almacenamiento y software capaz de abrir archivos ZIP, PDF y DOCX. Si el enlace o los archivos presentan un error, puede solicitar asistencia en el correo de contacto.",
        ],
      },
      {
        heading: "Licencia de uso",
        paragraphs: [
          "La compra concede a una sola persona una licencia personal, no exclusiva y no transferible para consultar e imprimir los materiales para su propio uso.",
          "No está permitido compartir públicamente los archivos, revenderlos, subirlos a plataformas, distribuir copias, eliminar avisos de autoría ni utilizarlos para crear un producto comercial sustancialmente equivalente.",
        ],
      },
      {
        heading: "Contenido y responsabilidad",
        paragraphs: [
          "La formación no garantiza la patentabilidad de una invención, la admisión de una solicitud ni la concesión de una patente o modelo de utilidad.",
          "Corresponde al comprador comprobar las fuentes oficiales vigentes y decidir cuándo necesita la revisión de un agente de la propiedad industrial, abogado, técnico u otro profesional cualificado.",
        ],
      },
      {
        heading: "Incidencias, conformidad y reclamaciones",
        paragraphs: [
          `Las incidencias deben comunicarse a ${legal.email}, indicando el correo de compra y una descripción del problema, sin incluir información confidencial sobre una invención.`,
          "Si el contenido no puede descargarse, está dañado o no coincide con lo anunciado, se ofrecerá una solución adecuada conforme a la normativa aplicable, como restablecer el acceso, sustituir el archivo o, cuando proceda, reembolsar el importe.",
        ],
      },
    ],
  },
  desistimiento: {
    label: "Política de desistimiento",
    intro:
      "Esta política explica el derecho de desistimiento aplicable a la descarga inmediata de contenido digital.",
    sections: [
      {
        heading: "Regla general",
        paragraphs: [
          "En las compras a distancia, los consumidores disponen con carácter general de catorce días naturales para desistir, salvo que resulte aplicable una excepción legal.",
        ],
      },
      {
        heading: "Contenido digital de descarga inmediata",
        paragraphs: [
          "Cuando el contenido digital no se entrega en un soporte material, el derecho de desistimiento puede perderse una vez iniciada la ejecución si el comprador ha consentido expresamente que la descarga comience durante el plazo de desistimiento, ha reconocido que con ello pierde ese derecho y ha recibido la confirmación exigida legalmente.",
          "La mera inclusión de esta cláusula no sustituye ese consentimiento expreso. Si no se cumplen todos los requisitos legales, el comprador conserva los derechos que le correspondan.",
        ],
      },
      {
        heading: "Falta de conformidad e incidencias",
        paragraphs: [
          "La pérdida del derecho de desistimiento no elimina los derechos del consumidor cuando el archivo sea defectuoso, no pueda descargarse o el contenido no se corresponda con lo anunciado.",
          `Para comunicar un desistimiento o una incidencia, escribe a ${legal.email} indicando el correo utilizado en la compra y el número de pedido. No incluyas datos técnicos confidenciales de tu invención.`,
        ],
      },
    ],
  },
  contacto: {
    label: "Contacto",
    intro:
      "Utiliza este canal para consultas sobre la compra, el pago, el correo de entrega o la descarga de los archivos.",
    sections: [
      {
        heading: "Correo de atención",
        paragraphs: [
          `Correo electrónico: ${legal.email}.`,
          "Para localizar un pedido, indica el correo utilizado durante la compra y, si lo tienes, el número de pedido. No envíes contraseñas, datos completos de pago ni documentación confidencial sobre una invención.",
        ],
      },
      {
        heading: "Alcance de la atención",
        paragraphs: [
          "El contacto incluido con la compra cubre incidencias técnicas y administrativas relacionadas con el producto digital.",
          "No incluye consultas sobre patentabilidad, estrategias de protección, redacción de reivindicaciones, valoración de una invención o asesoramiento jurídico y técnico personalizado.",
        ],
      },
    ],
  },
};

function LegalModal({ kind }: { kind: LegalKey }) {
  const document = legalDocuments[kind];

  return (
    <Dialog>
      <DialogTrigger className="text-primary-foreground/75 hover:text-gold-light cursor-pointer rounded text-base transition-colors">
        {document.label}
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] max-w-3xl overflow-hidden">
        <DialogHeader>
          <DialogTitle>{document.label}</DialogTitle>
          <DialogDescription>{document.intro}</DialogDescription>
        </DialogHeader>
        <div className="max-h-[62vh] space-y-6 overflow-y-auto pr-3">
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="text-navy text-base font-semibold">{section.heading}</h3>
              <div className="mt-2 space-y-2">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-muted-foreground text-sm leading-relaxed sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
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
          {/* El correo se muestra automáticamente cuando se configure en src/config/site.ts */}
          {brand.email ? (
            <p className="text-primary-foreground/70 mt-4 text-base">
              <a
                className="hover:text-gold-light underline underline-offset-4"
                href={`mailto:${brand.email}`}
              >
                {brand.email}
              </a>
            </p>
          ) : null}
        </div>

        <nav aria-label="Enlaces del pie">
          <ul className="grid gap-2.5">
            {(
              ["aviso", "privacidad", "condiciones", "desistimiento", "contacto"] as LegalKey[]
            ).map((kind) => (
              <li key={kind}>
                <LegalModal kind={kind} />
              </li>
            ))}
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
          {isCheckoutReady
            ? "Pago y entrega digital gestionados mediante Payhip."
            : "La compra todavía no está activa: el pago y la entrega digital se gestionarán mediante Payhip."}
        </p>
        <p className="text-gold-light/90 mt-2 text-sm">
          Venta, pago y entrega digital gestionados mediante Payhip. Consulta las condiciones de
          compra antes de adquirir el producto.
        </p>
      </div>
    </footer>
  );
}
