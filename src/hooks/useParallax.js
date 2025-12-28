import { useEffect, useRef } from "react";

/**
 * useParallax Hook
 * 
 * Open source hook for parallax scrolling effects.
 * Lightweight and performant - no external dependencies.
 * 
 * @param {number} speed - Parallax speed (0-1, where 0.5 is standard)
 * @returns {React.RefObject} - Ref to attach to the element
 */
export function useParallax(speed = 0.5) {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      elementRef.current.style.transform = `translateY(${parallax}px)`;
    };

    // Throttle scroll events for performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed]);

  return elementRef;
}

