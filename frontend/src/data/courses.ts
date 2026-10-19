export type CoursePlatform = {
  id: number;
  name: string;
  description: string;
  categories: string[];
  url: string;
};

export type CourseCategory = {
  id: number;
  title: string;
  description: string;
  topics: string[];
};

export const coursePlatforms: CoursePlatform[] = [
  {
    id: 1,
    name: "Fundação Bradesco",
    description:
      "Cursos gratuitos para desenvolver conhecimentos profissionais, tecnológicos e administrativos.",
    categories: [
      "Tecnologia",
      "Administração",
      "Desenvolvimento pessoal",
    ],
    url: "https://www.ev.org.br/",
  },
  {
    id: 2,
    name: "Escola Virtual Gov",
    description:
      "Cursos gratuitos em diversas áreas, incluindo tecnologia, gestão, comunicação e desenvolvimento profissional.",
    categories: [
      "Gestão",
      "Tecnologia",
      "Desenvolvimento profissional",
    ],
    url: "https://www.escolavirtual.gov.br/",
  },
  {
    id: 3,
    name: "SENAI",
    description:
      "Cursos e conteúdos para desenvolver competências profissionais e técnicas para o mercado de trabalho.",
    categories: [
      "Tecnologia",
      "Indústria",
      "Gestão",
    ],
    url: "https://www.senai.br/",
  },
  {
    id: 4,
    name: "Sebrae",
    description:
      "Conteúdos gratuitos sobre empreendedorismo, gestão, marketing, finanças e desenvolvimento profissional.",
    categories: [
      "Empreendedorismo",
      "Marketing",
      "Gestão",
    ],
    url: "https://sebrae.com.br/",
  },
  {
    id: 5,
    name: "Microsoft Learn",
    description:
      "Aprenda tecnologia com conteúdos oficiais sobre programação, cloud, dados, segurança e ferramentas Microsoft.",
    categories: [
      "Programação",
      "Cloud",
      "Dados",
      "Tecnologia",
    ],
    url: "https://learn.microsoft.com/pt-br/training/",
  },
  {
    id: 6,
    name: "Curso em Vídeo",
    description:
      "Cursos e aulas voltados principalmente para programação, tecnologia e desenvolvimento de habilidades digitais.",
    categories: [
      "Programação",
      "Desenvolvimento web",
      "Tecnologia",
    ],
    url: "https://www.cursoemvideo.com/",
  },
];

export const courseCategories: CourseCategory[] = [
  {
    id: 1,
    title: "Tecnologia",
    description:
      "Desenvolva conhecimentos técnicos que podem ajudar na entrada no mercado de tecnologia.",
    topics: [
      "Programação",
      "Desenvolvimento web",
      "Banco de dados",
      "Git e GitHub",
      "Dados",
    ],
  },
  {
    id: 2,
    title: "Carreira",
    description:
      "Aprenda a se preparar melhor para processos seletivos e apresentar suas experiências.",
    topics: [
      "Currículo",
      "LinkedIn",
      "Entrevistas",
      "Processos seletivos",
      "Primeiro emprego",
    ],
  },
  {
    id: 3,
    title: "Administração",
    description:
      "Conhecimentos que podem ser úteis para diferentes áreas profissionais.",
    topics: [
      "Gestão",
      "Organização",
      "Finanças",
      "Planejamento",
      "Atendimento",
    ],
  },
  {
    id: 4,
    title: "Marketing",
    description:
      "Desenvolva habilidades relacionadas à comunicação, divulgação e presença digital.",
    topics: [
      "Marketing digital",
      "Redes sociais",
      "Conteúdo",
      "Comunicação",
      "Marca pessoal",
    ],
  },
  {
    id: 5,
    title: "Idiomas",
    description:
      "O conhecimento de outros idiomas pode ampliar possibilidades profissionais.",
    topics: [
      "Inglês",
      "Espanhol",
      "Comunicação",
      "Vocabulário profissional",
    ],
  },
  {
    id: 6,
    title: "Desenvolvimento pessoal",
    description:
      "Habilidades comportamentais também fazem parte da preparação para o mercado.",
    topics: [
      "Comunicação",
      "Produtividade",
      "Trabalho em equipe",
      "Organização",
      "Liderança",
    ],
  },
];