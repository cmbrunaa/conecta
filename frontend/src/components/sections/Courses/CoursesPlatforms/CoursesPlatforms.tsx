import { motion } from "motion/react";

import { coursePlatforms } from "../../../../data/courses";

import "./CoursesPlatforms.css";

export function CoursesPlatforms() {
  return (
    <section className="courses-platforms">
      <div className="courses-platforms__container">
        <motion.div
          className="courses-platforms__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="courses-platforms__eyebrow">
              ONDE ESTUDAR
            </span>

            <h2>
              Plataformas para
              <br />
              aprender gratuitamente.
            </h2>
          </div>

          <p>
            Você não precisa pagar para começar a desenvolver novas
            habilidades. Existem plataformas que oferecem cursos e conteúdos
            gratuitos em diferentes áreas.
          </p>
        </motion.div>

        <div className="courses-platforms__list">
          {coursePlatforms.map((platform, index) => (
            <motion.article
              key={platform.id}
              className="courses-platform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="courses-platform__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="courses-platform__content">
                <h3>{platform.name}</h3>

                <p>{platform.description}</p>

                <div className="courses-platform__categories">
                  {platform.categories.map((category) => (
                    <span key={category}>{category}</span>
                  ))}
                </div>
              </div>

              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="courses-platform__link"
              >
                Acessar plataforma
                <span>↗</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}