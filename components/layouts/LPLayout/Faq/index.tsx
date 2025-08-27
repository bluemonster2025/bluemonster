"use client";

import { Section } from "@/components/elements/Section";
import { Title, Text } from "@/components/elements/Texts";
import Image from "next/image";
import { useState } from "react";

interface IFaqItemProps {
  title: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  isLast: boolean;
}

const FaqItem = ({ title, answer, isOpen, onClick, isLast }: IFaqItemProps) => {
  return (
    <div
      className={`pb-6  border-b border-[#EBECEF] ${isLast ? "mb-0" : "mb-6"}`}
    >
      <header onClick={onClick} className="cursor-pointer flex justify-between">
        <Text className="text-sm font-semibold text-grayscale-400">
          {title}
        </Text>
        <Image
          width="24"
          height="24"
          src={`/images/icons/icon-${isOpen ? "minus" : "plus"}.svg`}
          alt="Pergunta icone"
        />
      </header>

      <main
        className={`overflow-hidden transition-all ${isOpen ? "h-10" : "h-0"}`}
      >
        <Text className="text-purplescale-100 text-sm font-normal mt-4 h-10 overflow-hidden">
          {answer}
        </Text>
      </main>
    </div>
  );
};

interface IFaq {
  data: Omit<IFaqItemProps, "isOpen" | "onClick" | "isLast">[];
  tagH?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const FAQ = ({ data, tagH }: IFaq) => {
  const [questOpened, setQuestOpened] = useState<number | undefined>(0);

  const handleQuestionClick = (index: number) =>
    index === questOpened ? setQuestOpened(undefined) : setQuestOpened(index);

  return (
    <Section id="faq" className="py-20">
      <Title
        as={tagH}
        className="text-2xl font-semibold mb-8 text-grayscale-400"
      >
        Perguntas frequentes
      </Title>

      <div className="flex justify-between pb-24 lg:pb-0">
        <div className="w-full mb-20 md:mb-0">
          {data.map((question, index) => {
            return (
              <FaqItem
                key={index}
                title={question.title}
                answer={question.answer}
                isOpen={questOpened === index}
                onClick={() => handleQuestionClick(index)}
                isLast={index === data.length - 1}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};
