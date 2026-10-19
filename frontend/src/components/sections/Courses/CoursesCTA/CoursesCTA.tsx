import { motion } from "motion/react";
import { Link } from "react-router-dom";

import "./CoursesCTA.css";

export function CoursesCTA() {
  return (
    <section className="courses-cta">
      <div className="courses-cta__container">
        <motion.div
          className="courses-cta__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="courses-cta__eyebrow">
            SEU PRÓXIMO PASSO
          </span>

          <h2>
            Aprender também é
            <br />
            construir oportunidades.
          </h2>

          <p>
            Explore as plataformas, escolha um caminho e comece pelo que faz
            sentido para você. Depois, registre seus conhecimentos e projetos
            no seu currículo.
          </p>

          <Link to="/curriculo" className="courses-cta__button">
            Criar meu currículo
            <span>→</span>
          </Link>
        </motion.div>

        <motion.div
          className="courses-cta__mark"
          initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span>CON</span>
          <strong>ECTA</strong>
        </motion.div>
      </div>
    </section>
  );
}