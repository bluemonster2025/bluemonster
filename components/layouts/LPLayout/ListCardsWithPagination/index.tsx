"use client";

import { useState } from "react";
import ListCards from "../ListCards";
import { CardProps } from "../ListCards/types";
import { Text } from "@/components/elements/Texts";

type Props = {
  listCards: CardProps[];
  itemsPerPage?: number;
};

export default function ListCardsWithPagination({
  listCards,
  itemsPerPage = 4,
}: Props) {
  const [visibleCount, setVisibleCount] = useState<number>(itemsPerPage);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + itemsPerPage);
  };

  const hasMore = visibleCount < listCards.length;

  return (
    <div className="flex flex-col gap-6">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ListCards listCards={listCards.slice(0, visibleCount)} />
      </div>

      {/* Botão */}
      <div className="flex justify-center">
        <button
          onClick={handleShowMore}
          disabled={!hasMore}
          className={`px-6 py-2 text-white transition 
            ${
              hasMore
                ? "bg-purplescale-50"
                : "bg-grayscale-100 cursor-not-allowed"
            }`}
        >
          <Text className="text-sm font-bold">Ver mais</Text>
        </button>
      </div>
    </div>
  );
}
