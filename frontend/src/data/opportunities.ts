export type Opportunity = {
  id: number;
  name: string;
  description: string;
  category: string;
  url: string;
  logo: string;
};

export const jobOpportunities: Opportunity[] = [
  {
    id: 1,
    name: "Emprega Curitiba",
    description:
      "Vagas de emprego e oportunidades de trabalho disponibilizadas pela Prefeitura de Curitiba.",
    category: "Emprego",
    url: "https://www.curitiba.pr.gov.br/",
    logo: "/logos/emprega-curitiba.jfif",
  },
  {
    id: 2,
    name: "Agência do Trabalhador",
    description:
      "Serviço gratuito para consultar vagas de emprego disponíveis em Curitiba e em outras regiões do Paraná.",
    category: "Emprego",
    url: "https://www.parana.pr.gov.br/",
    logo: "/logos/agencia-trabalhador.jfif",
  },
  {
    id: 3,
    name: "Emprega Brasil",
    description:
      "Portal do Governo Federal para buscar oportunidades de emprego e acessar serviços relacionados ao trabalho.",
    category: "Emprego",
    url: "https://empregabrasil.mte.gov.br/",
    logo: "../logos/emprega-brasil.jfif",
  },
];

export const internshipOpportunities: Opportunity[] = [
  {
    id: 4,
    name: "Portal de Estágios",
    description:
      "Oportunidades de estágio oferecidas pela Prefeitura de Curitiba para estudantes.",
    category: "Estágio",
    url: "https://www.curitiba.pr.gov.br/",
    logo: "/logos/imap.png",
  },
  {
    id: 5,
    name: "CIEE",
    description:
      "Oportunidades de estágio e Jovem Aprendiz para estudantes e jovens que estão entrando no mercado.",
    category: "Estágio e aprendizagem",
    url: "https://portal.ciee.org.br/",
    logo: "/logos/ciee.png",
  },
];