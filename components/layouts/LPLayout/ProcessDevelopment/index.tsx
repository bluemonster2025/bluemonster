"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Text, Title } from "@/components/elements/Texts";
import { steps } from "./content";
import { Section } from "@/components/elements/Section";

export default function ProcessDevelopment() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "snap",
    slides: {
      perView: 1.25,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.25 },
      },
    },
  });

  return (
    <Section id="processo" className="pb-18 lg:pb-9">
      <Title
        as="h2"
        className="hidden lg:block text-2xl font-semibold mb-10 text-grayscale-400"
      >
        Processo de desenvolvimento de Web Sites
      </Title>

      <Title
        as="h2"
        className="block lg:block text-2xl font-semibold mb-10 text-grayscale-400"
      >
        Processo de desenvolvimento
      </Title>

      <div ref={sliderRef} className="keen-slider">
        {steps.map((step) => (
          <div
            key={step.id}
            className="keen-slider__slide border border-grayscale-100"
          >
            {/* Cabeçalho */}
            <div className="p-4 flex flex-col items-start gap-3 mb-4 border-b border-grayscale-100 min-h-[140px]">
              <div className="w-10 h-10 rounded-full bg-purplescale-50 flex items-center justify-center">
                <Text className="text-white font-semibold text-base">
                  {step.id}
                </Text>
              </div>
              <div>
                <Title
                  as="h3"
                  className="font-semibold text-grayscale-400 text-sm"
                >
                  {step.title}
                </Title>
                <Text className="text-xs text-grayscale-300">
                  {step.description}
                </Text>
              </div>
            </div>

            {/* Lista de itens */}
            <ul className="space-y-2 mt-4 px-4 pb-4">
              {step.items.map((group, groupIndex) => (
                <li key={groupIndex} className="flex flex-wrap gap-2">
                  {group.map((item, index) => (
                    <Text
                      key={index}
                      className="px-4 py-2 bg-grayscale-100 rounded-full text-xs text-grayscale-300 whitespace-nowrap"
                    >
                      {item}
                    </Text>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
