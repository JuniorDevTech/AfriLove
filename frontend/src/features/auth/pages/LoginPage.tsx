import { memo } from "react";
import { motion } from "framer-motion";

import LoginHero from "../components/Login/LoginHero";
import LoginForm from "../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-slate-50">
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
        {/* Left */}

        <LoginHero />

        {/* Right */}

        <div
          className="
            flex
            flex-1
            items-center
            justify-center
            bg-white
          "
        >
          <LoginForm />
        </div>
      </motion.div>
    </main>
  );
};

export default memo(LoginPage);
