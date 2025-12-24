import clsx from "clsx";

export default function Grid({
    children,
    cols=3,
    sm=1,
    md=2,
    lg=3,
    gap=6,
    className = "",
}) {
    return(
        <div
          className={clsx(
            `grid gap-${gap}`,
            `grid-cols-${sm}`,
            `sm:grid-cols-${sm}`,
            `md:grid-cols-${md}`,
            `lg:grid-cols-${lg}`,
            className
          )}
        >
            {children}
        </div>
    )
}