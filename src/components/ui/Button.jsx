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
        "inline-flex items-center justify-center rounded-md font-medium transition-all duration-normal focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",

        //Variants
        {
          "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950 focus:ring-neutral-900 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:active:bg-neutral-300 dark:focus:ring-neutral-50":
            variant === "primary",

          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300 focus:ring-neutral-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700 dark:active:bg-neutral-600":
            variant === "secondary",

          "border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-50 hover:bg-neutral-50 dark:hover:bg-neutral-800 active:bg-neutral-100 dark:active:bg-neutral-700 focus:ring-neutral-900 dark:focus:ring-neutral-50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all":
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
