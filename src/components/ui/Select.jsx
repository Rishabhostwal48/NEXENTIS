import clsx from "clsx";

export default function Select({ className, children, ...props }) {
  return (
    <select
      className={clsx(
        "h-10 w-full appearance-none rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 px-3 pr-8 text-sm text-neutral-900 dark:text-neutral-50 shadow-soft-sm outline-none transition-all duration-normal ease-ease-out-cubic focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-neutral-50 dark:focus:ring-offset-neutral-950",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

