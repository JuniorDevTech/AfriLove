export interface AuthHeroStat {
  value: string;
  label: string;
}

export interface AuthHeroFloatingCard {
  avatarOne: string;
  avatarTwo: string;
  title: string;
  subtitle: string;
}

export interface AuthHeroProps {
  image: string;

  badge: string;

  title: string;

  highlight: string;

  description: string;

  stats: AuthHeroStat[];

  floatingCard?: AuthHeroFloatingCard;
}
