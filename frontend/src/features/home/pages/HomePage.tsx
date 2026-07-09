import { memo } from "react";

import { Navbar } from "../../../components/layout/Navbar";

import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import StatisticsSection from "../components/StatisticsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FooterSection from "../components/FooterSection";

const HomePage = () => {
  const navigationLinks = [
    {
      id: "home",
      label: "Accueil",
      href: "/",
    },
    {
      id: "discover",
      label: "Découvrir",
      href: "/discover",
    },
    {
      id: "how",
      label: "Comment ça marche",
      href: "/#how-it-works",
    },
    {
      id: "premium",
      label: "Premium",
      href: "/premium",
    },
    {
      id: "testimonials",
      label: "Témoignages",
      href: "/#testimonials",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar links={navigationLinks} />

      <HeroSection />

      <FeaturesSection />

      <HowItWorksSection />

      <StatisticsSection />

      <TestimonialsSection />

      <FooterSection />
    </main>
  );
};

export default memo(HomePage);
