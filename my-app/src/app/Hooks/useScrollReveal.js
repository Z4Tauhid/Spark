"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".slide-in, .slide-left, .slide-right"
    );

    // Reset state
    elements.forEach((el) => {
      el.classList.remove("visible");
      el.style.transitionDelay = "0ms";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.transitionDelay = `${i * 50}ms`;
            el.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]); // THIS is the key
}