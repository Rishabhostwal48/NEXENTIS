import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon, Menu, X } from "lucide-react";
import { navLinks } from "../../data/navconfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          UI Lab
        </Link>

        {/* Dekstop Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2  ${
                  isActive ? "font-semibold  text-black" : "text-gray-600"
                }`}
              >
                <link.icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden p-2 rounded-md bg-gray-100 "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 bg-gray-50" />
          ) : (
            <Menu className="w-6 h-6 bg-gray-100" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className={`md:hidden flex flex-col border-t px-6 py-4 space-y-3 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 p-3 pl-20 mb-2 mt-1 rounded ${
                  isActive
                    ? "font-bold bg-gray-100  text-black"
                    : "text-gray-600"
                }`}
              >
                <link.icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
