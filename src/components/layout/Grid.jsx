import clsx from "clsx";

const colClass = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

const gapClass = {
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
};

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
            "grid",
            gapClass[gap] || "gap-6",
            colClass[cols] || "grid-cols-3",
            sm ? `sm:${colClass[sm] || "grid-cols-1"}` : null,
            md ? `md:${colClass[md] || "grid-cols-2"}` : null,
            lg ? `lg:${colClass[lg] || "grid-cols-3"}` : null,
            className
          )}
        >
            {children}
        </div>
    )
}
