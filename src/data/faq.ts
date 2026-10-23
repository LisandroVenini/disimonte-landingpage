/** Preguntas frecuentes. Fuente: web/textos-web.md. */

export interface Pregunta {
  pregunta: string;
  respuesta: string;
}

export const preguntasFrecuentes = {
  titulo: "Preguntas frecuentes.",
  boton: "Escribinos",
  mensaje: "¡Hola Di Simonte! Tengo una consulta.",
};

export const preguntas: Pregunta[] = [
  {
    pregunta: "¿Cómo cocino los sorrentinos?",
    respuesta: "Hervís agua con sal, los cocinás de 5 a 7 minutos y los retirás con espumadera.",
  },
  { pregunta: "¿Cuánto duran en el freezer?", respuesta: "Hasta 2 meses congelados." },
  { pregunta: "¿Las masas tienen colorantes?", respuesta: "No. Cada color sale de ingredientes naturales." },
  {
    pregunta: "¿Cuándo hay pastas?",
    respuesta:
      "Un fin de semana sí y otro no, por encargo y con cupos limitados. Avisamos en Instagram cuando abren los pedidos.",
  },
  { pregunta: "¿Tienen local?", respuesta: "No. Trabajamos por pedido: pasás a retirar o te lo enviamos." },
  {
    pregunta: "¿Hacen envíos? ¿A qué zonas?",
    respuesta: "Sí. Zonas, días y costo de envío, a consultar por WhatsApp.",
  },
  { pregunta: "¿Cómo se paga?", respuesta: "Consultanos las formas de pago por WhatsApp." },
];
