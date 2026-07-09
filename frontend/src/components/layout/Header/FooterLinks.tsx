import { memo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import {
  footerGroups,
  footerSocials,
} from "../../../features/home/data/footer.data";

const FooterLinks = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
      {/* Brand */}

      <div>
        <Link to="/" className="inline-flex items-center gap-3">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-linear-to-r
              from-fuchsia-500
              via-purple-600
              to-indigo-600
              text-2xl
              font-black
              text-white
              shadow-xl
            "
          >
            ❤
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">AmorAfrik</h2>

            <p className="text-sm text-slate-400">Rencontres Africaines</p>
          </div>
        </Link>

        <p className="mt-8 max-w-sm leading-8 text-slate-400">
          La plateforme de rencontres africaines qui rapproche des millions de
          personnes à travers le continent et la diaspora.
        </p>

        {/* Social */}

        <div className="mt-10 flex flex-wrap gap-4">
          {footerSocials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-slate-300
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-500
                  hover:bg-violet-600
                  hover:text-white
                "
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Navigation */}

      {footerGroups.map((group) => (
        <div key={group.title}>
          <h3
            className="
              text-lg
              font-bold
              text-white
            "
          >
            {group.title}
          </h3>

          <ul className="mt-8 space-y-4">
            {group.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-slate-400
                    transition-all
                    duration-300
                    hover:text-white
                  "
                >
                  <ChevronRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default memo(FooterLinks);
