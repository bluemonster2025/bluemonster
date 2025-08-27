"use client";

import Image from "next/image";
import { testimonials } from "./content";
import { Text } from "@/components/elements/Texts";

export default function Testimonials() {
  return (
    <section className="bg-grayscale-50 py-18">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl font-semibold mb-22 text-grayscale-400">
          Nossos clientes nos recomendam
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[64rem] m-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 flex flex-col items-center text-center max-w-[318px] max-h-[251px] m-auto"
            >
              <div className="w-28 h-28 relative rounded-full overflow-hidden shadow-md -mt-16 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <Text className="text-lg font-semibold text-grayscale-400">
                {item.name}
              </Text>
              <p className="text-xs/[24px] text-grayscale-400 mb-3">
                {item.website}
              </p>
              <p className="text-grayscale-400 text-sm/[24px] italic font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
