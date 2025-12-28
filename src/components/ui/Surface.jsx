export default function Surface({children, className = ""}){
    return(
        <div className={`border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 ${className}`}>
            {children}
        </div>
    )
}