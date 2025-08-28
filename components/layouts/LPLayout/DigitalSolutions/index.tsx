"use client";

import { Title, Text, TextHighlight } from "@/components/elements/Texts";
import { Section } from "@/components/elements/Section";

export default function DigitalSolutions() {
  return (
    <>
      <Section id="solucoes-digitais" className="w-full py-8 lg:pt-17 lg:pb-25">
        <div className="flex flex-col-reverse lg:flex-row  lg:justify-between items-center gap-7 lg:gap-36">
          <div className="lg:max-w-[525px]">
            <Title
              as="h2"
              className="text-grayscale-400 text-[24px]/[32px] font-semibold mb-6"
            >
              A K-Monster
            </Title>
            <Text className="font-normal mb-6 text-grayscale-300 text-sm/[24px]">
              Na <strong>K-Monster</strong> acreditamos que o digital deve ser
              simples, acessível e eficiente.
            </Text>
            <Text className="font-normal mb-6 text-grayscale-300 text-sm/[24px]">
              Nosso propósito é ajudar empresas e profissionais a conquistarem
              presença online com sites que geram resultados reais. Unimos
              design criativo, tecnologia e estratégia para entregar soluções
              sob medida para o seu negócio.
            </Text>
          </div>
          <div>
            <Title className="font-bold text-[38px]/normal lg:text-[50px] text-grayscale-400">
              Soluções digitais <TextHighlight>exclusivas</TextHighlight> para o
            </Title>
            <Title className="font-bold text-[38px]/normal lg:text-[50px] text-grayscale-400">
              seu negócio.
            </Title>
          </div>
        </div>
      </Section>
    </>
  );
}
