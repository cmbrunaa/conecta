import { motion } from "motion/react";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Conte onde você está",
    description:
      "Informe sua formação, habilidades, projetos, cursos e experiências. Mesmo que você ainda não tenha trabalhado formalmente.",
  },
  {
    number: "02",
    title: "Organize seu perfil",
    description:
      "O Conecta ajuda você a transformar suas informações em um currículo mais claro, organizado e adequado para sua primeira oportunidade.",
  },
  {
    number: "03",
    title: "Prepare-se para a oportunidade",
    description:
      "Acesse guias e conteúdos para entender processos seletivos, entrevistas, plataformas de vagas e os próximos passos da sua busca.",
  },
];

export function HowItWorks() {
  return (
    <section className="how-it-works" id="como-funciona">
      <div className="how-it-works__container">
        <motion.div
          className="how-it-works__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <span className="how-it-works__eyebrow">
            COMO FUNCIONA
          </span>

          <h2 className="how-it-works__title">
            Do primeiro passo até a
            <span> oportunidade.</span>
          </h2>
        </motion.div>

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <motion.div
              className="how-it-works__step"
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <div className="how-it-works__top">
                <motion.span
                  className="how-it-works__number"
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + 0.15,
                  }}
                >
                  {step.number}
                </motion.span>

                {index < steps.length - 1 && (
                  <motion.span
                    className="how-it-works__line"
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.3,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>

              <div className="how-it-works__content">
                <h3 className="how-it-works__step-title">
                  {step.title}
                </h3>

                <p className="how-it-works__description">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}