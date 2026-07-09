import {
  BadgeCheck,
  BrainCircuit,
  ShieldCheck,
  MessageCircleHeart,
  CreditCard,
  Globe2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export const features: FeatureItem[] = [
  {
    id: 1,
    title: "Profils vérifiés",
    description:
      "Tous les membres passent par un processus de vérification afin de garantir des rencontres sérieuses et sécurisées.",
    icon: BadgeCheck,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    id: 2,
    title: "Match intelligent",
    description:
      "Notre intelligence analyse vos préférences pour vous proposer les profils les plus compatibles.",
    icon: BrainCircuit,
    color: "text-violet-600",
    bgColor: "bg-violet-100",
  },
  {
    id: 3,
    title: "Confidentialité",
    description:
      "Vos informations restent protégées grâce à des technologies modernes de sécurité et de chiffrement.",
    icon: ShieldCheck,
    color: "text-sky-600",
    bgColor: "bg-sky-100",
  },
  {
    id: 4,
    title: "Messagerie privée",
    description:
      "Discutez instantanément avec vos matchs grâce à une messagerie rapide et sécurisée.",
    icon: MessageCircleHeart,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    id: 5,
    title: "Paiement sécurisé",
    description:
      "Abonnements Premium via Orange Money, MTN Mobile Money et cartes bancaires.",
    icon: CreditCard,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    id: 6,
    title: "Disponible dans 54 pays",
    description:
      "Rencontrez des célibataires africains partout sur le continent et dans la diaspora.",
    icon: Globe2,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
];
