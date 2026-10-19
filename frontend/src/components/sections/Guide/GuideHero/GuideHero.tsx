import { motion } from "motion/react";

import "./GuideHero.css";

export function GuideHero() {
  return (
    <section className="guide-hero">
      <div className="guide-hero__container">
        <motion.div
          className="guide-hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="guide-hero__eyebrow">
            GUIA PARA O PRIMEIRO EMPREGO
          </span>

          <h1>
            Você não precisa
            <br />
            saber tudo para começar.
          </h1>

          <p>
            Encontre orientações práticas para organizar sua busca pelo
            primeiro emprego, estágio ou oportunidade júnior.
          </p>
        </motion.div>

        <motion.div
          className="guide-hero__side"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span>GUIA</span>

          <div className="guide-hero__line" />

          <p>
            Do primeiro currículo à preparação para um processo seletivo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}