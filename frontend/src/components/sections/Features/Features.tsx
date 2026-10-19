import { motion } from "motion/react";
import { Link } from "react-router-dom";

import "./Features.css";

const features = [
  {
    number: "01",
    title: "Currículo",
    description:
      "Monte seu currículo passo a passo, mesmo que você ainda não tenha experiência profissional.",
    link: "Criar currículo",
    path: "/curriculo",
  },
  {
    number: "02",
    title: "Cursos",
    description:
      "Encontre cursos gratuitos, certificados e conteúdos para desenvolver novas habilidades.",
    link: "Explorar cursos",
    path: "/cursos",
  },
  {
    number: "03",
    title: "Guia",
    description:
      "Aprenda como se preparar para processos seletivos, LinkedIn, entrevistas e primeiras oportunidades.",
    link: "Acessar guia",
    path: "/guia",
  },
  {
    number: "04",
    title: "Segurança",
    description:
      "Saiba reconhecer sinais de falsas oportunidades e evite golpes durante sua busca por emprego.",
    link: "Ver dicas",
    path: "/seguranca",
  },
];

export function Features() {
  return (
    <section className="features" id="recursos">
      <div className="features__container">
        <motion.div
          className="features__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <span className="features__eyebrow">O QUE VOCÊ ENCONTRA</span>

            <h2 className="features__title">
              Tudo para dar o
              <span> próximo passo.</span>
            </h2>
          </div>

          <p className="features__intro">
            Informação, ferramentas e orientação reunidas em um só lugar para
            quem está começando sua trajetória profissional.
          </p>
        </motion.div>

        <motion.div
          className="features__list"
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
          {features.map((feature) => (
            <motion.article
              className="features__item"
              key={feature.number}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <span className="features__number">{feature.number}</span>

              <div className="features__main">
                <h3 className="features__item-title">
                  {feature.title}
                </h3>

                <p className="features__description">
                  {feature.description}
                </p>
              </div>

              <Link to={feature.path} className="features__link">
                {feature.link}
                <span aria-hidden="true">↗</span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}