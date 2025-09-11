import { LPTemplate } from "@/components/templates/LPTemplate";

export const metadata = {
  title: "Blue Monster",
  description:
    "Crie um site exclusivo e gerenciável para o seu negócio – com design moderno, loja virtual, SEO otimizado, hospedagem e suporte completo. Solicite um orçamento e aumente suas vendas hoje mesmo!",
  openGraph: {
    images: "/images/pictures/thumbnail.webp",
  },
};

export default function Home() {
  return <LPTemplate />;
}
