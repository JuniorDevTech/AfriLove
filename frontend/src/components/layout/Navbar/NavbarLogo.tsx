import { memo } from "react";
import { Heart } from "lucide-react";
import type { NavbarLogoProps } from "./Navbar.types";

const NavbarLogo = ({ logo, title = "AmorAfrik" }: NavbarLogoProps) => {
  return (
    <a
      href="/"
      className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-90"
      aria-label="Accueil AmorAfrik"
    >
      {logo ?? (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-fuchsia-500 via-purple-600 to-indigo-600 shadow-lg shadow-purple-500/30">
          <Heart className="h-6 w-6 fill-white text-white" strokeWidth={2.2} />
        </div>
      )}

      <div className="flex flex-col leading-none">
        <span className="bg-linear-to-r from-fuchsia-500 via-purple-600 to-indigo-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
          {title}
        </span>

        <span className="text-xs font-medium uppercase tracking-[0.30em] text-slate-500">
          Rencontres Africaines
        </span>
      </div>
    </a>
  );
};

export default memo(NavbarLogo);
