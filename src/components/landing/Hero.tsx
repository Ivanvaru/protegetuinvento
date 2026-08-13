import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "7", label: "módulos prácticos" },
  { value: "0", label: "jerga innecesaria" },
  { value: "100%", label: "a tu ritmo" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 md:pt-40 md:pb-28">
      {/* Elementos visuales abstractos: red de innovación / escudo de protección */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-electric-soft/70 absolute -top-40 -right-24 size-[28rem] rounded-full blur-3xl" />
        <div className="bg-gold-soft/70 absolute top-40 -left-32 size-80 rounded-full blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="currentColor" strokeWidth="1" className="text-navy" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-start gap-7">
          <span className="border-navy/12 text-navy inline-flex items-center gap-2 rounded-full border bg-card px-3.5 py-1.5 text-xs font-medium shadow-[var(--shadow-soft)]">
            <Sparkles className="size-3.5 text-gold" />
            Formación online sobre patentes y propiedad industrial
          </span>

          <h1 className="text-navy text-4xl leading-[1.08] font-semibold sm:text-5xl md:text-6xl">
            Convierte tu idea en un <span className="text-electric">activo protegido</span>
          </h1>

          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            Un programa claro y aplicado para emprendedores, inventores y equipos de innovación que
            necesitan entender cómo se protege una invención antes de gastar tiempo y dinero en el
            camino equivocado.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <a href="#precio">
                Acceder a la formación
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="outlineNavy" size="xl" asChild>
              <a href="#programa">Ver el programa</a>
            </Button>
          </div>

          <dl className="mt-2 flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-muted-foreground text-xs tracking-wide uppercase">{s.label}</dt>
                <dd className="font-display text-navy text-2xl font-semibold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Composición abstracta: capas de protección */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="bg-navy-gradient relative overflow-hidden rounded-[1.75rem] p-8 shadow-[var(--shadow-lift)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gold/60" />
            <p className="text-gold text-xs font-semibold tracking-[0.18em] uppercase">
              Ruta de protección
            </p>
            <ol className="mt-6 space-y-5">
              {[
                { n: "01", t: "Idea", d: "Definir qué es realmente invención" },
                { n: "02", t: "Anterioridades", d: "Comprobar si el camino está libre" },
                { n: "03", t: "Solicitud", d: "Redactar y presentar con criterio" },
                { n: "04", t: "Activo", d: "Explotar, licenciar o defender" },
              ].map((step) => (
                <li key={step.n} className="flex items-start gap-4">
                  <span className="text-gold/80 font-display mt-0.5 text-sm font-semibold">
                    {step.n}
                  </span>
                  <div className="border-primary-foreground/10 flex-1 border-b pb-4">
                    <p className="text-primary-foreground text-sm font-semibold">{step.t}</p>
                    <p className="text-primary-foreground/65 text-sm">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="border-gold/30 absolute -bottom-5 -left-5 -z-10 h-full w-full rounded-[1.75rem] border" />
        </div>
      </div>
    </section>
  );
}