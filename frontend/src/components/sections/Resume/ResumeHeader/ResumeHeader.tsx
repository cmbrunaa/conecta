import { Link } from "react-router-dom";
import "./ResumeHeader.css";

export function ResumeHeader() {
  return (
    <header className="resume-header">
      <div className="resume-header__container">
        <Link to="/" className="resume-header__logo">
          CONECTA
        </Link>

        <Link to="/" className="resume-header__back">
          ← Voltar para o início
        </Link>
      </div>
    </header>
  );
}