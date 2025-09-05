import Icon from "@/components/elements/Icon";
import { LinkExternal } from "@/components/elements/LinkExternal/LinkExternal";
import { Section } from "@/components/elements/Section";
import { Text } from "@/components/elements/Texts";
import Image from "next/image";
import Link from "next/link";
import { Contact } from "../Contact";

export const Footer = () => {
  return (
    <>
      <Section className="border-b border-white bg-purplescale-50">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between py-4">
          <Link href="/" className="relative w-45 h-12 flex">
            <Image
              fill
              alt="Bluemonster"
              src="/images/logos/logo-branco.svg"
              style={{ objectFit: "contain" }}
            />
          </Link>
          <div className="grid gap-1 grid-cols-2">
            <LinkExternal
              className="h-10 w-10 flex items-center justify-center rounded bg-white"
              href="/"
            >
              <Icon name="FaLinkedinIn" color="#687af6" size={16} />
            </LinkExternal>
            <LinkExternal
              className="h-10 w-10 flex items-center justify-center rounded bg-white"
              href="/"
            >
              <Icon name="FaInstagram" color="#687af6" size={16} />
            </LinkExternal>
          </div>
        </div>
      </Section>
      <Section className="bg-purplescale-50">
        <div className="hidden md:flex lg:items-center justify-between py-4">
          <div className="lg:pr-20">
            <Text className="text-white text-left text-base/[24px] font-light">
              <div>Nós ligamos para você</div>
              <div>
                Está sem tempo? Não se preocupe, nossa equipe entra em contato
                com você!
              </div>
            </Text>
          </div>

          <div className="lg:flex lg:items-center justify-between py-4">
            <Contact />
          </div>
        </div>
      </Section>
      <Section>
        <Text className="text-center lg:text-left py-4 md:py-8 text-sm/[24px] text-grayscale-400 w-full h-full font-normal">
          ©2025 Todos os direitos reservados bluemonster.com.br
        </Text>
      </Section>
    </>
  );
};
