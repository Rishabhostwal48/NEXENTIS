export default function Surface({children, className = ""}){
    return(
        <div className={`rounded-xl border bg-white dark:bg-gray-800 dark:border-gray-700 ${className}`}>
            {children}
        </div>
    )
}