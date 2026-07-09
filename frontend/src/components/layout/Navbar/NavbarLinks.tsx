import { memo } from "react";
import { NavLink } from "react-router-dom";
import type { NavbarLinksProps } from "./Navbar.types";

const NavbarLinks = ({ links, className = "" }: NavbarLinksProps) => {
  return (
    <nav
      className={`hidden items-center gap-8 lg:flex ${className}`}
      aria-label="Navigation principale"
    >
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.href}
          className={({ isActive }) =>
            [
              "relative text-sm font-semibold transition-all duration-300",
              "after:absolute after:-bottom-2 after:left-0 after:h-0.5",
              "after:w-0 after:rounded-full",
              "after:bg-linear-to-r after:from-fuchsia-500 after:to-indigo-600",
              "after:transition-all after:duration-300",
              "hover:text-purple-600 hover:after:w-full",
              isActive ? "text-purple-600 after:w-full" : "text-slate-700",
            ].join(" ")
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default memo(NavbarLinks);
