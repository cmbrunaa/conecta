import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Currículo", path: "/curriculo" },
  { label: "Cursos", path: "/cursos" },
  { label: "Guia", path: "/guia" },
  { label: "Oportunidades", path: "/oportunidades" },
  { label: "Segurança", path: "/seguranca" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          CONECTA
        </Link>

        <nav
          className={`navbar__links ${
            menuOpen ? "navbar__links--open" : ""
          }`}
          aria-label="Navegação principal"
        >
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`navbar__link ${
                  isActive ? "navbar__link--active" : ""
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="navbar__actions">
          <Link
            to="/curriculo"
            className="navbar__button"
            onClick={closeMenu}
          >
            Criar meu currículo
            <span aria-hidden="true">→</span>
          </Link>

          <button
            type="button"
            className={`navbar__menu ${
              menuOpen ? "navbar__menu--open" : ""
            }`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}