import Surface from "./Surface"

export function Card({ children, className = "" }){
    return(
        <Surface
           className={`shadow-sm dark:shadow-md p-6 rounded-lg ${className}`}
        >
            {children}
        </Surface>
    )
}

export function CardTitle({ children, className = "" }){
    return(
        <h2 className={`text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2 ${className}`}>
            {children}
        </h2>
    )
}

export function CardDescription({ children, className = "" }){
    return(
        <p className={`text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed ${className}`}>
            {children}
        </p>
    )
}

export function CardFooter({ children, className = "" }){
    return(
        <div className={`mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 ${className}`}>
            {children}
        </div>
    )
}

export function CardMedia({ src, alt = "", className = "" }){
    return(
        <img
           src={src}
           alt={alt}
           className={`w-full h-48 object-cover rounded-lg mb-4 ${className}`}
        />
    )
}