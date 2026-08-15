/**
 * Registro local y no invasivo de eventos.
 * No instala cookies ni herramientas de seguimiento de terceros:
 * solo emite un evento del navegador y un log en consola.
 */
export function trackEvent(name: string, detail: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dispatchEvent(new CustomEvent(name, { detail }));
    console.info(`[evento] ${name}`, detail);
  } catch {
    /* no-op */
  }
}

export const CHECKOUT_EVENT = "click_payhip_checkout";
