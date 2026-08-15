import { useEffect, useState } from "react";
import { brand, navLinks } from "@/config/site";
import { CheckoutButton } from "./CheckoutButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "bg-navy-deep sticky top-0 z-40 transition-shadow",
        scrolled ? "shadow-[var(--shadow-lift)]" : "",
      )}
    >
      <div className="border-gold/40 mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 border-b px-5 py-3 sm:px-8">
        <a
          href="#inicio"
          className="text-primary-foreground rounded-md leading-tight"
          aria-label={`${brand.name}. Ir al inicio`}
        >
          <span className="font-display block text-sm font-semibold tracking-[0.12em] sm:text-base">
            {brand.name}
          </span>
          <span className="text-primary-foreground/70 hidden text-xs sm:block">{brand.claim}</span>
        </a>

        <div className="flex items-center gap-6">
          <nav aria-label="Secciones de la página" className="hidden items-center gap-6 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-primary-foreground/85 hover:text-gold-light rounded text-base transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <CheckoutButton location="header" size="lg" className="shrink-0">
            Acceder por 9,99 €
          </CheckoutButton>
        </div>
      </div>
    </header>
  );
}
