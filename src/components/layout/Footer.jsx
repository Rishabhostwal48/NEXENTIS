import { Link } from "react-router-dom";
import { Github, Twitter, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-3">
              Nexentis
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 max-w-md">
              Production-ready React + Tailwind components. Copy and paste into your apps. 
              Accessible. Customizable. Open Source.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Rishabhostwa48/Nexentis"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com/jain_rishabh48"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
              Components
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/components"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                >
                  All Components
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/buttons"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                >
                  Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Rishabhostwal48/Nexentis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Rishbahostwl48/Nexentis"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                >
                  Contributing
                </a>
              </li>
              <li>
                <a
                  href="https://opensource.org/license/mit"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Nexentis. Open source under MIT License.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500" /> for developers
          </p>
        </div>
      </div>
    </footer>
  );
}


