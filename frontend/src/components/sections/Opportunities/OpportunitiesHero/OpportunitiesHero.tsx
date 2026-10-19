import { motion } from "motion/react";

import "./OpportunitiesHero.css";

export function OpportunitiesHero() {
  return (
    <section className="opportunities-hero">
      <div className="opportunities-hero__container">
        <motion.div
          className="opportunities-hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="opportunities-hero__eyebrow">
            ENCONTRE OPORTUNIDADES
          </span>

          <h1>
            Onde começar
            <br />
            a procurar?
          </h1>

          <p>
            Encontre plataformas, programas e serviços que podem ajudar você
            a buscar seu primeiro emprego, estágio ou uma oportunidade para
            começar sua carreira.
          </p>
        </motion.div>

        <motion.div
          className="opportunities-hero__aside"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span>CAMINHOS POSSÍVEIS</span>

          <div className="opportunities-hero__line" />

          <p>
            Sites de vagas, programas de estágio e serviços públicos reunidos
            em um só lugar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}