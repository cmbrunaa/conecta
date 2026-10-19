import { motion } from "motion/react";
import { Link } from "react-router-dom";

import "./OpportunitiesCTA.css";

export function OpportunitiesCTA() {
  return (
    <section className="opportunities-cta">
      <div className="opportunities-cta__container">
        <motion.div
          className="opportunities-cta__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="opportunities-cta__eyebrow">
            UM PASSO DE CADA VEZ
          </span>

          <h2>
            Encontrar uma
            <br />
            oportunidade é só o começo.
          </h2>

          <p>
            Prepare seu currículo, desenvolva suas habilidades e continue
            aprendendo enquanto procura a oportunidade certa para você.
          </p>

          <div className="opportunities-cta__actions">
            <Link
              to="/curriculo"
              className="opportunities-cta__primary"
            >
              Criar meu currículo
              <span>→</span>
            </Link>

            <Link
              to="/guia"
              className="opportunities-cta__secondary"
            >
              Ver o guia
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}