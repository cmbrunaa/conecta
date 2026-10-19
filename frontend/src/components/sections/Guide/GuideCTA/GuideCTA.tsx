import { motion } from "motion/react";
import { Link } from "react-router-dom";

import "./GuideCTA.css";

export function GuideCTA() {
  return (
    <section className="guide-cta">
      <div className="guide-cta__container">
        <motion.div
          className="guide-cta__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="guide-cta__eyebrow">
            AGORA É COM VOCÊ
          </span>

          <h2>
            Comece com o que
            <br />
            você já sabe.
          </h2>

          <p>
            Organize seus conhecimentos, destaque seus projetos e transforme
            tudo isso em um currículo que represente o que você pode oferecer.
          </p>

          <div className="guide-cta__actions">
            <Link to="/curriculo" className="guide-cta__primary">
              Criar meu currículo
              <span>→</span>
            </Link>

            <Link to="/cursos" className="guide-cta__secondary">
              Explorar cursos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}