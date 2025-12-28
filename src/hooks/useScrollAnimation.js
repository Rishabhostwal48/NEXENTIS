import { useEffect, useRef, useState } from "react";

/**
 * useScrollAnimation Hook
 * 
 * Open source hook for scroll-triggered animations using Intersection Observer.
 * Lightweight and performant - no external dependencies.
 * 
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection
 * @returns {[React.RefObject, boolean]} - Ref to attach and isVisible state
 */
export function useScrollAnimation(options = {}) {
  const { threshold = 0.1, rootMargin = "0px" } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: unobserve after first intersection for performance
          // observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  return [elementRef, isVisible];
}

