/**
 * Portadas reales de los cuatro recursos.
 * Editar aquí si se sustituyen las imágenes.
 */
import curso from "@/assets/portada-curso.png.asset.json";
import cuaderno from "@/assets/portada-cuaderno-practico.png.asset.json";
import instrucciones from "@/assets/portada-guia-instrucciones.png.asset.json";
import profesionales from "@/assets/portada-guia-profesionales.png.asset.json";

export type Cover = { key: string; label: string; src: string; alt: string };

export const COVERS: Cover[] = [
  {
    key: "Portada del curso",
    label: "Curso completo",
    src: curso.url,
    alt: "Portada del curso completo: composición abstracta azul marino con órbitas doradas que convergen en un punto de luz central.",
  },
  {
    key: "Portada del cuaderno",
    label: "Cuaderno práctico",
    src: cuaderno.url,
    alt: "Portada del cuaderno práctico: iconos técnicos conectados por circuitos azules que confluyen en una marca de verificación dorada.",
  },
  {
    key: "Portada de la guía de instrucciones",
    label: "Guía de instrucciones",
    src: instrucciones.url,
    alt: "Portada de la guía de instrucciones: recorrido de arcos iluminados con puntos de control marcados como correctos o incorrectos.",
  },
  {
    key: "Portada de la guía de profesionales",
    label: "Guía de profesionales independientes",
    src: profesionales.url,
    alt: "Portada de la guía de profesionales independientes: estructura isométrica de bloques dorados sobre una retícula azul con verificaciones.",
  },
];

export function getCover(key: string): Cover | undefined {
  return COVERS.find((c) => c.key === key);
}