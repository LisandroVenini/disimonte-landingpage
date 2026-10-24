/**
 * La bandeja: las piezas caen una sola vez al entrar en pantalla.
 * El estado de espera solo se agrega acá, así sin JavaScript se ven en su lugar.
 * Tocar una pieza (o pasarle el mouse) resalta su lista de sabores.
 */
const bandeja = document.querySelector<HTMLElement>("[data-bandeja]");

if (bandeja) {
  if ("IntersectionObserver" in window) {
    bandeja.classList.add("bandeja--espera");
    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        bandeja.classList.add("cae");
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(bandeja);
  }

  const piezas = Array.from(bandeja.querySelectorAll<HTMLButtonElement>("[data-pieza]"));
  const listas = new Map(
    Array.from(document.querySelectorAll<HTMLElement>("[data-lista]")).map((lista) => [
      lista.dataset.lista!,
      lista,
    ]),
  );
  let elegida: string | null = null;

  const resaltar = (id: string | null) => {
    listas.forEach((lista, clave) => lista.classList.toggle("es-resaltada", clave === id));
  };

  piezas.forEach((pieza) => {
    const id = pieza.dataset.pieza!;

    pieza.addEventListener("click", () => {
      elegida = elegida === id ? null : id;
      piezas.forEach((p) => {
        const activa = p.dataset.pieza === elegida;
        p.classList.toggle("es-activa", activa);
        p.setAttribute("aria-pressed", String(activa));
      });
      resaltar(elegida);
      // En el celular la lista queda debajo de la bandeja: la centra en pantalla.
      if (elegida && !window.matchMedia("(min-width: 1024px)").matches) {
        listas.get(elegida)?.scrollIntoView({ block: "center" });
      }
    });

    pieza.addEventListener("pointerenter", (e) => {
      if (e.pointerType === "mouse") resaltar(id);
    });
    pieza.addEventListener("pointerleave", (e) => {
      if (e.pointerType === "mouse") resaltar(elegida);
    });
  });
}

export {};
