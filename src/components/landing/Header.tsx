import { useEffect, useState } from "react";
import { Menu, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, navLinks } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="bg-navy-gradient flex size-9 items-center justify-center rounded-lg">
            <ShieldCheck className="size-4.5 text-gold" />
          </span>
          <span className="font-display text-navy text-lg font-semibold">{brand.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-navy relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="hero" size="default" className="hidden sm:inline-flex" asChild>
            <a href="#precio">Quiero empezar</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="text-navy hover:bg-secondary flex size-10 items-center justify-center rounded-lg transition-colors md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-5 pb-5 md:hidden">
          <nav className="flex flex-col py-2" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-navy border-b border-border/60 py-3 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button variant="hero" size="lg" className="mt-4 w-full" asChild>
            <a href="#precio" onClick={() => setOpen(false)}>
              Quiero empezar
            </a>
          </Button>
        </div>
      ) : null}
    </header>
  );
}