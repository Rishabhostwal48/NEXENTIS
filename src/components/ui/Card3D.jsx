import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

/**
 * Card3D Component
 * 
 * Open source 3D card effect component using pure CSS transforms.
 * Lightweight - no Three.js dependency.
 * 
 * @param {ReactNode} children - Content to render inside the 3D card
 * @param {string} className - Additional CSS classes
 * @param {number} intensity - 3D effect intensity (1-5)
 */
export default function Card3D({ children, className = "", intensity = 3 }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateXValue = ((e.clientY - centerY) / rect.height) * intensity;
    const rotateYValue = ((centerX - e.clientX) / rect.width) * intensity;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      className={clsx("perspective-1000", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
}

