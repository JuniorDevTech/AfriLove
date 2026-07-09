import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import type { NavbarActionsProps } from "./Navbar.types";

const NavbarActions = ({ className = "" }: NavbarActionsProps) => {
  return (
    <div className={`hidden items-center gap-4 lg:flex ${className}`}>
      <Link
        to="/login"
        className="
          inline-flex
          items-center
          justify-center
          rounded-xl
          border
          border-slate-300
          bg-white
          px-5
          py-3
          text-sm
          font-semibold
          text-slate-700
          transition-all
          duration-300
          hover:border-purple-500
          hover:bg-purple-50
          hover:text-purple-600
          focus:outline-none
          focus:ring-2
          focus:ring-purple-400
          focus:ring-offset-2
        "
      >
        Se connecter
      </Link>

      <Link
        to="/register"
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-linear-to-r
          from-fuchsia-500
          via-purple-600
          to-indigo-600
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          shadow-lg
          shadow-purple-500/30
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-xl
          hover:shadow-purple-500/40
          focus:outline-none
          focus:ring-2
          focus:ring-purple-400
          focus:ring-offset-2
        "
      >
        <span>S'inscrire</span>

        <ArrowRight size={18} strokeWidth={2.5} />
      </Link>
    </div>
  );
};

export default memo(NavbarActions);
