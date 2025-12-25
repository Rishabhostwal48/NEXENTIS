import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return (
    <button
      type="button"
      aria-label={typeof children === "string" ? children : "button"}
      className={clsx(
        "inline-flex items-center justify-center rounded-md font-medium  transition focus:outline:none focus:ring-2 focus:ring-offset-2",

        //Variants
        {
          "bg-black text-white hover:bg-gray-800 focus:ring-black":
            variant === "primary",

          "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300":
            variant === "secondary",

          "border border-gray-300 hover:bg-gray-100 focus:ring-gray-300":
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
