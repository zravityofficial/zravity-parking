"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Initialises Lenis smooth scrolling for the whole document and routes
 * in-page hash links through it for a polished, eased jump. Disabled when
 * the user prefers reduced motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      // Custom ease-out for a weighty, sophisticated glide.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Smoothly scroll to in-page anchors (e.g. #ecosystem, /#cta on home).
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const path = href.slice(0, hashIndex);
      // Only intercept links that resolve to the current page:
      // "#foo" (any page) or "/#foo" (when already on the home page).
      const onHome = window.location.pathname === "/";
      const isSamePage = path === "" || (path === "/" && onHome);
      if (!isSamePage) return;

      const id = href.slice(hashIndex);
      if (id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.3 });
      history.pushState(null, "", id);
    };

    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
