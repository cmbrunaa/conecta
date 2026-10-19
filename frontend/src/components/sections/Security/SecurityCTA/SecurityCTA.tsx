import { motion } from "motion/react";
import { Link } from "react-router-dom";

import "./SecurityCTA.css";

export function SecurityCTA() {
  return (
    <section className="security-cta">
      <div className="security-cta__container">
        <motion.div
          className="security-cta__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="security-cta__eyebrow">INFORMAÇÃO É PROTEÇÃO</span>

          <h2>Na dúvida, pesquise antes de continuar.</h2>

          <p>
            Procure o site oficial da empresa, confira a oportunidade em
            canais confiáveis e não tenha pressa para fornecer seus dados.
          </p>

          <Link to="/guia" className="security-cta__button">
            Voltar para o guia
          </Link>
        </motion.div>
      </div>
    </section>
  );
}