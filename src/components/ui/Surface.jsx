export default function Surface({
  children,
  className = "",
  variant = "solid", // "solid" | "glass"
}) {
  return (
    <div
      className={[
        variant === "glass"
          ? "glass"
          : "border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
