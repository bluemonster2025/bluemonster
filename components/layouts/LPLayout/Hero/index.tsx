import { ButtonPrimary } from "@/components/elements/Button";
import { Section } from "@/components/elements/Section";
import { TextHighlight, Title } from "@/components/elements/Texts";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Section className="hidden lg:flex mb-20 bg-grayscale-50">
        <div className="flex h-full relative min-h-[640px] gap-32">
          <div className="md:max-w-[32rem] mt-0 pt-20 mx-0 flex flex-col justify-center w-full h-full text-left">
            <Title
              as="h1"
              className="text-grayscale-400 font-bold text-[48px] pb-5"
            >
              <div className="flex justify-start mb-0">
                Experiências&nbsp;<TextHighlight>digitais</TextHighlight>
                &nbsp;que
              </div>

              <div className="flex justify-start mb-0">
                <TextHighlight>cabem </TextHighlight>&nbsp;no seu bolso!
              </div>
            </Title>

            <div className="lw-full lg:w-80">
              <ButtonPrimary href="/contato" target="_blank">
                Solicite um orçamento para o seu projeto
              </ButtonPrimary>
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="absolute w-full h-full -bottom-35">
              <Image
                className="object-scale-down"
                fill
                src="/images/pictures/monster.svg"
                alt="Banner"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </Section>
      <div className="block lg:hidden mb-12 bg-gradient-to-b from-primary-400 via-primary-200 to-primary-300">
        <div className="flex h-full relative min-h-[775px] md:min-h-[910px] justify-center">
          <div className="mt-8 pt-20 md:mx-auto flex flex-col w-full h-full text-center">
            <Title
              as="h1"
              className="text-white normal-case font-semibold text-[calc(1rem+4vw)] pb-5"
            >
              Resolva seus
              <div>problemas</div>
              <div className="flex justify-center">
                <TextHighlight>financeiros&nbsp;</TextHighlight>com as
              </div>
              <div className="flex justify-center">
                melhores&nbsp;<TextHighlight>opções</TextHighlight>
              </div>
              do mercado.
            </Title>
          </div>
          <div className="absolute w-full bottom-0">
            <div className="relative pt-96">
              <Image
                className="object-contain"
                fill
                src="/images/pictures/monster.svg"
                alt="Banner"
                loading="eager"
              />
            </div>
          </div>

          <div className="absolute w-[40%] md:w-[20%] bottom-16">
            <div className="relative z-10">
              <ButtonPrimary href="/contato" target="_blank">
                Iniciar
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
