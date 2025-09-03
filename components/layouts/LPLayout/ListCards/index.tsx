"use client";

import { ReactNode } from "react";
import { Cards } from "./components/Card";

type CardItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

interface Props {
  listCards?: CardItem[];
}

export default function ListCards({ listCards = [] }: Props) {
  return (
    <>
      {listCards.map((item, index) => (
        <Cards
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
}
