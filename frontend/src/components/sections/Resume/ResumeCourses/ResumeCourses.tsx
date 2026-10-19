import { useState } from "react";

import "./ResumeCourses.css";

import type {
  ResumeCourse,
  ResumeData,
} from "../../../../pages/Resume/Resume";

type ResumeCoursesProps = {
  data: ResumeData;
  onChange: React.Dispatch<React.SetStateAction<ResumeData>>;
  onNext: () => void;
  onPrevious: () => void;
};

export function ResumeCourses({
  data,
  onChange,
  onNext,
  onPrevious,
}: ResumeCoursesProps) {
  const createEmptyCourse = (): ResumeCourse => ({
    id: "",
    name: "",
    institution: "",
    year: "",
    link: "",
  });

  const [course, setCourse] =
    useState<ResumeCourse>(
      createEmptyCourse()
    );

  const [isAdding, setIsAdding] = useState(
    data.courses.length === 0
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setCourse((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleAddCourse = () => {
    if (
      !course.name.trim() ||
      !course.institution.trim()
    ) {
      return;
    }

    const newCourse: ResumeCourse = {
      ...course,
      id: crypto.randomUUID(),
      name: course.name.trim(),
      institution: course.institution.trim(),
      year: course.year.trim(),
      link: course.link.trim(),
    };

    onChange((current) => ({
      ...current,
      courses: [
        ...current.courses,
        newCourse,
      ],
    }));

    setCourse(createEmptyCourse());
    setIsAdding(false);
  };

  const handleRemoveCourse = (
    courseId: string
  ) => {
    onChange((current) => {
      const courses = current.courses.filter(
        (item) => item.id !== courseId
      );

      if (courses.length === 0) {
        setIsAdding(true);
      }

      return {
        ...current,
        courses,
      };
    });
  };

  const handleCancel = () => {
    setCourse(createEmptyCourse());
    setIsAdding(false);
  };

  return (
    <section className="resume-courses">
      <div className="resume-courses__header">
        <div className="resume-courses__number">
          05
        </div>

        <div>
          <span className="resume-courses__eyebrow">
            ETAPA 05
          </span>

          <h2 className="resume-courses__title">
            Cursos e certificados
          </h2>

          <p className="resume-courses__description">
            Adicione cursos, certificações e outras
            formações complementares.
          </p>
        </div>
      </div>

      <div className="resume-courses__content">
        {data.courses.length > 0 && (
          <div className="resume-courses__saved">
            <div className="resume-courses__list-header">
              <span>
                CURSOS ADICIONADOS
              </span>

              <small>
                {data.courses.length}
                {data.courses.length === 1
                  ? " curso"
                  : " cursos"}
              </small>
            </div>

            <div className="resume-courses__list">
              {data.courses.map((item) => (
                <article
                  className="resume-courses__item"
                  key={item.id}
                >
                  <div className="resume-courses__item-content">
                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      {item.institution}
                    </p>

                    {(item.year ||
                      item.link) && (
                      <span>
                        {item.year}

                        {item.year &&
                          item.link &&
                          " • "}

                        {item.link
                          ? "Certificado disponível"
                          : ""}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="resume-courses__remove"
                    onClick={() =>
                      handleRemoveCourse(
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
          <div className="resume-courses__form">
            <div className="resume-courses__form-header">
              <div>
                <span>
                  {data.courses.length > 0
                    ? "NOVO CURSO"
                    : "ADICIONE SEU CURSO"}
                </span>

                <p>
                  Preencha as informações do curso ou
                  certificado.
                </p>
              </div>
            </div>

            <div className="resume-courses__fields">
              <div className="resume-courses__field">
                <label htmlFor="course-name">
                  Nome do curso
                </label>

                <input
                  id="course-name"
                  name="name"
                  type="text"
                  placeholder="Ex.: Formação React"
                  value={course.name}
                  onChange={handleChange}
                />
              </div>

              <div className="resume-courses__field">
                <label htmlFor="course-institution">
                  Instituição / plataforma
                </label>

                <input
                  id="course-institution"
                  name="institution"
                  type="text"
                  placeholder="Ex.: Alura, Fundação Bradesco"
                  value={course.institution}
                  onChange={handleChange}
                />
              </div>

              <div className="resume-courses__row">
                <div className="resume-courses__field">
                  <label htmlFor="course-year">
                    Ano
                  </label>

                  <input
                    id="course-year"
                    name="year"
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="Ex.: 2026"
                    value={course.year}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="resume-courses__field">
                <label htmlFor="course-link">
                  Link do certificado
                  <span>OPCIONAL</span>
                </label>

                <input
                  id="course-link"
                  name="link"
                  type="url"
                  placeholder="https://..."
                  value={course.link}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="resume-courses__form-actions">
              <button
                type="button"
                className="resume-courses__cancel"
                onClick={handleCancel}
              >
                Cancelar
              </button>

              <button
                type="button"
                className="resume-courses__add"
                onClick={handleAddCourse}
              >
                Adicionar curso
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="resume-courses__new"
            onClick={() => setIsAdding(true)}
          >
            <span>
              +
            </span>

            <div>
              <strong>
                Adicionar outro curso
              </strong>

              <small>
                Você pode adicionar quantos cursos quiser.
              </small>
            </div>
          </button>
        )}
      </div>

      <div className="resume-courses__actions">
        <button
          type="button"
          className="resume-courses__back"
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
          className="resume-courses__continue"
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