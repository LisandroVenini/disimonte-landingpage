/**
 * Sober zone choreography (bible §8.1) — Weekend, Letter, How-to-order,
 * Footer, Nav. Engine: IntersectionObserver + CSS transitions.
 * Progressive enhancement: elements are visible by default; JS only adds the
 * hidden state when it can actually observe (never hides content when JS
 * fails or under prefers-reduced-motion).
 */
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canObserve = "IntersectionObserver" in window;

if (!prefersReduced && canObserve) {
  /* ---- Reveals: opacity + translateY(16px), staggered via --i ---- */
  const revealEls = Array.from(
    document.querySelectorAll<HTMLElement>("[data-sober-reveal]"),
  );

  const applyHidden = (el: HTMLElement): void => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
  };

  const reveal = (el: HTMLElement): void => {
    el.style.opacity = "";
    el.style.transform = "";
    el.classList.add("is-revealed");
  };

  revealEls.forEach(applyHidden);

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );

  revealEls.forEach((el) => observer.observe(el));

  /* ---- Nav island: shrink + deepen after 40px of scroll ---- */
  const sentinel = document.querySelector<HTMLElement>("[data-nav-sentinel]");
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  if (sentinel && nav) {
    new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle("is-scrolled", !entry.isIntersecting);
      },
      { threshold: 0 },
    ).observe(sentinel);
  }

  /* ---- Active section underline (bible §6.10) ---- */
  const links = new Map<string, HTMLAnchorElement>();
  document
    .querySelectorAll<HTMLAnchorElement>("[data-nav-link]")
    .forEach((link) => {
      const target = link.getAttribute("href")?.replace(/^#/, "");
      if (target) links.set(target, link);
    });

  const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]")).filter(
    (section) => links.has(section.id),
  );

  if (sections.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            links.forEach((link) => link.classList.remove("is-active"));
            const active = links.get(entry.target.id);
            active?.classList.add("is-active");
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((section) => sectionObserver.observe(section));
  }
}

export {};