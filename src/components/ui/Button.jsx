import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  ...props
}) {
  return (
    <button
      type="button"
      aria-label={typeof children === "string" ? children : "button"}
      disabled={disabled}
      className={clsx(
        "pressable inline-flex items-center justify-center rounded-md font-medium transition-all duration-normal ease-ease-out-cubic focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",

        //Variants
        {
          // Premium brand gradient with subtle sheen
          "relative overflow-hidden bg-brand-gradient text-white shadow-soft-sm hover:shadow-soft-md hover:-translate-y-0.5 active:translate-y-0 focus:ring-brand-500 dark:focus:ring-brand-400":
            variant === "primary",

          "glass glass-hover text-neutral-900 dark:text-neutral-50 hover:-translate-y-0.5 active:translate-y-0 focus:ring-brand-500":
            variant === "secondary",

          "gradient-border bg-transparent text-neutral-900 dark:text-neutral-50 hover:bg-neutral-50/70 dark:hover:bg-neutral-900/40 active:bg-neutral-100/70 dark:active:bg-neutral-900/60 focus:ring-brand-500 shadow-soft-sm hover:shadow-soft-md hover:-translate-y-0.5 active:translate-y-0":
            variant === "outline",
        },

        //Sizes
        {
          "h-8 px-3 text-sm": size === "sm",
          "h-10 px-4 text-sm": size === "md",
          "h-12 px-6 text-base": size === "lg",
        },

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
