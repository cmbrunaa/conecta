import { motion } from "motion/react";

import "./CoursesTips.css";

const tips = [
  {
    number: "01",
    title: "Pense no seu objetivo",
    description:
      "Antes de escolher um curso, pense no que você gostaria de aprender e como esse conhecimento pode ajudar na sua carreira.",
  },
  {
    number: "02",
    title: "Comece pelo básico",
    description:
      "Não tente aprender tudo de uma vez. Procure conteúdos introdutórios e avance aos poucos conforme ganhar confiança.",
  },
  {
    number: "03",
    title: "Verifique o certificado",
    description:
      "Se o curso oferecer certificado, confira as condições para emissão e guarde o documento para incluir no seu currículo.",
  },
  {
    number: "04",
    title: "Coloque em prática",
    description:
      "O aprendizado fica mais forte quando você transforma o conhecimento em algo concreto, como um projeto ou exercício.",
  },
];

export function CoursesTips() {
  return (
    <section className="courses-tips">
      <div className="courses-tips__container">
        <motion.div
          className="courses-tips__intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="courses-tips__eyebrow">
            ANTES DE COMEÇAR
          </span>

          <h2>
            Como escolher
            <br />
            um curso?
          </h2>
        </motion.div>

        <div className="courses-tips__list">
          {tips.map((tip, index) => (
            <motion.article
              key={tip.number}
              className="courses-tip"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <span className="courses-tip__number">{tip.number}</span>

              <div className="courses-tip__content">
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}