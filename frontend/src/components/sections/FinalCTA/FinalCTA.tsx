import { motion } from "motion/react";
import { Link } from "react-router-dom";

import "./FinalCTA.css";

export function FinalCTA() {
  return (
    <section className="final-cta" id="curriculo">
      <motion.div
        className="final-cta__container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <div className="final-cta__content">
          <motion.span
            className="final-cta__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.15,
            }}
          >
            SEU PRÓXIMO PASSO
          </motion.span>

          <motion.h2
            className="final-cta__title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            Pronto para dar o
            <span> próximo passo?</span>
          </motion.h2>

          <motion.p
            className="final-cta__description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.35,
            }}
          >
            Comece a organizar sua trajetória profissional e prepare-se
            para encontrar sua primeira oportunidade.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.45,
            ease: "easeOut",
          }}
        >
          <Link
            to="/curriculo"
            className="final-cta__button"
          >
            Criar meu currículo
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}