# TU RUTA INVENTIVA

Landing de una sola página, en español, para presentar y vender una formación
práctica e independiente sobre **patentes y modelos de utilidad en España**.

Precio único mostrado en toda la web: **9,99 €**.

## Los cuatro recursos del paquete

1. **Curso completo** — conceptos esenciales, modalidades de protección y etapas del procedimiento español.
2. **Cuaderno práctico** — tablas, plantillas y listas de comprobación para aplicar lo aprendido.
3. **Guía de instrucciones** — cómo completar cada ejercicio, con ejemplos y errores frecuentes.
4. **Guía de profesionales independientes** — cómo elegir, entrevistar y comparar especialistas.

La formación es educativa e informativa, independiente de la OEPM, y no constituye
asesoramiento jurídico ni profesional.

## Configuración y elementos pendientes

- **Enlace de Payhip**: configurado mediante `PAYHIP_CHECKOUT_URL` en
  `src/config/site.ts`. Todos los CTA utilizan este único enlace.
- **Correo de contacto**: `brand.email` en `src/config/site.ts`. Vacío = no se muestra.
- **Identidad legal y textos legales**: aviso legal, privacidad y condiciones de compra.
  Los modales del pie explican que la compra aún no está activa; no contienen datos
  fiscales, domicilios ni nombres inventados.

## Dónde editar

| Qué                                      | Archivo                               |
| ---------------------------------------- | ------------------------------------- |
| Marca, precio, checkout, correo, dominio | `src/config/site.ts`                  |
| Portadas de los recursos                 | `src/config/covers.ts`                |
| Muestras interiores                      | `src/config/samples.ts`               |
| Secciones y copy                         | `src/components/landing/Sections.tsx` |
| SEO y datos estructurados                | `src/routes/index.tsx`                |

Las imágenes son WebP optimizados en `public/images`.

## Desarrollo

```sh
npm install
npm run dev
npm run lint
npm run build
```
