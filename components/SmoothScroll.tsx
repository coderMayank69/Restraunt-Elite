"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NAV_OFFSET_PX = 88;

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Animate all in-page anchor links so navigation feels smooth and consistent.
    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target) return;

      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const destination = document.querySelector(href);
      if (!destination) return;

      event.preventDefault();

      const offsetY = href === "#hero" ? 0 : NAV_OFFSET_PX;

      gsap.to(window, {
        duration: 1,
        ease: "power2.out",
        overwrite: "auto",
        scrollTo: {
          y: destination,
          offsetY,
        },
      });

      history.pushState(null, "", href);
    };

    document.addEventListener("click", onDocumentClick);

    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  return null;
}
