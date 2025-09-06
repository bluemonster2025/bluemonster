import Icon from "@/components/elements/Icon";
import { ButtonPrimary, ButtonSecondary } from "../Button";

interface Props {
  title: string;
  variant?: "primary" | "secondary";
}

export const WhatsAppButton = ({ title, variant = "primary" }: Props) => {
  const whatsappNumber = "5511915260039";
  const message = "Olá! Quero mais informações sobre a BlueMonster!";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return variant === "primary" ? (
    <ButtonPrimary type="button" onClick={handleClick}>
      <div className="flex gap-4">
        {" "}
        <Icon name="BsWhatsapp" size={20} /> {title}{" "}
      </div>
    </ButtonPrimary>
  ) : (
    <ButtonSecondary type="button" onClick={handleClick}>
      <div className="flex gap-4">
        {" "}
        <Icon name="BsWhatsapp" size={20} /> {title}{" "}
      </div>
    </ButtonSecondary>
  );
};
