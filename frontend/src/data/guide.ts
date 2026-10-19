export type GuideStep = {
  id: number;
  number: string;
  title: string;
  description: string;
  topics: string[];
};

export const guideSteps: GuideStep[] = [
  {
    id: 1,
    number: "01",
    title: "Antes de começar",
    description:
      "Antes de sair enviando currículos, entenda seus objetivos e identifique quais conhecimentos e experiências você já possui.",
    topics: [
      "Defina seus objetivos",
      "Identifique suas habilidades",
      "Organize seus conhecimentos",
      "Pesquise áreas de interesse",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Monte seu currículo",
    description:
      "Você não precisa ter anos de experiência para criar um bom currículo. Formação, cursos, projetos e habilidades também contam.",
    topics: [
      "Dados pessoais",
      "Formação",
      "Habilidades",
      "Cursos",
      "Projetos",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Mostre o que você sabe",
    description:
      "Projetos acadêmicos, pessoais e trabalhos realizados durante os estudos podem ajudar a demonstrar suas habilidades.",
    topics: [
      "Projetos acadêmicos",
      "Projetos pessoais",
      "GitHub",
      "Portfólio",
      "Certificados",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Procure oportunidades",
    description:
      "Existem diferentes lugares para encontrar vagas de estágio, primeiro emprego e posições de nível júnior.",
    topics: [
      "LinkedIn",
      "Sites de vagas",
      "Gupy",
      "Indeed",
      "Sites das empresas",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Prepare-se para o processo",
    description:
      "Cada processo seletivo pode ser diferente. Conhecer as etapas e se preparar ajuda a chegar mais confiante.",
    topics: [
      "Entrevistas",
      "Testes",
      "Perguntas frequentes",
      "Apresentação pessoal",
      "Comunicação",
    ],
  },
  {
    id: 6,
    number: "06",
    title: "Continue evoluindo",
    description:
      "A busca pelo primeiro emprego também pode ser um período de aprendizado. Continue desenvolvendo suas habilidades.",
    topics: [
      "Cursos",
      "Novos projetos",
      "Networking",
      "Feedback",
      "Atualização do currículo",
    ],
  },
];