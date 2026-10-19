import { motion } from "motion/react";

import "./CoursesHero.css";

export function CoursesHero() {
  return (
    <section className="courses-hero">
      <div className="courses-hero__container">
        <motion.div
          className="courses-hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="courses-hero__eyebrow">
            APRENDIZADO GRATUITO
          </span>

          <h1>
            Aprenda.
            <br />
            Desenvolva suas habilidades.
          </h1>

          <p>
            Encontre plataformas com cursos gratuitos para começar a
            desenvolver conhecimentos e se preparar para o mercado de trabalho.
          </p>
        </motion.div>

        <motion.div
          className="courses-hero__number"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span>01</span>
          <p>Aprender também é construir oportunidades.</p>
        </motion.div>
      </div>
    </section>
  );
}