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
                "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200",
            variant === "primary" &&
               "bg-black text-white dark:bg-white dark:text-black",
            variant === "success" &&
                "bg-green-800 text-white ",
            variant === "warning" &&
                "bg-yellow-500 text-black",
            variant === "danger" &&
                "bg-red-500 text-white",
            className            
          )}
          >
            {Icon && <Icon size={14} className="mr-1"/>}
            {children}
          </span>
    )
}