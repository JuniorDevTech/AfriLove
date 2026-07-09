import { memo } from "react";
import { motion } from "framer-motion";

import type { AuthHeroStat } from "../types";

export interface AuthHeroStatsProps {
  stats: ReadonlyArray<AuthHeroStat>;
}

const AuthHeroStats = ({ stats }: AuthHeroStatsProps) => {
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
        duration: 0.7,
        delay: 0.5,
      }}
      className="mt-12 grid grid-cols-3 gap-6"
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="
            rounded-2xl
            border
            border-white/15
            bg-white/10
            p-5
            text-center
            backdrop-blur-xl
          "
        >
          <h3
            className="
              text-3xl
              font-black
              text-white
            "
          >
            {stat.value}
          </h3>

          <p
            className="
              mt-2
              text-sm
              font-medium
              text-slate-200
            "
          >
            {stat.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default memo(AuthHeroStats);
