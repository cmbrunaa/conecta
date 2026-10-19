import { motion } from "motion/react";

import "./GuideContent.css";

const contents = [
  {
    number: "01",
    title: "Não tenho experiência. E agora?",
    text: "Seu primeiro currículo não precisa ser vazio. Formação, cursos, projetos acadêmicos, projetos pessoais, trabalhos voluntários e outras experiências podem ajudar a mostrar o que você sabe fazer.",
    points: [
      "Destaque sua formação",
      "Adicione cursos relevantes",
      "Mostre projetos acadêmicos ou pessoais",
      "Liste habilidades que você realmente possui",
    ],
  },
  {
    number: "02",
    title: "Como apresentar meus projetos?",
    text: "Um projeto pode mostrar muito mais do que uma lista de tecnologias. Explique brevemente qual era o objetivo, o que você desenvolveu e quais ferramentas utilizou.",
    points: [
      "Explique o objetivo",
      "Descreva o que você desenvolveu",
      "Informe as tecnologias utilizadas",
      "Adicione o link quando possível",
    ],
  },
  {
    number: "03",
    title: "Onde procurar vagas?",
    text: "Não dependa de apenas uma plataforma. Procure oportunidades em sites de vagas, redes profissionais e também diretamente nas páginas das empresas.",
    points: [
      "Mantenha seu LinkedIn atualizado",
      "Pesquise vagas de estágio e júnior",
      "Acompanhe empresas do seu interesse",
      "Confira as oportunidades diretamente nos sites oficiais",
    ],
  },
  {
    number: "04",
    title: "Como me preparar para uma entrevista?",
    text: "Conhecer sua própria trajetória é um bom começo. Esteja preparado para falar sobre seus estudos, projetos, habilidades e sobre o motivo pelo qual deseja aquela oportunidade.",
    points: [
      "Conheça seu próprio currículo",
      "Pesquise sobre a empresa",
      "Prepare uma apresentação pessoal",
      "Pense em exemplos das suas experiências",
    ],
  },
];

export function GuideContent() {
  return (
    <section className="guide-content">
      <div className="guide-content__container">
        <motion.div
          className="guide-content__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="guide-content__eyebrow">
            NA PRÁTICA
          </span>

          <h2>
            Algumas respostas
            <br />
            para começar.
          </h2>
        </motion.div>

        <div className="guide-content__list">
          {contents.map((content, index) => (
            <motion.article
              key={content.number}
              className="guide-content__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="guide-content__number">
                {content.number}
              </div>

              <div className="guide-content__main">
                <h3>{content.title}</h3>

                <p>{content.text}</p>

                <ul>
                  {content.points.map((point) => (
                    <li key={point}>
                      <span>✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}