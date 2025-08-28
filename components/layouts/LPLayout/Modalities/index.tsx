"use client";

import { useState } from "react";
import Image from "next/image";
import { tabs } from "./content";
import { Section } from "@/components/elements/Section";
import { Title, Text } from "@/components/elements/Texts";

export default function Modalities() {
  const [active, setActive] = useState("landing");
  const current = tabs.find((t) => t.id === active)!;
  const others = tabs.filter((t) => t.id !== active);

  return (
    <Section className="pb-8">
      <Title
        as="h2"
        className="text-grayscale-400 text-[24px]/[32px] font-semibold mb-12"
      >
        Modalidades
      </Title>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="flex items-end md:items-center gap-5 lg:gap-8 relative">
          <div className="bg-grayscale-100 rounded-md relative h-[456px]">
            <div className="absolute top-7 -left-56 transform translate-x-[60%] w-120">
              <ul className="text-grayscale-400 list-disc text-[32px]/[56px] lg:text-[40px]/[56px]">
                <li>
                  <Text className="text-grayscale-400 font-semibold ">
                    {current.title}
                  </Text>
                </li>
              </ul>
            </div>

            <ul className="list-disc space-y-3 mt-28 text-grayscale-300 text-sm text-left font-semibold pl-8">
              {others.map((tab) => (
                <li key={tab.id}>
                  <button
                    className="w-[9rem] text-left"
                    type="button"
                    onClick={() => setActive(tab.id)}
                  >
                    <Text>{tab.title}</Text>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <Text className="text-grayscale-300 text-sm/[24px] max-w-[340px] mt-2">
            {current.description}
          </Text>
        </div>

        <div className="hidden lg:flex flex justify-center lg:justify-end">
          <div className="relative w-[560px] h-[320px]">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
