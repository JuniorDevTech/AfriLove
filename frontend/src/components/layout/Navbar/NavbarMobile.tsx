import { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";

import type { NavbarMobileProps } from "./Navbar.types";

const NavbarMobile = ({ links, isOpen, onClose }: NavbarMobileProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <button
        type="button"
        aria-label="Fermer le menu"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
      />

      {/* Drawer */}
      <aside
        className="
          fixed
          right-0
          top-0
          z-50
          flex
          h-screen
          w-[320px]
          max-w-full
          flex-col
          bg-white
          shadow-2xl
          lg:hidden
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-slate-900">AmorAfrik</h2>

            <p className="text-xs text-slate-500">Rencontres Africaines</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="
              rounded-lg
              p-2
              transition
              hover:bg-slate-100
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col px-6 py-6">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              onClick={onClose}
              className="
                rounded-xl
                px-4
                py-4
                text-base
                font-semibold
                text-slate-700
                transition-all
                duration-300
                hover:bg-purple-50
                hover:text-purple-600
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="space-y-3 border-t border-slate-200 p-6">
          <Link
            to="/login"
            onClick={onClose}
            className="
              flex
              w-full
              items-center
              justify-center
              rounded-xl
              border
              border-slate-300
              px-4
              py-3
              font-semibold
              text-slate-700
              transition
              hover:border-purple-500
              hover:bg-purple-50
              hover:text-purple-600
            "
          >
            Se connecter
          </Link>

          <Link
            to="/register"
            onClick={onClose}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-linear-to-r
              from-fuchsia-500
              via-purple-600
              to-indigo-600
              px-4
              py-3
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-[1.02]
            "
          >
            <span>S'inscrire</span>

            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default memo(NavbarMobile);
