import { memo } from "react";
import { motion } from "framer-motion";

import RegisterForm from "../components/Register/RegisterForm";
import RegisterHero from "../components/Register/RegisterHero";

const RegisterPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          flex
          min-h-screen
          flex-col
          lg:flex-row
        "
      >
        {/* Hero */}

        <RegisterHero />

        {/* Form */}

        <div
          className="
            flex
            flex-1
            items-center
            justify-center
            bg-white
          "
        >
          <RegisterForm />
        </div>
      </motion.div>
    </main>
  );
};

export default memo(RegisterPage);
