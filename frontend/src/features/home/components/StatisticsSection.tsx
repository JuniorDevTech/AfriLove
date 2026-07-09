import { memo } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HeartHandshake, Users, Globe2, MessageCircle } from "lucide-react";

const statistics = [
  {
    id: 1,
    value: 2500000,
    suffix: "+",
    label: "Membres actifs",
    icon: Users,
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    id: 2,
    value: 180000,
    suffix: "+",
    label: "Couples formés",
    icon: HeartHandshake,
    color: "from-violet-500 to-indigo-600",
  },
  {
    id: 3,
    value: 12000000,
    suffix: "+",
    label: "Messages échangés",
    icon: MessageCircle,
    color: "from-cyan-500 to-sky-500",
  },
  {
    id: 4,
    value: 54,
    suffix: "",
    label: "Pays africains",
    icon: Globe2,
    color: "from-amber-500 to-orange-500",
  },
];

const StatisticsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="relative overflow-hidden py-28">
      {/* Background */}

      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950" />

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-violet-200 backdrop-blur-xl">
            Notre communauté
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
            Des millions de personnes
            <span className="bg-linear-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              nous font déjà confiance
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            AmorAfrik connecte chaque jour des milliers de célibataires
            africains grâce à une plateforme moderne, sécurisée et intelligente.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {statistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-violet-400/30
                  hover:bg-white/10
                "
              >
                {/* Glow */}

                <div
                  className={`
                    absolute
                    inset-0
                    bg-linear-to-br
                    ${item.color}
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-20
                  `}
                />

                {/* Icon */}

                <div
                  className={`
                    inline-flex
                    rounded-2xl
                    bg-linear-to-r
                    ${item.color}
                    p-4
                    shadow-xl
                  `}
                >
                  <Icon size={32} className="text-white" />
                </div>

                {/* Counter */}

                <h3 className="mt-8 text-5xl font-black text-white">
                  {item.value}
                  {item.suffix}
                </h3>

                <p className="mt-4 text-lg text-slate-300">{item.label}</p>

                {/* Decoration */}

                <div className="absolute -right-5 -top-6 text-8xl font-black text-white/5">
                  0{item.id}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col items-center justify-center gap-4 text-center"
        >
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Chaque jour, des milliers de nouvelles histoires commencent sur
            AmorAfrik. Rejoignez une communauté qui place l'authenticité, le
            respect et l'amour au cœur de chaque rencontre.
          </p>

          <div className="mt-4 h-1 w-40 rounded-full bg-linear-to-r from-pink-500 via-violet-500 to-cyan-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default memo(StatisticsSection);
