import { motion } from "motion/react";

import { jobOpportunities } from "../../../../data/opportunities";

import "./OpportunitiesJobs.css";

export function OpportunitiesJobs() {
  return (
    <section className="opportunities-jobs">
      <div className="opportunities-jobs__container">
        <motion.div
          className="opportunities-jobs__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="opportunities-jobs__eyebrow">
            EMPREGO
          </span>

          <h2>
            Onde encontrar
            <br />
            vagas.
          </h2>

          <p>
            Plataformas e serviços que podem ajudar você a encontrar
            oportunidades de trabalho, inclusive para quem está começando.
          </p>
        </motion.div>

        <div className="opportunities-jobs__list">
          {jobOpportunities.map((opportunity, index) => (
            <motion.a
              key={opportunity.id}
              href={opportunity.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opportunity-job"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="opportunity-job__logo">
                <img
                  src={opportunity.logo}
                  alt={`Logo ${opportunity.name}`}
                />
              </div>

              <div className="opportunity-job__content">
                <span className="opportunity-job__category">
                  {opportunity.category}
                </span>

                <h3>{opportunity.name}</h3>

                <p>{opportunity.description}</p>
              </div>

              <span className="opportunity-job__arrow">
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}