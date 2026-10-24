/** La foto de la focaccia se acerca muy despacio mientras se baja (1 → 1.06). */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const marco = document.querySelector<HTMLElement>("[data-focaccia]");
const foto = marco?.querySelector<HTMLElement>("img");

if (marco && foto) {
  gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
    gsap.fromTo(
      foto,
      { scale: 1 },
      {
        scale: 1.06,
        ease: "none",
        scrollTrigger: { trigger: marco, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  });
}
