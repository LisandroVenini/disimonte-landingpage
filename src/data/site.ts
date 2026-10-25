/**
 * Textos generales de la landing. Fuente: "Cambios en página DiSimonte.md"
 * (25/10/2026). Lo marcado BORRADOR todavía no está aprobado por el equipo.
 */
import fotoFreezer from "../assets/fotos/freezer.png";

export const marca = {
  nombre: "Di Simonte",
  ubicacion: "Posadas, Misiones",
  instagram: {
    usuario: "@disimonte",
    url: "https://www.instagram.com/disimonte",
  },
};

export const seo = {
  // BORRADOR
  titulo: "Di Simonte · Pastas y empanadas congeladas en Posadas",
  // BORRADOR
  descripcion:
    "Sorrentinos, lasagnas, empanadas, canastitas, pizzas y focaccias congeladas, hechas en familia en Posadas. Sin conservantes ni colorantes. Pedidos por WhatsApp.",
};

export const mensajeGeneral = "¡Hola Di Simonte! Quiero hacer un pedido.";

export const nav = [
  { href: "#pastas", texto: "Pastas" },
  { href: "#para-la-mano", texto: "Para la mano" },
  { href: "#para-picar", texto: "Para picar" },
  // "Armá tu pedido" vuelve cuando se reactiven los combos (ver propuestas.ts).
  { href: "#para-comercios", texto: "Para comercios" },
  { href: "#como-pedir", texto: "Cómo pedir" },
];

export const inicio = {
  titulo: "Los domingos se heredan. Ahora, todos los días.",
  bajada:
    "Sorrentinos, lasagnas, empanadas y más, congelados y listos cuando los quieras. Sin conservantes ni colorantes.",
  boton: "Pedir por WhatsApp",
  mensaje: mensajeGeneral,
};

// BORRADOR: la última oración del texto.
export const historia = {
  titulo: "Todo empezó en la mesa de la abuela.",
  texto:
    "Los domingos, sus manos llenas de harina no solo hacían pastas: armaban los recuerdos que hoy mueven este proyecto. Seguimos cocinando como en esa mesa, con tiempo, porque una receta heredada no se apura. Y ahora la dejamos lista en tu freezer para cualquier día.",
  personas: [
    { nombre: "Abuela", linea: "Las manos, la tradición y el domingo." },
    { nombre: "Milagros", linea: "Le dio color a la tradición: masas teñidas con ingredientes naturales." },
    { nombre: "Lisandro", linea: "Le dio vida a las harinas: técnica artesanal en cada repulgue." },
  ],
  boton: "Ver las pastas",
};

export const comoPedir = {
  titulo: "En tres pasos, como en casa.",
  pasos: [
    "Elegí lo que querés de la web.",
    "Escribinos por WhatsApp: el mensaje sale armado.",
    "Coordinamos el retiro o el envío y el pago.",
  ],
  entrega: "No tenemos local: pasás a retirar o te lo enviamos. Zonas, días y costo de envío, a consultar por WhatsApp.",
  pago: "Efectivo o transferencia.",
  minimo: "No hay mínimo de compra.",
  boton: "Hacé tu pedido",
  mensaje: mensajeGeneral,
};

// BORRADOR: título y texto.
export const cierre = {
  titulo: "Gracias por dejarnos sentar en tu mesa.",
  texto: "Cuando lo pruebes, mostranos tu plato: etiquetanos en Instagram @disimonte.",
  firma: "Hecho con dedicación por Milagros y Lisandro.",
  botonWhatsApp: "Pedir por WhatsApp",
  botonInstagram: "Seguinos en Instagram",
  mensaje: mensajeGeneral,
};

// BORRADOR: sección nueva para kioscos y comercios.
export const comercios = {
  etiqueta: "Ventas por mayor",
  titulo: "¿Tenés un kiosco o comercio? Vendé Di Simonte.",
  bajada: "Productos congelados, fáciles de guardar, que duran hasta 2 meses en el freezer.",
  puntos: ["Congelados y fáciles de guardar: hasta 2 meses en el freezer."],
  // PENDIENTE: no se publican hasta que el equipo los confirme.
  pendientes: [
    "Material para exhibir en el local (solo si el afiche ya está hecho).",
    "Condiciones y precios para revendedores, por WhatsApp.",
  ],
  boton: "Consultá por WhatsApp",
  mensaje: "¡Hola Di Simonte! Tengo un comercio y quiero consultar por ventas por mayor.",
  foto: fotoFreezer,
  alt: "Freezer ordenado con paquetes listos para guardar",
};
