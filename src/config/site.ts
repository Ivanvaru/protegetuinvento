/**
 * ============================================================
 *  CONFIGURACIÓN EDITABLE DE LA LANDING
 *  Sustituye aquí: enlace de Payhip, correo de contacto,
 *  nombre o marca legal y textos legales.
 * ============================================================
 */

/* ⚠️ SUSTITUIR: pega aquí el enlace directo al checkout de Payhip.
   Mientras no exista, se usa "#comprar". Todos los botones de compra
   de la web consumen esta única constante. */
export const PAYHIP_CHECKOUT_URL = "#comprar";

/** true cuando PAYHIP_CHECKOUT_URL ya es un enlace real (http...). */
export const isCheckoutReady = /^https?:\/\//.test(PAYHIP_CHECKOUT_URL);

export const brand = {
  name: "PROTEGE TU INVENTO",
  claim: "Formación práctica e independiente",
  productName: "Patentes y modelos de utilidad en España",
  productSubtitle: "Formación práctica para comprender el proceso desde cero",
  purpose:
    "Aprende a entender, preparar y organizar el proceso con criterio, y descubre cuándo necesitas ayuda profesional.",
  /* ⚠️ SUSTITUIR por el correo real de contacto */
  email: "[CORREO_DE_CONTACTO]",
  /* ⚠️ SUSTITUIR por el nombre o marca que figurará en el aviso de copyright */
  legalName: "[NOMBRE_O_MARCA]",
};

export const PRICE = "9,99 €";
export const PRICE_AMOUNT = "9.99";

export const OEPM_URL = "https://www.oepm.es/";

export const navLinks = [
  { label: "Contenido", href: "#contenido" },
  { label: "Recursos", href: "#recursos" },
  { label: "Preguntas", href: "#preguntas" },
];