import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import clsx from "clsx";

/**
 * ScrollReveal Component
 * 
 * Open source component for scroll-triggered reveal animations.
 * Uses Intersection Observer for performance.
 * 
 * @param {string} direction - Animation direction: 'up', 'down', 'left', 'right', 'fade'
 * @param {number} delay - Animation delay in milliseconds
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Content to animate
 */
export default function ScrollReveal({ 
  direction = "up", 
  delay = 0,
  className = "",
  children,
  threshold = 0.1 
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  const directions = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    fade: "",
  };

  const baseClass = directions[direction] || directions.up;

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-700",
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${baseClass}`,
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
}

