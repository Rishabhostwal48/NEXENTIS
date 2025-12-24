import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "lucide-react";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Favorites</h1>

      {favorites.length === 0 && (
        <p className="text-gray-500">No Favorites yet.</p>
      )}

      <div className="space-y-3">
        {favorites.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block rounded border px-4 py-3
                         hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
