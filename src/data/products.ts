/**
 * Products — one editable file for the whole site.
 * Copy and prefill strings are taken verbatim from web/art-direction.md
 * (sections 3, 5 and 6) and web/DESIGN.md (§6.1 prefill pattern).
 */

/** Product identity colors (bible §2.2) — dots/chips ONLY, never UI fills. */
export const FLAVOR_HEX = {
  calabaza: "#fbb02d",
  espinaca: "#5da365",
  jyq: "#efb8ae",
  bondiola: "#7a7672",
} as const;

export type FlavorKey = keyof typeof FLAVOR_HEX;

export type ProductKind =
  | "sorrentino"
  | "lasagna"
  | "empanada"
  | "canastita"
  | "focaccia"
  | "prelist";

export interface Product {
  name: string;
  /** Flavor identity color. null → no flavor dot (lasagna, empanadas…). */
  flavor: FlavorKey | null;
  description: string;
  /**
   * Display price string, e.g. "12 un · $9.000".
   * null → the card shows "Consultá por WhatsApp" (price pending) and keeps the CTA.
   */
  price: string | null;
  kind: ProductKind;
  /** Pre-filled WhatsApp message for this product. */
  prefill: string;
}

const UNIDADES_SORRENTINO = "12 un · $9.000";

export const SORRENTINOS: Product[] = [
  {
    name: "Sorrentinos de Calabaza",
    flavor: "calabaza",
    description: "Relleno cremoso, masa naranja natural.",
    price: UNIDADES_SORRENTINO,
    kind: "sorrentino",
    prefill:
      "¡Hola Di Simonte! Quiero pedir: Sorrentinos de Calabaza (12 unidades). ¿Me pasás disponibilidad de este finde?",
  },
  {
    name: "Sorrentinos de Espinaca",
    flavor: "espinaca",
    description: "Verde natural, sabor a huerta.",
    price: UNIDADES_SORRENTINO,
    kind: "sorrentino",
    prefill:
      "¡Hola Di Simonte! Quiero pedir: Sorrentinos de Espinaca (12 unidades). ¿Me pasás disponibilidad de este finde?",
  },
  {
    name: "Sorrentinos de Jamón y Queso",
    flavor: "jyq",
    description: "El clásico de siempre.",
    price: UNIDADES_SORRENTINO,
    kind: "sorrentino",
    prefill:
      "¡Hola Di Simonte! Quiero pedir: Sorrentinos de Jamón y Queso (12 unidades). ¿Me pasás disponibilidad de este finde?",
  },
  {
    name: "Sorrentinos de Bondiola",
    flavor: "bondiola",
    description: "Un lujo de otoño.",
    price: UNIDADES_SORRENTINO,
    kind: "sorrentino",
    prefill:
      "¡Hola Di Simonte! Quiero pedir: Sorrentinos de Bondiola (12 unidades). ¿Me pasás disponibilidad de este finde?",
  },
];

export const LASAGNA: Product = {
  name: "Lasagna de la casa",
  flavor: null,
  description: "Bandeja familiar, capas de a poco.",
  price: null,
  kind: "lasagna",
  prefill:
    "¡Hola Di Simonte! Quiero pedir: Lasagna de la casa (bandeja). ¿Me pasás disponibilidad de este finde?",
};

/** Section 3 — the weekend, made-to-order. */
export const WEEKEND_PRODUCTS: Product[] = [...SORRENTINOS, LASAGNA];

export const EMPANADAS: Product = {
  name: "Empanadas",
  flavor: null,
  description: "Humita, carne cortada a cuchillo…",
  price: null,
  kind: "empanada",
  prefill: "¡Hola Di Simonte! Quiero pedir: empanadas de Humita (docena).",
};

export const CANASTITAS: Product = {
  name: "Canastitas",
  flavor: null,
  description: "½ docena, para compartir.",
  price: null,
  kind: "canastita",
  prefill: "¡Hola Di Simonte! Quiero pedir: canastitas (media docena).",
};

/** Section 5 — the letter/carta: the weekend products plus the week's own. */
export const LETTER_PRODUCTS: Product[] = [
  ...SORRENTINOS,
  LASAGNA,
  EMPANADAS,
  CANASTITAS,
];

/** Section 6 — the lab. Prelist prefill derived from the Focaccia template. */
export const LIMITED_PRODUCTS: Product[] = [
  {
    name: "Focaccia",
    flavor: null,
    description: "",
    price: null,
    kind: "focaccia",
    prefill:
      "¡Hola Di Simonte! Quiero info de la Edición Limitada: Focaccia.",
  },
  {
    name: "Prelistas",
    flavor: null,
    description: "",
    price: null,
    kind: "prelist",
    prefill:
      "¡Hola Di Simonte! Quiero info de la Edición Limitada: Prelistas.",
  },
];