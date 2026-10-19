import { useState } from "react";

import "./ResumeProjects.css";

import type {
  ResumeData,
  ResumeProject,
} from "../../../../pages/Resume/Resume";

type ResumeProjectsProps = {
  data: ResumeData;
  onChange: React.Dispatch<React.SetStateAction<ResumeData>>;
  onNext: () => void;
  onPrevious: () => void;
};

export function ResumeProjects({
  data,
  onChange,
  onNext,
  onPrevious,
}: ResumeProjectsProps) {
  const [project, setProject] = useState<ResumeProject>({
    id: "",
    name: "",
    description: "",
    technologies: "",
    link: "",
  });

  const [isAdding, setIsAdding] = useState(
    data.projects.length === 0
  );

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setProject((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleAddProject = () => {
    if (!project.name.trim()) {
      return;
    }

    const newProject: ResumeProject = {
      ...project,
      id: crypto.randomUUID(),
      name: project.name.trim(),
      description: project.description.trim(),
      technologies: project.technologies.trim(),
      link: project.link.trim(),
    };

    onChange((current) => ({
      ...current,
      projects: [...current.projects, newProject],
    }));

    setProject({
      id: "",
      name: "",
      description: "",
      technologies: "",
      link: "",
    });

    setIsAdding(false);
  };

  const handleRemoveProject = (
    projectId: string
  ) => {
    onChange((current) => ({
      ...current,
      projects: current.projects.filter(
        (item) => item.id !== projectId
      ),
    }));
  };

  const handleCancel = () => {
    setProject({
      id: "",
      name: "",
      description: "",
      technologies: "",
      link: "",
    });

    setIsAdding(false);
  };

  return (
    <section className="resume-projects">
      <div className="resume-projects__header">
        <div className="resume-projects__number">
          04
        </div>

        <div>
          <span className="resume-projects__eyebrow">
            ETAPA 04
          </span>

          <h2 className="resume-projects__title">
            Seus projetos
          </h2>

          <p className="resume-projects__description">
            Mostre projetos acadêmicos, pessoais ou profissionais
            que ajudam a demonstrar o que você sabe fazer.
          </p>
        </div>
      </div>

      <div className="resume-projects__content">
        {data.projects.length > 0 && (
          <div className="resume-projects__saved">
            <div className="resume-projects__list-header">
              <span>
                PROJETOS ADICIONADOS
              </span>

              <small>
                {data.projects.length}
                {data.projects.length === 1
                  ? " projeto"
                  : " projetos"}
              </small>
            </div>

            <div className="resume-projects__list">
              {data.projects.map((item) => (
                <article
                  className="resume-projects__item"
                  key={item.id}
                >
                  <div className="resume-projects__item-content">
                    <h3>
                      {item.name}
                    </h3>

                    {item.description && (
                      <p>
                        {item.description}
                      </p>
                    )}

                    {item.technologies && (
                      <span>
                        {item.technologies}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="resume-projects__remove"
                    onClick={() =>
                      handleRemoveProject(item.id)
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
          <div className="resume-projects__form">
            <div className="resume-projects__form-header">
              <div>
                <span>
                  {data.projects.length > 0
                    ? "NOVO PROJETO"
                    : "ADICIONE SEU PROJETO"}
                </span>

                <p>
                  Preencha as informações do projeto.
                </p>
              </div>
            </div>

            <div className="resume-projects__fields">
              <div className="resume-projects__field">
                <label htmlFor="project-name">
                  Nome do projeto
                </label>

                <input
                  id="project-name"
                  name="name"
                  type="text"
                  placeholder="Ex.: Sistema de chamados"
                  value={project.name}
                  onChange={handleChange}
                />
              </div>

              <div className="resume-projects__field">
                <label htmlFor="project-description">
                  Descrição
                </label>

                <textarea
                  id="project-description"
                  name="description"
                  placeholder="Explique brevemente o que você desenvolveu."
                  value={project.description}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <div className="resume-projects__field">
                <label htmlFor="project-technologies">
                  Tecnologias utilizadas
                </label>

                <input
                  id="project-technologies"
                  name="technologies"
                  type="text"
                  placeholder="Ex.: React, TypeScript, Node.js"
                  value={project.technologies}
                  onChange={handleChange}
                />
              </div>

              <div className="resume-projects__field">
                <label htmlFor="project-link">
                  Link do projeto
                  <span>OPCIONAL</span>
                </label>

                <input
                  id="project-link"
                  name="link"
                  type="url"
                  placeholder="github.com/seu-usuario/projeto"
                  value={project.link}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="resume-projects__form-actions">
              <button
                type="button"
                className="resume-projects__cancel"
                onClick={handleCancel}
              >
                Cancelar
              </button>

              <button
                type="button"
                className="resume-projects__add"
                onClick={handleAddProject}
              >
                Adicionar projeto
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="resume-projects__new"
            onClick={() => setIsAdding(true)}
          >
            <span>
              +
            </span>

            <div>
              <strong>
                Adicionar outro projeto
              </strong>

              <small>
                Você pode adicionar quantos projetos quiser.
              </small>
            </div>
          </button>
        )}
      </div>

      <div className="resume-projects__actions">
        <button
          type="button"
          className="resume-projects__back"
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
          className="resume-projects__continue"
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