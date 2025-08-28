import { Section } from "@/components/elements/Section";
import Image from "next/image";
import { Title, TextHighlight } from "@/components/elements/Texts";
import { ButtonPrimary } from "@/components/elements/Button";

export default function Hero() {
  return (
    <Section className="mb-20 bg-grayscale-50 pt-16 md:pt-0 mb-[12rem] md:mb-[4rem] max-h-[30rem] md:h-full">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-5">
        <div className="flex flex-col justify-center text-left gap-8">
          <Title
            as="h1"
            className="text-grayscale-400 font-bold text-[32px]/[normal] lg:text-[48px] lg:pb-5"
          >
            <div className="hidden md:flex justify-start mb-0">
              Experiências&nbsp;<TextHighlight>digitais</TextHighlight>
              &nbsp;que
            </div>

            <div className="hidden md:flex justify-start mb-0">
              <TextHighlight>cabem </TextHighlight>&nbsp;no seu bolso!
            </div>

            <div className="md:hidden mb-0 text-center">
              Experiências&nbsp;<TextHighlight>digitais</TextHighlight>
            </div>

            <div className="md:hidden mb-0 text-center">
              que&nbsp;<TextHighlight>cabem </TextHighlight>&nbsp;no seu
            </div>

            <div className="md:hidden mb-0 text-center">bolso!</div>
          </Title>

          <div className="w-full md:w-80">
            <ButtonPrimary href="/contato" target="_blank">
              Solicite um orçamento para o seu projeto
            </ButtonPrimary>
          </div>
        </div>

        <div className="relative flex items-end flex-col justify-end">
          <div className="relative py-[55%] md:py-[41%] w-full top-[-1rem] md:top-11 lg:top-16">
            <Image
              fill
              className="object-scale-down"
              src="/images/pictures/monster.svg"
              alt="Blue Monster"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
