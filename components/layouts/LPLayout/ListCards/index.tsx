"use client";

import { useState, ReactNode } from "react";
import { Cards } from "./components/Card";
import { useKeenSlider } from "keen-slider/react";

type CardItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

interface Props {
  listCards?: CardItem[];
}

export default function ListCards({ listCards = [] }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 1.25,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2.25,
        },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {listCards.map((item, index) => (
          <Cards
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="md:hidden mt-8">
        <div ref={sliderRef} className="keen-slider mb-12 flex">
          {listCards.map((item, index) => (
            <div key={index} className="keen-slider__slide pr-6 ml-5">
              <Cards
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          {listCards.map((_, index) => (
            <button
              key={index}
              onClick={() => slider.current?.moveToIdx(index)}
              className={`w-2 h-2 rounded-full mx-1 ${
                currentSlide === index
                  ? "bg-primary-50"
                  : "bg-primary-50 opacity-50"
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
