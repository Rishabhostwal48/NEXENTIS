import { useState, useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Star } from "lucide-react";
import { useToast } from "../../context/ToastContext";

export default function ComponentDoc({ title, description, code, children }) {
  const [copied, setCopied] = useState(false);
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  const item = { title, path: window.location.pathname };
  const active = isFavorite(item.path);

  const {toast}=useToast()
  function copyCode() {
    toast.success("Code Copied!")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        
        <p className="text-gray-500">{description}</p>
      </div>
<button
          onClick={() => toggleFavorite(item)}
          className="ml-3 inline-flex items-center gap-1 text-sm"
        >
          <Star
            size={16}
            className={active ? "fill-yellow-400 text-yellow-400" : ""}
          />
        </button>
      <div className="rounded-md border p-6 bg-white shadow-sm">{children}</div>

      <div className="relative">
        <button
          onClick={copyCode}
          className="absolute right-2 top-2 rounded bg-gray-200 px-2 py-1 text-xs"
        >
          {copied ? "Copied!" : "Copy"}
        </button>

        <pre className="overflow-auto rounded bg-gray-900 p-4 text-sm text-white">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
