import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

/** Portada real renderizada con proporción vertical consistente. */
export function CoverImage({
  src,
  alt,
  className,
  ratio = "aspect-[3/4]",
  priority = false,
  fit = "cover",
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <div
      className={cn(
        "border-tech/20 bg-navy-deep overflow-hidden rounded-xl border",
        ratio,
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        className={cn("h-full w-full", fit === "cover" ? "object-cover" : "object-contain")}
      />
    </div>
  );
}

/**
 * Marcador editorial para portadas y capturas interiores.
 * ⚠️ SUSTITUIR por las imágenes reales cuando estén disponibles.
 * No contiene maquetas inventadas ni texto simulado de los documentos.
 */
export function CoverPlaceholder({
  label,
  className,
  ratio = "aspect-[3/4]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Marcador de imagen pendiente: ${label}`}
      className={cn(
        "border-tech/25 bg-mist relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed p-4 text-center",
        ratio,
        className,
      )}
    >
      <span aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-40" />
      <ImageOff aria-hidden="true" className="text-tech/70 relative size-6" />
      <span className="text-navy relative text-sm font-semibold">{label}</span>
      <span className="text-muted-foreground relative text-xs">
        Imagen pendiente de aportar
      </span>
    </div>
  );
}