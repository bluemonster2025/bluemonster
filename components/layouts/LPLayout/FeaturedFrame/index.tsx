import { Title, Text } from "@/components/elements/Texts";
import { WhatsAppButton } from "@/components/elements/WhatsAppButton";

export default function FeaturedFrame() {
  return (
    <div>
      <div className="bg-purplescale-50 p-8 lg:py-30 lg:px-40 flex flex-col gap-8 mb-18">
        <div className="gap-4">
          {" "}
          <Title
            as="h2"
            className="text-white text-center normal-case text-[40px]/[54px] font-bold"
          >
            A concorrência já está online!
          </Title>
          <Text className="text-lg/[54px] text-white text-center">
            Sua presença online pode abrir portas todos os dias, não perca mais
            tempo.
          </Text>
        </div>

        <div className="w-full md:w-[340px] mx-auto">
          <WhatsAppButton
            title="Começe seu projeto agora mesmo"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}
