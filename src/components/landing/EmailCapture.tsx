import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "./Section";

/* Validación en cliente. Cuando conectes un backend, envía este valor allí. */
const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Indica tu nombre (mínimo 2 caracteres)." })
    .max(80, { message: "El nombre es demasiado largo." }),
  email: z
    .string()
    .trim()
    .email({ message: "Introduce un email válido." })
    .max(160, { message: "El email es demasiado largo." }),
});

export function EmailCapture() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string | undefined; email?: string | undefined }>(
    {},
  );
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, email });
    if (!result.success) {
      const flat = result.error.flatten().fieldErrors;
      setErrors({ name: flat.name?.[0], email: flat.email?.[0] });
      return;
    }
    setErrors({});
    /* Estado de éxito local: aún no hay envío a servidor. */
    setDone(true);
  };

  return (
    <Section id="guia-gratuita">
      <div className="border-navy/10 bg-card relative overflow-hidden rounded-3xl border p-8 shadow-[var(--shadow-soft)] md:p-12">
        <div
          aria-hidden="true"
          className="bg-electric-soft/60 pointer-events-none absolute -top-24 -right-16 size-64 rounded-full blur-3xl"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-electric text-xs font-semibold tracking-[0.18em] uppercase">
              Antes de decidir
            </span>
            <h2 className="text-navy mt-4 text-3xl font-semibold">
              Recibe la guía inicial: 7 errores frecuentes al patentar
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Un documento breve y práctico para valorar si tu idea está en condiciones de
              protegerse. También te avisaremos cuando abramos nuevas sesiones de la formación.
            </p>
          </div>

          {done ? (
            <div className="border-electric/30 bg-electric-soft/40 flex flex-col items-start gap-3 rounded-2xl border p-8">
              <CheckCircle2 className="text-electric size-7" />
              <p className="text-navy text-lg font-semibold">¡Listo, {name.split(" ")[0]}!</p>
              <p className="text-navy/75 text-sm leading-relaxed">
                Hemos registrado tu solicitud en este dispositivo. En la versión final recibirás la
                guía en <span className="font-medium">{email}</span>.
              </p>
              <Button
                variant="outlineNavy"
                size="sm"
                className="mt-2"
                onClick={() => {
                  setDone(false);
                  setName("");
                  setEmail("");
                }}
              >
                Enviar otro email
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
              <div>
                <label htmlFor="capture-name" className="text-navy text-sm font-medium">
                  Nombre
                </label>
                <Input
                  id="capture-name"
                  value={name}
                  maxLength={80}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  aria-invalid={!!errors.name}
                  className="mt-1.5 h-11"
                />
                {errors.name ? (
                  <p className="text-destructive mt-1.5 text-xs">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="capture-email" className="text-navy text-sm font-medium">
                  Email
                </label>
                <Input
                  id="capture-email"
                  type="email"
                  value={email}
                  maxLength={160}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  aria-invalid={!!errors.email}
                  className="mt-1.5 h-11"
                />
                {errors.email ? (
                  <p className="text-destructive mt-1.5 text-xs">{errors.email}</p>
                ) : null}
              </div>
              <Button type="submit" variant="hero" size="xl" className="w-full">
                <Mail className="size-4" />
                Quiero la guía
              </Button>
              {/* Texto RGPD provisional: revisar con asesoría legal antes de publicar. */}
              <p className="text-muted-foreground text-xs leading-relaxed">
                Responsable: [Nombre o razón social]. Finalidad: enviarte la guía e información
                sobre la formación. Base jurídica: tu consentimiento. Puedes darte de baja en
                cualquier momento escribiendo a [email de contacto]. Más información en la política
                de privacidad.
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}