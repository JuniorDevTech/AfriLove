import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../features/home/data/testimonials.data";

const AUTOPLAY_DELAY = 5000;

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const totalSlides = testimonials.length;

  const currentTestimonial = useMemo(
    () => testimonials[currentIndex],
    [currentIndex],
  );

  const goToPrevious = useCallback((): void => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? totalSlides - 1 : previousIndex - 1,
    );
  }, [totalSlides]);

  const goToNext = useCallback((): void => {
    setCurrentIndex((previousIndex) =>
      previousIndex === totalSlides - 1 ? 0 : previousIndex + 1,
    );
  }, [totalSlides]);

  const goToSlide = useCallback((index: number): void => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) =>
        previousIndex === totalSlides - 1 ? 0 : previousIndex + 1,
      );
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative mt-20">
      {/* Slider */}

      <div className="mx-auto max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -80,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            <TestimonialCard testimonial={currentTestimonial} active />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}

      <button
        type="button"
        onClick={goToPrevious}
        aria-label="Témoignage précédent"
        className="
          absolute
          left-0
          top-1/2
          hidden
          -translate-y-1/2
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-4
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          hover:border-violet-300
          hover:text-violet-600
          xl:flex
        "
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Témoignage suivant"
        className="
          absolute
          right-0
          top-1/2
          hidden
          -translate-y-1/2
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-4
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          hover:border-violet-300
          hover:text-violet-600
          xl:flex
        "
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination */}

      <div className="mt-12 flex items-center justify-center gap-4">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            aria-label={`Voir le témoignage ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`
              transition-all
              duration-300
              ${
                currentIndex === index
                  ? "h-3 w-10 rounded-full bg-linear-to-r from-fuchsia-500 to-indigo-600"
                  : "h-3 w-3 rounded-full bg-slate-300 hover:bg-slate-400"
              }
            `}
          />
        ))}
      </div>

      {/* Counter */}

      <div className="mt-8 text-center">
        <span className="text-sm font-medium text-slate-500">
          {String(currentIndex + 1).padStart(2, "0")}

          <span className="mx-2">/</span>

          {String(totalSlides).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default memo(TestimonialsCarousel);
