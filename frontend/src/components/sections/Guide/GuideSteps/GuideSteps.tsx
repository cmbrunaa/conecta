import { motion } from "motion/react";

import { guideSteps } from "../../../../data/guide";

import "./GuideSteps.css";

export function GuideSteps() {
  return (
    <section className="guide-steps">
      <div className="guide-steps__container">
        <motion.div
          className="guide-steps__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="guide-steps__eyebrow">
            SEU CAMINHO
          </span>

          <h2>
            Um passo
            <br />
            de cada vez.
          </h2>

          <p>
            Você não precisa resolver tudo de uma vez. Use este guia para
            organizar sua preparação e avançar no seu próprio ritmo.
          </p>
        </motion.div>

        <div className="guide-steps__list">
          {guideSteps.map((step, index) => (
            <motion.article
              key={step.id}
              className="guide-step"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="guide-step__number">
                {step.number}
              </div>

              <div className="guide-step__content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>

                <ul>
                  {step.topics.map((topic) => (
                    <li key={topic}>
                      <span>+</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="guide-step__arrow">
                ↘
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}