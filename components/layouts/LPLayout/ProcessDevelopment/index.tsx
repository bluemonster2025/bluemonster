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
      {/* Título Desktop */}
      <Title
        as="h2"
        className="hidden lg:block text-2xl font-semibold mb-10 text-grayscale-400"
      >
        Processo de desenvolvimento de Web Sites
      </Title>

      {/* Título Mobile */}
      <Title
        as="h2"
        className="block lg:hidden text-2xl font-semibold mb-10 text-grayscale-400"
      >
        Processo de desenvolvimento
      </Title>

      {/* MOBILE → Slider */}
      <div className="block lg:hidden">
        <div ref={sliderRef} className="keen-slider">
          {steps.map((step) => (
            <div
              key={step.id}
              className="keen-slider__slide border border-grayscale-100"
            >
              <StepCard step={step} />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP → Grid */}
      <div className="hidden lg:grid grid-cols-4">
        {steps.map((step) => (
          <div key={step.id} className="border border-grayscale-100">
            <StepCard step={step} />
          </div>
        ))}
      </div>
    </Section>
  );
}

function StepCard({ step }: { step: (typeof steps)[0] }) {
  return (
    <>
      {/* Cabeçalho */}
      <div className="pl-4 py-4 flex flex-col items-start gap-6 mb-4 border-b border-grayscale-100 min-h-[165px]">
        <div className="w-10 h-10 rounded-full bg-purplescale-50 flex items-center justify-center">
          <Text className="text-white font-semibold text-base">{step.id}</Text>
        </div>
        <div className="flex flex-col gap-4">
          <Title as="h2" className="font-semibold text-grayscale-400 text-sm">
            {step.title}
          </Title>
          <Text className="text-xs text-grayscale-300">{step.description}</Text>
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
    </>
  );
}
