import { useEffect } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

export default function Modal({ open, onClose, title, children, size = "md" }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />
      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        className={clsx(
          "relative z-10 w-full rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl animate-modal",
          size === "sm" && "max-w-sm",
          size === "md" && "max-w-lg",
          size === "lg" && "max-w-2xl"
        )}
      >
        {/* Header */}
        {title && (
            <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-6 py-4">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">{title}</h2>
                <button 
                  onClick={onClose}
                  className="rounded-md p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                  aria-label="Close modal"
                >
                    <X size={18} />
                </button>
            </div>
        )}
        {/* Content */}
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}
