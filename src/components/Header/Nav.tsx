import type { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavProps {
  /** Route + label for each menu item */
  items: ReadonlyArray<{ to: string; label: string }>;
  /** Optional: add extra CSS classes (desktop only) */
  desktopClass?: string;
  /** Optional: add extra CSS classes (mobile only) */
  mobileClass?: string;
  /** Optional callback to close the mobile menu when a link is clicked */
  onClick?: () => void;
  /** Whether we’re rendering the mobile menu */
  mobile?: boolean;
}

export const Nav: FC<NavProps> = ({
  items,
  desktopClass = "",
  mobileClass = "",
  onClick,
  mobile = false,
}) => (
  <nav className={mobile ? "md:hidden" : "hidden md:flex gap-x-4"}>
    {items.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) => {
          const base = mobile
            ? "block px-3 py-2 rounded-md text-base font-medium "
            : "px-3 py-2 rounded-md text-sm font-medium ";

          const active = isActive
            ? "bg-yellow-300 text-red-500"
            : 'text-yellow-300 hover:ring-1 hover:ring-yellow-300 hover:text-yellow-300 hover:shadow-md';

          return `${base}${active}${mobile ? mobileClass : desktopClass}`;
        }}
        onClick={onClick}
      >
        {item.label}
      </NavLink>
    ))}
  </nav>
);
