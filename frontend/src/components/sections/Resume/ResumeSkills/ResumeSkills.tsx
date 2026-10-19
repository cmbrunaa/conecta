import { useState } from "react";

import "./ResumeSkills.css";

import type { ResumeData } from "../../../../pages/Resume/Resume";

type ResumeSkillsProps = {
  data: ResumeData;
  onChange: React.Dispatch<React.SetStateAction<ResumeData>>;
  onNext: () => void;
  onPrevious: () => void;
};

export function ResumeSkills({
  data,
  onChange,
  onNext,
  onPrevious,
}: ResumeSkillsProps) {
  const [skill, setSkill] = useState("");

  const handleAddSkill = () => {
    const newSkill = skill.trim();

    if (!newSkill) {
      return;
    }

    const alreadyExists = data.skills.some(
      (item) =>
        item.toLowerCase() === newSkill.toLowerCase()
    );

    if (alreadyExists) {
      setSkill("");
      return;
    }

    onChange((current) => ({
      ...current,
      skills: [...current.skills, newSkill],
    }));

    setSkill("");
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    onChange((current) => ({
      ...current,
      skills: current.skills.filter(
        (item) => item !== skillToRemove
      ),
    }));
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <section className="resume-skills">
      <div className="resume-skills__header">
        <div className="resume-skills__number">
          03
        </div>

        <div>
          <span className="resume-skills__eyebrow">
            ETAPA 03
          </span>

          <h2 className="resume-skills__title">
            Habilidades
          </h2>

          <p className="resume-skills__description">
            Adicione conhecimentos e habilidades que você
            possui e que podem contribuir para sua atuação
            profissional.
          </p>
        </div>
      </div>

      <div className="resume-skills__content">
        <div className="resume-skills__field">
          <label htmlFor="skill">
            Adicionar habilidade
          </label>

          <div className="resume-skills__input-row">
            <input
              id="skill"
              type="text"
              placeholder="Ex.: JavaScript"
              value={skill}
              onChange={(event) =>
                setSkill(event.target.value)
              }
              onKeyDown={handleKeyDown}
            />

            <button
              type="button"
              className="resume-skills__add"
              onClick={handleAddSkill}
            >
              Adicionar
            </button>
          </div>

          <p className="resume-skills__hint">
            Pressione Enter ou clique em Adicionar.
          </p>
        </div>

        <div className="resume-skills__list">
          <div className="resume-skills__list-header">
            <span>
              SUAS HABILIDADES
            </span>

            <small>
              {data.skills.length}
              {data.skills.length === 1
                ? " habilidade"
                : " habilidades"}
            </small>
          </div>

          {data.skills.length > 0 ? (
            <div className="resume-skills__tags">
              {data.skills.map((item) => (
                <div
                  className="resume-skills__tag"
                  key={item}
                >
                  <span>{item}</span>

                  <button
                    type="button"
                    aria-label={`Remover ${item}`}
                    onClick={() =>
                      handleRemoveSkill(item)
                    }
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="resume-skills__empty">
              <span>
                +
              </span>

              <p>
                Suas habilidades aparecerão aqui.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="resume-skills__actions">
        <button
          type="button"
          className="resume-skills__back"
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
          className="resume-skills__continue"
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