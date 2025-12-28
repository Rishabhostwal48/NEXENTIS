import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {  Menu, SearchIcon,  X } from "lucide-react";
import { navLinks } from "../../data/navconfig";
import { ThemeContext } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { Authcontext } from "../../context/AuthContext";
import Button from "../ui/Button";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const {user, logout} = useContext(Authcontext)
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="w-full border-b border-neutral-200 bg-white dark:bg-neutral-900 dark:border-neutral-800 sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-neutral-900/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-neutral-900 dark:text-neutral-50 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
          Nexentis
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-1 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-normal hover-underline ${
                  isActive
                    ? "font-semibold text-neutral-900 dark:text-neutral-50 bg-neutral-100 dark:bg-neutral-800"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                }`}
              >
                <link.icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <Link 
            to="/search" 
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            aria-label="Search"
          >
            <SearchIcon size={18}/>
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Auth */}
          {user ? (
            <Button size="sm" variant="outline" onClick={logout} className="ml-2">
              Logout
            </Button>
          ) : (
            <Link to="/login" className="ml-2">
              <Button size="sm">Login</Button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-normal ${
                    isActive
                      ? "font-semibold text-neutral-900 dark:text-neutral-50 bg-neutral-100 dark:bg-neutral-800"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                  }`}
                >
                  <link.icon size={18} />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
