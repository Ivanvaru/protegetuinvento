/**
 * Portadas reales de los cuatro recursos (WebP optimizado en /public/images).
 * Editar aquí si se sustituyen las imágenes.
 */
export type Cover = { key: string; label: string; src: string; alt: string };

export const COVERS: Cover[] = [
  {
    key: "Portada del curso",
    label: "Curso completo",
    src: "/images/portada-curso.webp",
    alt: "Portada del curso completo: composición abstracta azul marino con órbitas doradas que convergen en un punto de luz central.",
  },
  {
    key: "Portada del cuaderno",
    label: "Cuaderno práctico",
    src: "/images/portada-cuaderno-practico.webp",
    alt: "Portada del cuaderno práctico: iconos técnicos conectados por circuitos azules que confluyen en una marca de verificación dorada.",
  },
  {
    key: "Portada de la guía de instrucciones",
    label: "Guía de instrucciones",
    src: "/images/portada-guia-instrucciones.webp",
    alt: "Portada de la guía de instrucciones: recorrido de arcos iluminados con puntos de control marcados como correctos o incorrectos.",
  },
  {
    key: "Portada de la guía de profesionales",
    label: "Guía de profesionales independientes",
    src: "/images/portada-guia-profesionales.webp",
    alt: "Portada de la guía de profesionales independientes: estructura isométrica de bloques dorados sobre una retícula azul con verificaciones.",
  },
];

export function getCover(key: string): Cover | undefined {
  return COVERS.find((c) => c.key === key);
}
