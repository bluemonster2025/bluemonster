import { ReactNode } from "react";
import Image from "next/image";

interface Step {
  title: string;
  description: string;
  icon: ReactNode;
  items: string[][];
}
export const steps: Step[] = [
  {
    title: "Inception",
    description: "Pesquisa, briefing e definição de objetivos",
    icon: (
      <Image
        src="/images/icons/icon-ux-consulting.svg"
        width={32}
        height={32}
        alt="Inception"
      />
    ),
    items: [
      ["Análise de contrato do projeto"],
      ["Análise de necessidades"],
      ["Proposta de solução"],
      ["Orçamento"],
    ],
  },
  {
    title: "Design Digital (UX/UI)",
    description: "Protótipos, wireframes e validações",
    icon: (
      <Image
        src="/images/icons/icon-digital-design.svg"
        width={32}
        height={32}
        alt="Design Digital (UX/UI)"
      />
    ),
    items: [
      ["Planejamento estratégico", "Devolutiva de prazo"],
      ["Pesquisa e estudo (UX)", "Arquitetura de produto"],
      ["Estruturação de interface", "Protótipo UI"],
      ["Style-Guide", "Validação com o cliente"],
    ],
  },
  {
    title: "Desenvolvimento",
    description: "Programação e testes responsivos",
    icon: (
      <Image
        src="/images/icons/icon-web-development.svg"
        width={32}
        height={32}
        alt="Desenvolvimento"
      />
    ),
    items: [
      ["Desenvolvimento Front & Back-end"],
      ["Domínio"],
      ["Hospedagem"],
      ["Integrações"],
    ],
  },
  {
    title: "Consultoria & Acompanhamento",
    description: "Otimização contínua e suporte",
    icon: (
      <Image
        src="/images/icons/icon-consulting-monitoring.svg"
        width={32}
        height={32}
        alt="Consultoria & Acompanhamento"
      />
    ),
    items: [
      ["SEO"],
      ["Métricas de performance"],
      ["Correção de bugs e problemas"],
      ["Indicações"],
    ],
  },
];
