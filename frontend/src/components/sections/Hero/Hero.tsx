import { motion } from "motion/react";
import { Link } from "react-router-dom";

import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <motion.span
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            PRIMEIRO EMPREGO • ESTÁGIO • JÚNIOR
          </motion.span>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            Seu primeiro emprego começa com{" "}
            <span>informação.</span>
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            O Conecta reúne ferramentas, orientações e oportunidades para
            ajudar você a se preparar melhor para entrar no mercado de
            trabalho.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
          >
            <Link
              to="/curriculo"
              className="hero__button hero__button--primary"
            >
              Criar meu currículo
              <span>→</span>
            </Link>

            <Link
              to="/guia"
              className="hero__button hero__button--secondary"
            >
              Quero aprender primeiro
            </Link>
          </motion.div>

          <motion.p
            className="hero__note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            Gratuito • Feito para quem está começando
          </motion.p>
        </motion.div>

        <motion.div
          className="hero__visual"
          aria-hidden="true"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <div className="hero__visual-placeholder">
            <span>ILUSTRAÇÃO</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}