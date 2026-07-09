import { memo } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

import TestimonialsCarousel from "../../../components/layout/Header/TestimonialsCarousel";

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-violet-50/30 to-white py-28">
      {/* Background Effects */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-fuchsia-300/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-105 w-105 rounded-full bg-indigo-300/20 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-lg ring-1 ring-violet-100">
            <Heart size={18} className="fill-pink-500 text-pink-500" />

            <span className="text-sm font-semibold text-violet-700">
              Plus de 180 000 couples formés
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Des histoires qui inspirent
            <span className="block bg-linear-to-r from-fuchsia-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              toute l'Afrique
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Derrière chaque rencontre se cache une histoire unique. Découvrez
            les témoignages de couples qui ont trouvé l'amour grâce à AmorAfrik.
          </p>
        </motion.div>

        {/* Carousel */}

        <TestimonialsCarousel />

        {/* Bottom Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="mt-24"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-4xl
              bg-linear-to-r
              from-fuchsia-600
              via-purple-600
              to-indigo-700
              p-10
              text-center
              shadow-[0_30px_80px_rgba(124,58,237,.35)]
            "
          >
            {/* Glow */}

            <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-xl">
                <Sparkles size={32} className="text-white" />
              </div>

              <h3 className="mt-8 text-3xl font-black text-white">
                Votre histoire commence aujourd'hui
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-violet-100">
                Rejoignez la plus grande communauté de rencontres africaines et
                trouvez une personne qui partage vos valeurs, votre culture et
                vos ambitions.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  className="
                    rounded-2xl
                    bg-white
                    px-8
                    py-4
                    font-semibold
                    text-violet-700
                    shadow-xl
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Créer un compte gratuitement
                </button>

                <button
                  className="
                    rounded-2xl
                    border
                    border-white/30
                    bg-white/10
                    px-8
                    py-4
                    font-semibold
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:bg-white/20
                  "
                >
                  Découvrir AmorAfrik
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(TestimonialsSection);
