/**
 * Mobile menu (bible §6.10) — sober: hamburger ↔ X, fullscreen overlay,
 * staggered mask reveal, Escape to close, focus returns to the toggle.
 */
const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const overlay = document.querySelector<HTMLElement>("[data-menu-overlay]");

if (toggle && overlay) {
  const isOpen = (): boolean => toggle.getAttribute("aria-expanded") === "true";

  const open = (): void => {
    overlay.classList.add("is-open");
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    overlay.querySelector<HTMLAnchorElement>("a")?.focus({ preventScroll: true });
  };

  const close = (): void => {
    overlay.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    toggle.focus({ preventScroll: true });
  };

  toggle.addEventListener("click", () => (isOpen() ? close() : open()));

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });

  overlay.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const href = link.getAttribute("href");
      close();
      if (href && href.startsWith("#")) {
        document.querySelector(href)?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      } else if (href) {
        window.location.href = href;
      }
      toggle.focus({ preventScroll: true });
    }),
  );

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) close();
  });
}

export {};