import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/navconfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          UI Lab
        </Link>

        {/* Dekstop Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-600 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
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

      {/* Mobile Menu */}
      {/* <div
        className={`md:hidden flex flex-col border-t px-6 py-4 space-y-3 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          to="/components"
          className="hover:text-black text-gray-600 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
        >
          Components
        </Link>
        <Link
          to="/docs"
          className="hover:text-black text-gray-600 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
        >
          Docs
        </Link>
        <Link
          to="https://github.com/Risabhostwal48"
          className="hover:text-black text-gray-600 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
        >
          Github
        </Link>
      </div> */}
      {open && (
        <div className="md:hidden border-t px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="block">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
