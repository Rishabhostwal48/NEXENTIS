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
        className={clsx(
          "relative z-10 w-full rounded-xl bg-white dark:bg-gray-800 shadow-lg animate-modal",
          size === "sm" && "max-w-sm",
          size === "md" && "max-w-lg",
          size === "lg" && "max-w-2xl"
        )}
      >
        {/* Header */}
        {title && (
            <div className="flex items-center justify-between border-b px-6 py-4 dark:border-gray-700">
                <h2 className="text-lg font-semibold">{title}</h2>
                <button 
                  onClick={onClose}
                  className="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
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
