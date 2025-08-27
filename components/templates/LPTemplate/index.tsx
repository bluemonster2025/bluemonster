import { Section } from "@/components/elements/Section";
import DigitalSolutions from "@/components/layouts/LPLayout/DigitalSolutions";
import { FAQ } from "@/components/layouts/LPLayout/Faq";
import { faqList } from "@/components/layouts/LPLayout/Faq/content";
import FeaturedFrame from "@/components/layouts/LPLayout/FeaturedFrame";
import Hero from "@/components/layouts/LPLayout/Hero";
import ListCards from "@/components/layouts/LPLayout/ListCards";
import { listCardsSecurity } from "@/components/layouts/LPLayout/ListCards/content";
import Modalities from "@/components/layouts/LPLayout/Modalities";
import ProcessSteps from "@/components/layouts/LPLayout/ProcessSteps";
import Testimonials from "@/components/layouts/LPLayout/Testimonials";

export function LPTemplate() {
  return (
    <>
      <Hero />
      <Modalities />
      <DigitalSolutions />
      <Section id="servicos" className="pb-20" title="Nossos serviços">
        <ListCards listCards={listCardsSecurity} />
      </Section>
      <FeaturedFrame />
      <ProcessSteps />
      <Testimonials />
      <FAQ data={faqList} tagH="h2" />
    </>
  );
}
