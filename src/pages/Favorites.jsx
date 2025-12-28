import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { Star, FileText, ArrowRight } from "lucide-react";
import { Card, CardTitle } from "../components/ui/Card";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Favorites
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Your saved components and documentation
        </p>
      </div>

      {favorites.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex p-4 rounded-full bg-neutral-100 dark:bg-neutral-800 mb-6">
            <Star size={48} className="text-neutral-400 dark:text-neutral-600" />
          </div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
            No favorites yet
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
            Start exploring components and click the star icon to save them to your favorites.
          </p>
          <Link to="/components">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
              Browse Components
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      )}

      {favorites.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {favorites.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block"
            >
              <Card className="hover-lift hover:shadow-lg transition-all duration-normal h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 shrink-0">
                    <FileText size={20} className="text-neutral-900 dark:text-neutral-50" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-1 flex items-center gap-2">
                      {item.title}
                      <Star size={16} className="fill-yellow-400 text-yellow-400 shrink-0" />
                    </CardTitle>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">
                      {item.path}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
