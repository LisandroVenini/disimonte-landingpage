/**
 * Menú móvil y barra fija de WhatsApp.
 * El <dialog> nativo ya atrapa el foco y se cierra con Escape.
 */
const menu = document.querySelector<HTMLDialogElement>("#menu");
const abrir = document.querySelector<HTMLButtonElement>("[data-menu-abrir]");

if (menu && abrir) {
  abrir.addEventListener("click", () => menu.showModal());
  menu.querySelector("[data-menu-cerrar]")?.addEventListener("click", () => menu.close());
  // Al elegir una sección se cierra el menú y sigue la navegación al ancla.
  menu.querySelectorAll("[data-menu-link]").forEach((link) => {
    link.addEventListener("click", () => menu.close());
  });
  // Si se agranda la pantalla con el menú abierto, deja de tener sentido.
  window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => {
    if (e.matches && menu.open) menu.close();
  });
}

/* ---------- Barra fija: aparece al dejar el inicio, se oculta en el cierre ----------
   También se oculta mientras los sorrentinos están fijos: cada sabor tiene
   su botón y la barra taparía los puntos en pantallas bajas. */

const barra = document.querySelector<HTMLElement>("[data-barra]");
const ctaInicio = document.querySelector<HTMLElement>("[data-inicio-cta]");
const cierre = document.querySelector<HTMLElement>("#cierre");
const escena = document.querySelector<HTMLElement>("[data-escena]");

if (barra && ctaInicio && cierre && "IntersectionObserver" in window) {
  let pasoElInicio = false;
  let enElCierre = false;
  let enLaEscena = false;

  const actualizar = () => {
    const visible = pasoElInicio && !enElCierre && !enLaEscena;
    barra.classList.toggle("es-visible", visible);
    barra.inert = !visible;
  };

  new IntersectionObserver(([entrada]) => {
    pasoElInicio = !entrada.isIntersecting && entrada.boundingClientRect.top < 0;
    actualizar();
  }).observe(ctaInicio);

  new IntersectionObserver(([entrada]) => {
    enElCierre = entrada.isIntersecting;
    actualizar();
  }).observe(cierre);

  if (escena) {
    new IntersectionObserver(
      ([entrada]) => {
        enLaEscena = escena.classList.contains("es-fija") && entrada.intersectionRatio >= 0.6;
        actualizar();
      },
      { threshold: [0, 0.6, 1] },
    ).observe(escena);
  }
}

export {};
