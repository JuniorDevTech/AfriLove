import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { features } from "../data/features.data";

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-fuchsia-200/30 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-105 w-105 rounded-full bg-indigo-200/30 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
            Pourquoi choisir AmorAfrik ?
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            Une plateforme pensée pour des
            <span className="bg-linear-to-r from-fuchsia-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              rencontres authentiques
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Nous mettons la technologie au service des relations humaines.
            Profils vérifiés, intelligence de matching, sécurité renforcée et
            une expérience utilisateur moderne pour vous aider à trouver la
            bonne personne.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-violet-200
                  hover:shadow-2xl
                "
              >
                {/* Gradient */}

                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-linear-to-br from-fuchsia-50 via-transparent to-indigo-50" />
                </div>

                {/* Icon */}

                <div
                  className={`
                    relative
                    inline-flex
                    rounded-2xl
                    p-4
                    ${feature.bgColor}
                  `}
                >
                  <Icon className={feature.color} size={30} strokeWidth={2.2} />
                </div>

                {/* Content */}

                <h3 className="relative mt-8 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="relative mt-4 leading-8 text-slate-600">
                  {feature.description}
                </p>

                {/* Learn More */}

                <button
                  className="
                    relative
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-violet-600
                    transition-all
                    duration-300
                    group-hover:gap-4
                  "
                >
                  En savoir plus
                  <ArrowRight size={18} />
                </button>

                {/* Number */}

                <span
                  className="
                    absolute
                    -right-4
                    -top-6
                    text-8xl
                    font-black
                    text-slate-100
                    transition-all
                    duration-300
                    group-hover:scale-110
                  "
                >
                  0{feature.id}
                </span>

                {/* Glow */}

                <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-linear-to-r from-fuchsia-400/20 to-indigo-400/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <button
            className="
              inline-flex
              items-center
              gap-3
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
              hover:shadow-purple-300/50
            "
          >
            Découvrir toutes les fonctionnalités
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);
