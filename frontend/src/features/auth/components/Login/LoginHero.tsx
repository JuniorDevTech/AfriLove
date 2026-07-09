import { memo } from "react";

import heroImage from "@/assets/images/photo12.avif";
import avatarOne from "@/assets/images/photo10.jfif";
import avatarTwo from "@/assets/images/photo11.jfif";

import AuthHero from "../AuthHero";

const LoginHero = () => {
  return (
    <AuthHero
      image={heroImage}
      badge="L'amour sans frontières"
      title="L'amour n'a pas de frontières,"
      highlight="mais il a une adresse."
      description="Rejoignez plus de 2,5 millions de célibataires africains qui recherchent une relation sérieuse partout dans le monde."
      stats={[
        {
          value: "2.5M+",
          label: "Membres",
        },
        {
          value: "180K+",
          label: "Couples",
        },
        {
          value: "54",
          label: "Pays",
        },
      ]}
      floatingCard={{
        avatarOne,
        avatarTwo,
        title: "Amara & Kofi viennent de matcher ❤️",
        subtitle: "Il y a 2 minutes",
      }}
    />
  );
};

export default memo(LoginHero);
