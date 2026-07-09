import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

import FooterLinks from "../../../components/layout/Header/FooterLinks";
import { legalLinks, mobileApps } from "../data/footer.data";

const FooterSection = () => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Footer */}

      <div className="relative mt-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <FooterLinks />

          {/* Applications */}

          <div className="mt-20 border-t border-white/10 pt-12">
            <h3 className="text-xl font-bold">Télécharger AmorAfrik</h3>

            <div className="mt-8 flex flex-wrap gap-5">
              {mobileApps.map((app) => {
                const Icon = app.icon;

                return (
                  <a
                    key={app.id}
                    href={app.href}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-6
                      py-4
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-violet-500
                      hover:bg-white/10
                    "
                  >
                    <div className="rounded-xl bg-violet-600 p-3">
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="text-sm text-slate-400">{app.title}</p>

                      <p className="font-semibold">{app.subtitle}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom */}

          <div className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="
                    text-sm
                    text-slate-400
                    transition-colors
                    hover:text-white
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} AmorAfrik. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>

      {/* Back To Top */}

      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        type="button"
        onClick={scrollToTop}
        aria-label="Retour en haut"
        className="
          fixed
          bottom-8
          right-8
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-linear-to-r
          from-fuchsia-500
          to-indigo-600
          text-white
          shadow-2xl
          transition-all
          duration-300
          hover:shadow-fuchsia-500/40
        "
      >
        <ArrowUp size={22} />
      </motion.button>
    </footer>
  );
};

export default memo(FooterSection);
