import { ButtonSecondary } from "@/components/elements/Button";
import { Title, Text } from "@/components/elements/Texts";

export default function FeaturedFrame() {
  return (
    <div>
      <div className="bg-purplescale-50 p-8 lg:py-30 lg:px-40 flex flex-col gap-12">
        <Title
          as="h2"
          className="text-white text-center normal-case text-[40px]/[54px] font-bold"
        >
          Projetos sob medida a partir de R$300/mês.
        </Title>

        <div className="w-[285px] m-auto">
          <ButtonSecondary href="/contato" target="_blank">
            <Text className="text-sm/[24px] font-semibold">
              Começe seu projeto agora mesmo
            </Text>
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
}
