/**
 * Sorrentinos: la escena queda fija y cada tramo de scroll pasa al sabor
 * siguiente. Fondo, foto y texto se cruzan con opacity (más un blur de 2 px
 * en el texto); nunca se anima background-color.
 * Con "reducir movimiento" no se toca nada: quedan los bloques de color.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const escena = document.querySelector<HTMLElement>("[data-escena]");

if (escena) {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const pasos = gsap.utils.toArray<HTMLElement>("[data-paso]", escena);
    const puntos = gsap.utils.toArray<HTMLButtonElement>("[data-punto]", escena);
    const nav = escena.querySelector<HTMLElement>("[data-puntos]");
    const tramos = pasos.length - 1;
    const pieza = (paso: HTMLElement, nombre: string) =>
      paso.querySelector<HTMLElement>(`[data-${nombre}]`);

    escena.classList.add("es-fija");
    if (nav) nav.hidden = false;

    let actual = -1;
    const marcar = (indice: number) => {
      if (indice === actual) return;
      actual = indice;
      pasos.forEach((paso, i) => paso.classList.toggle("es-activo", i === indice));
      puntos.forEach((punto, i) => punto.setAttribute("aria-current", String(i + 1 === indice)));
    };
    marcar(0);

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: escena,
        pin: true,
        start: "top top",
        end: () => `+=${tramos * window.innerHeight}`,
        scrub: 0.5,
        snap: {
          snapTo: 1 / tramos,
          duration: { min: 0.2, max: 0.6 },
          delay: 0.05,
          ease: "power1.inOut",
          // Sin inercia: un scroll rápido no se saltea sabores.
          inertia: false,
        },
        invalidateOnRefresh: true,
        onUpdate: (st) => marcar(Math.round(st.progress * tramos)),
      },
    });

    // Cada tramo dura 1 en la línea de tiempo; los cambios ocurren adentro
    // del tramo, así en cada punto de snap hay un sabor entero en pantalla.
    for (let i = 1; i <= tramos; i++) {
      const t = i - 1;
      const capa = pieza(pasos[i], "capa");
      const foto = pieza(pasos[i], "foto");
      const texto = pieza(pasos[i], "texto");
      const textoAnterior = pieza(pasos[i - 1], "texto");

      if (textoAnterior) tl.to(textoAnterior, { opacity: 0, duration: 0.25 }, t + 0.15);
      if (capa) tl.fromTo(capa, { opacity: 0 }, { opacity: 1, duration: 0.45 }, t + 0.2);
      if (foto) tl.fromTo(foto, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5 }, t + 0.3);
      if (texto) {
        tl.fromTo(
          texto,
          { opacity: 0, filter: "blur(2px)" },
          { opacity: 1, filter: "blur(0px)", duration: 0.25 },
          t + 0.55,
        );
      }
    }
    tl.set({}, {}, tramos);

    const st = tl.scrollTrigger!;

    // El pin agrega altura arriba de las secciones siguientes: si se entró con
    // un ancla a una de ellas (#como-pedir), se vuelve a llevar ahí.
    const ancla = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
    if (ancla && escena.compareDocumentPosition(ancla) & Node.DOCUMENT_POSITION_FOLLOWING) {
      requestAnimationFrame(() => ancla.scrollIntoView());
    }
    const irA = (indice: number, comportamiento: ScrollBehavior = "smooth") => {
      const destino = st.start + (st.end - st.start) * (indice / tramos);
      window.scrollTo({ top: destino, behavior: comportamiento });
    };

    const alTocarPunto = (e: Event) => {
      const punto = (e.target as HTMLElement).closest<HTMLButtonElement>("[data-punto]");
      if (punto) irA(Number(punto.dataset.punto));
    };

    // Con teclado: al llegar con Tab a un botón de otro sabor, la escena va a ese sabor.
    const alEnfocar = (e: FocusEvent) => {
      const paso = (e.target as HTMLElement).closest<HTMLElement>("[data-paso]");
      const indice = paso ? pasos.indexOf(paso) : -1;
      if (indice >= 0 && indice !== actual) irA(indice, "auto");
    };

    nav?.addEventListener("click", alTocarPunto);
    escena.addEventListener("focusin", alEnfocar);

    return () => {
      nav?.removeEventListener("click", alTocarPunto);
      escena.removeEventListener("focusin", alEnfocar);
      escena.classList.remove("es-fija");
      pasos.forEach((paso) => paso.classList.remove("es-activo"));
      if (nav) nav.hidden = true;
    };
  });
}
