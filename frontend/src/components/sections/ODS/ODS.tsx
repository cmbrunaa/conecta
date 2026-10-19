import { motion } from "motion/react";

import "./ODS.css";

export function ODS() {
  return (
    <section className="ods" id="ods">
      <div className="ods__container">
        <motion.div
          className="ods__number"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <span>ODS</span>
          <strong>10</strong>
        </motion.div>

        <motion.div
          className="ods__content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <span className="ods__eyebrow">
            OBJETIVO DE DESENVOLVIMENTO SUSTENTÁVEL
          </span>

          <h2 className="ods__title">
            Redução das
            <span> Desigualdades.</span>
          </h2>

          <p className="ods__description">
            O Conecta atua sobre uma desigualdade que muitas vezes passa
            despercebida: o acesso desigual à informação e à preparação para
            entrar no mercado de trabalho.
          </p>

          <p className="ods__description">
            A proposta é oferecer gratuitamente ferramentas, orientações e
            conteúdos que ajudem jovens, estudantes e recém-formados a
            encontrar caminhos para sua primeira oportunidade profissional.
          </p>

          <motion.div
            className="ods__link"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
            Tecnologia e inclusão para o primeiro emprego
            <span aria-hidden="true">↗</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}