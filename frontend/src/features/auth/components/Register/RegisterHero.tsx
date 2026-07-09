import { memo } from "react";

import heroImage from "@/assets/images/photo12.avif";
import avatarOne from "@/assets/images/photo10.jfif";
import avatarTwo from "@/assets/images/photo11.jfif";

import AuthHero from "../AuthHero";

const RegisterHero = () => {
  return (
    <AuthHero
      image={heroImage}
      badge="Commencez votre aventure"
      title="Votre histoire d'amour"
      highlight="commence aujourd'hui."
      description="Créez gratuitement votre profil, découvrez des milliers de célibataires africains et trouvez une personne qui partage vos valeurs."
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
        title: "Plus de 1 200 nouveaux membres aujourd'hui ❤️",
        subtitle: "Rejoignez la communauté AmorAfrik",
      }}
    />
  );
};

export default memo(RegisterHero);
