import type { FC } from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Nav } from "./Nav";
import { Logo } from "./Logo";

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
    <header className="bg-red-900 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-yellow-300"
          aria-label="Go to home"
        >
          <Logo />
          Andre Madiz Team
        </NavLink>

        {/* Desktop navigation */}
        <Nav
          items={navItems}
          desktopClass="hidden md:flex space-x-6"
          mobileClass="hidden"
        />
        <button
          type="button"
          className="md:hidden flex items-center gap-1 text-yellow-300"
          onClick={toggle}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          <span className="text-yellow-300">{isOpen ? "Close" : "Menu"}</span>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-red-500 shadow-md transition-all duration-200 ease-out`}
      >
        <Nav
          items={navItems}
          mobile
          onClick={toggle}
          desktopClass="hidden"
          mobileClass="block px-4 py-2 space-y-1"
        />
      </div>
    </header>
  );
};
