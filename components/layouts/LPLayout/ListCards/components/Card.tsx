"use client";

import { Title, Text } from "@/components/elements/Texts";
import { CardProps } from "../types";

export const Cards = ({ icon, title, description }: CardProps) => {
  return (
    <div className="border border-grayscale-100 p-4 h-full flex flex-col gap-2 rounded-md">
      <div className="mb-2">{icon}</div>
      <Title
        as="h2"
        className="normal-case text-grayscale-400 font-semibold text-sm/[24px]"
      >
        {title}
      </Title>
      <Text className="text-sm/[24px] font-normal text-grayscale-300 mb-4">
        {description}
      </Text>
    </div>
  );
};
