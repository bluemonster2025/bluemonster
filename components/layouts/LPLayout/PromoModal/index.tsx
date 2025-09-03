"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Abre o modal assim que a página carrega
  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Botão de fechar */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ×
        </button>

        {/* Conteúdo do modal */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Lado esquerdo com imagem */}
          <div className="w-full md:w-1/2 bg-purple-600 flex items-center justify-center p-6">
            <div className="text-white text-center md:text-left">
              <h2 className="text-4xl font-bold">30% OFF</h2>
              <p className="mt-2 text-sm">todos os sites com</p>
            </div>
          </div>

          {/* Lado direito com texto e botão */}
          <div className="w-full md:w-1/2 p-6 text-center md:text-left">
            <p className="text-gray-800 font-semibold text-lg">
              NÃO PERCA ESSA CHANCE!
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              A hora é agora! Desconto imperdível em todos os sites!
            </p>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
              Solicite um orçamento
            </button>
          </div>
        </div>

        {/* Mascote */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <Image
            src="/f7b4b88f-88dd-419a-a873-11bdb79e0853.png" // Coloque a imagem na pasta public
            alt="Mascote"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}
