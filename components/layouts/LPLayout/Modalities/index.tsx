"use client";

import { useState } from "react";
import Image from "next/image";
import { tabs } from "./content";
import { Section } from "@/components/elements/Section";
import { Title, Text } from "@/components/elements/Texts";
import ListCards from "../ListCards";
import { WhatsAppButton } from "@/components/elements/WhatsAppButton";

export default function Modalities() {
  const [activeTab, setActiveTab] = useState("ecommerce");

  const currentTab = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <Section id="modalidades" className="pb-20">
      <Title
        as="h2"
        className="text-grayscale-400 text-[24px]/[32px] font-semibold mb-8"
      >
        Modalidades
      </Title>

      {/* Tabs */}
      <div className="flex gap-20 bg-grayscale-150 p-4 justify-center text-grayscale-450 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${activeTab === tab.id ? "font-bold" : "font-normal"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6">
        <Text className="text-grayscale-300 text-sm whitespace-pre-line">
          {currentTab.descriptionStart}{" "}
          <span className="font-bold">{currentTab.highlightWord}</span>{" "}
          {currentTab.descriptionEnd}
          {currentTab.extra}
        </Text>

        <div className="my-8 relative pt-[50%]">
          <Image
            src={currentTab.image}
            alt={currentTab.label}
            fill
            className="rounded-xl shadow"
          />
        </div>

        <div className="flex flex-col gap-4 mb-6">
          {" "}
          <Title as="h3" className="text-2xl font-semibold text-grayscale-400">
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
        <div className="flex flex-col gap-8">
          <Title as="h3" className="text-2xl font-semibold text-grayscale-400">
            {currentTab.benefitsTitle}
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ListCards listCards={currentTab.benefits} />
          </div>
          <div className="w-full md:w-[360px]">
            {" "}
            <WhatsAppButton title="Solicite um orçamento para o seu projeto" />
          </div>
        </div>
      </div>
    </Section>
  );
}
