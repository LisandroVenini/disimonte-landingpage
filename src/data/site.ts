/**
 * Textos generales de la landing. Fuente: web/textos-web.md.
 * Lo marcado BORRADOR se reemplaza cuando estén los textos definitivos.
 */

export const marca = {
  nombre: "Di Simonte",
  ubicacion: "Posadas, Misiones",
  instagram: {
    usuario: "@disimonte",
    url: "https://www.instagram.com/disimonte",
  },
};

export const seo = {
  titulo: "Di Simonte · Pastas caseras y empanadas en Posadas",
  descripcion:
    "Sorrentinos y lasagna caseros por encargo, empanadas y canastitas para cualquier día. Hechos en familia en Posadas. Pedidos por WhatsApp.",
};

export const mensajeGeneral = "¡Hola Di Simonte! Quiero hacer un pedido.";

export const nav = [
  { href: "#pastas", texto: "Pastas" },
  { href: "#para-la-mano", texto: "Para la mano" },
  { href: "#para-picar", texto: "Para picar" },
  { href: "#arma-tu-pedido", texto: "Armá tu pedido" },
  { href: "#como-pedir", texto: "Cómo pedir" },
];

export const inicio = {
  titulo: "Di Simonte",
  frase: "Sin stock, con dedicación.",
  bajada:
    "Pastas caseras por encargo para el fin de semana y empanadas listas para cualquier día. Hechas en familia, en Posadas.",
  boton: "Pedir por WhatsApp",
  mensaje: mensajeGeneral,
};

// BORRADOR: el texto definitivo lo escribe Lisandro.
export const historia = {
  titulo: "Todo empezó en la mesa de la abuela.",
  texto:
    "Los domingos, sus manos llenas de harina no solo hacían pastas: armaban los recuerdos que hoy mueven este proyecto. Seguimos cocinando como en esa mesa, por encargo y con tiempo, porque una receta heredada no se apura.",
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
  nota: "Las pastas se piden con anticipación para el finde.",
  entrega: "No tenemos local: pasás a retirar o te lo enviamos. Zonas, días y costo de envío, a consultar por WhatsApp.",
  pago: "A consultar por WhatsApp.",
  boton: "Hacé tu pedido",
  mensaje: mensajeGeneral,
};

// BORRADOR: el texto definitivo lo escribe Lisandro.
export const cierre = {
  titulo: "Empanada Lovers",
  texto: "Gracias por sentarte a nuestra mesa. Nos vemos en la próxima tanda.",
  firma: "Hecho con dedicación por Milagros y Lisandro.",
  botonWhatsApp: "Pedir por WhatsApp",
  botonInstagram: "Seguinos en Instagram",
  mensaje: mensajeGeneral,
};
