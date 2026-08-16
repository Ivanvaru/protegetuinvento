/**
 * ============================================================
 *  CONFIGURACIÓN EDITABLE DE LA LANDING
 *  Aquí se centralizan: enlace de Payhip, correo de contacto,
 *  marca visible y dominio del sitio.
 * ============================================================
 */

/* URL activa del producto en Payhip. Todos los CTA de compra utilizan
   este único enlace para mantener el recorrido de compra coherente. */
export const PAYHIP_CHECKOUT_URL = "";

/** true solo cuando PAYHIP_CHECKOUT_URL es una URL http/https válida. */
export const isCheckoutReady = /^https?:\/\/\S+$/.test(PAYHIP_CHECKOUT_URL.trim());

/** Texto de los CTA mientras la compra no está activa. */
export const CHECKOUT_PENDING_LABEL = "Compra disponible próximamente";

/** Dominio provisional del sitio (canonical, og:url, sitemap). */
export const SITE_URL = "https://protegetuinvento.lovable.app";

export const brand = {
  name: "TU RUTA INVENTIVA",
  claim: "Formación práctica e independiente",
  productName: "Patentes y modelos de utilidad en España",
  productSubtitle: "Formación práctica para comprender el proceso desde cero",
  purpose:
    "Aprende a entender, preparar y organizar el proceso con criterio, y descubre cuándo necesitas ayuda profesional.",
  /* ⚠️ PENDIENTE: cuando exista un correo real, escribirlo aquí y se mostrará en el pie. */
  email: "",
  /* Marca visible en el aviso de copyright (no es una identidad fiscal). */
  legalName: "TU RUTA INVENTIVA",
};

export const legal = {
  /* Datos ficticios para previsualización. No usar para iniciar ventas. */
  isDemo: true,
  demoNotice:
    "DATOS DE DEMOSTRACIÓN. TU RUTA INVENTIVA, S.L. no está constituida ni inscrita y esta información no identifica a un vendedor real.",
  sellerName: "TU RUTA INVENTIVA, S.L. (SOCIEDAD FICTICIA)",
  nif: "B-00000000 (NIF FICTICIO Y NO VÁLIDO)",
  address: "Calle Ejemplo 00, 00000 Ciudad (DIRECCIÓN FICTICIA)",
  email: "contacto@turutainventiva.example",
  country: "España",
  registry: "Sociedad ficticia no inscrita en el Registro Mercantil.",
  lastUpdated: "16 de agosto de 2026",
};

export const PRICE = "9,99 €";
export const PRICE_AMOUNT = "9.99";

export const OEPM_URL = "https://www.oepm.es/";

export const navLinks = [
  { label: "Contenido", href: "#contenido" },
  { label: "Recursos", href: "#recursos" },
  { label: "Preguntas", href: "#preguntas" },
];
