"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WhatsAppButton } from "@/components/elements/WhatsAppButton";
import { Text, TextHighlight, Title } from "@/components/elements/Texts";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div className="hidden lg:block">
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 "
          onClick={() => setIsOpen(false)} // fecha ao clicar no fundo
        >
          <div
            className="relative w-full max-w-[1087px] bg-white overflow-hidden flex flex-col md:flex-row h-[75%]"
            onClick={(e) => e.stopPropagation()} // impede fechar ao clicar dentro
          >
            {/* Botão de fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl z-2"
            >
              ×
            </button>

            {/* Parte Esquerda (Imagem de Fundo 1) */}
            <div
              className="w-full md:w-1/2 text-white p-8 flex flex-col justify-center relative bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/pictures/bg-popup-azul.png')",
              }}
            >
              <Text className="absolute -left-24 top-[45%] -rotate-90 text-2xl tracking-widest bg-white p-2 text-purplescale-50 font-bold">
                todos os sites com
              </Text>
              <div className="max-w-[20rem] mx-auto z-2">
                <Title
                  as="h2"
                  className={`text-[221px]/[185px] font-extrabold ${bebas_neue.className}`}
                >
                  30%
                </Title>

                <Text
                  className={`text-[41px]/[34px] uppercase ${bebas_neue.className}`}
                >
                  de desconto
                </Text>
                <Text className="mt-4 text-[15px]">
                  <strong>A hora é agora! </strong>Garanta seu site antes
                </Text>
                <Text className="text-[15px]">que a promoção acabe.</Text>
              </div>
            </div>

            {/* Parte Direita (Imagem de Fundo 2) */}
            <div
              className="w-full md:w-1/2 pl-[14rem] p-8 flex flex-col justify-center text-center md:text-left relative bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/pictures/bg-popup-branco.png')",
              }}
            >
              <div className={`text-[57px]/[45px] ${bebas_neue.className}`}>
                <Title as="h2" className="mb-2 uppercase">
                  Não <TextHighlight>perca </TextHighlight>essa{" "}
                </Title>
                <TextHighlight>Chance!</TextHighlight>

                <Text className="mt-2 text-sm text-grayscale-300">
                  Desconto imperdível!
                </Text>
              </div>
              <div className="w-full md:w-[230px] mt-4">
                <WhatsAppButton title="Solicite um orçamento" />
              </div>
            </div>

            {/* Mascote */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/pictures/monster-popup.png"
                alt="Bluemonster"
                width={421}
                height={421}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full h-screen overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white text-2xl z-10"
            >
              ×
            </button>

            {/* Parte Esquerda (Imagem de Fundo 1) */}
            <div
              className="w-full h-1/2 text-white p-8 flex flex-col justify-start relative bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/pictures/bg-popup-mobile-blue.png')",
              }}
            >
              <div className="max-w-[20rem] mx-auto z-30 text-center">
                <Title
                  as="h2"
                  className={`text-[221px]/[185px] font-extrabold ${bebas_neue.className}`}
                >
                  30%
                </Title>

                <Text
                  className={`text-[41px]/[34px] uppercase ${bebas_neue.className}`}
                >
                  de desconto
                </Text>
              </div>
            </div>

            {/* Parte Direita (Imagem de Fundo 2) */}
            <div
              className="w-full h-1/2 flex flex-col justify-end text-center relative bg-cover bg-center pb-8"
              style={{
                backgroundImage:
                  "url('/images/pictures/bg-popup-mobile-white.png')",
              }}
            >
              <div
                className={`text-[57px]/[50px] ${bebas_neue.className} z-30`}
              >
                <Title as="h2" className="mb-2 uppercase">
                  Não <TextHighlight>perca </TextHighlight>essa
                </Title>
                <TextHighlight>Chance!</TextHighlight>
                <div className="text-grayscale-300 text-[15px]/[27px] mt-2">
                  <Text>
                    <strong>A hora é agora! </strong>Garanta seu site antes
                  </Text>
                  <Text>que a promoção acabe.</Text>
                </div>
              </div>
              <div className="w-full mt-4 px-8">
                <WhatsAppButton title="Solicite um orçamento" />
              </div>
            </div>

            {/* Mascote responsivo */}
            <div className="absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <Image
                src="/images/pictures/monster-popup.png"
                alt="Bluemonster"
                width={342}
                height={342}
                priority
                className="w-[120vw] max-w-[342px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
