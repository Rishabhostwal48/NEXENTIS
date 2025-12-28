import clsx from "clsx";

/**
 * TexturedBackground Component
 * 
 * A reusable component that provides various CSS-based textured backgrounds.
 * Open source and lightweight - no external dependencies.
 * 
 * @param {string} variant - Background pattern variant: 'dots', 'grid', 'lines', 'noise', 'gradient', 'mesh'
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Content to render on top of the background
 */
export default function TexturedBackground({ 
  variant = "dots", 
  className = "", 
  children,
  intensity = "normal" 
}) {
  const variants = {
    dots: "bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0,0.15)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)]",
    grid: "bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]",
    lines: "bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]",
    gradient: "bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900",
    mesh: "bg-[radial-gradient(at_0%_0%,rgba(120,119,198,0.1)_0px,transparent_50%),radial-gradient(at_100%_0%,rgba(120,119,198,0.1)_0px,transparent_50%),radial-gradient(at_100%_100%,rgba(120,119,198,0.1)_0px,transparent_50%),radial-gradient(at_0%_100%,rgba(120,119,198,0.1)_0px,transparent_50%)]",
  };

  const sizes = {
    light: {
      dots: "bg-[length:20px_20px]",
      grid: "bg-[length:20px_20px]",
      lines: "bg-[length:20px_20px]",
    },
    normal: {
      dots: "bg-[length:16px_16px]",
      grid: "bg-[length:20px_20px]",
      lines: "bg-[length:15px_15px]",
    },
    intense: {
      dots: "bg-[length:12px_12px]",
      grid: "bg-[length:15px_15px]",
      lines: "bg-[length:10px_10px]",
    },
  };

  const sizeClass = sizes[intensity]?.[variant] || sizes.normal[variant] || "";

  return (
    <div
      className={clsx(
        "relative",
        variant !== "gradient" && variant !== "mesh" && variants[variant],
        variant === "gradient" && variants.gradient,
        variant === "mesh" && variants.mesh,
        sizeClass,
        className
      )}
    >
      {children}
    </div>
  );
}

