import { memo } from "react";
import { Hand } from "lucide-react";
import { motion } from "framer-motion";

const LoginHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="mb-12"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/70 bg-violet-50/80 px-4 py-2 backdrop-blur-sm">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
          <Hand className="h-4 w-4 text-amber-500" />
        </div>

        <span className="text-sm font-semibold tracking-wide text-violet-700">
          Heureux de vous revoir
        </span>
      </div>

      {/* Title */}

      <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        Bon retour
        <span className="ml-3 inline-block">👋</span>
      </h1>

      {/* Subtitle */}

      <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
        Connectez-vous à votre compte pour retrouver vos matchs, vos
        conversations et poursuivre votre aventure sur{" "}
        <span className="font-semibold text-slate-900">AmorAfrik</span>.
      </p>
    </motion.header>
  );
};

export default memo(LoginHeader);
