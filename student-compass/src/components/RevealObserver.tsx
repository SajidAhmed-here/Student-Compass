"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal for any element with a `data-reveal` attribute.
 *
 *   <div data-reveal>…</div>                fade up
 *   <div data-reveal="fade">…</div>         fade only
 *   <div data-reveal="left|right|zoom">…</div>
 *   style={{ "--reveal-delay": "120ms" }}   stagger
 *
 * Content stays visible if JavaScript fails or the user prefers reduced
 * motion: elements are only hidden once `reveal-ready` is on <html>.
 * Rendered from app/template.tsx, so it re-scans on every navigation.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    const firstRun = !root.classList.contains("reveal-ready");

    const scan = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)").forEach((el) => {
        if (el.dataset.revealWatched) return;
        el.dataset.revealWatched = "1";
        // On the very first paint, don't hide what the visitor can already see.
        if (firstRun) {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            el.classList.add("is-revealed");
            return;
          }
        }
        io.observe(el);
      });
    };

    scan();
    root.classList.add("reveal-ready");

    // Pick up elements rendered later (e.g. filtered course lists).
    let frame = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(frame);
      document
        .querySelectorAll<HTMLElement>("[data-reveal-watched]")
        .forEach((el) => delete el.dataset.revealWatched);
    };
  }, []);

  return null;
}
