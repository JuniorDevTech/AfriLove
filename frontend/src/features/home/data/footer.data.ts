import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import type { IconType } from "react-icons";

import { FaApple, FaGooglePlay } from "react-icons/fa";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocial {
  name: string;
  href: string;
  icon: IconType;
}

export const footerGroups: FooterGroup[] = [
  {
    title: "AmorAfrik",
    links: [
      {
        label: "À propos",
        href: "/about",
      },
      {
        label: "Comment ça marche",
        href: "/how-it-works",
      },
      {
        label: "Témoignages",
        href: "/testimonials",
      },
      {
        label: "Blog",
        href: "/blog",
      },
    ],
  },

  {
    title: "Découvrir",
    links: [
      {
        label: "Rencontres",
        href: "/discover",
      },
      {
        label: "Recherche avancée",
        href: "/search",
      },
      {
        label: "Profils vérifiés",
        href: "/verification",
      },
      {
        label: "Évènements",
        href: "/events",
      },
    ],
  },

  {
    title: "Premium",
    links: [
      {
        label: "Abonnements",
        href: "/premium",
      },
      {
        label: "Boost de profil",
        href: "/boosts",
      },
      {
        label: "Cadeaux virtuels",
        href: "/gifts",
      },
      {
        label: "Paiements",
        href: "/payments",
      },
    ],
  },

  {
    title: "Support",
    links: [
      {
        label: "Centre d'aide",
        href: "/support",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
      {
        label: "Nous contacter",
        href: "/contact",
      },
      {
        label: "Signaler un problème",
        href: "/report",
      },
    ],
  },
];

export const footerSocials: FooterSocial[] = [
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedin,
  },
  {
    name: "X",
    href: "#",
    icon: FaXTwitter,
  },
  {
    name: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
];

export const mobileApps = [
  {
    id: 1,
    title: "Télécharger sur",
    subtitle: "App Store",
    icon: FaApple,
    href: "#",
  },
  {
    id: 2,
    title: "Disponible sur",
    subtitle: "Google Play",
    icon: FaGooglePlay,
    href: "#",
  },
];

export const legalLinks: FooterLink[] = [
  {
    label: "Conditions d'utilisation",
    href: "/terms",
  },
  {
    label: "Politique de confidentialité",
    href: "/privacy",
  },
  {
    label: "Cookies",
    href: "/cookies",
  },
  {
    label: "Mentions légales",
    href: "/legal",
  },
];
