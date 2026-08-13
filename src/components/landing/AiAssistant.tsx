import { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { brand, offer } from "@/config/site";
import { cn } from "@/lib/utils";

type Msg = { id: number; from: "bot" | "user"; text: string };

/** Respuestas simuladas (solo frontend, sin backend ni claves API). */
const intents: { keys: string[]; answer: string }[] = [
  {
    keys: ["temario", "programa", "módulo", "modulos", "módulos", "contenido", "aprende"],
    answer:
      "El programa tiene 7 módulos: fundamentos, búsqueda de anterioridades, requisitos de patentabilidad, redacción y estrategia, proceso de solicitud, costes y plazos, y explotación de la patente. Puedes verlo con detalle en la sección «Programa».",
  },
  {
    keys: ["precio", "cuesta", "coste", "pagar", "pago", "€"],
    answer: `El precio provisional es de ${offer.price} en un pago único, con acceso inmediato y sin suscripciones. Tienes el desglose completo en la sección «Precio».`,
  },
  {
    keys: ["acceso", "acceder", "plataforma", "cuando empiezo", "empezar", "duración", "duracion", "tiempo"],
    answer:
      "El acceso es online e inmediato tras la compra, desde cualquier dispositivo y a tu ritmo. La mayoría de alumnos completa el programa en 2-3 semanas dedicando un par de horas por semana.",
  },
  {
    keys: ["garantía", "garantia", "devolución", "devolucion", "reembolso"],
    answer: `La garantía provisional es de ${offer.guaranteeDays} días: si el contenido no se ajusta a lo descrito, escríbenos dentro de ese plazo y gestionamos la devolución.`,
  },
  {
    keys: ["quién", "quien", "dirigido", "para mí", "para mi", "perfil", "sirve"],
    answer:
      "Está pensado para emprendedores con producto técnico, inventores independientes, equipos de I+D y perfiles que asesoran a startups o pymes industriales. Si buscas asesoramiento jurídico sobre un caso concreto, no es la opción adecuada.",
  },
  {
    keys: ["legal", "abogado", "asesor", "jurídic", "juridic"],
    answer:
      "Importante: la formación es educativa y no sustituye el asesoramiento legal. Te prepara para decidir con criterio y trabajar mejor con un agente de la propiedad industrial o un abogado especializado.",
  },
  {
    keys: ["contacto", "email", "correo", "hablar", "humano", "persona"],
    answer: `Puedes escribir al equipo en ${brand.email} y te responderá una persona.`,
  },
];

const suggestions = [
  "¿Qué incluye el temario?",
  "¿Cuál es el precio?",
  "¿Cómo accedo al curso?",
  "¿Hay garantía?",
  "¿A quién va dirigido?",
];

function reply(input: string): string {
  const q = input.toLowerCase();
  const hit = intents.find((i) => i.keys.some((k) => q.includes(k)));
  return (
    hit?.answer ??
    "Puedo ayudarte con el temario, el acceso, el precio, la garantía y el perfil al que va dirigida la formación. Si tu duda es distinta, escríbenos a " +
      brand.email +
      " y te contestará el equipo."
  );
}

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: 0,
      from: "bot",
      text: `Hola 👋 Soy el asistente virtual de ${brand.name}. Resuelvo dudas sobre el temario, el acceso, el precio, la garantía y a quién va dirigida la formación.`,
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [messages, typing, open]);

  const send = (text: string) => {
    const clean = text.trim().slice(0, 300);
    if (!clean) return;
    setMessages((m) => [...m, { id: Date.now(), from: "user", text: clean }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setMessages((m) => [...m, { id: Date.now() + 1, from: "bot", text: reply(clean) }]);
      setTyping(false);
    }, 550);
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar asistente virtual" : "Abrir asistente virtual"}
        className="bg-navy-gradient fixed right-4 bottom-4 z-50 flex items-center gap-2.5 rounded-full py-3.5 pr-5 pl-4 shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
      >
        {open ? (
          <X className="text-primary-foreground size-5" />
        ) : (
          <MessageCircle className="text-gold size-5" />
        )}
        <span className="text-primary-foreground text-sm font-medium">
          {open ? "Cerrar" : "Asistente IA"}
        </span>
      </button>

      {/* Panel de chat */}
      <div
        className={cn(
          "bg-card fixed right-3 bottom-20 z-50 flex w-[calc(100vw-1.5rem)] max-w-sm origin-bottom-right flex-col overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-lift)] transition-all duration-200 sm:right-6 sm:bottom-24",
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0",
        )}
        role="dialog"
        aria-label="Asistente virtual"
        aria-hidden={!open}
      >
        <div className="bg-navy-gradient flex items-center gap-3 px-4 py-3.5">
          <span className="bg-primary-foreground/10 border-gold/30 flex size-9 items-center justify-center rounded-full border">
            <Bot className="text-gold size-4.5" />
          </span>
          <div>
            <p className="text-primary-foreground text-sm font-semibold">Asistente virtual</p>
            <p className="text-primary-foreground/60 text-xs">
              Respuestas automáticas · no es una persona
            </p>
          </div>
        </div>

        <div className="flex max-h-[22rem] min-h-[14rem] flex-col gap-3 overflow-y-auto bg-muted/30 p-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                m.from === "bot"
                  ? "bg-card text-navy/85 self-start rounded-bl-sm border border-border"
                  : "bg-electric text-primary-foreground self-end rounded-br-sm",
              )}
            >
              {m.text}
            </div>
          ))}
          {typing ? (
            <div className="bg-card text-muted-foreground self-start rounded-2xl rounded-bl-sm border border-border px-3.5 py-2.5 text-sm">
              Escribiendo…
            </div>
          ) : null}
          <div ref={endRef} />
        </div>

        <div className="flex flex-wrap gap-2 border-t border-border px-4 pt-3">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => send(s)}
              className="border-electric/30 bg-electric-soft/50 text-navy hover:bg-electric-soft rounded-full border px-3 py-1.5 text-xs transition-colors"
            >
              {s}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 p-4"
        >
          <Input
            value={input}
            maxLength={300}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu pregunta…"
            aria-label="Escribe tu pregunta al asistente virtual"
            className="h-10"
          />
          <Button type="submit" variant="hero" size="icon" aria-label="Enviar mensaje">
            <Send className="size-4" />
          </Button>
        </form>
      </div>
    </>
  );
}