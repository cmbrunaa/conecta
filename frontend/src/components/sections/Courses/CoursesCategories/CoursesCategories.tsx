import { motion } from "motion/react";

import { courseCategories } from "../../../../data/courses";

import "./CoursesCategories.css";

export function CoursesCategories() {
  return (
    <section className="courses-categories">
      <div className="courses-categories__container">
        <motion.div
          className="courses-categories__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="courses-categories__eyebrow">
            ENCONTRE SEU CAMINHO
          </span>

          <h2>
            O que você
            <br />
            pode estudar?
          </h2>

          <p>
            Não existe um único caminho para se preparar para o mercado.
            Escolha uma área que combine com seus objetivos e comece pelo
            básico.
          </p>
        </motion.div>

        <div className="courses-categories__grid">
          {courseCategories.map((category, index) => (
            <motion.article
              key={category.id}
              className={`courses-category courses-category--${index + 1}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
            >
              <div className="courses-category__top">
                <span className="courses-category__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="courses-category__arrow">↗</span>
              </div>

              <div className="courses-category__body">
                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <ul>
                  {category.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}