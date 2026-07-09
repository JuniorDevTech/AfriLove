import { memo } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import type { AuthHeroFloatingCard } from "../types";

export interface AuthHeroFloatingCardProps {
  data: AuthHeroFloatingCard;
}

const AuthHeroFloatingCard = ({ data }: AuthHeroFloatingCardProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.8,
      }}
      className="
        mt-10
        flex
        w-fit
        items-center
        gap-5
        rounded-3xl
        border
        border-white/15
        bg-white/10
        px-6
        py-5
        shadow-2xl
        backdrop-blur-2xl
      "
    >
      {/* Avatars */}

      <div className="flex -space-x-3">
        <img
          src={data.avatarOne}
          alt="Premier utilisateur"
          className="
            h-14
            w-14
            rounded-full
            border-2
            border-white
            object-cover
          "
        />

        <img
          src={data.avatarTwo}
          alt="Deuxième utilisateur"
          className="
            h-14
            w-14
            rounded-full
            border-2
            border-white
            object-cover
          "
        />
      </div>

      {/* Texte */}

      <div>
        <h3 className="flex items-center gap-2 text-lg font-bold text-white">
          {data.title}

          <Heart size={18} className="fill-rose-500 text-rose-500" />
        </h3>

        <p className="mt-1 text-sm text-slate-200">{data.subtitle}</p>
      </div>
    </motion.div>
  );
};

export default memo(AuthHeroFloatingCard);
