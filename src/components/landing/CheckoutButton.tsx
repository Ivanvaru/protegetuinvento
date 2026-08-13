import { Button, type ButtonProps } from "@/components/ui/button";
import { PAYHIP_CHECKOUT_URL } from "@/config/site";
import { CHECKOUT_EVENT, trackEvent } from "@/lib/track";

/**
 * Único punto de salida hacia el checkout de Payhip.
 * Todos los CTA de compra usan este componente.
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
  return (
    <Button variant={variant} size={size} className={className} asChild>
      <a
        href={PAYHIP_CHECKOUT_URL}
        onClick={() => trackEvent(CHECKOUT_EVENT, { location })}
      >
        {children}
      </a>
    </Button>
  );
}