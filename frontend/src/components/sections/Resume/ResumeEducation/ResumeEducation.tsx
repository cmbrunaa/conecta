import { useState } from "react";

import "./ResumeEducation.css";

import type {
  ResumeData,
  ResumeEducation as ResumeEducationType,
} from "../../../../pages/Resume/Resume";

type ResumeEducationProps = {
  data: ResumeData;
  onChange: React.Dispatch<React.SetStateAction<ResumeData>>;
  onNext: () => void;
  onPrevious: () => void;
};

export function ResumeEducation({
  data,
  onChange,
  onNext,
  onPrevious,
}: ResumeEducationProps) {
  const createEmptyEducation = (): ResumeEducationType => ({
    id: "",
    course: "",
    institution: "",
    status: "",
    year: "",
  });

  const [education, setEducation] =
    useState<ResumeEducationType>(
      createEmptyEducation()
    );

  const [isAdding, setIsAdding] = useState(
    data.educations.length === 0
  );

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setEducation((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleAddEducation = () => {
    if (
      !education.course.trim() ||
      !education.institution.trim()
    ) {
      return;
    }

    const newEducation: ResumeEducationType = {
      ...education,
      id: crypto.randomUUID(),
      course: education.course.trim(),
      institution: education.institution.trim(),
      status: education.status.trim(),
      year: education.year.trim(),
    };

    onChange((current) => ({
      ...current,
      educations: [
        ...current.educations,
        newEducation,
      ],
    }));

    setEducation(createEmptyEducation());
    setIsAdding(false);
  };

const handleRemoveEducation = (
  educationId: string
) => {
  onChange((current) => {
    const educations = current.educations.filter(
      (item) => item.id !== educationId
    );

    if (educations.length === 0) {
      setIsAdding(true);
    }

    return {
      ...current,
      educations,
    };
  });
};
  const handleCancel = () => {
    setEducation(createEmptyEducation());
    setIsAdding(false);
  };

  return (
    <section className="resume-education">
      <div className="resume-education__header">
        <div className="resume-education__number">
          02
        </div>

        <div>
          <span className="resume-education__eyebrow">
            ETAPA 02
          </span>

          <h2 className="resume-education__title">
            Formação acadêmica
          </h2>

          <p className="resume-education__description">
            Adicione sua formação acadêmica, técnica ou
            profissional.
          </p>
        </div>
      </div>

      <div className="resume-education__content">
        {data.educations.length > 0 && (
          <div className="resume-education__saved">
            <div className="resume-education__list-header">
              <span>
                FORMAÇÕES ADICIONADAS
              </span>

              <small>
                {data.educations.length}
                {data.educations.length === 1
                  ? " formação"
                  : " formações"}
              </small>
            </div>

            <div className="resume-education__list">
              {data.educations.map((item) => (
                <article
                  className="resume-education__item"
                  key={item.id}
                >
                  <div className="resume-education__item-content">
                    <h3>
                      {item.course}
                    </h3>

                    <p>
                      {item.institution}
                    </p>

                    {(item.status ||
                      item.year) && (
                      <span>
                        {item.status}

                        {item.status &&
                          item.year &&
                          " • "}

                        {item.year}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="resume-education__remove"
                    onClick={() =>
                      handleRemoveEducation(
                        item.id
                      )
                    }
                  >
                    Remover
                  </button>
                </article>
              ))}
            </div>
          </div>
        )}

        {isAdding ? (
          <div className="resume-education__form">
            <div className="resume-education__form-header">
              <div>
                <span>
                  {data.educations.length > 0
                    ? "NOVA FORMAÇÃO"
                    : "ADICIONE SUA FORMAÇÃO"}
                </span>

                <p>
                  Preencha as informações da formação.
                </p>
              </div>
            </div>

            <div className="resume-education__fields">
              <div className="resume-education__field">
                <label htmlFor="education-course">
                  Curso / formação
                </label>

                <input
                  id="education-course"
                  name="course"
                  type="text"
                  placeholder="Ex.: Análise e Desenvolvimento de Sistemas"
                  value={education.course}
                  onChange={handleChange}
                />
              </div>

              <div className="resume-education__field">
                <label htmlFor="education-institution">
                  Instituição
                </label>

                <input
                  id="education-institution"
                  name="institution"
                  type="text"
                  placeholder="Ex.: Centro Universitário UniOpet"
                  value={education.institution}
                  onChange={handleChange}
                />
              </div>

              <div className="resume-education__row">
                <div className="resume-education__field">
                  <label htmlFor="education-status">
                    Situação
                  </label>

                  <select
                    id="education-status"
                    name="status"
                    value={education.status}
                    onChange={handleChange}
                  >
                    <option value="">
                      Selecione
                    </option>

                    <option value="Em andamento">
                      Em andamento
                    </option>

                    <option value="Concluído">
                      Concluído
                    </option>

                    <option value="Trancado">
                      Trancado
                    </option>
                  </select>
                </div>

                <div className="resume-education__field">
                  <label htmlFor="education-year">
                    Ano
                  </label>

                  <input
                    id="education-year"
                    name="year"
                    type="text"
                    inputMode="numeric"
                    placeholder="Ex.: 2026"
                    maxLength={4}
                    value={education.year}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="resume-education__form-actions">
              <button
                type="button"
                className="resume-education__cancel"
                onClick={handleCancel}
              >
                Cancelar
              </button>

              <button
                type="button"
                className="resume-education__add"
                onClick={handleAddEducation}
              >
                Adicionar formação
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="resume-education__new"
            onClick={() => setIsAdding(true)}
          >
            <span>
              +
            </span>

            <div>
              <strong>
                Adicionar outra formação
              </strong>

              <small>
                Você pode adicionar quantas formações
                quiser.
              </small>
            </div>
          </button>
        )}
      </div>

      <div className="resume-education__actions">
        <button
          type="button"
          className="resume-education__back"
          onClick={onPrevious}
        >
          <span aria-hidden="true">
            ←
          </span>

          <span>
            Voltar
          </span>
        </button>

        <button
          type="button"
          className="resume-education__continue"
          onClick={onNext}
        >
          <span>
            Continuar
          </span>

          <span aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </section>
  );
}