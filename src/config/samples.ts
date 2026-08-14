/**
 * Muestras interiores (imágenes reales).
 * Editar aquí si se sustituyen las imágenes.
 */
import diagrama from "@/assets/muestra-diagrama-curso.png.asset.json";
import tabla from "@/assets/muestra-tabla-comparativa.png.asset.json";
import vocabulario from "@/assets/muestra-vocabulario.png.asset.json";
import ejercicio from "@/assets/muestra-ejercicio-cuaderno.png.asset.json";
import explicacion from "@/assets/muestra-explicacion-guia.png.asset.json";
import profesionales from "@/assets/muestra-comparar-profesionales.png.asset.json";

export type Sample = { title: string; src: string; alt: string };

export const SAMPLES: Sample[] = [
  {
    title: "Diagrama del curso",
    src: diagrama.url,
    alt: "Diagrama del curso: nodos azules conectados alrededor de un centro dorado que representa la idea protegida.",
  },
  {
    title: "Tabla comparativa",
    src: tabla.url,
    alt: "Tabla comparativa con encabezado azul y filas que contrastan opciones mediante marcas de color.",
  },
  {
    title: "Página de vocabulario",
    src: vocabulario.url,
    alt: "Página de vocabulario: libro abierto con un término destacado en dorado y definiciones en líneas azules.",
  },
  {
    title: "Ejercicio del cuaderno",
    src: ejercicio.url,
    alt: "Ejercicio del cuaderno: lista de verificación con una casilla marcada y un lápiz dorado apoyado en la hoja.",
  },
  {
    title: "Explicación de la guía",
    src: explicacion.url,
    alt: "Explicación de la guía: tres rutas de pasos que confluyen en una marca de verificación azul.",
  },
  {
    title: "Tabla para comparar profesionales",
    src: profesionales.url,
    alt: "Tabla para comparar profesionales: tres perfiles sobre una tabla de criterios con una verificación dorada.",
  },
];
