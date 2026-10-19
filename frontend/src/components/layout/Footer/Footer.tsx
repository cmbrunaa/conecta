import { Link } from "react-router-dom";

import "./Footer.css";

const navigation = [
  { label: "Início", path: "/" },
  { label: "Currículo", path: "/curriculo" },
  { label: "Cursos", path: "/cursos" },
  { label: "Guia", path: "/guia" },
  { label: "Oportunidades", path: "/oportunidades" },
  { label: "Segurança", path: "/seguranca" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              CONECTA
            </Link>

            <p className="footer__description">
              Tecnologia e informação para ajudar quem está começando
              sua trajetória profissional.
            </p>
          </div>

          <div className="footer__column">
            <span className="footer__label">NAVEGAÇÃO</span>

            <nav className="footer__links">
              {navigation.map((item) => (
                <Link key={item.label} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer__column">
            <span className="footer__label">PROJETO</span>

            <p className="footer__project">
              Conecta: Tecnologia e Inclusão
              <br />
              para o Primeiro Emprego
            </p>

            <span className="footer__ods">
              ODS 10 — Redução das Desigualdades
            </span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Conecta</span>

          <span>
            Projeto Integrador Extensionista IV · UniOpet
          </span>
        </div>
      </div>
    </footer>
  );
}