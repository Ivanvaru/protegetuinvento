import { Mail, ShieldCheck } from "lucide-react";
import { brand, legalLinks, navLinks } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="border-gold/30 bg-primary-foreground/8 flex size-9 items-center justify-center rounded-lg border">
                <ShieldCheck className="text-gold size-4.5" />
              </span>
              <span className="font-display text-primary-foreground text-lg font-semibold">
                {brand.name}
              </span>
            </div>
            <p className="text-primary-foreground/60 mt-4 max-w-sm text-sm leading-relaxed">
              {brand.tagline}. Marca provisional: edítala en la configuración del sitio.
            </p>
          </div>

          <nav aria-label="Secciones">
            <p className="text-gold text-xs font-semibold tracking-[0.18em] uppercase">Secciones</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-primary-foreground/65 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-gold text-xs font-semibold tracking-[0.18em] uppercase">
              Legal y contacto
            </p>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-primary-foreground/65 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="text-primary-foreground/65 hover:text-primary-foreground inline-flex items-center gap-2 text-sm transition-colors"
                >
                  <Mail className="size-3.5" />
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-primary-foreground/10 mt-12 border-t pt-8">
          <p className="text-primary-foreground/50 text-xs leading-relaxed">
            Aviso: {brand.name} ofrece contenido formativo con finalidad educativa. La información
            publicada no constituye asesoramiento legal ni sustituye la intervención de un agente de
            la propiedad industrial o de un abogado especializado. Cada caso concreto debe valorarse
            de forma individual con un profesional.
          </p>
          <p className="text-primary-foreground/40 mt-4 text-xs">
            © {new Date().getFullYear()} {brand.name}. Enlaces legales y datos fiscales
            provisionales, pendientes de completar.
          </p>
        </div>
      </div>
    </footer>
  );
}