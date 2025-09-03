import Icon from "@/components/elements/Icon";
import { ButtonPrimary } from "../Button";

interface Props {
  title: string;
}

export const WhatsAppButton = ({ title }: Props) => {
  const whatsappNumber = "5519991729065";
  const message = "Olá! Quero mais informações sobre a BlueMonster!";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <ButtonPrimary type="button" onClick={handleClick}>
      <div className="flex gap-4">
        <Icon name="BsWhatsapp" size={20} />
        {title}
      </div>
    </ButtonPrimary>
  );
};
