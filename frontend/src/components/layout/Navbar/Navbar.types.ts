import type { ReactNode } from "react";

export interface NavbarLink {
  id: string;
  label: string;
  href: string;
}

export interface NavbarLogoProps {
  logo?: ReactNode;
  title?: string;
}

export interface NavbarLinksProps {
  links: NavbarLink[];
  className?: string;
}

export interface NavbarActionsProps {
  className?: string;
}

export interface NavbarMobileProps {
  links: NavbarLink[];
  isOpen: boolean;
  onClose: () => void;
}

export interface NavbarProps {
  links: NavbarLink[];
}
