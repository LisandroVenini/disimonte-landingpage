/**
 * Ejecuta `cargar` recién cuando `elemento` queda a menos de una pantalla y
 * media de distancia. Si ya está cerca o arriba (se entró con un ancla), lo
 * ejecuta enseguida. Así GSAP no se descarga ni se arma al cargar la página.
 */
export function cargarCerca(elemento: Element, cargar: () => void): void {
  const cerca = elemento.getBoundingClientRect().top < window.innerHeight * 2.5;
  if (cerca || !("IntersectionObserver" in window)) {
    cargar();
    return;
  }
  const observer = new IntersectionObserver(
    ([entrada]) => {
      if (!entrada.isIntersecting) return;
      observer.disconnect();
      cargar();
    },
    { rootMargin: "0px 0px 150% 0px" },
  );
  observer.observe(elemento);
}

/** Con "reducir movimiento" las animaciones de scroll no se cargan. */
export const sinMovimiento = (): boolean => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
