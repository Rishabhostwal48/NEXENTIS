export function Card({ children,className = ""}){
    return(
        <div
           className={`rounded-xl border bg-white shadow-sm p-5 ${className}`}
        >
            {children}
        </div>
    )
}

export function CardTitle({ children,className = ""}){
    return(
        <h2 className={`text-lg font-semibold mb-1 ${className}`}>
            {children}
        </h2>
    )
}

export function CardDescription({ children,className = ""}){
    return(
        <p className={`text-sm text-gray-500 mb-3 ${className}`}>
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