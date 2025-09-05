"use client";

import { Section } from "@/components/elements/Section";
import { FAQ } from "@/components/layouts/LPLayout/Faq";
import { faqList } from "@/components/layouts/LPLayout/Faq/content";
import FeaturedFrame from "@/components/layouts/LPLayout/FeaturedFrame";
import Hero from "@/components/layouts/LPLayout/Hero";
import ListCards from "@/components/layouts/LPLayout/ListCards";
import {
  listCardsExclusiveWebsites,
  listCardsServices,
} from "@/components/layouts/LPLayout/ListCards/content";
import Modalities from "@/components/layouts/LPLayout/Modalities";
import { Text } from "@/components/elements/Texts";
import ProcessDevelopment from "@/components/layouts/LPLayout/ProcessDevelopment";
import ListCardsWithPagination from "@/components/layouts/LPLayout/ListCardsWithPagination";
import PromoModal from "@/components/layouts/LPLayout/PromoModal";

export function LPTemplate() {
  return (
    <>
      <PromoModal />
      <Hero />
      <Section
        className="pb-18"
        title="Sites exclusivos e gerenciáveis"
        subtitle="Mais de 90% de possíveis clientes pesquisam sobre seus serviços no Google, não perca a chance de turbinar o seu faturamento com um site otimizado para gerar vendas."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mb-12">
          <ListCards listCards={listCardsExclusiveWebsites} />
        </div>
        <Text className="text-base/[24px] text-grayscale-300 normal-case bg-[#F9F9F9] p-4">
          Pagamento facilitado em até 10x sem juros no boleto ou cartão de
          crédito.
        </Text>
      </Section>
      <Modalities />
      <FeaturedFrame />
      <Section className="pb-18" id="servicos" title="Nossos serviços">
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 mt-4">
          <ListCards listCards={listCardsServices} />
        </div>
        <div className="block lg:hidden">
          <ListCardsWithPagination listCards={listCardsServices} />
        </div>
      </Section>
      <ProcessDevelopment />
      <FAQ data={faqList} tagH="h2" />
    </>
  );
}
