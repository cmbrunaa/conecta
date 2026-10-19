import { motion } from "motion/react";

import "./OpportunitiesPublic.css";

export function OpportunitiesPublic() {
  return (
    <section className="opportunities-public">
      <div className="opportunities-public__container">
        <motion.div
          className="opportunities-public__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="opportunities-public__eyebrow">
            SERVIÇOS GRATUITOS
          </span>

          <h2>
            Você também pode
            <br />
            procurar pelo serviço público.
          </h2>

          <p>
            Além dos sites de vagas, existem serviços públicos que ajudam
            trabalhadores a encontrar oportunidades e acessar informações
            sobre emprego.
          </p>
        </motion.div>

        <motion.div
          className="opportunities-public__highlight"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span>UMA DICA</span>

          <strong>
            Procure também
            <br />
            na sua cidade.
          </strong>

          <p>
            Prefeituras, governos estaduais e órgãos públicos podem divulgar
            vagas, programas de empregabilidade e oportunidades para jovens.
          </p>
        </motion.div>
      </div>
    </section>
  );
}