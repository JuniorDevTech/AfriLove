import { UserRoundPlus, UserCheck, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HowItWorksItem {
  id: number;
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export const howItWorksSteps: HowItWorksItem[] = [
  {
    id: 1,
    step: "01",
    title: "Créez votre compte",
    description:
      "Inscrivez-vous gratuitement en quelques secondes et commencez votre aventure sur AmorAfrik.",
    icon: UserRoundPlus,
    gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
  },
  {
    id: 2,
    step: "02",
    title: "Complétez votre profil",
    description:
      "Ajoutez vos photos, vos centres d'intérêt et vos préférences afin d'obtenir des recommandations précises.",
    icon: UserCheck,
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
  },
  {
    id: 3,
    step: "03",
    title: "Commencez à matcher",
    description:
      "Découvrez des célibataires compatibles, échangez en toute sécurité et créez des relations authentiques.",
    icon: HeartHandshake,
    gradient: "from-indigo-500 via-sky-500 to-cyan-500",
  },
];
