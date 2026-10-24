/**
 * Fotos con `data-revelar`: se descubren de abajo hacia arriba al entrar.
 * La entrada del inicio es CSS puro (ver Inicio.astro).
 */
const fotos = Array.from(document.querySelectorAll<HTMLElement>("[data-revelar]"));

if (fotos.length > 0 && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        entrada.target.classList.add("revelado");
        observer.unobserve(entrada.target);
      }
    },
    { threshold: 0.2 },
  );

  for (const foto of fotos) {
    // Las que ya están en pantalla al cargar no se esconden.
    if (foto.getBoundingClientRect().top < window.innerHeight) continue;
    foto.classList.add("revelar-espera");
    observer.observe(foto);
  }
}

export {};
