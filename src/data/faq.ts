/**
 * Preguntas frecuentes. Fuente: "Cambios en página DiSimonte.md".
 * Primero lo que más se pregunta de un congelado: stock, conservantes, cocción y duración.
 */

export interface Pregunta {
  pregunta: string;
  respuesta: string;
  /** Link opcional debajo de la respuesta, a otra sección de la página. */
  link?: { href: string; texto: string };
}

export const preguntasFrecuentes = {
  titulo: "Preguntas frecuentes.",
  boton: "Escribinos",
  mensaje: "¡Hola Di Simonte! Tengo una consulta.",
};

export const preguntas: Pregunta[] = [
  {
    pregunta: "¿Siempre hay stock?",
    // BORRADOR
    respuesta: "Sí, trabajamos con stock congelado. Escribinos por WhatsApp y te confirmamos qué hay disponible.",
  },
  { pregunta: "¿Tienen conservantes?", respuesta: "No. Ninguno de nuestros productos lleva conservantes." },
  {
    pregunta: "¿Cómo cocino los sorrentinos?",
    respuesta: "Hervís agua con sal, los cocinás de 5 a 7 minutos y los retirás con espumadera.",
  },
  {
    pregunta: "¿Cómo cocino las empanadas, canastitas, lasagna y focaccias?",
    // BORRADOR
    respuesta:
      "Todo va directo del freezer al horno, sin descongelar. Empanadas y canastitas: al horno precalentado a 180°, de 20 a 25 minutos. Lasagna: al horno a 180-200°, de 20 a 25 minutos, hasta que borbotee y el queso se gratine. Focaccia: al horno precalentado a 180°, de 5 a 8 minutos: solo para que se caliente.",
  },
  { pregunta: "¿Cuánto duran en el freezer?", respuesta: "Hasta 2 meses congelados." },
  { pregunta: "¿Las masas tienen colorantes?", respuesta: "No. Cada color sale de ingredientes naturales." },
  { pregunta: "¿Hay pedido mínimo?", respuesta: "No, no hay mínimo de compra." },
  // BORRADOR
  { pregunta: "¿Tienen local?", respuesta: "No. Pasás a retirar o te lo enviamos." },
  {
    pregunta: "¿Hacen envíos? ¿A qué zonas?",
    respuesta: "Sí. Zonas, días y costo de envío, a consultar por WhatsApp.",
  },
  { pregunta: "¿Cómo se paga?", respuesta: "Pagás en efectivo o por transferencia." },
  {
    pregunta: "¿Puedo vender sus productos en mi kiosco o comercio?",
    // BORRADOR
    respuesta: "Sí. Escribinos por WhatsApp y te contamos cómo trabajar juntos.",
    link: { href: "#para-comercios", texto: "Ver ventas por mayor" },
  },
];
