import clsx from "clsx";

export default function Badge({
    children,
    variant="gray",
    size="md",
    icon: Icon ,
    className ="",
}) {
    return(
        <span 
          className={clsx(
            "inline-flex items-center rounded-full font-medium",
            // base padding & typography scale
            size === "sm" && "px-2 py-0.5 text-xs",
            size === "md" && "px-3 py-1 text-sm",
            //variants
            variant === "gray" &&
                "bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200",
            variant === "secondary" &&
                "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200",
            variant === "primary" &&
               "bg-neutral-900 text-white dark:bg-neutral-50 dark:text-neutral-900",
            variant === "success" &&
                "bg-green-600 text-white dark:bg-green-700",
            variant === "warning" &&
                "bg-yellow-500 text-neutral-900 dark:bg-yellow-600",
            variant === "danger" &&
                "bg-red-600 text-white dark:bg-red-700",
            className            
          )}
          >
            {Icon && <Icon size={14} className="mr-1"/>}
            {children}
          </span>
    )
}