import { test } from "node:test";
import assert from "node:assert/strict";
import { waLink, WHATSAPP_NUMERO } from "./whatsapp.ts";

test("arma el link al número del negocio", () => {
  assert.equal(waLink(""), `https://wa.me/${WHATSAPP_NUMERO}`);
  assert.equal(WHATSAPP_NUMERO, "5493765397765");
});

test("conserva tildes, eñes y signos al decodificar", () => {
  const mensaje = "¡Hola Di Simonte! Quiero pedir sorrentinos de calabaza, mozzarella y nuez. ¿Cuándo es la próxima tanda?";
  const url = new URL(waLink(mensaje));
  assert.equal(url.searchParams.get("text"), mensaje);
});

test("codifica espacios y signos reservados", () => {
  const url = waLink("Domingo & familia #1");
  assert.ok(url.endsWith("?text=Domingo%20%26%20familia%20%231"));
});

test("recorta espacios sobrantes", () => {
  assert.equal(new URL(waLink("  hola  ")).searchParams.get("text"), "hola");
});
