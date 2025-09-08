import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/photos", label: "Photos" },
  { to: "/contact", label: "Contact" },
];

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((o) => !o);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand / Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-indigo-600"
          aria-label="Go to home"
        >
          Andre Madiz Team
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "text-white bg-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex items-center gap-1"
          onClick={toggle}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          <span className="text-gray-700">{isOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      {/* Mobile Nav (collapsible) */}
      <div
        id="mobile-menu"
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-md transition-all duration-200 ease-out`}
      >
        <nav className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "text-white bg-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`
              }
              onClick={toggle} // Close the menu when a link is clicked
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
