"use client";

import { Section } from "@/components/elements/Section";
import Image from "next/image";
import { Title, TextHighlight } from "@/components/elements/Texts";
// import ModalForm from "../ModalForm";
// import { useState } from "react";
// import { ButtonPrimary } from "@/components/elements/Button";
import { WhatsAppButton } from "@/components/elements/WhatsAppButton";

export default function Hero() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <Section className="bg-grayscale-50 pt-16 md:pt-0 mb-[11rem] md:mb-[5rem] max-h-[33rem] md:max-h-[30rem] 3xl:max-h-[40rem] md:h-full">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-5">
        <div className="flex flex-col justify-center text-left gap-8">
          <Title
            as="h1"
            className="text-grayscale-400 font-bold text-[32px]/[normal] md:text-[25px] lg:text-[40px] lg:pb-5"
          >
            <div className="hidden md:flex justify-start mb-0">
              Aumente suas&nbsp;<TextHighlight>vendas&nbsp;</TextHighlight>com
            </div>

            <div className="hidden md:flex justify-start mb-0">
              um site&nbsp;<TextHighlight>exclusivo&nbsp;</TextHighlight>para o
            </div>

            <div className="hidden md:flex justify-start mb-0">
              seu negócio.
            </div>

            <div className="md:hidden mb-0 text-center">
              Aumente suas&nbsp;<TextHighlight>vendas&nbsp;</TextHighlight>
            </div>

            <div className="md:hidden mb-0 text-center">
              com um site&nbsp;<TextHighlight>exclusivo&nbsp;</TextHighlight>
            </div>

            <div className="md:hidden mb-0 text-center">
              para o seu negócio.
            </div>
          </Title>

          <div className="w-full md:w-[230px]">
            {/* <ButtonPrimary onClick={() => setIsOpen(true)}>
              Solicite um orçamento
            </ButtonPrimary>

            <ModalForm isOpen={isOpen} setIsOpen={setIsOpen} /> */}

            <WhatsAppButton title="Solicite um orçamento" />
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
