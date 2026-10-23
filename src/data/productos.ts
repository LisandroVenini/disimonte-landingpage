/**
 * Productos de la landing, sin precios. Fuente: web/textos-web.md.
 * Cambiar un sabor o una descripción es editar este archivo.
 */
import type { ImageMetadata } from "astro";

import fotoJamon from "../assets/fotos/sorrentino-jamon-queso.png";
import fotoCalabaza from "../assets/fotos/sorrentino-calabaza.png";
import fotoQuesoAzul from "../assets/fotos/sorrentino-roquefort.png";
import fotoVerdura from "../assets/fotos/sorrentino-espinaca.png";
import fotoBondiola from "../assets/fotos/sorrentino-bondiola.png";
import fotoLasagna from "../assets/fotos/lasagna.png";
import fotoEmpanada from "../assets/fotos/empanada.png";
import fotoCanastita from "../assets/fotos/canastita.png";
import fotoPizza from "../assets/fotos/pizza.png";
import fotoFocaccia from "../assets/fotos/focaccia.png";

export interface Sorrentino {
  id: string;
  nombre: string;
  /** Cómo se nombra el color de la masa: "Masa morada". */
  masa: string;
  /** Token de color de global.css (--color-sabor-*). */
  color: string;
  /** Color del texto encima del fondo, para pasar 4,5:1. */
  texto: "crema" | "tinta";
  descripcion: string;
  foto: ImageMetadata;
  alt: string;
}

export const pastas = {
  titulo: "Los domingos se heredan.",
  bajada:
    "Pastas por encargo, un fin de semana sí y otro no, con cupos limitados. Seguinos en Instagram para saber cuándo abren los pedidos.",
  nota: "Cada masa tiene su color, y todos salen de ingredientes naturales. Sin colorantes.",
  boton: "Pedir este sabor",
  mensaje: (sabor: string) =>
    `¡Hola Di Simonte! Quiero pedir sorrentinos de ${sabor.toLowerCase()}. ¿Cuándo es la próxima tanda?`,
};

export const sorrentinos: Sorrentino[] = [
  {
    id: "jamon",
    nombre: "Mozzarella y Jamón",
    masa: "Masa morada",
    color: "--color-sabor-jamon",
    texto: "crema",
    descripcion: "Mozzarella y jamón premium en partes iguales, ligados con una bechamel suave y cremosa.",
    foto: fotoJamon,
    alt: "Plato de sorrentinos de mozzarella y jamón",
  },
  {
    id: "calabaza",
    nombre: "Calabaza, Mozzarella y Nuez",
    masa: "Masa naranja",
    color: "--color-sabor-calabaza",
    texto: "tinta",
    descripcion: "Calabaza asada con nueces seleccionadas y mozzarella.",
    foto: fotoCalabaza,
    alt: "Sorrentinos de calabaza con hojas de salvia, uno abierto con el relleno a la vista",
  },
  {
    id: "queso-azul",
    nombre: "Ricota, Queso Azul y Nuez",
    masa: "Masa amarilla",
    color: "--color-sabor-queso-azul",
    texto: "tinta",
    descripcion: "Ricota suave, mozzarella, queso azul y nueces crujientes.",
    foto: fotoQuesoAzul,
    alt: "Plato de sorrentinos de ricota, queso azul y nuez",
  },
  {
    id: "verdura",
    nombre: "Verdura y Mozzarella",
    masa: "Masa verde",
    color: "--color-sabor-verdura",
    texto: "tinta",
    descripcion: "Hojas verdes frescas, ricota cremosa y mozzarella rallada.",
    foto: fotoVerdura,
    alt: "Plato de sorrentinos de verdura y mozzarella",
  },
  {
    id: "bondiola",
    nombre: "Bondiola Braseada",
    masa: "Masa marrón",
    color: "--color-sabor-bondiola",
    texto: "crema",
    descripcion:
      "Bondiola desmechada tras horas de fuego lento, con vegetales salteados y hierbas aromáticas.",
    foto: fotoBondiola,
    alt: "Plato de sorrentinos de bondiola braseada",
  },
];

export const lasagna = {
  nombre: "Lasagna de la casa",
  descripcion: "Masa artesanal, bolognesa y mozzarella, con salsa bechamel y parmesano.",
  boton: "Pedir lasagna",
  mensaje: "¡Hola Di Simonte! Quiero pedir una lasagna. ¿Cuándo es la próxima tanda?",
  foto: fotoLasagna,
  alt: "Lasagna gratinada con una porción servida en un plato",
};

export interface ItemCarta {
  nombre: string;
  descripcion: string;
}

export interface GrupoMano {
  id: "empanadas" | "canastitas" | "pizza";
  nombre: string;
  /** Nombre de la pieza en la bandeja, para lectores de pantalla. */
  pieza: string;
  nota?: string;
  foto: ImageMetadata;
  items: ItemCarta[];
}

export const paraLaMano = {
  titulo: "Para comer con la mano.",
  bajada: "Empanadas, canastitas y pizza, listas en el freezer para cualquier día de la semana.",
  boton: "Pedir para hoy",
  mensaje: "¡Hola Di Simonte! Quiero pedir empanadas, canastitas o pizza. ¿Qué hay disponible hoy?",
  grupos: [
    {
      id: "empanadas",
      nombre: "Empanadas",
      pieza: "Empanada",
      foto: fotoEmpanada,
      items: [
        {
          nombre: "Bondiola Braseada",
          descripcion: "Carne braseada a fuego lento, con un mix de verduras salteadas y hierbas aromáticas.",
        },
        { nombre: "Osobuco al Disco", descripcion: "Osobuco braseado con verduras y especias, en su jugo natural." },
      ],
    },
    {
      id: "canastitas",
      nombre: "Canastitas",
      pieza: "Canastita",
      foto: fotoCanastita,
      items: [
        { nombre: "Humita", descripcion: "Choclo natural, mozzarella y bechamel." },
        { nombre: "Verdura y Mozzarella", descripcion: "Verdura fresca con un corazón de mozzarella." },
        { nombre: "Mozzarella y Jamón", descripcion: "Mozzarella y jamón en partes iguales, ligados con una bechamel suave." },
        { nombre: "Caprese", descripcion: "Mozzarella, tomates concassé y albahaca fresca." },
      ],
    },
    {
      id: "pizza",
      nombre: "Pizza",
      pieza: "Pizza",
      nota: "Por ahora, la única.",
      foto: fotoPizza,
      // BORRADOR: descripción de ejemplo.
      items: [{ nombre: "Mozzarella", descripcion: "Masa casera, salsa de tomate y mozzarella." }],
    },
  ] satisfies GrupoMano[],
};

export const paraPicar = {
  titulo: "Para picar.",
  bajada: "Focaccias individuales, cada una con su topping. Para abrir la mesa o sumar a la picada.",
  boton: "Pedir focaccias",
  mensaje: "¡Hola Di Simonte! Quiero pedir focaccias. ¿Qué toppings hay esta semana?",
  foto: fotoFocaccia,
  alt: "Focaccia recién horneada con tomates, en su asadera",
};
