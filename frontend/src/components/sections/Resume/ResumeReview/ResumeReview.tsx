import "./ResumeReview.css";

import type { ResumeData } from "../../../../pages/Resume/Resume";

type ResumeReviewProps = {
  data: ResumeData;
  onPrevious: () => void;
  onEditStep: (step: number) => void;
  onGenerate: () => void | Promise<void>;
  isGenerating: boolean;
};

export function ResumeReview({
  data,
  onPrevious,
  onEditStep,
  onGenerate,
  isGenerating,
}: ResumeReviewProps) {
  const personalDataComplete = Boolean(
    data.fullName.trim() &&
      data.email.trim() &&
      data.phone.trim() &&
      data.city.trim()
  );

  const educationComplete = data.educations.length > 0;
  const skillsComplete = data.skills.length > 0;
  const projectsComplete = data.projects.length > 0;
  const coursesComplete = data.courses.length > 0;

  const sections = [
    {
      number: "01",
      title: "Seus dados",
      description: "Nome, contato e informações profissionais.",
      complete: personalDataComplete,
      required: true,
      step: 1,
    },
    {
      number: "02",
      title: "Formação",
      description: "Sua formação acadêmica e profissional.",
      complete: educationComplete,
      required: true,
      step: 2,
    },
    {
      number: "03",
      title: "Habilidades",
      description: "Competências e conhecimentos.",
      complete: skillsComplete,
      required: true,
      step: 3,
    },
    {
      number: "04",
      title: "Projetos",
      description: "Projetos acadêmicos, pessoais ou profissionais.",
      complete: projectsComplete,
      required: false,
      step: 4,
    },
    {
      number: "05",
      title: "Cursos",
      description: "Cursos e certificados complementares.",
      complete: coursesComplete,
      required: false,
      step: 5,
    },
  ];

  const requiredSections = sections.filter(
    (section) => section.required
  );

  const completedRequiredSections = requiredSections.filter(
    (section) => section.complete
  ).length;

  const requiredSectionsComplete =
    completedRequiredSections === requiredSections.length;

  return (
    <section className="resume-review">
      <div className="resume-review__header">
        <div className="resume-review__number">06</div>

        <div>
          <span className="resume-review__eyebrow">ETAPA 06</span>

          <h2 className="resume-review__title">
            Revisar currículo
          </h2>

          <p className="resume-review__description">
            Confira suas informações antes de gerar o currículo.
          </p>
        </div>
      </div>

      <div className="resume-review__summary">
        <div className="resume-review__summary-header">
          <div>
            <span>CHECKLIST</span>
            <h3>Seu currículo está pronto?</h3>
          </div>

          <strong>
            {completedRequiredSections}/{requiredSections.length}
          </strong>
        </div>

        <div className="resume-review__progress">
          <span
            style={{
              width: `${
                (completedRequiredSections /
                  requiredSections.length) *
                100
              }%`,
            }}
          />
        </div>
      </div>

      <div className="resume-review__sections">
        {sections.map((section) => (
          <article
            className={`resume-review__item ${
              section.complete
                ? "resume-review__item--complete"
                : ""
            }`}
            key={section.number}
          >
            <div className="resume-review__item-number">
              {section.number}
            </div>

            <div className="resume-review__item-content">
              <div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>

              <span
                className={`resume-review__status ${
                  section.complete
                    ? "resume-review__status--complete"
                    : !section.required
                      ? "resume-review__status--optional"
                      : ""
                }`}
              >
                {section.complete
                  ? "Preenchido"
                  : section.required
                    ? "Não preenchido"
                    : "Opcional"}
              </span>
            </div>

            <button
              type="button"
              className="resume-review__edit"
              onClick={() => onEditStep(section.step)}
              disabled={isGenerating}
            >
              Editar
            </button>
          </article>
        ))}
      </div>

      <div className="resume-review__notice">
        <span aria-hidden="true">✓</span>

        <p>
          Você poderá revisar e ajustar seu currículo
          novamente antes de finalizar.
        </p>
      </div>

      <div className="resume-review__actions">
        <button
          type="button"
          className="resume-review__back"
          onClick={onPrevious}
          disabled={isGenerating}
        >
          <span aria-hidden="true">←</span>
          <span>Voltar</span>
        </button>

        <button
          type="button"
          className="resume-review__generate"
          disabled={!requiredSectionsComplete || isGenerating}
          onClick={onGenerate}
        >
          <span>
            {isGenerating ? "Gerando resumo..." : "Gerar currículo"}
          </span>

          <span aria-hidden="true">
            {isGenerating ? "…" : "→"}
          </span>
        </button>
      </div>
    </section>
  );
}
