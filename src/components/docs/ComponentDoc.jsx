import { useState, useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Star } from "lucide-react";
import { useToast } from "../../context/ToastContext";
import DashboardLayout from "../layout/DashboardLayout";

export default function ComponentDoc({
  title,
  description,
  code,
  children,
  category = "UI Component",
}) {
  const [copied, setCopied] = useState(false);
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  const path = window.location.pathname;
  const active = isFavorite(path);

  const { toast } = useToast();

  function copyCode() {
    toast.success("Code Copied!");
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <DashboardLayout>
      <div className="p-6 md:p-8 lg:p-12">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3 font-semibold">
                {category}
              </p>
              <div className="flex items-center gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                  {title}
                </h1>
                <button
                  onClick={() => toggleFavorite({ title, path })}
                  className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  aria-label={active ? "Remove from favorites" : "Add to favorites"}
                >
                  <Star
                    size={20}
                    className={`transition-colors ${
                      active 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-neutral-400 hover:text-yellow-400"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {/* Preview */}
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white dark:bg-neutral-900 shadow-sm">
          {children}
        </div>

        {/* Code Block */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Code
            </p>
            <button
              onClick={copyCode}
              className="rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 px-3 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 transition-colors"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <pre className="max-h-96 overflow-auto rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-950 dark:bg-neutral-900 p-4 text-sm text-neutral-100 dark:text-neutral-200">
            <code className="font-mono">{code}</code>
          </pre>
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
}
