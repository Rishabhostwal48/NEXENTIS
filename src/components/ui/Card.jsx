import Surface from "./Surface"

export function Card({ children,className = ""}){
    return(
        <Surface
           className={`shadow-sm p-5 ${className}`}
        >
            {children}
        </Surface>
    )
}

export function CardTitle({ children,className = ""}){
    return(
        <h2 className={`text-sm text-gray-500 dark:text-gray-400 mb-3 ${className}`}>
            {children}
        </h2>
    )
}

export function CardDescription({ children,className = ""}){
    return(
        <p className={`text-sm text-gray-500 dark:text-gray-400 mb-3 ${className}`}>
            {children}
        </p>
    )
}

export function CardFooter({ children,className = ""}){
    return(
        <div className={`mt-4 pt-3 border-t ${className}`}>
            {children}
        </div>
    )
}

export function CardMedia({ src, alt = "", className=""}){
    return(
        <img
           src={src}
           alt={alt}
           className={`w-full h-40  object-cover rounded-lg mb-3 ${className}`}
        />
    )
}