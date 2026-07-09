import { memo } from "react";
import { motion } from "framer-motion";
import { Quote, MapPin, Star } from "lucide-react";

import type { Testimonial } from "../../../features/home/data/testimonials.data";

interface TestimonialCardProps {
  testimonial: Testimonial;
  active: boolean;
}

const TestimonialCard = ({ testimonial, active }: TestimonialCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: active ? 1 : 0.45,
        scale: active ? 1 : 0.94,
        y: active ? 0 : 20,
      }}
      transition={{
        duration: 0.45,
      }}
      className={`
        relative
        overflow-hidden
        rounded-4xl
        border
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        ${
          active
            ? "border-violet-200 bg-white shadow-2xl"
            : "border-slate-200 bg-slate-50"
        }
      `}
    >
      {/* Glow */}

      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-linear-to-br from-fuchsia-300/20 to-indigo-300/20 blur-3xl" />

      {/* Quote */}

      <div className="inline-flex rounded-2xl bg-linear-to-r from-fuchsia-500 to-indigo-600 p-4 shadow-lg">
        <Quote className="text-white" size={28} />
      </div>

      {/* Rating */}

      <div className="mt-8 flex items-center gap-1">
        {Array.from({
          length: testimonial.rating,
        }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Message */}

      <p className="mt-6 text-lg leading-9 text-slate-600 italic">
        "{testimonial.message}"
      </p>

      {/* Footer */}

      <div className="mt-10 flex items-center gap-5">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="
            h-20
            w-20
            rounded-2xl
            object-cover
            shadow-lg
          "
        />

        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900">
            {testimonial.name}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-slate-500">
            <MapPin size={16} className="text-violet-600" />

            <span>{testimonial.country}</span>
          </div>
        </div>
      </div>

      {/* Active Badge */}

      {active && (
        <motion.div
          layoutId="activeCard"
          className="
            absolute
            right-6
            top-6
            rounded-full
            bg-linear-to-r
            from-fuchsia-500
            to-indigo-600
            px-4
            py-2
            text-xs
            font-semibold
            text-white
          "
        >
          Histoire inspirante ❤️
        </motion.div>
      )}
    </motion.article>
  );
};

export default memo(TestimonialCard);
