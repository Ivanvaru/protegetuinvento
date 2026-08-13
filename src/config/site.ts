/**
 * ============================================================
 *  CONFIGURACIÓN EDITABLE DEL SITIO
 *  Cambia aquí marca, precio, instructor, testimonios,
 *  contacto y enlaces legales. No hace falta tocar componentes.
 * ============================================================
 */

/* ---------- MARCA ---------- */
export const brand = {
  name: "Patentia Academy",
  tagline: "Formación en patentes para quien crea valor",
  /* Email de contacto (provisional) */
  email: "hola@patentia-academy.com",
};

/* ---------- NAVEGACIÓN (anclas) ---------- */
export const navLinks = [
  { label: "Programa", href: "#programa" },
  { label: "Para quién es", href: "#para-quien" },
  { label: "Instructor", href: "#instructor" },
  { label: "Precio", href: "#precio" },
  { label: "FAQ", href: "#faq" },
];

/* ---------- OFERTA / PRECIO (provisional) ---------- */
export const offer = {
  price: "297 €",
  priceNote: "Pago único · IVA incluido · Acceso inmediato",
  guaranteeDays: 14,
  includes: [
    "7 módulos en vídeo con casos prácticos reales del proceso de patentes",
    "Plantillas de búsqueda de anterioridades y checklist de patentabilidad",
    "Guía de costes y plazos por vía de protección (nacional, europea, PCT)",
    "Cuaderno de estrategia para preparar tu reunión con un agente de la propiedad industrial",
    "Actualizaciones del contenido incluidas durante 12 meses",
    "Acceso desde cualquier dispositivo, a tu ritmo",
  ],
};

/* ---------- INSTRUCTOR (contenido provisional: EDITAR) ---------- */
export const instructor = {
  name: "[Nombre del instructor]",
  role: "[Rol profesional — p. ej. responsable de propiedad industrial]",
  /* Sustituye estos párrafos por la biografía real. No añadimos
     credenciales inventadas: rellénalas tú con datos verificables. */
  bio: [
    "[Párrafo provisional 1: describe tu experiencia real trabajando con patentes, el tipo de proyectos que has acompañado y por qué creaste esta formación.]",
    "[Párrafo provisional 2: explica tu enfoque didáctico: qué aprenderá el alumno, con qué nivel de detalle y qué no vas a prometer.]",
  ],
  facts: [
    "[Dato verificable 1]",
    "[Dato verificable 2]",
    "[Dato verificable 3]",
  ],
};

/* ---------- TESTIMONIOS (PLACEHOLDERS: sustituir por reales) ---------- */
export const testimonials = [
  {
    quote:
      "[Testimonio de ejemplo] Antes de la formación no sabía distinguir entre patente y modelo de utilidad. Ahora entiendo qué protege cada figura y llegué a la reunión con el agente con las ideas claras.",
    author: "[Nombre]",
    role: "[Cargo · Sector]",
  },
  {
    quote:
      "[Testimonio de ejemplo] La parte de búsqueda de anterioridades nos ahorró tiempo y una solicitud que probablemente no habría prosperado.",
    author: "[Nombre]",
    role: "[Cargo · Sector]",
  },
  {
    quote:
      "[Testimonio de ejemplo] Lo más útil fue el módulo de costes y plazos: pudimos planificar la inversión de protección con criterio.",
    author: "[Nombre]",
    role: "[Cargo · Sector]",
  },
];

/* ---------- ENLACES LEGALES (provisionales) ---------- */
export const legalLinks = [
  { label: "Aviso legal", href: "#" },
  { label: "Política de privacidad", href: "#" },
  { label: "Política de cookies", href: "#" },
  { label: "Términos de compra", href: "#" },
];
