/**
 * Número de WhatsApp del negocio: código de país + área + número, sin "+"
 * ni espacios. Es el único lugar donde está escrito.
 */
export const WHATSAPP_NUMERO = "5493765397765";

/** Cómo se muestra el número en pantalla. */
export const WHATSAPP_VISIBLE = "376 539-7765";

/** Arma el link de wa.me con el mensaje ya escrito. */
export function waLink(mensaje: string, numero: string = WHATSAPP_NUMERO): string {
  const texto = mensaje.trim();
  const base = `https://wa.me/${numero}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}
