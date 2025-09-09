"use client";

import { useState, useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { tabs } from "./content";
import { Section } from "@/components/elements/Section";
import { Title, Text } from "@/components/elements/Texts";
import ListCards from "../ListCards";
import { WhatsAppButton } from "@/components/elements/WhatsAppButton";
import Image from "next/image";

export default function Modalities() {
  const [activeTab, setActiveTab] = useState("ecommerce");
  const currentTab = tabs.find((tab) => tab.id === activeTab)!;

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: { perView: "auto", spacing: 16 },
  });

  const frameRef = useRef<HTMLDivElement | null>(null);
  const [naturalSize, setNaturalSize] = useState<{
    w: number;
    h: number;
  } | null>(null);
  const [frameSize, setFrameSize] = useState<{ w: number; h: number }>({
    w: 800,
    h: 500,
  });
  const [innerScroll, setInnerScroll] = useState(0);

  // Carrega dimensões da imagem
  useEffect(() => {
    const img = new window.Image();
    img.src = currentTab.image;
    img.onload = () =>
      setNaturalSize({ w: img.naturalWidth, h: img.naturalHeight });
  }, [currentTab.image]);

  // Atualiza tamanho do frame
  useEffect(() => {
    const updateFrame = () => {
      if (!frameRef.current) return;
      setFrameSize({
        w: frameRef.current.clientWidth,
        h: frameRef.current.clientHeight,
      });
    };
    updateFrame();
    window.addEventListener("resize", updateFrame);
    return () => window.removeEventListener("resize", updateFrame);
  }, []);

  // Controle de scroll dentro do frame
  useEffect(() => {
    if (!frameRef.current || !naturalSize) return;
    const frame = frameRef.current;

    const displayedImageHeight =
      (naturalSize.h / naturalSize.w) * frame.clientWidth;
    const maxScroll = Math.max(displayedImageHeight - frame.clientHeight, 0);

    const handleWheel = (e: WheelEvent) => {
      // Se imagem já terminou, deixa página rolar normalmente
      if (
        (innerScroll <= 0 && e.deltaY < 0) ||
        (innerScroll >= maxScroll && e.deltaY > 0)
      ) {
        return;
      }

      e.preventDefault();
      setInnerScroll((prev) => {
        const next = Math.max(0, Math.min(prev + e.deltaY, maxScroll));
        return next;
      });
    };

    frame.addEventListener("wheel", handleWheel, { passive: false });
    return () => frame.removeEventListener("wheel", handleWheel);
  }, [naturalSize, innerScroll]);

  const displayedImageHeight = naturalSize
    ? (naturalSize.h / naturalSize.w) * frameSize.w
    : frameSize.h;

  return (
    <Section id="modalidades" className="pb-28">
      <Title
        as="h2"
        className="text-grayscale-400 text-[24px]/[32px] font-semibold mb-8"
      >
        Modalidades
      </Title>

      {/* Mobile Slider */}
      <div className="md:hidden" ref={sliderRef}>
        <div className="keen-slider bg-grayscale-150 p-4 text-grayscale-450 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`keen-slider__slide px-4 py-2 min-w-max whitespace-nowrap ${
                activeTab === tab.id ? "font-bold" : "font-normal"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:flex md:justify-center md:gap-6 lg:gap-20 bg-grayscale-150 p-4 text-grayscale-450 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-3 py-2 whitespace-nowrap ${
              activeTab === tab.id ? "font-bold" : "font-normal"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Descrição */}
      <div className="mt-6">
        <Text className="text-grayscale-300 text-sm whitespace-pre-line">
          {currentTab.descriptionStart}{" "}
          <span className="font-bold">{currentTab.highlightWord}</span>{" "}
          {currentTab.descriptionEnd}
          {currentTab.extra}
        </Text>

        {/* Monitor */}
        {/* Notebook Moldura */}
        <div className="relative w-full my-12 flex justify-center items-center lg:bg-black py-12">
          <div className="relative w-full max-w-[746px]">
            {/* Base do monitor */}
            <div className="absolute top-0 left-0 w-full h-8 z-2 bg-grayscale-600 rounded-t-[30px] flex justify-center items-center"></div>
            {/* Corpo da tela */}
            <div
              ref={frameRef}
              className="relative h-[290px] md:h-[530px] lg:h-[520px] rounded-[30px] border-x-[1rem] border-grayscale-600 overflow-hidden shadow-xl"
            >
              {/* Tela com scroll */}
              <div
                style={{
                  position: "absolute",
                  top: 32,
                  left: 0,
                  width: "100%",
                  height: `${displayedImageHeight}px`,
                  transform: `translateY(${-innerScroll}px)`,
                  willChange: "transform",
                }}
              >
                <Image
                  src={currentTab.image}
                  alt={currentTab.label}
                  width={naturalSize?.w || frameSize.w} // largura real ou do frame
                  height={naturalSize?.h || frameSize.h} // altura real ou do frame
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    pointerEvents: "none",
                  }}
                  draggable={false}
                  priority
                />
              </div>
              {/* Câmera */}
              <div className="z-3 absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#a0a0a030] rounded-full" />
            </div>

            {/* Base do monitor */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-grayscale-600 rounded-b-[30px] flex justify-center items-center">
              <div className="w-20 h-2 bg-[#a0a0a030] rounded"></div>
            </div>
          </div>
        </div>

        {/* Ideal para */}
        <div className="flex flex-col gap-4 mb-6">
          <Title as="h2" className="text-2xl font-semibold text-grayscale-400">
            Ideal para
          </Title>
          <Text className="text-grayscale-300 text-sm">{currentTab.ideal}</Text>
        </div>

        <div className="flex flex-wrap gap-2 mb-15">
          {currentTab.idealFor.map((item) => (
            <Text
              key={item}
              className="px-3 py-1 border border-bluescale-50 text-sm rounded-sm text-grayscale-300"
            >
              {item}
            </Text>
          ))}
        </div>

        {/* Benefícios */}
        <div className="flex flex-col gap-8">
          <Title as="h2" className="text-2xl font-semibold text-grayscale-400">
            {currentTab.benefitsTitle}
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ListCards listCards={currentTab.benefits} />
          </div>
          <div className="w-full md:w-[360px]">
            <WhatsAppButton
              title="Solicite um orçamento para o seu projeto"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
