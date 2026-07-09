import { memo, useMemo, useState } from "react";
import { Menu } from "lucide-react";

import NavbarActions from "./NavbarActions";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import NavbarMobile from "./NavbarMobile";

import type { NavbarLink, NavbarProps } from "./Navbar.types";

const Navbar = ({ links }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navigationLinks = useMemo<NavbarLink[]>(() => links, [links]);

  const openMenu = (): void => {
    setIsMenuOpen(true);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div
            className="
              mt-5
              flex
              h-20
              items-center
              justify-between
              rounded-2xl
              border
              border-white/50
              bg-white/80
              px-6
              backdrop-blur-xl
              shadow-lg
              shadow-slate-200/50
            "
          >
            {/* Logo */}
            <NavbarLogo />

            {/* Desktop Navigation */}
            <NavbarLinks links={navigationLinks} />

            {/* Desktop Actions */}
            <NavbarActions />

            {/* Mobile Button */}
            <button
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={openMenu}
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                p-3
                text-slate-700
                transition-all
                duration-300
                hover:bg-slate-100
                focus:outline-none
                focus:ring-2
                focus:ring-purple-500
                lg:hidden
              "
            >
              <Menu size={24} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <NavbarMobile
        links={navigationLinks}
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </>
  );
};

export default memo(Navbar);
