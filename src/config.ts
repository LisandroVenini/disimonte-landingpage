/**
 * Contact configuration — single source of truth.
 *
 * HOW TO GO LIVE:
 * 1. TODO(client): replace WHATSAPP_NUMBER with the real business line
 *    (country code + area code + number, no "+" or spaces, e.g. "5491140000000").
 * 2. TODO(client): confirm the real Instagram handle.
 *
 * While WHATSAPP_NUMBER is empty, `waHref()` points CTAs to the ordering
 * section instead of a broken wa.me URL.
 */
export const WHATSAPP_NUMBER = "";

/** Placeholder handle, confirm the real one before going live. */
export const INSTAGRAM_HANDLE = "@disimonte";

export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE.replace("@", "")}`;

/**
 * Builds a WhatsApp deep link with a pre-filled message (bible §6.1).
 * Message is encodeURIComponent-encoded; number is set in one place above.
 */
export function waLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Resolves the href used by WhatsApp CTAs. Falls back to the ordering
 * section while the real number is pending.
 */
export function waHref(text: string): string {
  return WHATSAPP_NUMBER ? waLink(text) : "#como-pedir";
}