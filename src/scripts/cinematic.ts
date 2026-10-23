/**
 * Cinematic zone choreography (bible §8.1) — Hero, Ritual, Week, Limited.
 * Engine: GSAP + ScrollTrigger, wrapped in gsap.matchMedia so everything
 * collapses to the static default under prefers-reduced-motion.
 *
 * Performance law: only transform + opacity (plus the bible-mandated blur
 * settle on reveals); observe via ScrollTrigger, never scroll listeners.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EASE_CINEMATIC = "cubic-bezier(0.16, 1, 0.3, 1)";

const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
  /* ---- Hero intro: wordmark + manifesto reveal, parallax bg ---- */
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (hero) {
    const tl = gsap.timeline({ defaults: { ease: EASE_CINEMATIC } });
    tl.from("[data-hero-eyebrow]", { y: 24, opacity: 0, duration: 0.8 }, 0.15)
      .from(
        "[data-hero-wordmark]",
        { yPercent: 45, opacity: 0, filter: "blur(10px)", duration: 1.4 },
        0.35,
      )
      .from(
        "[data-hero-rule]",
        { scaleX: 0, transformOrigin: "left center", duration: 1.1 },
        0.75,
      )
      .from(
        "[data-hero-manifesto]",
        { yPercent: 35, opacity: 0, filter: "blur(6px)", duration: 1.1 },
        0.85,
      )
      .from("[data-hero-sub]", { y: 24, opacity: 0, duration: 0.8 }, 1.05)
      .from("[data-hero-cta]", { y: 16, opacity: 0, duration: 0.7 }, 1.2)
      .from("[data-hero-polaroid]", { y: 28, opacity: 0, rotate: -6, duration: 0.9 }, 1.35);

    gsap.to("[data-hero-bg]", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  /* ---- Global cinematic reveals (Ritual beats, Week chips, Limited) ---- */
  gsap.utils.toArray<HTMLElement>("[data-cine-reveal]").forEach((el) => {
    gsap.from(el, {
      y: 48,
      opacity: 0,
      filter: "blur(6px)",
      duration: 0.9,
      ease: EASE_CINEMATIC,
      delay: Number(el.dataset.cineDelay ?? 0),
      scrollTrigger: { trigger: el, start: "top 86%", once: true },
    });
  });

  /* ---- Ritual: parallax drift on the duotone panel ---- */
  const ritual = document.querySelector<HTMLElement>("[data-ritual]");
  const duotone = ritual?.querySelector<HTMLElement>("[data-cine-parallax]");
  if (ritual && duotone) {
    gsap.fromTo(
      duotone,
      { yPercent: -5 },
      {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: ritual,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  }

  /* ---- Ritual: pinned spine draw (the crafted moment) ---- */
  const spine = document.querySelector<HTMLElement>("[data-cine-spine]");
  if (spine) {
    gsap.fromTo(
      spine,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: spine,
          start: "top 85%",
          end: "bottom 45%",
          scrub: 0.5,
        },
      },
    );
  }

  /* ---- Week: marquee curtain wipe at scroll-into-view ---- */
  const marquee = document.querySelector<HTMLElement>("[data-cine-marquee]");
  if (marquee) {
    gsap.from(marquee, {
      scaleY: 0.02,
      transformOrigin: "bottom center",
      duration: 0.9,
      ease: EASE_CINEMATIC,
      scrollTrigger: { trigger: marquee, start: "top 95%", once: true },
    });
  }

  /* ---- Week: banner CTA entrance ---- */
  const bandCta = document.querySelector<HTMLElement>("[data-cine-band-cta]");
  if (bandCta) {
    gsap.from(bandCta, {
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: EASE_CINEMATIC,
      scrollTrigger: { trigger: bandCta, start: "top 90%", once: true },
    });
  }

  /* ---- Limited: scene scale-settle + copy stagger ---- */
  const limited = document.querySelector<HTMLElement>("[data-limited]");
  const limitedBg = document.querySelector<HTMLElement>("[data-limited-bg]");
  if (limited && limitedBg) {
    gsap.fromTo(
      limitedBg,
      { scale: 1.08 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: limited,
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      },
    );
  }
});

export {};