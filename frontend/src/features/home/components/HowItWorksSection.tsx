import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { howItWorksSteps } from "../data/howItWorks.data";

const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
            Comment ça fonctionne
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            Trouver votre moitié n'a
            <span className="bg-linear-to-r from-fuchsia-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              jamais été aussi simple
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            En seulement quelques étapes, rejoignez des millions de célibataires
            africains et commencez à créer des relations sérieuses.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">
          {/* Ligne Desktop */}

          <div className="grid gap-10 lg:grid-cols-3">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    group
                    relative
                     z-10
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-10
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-violet-200
                    hover:shadow-2xl
                  "
                >
                  {/* Number */}

                  <div
                    className={`
                      inline-flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-linear-to-r
                      ${step.gradient}
                      text-xl
                      font-black
                      text-white
                      shadow-lg
                    `}
                  >
                    {step.step}
                  </div>

                  {/* Icon */}

                  <div className="mt-8 inline-flex rounded-2xl bg-slate-100 p-4 transition-all duration-300 group-hover:scale-110">
                    <Icon size={34} className="text-violet-600" />
                  </div>

                  {/* Content */}

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {step.description}
                  </p>

                  {/* Glow */}

                  <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-linear-to-r from-fuchsia-400/20 to-indigo-400/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Decorative Number */}

                  <span className="absolute -right-4 -top-8 text-8xl font-black text-slate-100 transition-transform duration-300 group-hover:scale-110">
                    {step.step}
                  </span>
                </motion.article>
              );
            })}
          </div>
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
            Commencer gratuitement
            <ArrowRight size={20} />
          </button>

          <p className="mt-6 text-sm text-slate-500">
            Inscription gratuite • Sans engagement • Profils vérifiés
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HowItWorksSection);
