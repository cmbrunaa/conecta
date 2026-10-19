import "./ResumePersonalData.css";

import type { ResumeData } from "../../../../pages/Resume/Resume";

type ResumePersonalDataProps = {
  data: ResumeData;
  onChange: React.Dispatch<React.SetStateAction<ResumeData>>;
  onNext: () => void;
};

export function ResumePersonalData({
  data,
  onChange,
  onNext,
}: ResumePersonalDataProps) {
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);

    if (numbers.length <= 2) {
      return numbers;
    }

    if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }

    return `(${numbers.slice(0, 2)}) ${numbers.slice(
      2,
      7
    )}-${numbers.slice(7)}`;
  };

  return (
    <section className="resume-personal-data">
      <div className="resume-personal-data__header">
        <span className="resume-personal-data__number">
          01
        </span>

        <div>
          <span className="resume-personal-data__eyebrow">
            PRIMEIRO PASSO
          </span>

          <h2 className="resume-personal-data__title">
            Seus dados
          </h2>

          <p className="resume-personal-data__description">
            Comece contando um pouco sobre você.
          </p>
        </div>
      </div>

      <div className="resume-personal-data__fields">
        <div className="resume-personal-data__field">
          <label htmlFor="fullName">
            Nome completo
          </label>

          <input
            id="fullName"
            type="text"
            placeholder="Ex.: Maria Silva"
            value={data.fullName}
            onChange={(event) =>
              onChange((current) => ({
                ...current,
                fullName: event.target.value,
              }))
            }
          />
        </div>

        <div className="resume-personal-data__field">
          <label htmlFor="email">
            E-mail
          </label>

          <input
            id="email"
            type="email"
            placeholder="seuemail@email.com"
            value={data.email}
            onChange={(event) =>
              onChange((current) => ({
                ...current,
                email: event.target.value,
              }))
            }
          />
        </div>

        <div className="resume-personal-data__row">
          <div className="resume-personal-data__field">
            <label htmlFor="phone">
              Telefone
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="(41) 99999-9999"
              value={data.phone}
              onChange={(event) =>
                onChange((current) => ({
                  ...current,
                  phone: formatPhone(
                    event.target.value
                  ),
                }))
              }
            />
          </div>

          <div className="resume-personal-data__field">
            <label htmlFor="city">
              Cidade / UF
            </label>

            <input
              id="city"
              type="text"
              placeholder="Curitiba - PR"
              value={data.city}
              onChange={(event) =>
                onChange((current) => ({
                  ...current,
                  city: event.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className="resume-personal-data__optional">
          <div className="resume-personal-data__optional-header">
            <span>LINKS PROFISSIONAIS</span>

            <small>OPCIONAL</small>
          </div>

          <p className="resume-personal-data__optional-description">
            Adicione apenas os links que você possui.
          </p>

          <div className="resume-personal-data__field">
            <label htmlFor="linkedin">
              LinkedIn
            </label>

            <input
              id="linkedin"
              type="url"
              placeholder="linkedin.com/in/seu-nome"
              value={data.linkedin}
              onChange={(event) =>
                onChange((current) => ({
                  ...current,
                  linkedin: event.target.value,
                }))
              }
            />
          </div>

          <div className="resume-personal-data__field">
            <label htmlFor="github">
              GitHub
            </label>

            <input
              id="github"
              type="url"
              placeholder="github.com/seu-usuario"
              value={data.github}
              onChange={(event) =>
                onChange((current) => ({
                  ...current,
                  github: event.target.value,
                }))
              }
            />
          </div>

          <div className="resume-personal-data__field">
            <label htmlFor="portfolio">
              Portfólio / site pessoal
            </label>

            <input
              id="portfolio"
              type="url"
              placeholder="seusite.com.br"
              value={data.portfolio}
              onChange={(event) =>
                onChange((current) => ({
                  ...current,
                  portfolio: event.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="resume-personal-data__continue"
        onClick={onNext}
      >
        Continuar

        <span aria-hidden="true">
          →
        </span>
      </button>
    </section>
  );
}