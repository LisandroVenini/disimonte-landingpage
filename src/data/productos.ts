/**
 * Productos de la landing, sin precios. Fuente: "Cambios en página DiSimonte.md".
 * Todo es congelado y con stock permanente, salvo la picaccia (por pedido).
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

export interface Coccion {
  producto: string;
  indicacion: string;
}

/** Cocción de sorrentinos: la usan la intro de pastas y la pregunta frecuente. */
export const coccionSorrentinos = {
  titulo: "Cómo se cocinan los sorrentinos",
  texto:
    "Hervís agua con sal, sumás los sorrentinos directo del freezer, sin descongelar, los cocinás de 8 a 10 minutos y los retirás con espumadera.",
  /** Versión de una línea para el celular. */
  corto: "Del freezer a la olla, de 8 a 10 minutos.",
};

export const pastas = {
  titulo: "Pastas congeladas con sabor a domingo.",
  bajada:
    "Sorrentinos y lasagna congelados, listos para cocinar cuando tengas ganas de pasta. Pedilos por WhatsApp.",
  pack: "Pack de 12 sorrentinos, de un solo sabor.",
  pista: "Bajá para recorrer los sabores",
  boton: "Pedir este sabor",
  packFicha: "Pack de 12 sorrentinos",
  mensaje: (sabor: string) =>
    `¡Hola Di Simonte! Quiero pedir un pack de 12 sorrentinos de ${sabor.toLowerCase()}. ¿Tienen disponible?`,
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
  // BORRADOR
  antetitulo: "Y para compartir",
  nombre: "Lasagna de la casa",
  descripcion: "Masa artesanal, bolognesa y mozzarella, con salsa bechamel y parmesano.",
  boton: "Pedir lasagna",
  mensaje: "¡Hola Di Simonte! Quiero pedir una lasagna. ¿Tienen disponible?",
  coccion: {
    titulo: "Cómo se cocina la lasagna",
    texto: "Sin descongelar, al horno a 180-200°, de 20 a 25 minutos, hasta que borbotee y el queso se gratine.",
  },
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
  // BORRADOR: "para hoy" prometía entrega en el día.
  boton: "Pedir por WhatsApp",
  mensaje: "¡Hola Di Simonte! Quiero pedir empanadas, canastitas o pizza. ¿Qué hay disponible hoy?",
  coccionTitulo: "Del freezer al horno",
  // La pizza no lleva instrucciones de cocción.
  coccion: [
    { producto: "Empanadas", indicacion: "Directo del freezer al horno precalentado a 180°, de 20 a 25 minutos." },
    { producto: "Canastitas", indicacion: "Directo del freezer al horno precalentado a 180°, de 20 a 25 minutos." },
  ] satisfies Coccion[],
  conservacion: "Se conservan hasta 2 meses en el freezer.",
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
  coccion: "Directo del freezer al horno precalentado a 180°, de 5 a 8 minutos: solo para que se caliente.",
  foto: fotoFocaccia,
  // BORRADOR
  alt: "Focaccia con tomates, en su asadera",
};

// BORRADOR: la única que se hace por pedido.
export const picaccia = {
  etiqueta: "Por pedido",
  nombre: "Picaccia",
  texto: "Picada y focaccia en una sola, para compartir. Se hace por pedido: escribinos con anticipación.",
  boton: "Pedir picaccia",
  mensaje: "¡Hola Di Simonte! Quiero pedir una picaccia. ¿Con cuánta anticipación tengo que encargarla?",
  // PENDIENTE: no se publica hasta tener el dato.
  pendiente: "Qué lleva, tamaño y con cuánta anticipación hay que pedirla.",
};
