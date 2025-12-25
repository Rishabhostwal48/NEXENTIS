import { useState, useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Star } from "lucide-react";
import { useToast } from "../../context/ToastContext";

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
    <div className="m-5 border-collapse">
        
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase text-gray-500 mb-6">{category}</p>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold pb-1 ">{title}</h1>

          <button
            onClick={() => toggleFavorite({ title, path })}
            
          >
            <Star
              size={18}
              className={active ? "fill-yellow-400 text-yellow-400" : ""}
            />
          </button>
        </div>

        <p className="text-gray-600 dark:text-gray-500">{description}</p>
      </div>

      <div className="rounded-xl border p-6 bg-white shadow-sm">{children}</div>

      <div className="relative">
        <button
          onClick={copyCode}
          className=" absolute top-2 right-2 rounded bg-gray-300 dark:bg-gray-600 px-2 py-1 text-xs"
        >
          {copied ? "Copied!" : "Copy"}
        </button>

        <pre className="max-h-96 overflow-auto rounded bg-gray-950 p-4 text-sm text-white">
          <code>{code}</code>
        </pre>
      </div>
    </div>
    </div>
  );
}
