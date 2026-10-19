import "./ResumeIntro.css";

export function ResumeIntro() {
  return (
    <section className="resume-intro">
      <span className="resume-intro__eyebrow">
        CRIADOR DE CURRÍCULO
      </span>

      <h1 className="resume-intro__title">
        Seu primeiro currículo
        <span> começa aqui.</span>
      </h1>

      <p className="resume-intro__description">
        Organize sua formação, habilidades, projetos e cursos em um
        currículo claro e profissional — mesmo que você ainda não tenha
        experiência.
      </p>
    </section>
  );
}