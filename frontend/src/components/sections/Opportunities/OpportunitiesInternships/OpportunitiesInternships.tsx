import { motion } from "motion/react";

import { internshipOpportunities } from "../../../../data/opportunities";

import "./OpportunitiesInternships.css";

export function OpportunitiesInternships() {
  return (
    <section className="opportunities-internships">
      <div className="opportunities-internships__container">
        <motion.div
          className="opportunities-internships__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="opportunities-internships__eyebrow">
            ESTÁGIO E APRENDIZAGEM
          </span>

          <h2>
            Para quem está
            <br />
            começando.
          </h2>

          <p>
            Programas e instituições que conectam estudantes e jovens a
            oportunidades de estágio e aprendizagem profissional.
          </p>
        </motion.div>

        <div className="opportunities-internships__list">
          {internshipOpportunities.map((opportunity, index) => (
            <motion.a
              key={opportunity.id}
              href={opportunity.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opportunity-internship"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="opportunity-internship__logo">
                <img
                  src={opportunity.logo}
                  alt={`Logo ${opportunity.name}`}
                />
              </div>

              <div className="opportunity-internship__content">
                <span className="opportunity-internship__category">
                  {opportunity.category}
                </span>

                <h3>{opportunity.name}</h3>

                <p>{opportunity.description}</p>
              </div>

              <span className="opportunity-internship__arrow">
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}