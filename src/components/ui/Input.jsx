import clsx from "clsx";

export default function Input({ className, ...props }) {
  return (
    <input
      className={clsx(
        "h-10 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 px-3 text-sm text-neutral-900 dark:text-neutral-50 shadow-soft-sm outline-none transition-all duration-normal ease-ease-out-cubic placeholder:text-neutral-500 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-neutral-50 dark:focus:ring-offset-neutral-950",
        className
      )}
      {...props}
    />
  );
}

