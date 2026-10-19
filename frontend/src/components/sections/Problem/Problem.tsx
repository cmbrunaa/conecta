import { motion } from "motion/react";
import "./Problem.css";

const problems = [
  "Montar um currículo sem experiência",
  "Apresentar projetos acadêmicos e pessoais",
  "Encontrar cursos gratuitos e certificados",
  "Se preparar para processos seletivos",
  "Identificar oportunidades suspeitas",
];

export function Problem() {
  return (
    <section className="problem" id="problema">
      <div className="problem__container">
        <motion.div
          className="problem__heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="problem__eyebrow">POR ONDE COMEÇAR?</span>

          <h2 className="problem__title">
            Você não precisa começar
            <span> sabendo tudo.</span>
          </h2>
        </motion.div>

        <div className="problem__content">
          <motion.div
            className="problem__intro"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="problem__lead">
              Entrar no mercado de trabalho pode ser confuso quando ninguém
              explica o caminho.
            </p>

            <p className="problem__text">
              Para quem está buscando o primeiro emprego, estágio ou uma vaga
              júnior, pequenas dúvidas podem se transformar em grandes
              obstáculos.
            </p>
          </motion.div>

          <motion.div
            className="problem__list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {problems.map((problem, index) => (
              <motion.div
                className="problem__item"
                key={problem}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 30,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.45,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <span className="problem__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="problem__item-text">
                  {problem}
                </span>

                <span className="problem__arrow" aria-hidden="true">
                  ↗
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}