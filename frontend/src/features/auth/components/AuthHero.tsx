import { memo } from "react";
import { Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import type { AuthHeroProps } from "../types";

import AuthHeroStats from "./AuthHeroStats";
import AuthHeroFloatingCard from "./AuthHeroFloatingCard";

const AuthHero = ({
  image,
  badge,
  title,
  highlight,
  description,
  stats,
  floatingCard,
}: AuthHeroProps) => {
  return (
    <section className="relative hidden overflow-hidden lg:flex lg:w-1/2">
      {/* Background */}

      <img
        src={image}
        alt="AmorAfrik"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/50" />

      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/20 to-transparent" />

      {/* Glow */}

      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[140px]" />

      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-[160px]" />

      {/* Content */}

      <div className="relative flex h-full w-full flex-col justify-between p-12">
        {/* Logo */}

        <Link to="/" className="inline-flex w-fit items-center gap-3">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-white/15
              backdrop-blur-xl
            "
          >
            <Heart size={24} className="fill-white text-white" />
          </div>

          <span className="text-3xl font-black tracking-wide text-white">
            AmorAfrik
          </span>
        </Link>

        {/* Bottom */}

        <div className="max-w-xl">
          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2
              backdrop-blur-xl
            "
          >
            <MapPin size={16} className="text-white" />

            <span className="text-sm font-semibold text-white">{badge}</span>
          </div>

          {/* Title */}

          <h1 className="mt-8 text-5xl font-black leading-tight text-white">
            {title}

            <span className="mt-2 block text-amber-300">{highlight}</span>
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-200">
            {description}
          </p>

          {/* Statistics */}

          <AuthHeroStats stats={stats} />

          {/* Floating Card */}

          {floatingCard && <AuthHeroFloatingCard data={floatingCard} />}
        </div>
      </div>
    </section>
  );
};

export default memo(AuthHero);
