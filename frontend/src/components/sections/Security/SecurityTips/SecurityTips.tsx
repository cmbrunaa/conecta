import { motion } from "motion/react";

import "./SecurityTips.css";

const securityTips = [
  {
    number: "01",
    title: "Cobrança para conseguir a vaga",
    description:
      "Desconfie de oportunidades que pedem pagamento para participar de um processo seletivo ou garantir uma contratação.",
  },
  {
    number: "02",
    title: "Pedido de informações sensíveis",
    description:
      "Nunca compartilhe senhas, códigos de autenticação ou dados bancários com pessoas que você não conhece.",
  },
  {
    number: "03",
    title: "Links e sites suspeitos",
    description:
      "Antes de clicar, confira o endereço do site. Sempre que possível, procure a oportunidade diretamente nos canais oficiais da empresa.",
  },
  {
    number: "04",
    title: "Recrutadores desconhecidos",
    description:
      "Golpistas podem se passar por recrutadores. Confirme se o contato realmente pertence à empresa antes de continuar a conversa.",
  },
];

export function SecurityTips() {
  return (
    <section className="security-tips">
      <div className="security-tips__container">
        <motion.div
          className="security-tips__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="security-tips__eyebrow">FIQUE ATENTO</span>

          <h2>Alguns sinais merecem atenção.</h2>

          <p>
            Antes de seguir uma oportunidade, pare alguns minutos para
            verificar se ela realmente é confiável.
          </p>
        </motion.div>

        <div className="security-tips__list">
          {securityTips.map((tip, index) => (
            <motion.article
              key={tip.number}
              className="security-tip"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <span className="security-tip__number">{tip.number}</span>

              <div className="security-tip__content">
                <h3>{tip.title}</h3>

                <p>{tip.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}