import { Button, type ButtonProps } from "@/components/ui/button";
import { CHECKOUT_PENDING_LABEL, PAYHIP_CHECKOUT_URL, isCheckoutReady } from "@/config/site";
import { CHECKOUT_EVENT, trackEvent } from "@/lib/track";

/**
 * Único punto de salida hacia el checkout de Payhip.
 * Mientras PAYHIP_CHECKOUT_URL esté vacío, el botón se muestra desactivado.
 * Al configurar una URL válida recupera automáticamente su texto y su enlace.
 */
export function CheckoutButton({
  children,
  location,
  className,
  variant = "gold",
  size = "xl",
}: {
  children: React.ReactNode;
  /** identificador del bloque desde el que se pulsa (para el evento local) */
  location: string;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}) {
  if (!isCheckoutReady) {
    return (
      <Button variant={variant} size={size} className={className} disabled>
        {CHECKOUT_PENDING_LABEL}
      </Button>
    );
  }

  return (
    <Button variant={variant} size={size} className={className} asChild>
      <a href={PAYHIP_CHECKOUT_URL} onClick={() => trackEvent(CHECKOUT_EVENT, { location })}>
        {children}
      </a>
    </Button>
  );
}
