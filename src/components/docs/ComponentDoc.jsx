import { useState, useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Star, Copy, Wand2 } from "lucide-react";
import { useToast } from "../../context/ToastContext";
import DashboardLayout from "../layout/DashboardLayout";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

export default function ComponentDoc({
  title,
  description,
  code,
  codeJsx,
  codeTailwind,
  children,
  category = "UI Component",
  playgroundId,
}) {
  const [copied, setCopied] = useState(false);
  const [codeTab, setCodeTab] = useState(() => (codeTailwind ? "jsx" : "code"));
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  const path = window.location.pathname;
  const active = isFavorite(path);

  const { toast } = useToast();

  const resolvedCode =
    codeTab === "tailwind" ? codeTailwind : codeTab === "jsx" ? (codeJsx ?? code) : code;

  function copyCode() {
    toast.success("Code Copied!");
    navigator.clipboard.writeText(resolvedCode || "");
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
            <div className="hidden sm:flex items-center gap-2">
              {playgroundId ? (
                <Link to={`/playground?c=${encodeURIComponent(playgroundId)}`}>
                  <Button variant="outline" size="sm">
                    <Wand2 size={16} className="mr-2" />
                    Playground
                  </Button>
                </Link>
              ) : null}
            </div>
          </div>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {/* Preview */}
        <div className="rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 p-8 bg-white/70 dark:bg-neutral-950/30 backdrop-blur-xl shadow-soft-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-glow-radial pointer-events-none" />
          <div className="relative">{children}</div>
        </div>

        {/* Code Block */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Code
            </p>
            <div className="flex items-center gap-2">
              {codeTailwind ? (
                <div className="inline-flex rounded-md border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white/60 dark:bg-neutral-900/40">
                  <button
                    type="button"
                    onClick={() => setCodeTab("jsx")}
                    className={[
                      "px-3 py-1.5 text-xs font-medium transition-colors",
                      codeTab === "jsx"
                        ? "bg-brand-500/10 text-neutral-900 dark:text-neutral-50"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-white/50 dark:hover:bg-neutral-900/50",
                    ].join(" ")}
                  >
                    JSX
                  </button>
                  <button
                    type="button"
                    onClick={() => setCodeTab("tailwind")}
                    className={[
                      "px-3 py-1.5 text-xs font-medium transition-colors",
                      codeTab === "tailwind"
                        ? "bg-brand-500/10 text-neutral-900 dark:text-neutral-50"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-white/50 dark:hover:bg-neutral-900/50",
                    ].join(" ")}
                  >
                    Tailwind
                  </button>
                </div>
              ) : null}

              <button
                onClick={copyCode}
                className="inline-flex items-center gap-2 rounded-md bg-white/70 dark:bg-neutral-900/40 hover:bg-white/90 dark:hover:bg-neutral-900/60 border border-neutral-200/70 dark:border-neutral-800/70 px-3 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-200 transition-colors"
              >
                <Copy size={14} />
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          <pre className="max-h-96 overflow-auto rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 bg-neutral-950/95 dark:bg-neutral-950 p-4 text-sm text-neutral-100 dark:text-neutral-200 shadow-soft-sm">
            <code className="font-mono">{resolvedCode}</code>
          </pre>
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
}
