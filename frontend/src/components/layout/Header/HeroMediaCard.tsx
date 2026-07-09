import { memo } from "react";
import { CheckCircle2, Heart, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const HeroMediaCard = () => {
  return (
    <div className="relative w-full max-w-140">
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-fuchsia-400/25 via-violet-400/25 to-indigo-400/25 blur-[120px]" />

      {/* Circle */}

      <div className="absolute left-1/2 top-1/2 h-155 w-155 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-200/40" />

      <div className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/50" />

      {/* Main Card */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden rounded-[36px] bg-white p-4 shadow-[0_40px_90px_rgba(99,102,241,.25)]"
      >
        <div className="relative overflow-hidden rounded-[30px]">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
            alt="Membre AmorAfrik"
            className="h-162.5 w-full object-cover"
          />

          {/* Gradient */}

          <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent" />
        </div>

        {/* Verified */}

        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="absolute left-6 top-6"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/90 px-5 py-4 backdrop-blur-xl shadow-xl">
            <div className="rounded-full bg-emerald-100 p-2">
              <ShieldCheck className="text-emerald-600" size={20} />
            </div>

            <div>
              <p className="font-bold text-slate-900">Profil vérifié</p>

              <p className="text-sm text-slate-500">Identité confirmée</p>
            </div>
          </div>
        </motion.div>

        {/* Match */}

        <motion.div
          animate={{
            x: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="absolute -right-4 top-56"
        >
          <div className="rounded-2xl bg-linear-to-r from-pink-500 to-purple-600 px-6 py-5 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <Heart className="fill-white" size={24} />

              <div>
                <p className="font-bold">Nouveau Match !</p>

                <p className="text-sm text-pink-100">
                  Sarah vous aime aussi ❤️
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Couples */}

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="absolute bottom-8 left-6"
        >
          <div className="rounded-2xl border border-white/40 bg-white/90 px-6 py-5 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-pink-100 p-2">
                <Heart className="fill-pink-500 text-pink-500" size={20} />
              </div>

              <div>
                <p className="text-2xl font-black text-slate-900">42K+</p>

                <p className="text-sm text-slate-500">Couples formés</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Online */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="absolute bottom-36 -right-5"
        >
          <div className="rounded-2xl border border-white/40 bg-white/90 px-5 py-4 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                  alt="Utilisateur"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              </div>

              <div>
                <p className="font-semibold text-slate-900">Ibrahim</p>

                <p className="text-sm text-emerald-600">En ligne</p>
              </div>

              <MessageCircle className="text-purple-600" size={20} />
            </div>
          </div>
        </motion.div>

        {/* Badge */}

        <div className="absolute bottom-44 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-fuchsia-500 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-xl">
          ❤️ Match 98%
        </div>
      </motion.div>

      {/* Decoration */}

      <CheckCircle2
        size={36}
        className="absolute -left-6 top-28 text-emerald-500"
      />

      <Heart
        size={30}
        className="absolute -right-4 bottom-24 fill-pink-500 text-pink-500"
      />
    </div>
  );
};

export default memo(HeroMediaCard);
