import { memo } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RegisterHeader = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="mb-10"
    >
      {/* Retour */}

      <Link
        to="/login"
        className="
          inline-flex
          items-center
          gap-2
          text-sm
          font-medium
          text-slate-500
          transition-colors
          duration-300
          hover:text-violet-600
        "
      >
        <ArrowLeft size={18} />
        Retour à la connexion
      </Link>

      {/* Titre */}

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <h1
            className="
              text-4xl
              font-black
              tracking-tight
              text-slate-900
            "
          >
            Créer un compte
          </h1>

          <Sparkles
            size={30}
            className="
              text-amber-400
              fill-amber-300
            "
          />
        </div>

        <p
          className="
            mt-4
            max-w-lg
            text-lg
            leading-8
            text-slate-500
          "
        >
          Rejoignez des millions d'Africains qui cherchent l'amour, construisez
          des relations sincères et trouvez votre âme sœur.
        </p>
      </div>
    </motion.div>
  );
};

export default memo(RegisterHeader);
