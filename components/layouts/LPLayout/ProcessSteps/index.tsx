"use client";

import { Text, Title } from "@/components/elements/Texts";
import { steps } from "./content";

export default function ProcessSteps() {
  return (
    <section id="processo" className="py-14 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl font-semibold mb-10 text-grayscale-400">
          Processo de desenvolvimento de Web Sites
        </h2>

        <div className="hidden md:block space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-4 items-start"
            >
              <div className="border border-grayscale-100 p-4 h-full flex flex-col justify-center">
                <div>{step.icon}</div>
                <div className="mt-2">
                  <Title
                    as="h3"
                    className="text-sm/[24px] font-semibold text-grayscale-400"
                  >
                    {step.title}
                  </Title>
                  <Text className="text-xs/[24px] text-grayscale-300">
                    {step.description}
                  </Text>
                </div>
              </div>

              <div className="border border-grayscale-100 pl-40 col-span-3 flex flex-col gap-4 py-4">
                {step.items.map((line: string[], lineIndex: number) => (
                  <div
                    key={lineIndex}
                    className="flex flex-wrap gap-3"
                    style={{ transform: `translateX(${lineIndex * 2}rem)` }} // escadinha
                  >
                    {line.map((item: string, i: number) => (
                      <Text
                        key={i}
                        className="px-4 py-2 bg-grayscale-100 rounded-full text-xs text-grayscale-300"
                      >
                        {item}
                      </Text>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="md:hidden space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-grayscale-100 rounded-lg p-4 overflow-x-auto flex gap-6"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="shrink-0 w-48 flex flex-col justify-center">
                <div className="flex items-start gap-3">
                  <div className="shrink-0">{step.icon}</div>
                  <div>
                    <Title
                      as="h3"
                      className="text-sm/[24px] font-semibold text-grayscale-400"
                    >
                      {step.title}
                    </Title>
                    <Text className="text-xs/[24px] text-grayscale-300">
                      {step.description}
                    </Text>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 min-w-[300px]">
                {step.items.map((line: string[], lineIndex: number) => (
                  <div
                    key={lineIndex}
                    className="flex flex-wrap gap-3"
                    style={{ transform: `translateX(${lineIndex * 2}rem)` }}
                  >
                    {line.map((item: string, i: number) => (
                      <Text
                        key={i}
                        className="px-4 py-2 bg-grayscale-100 rounded-full text-xs text-grayscale-300 whitespace-nowrap"
                      >
                        {item}
                      </Text>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        <div
          className="md:hidden overflow-x-auto snap-x snap-mandatory -mx-6 px-6"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex flex-col gap-4 w-max">
            {steps.map((step, index) => (
              <div
                key={index}
                className="min-w-full snap-start border border-grayscale-100 rounded-lg p-4 flex gap-6"
              >
                {/* Coluna da esquerda */}
                <div className="shrink-0 w-48 flex flex-col justify-center">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">{step.icon}</div>
                    <div>
                      <Title
                        as="h3"
                        className="text-sm/[24px] font-semibold text-grayscale-400"
                      >
                        {step.title}
                      </Title>
                      <Text className="text-xs/[24px] text-grayscale-300">
                        {step.description}
                      </Text>
                    </div>
                  </div>
                </div>

                {/* Coluna da direita (bolhas) */}
                <div className="flex flex-col gap-4 min-w-[300px]">
                  {step.items.map((line: string[], lineIndex: number) => (
                    <div
                      key={lineIndex}
                      className="flex flex-wrap gap-3"
                      style={{ transform: `translateX(${lineIndex * 2}rem)` }}
                    >
                      {line.map((item: string, i: number) => (
                        <Text
                          key={i}
                          className="px-4 py-2 bg-grayscale-100 rounded-full text-xs text-grayscale-300 whitespace-nowrap"
                        >
                          {item}
                        </Text>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
