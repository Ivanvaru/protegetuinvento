/**
 * ============================================================
 *  CONFIGURACIÓN EDITABLE DE LA LANDING
 *  Aquí se centralizan: enlace de Payhip, correo de contacto,
 *  marca visible y dominio del sitio.
 * ============================================================
 */

/* ⚠️ PENDIENTE: pegar aquí la URL real del checkout de Payhip (https://...).
   Mientras esté vacía, todos los CTA se muestran desactivados. */
export const PAYHIP_CHECKOUT_URL = "";

/** true solo cuando PAYHIP_CHECKOUT_URL es una URL http/https válida. */
export const isCheckoutReady = /^https?:\/\/\S+$/.test(PAYHIP_CHECKOUT_URL.trim());

/** Texto de los CTA mientras la compra no está activa. */
export const CHECKOUT_PENDING_LABEL = "Compra disponible próximamente";

/** Dominio provisional del sitio (canonical, og:url, sitemap). */
export const SITE_URL = "https://protegetuinvento.lovable.app";

export const brand = {
  name: "PROTEGE TU INVENTO",
  claim: "Formación práctica e independiente",
  productName: "Patentes y modelos de utilidad en España",
  productSubtitle: "Formación práctica para comprender el proceso desde cero",
  purpose:
    "Aprende a entender, preparar y organizar el proceso con criterio, y descubre cuándo necesitas ayuda profesional.",
  /* ⚠️ PENDIENTE: cuando exista un correo real, escribirlo aquí y se mostrará en el pie. */
  email: "",
  /* Marca visible en el aviso de copyright (no es una identidad fiscal). */
  legalName: "PROTEGE TU INVENTO",
};

export const PRICE = "9,99 €";
export const PRICE_AMOUNT = "9.99";

export const OEPM_URL = "https://www.oepm.es/";

export const navLinks = [
  { label: "Contenido", href: "#contenido" },
  { label: "Recursos", href: "#recursos" },
  { label: "Preguntas", href: "#preguntas" },
];
