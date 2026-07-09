import ngoziEmeka from "@/assets/images/photo1.avif";
import testimonial2 from "@/assets/images/photo2.avif";
import testimonial3 from "@/assets/images/photo3.avif";

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  image: string;
  rating: number;
  message: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ngozi & Emeka",
    country: "Nigeria",
    image: ngoziEmeka,
    rating: 5,
    message:
      "La vérification des profils nous a donné confiance dès le début. Après quelques semaines de discussion, nous nous sommes rencontrés à Lagos. Aujourd'hui nous préparons notre mariage. Merci AmorAfrik ❤️.",
  },
  {
    id: 2,
    name: "Aïcha & Mamadou",
    country: "Côte d'Ivoire",
    image: testimonial2,
    rating: 5,
    message:
      "Nous cherchions une plateforme sérieuse dédiée aux Africains. AmorAfrik nous a permis de nous rencontrer en toute sécurité. Une très belle expérience.",
  },
  {
    id: 3,
    name: "Grace & Kevin",
    country: "Kenya",
    image: testimonial3,
    rating: 5,
    message:
      "Le système de matching est impressionnant. Nous avions énormément de points communs et la conversation est venue naturellement. Merci pour cette belle histoire.",
  },
];
