import { memo } from "react";
import { ArrowRight, Heart, Play, Star } from "lucide-react";
import { motion } from "framer-motion";

import HeroMediaCard from "../../../components/layout/Header/HeroMediaCard";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-violet-50 via-white to-white pt-36 pb-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-[120px]" />

      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-indigo-300/30 blur-[140px]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row lg:px-8">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-lg ring-1 ring-slate-200">
            <Heart className="fill-pink-500 text-pink-500" size={18} />

            <span className="text-sm font-semibold text-slate-700">
              +2.5 Millions de membres actifs
            </span>
          </div>

          {/* Title */}

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">
            Trouvez votre
            <br />
            moitié
            <span className="block bg-linear-to-r from-fuchsia-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              africaine
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
            Rejoignez la plus grande plateforme de rencontres africaines.
            Découvrez des profils vérifiés, échangez en toute sécurité et
            trouvez une relation authentique partout en Afrique.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              className="
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-linear-to-r
              from-fuchsia-500
              via-purple-600
              to-indigo-600
              px-8
              py-4
              font-semibold
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:scale-105
            "
            >
              Commencer gratuitement
              <ArrowRight size={20} />
            </button>

            <button
              className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-slate-300
              bg-white
              px-8
              py-4
              font-semibold
              text-slate-700
              transition
              hover:border-purple-400
              hover:text-purple-600
            "
            >
              <Play size={18} />
              Voir la vidéo
            </button>
          </div>

          {/* Bottom */}

          <div className="mt-12 flex flex-wrap items-center gap-6">
            {/* Avatars */}

            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((avatar) => (
                <img
                  key={avatar}
                  src={`https://i.pravatar.cc/100?img=${avatar + 10}`}
                  alt=""
                  className="h-12 w-12 rounded-full border-4 border-white object-cover shadow"
                />
              ))}
            </div>

            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-1 text-sm text-slate-500">
                Plus de <strong>180 000</strong> couples heureux ❤️
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-1 justify-center"
        >
          <HeroMediaCard />
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
