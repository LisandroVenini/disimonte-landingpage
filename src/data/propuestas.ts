/**
 * Propuestas de "Armá tu pedido". Fuente: web/textos-web.md.
 * BORRADOR: nombres de ejemplo; las cantidades se definen antes de publicar.
 * Oculta hasta que se definan los combos: no tocar sus textos ni mensajes.
 */
import type { ImageMetadata } from "astro";

import fotoDomingo from "../assets/fotos/armatupedido1.png";
import fotoPartido from "../assets/fotos/armatupedido2.png";
import fotoFreezer from "../assets/fotos/freezer.png";

export interface Propuesta {
  id: string;
  nombre: string;
  paraQue: string;
  incluye: string;
  mensaje: string;
  foto: ImageMetadata;
  alt: string;
}

export const armaTuPedido = {
  /** Para reactivar la sección: pasar a true y volver a sumar el ítem en `nav` (site.ts). */
  visible: false,
  titulo: "Armá tu pedido.",
  bajada: "Tres formas de pedir, según el plan que tengas.",
  boton: "Quiero este",
};

export const propuestas: Propuesta[] = [
  {
    id: "domingo",
    nombre: "Domingo en familia",
    paraQue: "El almuerzo del finde",
    incluye: "24 sorrentinos (dos sabores a elección), 1 lasagna y 4 focaccias",
    mensaje: "¡Hola Di Simonte! Quiero el Domingo en familia. ¿Qué sabores salen este finde?",
    foto: fotoDomingo,
    alt: "Mesa de madera con un plato de sorrentinos, focaccias y una tabla de quesos",
  },
  {
    id: "partido",
    nombre: "Noche de partido",
    paraQue: "Comer con amigos frente a la tele",
    incluye: "12 empanadas y 6 canastitas surtidas",
    mensaje: "¡Hola Di Simonte! Quiero la Noche de partido. ¿Qué empanadas y canastitas hay?",
    foto: fotoPartido,
    alt: "Bandeja de empanadas y canastitas sobre una mesa de madera",
  },
  {
    id: "freezer",
    nombre: "Freezer lleno",
    paraQue: "Tener resuelta la semana",
    incluye: "12 empanadas, 6 canastitas y 2 pizzas para guardar y hornear cuando quieras",
    mensaje: "¡Hola Di Simonte! Quiero el Freezer lleno. ¿Qué tienen disponible?",
    foto: fotoFreezer,
    alt: "Freezer ordenado con paquetes listos para guardar",
  },
];
