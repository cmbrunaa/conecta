import { motion } from "motion/react";

import "./SecurityHero.css";

export function SecurityHero() {
  return (
    <section className="security-hero">
      <div className="security-hero__container">
        <motion.div
          className="security-hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="security-hero__eyebrow">
            SEGURANÇA NA BUSCA POR EMPREGO
          </span>

          <h1>
            Cuidado também faz parte da busca por emprego.
          </h1>

          <p>
            Nem toda oportunidade publicada na internet é verdadeira.
            Saiba reconhecer alguns sinais antes de compartilhar seus dados
            ou seguir uma proposta.
          </p>
        </motion.div>

        <motion.div
          className="security-hero__aside"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span>01</span>

          <p>
            Informação também é uma forma de proteção.
          </p>
        </motion.div>
      </div>
    </section>
  );
}